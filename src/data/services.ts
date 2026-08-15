import type { L } from "@/lib/i18n";
import { img } from "@/assets/images";

export type Service = {
  slug: string;
  title: L;
  short: L;
  image: string;
  body: L[];
  points: L[];
};

export const services: Service[] = [
  {
    slug: "transport-funerar",
    title: { ro: "Transport funerar", ru: "Ритуальный транспорт" },
    short: {
      ro: "Transport funerar realizat cu discreție, cu autovehicule special amenajate.",
      ru: "Ритуальная перевозка, выполняемая тактично, на специально оборудованных автомобилях.",
    },
    image: img["transport-1.jpg"],
    body: [
      {
        ro: "Asigurăm transportul persoanei decedate cu autovehicule special amenajate, în condiții de siguranță și discreție. Preluarea se poate face de la domiciliu, din spital sau din altă locație stabilită împreună cu familia.",
        ru: "Мы обеспечиваем перевозку умершего на специально оборудованных автомобилях, безопасно и тактично. Приём возможен из дома, из больницы или из другого места, согласованного с семьёй.",
      },
      {
        ro: "Coordonăm deplasările necesare pe parcursul întregii ceremonii, inclusiv transportul către biserică și către cimitir.",
        ru: "Мы координируем все необходимые перемещения на протяжении церемонии, включая транспорт до церкви и до кладбища.",
      },
    ],
    points: [
      { ro: "Preluare de la domiciliu sau din spital", ru: "Приём из дома или из больницы" },
      { ro: "Autovehicule funerare special amenajate", ru: "Специально оборудованные катафалки" },
      { ro: "Transport către biserică și cimitir", ru: "Транспорт до церкви и кладбища" },
      { ro: "Disponibilitate non-stop", ru: "Круглосуточная доступность" },
    ],
  },
  {
    slug: "pregatirea-persoanei-decedate",
    title: { ro: "Pregătirea persoanei decedate", ru: "Подготовка умершего" },
    short: {
      ro: "Pregătire realizată cu grijă și respect, conform dorințelor familiei.",
      ru: "Подготовка, выполненная бережно и с уважением, согласно пожеланиям семьи.",
    },
    image: img["capela-1.jpg"],
    body: [
      {
        ro: "Ne ocupăm de spălarea, îmbrăcarea și aranjarea persoanei decedate, cu atenție la fiecare detaliu și cu respect deplin față de familie și de tradiție.",
        ru: "Мы занимаемся омовением, облачением и подготовкой умершего, внимательно относясь к каждой детали и с полным уважением к семье и традиции.",
      },
      {
        ro: "Pregătirea se realizează în spații corespunzătoare, iar familia poate transmite dorințe specifice privind ținuta sau obiectele personale.",
        ru: "Подготовка проводится в соответствующих помещениях; семья может высказать особые пожелания относительно одежды или личных вещей.",
      },
    ],
    points: [
      { ro: "Spălare și îmbrăcare", ru: "Омовение и облачение" },
      { ro: "Aranjare și cosmetizare discretă", ru: "Деликатное оформление и косметика" },
      { ro: "Respectarea dorințelor familiei", ru: "Соблюдение пожеланий семьи" },
    ],
  },
  {
    slug: "imbalsamare",
    title: { ro: "Îmbălsămare", ru: "Бальзамирование" },
    short: {
      ro: "Serviciu de îmbălsămare realizat de personal specializat.",
      ru: "Услуга бальзамирования, выполняемая специалистами.",
    },
    image: img["showroom-2.jpg"],
    body: [
      {
        ro: "Serviciul de îmbălsămare este realizat de personal specializat și este recomandat atunci când perioada dintre deces și înmormântare este mai lungă.",
        ru: "Услуга бальзамирования выполняется квалифицированным персоналом и рекомендуется, когда период между смертью и погребением более продолжительный.",
      },
      {
        ro: "Vă oferim toate informațiile necesare pentru a decide în cunoștință de cauză, fără grabă și fără presiune.",
        ru: "Мы предоставим всю необходимую информацию, чтобы вы могли принять решение осознанно, без спешки и давления.",
      },
    ],
    points: [
      { ro: "Personal specializat", ru: "Квалифицированный персонал" },
      { ro: "Consiliere prealabilă", ru: "Предварительная консультация" },
      { ro: "Disponibil non-stop", ru: "Доступно круглосуточно" },
    ],
  },
  {
    slug: "organizarea-inmormantarii",
    title: { ro: "Organizarea înmormântării", ru: "Организация похорон" },
    short: {
      ro: "Coordonăm toate etapele ceremoniei, de la primul telefon până la final.",
      ru: "Мы координируем все этапы церемонии — от первого звонка до завершения.",
    },
    image: img["capela-1.jpg"],
    body: [
      {
        ro: "Preluăm organizarea completă a ceremoniei: stabilirea programului, coordonarea cu biserica și cu cimitirul, pregătirea locului de priveghi, transportul și toate detaliile logistice.",
        ru: "Мы берём на себя полную организацию церемонии: составление расписания, согласование с церковью и кладбищем, подготовку места прощания, транспорт и все логистические детали.",
      },
      {
        ro: "Rămânem alături de familie pe tot parcursul, astfel încât nimic să nu fie lăsat la voia întâmplării.",
        ru: "Мы остаёмся рядом с семьёй на протяжении всего процесса, чтобы ничто не было упущено.",
      },
    ],
    points: [
      { ro: "Program și coordonare completă", ru: "Расписание и полная координация" },
      { ro: "Legătura cu biserica și cimitirul", ru: "Взаимодействие с церковью и кладбищем" },
      { ro: "Pregătirea locului de priveghi", ru: "Подготовка места прощания" },
      { ro: "Sprijin pe tot parcursul ceremoniei", ru: "Поддержка на всём протяжении церемонии" },
    ],
  },
  {
    slug: "acte-si-documente",
    title: { ro: "Acte și documente", ru: "Документы и справки" },
    short: {
      ro: "Ne ocupăm de formalitățile administrative necesare.",
      ru: "Мы занимаемся необходимыми административными формальностями.",
    },
    image: img["documente-1.jpg"],
    body: [
      {
        ro: "Vă ajutăm cu întocmirea și obținerea documentelor necesare, astfel încât familia să nu fie nevoită să se deplaseze inutil în perioada aceasta.",
        ru: "Мы помогаем оформить и получить необходимые документы, чтобы семье не приходилось лишний раз ездить в этот период.",
      },
      {
        ro: "Vă explicăm clar fiecare pas și ce documente sunt necesare în situația dumneavoastră.",
        ru: "Мы понятно объясним каждый шаг и какие документы нужны именно в вашей ситуации.",
      },
    ],
    points: [
      { ro: "Îndrumare pas cu pas", ru: "Пошаговое сопровождение" },
      { ro: "Întocmirea dosarului necesar", ru: "Подготовка необходимого пакета документов" },
      { ro: "Reducerea deplasărilor familiei", ru: "Меньше поездок для семьи" },
    ],
  },
  {
    slug: "produse-funerare",
    title: { ro: "Produse funerare", ru: "Похоронные товары" },
    short: {
      ro: "Sicrie, cruci, coroane, accesorii și celelalte cele necesare.",
      ru: "Гробы, кресты, венки, аксессуары и всё необходимое.",
    },
    image: img["sicrie-showroom-1.jpg"],
    body: [
      {
        ro: "Punem la dispoziție o gamă completă de produse funerare, prezentate într-un catalog sobru și îngrijit. Vă însoțim în alegere, fără grabă.",
        ru: "Мы предлагаем полный ассортимент похоронных товаров, представленных в сдержанном и аккуратном каталоге. Мы сопровождаем вас в выборе, без спешки.",
      },
      {
        ro: "Pentru fiecare produs oferim o ofertă personalizată, în funcție de alegerile familiei.",
        ru: "На каждый товар мы предоставляем индивидуальное предложение в зависимости от выбора семьи.",
      },
    ],
    points: [
      { ro: "Sicrie din lemn natur și lăcuit", ru: "Гробы из натурального и лакированного дерева" },
      { ro: "Cruci, coroane și accesorii", ru: "Кресты, венки и аксессуары" },
      { ro: "Cele necesare pentru ceremonie", ru: "Всё необходимое для церемонии" },
    ],
  },
  {
    slug: "consultanta",
    title: { ro: "Consultanță", ru: "Консультация" },
    short: {
      ro: "Vă explicăm calm toate opțiunile și etapele, fără presiune.",
      ru: "Мы спокойно объясним все варианты и этапы, без давления.",
    },
    image: img["showroom-3.jpg"],
    body: [
      {
        ro: "Un singur telefon este suficient. Vă ascultăm, vă explicăm etapele și vă ajutăm să luați deciziile necesare, în ritmul dumneavoastră.",
        ru: "Достаточно одного звонка. Мы выслушаем вас, объясним этапы и поможем принять необходимые решения — в вашем темпе.",
      },
      {
        ro: "Consultanța este oferită non-stop, la telefon sau față în față.",
        ru: "Консультация предоставляется круглосуточно, по телефону или лично.",
      },
    ],
    points: [
      { ro: "Consultanță telefonică non-stop", ru: "Круглосуточная консультация по телефону" },
      { ro: "Explicații clare, fără presiune", ru: "Понятные объяснения, без давления" },
      { ro: "Soluții personalizate", ru: "Индивидуальные решения" },
    ],
  },
];

export const whyUs: { title: L; text: L }[] = [
  {
    title: { ro: "Disponibilitate non-stop", ru: "Круглосуточная доступность" },
    text: {
      ro: "Răspundem la telefon la orice oră, în orice zi.",
      ru: "Мы отвечаем на звонки в любое время, в любой день.",
    },
  },
  {
    title: { ro: "Respect și demnitate", ru: "Уважение и достоинство" },
    text: {
      ro: "Tratăm fiecare familie și fiecare ceremonie cu deplin respect.",
      ru: "Мы относимся к каждой семье и каждой церемонии с полным уважением.",
    },
  },
  {
    title: { ro: "Consultanță", ru: "Консультация" },
    text: {
      ro: "Vă explicăm calm etapele și opțiunile disponibile.",
      ru: "Мы спокойно объясним этапы и доступные варианты.",
    },
  },
  {
    title: { ro: "Servicii complete", ru: "Полный спектр услуг" },
    text: {
      ro: "De la transport și acte, până la produse și organizare.",
      ru: "От транспорта и документов до товаров и организации.",
    },
  },
  {
    title: { ro: "Atenție la detalii", ru: "Внимание к деталям" },
    text: {
      ro: "Ne ocupăm de fiecare detaliu, oricât de mic.",
      ru: "Мы заботимся о каждой детали, какой бы малой она ни была.",
    },
  },
  {
    title: { ro: "Soluții personalizate", ru: "Индивидуальные решения" },
    text: {
      ro: "Adaptăm serviciile la dorințele și posibilitățile familiei.",
      ru: "Мы адаптируем услуги к пожеланиям и возможностям семьи.",
    },
  },
];
