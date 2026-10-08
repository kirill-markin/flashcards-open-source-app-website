import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Nibomo - Aplicație gratuită și open source de fișe cu repetiție spațiată",
  description:
    "Fișe gratuite și open source cu repetiție spațiată FSRS, creare de fișe asistată de AI, studiu offline și sincronizare, exporturi portabile și găzduire proprie.",
  slug: "home",
  sections: [
    {
      type: "hero",
      eyebrow: "Gratuit și open source",
      titleLines: [
        "Creează fișe.",
        "Recapitulează mai inteligent.",
        "Reține mai mult.",
      ],
      subtitle:
        "Fișe gratuite și open source care programează fiecare recapitulare la momentul potrivit, funcționează offline și se sincronizează pe web, iOS și Android. Folosește AI când vrei ajutor la crearea sau îmbunătățirea fișelor. Nibomo s-a numit anterior Flashcards Open Source App.",
      trustLine: "Fără card de credit. Fără reclame. Fără perioadă de probă.",
      primaryLink: {
        label: "Începe acum",
        href: "https://app.nibomo.com",
      },
      secondaryLink: {
        label: "Vezi pe GitHub",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      agentConnectors: [
        {
          caption: "Sau conectează orice client AI compatibil cu MCP folosind acest URL:",
          link: {
            label: "https://mcp.nibomo.com/mcp",
            href: "https://mcp.nibomo.com/mcp",
          },
        },
      ],
    },
    {
      type: "app_walkthrough",
      title: "Cum funcționează Nibomo",
      items: [
        {
          label: "01 · FIȘE CU AI",
          titleLines: [
            "Spune-i AI ce vrei să înveți.",
          ],
          description: "Descrie un subiect sau atașează notițele tale. AI te ajută să transformi materialul în fișe cu întrebări și răspunsuri.",
          linkLabel: "Creează fișe",
          imagePath: "/home/ai-flashcards-ro.png",
          imageAlt: "Chatul AI din Nibomo creează fișe dintr-un subiect sau din notițe atașate",
        },
        {
          label: "02 · ÎNCEPE SĂ ÎNVEȚI",
          titleLines: [
            "Câte o întrebare pe rând.",
          ],
          description: "Deschide o fișă și încearcă să-ți amintești răspunsul înainte de a-l afișa. Învață în ritmul tău, câte o fișă pe rând.",
          linkLabel: "Începe să înveți",
          imagePath: "/home/start-learning-ro.png",
          imageAlt: "Fișă de recapitulare Nibomo cu un buton pentru afișarea răspunsului",
        },
        {
          label: "03 · RECAPITULĂRI INTELIGENTE",
          titleLines: [
            "Verifică răspunsul.",
            "Evaluează cât de bine ți-ai amintit.",
          ],
          description: "Afișează răspunsul și indică cât de ușor ți l-ai amintit. Nibomo readuce fișele dificile mai devreme și pe cele familiare mai târziu.",
          linkLabel: "Recapitulează fișele",
          imagePath: "/home/smart-reviews-ro.png",
          imageAlt: "Fișă Nibomo cu răspunsul afișat și opțiuni de evaluare a memorării",
        },
        {
          label: "04 · PROGRESUL TĂU",
          titleLines: [
            "Transformă învățarea într-un obicei.",
          ],
          description: "Vezi zilele de studiu în calendar și continuă seria. Fiecare recapitulare este încă un pas spre obiectivul tău.",
          linkLabel: "Vezi progresul",
          imagePath: "/home/your-progress-ro.png",
          imageAlt: "Ecranul de progres Nibomo cu un calendar al zilelor consecutive de studiu și un clasament",
        }
      ],
    },
    {
      type: "feature_list",
      title: "Funcționalități",
      intro:
        "Tot ce îți trebuie ca să creezi fișe utile, să recapitulezi la momentul potrivit, să studiezi offline și să păstrezi controlul asupra datelor tale de învățare.",
      items: [
        {
          title: "Recapitulări mai inteligente cu FSRS",
          description:
            "Recapitulează fișele scadente astăzi. FSRS readuce mai devreme fișele dificile și așteaptă mai mult înainte să le arate din nou pe cele cunoscute.",
        },
        {
          title: "Creare de fișe asistată de AI",
          description:
            "Cere-i AI-ului să te ajute să creezi fișe, să le îmbunătățească formularea sau să clarifice un răspuns. Tu decizi ce se salvează.",
        },
        {
          title: "Studiu offline cu sincronizare automată",
          description:
            "Continuă să recapitulezi pe dispozitivul mobil fără conexiune la internet. Modificările se sincronizează automat.",
        },
        {
          title: "Importă, exportă și deține datele tale",
          description:
            "Mută-ți materialele de învățare oricând vrei. Exporturile portabile includ fișele, etichetele și fișierele media asociate.",
        },
        {
          title: "Funcționează cu agenți AI",
          description:
            "Conectează-te prin MCP sau Agent API, ca agenții AI să te ajute să creezi, să îmbunătățești și să organizezi fișele.",
        },
        {
          title: "Gratuit și cu găzduire proprie",
          description:
            "Folosește gratuit aplicația găzduită, inspectează codul open source sau rulează-l pe propria infrastructură.",
        },
      ],
    },
    {
      type: "review_cta",
      titleLines: [
        "Lasă Nibomo să-ți planifice recapitulările.",
        "Tu concentrează-te pe învățare.",
      ],
      description: "Transformă ceea ce înveți în fișe, recapitulează la momentul potrivit și ține minte mai mult.",
    },
  ],
  body: "",
} as const;
