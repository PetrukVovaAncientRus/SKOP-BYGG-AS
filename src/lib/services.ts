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
      "Komplette nybygg, hus, hytter og garasjer levert med solid tomrerarbeid, ryddig prosjektstyring og norske byggestandarder.",
    seoTitle: "Nybygg Drammen",
    seoDescription:
      "SKOP BYGG AS leverer nybygg, hus, hytte og garasje i Drammen, Buskerud og Oslo med erfarne tomrere og trygg prosjektgjennomforing.",
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
        text: "Vi gjennomgar behov, tegninger og fremdrift for a avklare omfang, budsjett og ansvar.",
      },
      {
        title: "Bygging",
        text: "Arbeidet gjennomfores med fokus pa presisjon, sikkerhet og god kommunikasjon underveis.",
      },
      {
        title: "Overlevering",
        text: "Prosjektet kontrolleres, dokumenteres og overleveres ryddig nar arbeidet er ferdig.",
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
          "Ja, vi kan koordinere relevante fag og leverandorer som del av et ryddig byggeprosjekt.",
      },
    ],
  },
  {
    slug: "tilbygg",
    title: "Tilbygg i Drammen",
    shortTitle: "Tilbygg",
    description:
      "Tilbygg som gir mer plass til stue, kjokken, inngangsparti, soverom eller utleiedel, tilpasset eksisterende bolig.",
    seoTitle: "Tilbygg Drammen",
    seoDescription:
      "Trenger du mer plass? SKOP BYGG AS bygger tilbygg i Drammen og Buskerud med god integrasjon mot eksisterende hus.",
    keywords: ["tilbygg", "byggefirma", "Drammen", "Buskerud", "Oslo"],
    included: [
      "Utvidelse av stue, kjokken eller inngangsparti",
      "Nye soverom, kontor, bad eller utleiedel",
      "Tetting mellom gammelt og nytt bygg",
      "Innvendig ferdigstilling og listverk",
    ],
    process: [
      {
        title: "Tilstandsvurdering",
        text: "Vi vurderer eksisterende konstruksjon, baering og praktiske losninger for utvidelsen.",
      },
      {
        title: "Integrasjon",
        text: "Tilbygget bygges med fokus pa tetthet, isolasjon og helhetlig uttrykk.",
      },
      {
        title: "Ferdigstilling",
        text: "Overflater, detaljer og overganger ferdigstilles etter avtalt standard.",
      },
    ],
    faq: [
      {
        question: "Kan dere bygge tilbygg pa eksisterende bolig?",
        answer:
          "Ja, vi bygger tilbygg og hjelper med praktiske avklaringer rundt eksisterende konstruksjon.",
      },
      {
        question: "Jobber dere i Oslo og Buskerud?",
        answer:
          "Ja, vi tar oppdrag i Drammen, Buskerud, Oslo og omkringliggende omrader.",
      },
    ],
  },
  {
    slug: "pabygg",
    title: "Pabygg og takloft",
    shortTitle: "Pabygg",
    description:
      "Pabygg, takloft og ekstra etasje for boliger som trenger mer areal uten a bygge ut i bredden.",
    seoTitle: "Pabygg Drammen",
    seoDescription:
      "SKOP BYGG AS bygger pabygg, takloft og ekstra areal i Drammen og Buskerud med trygt tomrerarbeid.",
    keywords: ["pabygg", "takloft", "tomrer", "Drammen"],
    included: ["Takloft", "Ekstra etasje", "Arker", "Forsterkning av konstruksjon"],
    process: [
      { title: "Avklaring", text: "Vi vurderer baering, hoyder og praktisk gjennomforing." },
      { title: "Tetting", text: "Tak og vegger sikres mot vaer under byggeperioden." },
      { title: "Finish", text: "Innvendige flater og detaljer ferdigstilles ryddig." },
    ],
    faq: [
      {
        question: "Er pabygg mulig pa alle hus?",
        answer:
          "Det ma vurderes konkret ut fra baering, regulering og teknisk tilstand.",
      },
    ],
  },
  {
    slug: "rehabilitering",
    title: "Rehabilitering i Buskerud",
    shortTitle: "Rehabilitering",
    description:
      "Rehabilitering av eldre boliger, fasader, tak, vinduer og konstruksjoner med fokus pa varig kvalitet.",
    seoTitle: "Rehabilitering Buskerud",
    seoDescription:
      "SKOP BYGG AS utforer rehabilitering og oppgradering av hus, fasade, tak og eldre bygg i Drammen og Buskerud.",
    keywords: ["rehabilitering", "fasade", "tak", "Drammen", "Buskerud"],
    included: ["Etterisolering", "Kledningsbytte", "Vinduer og dorer", "Tak og fasade"],
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
      "Innvendig renovering av gulv, vegger, vinduer, dor, kjokken og oppholdsrom med profesjonell finish.",
    seoTitle: "Renovering Drammen",
    seoDescription:
      "Renovering i Drammen: SKOP BYGG AS pusser opp boliger, kjokken, gulv, vegger og innvendige rom.",
    keywords: ["renovering", "oppussing", "kjokken", "Drammen"],
    included: ["Gulv", "Vegger", "Vinduer", "Dorer", "Kjokken"],
    process: [
      { title: "Forarbeid", text: "Gamle flater fjernes og rommet klargjores." },
      { title: "Oppbygging", text: "Nye flater, rammer og detaljer monteres presist." },
      { title: "Sluttfinish", text: "Listverk, overganger og detaljer fullfores." },
    ],
    faq: [
      {
        question: "Tar dere innvendig renovering?",
        answer:
          "Ja, vi tar innvendig renovering av boliger, kjokken, gulv, vegger og detaljer.",
      },
    ],
  },
  {
    slug: "tomrer",
    title: "Tomrer i Drammen",
    shortTitle: "Tomrer",
    description:
      "Tomrerarbeid for bolig, tak, kledning, terrasse, garasje, lettvegger, listverk og konstruksjoner.",
    seoTitle: "Tomrer Drammen",
    seoDescription:
      "Trenger du tomrer i Drammen? SKOP BYGG AS leverer solid tomrerarbeid i Drammen, Buskerud og Oslo.",
    keywords: ["tomrer", "byggfirma", "Drammen", "Buskerud"],
    included: ["Bindingsverk", "Kledning", "Takarbeid", "Terrasse", "Listverk"],
    process: [
      { title: "Oppmaling", text: "Arbeidet males opp og planlegges for riktig passform." },
      { title: "Montering", text: "Konstruksjoner og detaljer monteres solid og presist." },
      { title: "Kontroll", text: "Resultatet kontrolleres for finish og funksjon." },
    ],
    faq: [
      {
        question: "Utforer dere tomrerarbeid i Drammen?",
        answer:
          "Ja, SKOP BYGG AS tilbyr tomrerarbeid i Drammen, Buskerud og Oslo.",
      },
    ],
  },
  {
    slug: "bad",
    title: "Bad og vatrom",
    shortTitle: "Bad",
    description:
      "Baderomsrenovering og vatromsarbeid med gode underlag, flis, membran og koordinering av fag.",
    seoTitle: "Bad Drammen",
    seoDescription:
      "SKOP BYGG AS hjelper med bad og baderomsrenovering i Drammen, Buskerud og Oslo.",
    keywords: ["bad", "baderomsrenovering", "vatrom", "Drammen"],
    included: ["Riving", "Oppbygging", "Flis", "Membran", "Koordinering"],
    process: [
      { title: "Plan", text: "Vi avklarer losning, materialer og praktisk fremdrift." },
      { title: "Oppbygging", text: "Underlag og konstruksjon bygges for varig resultat." },
      { title: "Ferdig bad", text: "Detaljer og overflater ferdigstilles med ryddig kontroll." },
    ],
    faq: [
      {
        question: "Renoverer dere bad?",
        answer:
          "Ja, vi hjelper med baderomsrenovering og koordinering av nodvendige fag.",
      },
    ],
  },
  {
    slug: "kjokken",
    title: "Kjokkenrenovering",
    shortTitle: "Kjokken",
    description:
      "Renovering av kjokken med tilpassing, montering, vegger, gulv og praktiske byggdetaljer.",
    seoTitle: "Kjokken Drammen",
    seoDescription:
      "Kjokkenrenovering i Drammen: SKOP BYGG AS hjelper med oppussing, montering og byggdetaljer.",
    keywords: ["kjokken", "renovering", "Drammen"],
    included: ["Montering", "Gulv", "Vegger", "Listverk", "Tilpassing"],
    process: [
      { title: "Forarbeid", text: "Rommet klargjores for ny losning." },
      { title: "Montering", text: "Kjokken og detaljer tilpasses presist." },
      { title: "Finish", text: "Overganger, lister og flater ferdigstilles." },
    ],
    faq: [
      {
        question: "Kan dere renovere kjokken?",
        answer:
          "Ja, vi utforer kjokkenrenovering og tilhorende tomrerarbeid.",
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
      "SKOP BYGG AS utforer takarbeid og takfornying i Drammen, Buskerud og Oslo.",
    keywords: ["tak", "takarbeid", "Drammen"],
    included: ["Takfornying", "Undertak", "Lekter", "Garasjetak"],
    process: [
      { title: "Sjekk", text: "Takets tilstand vurderes for lekkasje, slitasje og skade." },
      { title: "Utbedring", text: "Nodvendige deler byttes eller fornyes." },
      { title: "Sikring", text: "Takflaten kontrolleres for tetthet og levetid." },
    ],
    faq: [
      {
        question: "Tar dere takarbeid?",
        answer:
          "Ja, vi tar takarbeid, takfornying og reparasjoner pa bolig og garasje.",
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
          "Ja, vi utforer kledningsbytte, etterisolering og fasadearbeid.",
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
      { title: "Plan", text: "Storrelse, hoyde og bruksbehov avklares." },
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
      "Garasje, bod og uthus bygget med funksjonelle losninger, solid konstruksjon og god finish.",
    seoTitle: "Garasje Drammen",
    seoDescription:
      "SKOP BYGG AS bygger garasje, bod og uthus i Drammen, Buskerud og Oslo.",
    keywords: ["garasje", "bod", "uthus", "Drammen"],
    included: ["Garasje", "Bod", "Uthus", "Tak og kledning"],
    process: [
      { title: "Avklaring", text: "Bruk, storrelse og plassering vurderes." },
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
      "Hytte, fritidsbolig og tilpasninger bygget for helarsbruk, norske forhold og praktisk vedlikehold.",
    seoTitle: "Hytte Buskerud",
    seoDescription:
      "SKOP BYGG AS bygger og rehabiliterer hytte og fritidsbolig i Buskerud, Drammen og Norge.",
    keywords: ["hytte", "fritidsbolig", "Buskerud", "Norge"],
    included: ["Ny hytte", "Rehabilitering", "Tilbygg", "Terrasse"],
    process: [
      { title: "Behov", text: "Bruk, sesong og beliggenhet avklares." },
      { title: "Bygging", text: "Arbeidet tilpasses klima, adkomst og materialvalg." },
      { title: "Vedlikehold", text: "Lettstelt finish og varige losninger prioriteres." },
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
