import { Card, CardContent } from "@/components/ui/card";
import { 
  Rocket, 
  BookOpen, 
  Users, 
  PieChart, 
  Award, 
  Headphones
} from "lucide-react";

const advantages = [
  {
    icon: <Rocket className="h-10 w-10 text-primary" />,
    title: "Быстрый старт",
    description: "Открытие детского центра за 30-45 дней с полным сопровождением нашей команды."
  },
  {
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: "Уникальные методики",
    description: "Более 20 авторских образовательных программ для детей от 1 до 7 лет."
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Обучение персонала",
    description: "Полное обучение и сертификация всех сотрудников вашего центра."
  },
  {
    icon: <PieChart className="h-10 w-10 text-primary" />,
    title: "Высокая рентабельность",
    description: "Окупаемость от 6 месяцев с чистой прибылью от 300 000 ₽ в месяц."
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: "Узнаваемый бренд",
    description: "Работа под известным брендом с репутацией и историей успеха."
  },
  {
    icon: <Headphones className="h-10 w-10 text-primary" />,
    title: "Постоянная поддержка",
    description: "Маркетинговая, юридическая и операционная поддержка на всех этапах."
  }
];

const FranchiseAdvantages = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Преимущества нашей франшизы
          </h2>
          <p className="text-lg text-gray-600">
            Мы предоставляем полный комплекс услуг и поддержки, чтобы ваш бизнес 
            был успешным с первых дней работы
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 bg-primary/10 p-3 rounded-full w-fit">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FranchiseAdvantages;
