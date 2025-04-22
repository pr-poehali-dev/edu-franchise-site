import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 to-accent/20 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-secondary"></div>
        <div className="absolute left-20 top-40 h-32 w-32 rounded-full bg-accent"></div>
        <div className="absolute right-40 bottom-10 h-48 w-48 rounded-full bg-primary"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Франшиза детского <span className="text-primary">образования</span> с высокой доходностью
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-xl mx-auto md:mx-0">
              Запустите свой собственный детский образовательный центр по нашей
              проверенной методике с полной поддержкой на всех этапах
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="rounded-full text-lg px-8">
                Получить презентацию
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-lg px-8">
                Подробнее о франшизе
              </Button>
            </div>
          </div>
          
          <div className="relative h-72 md:h-auto">
            <div className="absolute inset-0 bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <img 
                src="/placeholder.svg" 
                alt="Дети на занятии" 
                className="w-full h-full object-cover opacity-80 mix-blend-overlay"
              />
            </div>
            
            <div className="relative grid grid-cols-2 gap-4 p-4 h-full">
              <div className="bg-white/90 backdrop-blur rounded-xl shadow-lg p-4 flex flex-col items-center justify-center text-center">
                <span className="text-4xl font-bold text-primary">70+</span>
                <span className="text-sm">действующих центров</span>
              </div>
              <div className="bg-white/90 backdrop-blur rounded-xl shadow-lg p-4 flex flex-col items-center justify-center text-center">
                <span className="text-4xl font-bold text-primary">8+</span>
                <span className="text-sm">лет успешной работы</span>
              </div>
              <div className="bg-white/90 backdrop-blur rounded-xl shadow-lg p-4 flex flex-col items-center justify-center text-center">
                <span className="text-4xl font-bold text-primary">20+</span>
                <span className="text-sm">собственных программ</span>
              </div>
              <div className="bg-white/90 backdrop-blur rounded-xl shadow-lg p-4 flex flex-col items-center justify-center text-center">
                <span className="text-4xl font-bold text-primary">10к+</span>
                <span className="text-sm">счастливых детей</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
