import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Traduções
const resources = {
  pt: {
    translation: {
      home: {
        title: "Olá, eu sou Raul Martins",
        subtitle: "Desenvolvedor Full Stack",
        description: "Bem-vindo ao meu portfólio",
      },
      language: {
        switch: "Alternar para {{lang}}",
      },
    },
  },
  en: {
    translation: {
      home: {
        title: "Hi, I'm Raul Martins",
        subtitle: "Full Stack Developer",
        description: "Welcome to my portfolio",
      },
      language: {
        switch: "Switch to {{lang}}",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pt", // idioma padrão
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
