import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

export type Lang = "ro" | "ru";
export type L = { ro: string; ru: string };

const STORAGE_KEY = "sfn-lang";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof dict) => string;
  tr: (value: L) => string;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ro");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "ru" || stored === "ro") setLangState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      setLang,
      t: (key) => dict[key][lang],
      tr: (value) => value[lang],
    }),
    [lang, setLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}

export const PHONE = "14808";

export const dict = {
  // navigation
  nav_home: { ro: "Acasă", ru: "Главная" },
  nav_about: { ro: "Despre noi", ru: "О нас" },
  nav_services: { ro: "Servicii", ru: "Услуги" },
  nav_packages: { ro: "Pachete funerare", ru: "Похоронные пакеты" },
  nav_products: { ro: "Produse funerare", ru: "Похоронные товары" },
  nav_contact: { ro: "Contact", ru: "Контакты" },
  menu: { ro: "Meniu", ru: "Меню" },
  close: { ro: "Închide", ru: "Закрыть" },

  brand: { ro: "Casa Funerară Sf. Nectarie", ru: "Похоронный дом Св. Нектарий" },
  motto: { ro: "Respect • Compasiune • Demnitate", ru: "Уважение • Сострадание • Достоинство" },
  nonstop: { ro: "Linie non-stop", ru: "Круглосуточная линия" },
  available_nonstop: { ro: "Disponibili non-stop", ru: "Доступны круглосуточно" },
  call_now: { ro: "Apelează 14808", ru: "Позвонить 14808" },
  request_consult: { ro: "Solicită consultanță", ru: "Запросить консультацию" },
  request_offer: { ro: "Solicită ofertă", ru: "Запросить предложение" },
  price_on_request: { ro: "Preț la cerere", ru: "Цена по запросу" },
  custom_offer: { ro: "Solicită o ofertă personalizată", ru: "Запросите индивидуальное предложение" },
  view_details: { ro: "Vezi detalii", ru: "Подробнее" },
  view_all: { ro: "Vezi toate", ru: "Смотреть все" },
  back: { ro: "Înapoi", ru: "Назад" },

  // home
  hero_title: {
    ro: "Alături de familie în cele mai grele clipe.",
    ru: "Рядом с семьёй в самые тяжёлые минуты.",
  },
  hero_subtitle: {
    ro: "Servicii funerare complete, cu respect, compasiune și demnitate.",
    ru: "Полный спектр похоронных услуг — с уважением, состраданием и достоинством.",
  },
  services_title: { ro: "Servicii funerare", ru: "Похоронные услуги" },
  services_lead: {
    ro: "Ne ocupăm de fiecare etapă, pentru ca familia să aibă timpul și liniștea necesare.",
    ru: "Мы берём на себя каждый этап, чтобы у семьи было время и спокойствие.",
  },
  about_title: { ro: "Despre noi", ru: "О нас" },
  about_lead: {
    ro: "Casa Funerară Sf. Nectarie este alături de familii în momente dificile, oferind sprijin, consiliere și servicii funerare organizate cu discreție și respect.",
    ru: "Похоронный дом Св. Нектарий находится рядом с семьями в трудные моменты, предлагая поддержку, консультации и похоронные услуги, организованные тактично и с уважением.",
  },
  why_title: { ro: "De ce noi", ru: "Почему мы" },
  packages_title: { ro: "Pachete funerare", ru: "Похоронные пакеты" },
  packages_lead: {
    ro: "Pachete organizate clar, adaptate situației și dorințelor familiei.",
    ru: "Чётко организованные пакеты, адаптированные к ситуации и пожеланиям семьи.",
  },
  products_title: { ro: "Produse funerare", ru: "Похоронные товары" },
  products_lead: {
    ro: "Un catalog sobru și îngrijit, din care puteți alege în liniște.",
    ru: "Сдержанный и аккуратный каталог, из которого можно спокойно выбрать.",
  },
  cta_final: {
    ro: "În momentele dificile, nu trebuie să treceți singuri prin toate etapele.",
    ru: "В трудные минуты вам не нужно проходить через все этапы в одиночку.",
  },
  categories_title: { ro: "Categorii de produse", ru: "Категории товаров" },
  included_products: { ro: "Produse incluse", ru: "Входящие товары" },
  included_services: { ro: "Servicii incluse", ru: "Входящие услуги" },
  extra_info: { ro: "Informații suplimentare", ru: "Дополнительная информация" },
  features: { ro: "Caracteristici", ru: "Характеристики" },
  gallery: { ro: "Galerie", ru: "Галерея" },
  related_products: { ro: "Alte produse din categorie", ru: "Другие товары категории" },

  // contact / form
  contact_title: { ro: "Contact", ru: "Контакты" },
  contact_lead: {
    ro: "Suntem disponibili non-stop. Ne puteți suna la orice oră sau ne puteți scrie folosind formularul.",
    ru: "Мы доступны круглосуточно. Вы можете позвонить в любое время или написать нам через форму.",
  },
  form_title: { ro: "Trimiteți-ne un mesaj", ru: "Напишите нам" },
  f_name: { ro: "Nume", ru: "Имя" },
  f_phone: { ro: "Telefon", ru: "Телефон" },
  f_email: { ro: "Email", ru: "Эл. почта" },
  f_subject: { ro: "Subiect", ru: "Тема" },
  f_interest: { ro: "Produs / pachet de interes (opțional)", ru: "Интересующий товар / пакет (необязательно)" },
  f_message: { ro: "Mesaj", ru: "Сообщение" },
  f_send: { ro: "Trimite mesajul", ru: "Отправить сообщение" },
  f_sending: { ro: "Se trimite...", ru: "Отправка..." },
  f_success: {
    ro: "Vă mulțumim pentru mesaj. Am primit solicitarea dumneavoastră și vă vom contacta cât mai curând posibil.",
    ru: "Благодарим вас за сообщение. Мы получили ваш запрос и свяжемся с вами в ближайшее время.",
  },
  f_error: {
    ro: "Mesajul nu a putut fi trimis. Vă rugăm să încercați din nou sau să ne apelați la 14808.",
    ru: "Сообщение не удалось отправить. Пожалуйста, попробуйте ещё раз или позвоните нам по номеру 14808.",
  },
  f_required: { ro: "Câmp obligatoriu", ru: "Обязательное поле" },
  f_invalid_email: { ro: "Adresă de email invalidă", ru: "Неверный адрес эл. почты" },
  f_too_long: { ro: "Text prea lung", ru: "Слишком длинный текст" },

  footer_links: { ro: "Navigare", ru: "Навигация" },
  footer_categories: { ro: "Categorii produse", ru: "Категории товаров" },
  rights: { ro: "Toate drepturile rezervate.", ru: "Все права защищены." },
  no_prices_note: {
    ro: "Nu afișăm prețuri online. Vă oferim o ofertă personalizată, în funcție de nevoile familiei.",
    ru: "Мы не публикуем цены онлайн. Мы подготовим индивидуальное предложение с учётом нужд семьи.",
  },
} satisfies Record<string, L>;
