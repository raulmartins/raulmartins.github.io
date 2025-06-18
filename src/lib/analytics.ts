// Google Analytics Measurement ID
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID!;

// Função para inicializar o Google Analytics
export const initGA = () => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: window.location.pathname,
    });
  }
};

// Função para rastrear eventos
export const trackEvent = (action: string, category: string, label: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
    });
  }
};

// Função específica para rastrear cliques no resume
export const trackResumeClick = () => {
  trackEvent("click", "Resume", "Download Resume");
};

// Declaração do tipo global para o gtag
declare global {
  interface Window {
    gtag: (
      command: string,
      action: string,
      params?: {
        page_path?: string;
        event_category?: string;
        event_label?: string;
      }
    ) => void;
  }
}
