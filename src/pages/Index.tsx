import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FranchiseAdvantages from "@/components/FranchiseAdvantages";
import ProgramsPreview from "@/components/ProgramsPreview";
import { 
  ArrowRight, 
  BarChart, 
  CheckCircle, 
  MessagesSquare
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <FranchiseAdvantages />
        
        {/* Investment Section */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Инвестиции и окупаемость
                </h2>
                <p className="text-lg mb-8 text-gray-700">
                  Наша франшиза предлагает прозрачные условия инвестирования 
                  и быструю окупаемость благодаря проверенной бизнес-модели
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-1 shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold">От 1,5 до 3 млн ₽</h3>
                      <p className="text-gray-600">Стартовые инвестиции включая паушальный взнос</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-1 shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold">От 6 до 12 месяцев</h3>
                      <p className="text-gray-600">Срок окупаемости инвестиций при соблюдении рекомендаций</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-1 shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold">От 300 000 ₽</h3>
                      <p className="text-gray-600">Чистая прибыль в месяц при выходе на полную мощность</p>
                    </div>
                  </div>
                </div>
                
                <Button className="rounded-full px-8 group">
                  Получить финансовую модель
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              <div className="bg-white rounded-xl shadow-xl p-6 md:p-10">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Состав франшизного пакета
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <BarChart className="text-primary mt-1 shrink-0" />
                    <span>Полная бизнес-модель с финансовыми показателями</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BarChart className="text-primary mt-1 shrink-0" />
                    <span>Брендбук и маркетинговые материалы</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BarChart className="text-primary mt-1 shrink-0" />
                    <span>CRM-система для управления центром</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BarChart className="text-primary mt-1 shrink-0" />
                    <span>Методические материалы для всех программ</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BarChart className="text-primary mt-1 shrink-0" />
                    <span>Готовые скрипты продаж и работы с клиентами</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BarChart className="text-primary mt-1 shrink-0" />
                    <span>Помощь в подборе и обучении персонала</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BarChart className="text-primary mt-1 shrink-0" />
                    <span>Юридическая поддержка и документация</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <ProgramsPreview />
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Готовы начать свой успешный бизнес?
            </h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              Присоединяйтесь к нашей сети детских образовательных центров
              и получите надежный бизнес с полной поддержкой
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" variant="secondary" className="rounded-full text-primary text-lg px-8">
                Скачать презентацию
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-lg px-8 border-white text-white hover:bg-white/10">
                Задать вопрос
              </Button>
            </div>
            
            <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="flex items-center justify-center mb-6">
                <MessagesSquare className="w-10 h-10 mr-3" />
                <h3 className="text-2xl font-bold">Остались вопросы?</h3>
              </div>
              <p className="mb-6">
                Оставьте заявку, и наш специалист свяжется с вами в течение 24 часов,
                чтобы ответить на все ваши вопросы о франшизе
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input 
                  type="text" 
                  placeholder="Ваше имя" 
                  className="bg-white/20 border border-white/30 rounded-full py-3 px-6 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <input 
                  type="tel" 
                  placeholder="Ваш телефон" 
                  className="bg-white/20 border border-white/30 rounded-full py-3 px-6 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full">
                  Отправить заявку
                </Button>
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
