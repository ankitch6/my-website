import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Camera, Instagram } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Photo {
  id: number;
  src: string;
  alt: string;
  category: "unsplash" | "instagram";
}

const photos: Photo[] = [
  // Unsplash photos - using placeholder photography images
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    alt: "Mountain landscape at golden hour",
    category: "unsplash",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
    alt: "Serene nature scene with sunlight",
    category: "unsplash",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    alt: "Peaceful lake reflection",
    category: "unsplash",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80",
    alt: "Rolling green hills",
    category: "unsplash",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80",
    alt: "Waterfall in forest",
    category: "unsplash",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
    alt: "Misty mountain valley",
    category: "unsplash",
  },
  // Instagram-style photos
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80",
    alt: "Italian coastal village",
    category: "instagram",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
    alt: "Paris cityscape",
    category: "instagram",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    alt: "Tropical paradise",
    category: "instagram",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    alt: "Urban architecture",
    category: "instagram",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=800&q=80",
    alt: "Night sky photography",
    category: "instagram",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1518173946687-a4c036bc8bfb?w=800&q=80",
    alt: "Coffee and morning light",
    category: "instagram",
  },
];

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [filter, setFilter] = useState<"all" | "unsplash" | "instagram">("all");

  const filteredPhotos =
    filter === "all" ? photos : photos.filter((p) => p.category === filter);

  const currentIndex = selectedPhoto
    ? filteredPhotos.findIndex((p) => p.id === selectedPhoto.id)
    : -1;

  const navigatePhoto = (direction: "prev" | "next") => {
    if (currentIndex === -1) return;
    const newIndex =
      direction === "prev"
        ? (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length
        : (currentIndex + 1) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[newIndex]);
  };

  return (
    <section id="gallery" className="py-24 bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium tracking-wide uppercase bg-rose-light/50 text-primary rounded-full border border-primary/20">
            Through My Lens
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-4">
            Photo Gallery
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Capturing moments and perspectives from my travels and everyday life.
            Follow my journey on{" "}
            <a
              href="https://unsplash.com/@ankit_choudhary"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Unsplash
            </a>{" "}
            and{" "}
            <a
              href="https://instagram.com/ankit_on_lens"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Instagram
            </a>
            .
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-3 mb-10"
        >
          {[
            { key: "all", label: "All", icon: null },
            { key: "unsplash", label: "Unsplash", icon: Camera },
            { key: "instagram", label: "Instagram", icon: Instagram },
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setFilter(key as typeof filter)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === key
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "bg-card text-muted-foreground hover:bg-secondary border border-border"
              }`}
            >
              {Icon && <Icon className="w-4 h-4" />}
              {label}
            </button>
          ))}
        </motion.div>

        {/* Photo Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedPhoto(photo)}
                className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-primary-foreground text-sm font-medium truncate">
                    {photo.alt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary-foreground/80 text-xs mt-1">
                    {photo.category === "unsplash" ? (
                      <Camera className="w-3 h-3" />
                    ) : (
                      <Instagram className="w-3 h-3" />
                    )}
                    {photo.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          <a
            href="https://unsplash.com/@ankit_choudhary"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-card text-foreground rounded-full font-medium transition-all duration-300 hover:shadow-elevated border border-border hover:border-primary/30"
          >
            <Camera className="w-5 h-5" />
            View on Unsplash
          </a>
          <a
            href="https://instagram.com/ankit_on_lens"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-card text-foreground rounded-full font-medium transition-all duration-300 hover:shadow-elevated border border-border hover:border-primary/30"
          >
            <Instagram className="w-5 h-5" />
            Follow on Instagram
          </a>
        </motion.div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-5xl w-full p-0 bg-background/95 backdrop-blur-xl border-border overflow-hidden">
          <AnimatePresence mode="wait">
            {selectedPhoto && (
              <motion.div
                key={selectedPhoto.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <img
                  src={selectedPhoto.src.replace("w=800", "w=1600")}
                  alt={selectedPhoto.alt}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
                  <p className="text-foreground font-medium text-lg">
                    {selectedPhoto.alt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm mt-1">
                    {selectedPhoto.category === "unsplash" ? (
                      <Camera className="w-4 h-4" />
                    ) : (
                      <Instagram className="w-4 h-4" />
                    )}
                    {selectedPhoto.category === "unsplash"
                      ? "Unsplash"
                      : "Instagram"}
                  </span>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigatePhoto("prev");
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors border border-border"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigatePhoto("next");
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors border border-border"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
