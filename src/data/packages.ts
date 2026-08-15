import type { L } from "@/lib/i18n";
import { img } from "@/assets/images";

export type Pkg = {
  slug: string;
  title: L;
  subtitle: L;
  image: string;
  description: L;
  products: L[];
  services: L[];
  extra: L;
};

const P = {
  sicriuSimplu: { ro: "Sicriu din lemn, model simplu", ru: "Гроб из дерева, простая модель" },
  sicriuNatur: { ro: "Sicriu din lemn natur", ru: "Гроб из натурального дерева" },
  sicriuLacuit: { ro: "Sicriu din lemn lăcuit", ru: "Гроб из лакированного дерева" },
  sicriuPremium: { ro: "Sicriu premium, capitonat", ru: "Гроб премиум, с обивкой" },
  cruce: { ro: "Cruce din lemn", ru: "Деревянный крест" },
  cruceSculptata: { ro: "Cruce din lemn, model sculptat", ru: "Деревянный крест, резная модель" },
  coroana: { ro: "Coroană funerară", ru: "Похоронный венок" },
  coroane2: { ro: "Două coroane funerare", ru: "Два похоронных венка" },
  accesorii: { ro: "Accesorii pentru cruce", ru: "Аксессуары для креста" },
  prosoape: { ro: "Prosoape de înmormântare", ru: "Похоронные полотенца" },
  felinar: { ro: "Felinar pentru cimitir", ru: "Кладбищенский фонарь" },
  diverse: { ro: "Cele necesare pentru ceremonie", ru: "Всё необходимое для церемонии" },
  capac: { ro: "Capac și husă de protecție", ru: "Крышка и защитный чехол" },
} satisfies Record<string, L>;

const S = {
  preluareSpital: { ro: "Preluare din spital", ru: "Приём из больницы" },
  preluareDomiciliu: { ro: "Preluare de la domiciliu", ru: "Приём из дома" },
  transport: { ro: "Transport funerar", ru: "Ритуальный транспорт" },
  transportCimitir: { ro: "Transport la biserică și cimitir", ru: "Транспорт до церкви и кладбища" },
  pregatire: { ro: "Pregătirea persoanei decedate", ru: "Подготовка умершего" },
  imbalsamare: { ro: "Îmbălsămare", ru: "Бальзамирование" },
  acte: { ro: "Asistență pentru acte și documente", ru: "Помощь с документами" },
  organizare: { ro: "Organizarea ceremoniei", ru: "Организация церемонии" },
  consultanta: { ro: "Consultanță non-stop", ru: "Круглосуточная консультация" },
  coordonare: { ro: "Coordonare completă, de la început până la final", ru: "Полная координация от начала до конца" },
  priveghi: { ro: "Amenajarea locului de priveghi", ru: "Оформление места прощания" },
} satisfies Record<string, L>;

const extraDefault: L = {
  ro: "Conținutul pachetului poate fi ajustat în funcție de dorințele familiei. Pentru detalii complete și o ofertă personalizată, vă rugăm să ne contactați. Nu afișăm prețuri online.",
  ru: "Состав пакета может быть скорректирован по пожеланиям семьи. Для полной информации и индивидуального предложения свяжитесь с нами. Цены онлайн мы не публикуем.",
};

export const packages: Pkg[] = [
  {
    slug: "economic-spital",
    title: { ro: "Economic Spital", ru: "Эконом — больница" },
    subtitle: {
      ro: "Pachet de bază, pentru situațiile în care persoana decedată se află în spital.",
      ru: "Базовый пакет для случаев, когда умерший находится в больнице.",
    },
    image: img["sicriu-model-02-natur.jpg"],
    description: {
      ro: "Un pachet simplu și complet pentru cele necesare, gândit pentru situațiile în care preluarea se face din spital. Include produsele de bază și serviciile esențiale pentru desfășurarea ceremoniei.",
      ru: "Простой и достаточный пакет, предназначенный для случаев, когда приём осуществляется из больницы. Включает базовые товары и основные услуги для проведения церемонии.",
    },
    products: [P.sicriuSimplu, P.cruce, P.coroana, P.prosoape, P.diverse],
    services: [S.preluareSpital, S.transport, S.pregatire, S.acte, S.consultanta],
    extra: extraDefault,
  },
  {
    slug: "economic-domiciliu",
    title: { ro: "Economic Domiciliu", ru: "Эконом — дом" },
    subtitle: {
      ro: "Pachet de bază, pentru situațiile în care preluarea se face de la domiciliu.",
      ru: "Базовый пакет для случаев, когда приём осуществляется из дома.",
    },
    image: img["sicriu-model-03-natur.jpg"],
    description: {
      ro: "Pachet simplu, care acoperă cele necesare atunci când persoana decedată se află la domiciliu. Ne ocupăm de preluare, pregătire și de formalitățile administrative.",
      ru: "Простой пакет, покрывающий необходимое, когда умерший находится дома. Мы берём на себя приём, подготовку и административные формальности.",
    },
    products: [P.sicriuSimplu, P.cruce, P.coroana, P.prosoape, P.diverse],
    services: [S.preluareDomiciliu, S.transport, S.pregatire, S.acte, S.consultanta],
    extra: extraDefault,
  },
  {
    slug: "esential-spital",
    title: { ro: "Esențial Spital", ru: "Основной — больница" },
    subtitle: {
      ro: "Pachet echilibrat, cu preluare din spital.",
      ru: "Сбалансированный пакет с приёмом из больницы.",
    },
    image: img["sicriu-model-06-natur.jpg"],
    description: {
      ro: "Un pachet echilibrat, care adaugă câteva elemente în plus față de varianta economică, pentru o ceremonie desfășurată în bune condiții.",
      ru: "Сбалансированный пакет, дополняющий эконом-вариант несколькими элементами, для достойного проведения церемонии.",
    },
    products: [P.sicriuNatur, P.cruce, P.coroana, P.accesorii, P.prosoape, P.diverse],
    services: [S.preluareSpital, S.transport, S.pregatire, S.acte, S.organizare, S.consultanta],
    extra: extraDefault,
  },
  {
    slug: "esential-domiciliu",
    title: { ro: "Esențial Domiciliu", ru: "Основной — дом" },
    subtitle: {
      ro: "Pachet echilibrat, cu preluare de la domiciliu.",
      ru: "Сбалансированный пакет с приёмом из дома.",
    },
    image: img["sicriu-model-06-natur-2.jpg"],
    description: {
      ro: "Pachet echilibrat pentru situațiile în care persoana decedată se află la domiciliu, cu sprijin pentru pregătirea locului de priveghi.",
      ru: "Сбалансированный пакет для случаев, когда умерший находится дома, с помощью в подготовке места прощания.",
    },
    products: [P.sicriuNatur, P.cruce, P.coroana, P.accesorii, P.prosoape, P.diverse],
    services: [S.preluareDomiciliu, S.transport, S.pregatire, S.priveghi, S.acte, S.consultanta],
    extra: extraDefault,
  },
  {
    slug: "standard-spital",
    title: { ro: "Standard Spital", ru: "Стандарт — больница" },
    subtitle: {
      ro: "Pachet complet pentru o ceremonie organizată integral de noi.",
      ru: "Полный пакет для церемонии, полностью организованной нами.",
    },
    image: img["sicriu-model-01-lacuit.jpg"],
    description: {
      ro: "Pachet standard, cu produse alese cu grijă și organizare completă a ceremoniei, pentru situațiile în care preluarea se face din spital.",
      ru: "Стандартный пакет с тщательно подобранными товарами и полной организацией церемонии, когда приём осуществляется из больницы.",
    },
    products: [P.sicriuLacuit, P.cruceSculptata, P.coroane2, P.accesorii, P.prosoape, P.felinar, P.diverse],
    services: [
      S.preluareSpital,
      S.transport,
      S.transportCimitir,
      S.pregatire,
      S.acte,
      S.organizare,
      S.consultanta,
    ],
    extra: extraDefault,
  },
  {
    slug: "standard-domiciliu",
    title: { ro: "Standard Domiciliu", ru: "Стандарт — дом" },
    subtitle: {
      ro: "Pachet complet, cu preluare de la domiciliu.",
      ru: "Полный пакет с приёмом из дома.",
    },
    image: img["sicriu-lacuit-cires.jpg"],
    description: {
      ro: "Pachet standard pentru ceremoniile care încep de la domiciliu, cu amenajarea locului de priveghi și coordonarea tuturor etapelor.",
      ru: "Стандартный пакет для церемоний, начинающихся дома, с оформлением места прощания и координацией всех этапов.",
    },
    products: [P.sicriuLacuit, P.cruceSculptata, P.coroane2, P.accesorii, P.prosoape, P.felinar, P.diverse],
    services: [
      S.preluareDomiciliu,
      S.transport,
      S.transportCimitir,
      S.pregatire,
      S.priveghi,
      S.acte,
      S.organizare,
      S.consultanta,
    ],
    extra: extraDefault,
  },
  {
    slug: "complet-spital",
    title: { ro: "Complet Spital", ru: "Полный — больница" },
    subtitle: {
      ro: "Toate serviciile și produsele necesare, într-un singur pachet.",
      ru: "Все необходимые услуги и товары в одном пакете.",
    },
    image: img["sicriu-capitonat-negru.jpg"],
    description: {
      ro: "Pachet complet, care include îmbălsămarea și coordonarea integrală a ceremoniei, pentru situațiile în care preluarea se face din spital.",
      ru: "Полный пакет, включающий бальзамирование и полную координацию церемонии, когда приём осуществляется из больницы.",
    },
    products: [
      P.sicriuPremium,
      P.cruceSculptata,
      P.coroane2,
      P.accesorii,
      P.prosoape,
      P.felinar,
      P.capac,
      P.diverse,
    ],
    services: [
      S.preluareSpital,
      S.transport,
      S.transportCimitir,
      S.pregatire,
      S.imbalsamare,
      S.acte,
      S.organizare,
      S.coordonare,
      S.consultanta,
    ],
    extra: extraDefault,
  },
  {
    slug: "complet-domiciliu",
    title: { ro: "Complet Domiciliu", ru: "Полный — дом" },
    subtitle: {
      ro: "Pachet complet, cu preluare de la domiciliu.",
      ru: "Полный пакет с приёмом из дома.",
    },
    image: img["sicriu-capitonat-bordo.jpg"],
    description: {
      ro: "Pachet complet pentru ceremoniile care încep de la domiciliu. Ne ocupăm de tot, de la preluare până la ultima etapă.",
      ru: "Полный пакет для церемоний, начинающихся дома. Мы берём на себя всё — от приёма до последнего этапа.",
    },
    products: [
      P.sicriuPremium,
      P.cruceSculptata,
      P.coroane2,
      P.accesorii,
      P.prosoape,
      P.felinar,
      P.capac,
      P.diverse,
    ],
    services: [
      S.preluareDomiciliu,
      S.transport,
      S.transportCimitir,
      S.pregatire,
      S.imbalsamare,
      S.priveghi,
      S.acte,
      S.organizare,
      S.coordonare,
      S.consultanta,
    ],
    extra: extraDefault,
  },
  {
    slug: "premium-domiciliu",
    title: { ro: "Premium Domiciliu", ru: "Премиум — дом" },
    subtitle: {
      ro: "Cea mai atentă variantă, cu produse premium și coordonare completă.",
      ru: "Самый внимательный вариант — премиальные товары и полная координация.",
    },
    image: img["sicriu-capitonat-albastru.jpg"],
    description: {
      ro: "Pachetul premium include produse alese din gama superioară, îmbălsămare, amenajarea locului de priveghi și coordonarea completă a ceremoniei, cu atenție la fiecare detaliu.",
      ru: "Премиальный пакет включает товары высшей категории, бальзамирование, оформление места прощания и полную координацию церемонии, с вниманием к каждой детали.",
    },
    products: [
      P.sicriuPremium,
      P.cruceSculptata,
      P.coroane2,
      P.accesorii,
      P.prosoape,
      P.felinar,
      P.capac,
      P.diverse,
    ],
    services: [
      S.preluareDomiciliu,
      S.transport,
      S.transportCimitir,
      S.pregatire,
      S.imbalsamare,
      S.priveghi,
      S.acte,
      S.organizare,
      S.coordonare,
      S.consultanta,
    ],
    extra: extraDefault,
  },
];

export function getPackage(slug: string) {
  return packages.find((p) => p.slug === slug);
}
