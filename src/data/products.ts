import type { L } from "@/lib/i18n";
import { img } from "@/assets/images";

export type Category = {
  slug: string;
  title: L;
  description: L;
  image: string;
};

export type Product = {
  slug: string;
  category: string;
  title: L;
  short: L;
  description: L;
  features?: L[];
  images: string[];
};

export const categories: Category[] = [
  {
    slug: "sicrie",
    title: { ro: "Sicrie", ru: "Гробы" },
    description: {
      ro: "Sicrie din lemn natur, lăcuit sau capitonat, în modele sobre și îngrijite.",
      ru: "Гробы из натурального, лакированного дерева или с обивкой, в сдержанных и аккуратных моделях.",
    },
    image: img["sicriu-model-01-lacuit.jpg"],
  },
  {
    slug: "cruci",
    title: { ro: "Cruci", ru: "Кресты" },
    description: {
      ro: "Cruci din lemn, în modele clasice și ortodoxe.",
      ru: "Деревянные кресты в классических и православных моделях.",
    },
    image: img["cruce-1.jpg"],
  },
  {
    slug: "coroane",
    title: { ro: "Coroane", ru: "Венки" },
    description: {
      ro: "Coroane și jerbe funerare, realizate în aranjamente discrete.",
      ru: "Похоронные венки и композиции, выполненные сдержанно.",
    },
    image: img["coroana-3.jpg"],
  },
  {
    slug: "accesorii-pentru-cruce",
    title: { ro: "Accesorii pentru cruce", ru: "Аксессуары для креста" },
    description: {
      ro: "Accesorii și ornamente pentru cruce și pentru sicriu.",
      ru: "Аксессуары и украшения для креста и гроба.",
    },
    image: img["accesorii-natural.jpg"],
  },
  {
    slug: "felinare-pentru-cimitir",
    title: { ro: "Felinare pentru cimitir", ru: "Кладбищенские фонари" },
    description: {
      ro: "Felinare pentru mormânt, în modele simple și rezistente.",
      ru: "Фонари для могилы в простых и прочных моделях.",
    },
    image: img["showroom-4.jpg"],
  },
  {
    slug: "prosoape-de-inmormantare",
    title: { ro: "Prosoape de înmormântare", ru: "Похоронные полотенца" },
    description: {
      ro: "Prosoape și textile necesare pentru ceremonie, conform tradiției.",
      ru: "Полотенца и текстиль, необходимые для церемонии, согласно традиции.",
    },
    image: img["showroom-1.jpg"],
  },
  {
    slug: "diverse",
    title: { ro: "Diverse", ru: "Разное" },
    description: {
      ro: "Celelalte cele necesare pentru ceremonie: lumânări, textile și accesorii.",
      ru: "Прочее необходимое для церемонии: свечи, текстиль и аксессуары.",
    },
    image: img["showroom-3.jpg"],
  },
];

const offerNote: L = {
  ro: "Pentru acest produs oferim o ofertă personalizată. Disponibilitatea modelelor și a finisajelor poate varia; vă rugăm să ne contactați pentru confirmare.",
  ru: "На этот товар мы предоставляем индивидуальное предложение. Наличие моделей и отделок может отличаться — пожалуйста, свяжитесь с нами для подтверждения.",
};

export const extraInfo = offerNote;

export const products: Product[] = [
  // ---------------- SICRIE ----------------
  {
    slug: "sicriu-model-01-lacuit-premium",
    category: "sicrie",
    title: { ro: "Sicriu Model 01 — lăcuit premium", ru: "Гроб Модель 01 — лакированный премиум" },
    short: {
      ro: "Sicriu din lemn masiv, cu finisaj lăcuit în culoare mahon închis.",
      ru: "Гроб из массива дерева с лакированной отделкой цвета тёмный махагон.",
    },
    description: {
      ro: "Model din lemn masiv, cu finisaj lăcuit lucios și mânere metalice. Ornamentele aurii și liniile clasice îi dau un aspect sobru și îngrijit.",
      ru: "Модель из массива дерева с глянцевой лакированной отделкой и металлическими ручками. Золотые украшения и классические линии придают сдержанный и аккуратный вид.",
    },
    features: [
      { ro: "Material: lemn masiv", ru: "Материал: массив дерева" },
      { ro: "Finisaj: lac lucios", ru: "Отделка: глянцевый лак" },
      { ro: "Culoare: mahon închis", ru: "Цвет: тёмный махагон" },
      { ro: "Mânere și accesorii aurii", ru: "Ручки и аксессуары золотистого цвета" },
    ],
    images: [img["sicriu-model-01-lacuit.jpg"], img["sicriu-lacuit-cires.jpg"]],
  },
  {
    slug: "sicriu-model-02-lemn-natur",
    category: "sicrie",
    title: { ro: "Sicriu Model 02 — lemn natur", ru: "Гроб Модель 02 — натуральное дерево" },
    short: {
      ro: "Sicriu din lemn natur, cu lac mat și protecție premium.",
      ru: "Гроб из натурального дерева с матовым лаком и премиальной защитой.",
    },
    description: {
      ro: "Model din lemn natur, cu finisaj mat care păstrează textura lemnului. Ornamentele aurii și mânerele elegante completează discret linia sobră a modelului.",
      ru: "Модель из натурального дерева с матовой отделкой, сохраняющей текстуру древесины. Золотые украшения и элегантные ручки деликатно дополняют сдержанную линию модели.",
    },
    features: [
      { ro: "Material: lemn masiv natural", ru: "Материал: натуральный массив дерева" },
      { ro: "Finisaj: lac mat, protecție premium", ru: "Отделка: матовый лак, премиальная защита" },
      { ro: "Culoare: lemn natur, stejar auriu", ru: "Цвет: натуральное дерево, золотистый дуб" },
    ],
    images: [
      img["sicriu-model-02-natur.jpg"],
      img["sicriu-model-02-natur-b.jpg"],
      img["sicriu-model-02-natur-c.jpg"],
    ],
  },
  {
    slug: "sicriu-model-03-lemn-natur",
    category: "sicrie",
    title: { ro: "Sicriu Model 03 — lemn natur", ru: "Гроб Модель 03 — натуральное дерево" },
    short: {
      ro: "Sicriu din lemn natur, cu finisaj lăcuit în nuanță de nuc.",
      ru: "Гроб из натурального дерева с лакированной отделкой в оттенке ореха.",
    },
    description: {
      ro: "Model clasic din lemn natur, cu finisaj lăcuit în nuanță caldă de nuc deschis. Ornamentele aurii sunt discrete, iar mânerele sunt elegante și rezistente.",
      ru: "Классическая модель из натурального дерева с лакированной отделкой в тёплом оттенке светлого ореха. Золотые украшения сдержанны, ручки элегантны и прочны.",
    },
    features: [
      { ro: "Material: lemn masiv natural", ru: "Материал: натуральный массив дерева" },
      { ro: "Finisaj: lac lucios, protecție premium", ru: "Отделка: глянцевый лак, премиальная защита" },
      { ro: "Culoare: nuc deschis", ru: "Цвет: светлый орех" },
    ],
    images: [img["sicriu-model-03-natur.jpg"], img["sicriu-model-03-natur-b.jpg"]],
  },
  {
    slug: "sicriu-model-04-alb",
    category: "sicrie",
    title: { ro: "Sicriu Model 04 — alb lucios", ru: "Гроб Модель 04 — белый глянец" },
    short: {
      ro: "Sicriu din lemn natural, cu finisaj alb lucios.",
      ru: "Гроб из натурального дерева с белой глянцевой отделкой.",
    },
    description: {
      ro: "Model cu finisaj alb lucios, discret și luminos, cu ornamente aurii și mânere elegante.",
      ru: "Модель с белой глянцевой отделкой — сдержанная и светлая, с золотыми украшениями и элегантными ручками.",
    },
    features: [
      { ro: "Material: lemn masiv natural", ru: "Материал: натуральный массив дерева" },
      { ro: "Finisaj: alb lucios premium", ru: "Отделка: белый глянец премиум" },
      { ro: "Culoare: alb", ru: "Цвет: белый" },
    ],
    images: [img["sicriu-model-04-alb.jpg"], img["sicriu-model-05-alb.jpg"]],
  },
  {
    slug: "sicriu-model-05-alb",
    category: "sicrie",
    title: { ro: "Sicriu Model 05 — alb lucios", ru: "Гроб Модель 05 — белый глянец" },
    short: {
      ro: "Sicriu alb, cu linii simple și ornamente discrete.",
      ru: "Белый гроб с простыми линиями и сдержанными украшениями.",
    },
    description: {
      ro: "Model alb, cu linii simple și finisaj lucios. Potrivit pentru o ceremonie luminoasă și sobră.",
      ru: "Белая модель с простыми линиями и глянцевой отделкой. Подходит для светлой и сдержанной церемонии.",
    },
    features: [
      { ro: "Material: lemn masiv natural", ru: "Материал: натуральный массив дерева" },
      { ro: "Finisaj: alb lucios premium", ru: "Отделка: белый глянец премиум" },
    ],
    images: [img["sicriu-model-05-alb.jpg"], img["sicriu-capitonat-alb.jpg"]],
  },
  {
    slug: "sicriu-model-06-alb",
    category: "sicrie",
    title: { ro: "Sicriu Model 06 — alb", ru: "Гроб Модель 06 — белый" },
    short: {
      ro: "Sicriu alb, cu ornamente aurii și cruce aplicată.",
      ru: "Белый гроб с золотыми украшениями и накладным крестом.",
    },
    description: {
      ro: "Model alb, cu lac lucios premium, cruce aplicată și ornamente aurii, într-un design echilibrat.",
      ru: "Белая модель с премиальным глянцевым лаком, накладным крестом и золотыми украшениями, в гармоничном дизайне.",
    },
    features: [
      { ro: "Material: lemn masiv natural", ru: "Материал: натуральный массив дерева" },
      { ro: "Finisaj: lac alb lucios premium", ru: "Отделка: белый глянцевый лак премиум" },
      { ro: "Ornamente aurii și mânere elegante", ru: "Золотые украшения и элегантные ручки" },
    ],
    images: [img["sicriu-model-06-alb.jpg"]],
  },
  {
    slug: "sicriu-model-06-lemn-natur",
    category: "sicrie",
    title: { ro: "Sicriu Model 06 — lemn natur", ru: "Гроб Модель 06 — натуральное дерево" },
    short: {
      ro: "Sicriu din lemn natur, cu lac natural și protecție premium.",
      ru: "Гроб из натурального дерева с натуральным лаком и премиальной защитой.",
    },
    description: {
      ro: "Model din lemn natur, cu finisaj care păstrează culoarea și textura lemnului, ornamente aurii și mânere elegante.",
      ru: "Модель из натурального дерева с отделкой, сохраняющей цвет и текстуру древесины, с золотыми украшениями и элегантными ручками.",
    },
    features: [
      { ro: "Material: lemn masiv natural", ru: "Материал: натуральный массив дерева" },
      { ro: "Finisaj: lac natural, protecție premium", ru: "Отделка: натуральный лак, премиальная защита" },
    ],
    images: [img["sicriu-model-06-natur.jpg"], img["sicriu-model-06-natur-2.jpg"]],
  },
  {
    slug: "sicriu-model-06-bordo",
    category: "sicrie",
    title: { ro: "Sicriu Model 06 — bordo", ru: "Гроб Модель 06 — бордо" },
    short: {
      ro: "Sicriu în nuanță bordo, cu ornamente aurii.",
      ru: "Гроб бордового оттенка с золотыми украшениями.",
    },
    description: {
      ro: "Model în nuanță bordo, cu finisaj lăcuit și ornamente aurii, într-o linie clasică.",
      ru: "Модель бордового оттенка с лакированной отделкой и золотыми украшениями, в классической линии.",
    },
    images: [img["sicriu-model-06-bordo.jpg"], img["sicriu-lacuit-visiniu.jpg"]],
  },
  {
    slug: "sicriu-capitonat-bordo",
    category: "sicrie",
    title: { ro: "Sicriu capitonat bordo", ru: "Гроб с бордовой обивкой" },
    short: {
      ro: "Sicriu capitonat, cu tapițerie bordo și cruce aurie.",
      ru: "Гроб с бордовой обивкой и золотым крестом.",
    },
    description: {
      ro: "Model capitonat, cu tapițerie interioară bordo și cruce aurie aplicată pe capac. Aspect sobru și îngrijit.",
      ru: "Модель с обивкой, внутренней бордовой отделкой и золотым крестом на крышке. Сдержанный и аккуратный вид.",
    },
    images: [img["sicriu-capitonat-bordo.jpg"], img["sicriu-capitonat-visiniu.jpg"]],
  },
  {
    slug: "sicriu-capitonat-negru",
    category: "sicrie",
    title: { ro: "Sicriu capitonat negru", ru: "Гроб с чёрной обивкой" },
    short: {
      ro: "Sicriu capitonat în negru, cu detalii aurii.",
      ru: "Гроб с чёрной обивкой и золотыми деталями.",
    },
    description: {
      ro: "Model capitonat în negru, cu tapițerie interioară și cruce aurie. O variantă clasică și discretă.",
      ru: "Модель с чёрной обивкой, внутренней отделкой и золотым крестом. Классический и сдержанный вариант.",
    },
    images: [img["sicriu-capitonat-negru.jpg"]],
  },
  {
    slug: "sicriu-capitonat-albastru",
    category: "sicrie",
    title: { ro: "Sicriu capitonat albastru", ru: "Гроб с синей обивкой" },
    short: {
      ro: "Sicriu capitonat în albastru, cu cruce aurie.",
      ru: "Гроб с синей обивкой и золотым крестом.",
    },
    description: {
      ro: "Model capitonat în albastru, cu tapițerie interioară îngrijită și cruce aurie aplicată.",
      ru: "Модель с синей обивкой, аккуратной внутренней отделкой и накладным золотым крестом.",
    },
    images: [
      img["sicriu-capitonat-albastru.jpg"],
      img["sicriu-capitonat-albastru-2.jpg"],
      img["sicriu-lacuit-albastru.jpg"],
    ],
  },
  {
    slug: "sicriu-capitonat-alb",
    category: "sicrie",
    title: { ro: "Sicriu capitonat alb", ru: "Гроб с белой обивкой" },
    short: {
      ro: "Sicriu capitonat în alb, cu cruce aurie.",
      ru: "Гроб с белой обивкой и золотым крестом.",
    },
    description: {
      ro: "Model capitonat în alb, cu aspect luminos și discret, potrivit pentru o ceremonie sobră.",
      ru: "Модель с белой обивкой, светлым и сдержанным видом, подходящая для тихой церемонии.",
    },
    images: [img["sicriu-capitonat-alb.jpg"]],
  },
  {
    slug: "sicriu-lacuit-cires",
    category: "sicrie",
    title: { ro: "Sicriu lăcuit cireș", ru: "Гроб лакированный, вишня" },
    short: {
      ro: "Sicriu lăcuit în nuanță de cireș.",
      ru: "Гроб, лакированный в оттенке вишни.",
    },
    description: {
      ro: "Model lăcuit în nuanță caldă de cireș, cu cruce aplicată pe capac.",
      ru: "Модель, лакированная в тёплом оттенке вишни, с накладным крестом на крышке.",
    },
    images: [img["sicriu-lacuit-cires.jpg"], img["sicriu-lac-1.jpg"]],
  },
  {
    slug: "sicriu-lemn-natur-clasic",
    category: "sicrie",
    title: { ro: "Sicriu lemn natur, model clasic", ru: "Гроб из натурального дерева, классическая модель" },
    short: {
      ro: "Sicriu simplu din lemn, model clasic.",
      ru: "Простой деревянный гроб, классическая модель.",
    },
    description: {
      ro: "Model simplu din lemn, cu linii clasice și finisaj natural. O alegere sobră și potrivită oricărei ceremonii.",
      ru: "Простая деревянная модель с классическими линиями и натуральной отделкой. Сдержанный выбор, подходящий для любой церемонии.",
    },
    images: [img["sicriu-natur-1.jpg"], img["sicrie-showroom-1.jpg"]],
  },

  // ---------------- CRUCI ----------------
  {
    slug: "cruce-lemn-clasica",
    category: "cruci",
    title: { ro: "Cruce din lemn, model clasic", ru: "Деревянный крест, классическая модель" },
    short: {
      ro: "Cruce din lemn masiv, cu finisaj închis.",
      ru: "Крест из массива дерева с тёмной отделкой.",
    },
    description: {
      ro: "Cruce din lemn masiv, cu braț simplu și finisaj închis, potrivită pentru mormânt.",
      ru: "Крест из массива дерева с простой перекладиной и тёмной отделкой, подходящий для могилы.",
    },
    images: [img["cruce-1.jpg"]],
  },
  {
    slug: "cruce-lemn-ortodoxa",
    category: "cruci",
    title: { ro: "Cruce din lemn, model ortodox", ru: "Деревянный крест, православная модель" },
    short: {
      ro: "Cruce ortodoxă din lemn masiv, cu trei brațe.",
      ru: "Православный крест из массива дерева, с тремя перекладинами.",
    },
    description: {
      ro: "Cruce ortodoxă din lemn masiv, cu trei brațe, realizată în formă tradițională.",
      ru: "Православный крест из массива дерева, с тремя перекладинами, выполненный в традиционной форме.",
    },
    images: [img["cruce-2.jpg"]],
  },
  {
    slug: "cruci-model-showroom",
    category: "cruci",
    title: { ro: "Cruci — modele disponibile", ru: "Кресты — доступные модели" },
    short: {
      ro: "Diverse modele de cruci, disponibile în showroom.",
      ru: "Различные модели крестов, доступные в шоуруме.",
    },
    description: {
      ro: "Punem la dispoziție mai multe modele de cruci, în funcție de tradiție și de dorințele familiei. Vă rugăm să ne contactați pentru modelele disponibile.",
      ru: "Мы предлагаем несколько моделей крестов в зависимости от традиции и пожеланий семьи. Пожалуйста, свяжитесь с нами для уточнения наличия.",
    },
    images: [img["showroom-3.jpg"], img["showroom-1.jpg"]],
  },

  // ---------------- COROANE ----------------
  {
    slug: "coroana-alb-rosu",
    category: "coroane",
    title: { ro: "Coroană albă și roșie", ru: "Венок белый с красным" },
    short: {
      ro: "Coroană funerară în aranjament alb și roșu.",
      ru: "Похоронный венок в бело-красной композиции.",
    },
    description: {
      ro: "Coroană funerară realizată într-un aranjament sobru, în nuanțe de alb și roșu.",
      ru: "Похоронный венок, выполненный в сдержанной композиции в белых и красных тонах.",
    },
    images: [img["coroana-1.jpg"], img["coroana-2.jpg"]],
  },
  {
    slug: "coroana-cale-albe",
    category: "coroane",
    title: { ro: "Coroană cu cale albe", ru: "Венок с белыми каллами" },
    short: {
      ro: "Coroană cu aranjament delicat, în nuanțe deschise.",
      ru: "Венок с деликатной композицией в светлых тонах.",
    },
    description: {
      ro: "Coroană cu aranjament delicat, în nuanțe deschise, potrivită pentru o ceremonie discretă.",
      ru: "Венок с деликатной композицией в светлых тонах, подходящий для тихой церемонии.",
    },
    images: [img["coroana-6.jpg"], img["coroana-3.jpg"]],
  },
  {
    slug: "coroana-rotunda-clasica",
    category: "coroane",
    title: { ro: "Coroană rotundă clasică", ru: "Классический круглый венок" },
    short: {
      ro: "Coroană rotundă, cu flori în nuanțe calde.",
      ru: "Круглый венок с цветами в тёплых тонах.",
    },
    description: {
      ro: "Coroană rotundă, într-un aranjament clasic, cu flori în nuanțe calde și verdeață.",
      ru: "Круглый венок в классической композиции с цветами тёплых тонов и зеленью.",
    },
    images: [img["coroana-4.jpg"], img["coroana-7.jpg"]],
  },
  {
    slug: "jerba-funerara",
    category: "coroane",
    title: { ro: "Jerbă funerară", ru: "Похоронная композиция" },
    short: {
      ro: "Jerbă funerară, într-un aranjament alungit.",
      ru: "Похоронная композиция вытянутой формы.",
    },
    description: {
      ro: "Jerbă funerară realizată într-un aranjament alungit, potrivită pentru așezarea pe sicriu sau pe mormânt.",
      ru: "Похоронная композиция вытянутой формы, подходящая для размещения на гробе или на могиле.",
    },
    images: [img["coroana-5.jpg"], img["coroana-2.jpg"]],
  },

  // ---------------- ACCESORII ----------------
  {
    slug: "accesorii-natural",
    category: "accesorii-pentru-cruce",
    title: { ro: "Accesorii — linia Natural", ru: "Аксессуары — линия Natural" },
    short: {
      ro: "Set de accesorii și ornamente în nuanțe naturale.",
      ru: "Набор аксессуаров и украшений в натуральных тонах.",
    },
    description: {
      ro: "Set de accesorii funerare în nuanțe naturale: ornamente, cruce aplicată, mânere și elemente de finisaj.",
      ru: "Набор похоронных аксессуаров в натуральных тонах: украшения, накладной крест, ручки и элементы отделки.",
    },
    images: [img["accesorii-natural.jpg"]],
  },
  {
    slug: "accesorii-culori",
    category: "accesorii-pentru-cruce",
    title: { ro: "Accesorii — game de culori", ru: "Аксессуары — цветовая гамма" },
    short: {
      ro: "Accesorii disponibile în mai multe nuanțe.",
      ru: "Аксессуары, доступные в нескольких оттенках.",
    },
    description: {
      ro: "Accesorii și ornamente disponibile în mai multe nuanțe, pentru a se potrivi modelului ales.",
      ru: "Аксессуары и украшения, доступные в нескольких оттенках, чтобы соответствовать выбранной модели.",
    },
    images: [img["accesorii-culori.jpg"]],
  },
  {
    slug: "accesorii-prestige",
    category: "accesorii-pentru-cruce",
    title: { ro: "Accesorii — linia Prestige", ru: "Аксессуары — линия Prestige" },
    short: {
      ro: "Accesorii din gama superioară, cu detalii aurii.",
      ru: "Аксессуары высшей категории с золотыми деталями.",
    },
    description: {
      ro: "Accesorii din gama superioară, cu detalii aurii și finisaje îngrijite.",
      ru: "Аксессуары высшей категории с золотыми деталями и аккуратной отделкой.",
    },
    images: [img["accesorii-prestige.jpg"], img["accesorii-prestige-2.jpg"]],
  },

  // ---------------- FELINARE ----------------
  {
    slug: "felinar-cimitir-clasic",
    category: "felinare-pentru-cimitir",
    title: { ro: "Felinar pentru cimitir", ru: "Кладбищенский фонарь" },
    short: {
      ro: "Felinar pentru mormânt, model simplu.",
      ru: "Фонарь для могилы, простая модель.",
    },
    description: {
      ro: "Felinar pentru mormânt, în model simplu și rezistent. Modelele disponibile pot varia; vă rugăm să ne contactați.",
      ru: "Фонарь для могилы, простая и прочная модель. Доступные модели могут отличаться — пожалуйста, свяжитесь с нами.",
    },
    images: [img["showroom-4.jpg"]],
  },

  // ---------------- PROSOAPE ----------------
  {
    slug: "prosoape-inmormantare",
    category: "prosoape-de-inmormantare",
    title: { ro: "Prosoape de înmormântare", ru: "Похоронные полотенца" },
    short: {
      ro: "Prosoape necesare pentru ceremonie, conform tradiției.",
      ru: "Полотенца, необходимые для церемонии, согласно традиции.",
    },
    description: {
      ro: "Prosoape și textile folosite în cadrul ceremoniei, disponibile în mai multe variante. Vă rugăm să ne contactați pentru detalii.",
      ru: "Полотенца и текстиль, используемые в церемонии, доступны в нескольких вариантах. Пожалуйста, свяжитесь с нами для уточнения.",
    },
    images: [img["showroom-1.jpg"]],
  },

  // ---------------- DIVERSE ----------------
  {
    slug: "cele-necesare-ceremonie",
    category: "diverse",
    title: { ro: "Cele necesare pentru ceremonie", ru: "Всё необходимое для церемонии" },
    short: {
      ro: "Lumânări, textile și celelalte cele necesare.",
      ru: "Свечи, текстиль и прочее необходимое.",
    },
    description: {
      ro: "Punem la dispoziție cele necesare pentru ceremonie, astfel încât familia să nu fie nevoită să caute în altă parte.",
      ru: "Мы предоставляем всё необходимое для церемонии, чтобы семье не пришлось искать это в другом месте.",
    },
    images: [img["showroom-2.jpg"], img["showroom-3.jpg"]],
  },
  {
    slug: "amenajare-capela",
    category: "diverse",
    title: { ro: "Amenajarea locului de priveghi", ru: "Оформление места прощания" },
    short: {
      ro: "Amenajare discretă și îngrijită a spațiului de priveghi.",
      ru: "Тактичное и аккуратное оформление места прощания.",
    },
    description: {
      ro: "Ne ocupăm de amenajarea spațiului de priveghi, cu aranjamente florale discrete și cele necesare pentru ceremonie.",
      ru: "Мы занимаемся оформлением места прощания — сдержанные цветочные композиции и всё необходимое для церемонии.",
    },
    images: [img["capela-1.jpg"]],
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function productsByCategory(slug: string) {
  return products.filter((p) => p.category === slug);
}

export function getProduct(category: string, slug: string) {
  return products.find((p) => p.category === category && p.slug === slug);
}
