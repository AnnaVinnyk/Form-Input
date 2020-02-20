let DATA = [
    { "name": "Брэд Питт", "logos": "logos/logo-001.jpg", "photos": "clients/client-001.jpg", "company": "FERREXPO", "position": "Recruitment Manager", "review": "Меня приятно удивил энтузиазм рекрутеров WorkerHunters, а также навыки ведения переговоров с клиентами. WorkerHunters предоставили наилучший сервис по подбору персонала среди всех кадровых компаний, с которыми я сталкивался." },
    { "name": "Леонардо Ди Каприо", "logos": "logos/logo-002.jpg", "photos": "clients/client-002.jpg", "company": "МЕТІНВЕСТ", "position": "Recruitment/HR Manager", "review": "WorkerHunters является нашим партнёром с 2003 года. Они всегда могли точно определить, какие навыки необходимы для соответствующих должностей нашей компании и подобрать подходящих специалистов в кратчайшие сроки." },
    { "name": "Бенедикт Камбербэтч", "logos": "logos/logo-003.jpg", "photos": "clients/client-003.jpg", "company": "ДТЭК", "position": "HR Specialist", "review": "WorkerHunters - это трудолюбивые, высокоэффективные профессионалы с грамотным клиентским сервисом. Они получают мою рекомендацию и я буду рад предоставить дополнительную информацию, если у кого-то есть вопросы!" },
    { "name": "Роберт Джон Дауни", "logos": "logos/logo-004.jpg", "photos": "clients/client-004.jpg", "company": "ЧАО Запорожтрансформатор", "position": "Региональный директор", "review": "Я настоятельно рекомендую WorkerHunters как настоящих спасателей. Ведь им всегда удаётся найти кандидата, который не только соответсвует нашим техническим требованиям, но и отлично вписывается в нашу команду." },
    { "name": "Крис Хемсворт", "logos": "logos/logo-005.jpg", "photos": "clients/client-005.jpg", "company": "ПРАО Донецксталь", "position": "HR Specialist", "review": "Консультанты WorkerHunters профессиональны и понимают потребности нашего бизнеса. Они помогли нам в ряде сложных областей. Качество кандидатов, которых они преложили, просто фантастическое, как и их способность не затягивать во времени." },
    { "name": "Том Круз", "logos": "logos/logo-006.jpg", "photos": "clients/client-006.jpg", "company": "ЮГОК", "position": "Recruitment Manager", "review": "Наше сотрудничесво с WorkerHunters было очень продуктивным. Это профессиональная и дружная команда людей, с которыми приятно работать. ЮГОК без колебаний рекомендует WorkerHunters всем, кто ценит выгодные решения." },
    { "name": "Дэниел Роутон Крейг", "logos": "logos/logo-007.jpg", "photos": "clients/client-007.jpg", "company": "АО МОТОР СИЧ", "position": "Recruitment/HR Manager", "review": "Я однозначно рекомендую WorkerHunters! Они быстро станут частью вашей команды, точно зная, что вам нужно и предоставляя максимально возможную профессиональную помощь." },
    { "name": "Кристофер Майкл Прэтт", "logos": "logos/logo-008.jpg", "photos": "clients/client-008.jpg", "company": "Лемтранс", "position": "Региональный директор", "review": "Возможность нанять высококвалифицированных работников в сжатые сроки имеет решающее значение для нашей компании. Мы работаем с WorkerHunters уже несколько лет, и мы действительно довольны результатами." }
];
let PROF = [{"position": "Recruitment Manager"}, {"position": "HR Manager"}, {"position": "HR Specialist"}, {"position": "Региональный директор"}];
//console.log(DATA);
let DATAjson = JSON.stringify(DATA, null, 4);
let RESULT = JSON.parse(DATAjson);
let BP = DATA[0];
console.log(BP);
console.log(DATA[0]);
console.log(DATAjson);
console.log(RESULT[0]);




