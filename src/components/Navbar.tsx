import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-3xl font-extrabold text-primary">КидсЭдукейшн</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-base font-medium hover:text-primary transition-colors">
            Главная
          </Link>
          <Link to="/about" className="text-base font-medium hover:text-primary transition-colors">
            О нас
          </Link>
          <Link to="/franchise" className="text-base font-medium hover:text-primary transition-colors">
            Франшиза
          </Link>
          <Link to="/programs" className="text-base font-medium hover:text-primary transition-colors">
            Программы
          </Link>
          <Link to="/contacts" className="text-base font-medium hover:text-primary transition-colors">
            Контакты
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" className="rounded-full">
            Войти
          </Button>
          <Button className="rounded-full">
            Получить франшизу
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-100"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="container px-4 py-3 flex flex-col space-y-4">
            <Link
              to="/"
              className="py-2 text-base font-medium hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Главная
            </Link>
            <Link
              to="/about"
              className="py-2 text-base font-medium hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              О нас
            </Link>
            <Link
              to="/franchise"
              className="py-2 text-base font-medium hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Франшиза
            </Link>
            <Link
              to="/programs"
              className="py-2 text-base font-medium hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Программы
            </Link>
            <Link
              to="/contacts"
              className="py-2 text-base font-medium hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Контакты
            </Link>
            <div className="flex flex-col gap-3 pt-3">
              <Button variant="outline" className="w-full rounded-full">
                Войти
              </Button>
              <Button className="w-full rounded-full">
                Получить франшизу
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
