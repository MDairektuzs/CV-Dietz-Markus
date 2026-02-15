export type EventCategory = "work" | "education" | "private";

export interface CVEvent {
  id: string;
  title: string;
  category: EventCategory;
  start_date: string;
  end_date: string | null;
  organization: string | null;
  location: string | null;
  summary: string;
  details: string;
  private_default_hidden: boolean;
  milestone?: boolean;
  sort_order?: number;
}

export const events: CVEvent[] = [
  {
    id: "edu-2",
    title: "Ausbildung zum Fertigungsmechaniker",
    category: "work",
    start_date: "2009-09",
    end_date: "2012-01",
    organization: "BMW Werk München",
    location: "München",
    summary: "Verkürzte Berufsausbildung zum Fertigungsmechaniker (2,5 Jahre).",
    details:
      "Verkürzte duale Ausbildung zum Fertigungsmechaniker bei der BMW Group am Werk München (2,5 Jahre statt regulär 3 Jahre).",
    private_default_hidden: false,
  },
  {
    id: "edu-3",
    title: "Staatlich geprüfter Maschinenbautechniker",
    category: "education",
    start_date: "2015-05",
    end_date: "2018-11",
    organization: "DAA Technikum",
    location: null,
    summary: "Weiterbildung zum staatlich geprüften Maschinenbautechniker.",
    details: "Berufsbegleitende Weiterbildung zum staatlich geprüften Maschinenbautechniker am DAA Technikum.",
    private_default_hidden: false,
  },
  {
    id: "edu-4",
    title: "B.A. Digital Business (Data Science)",
    category: "education",
    start_date: "2020-08",
    end_date: "2023-07",
    organization: "IU International University",
    location: null,
    summary:
      "Fernstudium zum Bachelor of Arts in Digital Business (Schwerpunkt Data Science) an der IU International University.",
    details: "Fernstudium zum Bachelor of Arts in Digital Business mit Schwerpunkt Data Science an der IU International University.",
    private_default_hidden: false,
  },
  {
    id: "edu-5",
    title: "Bachelorarbeit: Prompt Engineering",
    category: "education",
    start_date: "2023-07-01",
    end_date: null,
    organization: "IU International University",
    location: null,
    summary:
      "Bachelorarbeit im Rahmen des Studiums Digital Business zum Thema Text-to-Text Prompt Engineering for Generative AI.",
    details: "Bachelorarbeit zum Thema Text-to-Text Prompt Engineering for Generative AI im Studiengang Digital Business.",
    private_default_hidden: false,
    milestone: true,
  },
  {
    id: "work-1",
    title: "Fachkraft Zerspanung",
    category: "work",
    start_date: "2012-02",
    end_date: "2018-06",
    organization: "TP-153 Mechanische Fertigung",
    location: "München",
    summary: "Programmierung und Fertigung komplexer Bauteile auf CNC-Maschinen.",
    details:
      "Fachkraft Zerspanung in der mechanischen Fertigung TP-153. Programmierung und Bedienung von CNC-Maschinen mit TEBIS (CAD/CAM). Fertigung komplexer Bauteile auf Klein-, Mittel- und Großmaschinen. Verantwortung für Qualität, Maßhaltigkeit und Prozessstabilität.",
    private_default_hidden: false,
  },
  {
    id: "work-2",
    title: "Fertigungsmittelkonstrukteur",
    category: "work",
    start_date: "2018-07",
    end_date: "2022-01",
    organization: "TP-152 Werkzeug- und Anlagenbau",
    location: "München",
    summary: "Konstruktion komplexer Presswerkzeuge mit CATIA V5.",
    details:
      "Fertigungsmittelkonstrukteur im Werkzeug- und Anlagenbau TP-152. Konstruktion komplexer Presswerkzeuge mit CATIA V5. Spezialist für PHS, Formhärten und Warmumformen. Durchführung konstruktiver Analysen und Optimierungen. Erste Digitalisierungsinitiativen (VBA-gestützte Prozessautomatisierungen).",
    private_default_hidden: false,
  },
  {
    id: "work-3",
    title: "Data Scientist",
    category: "work",
    start_date: "2022-02",
    end_date: "2023-05",
    organization: "TA-157 Digitalisierung Qualität",
    location: null,
    summary: "Datengetriebene Lösungen im Qualitätsumfeld.",
    details:
      "Data Scientist im Digitalisierungsteam TA-157 Qualität. Entwicklung datengetriebener Lösungen im Qualitätsumfeld. Pilotierung einer standortübergreifenden PowerApps-Applikation. Konzeption und Umsetzung eines gDMS-Dashboards in Power BI. Datenaufbereitung, Modellierung und Visualisierung zur Entscheidungsunterstützung.",
    private_default_hidden: false,
  },
  {
    id: "work-4",
    title: "Shaper Reporting & Analytics",
    category: "work",
    start_date: "2023-06",
    end_date: "2024-04",
    organization: "TA-157 Qualität Idea to Offer",
    location: null,
    summary: "Konzeptionelle Weiterentwicklung von DART als konzernweiten Service.",
    details:
      "•	Shaper Reporting & Analytics bei TA-157 Qualität Idea to Offer\n•	Ausarbeitung und bereichsübergreifende Abstimmung des Referenzprozesses Data Analytics OtD. Konzeptionelle Weiterentwicklung von DART als konzernweiten Service. Aufbau erster Governance-, Rollen- und Strukturprinzipien für R&A-Szenarien. Impulsgeber für KI-Use-Cases in Qualität und Shopfloor.Digital.",
    private_default_hidden: false,
  },
  {
    id: "work-5",
    title: "Shaper PST-VIII - Reporting & Analytics",
    category: "work",
    start_date: "2024-05",
    end_date: null,
    organization: "TA-134MU Rotor/Stator/Montage Dingolfing Planungssysteme & Digitalisierung Antrieb",
    location: "1.50 FIZ Nord & W2.20 Dingolfing",
    summary:
      "Planungssysteme & Digitalisierung Antrieb – Zentrale Schnittstelle zwischen Technologie Antrieb und technologieübergreifendem Prozess-Service-Team VIII.",
    details:
      "•	Zentrale Schnittstelle zwischen Technologie Antrieb und technologieübergreifendem Prozess-Service-Team VIII\n•	Konzeption, Aufbau und Weiterentwicklung der konzernweiten Shopfloor-Plattform DART (Data Analytics Reporting Tool)\n•	End-to-End-Steuerung von Anforderungen: Strukturierung, Priorisierung, Umsetzung durch externe IT, Testing und Release-Freigabe\n•	Rollout- und Governance-Verantwortung (u. a. UX/UI, Rollen- und Berechtigungskonzepte, Werk Oxford 07/2026)\n	Etablierung des Referenzprozesses „OtD.00.05 - Data Analytics OtD“ als Local Process Owner bei TA\n•	Multiplikator für Generative AI / KI (Use-Case-Identifikation, Enablement, Wissenstransfer) bei SF.D & TA-13",
    private_default_hidden: false,
  },
  {
    id: "priv-1",
    title: "Hochzeit",
    category: "private",
    start_date: "2021-08-20",
    end_date: null,
    organization: null,
    location: null,
    summary: "Hochzeit.",
    details: "Hochzeit am 20. August 2021.",
    private_default_hidden: true,
  },
  {
    id: "priv-2",
    title: "Geburt Sohn Kaleo",
    category: "private",
    start_date: "2022-02-24",
    end_date: null,
    organization: null,
    location: null,
    summary: "Geburt von Sohn Kaleo.",
    details: "Geburt von Sohn Kaleo am 24. Februar 2022.",
    private_default_hidden: true,
  },
  {
    id: "priv-3",
    title: "Geburt Tochter Solea",
    category: "private",
    start_date: "2023-06-19",
    end_date: null,
    organization: null,
    location: null,
    summary: "Geburt von Tochter Solea.",
    details: "Geburt von Tochter Solea am 19. Juni 2023.",
    private_default_hidden: true,
  },
];

export function formatDateRange(start: string, end: string | null): string {
  const formatDate = (d: string) => {
    if (d.length === 7) {
      const [y, m] = d.split("-");
      const months = ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"];
      return `${months[parseInt(m) - 1]} ${y}`;
    }
    const date = new Date(d);
    const months = ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"];
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  };
  if (!end) return `seit ${formatDate(start)}`;
  return `${formatDate(start)} – ${formatDate(end)}`;
}

export function sortEventsByDate(evts: CVEvent[]): CVEvent[] {
  return [...evts].sort((a, b) => {
    const dateA = a.start_date;
    const dateB = b.start_date;
    return dateB.localeCompare(dateA);
  });
}

export const categoryLabels: Record<EventCategory, string> = {
  work: "Beruf",
  education: "Schule/Weiterbildung",
  private: "Privat",
};
