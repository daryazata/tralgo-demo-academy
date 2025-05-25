export interface Phase {
  phaseNr: number;
  title: string;
  content?: Lection[];
}

export interface Lection {
  id: string;
  lectionNr: number;
  title: string;
  videoLink: string;
  done: boolean;
}

export const learningPhases: Phase[] = [
  { phaseNr: 1, title: "Onboarding" },
  { phaseNr: 2, title: "Grundverständnis" },
  {
    phaseNr: 3,
    title: "Einführung in die Technik",
    content: [
      {
        id: "301",
        lectionNr: 1,
        title: 'Willkommen in der Phase "Einführung in die Technik"',
        videoLink: "https://www.youtube.com/watch?v=AdtpVjAjI8U",
        done: true,
      },
      {
        id: "302",
        lectionNr: 2,
        title: "Technik Vorbereitung",
        videoLink: "https://www.youtube.com/watch?v=yyLvO2U62CM",
        done: true,
      },
      {
        id: "303",
        lectionNr: 3,
        title: "Tralgo Analytics",
        videoLink: "https://www.youtube.com/watch?v=S_OwlP7BP2I",
        done: true,
      },
      {
        id: "304",
        lectionNr: 4,
        title: 'Zusammenfassung der Phase "Einführung in die Technik"',
        videoLink: "https://www.youtube.com/watch?v=HFWlZoRb8t4",
        done: true,
      },
    ],
  },
  {
    phaseNr: 4,
    title: "Die Marktanalyse",
    content: [
      {
        id: "401",
        lectionNr: 1,
        title: 'Willkommen in der Phase "Die Marktanalyse"',
        videoLink: "https://www.youtube.com/watch?v=03ZXCwlarVA",
        done: true,
      },
      {
        id: "402",
        lectionNr: 2,
        title: "Tradingarten und Stile",
        videoLink: "https://www.youtube.com/watch?v=0j6VP8a9fqY",
        done: true,
      },
      {
        id: "403",
        lectionNr: 3,
        title: "Analysen - technisch",
        videoLink: "https://www.youtube.com/watch?v=PZKAEb9BrBA",
        done: true,
      },
      {
        id: "404",
        lectionNr: 4,
        title: "Analysen - theoretisch",
        videoLink: "https://www.youtube.com/watch?v=NJEnpDp8IkQ",
        done: false,
      },
      {
        id: "405",
        lectionNr: 5,
        title: "Analysen - analytisch",
        videoLink: "https://www.youtube.com/watch?v=im8jTSxICF0",
        done: false,
      },
      {
        id: "406",
        lectionNr: 6,
        title: "Das Volumenprofil",
        videoLink: "https://www.youtube.com/watch?v=u4r_gGXU2tQ",
        done: false,
      },
      {
        id: "407",
        lectionNr: 7,
        title: "Eigenständige Analysen",
        videoLink: "https://www.youtube.com/watch?v=M0YNhKccxps",
        done: false,
      },
      {
        id: "408",
        lectionNr: 8,
        title: 'Zusammenfassung der Phase "Die Marktanalyse"',
        videoLink: "https://www.youtube.com/watch?v=sJ4bd9JBbeY",
        done: false,
      },
    ],
  },
  { phaseNr: 5, title: "Die Arten des Managements" },
  { phaseNr: 6, title: "Einführung in die Handelsansätze" },
  { phaseNr: 7, title: "Die Breakout Setups" },
  { phaseNr: 8, title: "Die Ablehnungs Setups" },
  { phaseNr: 9, title: "Der Orderflow" },
  { phaseNr: 10, title: "Das Research" },
  { phaseNr: 11, title: "Die Planung und Organisation" },
  { phaseNr: 12, title: "Der aktive Handel" },
  { phaseNr: 13, title: "Die Evaluation" },
  { phaseNr: 14, title: "Der Kapitalaufbau" },
  { phaseNr: 15, title: "Die Skalierung" },
];
