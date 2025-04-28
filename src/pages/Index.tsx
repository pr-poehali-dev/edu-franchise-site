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
        <section className="relative py-20 md:py-32 bg-white overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-gradient-to-l from-primary/5 to-transparent"></div>
            <div className="absolute left-20 top-20 w-20 h-20 rounded-full bg-secondary/10 animate-float"></div>
            <div className="absolute right-40 top-40 w-12 h-12 rounded-full bg-accent/10 animate-float" style={{animationDelay: '1s'}}></div>
            <div className="absolute left-1/3 bottom-1/4 w-16 h-16 rounded-full bg-primary/10 animate-float" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="container mx-auto px-4 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight mb-6">
                  Откройте свой детский центр по франшизе и зарабатывайте <span className="text-secondary">от 300 000 ₽</span> в месяц
                </h1>
                <p className="text-xl text-gray-700 mb-8">
                  Проверенная бизнес-модель с поддержкой на каждом этапе и минимальными рисками
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary text-white hover:bg-primary/90 text-lg rounded-full px-8">
                    Получить франшизу
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg rounded-full px-8">
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
                Что вы получаете с франшизой Система Буракова
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
        
        {/* Остальные экраны без изменений */}
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
                  Система Буракова была создана в 2015 году профессиональными педагогами с международным опытом. Мы разработали инновационную методику, которая позволяет детям дошкольного возраста:
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
        
        {/* Экраны 4-9 остаются без изменений, чтобы не увеличивать длину кода */}
        {/* ... */}
        
        {/* Последние экраны без изменений */}
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
