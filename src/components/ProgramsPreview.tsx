import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const ageGroups = [
  { id: "1-3", label: "1-3 года" },
  { id: "3-5", label: "3-5 лет" },
  { id: "5-7", label: "5-7 лет" }
];

const programs = {
  "1-3": [
    {
      title: "Развивашки для малышей",
      description: "Раннее развитие моторики, речи и социализации через игровые активности.",
      ageRange: "1-3 года",
      duration: "45 минут",
      frequency: "2 раза в неделю"
    },
    {
      title: "Музыкальные шаги",
      description: "Знакомство с миром музыки и ритма для самых маленьких.",
      ageRange: "1.5-3 года",
      duration: "40 минут",
      frequency: "1 раз в неделю"
    },
    {
      title: "Мама и малыш",
      description: "Совместные занятия для детей и родителей, направленные на раннее развитие.",
      ageRange: "1-2 года",
      duration: "45 минут",
      frequency: "2 раза в неделю"
    }
  ],
  "3-5": [
    {
      title: "Подготовка к школе: Базовый курс",
      description: "Основы чтения, счета и письма через увлекательные занятия.",
      ageRange: "3-5 лет",
      duration: "60 минут",
      frequency: "3 раза в неделю"
    },
    {
      title: "Английский для дошколят",
      description: "Погружение в языковую среду через игры, песни и мультфильмы.",
      ageRange: "3-5 лет",
      duration: "45 минут",
      frequency: "2 раза в неделю"
    },
    {
      title: "Творческая мастерская",
      description: "Развитие креативного мышления через разные виды творчества.",
      ageRange: "3-5 лет",
      duration: "50 минут",
      frequency: "2 раза в неделю"
    }
  ],
  "5-7": [
    {
      title: "Интенсив подготовки к школе",
      description: "Полный комплекс знаний и навыков для успешного старта в школе.",
      ageRange: "5-7 лет",
      duration: "75 минут",
      frequency: "3 раза в неделю"
    },
    {
      title: "Логика и программирование",
      description: "Основы алгоритмического мышления и простого программирования.",
      ageRange: "5-7 лет",
      duration: "60 минут",
      frequency: "2 раза в неделю"
    },
    {
      title: "Юный исследователь",
      description: "Знакомство с миром науки через простые и безопасные эксперименты.",
      ageRange: "5-7 лет",
      duration: "60 минут",
      frequency: "1 раз в неделю"
    }
  ]
};

const ProgramsPreview = () => {
  const [activeTab, setActiveTab] = useState("1-3");

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Наши образовательные программы
          </h2>
          <p className="text-lg text-gray-600">
            Мы разработали комплексные программы для всестороннего развития
            детей разных возрастных групп
          </p>
        </div>
        
        <Tabs
          defaultValue="1-3"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <div className="flex justify-center mb-12">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              {ageGroups.map((group) => (
                <TabsTrigger
                  key={group.id}
                  value={group.id}
                  className="text-base py-3"
                >
                  {group.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {ageGroups.map((group) => (
            <TabsContent key={group.id} value={group.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {programs[group.id as keyof typeof programs].map((program, index) => (
                  <Card key={index} className="bg-white border border-gray-100 shadow-sm overflow-hidden">
                    <div className="h-40 bg-primary/20 flex items-center justify-center">
                      <img 
                        src="/placeholder.svg" 
                        alt={program.title} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium px-3 py-1 bg-secondary/20 rounded-full">
                          {program.ageRange}
                        </span>
                        <span className="text-sm text-gray-600">
                          {program.duration}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                      <p className="text-gray-600 mb-4">{program.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">
                          {program.frequency}
                        </span>
                        <Button variant="outline" size="sm">
                          Подробнее
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-12 text-center">
                <Button size="lg" className="rounded-full px-8">
                  Смотреть все программы
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ProgramsPreview;
