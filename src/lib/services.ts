export type ServiceSlug =
  | "nybygg"
  | "tilbygg"
  | "pabygg"
  | "rehabilitering"
  | "renovering"
  | "tomrer"
  | "bad"
  | "kjokken"
  | "tak"
  | "fasade"
  | "terrasse"
  | "garasje"
  | "hytte";

export type Service = {
  slug: ServiceSlug;
  title: string;
  shortTitle: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  included: string[];
  process: { title: string; text: string }[];
  faq: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "nybygg",
    title: "Nybygg i Drammen og Buskerud",
    shortTitle: "Nybygg",
    description:
      "Komplette nybygg, hus, hytter og garasjer levert med solid tømrerarbeid, ryddig prosjektstyring og norske byggestandarder.",
    seoTitle: "Nybygg Drammen",
    seoDescription:
      "SKOP BYGG AS leverer nybygg, hus, hytte og garasje i Drammen, Buskerud og Oslo med erfarne tømrere og trygg prosjektgjennomføring.",
    keywords: ["nybygg", "hus", "hytte", "garasje", "Drammen", "Buskerud"],
    included: [
      "Eneboliger, tomannsboliger og mindre boligprosjekter",
      "Hytter, garasjer, boder og uthus",
      "Bindingsverk, kledning, tak og innvendig ferdigstilling",
      "Koordinering med andre fag og dokumentasjon",
    ],
    process: [
      {
        title: "Planlegging",
        text: "Vi gjennomgår behov, tegninger og fremdrift for å avklare omfang, budsjett og ansvar.",
      },
      {
        title: "Bygging",
        text: "Arbeidet gjennomføres med fokus på presisjon, sikkerhet og god kommunikasjon underveis.",
      },
      {
        title: "Overlevering",
        text: "Prosjektet kontrolleres, dokumenteres og overleveres ryddig når arbeidet er ferdig.",
      },
    ],
    faq: [
      {
        question: "Bygger SKOP BYGG AS nye hus i Drammen?",
        answer:
          "Ja, SKOP BYGG AS kan bidra med nybygg, hus, hytte og garasje i Drammen, Buskerud og Oslo.",
      },
      {
        question: "Kan dere koordinere flere fag?",
        answer:
          "Ja, vi kan koordinere relevante fag og leverandører som del av et ryddig byggeprosjekt.",
      },
    ],
  },
  {
    slug: "tilbygg",
    title: "Tilbygg i Drammen",
    shortTitle: "Tilbygg",
    description:
      "Tilbygg som gir mer plass til stue, kjøkken, inngangsparti, soverom eller utleiedel, tilpasset eksisterende bolig.",
    seoTitle: "Tilbygg Drammen",
    seoDescription:
      "Trenger du mer plass? SKOP BYGG AS bygger tilbygg i Drammen og Buskerud med god integrasjon mot eksisterende hus.",
    keywords: ["tilbygg", "byggefirma", "Drammen", "Buskerud", "Oslo"],
    included: [
      "Utvidelse av stue, kjøkken eller inngangsparti",
      "Nye soverom, kontor, bad eller utleiedel",
      "Tetting mellom gammelt og nytt bygg",
      "Innvendig ferdigstilling og listverk",
    ],
    process: [
      {
        title: "Tilstandsvurdering",
        text: "Vi vurderer eksisterende konstruksjon, bæring og praktiske løsninger for utvidelsen.",
      },
      {
        title: "Integrasjon",
        text: "Tilbygget bygges med fokus på tetthet, isolasjon og helhetlig uttrykk.",
      },
      {
        title: "Ferdigstilling",
        text: "Overflater, detaljer og overganger ferdigstilles etter avtalt standard.",
      },
    ],
    faq: [
      {
        question: "Kan dere bygge tilbygg på eksisterende bolig?",
        answer:
          "Ja, vi bygger tilbygg og hjelper med praktiske avklaringer rundt eksisterende konstruksjon.",
      },
      {
        question: "Jobber dere i Oslo og Buskerud?",
        answer:
          "Ja, vi tar oppdrag i Drammen, Buskerud, Oslo og omkringliggende områder.",
      },
    ],
  },
  {
    slug: "pabygg",
    title: "Påbygg og takloft",
    shortTitle: "Påbygg",
    description:
      "Påbygg, takloft og ekstra etasje for boliger som trenger mer areal uten å bygge ut i bredden.",
    seoTitle: "Påbygg Drammen",
    seoDescription:
      "SKOP BYGG AS bygger påbygg, takloft og ekstra areal i Drammen og Buskerud med trygt tømrerarbeid.",
    keywords: ["påbygg", "takloft", "tømrer", "Drammen"],
    included: ["Takloft", "Ekstra etasje", "Arker", "Forsterkning av konstruksjon"],
    process: [
      { title: "Avklaring", text: "Vi vurderer bæring, høyder og praktisk gjennomføring." },
      { title: "Tetting", text: "Tak og vegger sikres mot vær under byggeperioden." },
      { title: "Finish", text: "Innvendige flater og detaljer ferdigstilles ryddig." },
    ],
    faq: [
      {
        question: "Er påbygg mulig på alle hus?",
        answer:
          "Det må vurderes konkret ut fra bæring, regulering og teknisk tilstand.",
      },
    ],
  },
  {
    slug: "rehabilitering",
    title: "Rehabilitering i Buskerud",
    shortTitle: "Rehabilitering",
    description:
      "Rehabilitering av eldre boliger, fasader, tak, vinduer og konstruksjoner med fokus på varig kvalitet.",
    seoTitle: "Rehabilitering Buskerud",
    seoDescription:
      "SKOP BYGG AS utfører rehabilitering og oppgradering av hus, fasade, tak og eldre bygg i Drammen og Buskerud.",
    keywords: ["rehabilitering", "fasade", "tak", "Drammen", "Buskerud"],
    included: ["Etterisolering", "Kledningsbytte", "Vinduer og dører", "Tak og fasade"],
    process: [
      { title: "Kartlegging", text: "Vi avdekker behov, skader og prioriterte tiltak." },
      { title: "Utbedring", text: "Skadde og utdaterte deler utbedres med riktige materialer." },
      { title: "Kontroll", text: "Arbeidet kontrolleres for tetthet, finish og funksjon." },
    ],
    faq: [
      {
        question: "Kan dere rehabilitere gamle hus?",
        answer:
          "Ja, vi rehabiliterer eldre boliger og kombinerer bevaring med moderne byggestandard.",
      },
    ],
  },
  {
    slug: "renovering",
    title: "Renovering av bolig",
    shortTitle: "Renovering",
    description:
      "Innvendig renovering av gulv, vegger, vinduer, dør, kjøkken og oppholdsrom med profesjonell finish.",
    seoTitle: "Renovering Drammen",
    seoDescription:
      "Renovering i Drammen: SKOP BYGG AS pusser opp boliger, kjøkken, gulv, vegger og innvendige rom.",
    keywords: ["renovering", "oppussing", "kjøkken", "Drammen"],
    included: ["Gulv", "Vegger", "Vinduer", "Dører", "Kjøkken"],
    process: [
      { title: "Forarbeid", text: "Gamle flater fjernes og rommet klargjøres." },
      { title: "Oppbygging", text: "Nye flater, rammer og detaljer monteres presist." },
      { title: "Sluttfinish", text: "Listverk, overganger og detaljer fullføres." },
    ],
    faq: [
      {
        question: "Tar dere innvendig renovering?",
        answer:
          "Ja, vi tar innvendig renovering av boliger, kjøkken, gulv, vegger og detaljer.",
      },
    ],
  },
  {
    slug: "tomrer",
    title: "Tømrer i Drammen",
    shortTitle: "Tømrer",
    description:
      "Tømrerarbeid for bolig, tak, kledning, terrasse, garasje, lettvegger, listverk og konstruksjoner.",
    seoTitle: "Tømrer Drammen",
    seoDescription:
      "Trenger du tømrer i Drammen? SKOP BYGG AS leverer solid tømrerarbeid i Drammen, Buskerud og Oslo.",
    keywords: ["tømrer", "byggfirma", "Drammen", "Buskerud"],
    included: ["Bindingsverk", "Kledning", "Takarbeid", "Terrasse", "Listverk"],
    process: [
      { title: "Oppmåling", text: "Arbeidet måles opp og planlegges for riktig passform." },
      { title: "Montering", text: "Konstruksjoner og detaljer monteres solid og presist." },
      { title: "Kontroll", text: "Resultatet kontrolleres for finish og funksjon." },
    ],
    faq: [
      {
        question: "Utfører dere tømrerarbeid i Drammen?",
        answer:
          "Ja, SKOP BYGG AS tilbyr tømrerarbeid i Drammen, Buskerud og Oslo.",
      },
    ],
  },
  {
    slug: "bad",
    title: "Bad og våtrom",
    shortTitle: "Bad",
    description:
      "Baderomsrenovering og våtromsarbeid med gode underlag, flis, membran og koordinering av fag.",
    seoTitle: "Bad Drammen",
    seoDescription:
      "SKOP BYGG AS hjelper med bad og baderomsrenovering i Drammen, Buskerud og Oslo.",
    keywords: ["bad", "baderomsrenovering", "våtrom", "Drammen"],
    included: ["Riving", "Oppbygging", "Flis", "Membran", "Koordinering"],
    process: [
      { title: "Plan", text: "Vi avklarer løsning, materialer og praktisk fremdrift." },
      { title: "Oppbygging", text: "Underlag og konstruksjon bygges for varig resultat." },
      { title: "Ferdig bad", text: "Detaljer og overflater ferdigstilles med ryddig kontroll." },
    ],
    faq: [
      {
        question: "Renoverer dere bad?",
        answer:
          "Ja, vi hjelper med baderomsrenovering og koordinering av nødvendige fag.",
      },
    ],
  },
  {
    slug: "kjokken",
    title: "Kjøkkenrenovering",
    shortTitle: "Kjøkken",
    description:
      "Renovering av kjøkken med tilpassing, montering, vegger, gulv og praktiske byggdetaljer.",
    seoTitle: "Kjøkken Drammen",
    seoDescription:
      "Kjøkkenrenovering i Drammen: SKOP BYGG AS hjelper med oppussing, montering og byggdetaljer.",
    keywords: ["kjøkken", "renovering", "Drammen"],
    included: ["Montering", "Gulv", "Vegger", "Listverk", "Tilpassing"],
    process: [
      { title: "Forarbeid", text: "Rommet klargjøres for ny løsning." },
      { title: "Montering", text: "Kjøkken og detaljer tilpasses presist." },
      { title: "Finish", text: "Overganger, lister og flater ferdigstilles." },
    ],
    faq: [
      {
        question: "Kan dere renovere kjøkken?",
        answer:
          "Ja, vi utfører kjøkkenrenovering og tilhørende tømrerarbeid.",
      },
    ],
  },
  {
    slug: "tak",
    title: "Takarbeid",
    shortTitle: "Tak",
    description:
      "Takarbeid, takfornying, undertak, lekter og reparasjoner for boliger og garasjer.",
    seoTitle: "Tak Drammen",
    seoDescription:
      "SKOP BYGG AS utfører takarbeid og takfornying i Drammen, Buskerud og Oslo.",
    keywords: ["tak", "takarbeid", "Drammen"],
    included: ["Takfornying", "Undertak", "Lekter", "Garasjetak"],
    process: [
      { title: "Sjekk", text: "Takets tilstand vurderes for lekkasje, slitasje og skade." },
      { title: "Utbedring", text: "Nødvendige deler byttes eller fornyes." },
      { title: "Sikring", text: "Takflaten kontrolleres for tetthet og levetid." },
    ],
    faq: [
      {
        question: "Tar dere takarbeid?",
        answer:
          "Ja, vi tar takarbeid, takfornying og reparasjoner på bolig og garasje.",
      },
    ],
  },
  {
    slug: "fasade",
    title: "Fasade og kledning",
    shortTitle: "Fasade",
    description:
      "Fasadearbeid, kledningsbytte, etterisolering og utvendig oppgradering av bolig.",
    seoTitle: "Fasade Drammen",
    seoDescription:
      "Fasade og kledning i Drammen: SKOP BYGG AS oppgraderer boliger med kledningsbytte og etterisolering.",
    keywords: ["fasade", "kledning", "etterisolering", "Drammen"],
    included: ["Kledningsbytte", "Etterisolering", "Vindtetting", "Fasademaling"],
    process: [
      { title: "Kartlegging", text: "Vi vurderer eksisterende fasade og behov for tiltak." },
      { title: "Oppbygging", text: "Fasaden bygges opp med riktig vindtetting og materialvalg." },
      { title: "Overflate", text: "Kledning og detaljer ferdigstilles med ren finish." },
    ],
    faq: [
      {
        question: "Bytter dere kledning?",
        answer:
          "Ja, vi utfører kledningsbytte, etterisolering og fasadearbeid.",
      },
    ],
  },
  {
    slug: "terrasse",
    title: "Terrasse",
    shortTitle: "Terrasse",
    description:
      "Terrasse, platting, rekkverk og utearealer bygget for norske forhold og god brukskvalitet.",
    seoTitle: "Terrasse Drammen",
    seoDescription:
      "SKOP BYGG AS bygger terrasse, platting og uteareal i Drammen, Buskerud og Oslo.",
    keywords: ["terrasse", "platting", "Drammen"],
    included: ["Platting", "Rekkverk", "Trapp", "Pergola"],
    process: [
      { title: "Plan", text: "Størrelse, høyde og bruksbehov avklares." },
      { title: "Konstruksjon", text: "Terrassen bygges med stabilt fundament og riktig fall." },
      { title: "Detaljer", text: "Rekkverk, trapp og avslutninger ferdigstilles." },
    ],
    faq: [
      {
        question: "Bygger dere terrasse?",
        answer:
          "Ja, vi bygger terrasse, platting, pergola og utearealer.",
      },
    ],
  },
  {
    slug: "garasje",
    title: "Garasje",
    shortTitle: "Garasje",
    description:
      "Garasje, bod og uthus bygget med funksjonelle løsninger, solid konstruksjon og god finish.",
    seoTitle: "Garasje Drammen",
    seoDescription:
      "SKOP BYGG AS bygger garasje, bod og uthus i Drammen, Buskerud og Oslo.",
    keywords: ["garasje", "bod", "uthus", "Drammen"],
    included: ["Garasje", "Bod", "Uthus", "Tak og kledning"],
    process: [
      { title: "Avklaring", text: "Bruk, størrelse og plassering vurderes." },
      { title: "Bygging", text: "Konstruksjonen bygges solid med praktiske detaljer." },
      { title: "Overlevering", text: "Garasjen ferdigstilles og kontrolleres." },
    ],
    faq: [
      {
        question: "Kan dere bygge garasje?",
        answer:
          "Ja, vi bygger garasjer, boder og uthus for private kunder.",
      },
    ],
  },
  {
    slug: "hytte",
    title: "Hytte og fritidsbolig",
    shortTitle: "Hytte",
    description:
      "Hytte, fritidsbolig og tilpasninger bygget for helårsbruk, norske forhold og praktisk vedlikehold.",
    seoTitle: "Hytte Buskerud",
    seoDescription:
      "SKOP BYGG AS bygger og rehabiliterer hytte og fritidsbolig i Buskerud, Drammen og Norge.",
    keywords: ["hytte", "fritidsbolig", "Buskerud", "Norge"],
    included: ["Ny hytte", "Rehabilitering", "Tilbygg", "Terrasse"],
    process: [
      { title: "Behov", text: "Bruk, sesong og beliggenhet avklares." },
      { title: "Bygging", text: "Arbeidet tilpasses klima, adkomst og materialvalg." },
      { title: "Vedlikehold", text: "Lettstelt finish og varige løsninger prioriteres." },
    ],
    faq: [
      {
        question: "Jobber dere med hytter?",
        answer:
          "Ja, vi kan bidra med hytte, fritidsbolig, tilbygg og rehabilitering.",
      },
    ],
  },
];

export const serviceRoutes = services.map((service) => `/services/${service.slug}`);

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const featuredServices = services.filter((service) =>
  ["nybygg", "tilbygg", "rehabilitering", "tomrer"].includes(service.slug)
);
