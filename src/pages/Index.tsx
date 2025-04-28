import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  ArrowRight, 
  Check, 
  CheckCircle, 
  Award, 
  Users, 
  Map, 
  Briefcase, 
  BookOpen, 
  Building, 
  Settings, 
  TrendingUp,
  Star,
  Phone,
  Mail,
  MapPin
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Экран 1: Главный экран */}
        <section className="relative py-20 md:py-32 bg-primary overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-gradient-to-l from-primary-foreground/10 to-transparent"></div>
            <div className="absolute left-20 top-20 w-20 h-20 rounded-full bg-secondary/20 animate-float"></div>
            <div className="absolute right-40 top-40 w-12 h-12 rounded-full bg-accent/20 animate-float" style={{animationDelay: '1s'}}></div>
            <div className="absolute left-1/3 bottom-1/4 w-16 h-16 rounded-full bg-primary-foreground/10 animate-float" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="container mx-auto px-4 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                  Откройте свой детский центр по франшизе и зарабатывайте <span className="text-secondary">от 300 000 ₽</span> в месяц
                </h1>
                <p className="text-xl text-white/90 mb-8">
                  Проверенная бизнес-модель с поддержкой на каждом этапе и минимальными рисками
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-primary hover:bg-secondary hover:text-black text-lg rounded-full px-8">
                    Получить франшизу
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg rounded-full px-8">
                    Скачать презентацию
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-accent to-secondary opacity-20 blur-lg"></div>
                <img 
                  src="https://images.unsplash.com/photo-1615627121117-e3278bc8b1db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                  alt="Счастливые дети в образовательном центре" 
                  className="rounded-xl relative z-10 w-full"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Экран 2: Что вы получаете */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Что вы получаете с франшизой КидсЭдукейшн
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Полный комплекс поддержки и материалов для успешного старта вашего бизнеса
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 border-2 border-primary/20 hover:border-primary transition-colors">
                <div className="mb-4">
                  <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <Briefcase className="text-primary w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold">Запуск</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="text-primary shrink-0 mt-1" />
                    <span>Пошаговая инструкция по регистрации и запуску бизнеса</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-primary shrink-0 mt-1" />
                    <span>Рекомендации по работе с надзорными органами</span>
                  </li>
                </ul>
              </Card>
              
              <Card className="p-6 border-2 border-primary/20 hover:border-primary transition-colors">
                <div className="mb-4">
                  <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <BookOpen className="text-primary w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold">Продукт</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="text-primary shrink-0 mt-1" />
                    <span>Уникальные авторские методики обучения</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-primary shrink-0 mt-1" />
                    <span>Проверенные программы для разных возрастов</span>
                  </li>
                </ul>
              </Card>
              
              <Card className="p-6 border-2 border-primary/20 hover:border-primary transition-colors">
                <div className="mb-4">
                  <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <Users className="text-primary w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold">Обучение</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="text-primary shrink-0 mt-1" />
                    <span>Обучение основам управления бизнесом</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-primary shrink-0 mt-1" />
                    <span>Подготовка персонала по фирменным методикам</span>
                  </li>
                </ul>
              </Card>
              
              <Card className="p-6 border-2 border-primary/20 hover:border-primary transition-colors">
                <div className="mb-4">
                  <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <Building className="text-primary w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold">Локация и помещение</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="text-primary shrink-0 mt-1" />
                    <span>Помощь в выборе подходящего помещения</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-primary shrink-0 mt-1" />
                    <span>Смета на оснащение центра и брендбук</span>
                  </li>
                </ul>
              </Card>
              
              <Card className="p-6 border-2 border-primary/20 hover:border-primary transition-colors">
                <div className="mb-4">
                  <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <Settings className="text-primary w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold">Управление</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="text-primary shrink-0 mt-1" />
                    <span>Рекомендации по найму лучших сотрудников</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-primary shrink-0 mt-1" />
                    <span>Должностные инструкции и регламенты работы</span>
                  </li>
                </ul>
              </Card>
              
              <Card className="p-6 border-2 border-primary/20 hover:border-primary transition-colors">
                <div className="mb-4">
                  <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <Map className="text-primary w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold">Маркетинг</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="text-primary shrink-0 mt-1" />
                    <span>Право использования бренда и фирменного стиля</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-primary shrink-0 mt-1" />
                    <span>Готовые стратегии рекламы и продвижения</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Экран 3: Почему мы уникальны */}
        <section id="about" className="py-16 md:py-24 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                  alt="Основатель компании" 
                  className="rounded-xl shadow-xl"
                />
              </div>
              
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Почему наша система обучения уникальна?
                </h2>
                
                <p className="text-lg mb-6 text-gray-700">
                  КидсЭдукейшн была создана в 2015 году профессиональными педагогами с международным опытом. Мы разработали инновационную методику, которая позволяет детям дошкольного возраста:
                </p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-1 shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold">Гармоничное развитие</h3>
                      <p className="text-gray-600">Наша методика обеспечивает всестороннее развитие интеллектуальных и творческих способностей</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-1 shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold">Индивидуальный подход</h3>
                      <p className="text-gray-600">Мы учитываем особенности каждого ребенка и адаптируем программу под его потребности</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-1 shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold">Научная база</h3>
                      <p className="text-gray-600">Все методики основаны на последних научных исследованиях в области детского развития</p>
                    </div>
                  </li>
                </ul>
                
                <Button className="rounded-full px-8 group">
                  Узнать подробнее о методике
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Экран 4: Наши достижения */}
        <section id="results" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Наши достижения
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                За годы работы КидсЭдукейшн зарекомендовала себя как лидер в образовании дошкольников
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="p-6 text-center">
                <div className="mb-4">
                  <Award className="w-16 h-16 text-primary mx-auto" />
                </div>
                <h3 className="text-3xl font-bold mb-2">50+</h3>
                <p className="text-gray-600">Филиалов по всей России</p>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="mb-4">
                  <Users className="w-16 h-16 text-primary mx-auto" />
                </div>
                <h3 className="text-3xl font-bold mb-2">15 000+</h3>
                <p className="text-gray-600">Выпускников наших программ</p>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="mb-4">
                  <Award className="w-16 h-16 text-primary mx-auto" />
                </div>
                <h3 className="text-3xl font-bold mb-2">25+</h3>
                <p className="text-gray-600">Профессиональных наград</p>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <img 
                src="https://images.unsplash.com/photo-1544476915-ed1370594142?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80" 
                alt="Награда компании" 
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80" 
                alt="Участие в выставке" 
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
              <img 
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80" 
                alt="Форум образования" 
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
            </div>
          </div>
        </section>
        
        {/* Экран 5: Отзывы */}
        <section id="reviews" className="py-16 md:py-24 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Исключительная репутация центра
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Отзывы наших франчайзи и довольных родителей
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-secondary">
                    <Star className="fill-secondary" />
                    <Star className="fill-secondary" />
                    <Star className="fill-secondary" />
                    <Star className="fill-secondary" />
                    <Star className="fill-secondary" />
                  </div>
                  <span className="ml-2 text-gray-600">5.0</span>
                </div>
                <p className="text-gray-700 mb-4">
                  "Открыл центр КидсЭдукейшн 2 года назад. Вышел на окупаемость за 7 месяцев. Команда франчайзера помогала на каждом этапе, все обещания выполнены. Очень доволен!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-3"></div>
                  <div>
                    <h4 className="font-semibold">Михаил Иванов</h4>
                    <p className="text-gray-600 text-sm">Владелец франшизы, г. Казань</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-secondary">
                    <Star className="fill-secondary" />
                    <Star className="fill-secondary" />
                    <Star className="fill-secondary" />
                    <Star className="fill-secondary" />
                    <Star className="fill-secondary" />
                  </div>
                  <span className="ml-2 text-gray-600">5.0</span>
                </div>
                <p className="text-gray-700 mb-4">
                  "Работаю по франшизе КидсЭдукейшн уже 3 года. Центр пользуется огромной популярностью, расширяемся, открываем второй филиал. Методики действительно работают!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-3"></div>
                  <div>
                    <h4 className="font-semibold">Елена Петрова</h4>
                    <p className="text-gray-600 text-sm">Владелец франшизы, г. Новосибирск</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-secondary">
                    <Star className="fill-secondary" />
                    <Star className="fill-secondary" />
                    <Star className="fill-secondary" />
                    <Star className="fill-secondary" />
                    <Star className="fill-secondary" />
                  </div>
                  <span className="ml-2 text-gray-600">5.0</span>
                </div>
                <p className="text-gray-700 mb-4">
                  "Водим ребенка в центр КидсЭдукейшн уже год. Прогресс колоссальный! Сын с удовольствием занимается, а мы видим отличные результаты. Рекомендую всем родителям!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-3"></div>
                  <div>
                    <h4 className="font-semibold">Анна Сидорова</h4>
                    <p className="text-gray-600 text-sm">Мама ученика, г. Москва</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Экран 6: Поддержка */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Поможем на каждом этапе запуска!
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Полная поддержка от выбора помещения до торжественного открытия
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-primary/5 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-4">
                  <Building className="text-white w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Подбор помещения</h3>
                <p className="text-gray-700">
                  Поможем найти идеальное помещение с учетом всех требований и нормативов для детского центра
                </p>
              </div>
              
              <div className="bg-primary/5 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-4">
                  <Map className="text-white w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Ремонт и брендирование</h3>
                <p className="text-gray-700">
                  Предоставим дизайн-проект помещения и рекомендации по отделке в фирменном стиле
                </p>
              </div>
              
              <div className="bg-primary/5 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-4">
                  <Users className="text-white w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Подбор специалистов</h3>
                <p className="text-gray-700">
                  Дадим рекомендации по найму квалифицированных сотрудников и проведем собеседования
                </p>
              </div>
              
              <div className="bg-primary/5 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="text-white w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Обучение</h3>
                <p className="text-gray-700">
                  Проведем обучение для вас и вашего персонала по всем аспектам работы центра
                </p>
              </div>
              
              <div className="bg-primary/5 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="text-white w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Запуск рекламы</h3>
                <p className="text-gray-700">
                  Разработаем и запустим эффективную рекламную кампанию для привлечения первых клиентов
                </p>
              </div>
              
              <div className="bg-primary/5 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-4">
                  <Award className="text-white w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Торжественное открытие</h3>
                <p className="text-gray-700">
                  Подготовим сценарий и поможем организовать яркое открытие, которое привлечет внимание
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Экран 7: Условия */}
        <section id="cost" className="py-16 md:py-24 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Условия запуска детского центра по франшизе
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Прозрачные условия сотрудничества и быстрая окупаемость
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-2 border-primary p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Паушальный взнос</h3>
                <p className="text-5xl font-bold text-primary mb-4">350 000 ₽</p>
                <ul className="text-left space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <Check className="text-primary shrink-0 mt-1" />
                    <span>Право использования бренда</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-primary shrink-0 mt-1" />
                    <span>Полный пакет методических материалов</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-primary shrink-0 mt-1" />
                    <span>Обучение франчайзи и персонала</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-primary shrink-0 mt-1" />
                    <span>Маркетинговый пакет для запуска</span>
                  </li>
                </ul>
              </Card>
              
              <Card className="border-2 border-primary p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Роялти</h3>
                <p className="text-5xl font-bold text-primary mb-4">5%</p>
                <ul className="text-left space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <Check className="text-primary shrink-0 mt-1" />
                    <span>От ежемесячного оборота</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-primary shrink-0 mt-1" />
                    <span>Постоянная методическая поддержка</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-primary shrink-0 mt-1" />
                    <span>Обновление программ обучения</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-primary shrink-0 mt-1" />
                    <span>Маркетинговое сопровождение</span>
                  </li>
                </ul>
              </Card>
              
              <Card className="border-2 border-primary p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Инвестиции</h3>
                <p className="text-5xl font-bold text-primary mb-4">от 1,5 млн ₽</p>
                <ul className="text-left space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <Check className="text-primary shrink-0 mt-1" />
                    <span>Ремонт и оформление помещения</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-primary shrink-0 mt-1" />
                    <span>Закупка оборудования и мебели</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-primary shrink-0 mt-1" />
                    <span>Маркетинговый бюджет на запуск</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-primary shrink-0 mt-1" />
                    <span>Операционные расходы до выхода на прибыль</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Экран 8: Прибыльность */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Почему это прибыльно?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Проверенная финансовая модель с быстрой окупаемостью
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="p-6 text-center">
                <div className="text-5xl font-bold text-primary mb-4">8 000 ₽</div>
                <h3 className="text-xl font-bold">Средний чек</h3>
                <p className="text-gray-600 mt-2">Стоимость абонемента на месяц занятий</p>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="text-5xl font-bold text-primary mb-4">700 000 ₽</div>
                <h3 className="text-xl font-bold">Средний оборот</h3>
                <p className="text-gray-600 mt-2">Ежемесячная выручка работающего центра</p>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="text-5xl font-bold text-primary mb-4">300 000 ₽</div>
                <h3 className="text-xl font-bold">Чистая прибыль</h3>
                <p className="text-gray-600 mt-2">Ежемесячная прибыль после всех расходов</p>
              </Card>
            </div>
            
            <div className="bg-primary/5 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Ключевые финансовые показатели
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 shrink-0" />
                      <div>
                        <h4 className="text-lg font-semibold">Окупаемость: 10-14 месяцев</h4>
                        <p className="text-gray-600">При соблюдении всех рекомендаций франчайзера</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 shrink-0" />
                      <div>
                        <h4 className="text-lg font-semibold">Маржинальность: 45-55%</h4>
                        <p className="text-gray-600">Высокая рентабельность бизнеса</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 shrink-0" />
                      <div>
                        <h4 className="text-lg font-semibold">Заполняемость групп: 90%</h4>
                        <p className="text-gray-600">Благодаря высокому спросу на качественное образование</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 shrink-0" />
                      <div>
                        <h4 className="text-lg font-semibold">Сезонность: минимальная</h4>
                        <p className="text-gray-600">Стабильный спрос в течение всего года</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 shrink-0" />
                      <div>
                        <h4 className="text-lg font-semibold">Средний срок контракта: 1-2 года</h4>
                        <p className="text-gray-600">Дети занимаются длительное время</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 shrink-0" />
                      <div>
                        <h4 className="text-lg font-semibold">Рекомендации: 70% новых клиентов</h4>
                        <p className="text-gray-600">Приходят по рекомендациям существующих</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Экран 9: Контакты */}
        <section id="contacts" className="py-16 md:py-24 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ждём Вас в нашей дружной команде
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Присоединяйтесь к успешной сети детских образовательных центров КидсЭдукейшн
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                  alt="Команда КидсЭдукейшн" 
                  className="rounded-xl"
                />
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">
                  Оставьте заявку на получение франшизы
                </h3>
                <div className="space-y-4 mb-6">
                  <input 
                    type="text" 
                    placeholder="Ваше имя" 
                    className="w-full bg-white/20 border border-white/30 rounded-full py-3 px-6 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <input 
                    type="tel" 
                    placeholder="Ваш телефон" 
                    className="w-full bg-white/20 border border-white/30 rounded-full py-3 px-6 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <input 
                    type="email" 
                    placeholder="Ваш email" 
                    className="w-full bg-white/20 border border-white/30 rounded-full py-3 px-6 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <input 
                    type="text" 
                    placeholder="Ваш город" 
                    className="w-full bg-white/20 border border-white/30 rounded-full py-3 px-6 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <Button size="lg" className="w-full bg-white text-primary hover:bg-secondary hover:text-black rounded-full">
                  Получить подробную презентацию
                </Button>
                <p className="text-sm text-white/70 mt-4 text-center">
                  Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </div>
            </div>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Phone className="w-10 h-10 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Телефон</h3>
                <p className="text-xl">+7 (800) 555-35-35</p>
              </div>
              
              <div className="text-center">
                <Mail className="w-10 h-10 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-xl">franchise@kidseducation.ru</p>
              </div>
              
              <div className="text-center">
                <MapPin className="w-10 h-10 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Адрес</h3>
                <p className="text-xl">г. Москва, ул. Образовательная, 123</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
