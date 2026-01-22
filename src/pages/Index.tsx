import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const turnstileTypes = [
    {
      icon: 'Cog',
      title: 'Механический турникет',
      description: 'Надёжное решение с ручным управлением для объектов с умеренным потоком посетителей',
      features: ['Простая конструкция', 'Минимальное обслуживание', 'Энергонезависимость', 'Долговечность']
    },
    {
      icon: 'Zap',
      title: 'Автоматический турникет',
      description: 'Интеллектуальная система контроля доступа с электронным управлением',
      features: ['Быстрая работа', 'Интеграция с СКУД', 'Автоматическое открытие', 'Датчики безопасности']
    },
    {
      icon: 'RotateCw',
      title: 'Карусельные двери',
      description: 'Премиальное решение для создания герметичного входного узла',
      features: ['Звукоизоляция', 'Энергоэффективность', 'Представительный вид', 'Высокая пропускная способность']
    }
  ];

  const advantages = [
    {
      group: 'Для проектировщиков',
      icon: 'PenTool',
      benefits: [
        'Представительный и гармоничный внешний вид фасадной и внутренней зоны',
        'Оптимизация энергетического баланса здания',
        'Экономичное решение благодаря высокому уровню заводской сборки'
      ]
    },
    {
      group: 'Для пользователей',
      icon: 'Users',
      benefits: [
        'Простая настройка нужного рабочего режима',
        'Эффективная защита от шума, пыли и грязи',
        'Бесперебойная работа дверной системы'
      ]
    },
    {
      group: 'Для монтажников',
      icon: 'Wrench',
      benefits: [
        'Гибкая модульная система',
        'Простой монтаж благодаря высокому уровню заводской сборки',
        'Предустановленные и запрограммированные устройства управления',
        'Соответствие действующим стандартам и нормам'
      ]
    }
  ];

  const productionBenefits = [
    {
      icon: 'MapPin',
      title: 'Производство в Новосибирске',
      description: 'Без таможенных оформлений и международных транспортных издержек'
    },
    {
      icon: 'DollarSign',
      title: 'Выгодные цены',
      description: 'Работа напрямую без посредников с коротким сроком изготовления'
    },
    {
      icon: 'Settings',
      title: 'Простой монтаж',
      description: 'Легко установить по инструкции, доступна услуга шеф-монтажа'
    },
    {
      icon: 'Shield',
      title: 'Надёжность',
      description: 'Совершенная шумоизоляция, высокий уровень ремонтопригодности'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-card">
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Lock" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              GlassTech
            </span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#products" className="text-foreground/80 hover:text-primary transition-colors">Продукция</a>
            <a href="#advantages" className="text-foreground/80 hover:text-primary transition-colors">Преимущества</a>
            <a href="#production" className="text-foreground/80 hover:text-primary transition-colors">Производство</a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            Связаться с нами
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  Инновационные решения контроля доступа
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Стеклянные турникеты
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  нового поколения
                </span>
              </h1>
              <p className="text-xl text-foreground/70">
                Премиальные решения для контроля доступа с безупречным дизайном и передовыми технологиями.
                Производство в России без компромиссов по качеству.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg">
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline" className="text-lg border-2">
                  Смотреть каталог
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/c221ceea-ba01-47ec-a154-b012d7d5175e/files/e14a8415-96ec-4d9b-9853-810e5f92b70c.jpg"
                alt="Стеклянный турникет"
                className="relative rounded-3xl shadow-2xl w-full hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">Типы турникетов</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Три решения для любых задач контроля доступа
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {turnstileTypes.map((type, index) => (
              <Card 
                key={index} 
                className="border-2 border-border hover:border-primary transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-4">
                    <Icon name={type.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">{type.title}</CardTitle>
                  <CardDescription className="text-base">{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Icon name="CheckCircle2" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">Преимущества для каждого</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Решения, учитывающие интересы всех участников проекта
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="border-2 border-border bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4">
                    <Icon name={advantage.icon} size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">{advantage.group}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {advantage.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Icon name="Sparkles" size={18} className="text-secondary mt-1 flex-shrink-0" />
                        <span className="text-foreground/80 leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="production" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/c221ceea-ba01-47ec-a154-b012d7d5175e/files/9485ac2c-e216-48cb-92fe-681135f4d8f9.jpg"
                alt="Производство в Новосибирске"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Производство
                <span className="block text-primary">в Новосибирске</span>
              </h2>
              <p className="text-xl text-foreground/70">
                Мы производим турникеты полного цикла на современном оборудовании с контролем качества на каждом этапе.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {productionBenefits.map((benefit, index) => (
                  <div key={index} className="space-y-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                      <Icon name={benefit.icon} size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{benefit.title}</h3>
                    <p className="text-foreground/70">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">Свяжитесь с нами</h2>
            <p className="text-xl text-foreground/70">
              Получите консультацию и коммерческое предложение
            </p>
          </div>
          <Card className="border-2 border-border bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Ваше имя</label>
                    <Input 
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Компания</label>
                    <Input 
                      placeholder="ООО «Компания»"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="bg-background/50"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Телефон</label>
                    <Input 
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input 
                      type="email"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-background/50"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о вашем проекте..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-background/50"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg"
                >
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Lock" size={24} className="text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  GlassTech
                </span>
              </div>
              <p className="text-foreground/70">
                Инновационные системы контроля доступа премиум-класса
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Контакты</h3>
              <div className="space-y-2 text-foreground/70">
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} className="text-primary" />
                  Новосибирск, Россия
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={18} className="text-primary" />
                  +7 (999) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={18} className="text-primary" />
                  info@glasstech.ru
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Навигация</h3>
              <div className="space-y-2 text-foreground/70">
                <a href="#products" className="block hover:text-primary transition-colors">Продукция</a>
                <a href="#advantages" className="block hover:text-primary transition-colors">Преимущества</a>
                <a href="#production" className="block hover:text-primary transition-colors">Производство</a>
                <a href="#contact" className="block hover:text-primary transition-colors">Контакты</a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-foreground/60">
            <p>© 2024 GlassTech. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;