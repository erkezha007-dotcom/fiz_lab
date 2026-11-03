// Зертханалық жұмыстар тізімі.
// Жаңа жұмыс қосу немесе сілтемені ауыстыру үшін осы тізімді ғана өзгертіңіз.
//   id    – қысқа атау (lab.html?id=... сілтемесінде қолданылады)
//   title – зертханалық жұмыстың атауы
//   sim   – стимуляцияның (симуляцияның) сілтемесі
//   image – суреті (міндетті емес)
const PHET = (s, kk = true) =>
  `https://phet.colorado.edu/sims/html/${s}/latest/${s}_${kk ? "kk" : "all"}.html${kk ? "" : "?locale=kk"}`;
const PIMG = (s) => `https://phet.colorado.edu/sims/html/${s}/latest/${s}-600.png`;

const LABS = [
  { id: "density",   title: "Қатты дененің тығыздығын анықтау",                     sim: PHET("density", false),            image: PIMG("density") },
  { id: "spring",    title: "Серіппенің қатаңдығын анықтау (Гук заңы)",              sim: PHET("hookes-law"),                image: PIMG("hookes-law") },
  { id: "springs",   title: "Серіппеге ілінген жүктің тербелісі",                   sim: PHET("masses-and-springs"),        image: PIMG("masses-and-springs") },
  { id: "friction",  title: "Үйкеліс күшін зерттеу",                                sim: PHET("forces-and-motion-basics"),  image: PIMG("forces-and-motion-basics") },
  { id: "archimedes",title: "Архимед күшін анықтау",                                sim: PHET("buoyancy-basics", false),    image: PIMG("buoyancy-basics") },
  { id: "lever",     title: "Иінтіректің тепе-теңдік шартын зерттеу",               sim: PHET("balancing-act"),             image: PIMG("balancing-act") },
  { id: "energy",    title: "Механикалық энергияның сақталу заңы",                  sim: PHET("energy-skate-park-basics"),  image: PIMG("energy-skate-park-basics") },
  { id: "pendulum",  title: "Математикалық маятниктің тербеліс периодын анықтау",   sim: PHET("pendulum-lab"),              image: PIMG("pendulum-lab") },
  { id: "gas",       title: "Газ заңдарын зерттеу",                                 sim: PHET("gas-properties"),            image: PIMG("gas-properties") },
  { id: "ohm",       title: "Тізбек бөлігі үшін Ом заңы",                           sim: PHET("ohms-law"),                  image: PIMG("ohms-law") },
  { id: "circuit",   title: "Өткізгіштерді тізбектей және параллель жалғау",        sim: PHET("circuit-construction-kit-dc"), image: PIMG("circuit-construction-kit-dc") },
  { id: "induction", title: "Электромагниттік индукция құбылысын зерттеу",          sim: PHET("faradays-law"),              image: PIMG("faradays-law") },
  { id: "refraction",title: "Шынының сыну көрсеткішін анықтау",                     sim: PHET("bending-light"),             image: PIMG("bending-light") },
  { id: "lens",      title: "Жинағыш линзаның фокус аралығын анықтау",              sim: PHET("geometric-optics"),          image: PIMG("geometric-optics") },
];
