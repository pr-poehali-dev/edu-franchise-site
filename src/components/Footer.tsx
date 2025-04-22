import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">КидсЭдукейшн</h3>
            <p className="mb-4">
              Франшиза образовательной организации для детей дошкольного возраста.
              Мы помогаем детям расти и развиваться в увлекательной игровой форме.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Карта сайта</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-secondary transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-secondary transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/franchise" className="hover:text-secondary transition-colors">
                  Франшиза
                </Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-secondary transition-colors">
                  Программы
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="hover:text-secondary transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <address className="not-italic space-y-2">
              <p>г. Москва, ул. Образовательная, 123</p>
              <p>Телефон: <a href="tel:+74951234567" className="hover:text-secondary transition-colors">+7 (495) 123-45-67</a></p>
              <p>Email: <a href="mailto:info@kidsed.ru" className="hover:text-secondary transition-colors">info@kidsed.ru</a></p>
            </address>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Время работы</h3>
            <ul className="space-y-2">
              <li>Понедельник - Пятница: 8:00 - 19:00</li>
              <li>Суббота: 9:00 - 16:00</li>
              <li>Воскресенье: Выходной</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-white/20 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} КидсЭдукейшн. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
