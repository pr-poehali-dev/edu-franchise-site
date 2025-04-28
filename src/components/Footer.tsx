import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook, 
  Youtube, 
  ArrowRight 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img 
                src="https://cdn.poehali.dev/files/cd3d646b-c40b-4b51-aae1-c9700e9bd5d0.png" 
                alt="Система Буракова" 
                className="h-12"
              />
            </Link>
            <p className="text-white/80 mb-4">
              Франшиза сети детских образовательных центров для детей от 1 до 7 лет
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/#about" className="text-white/80 hover:text-white transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/#results" className="text-white/80 hover:text-white transition-colors">
                  Результаты
                </Link>
              </li>
              <li>
                <Link to="/#reviews" className="text-white/80 hover:text-white transition-colors">
                  Отзывы
                </Link>
              </li>
              <li>
                <Link to="/#cost" className="text-white/80 hover:text-white transition-colors">
                  Стоимость
                </Link>
              </li>
              <li>
                <Link to="/#contacts" className="text-white/80 hover:text-white transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={20} className="shrink-0 mt-1" />
                <span>+7 (800) 555-35-35</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="shrink-0 mt-1" />
                <span>franchise@sistemburakova.ru</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="shrink-0 mt-1" />
                <span>г. Москва, ул. Образовательная, д. 123, офис 456</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Хотите узнать больше?</h3>
            <p className="text-white/80 mb-4">
              Оставьте заявку и получите подробную презентацию о нашей франшизе
            </p>
            <Button className="w-full bg-white text-primary hover:bg-secondary hover:text-black rounded-full flex items-center justify-center gap-2">
              Получить презентацию
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>© {new Date().getFullYear()} Система Буракова. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
