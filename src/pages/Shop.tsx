import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, ShoppingBag, Send, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface PrintSize {
  label: string;
  price: string;
}

interface PrintPhoto {
  id: number;
  src: string;
  title: string;
  description: string;
  category: string;
  sizes: PrintSize[];
}

const printPhotos: PrintPhoto[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1691917510639-ff3861ac903b?w=800&q=80",
    title: "Forest Canopy",
    description: "Looking up through towering trees — a study in natural geometry and light.",
    category: "Nature",
    sizes: [
      { label: '8×10"', price: "$45" },
      { label: '16×20"', price: "$95" },
      { label: '24×36"', price: "$175" },
    ],
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1644742671220-8dc233aa20de?w=800&q=80",
    title: "Garden Bloom",
    description: "A delicate pink and white flower captured in soft afternoon light.",
    category: "Botanical",
    sizes: [
      { label: '8×10"', price: "$40" },
      { label: '16×20"', price: "$85" },
      { label: '24×36"', price: "$160" },
    ],
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1644742671039-e7ecd9c1e8e8?w=800&q=80",
    title: "White Petals",
    description: "A large white flower set against lush green foliage.",
    category: "Botanical",
    sizes: [
      { label: '8×10"', price: "$40" },
      { label: '16×20"', price: "$85" },
      { label: '24×36"', price: "$160" },
    ],
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1644742670557-3536e965539a?w=800&q=80",
    title: "Color Burst",
    description: "Vivid close-up of colorful flowers in full bloom.",
    category: "Botanical",
    sizes: [
      { label: '8×10"', price: "$45" },
      { label: '16×20"', price: "$95" },
      { label: '24×36"', price: "$175" },
    ],
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1639484800974-73482b1f0814?w=800&q=80",
    title: "Urban Lines",
    description: "Geometric patterns in modern architecture reaching skyward.",
    category: "Architecture",
    sizes: [
      { label: '8×10"', price: "$50" },
      { label: '16×20"', price: "$110" },
      { label: '24×36"', price: "$195" },
    ],
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1644742670535-f9da5920531f?w=800&q=80",
    title: "Purple Dream",
    description: "A striking purple flower surrounded by fresh green leaves.",
    category: "Botanical",
    sizes: [
      { label: '8×10"', price: "$40" },
      { label: '16×20"', price: "$85" },
      { label: '24×36"', price: "$160" },
    ],
  },
];

const Shop = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<PrintPhoto | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const { toast } = useToast();

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    toast({
      title: "Inquiry sent!",
      description: `Thanks ${name}! I'll get back to you about "${selectedPhoto?.title}" soon.`,
    });
    setName("");
    setEmail("");
    setMessage("");
    setSelectedSize("");
    setSelectedPhoto(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-medium tracking-wide uppercase bg-accent/10 text-accent rounded-full border border-accent/20">
              <ShoppingBag className="w-4 h-4" />
              Prints & Collections
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-medium mb-4">
              Own a Piece of the <span className="text-gradient">Journey</span>
            </h1>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
              Fine art prints available in multiple sizes. Each photograph is printed on
              archival-quality paper with museum-grade inks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {printPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => {
                  setSelectedPhoto(photo);
                  setSelectedSize(photo.sizes[0].label);
                }}
                className="group glass-card rounded-2xl overflow-hidden cursor-pointer hover:shadow-elevated transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium uppercase tracking-wider text-accent">
                    {photo.category}
                  </span>
                  <h3 className="font-display text-xl font-medium mt-1 mb-1">
                    {photo.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {photo.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      From <span className="text-foreground font-semibold">{photo.sizes[0].price}</span>
                    </span>
                    <span className="text-xs text-primary font-medium">
                      {photo.sizes.length} sizes available
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Unsplash CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-16"
          >
            <p className="text-muted-foreground mb-4">
              Explore more of my photography on Unsplash
            </p>
            <a
              href="https://unsplash.com/@ankitch6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium transition-all duration-300 hover:shadow-glow"
            >
              <Camera className="w-5 h-5" />
              View Full Portfolio
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Inquiry Dialog */}
      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-2xl w-full bg-background border-border">
          {selectedPhoto && (
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <img
                  src={selectedPhoto.src.replace("w=800", "w=1200")}
                  alt={selectedPhoto.title}
                  className="w-full aspect-[4/3] object-cover rounded-lg"
                />
                <div className="mt-3">
                  <span className="text-xs font-medium uppercase tracking-wider text-accent">
                    {selectedPhoto.category}
                  </span>
                  <h3 className="font-display text-lg font-medium">
                    {selectedPhoto.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {selectedPhoto.description}
                  </p>
                </div>
              </div>

              <div>
                <DialogHeader>
                  <DialogTitle className="font-display">Inquire About This Print</DialogTitle>
                  <DialogDescription>
                    Select a size and send me a message. I'll respond within 24 hours.
                  </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleInquiry} className="space-y-4 mt-4">
                  {/* Size Selection */}
                  <div className="space-y-2">
                    <Label>Print Size</Label>
                    <div className="flex flex-wrap gap-2">
                      {selectedPhoto.sizes.map((size) => (
                        <button
                          key={size.label}
                          type="button"
                          onClick={() => setSelectedSize(size.label)}
                          className={`px-3 py-2 rounded-lg text-sm font-medium border transition-all ${
                            selectedSize === size.label
                              ? "bg-primary text-primary-foreground border-primary"
                              : "bg-card text-foreground border-border hover:border-primary/50"
                          }`}
                        >
                          {size.label} — {size.price}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message (optional)</Label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Any special requests or questions?"
                      rows={3}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-all duration-300 hover:shadow-glow"
                  >
                    <Send className="w-4 h-4" />
                    Send Inquiry
                  </button>
                </form>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Shop;
