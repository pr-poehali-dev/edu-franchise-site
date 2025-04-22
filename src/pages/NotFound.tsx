import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8 text-primary">
            <span className="text-9xl font-bold">404</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Страница не найдена</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto">
            Извините, страница, которую вы ищете, не существует или была перемещена.
          </p>
          <Link to="/">
            <Button size="lg" className="rounded-full px-8">
              Вернуться на главную
            </Button>
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
