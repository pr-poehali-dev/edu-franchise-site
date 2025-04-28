import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-primary text-white">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-white rounded-full p-1 w-12 h-12 flex items-center justify-center">
            <span className="text-3xl font-extrabold text-primary">K</span>
          </div>
          <span className="text-xl font-bold">КидсЭдукейшн</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/#about" className="text-base font-medium hover:text-secondary transition-colors">
            О нас
          </Link>
          <Link to="/#results" className="text-base font-medium hover:text-secondary transition-colors">
            Результаты
          </Link>
          <Link to="/#reviews" className="text-base font-medium hover:text-secondary transition-colors">
            Отзывы
          </Link>
          <Link to="/#cost" className="text-base font-medium hover:text-secondary transition-colors">
            Стоимость
          </Link>
          <Link to="/#contacts" className="text-base font-medium hover:text-secondary transition-colors">
            Контакты
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <span className="text-xl font-semibold">+7 (800) 555-35-35</span>
          <Button className="bg-white text-primary hover:bg-secondary hover:text-black rounded-full">
            Получить франшизу
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md text-white hover:bg-primary-foreground/10"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-primary border-t border-white/20">
          <div className="container px-4 py-3 flex flex-col space-y-4">
            <Link
              to="/#about"
              className="py-2 text-base font-medium hover:text-secondary"
              onClick={() => setIsOpen(false)}
            >
              О нас
            </Link>
            <Link
              to="/#results"
              className="py-2 text-base font-medium hover:text-secondary"
              onClick={() => setIsOpen(false)}
            >
              Результаты
            </Link>
            <Link
              to="/#reviews"
              className="py-2 text-base font-medium hover:text-secondary"
              onClick={() => setIsOpen(false)}
            >
              Отзывы
            </Link>
            <Link
              to="/#cost"
              className="py-2 text-base font-medium hover:text-secondary"
              onClick={() => setIsOpen(false)}
            >
              Стоимость
            </Link>
            <Link
              to="/#contacts"
              className="py-2 text-base font-medium hover:text-secondary"
              onClick={() => setIsOpen(false)}
            >
              Контакты
            </Link>
            <div className="flex items-center gap-2 py-2">
              <Phone size={18} />
              <span className="font-medium">+7 (800) 555-35-35</span>
            </div>
            <Button className="w-full bg-white text-primary hover:bg-secondary hover:text-black rounded-full">
              Получить франшизу
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
