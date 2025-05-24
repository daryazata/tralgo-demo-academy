export interface Phase {
  phaseNr: number;
  title: string;
  content?: Lection[];
}

export interface Lection {
  lectionNr: number;
  title: string;
  videoLink: string;
  done: boolean;
}

export const learningPhases: Phase[] = [
  { phaseNr: 1, title: "Onboarding" },
  { phaseNr: 2, title: "Grundverständnis" },
  { phaseNr: 3, title: "Einführung in die Technik" },
  {
    phaseNr: 4,
    title: "Die Marktanalyse",
    content: [
      {
        lectionNr: 1,
        title: 'Willkommen in der Phase "Die Marktanalyse"',
        videoLink: "",
        done: true,
      },
      {
        lectionNr: 2,
        title: "Tradingarten und Stile",
        videoLink: "",
        done: true,
      },
      {
        lectionNr: 3,
        title: "Analysen - technisch",
        videoLink: "",
        done: true,
      },
      {
        lectionNr: 4,
        title: "Analysen - theoretisch",
        videoLink: "",
        done: false,
      },
      {
        lectionNr: 5,
        title: "Analysen - analytisch",
        videoLink: "",
        done: false,
      },
      { lectionNr: 6, title: "Das Volumenprofil", videoLink: "", done: false },
      {
        lectionNr: 7,
        title: "Eigenständige Analysen",
        videoLink: "",
        done: false,
      },
      {
        lectionNr: 8,
        title: 'Zusammenfassung der Phase "Die Marktanalyse"',
        videoLink: "",
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
