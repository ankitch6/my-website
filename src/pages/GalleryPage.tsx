import Navigation from "@/components/Navigation";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const GalleryPage = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <Gallery />
      </div>
      <Footer />
    </main>
  );
};

export default GalleryPage;
