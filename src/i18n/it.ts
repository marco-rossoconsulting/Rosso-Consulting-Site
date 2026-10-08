/**
 * Italian copy. Transcreated, not translated (Brand Guidelines, 05 · rule 10).
 * Offer names, module names and company names stay in English.
 */
import type { Copy } from './en';

const it: Copy = {
  meta: {
    htmlLang: 'it',
    ogLocale: 'it_IT',
    langName: 'Italiano',
  },

  ui: {
    skip: 'Vai al contenuto',
    menu: 'Menu',
    close: 'Chiudi',
    mainNav: 'Principale',
    nav: {
      advisory: 'Advisory',
      ai: 'AI in Practice',
      lab: 'The Lab',
      notes: 'Note',
      about: 'Chi sono',
    },
    cta: 'Parliamone',
    langLabel: 'Lingua',
    themeDark: 'Passa al tema scuro',
    themeLight: 'Passa al tema chiaro',
    newTab: '(si apre in una nuova scheda)',
    minRead: 'min di lettura',
    home: 'Home',
  },

  footer: {
    signature: 'Provato, poi *consigliato.*',
    about: 'Rosso Consulting è lo studio di consulenza e il laboratorio di Marco Rosso, operatore, advisor e builder nella tecnologia per l’ospitalità.',
    work: 'Lavoro',
    read: 'Leggi',
    contact: 'Contatti',
    location: 'Lugano, Svizzera',
    languages: 'Lavoro in inglese, italiano e spagnolo',
    privacy: 'Privacy',
    rights: 'Rosso Consulting',
  },

  cta: {
    title: 'Portami la tua *domanda*.',
    body: 'La prima conversazione è gratuita e dura circa trenta minuti. La forma del lavoro viene dopo.',
    button: 'Parliamone',
    or: 'Oppure scrivi a',
  },

  status: {
    testing: 'Testing',
    live: 'Live',
    venture: 'Venture',
    closed: 'Chiuso',
  },

  home: {
    seo: {
      title: 'Marco Rosso · Operatore, advisor e builder nella tecnologia per l’ospitalità',
      description:
        'Guido digitale e automazione in un gruppo alberghiero, faccio da advisor ad aziende di tecnologia per l’ospitalità e costruisco con l’AI nel mio laboratorio. Aiuto i founder a crescere e gli hotel a mettere l’AI al lavoro.',
    },
    hero: {
      label: 'Marco Rosso · Lugano',
      words: ['Gestisco.', 'Consiglio.', 'Costruisco.'],
      intro:
        'Guido digitale e automazione in un gruppo alberghiero, faccio da advisor ad aziende di tecnologia per l’ospitalità e costruisco con l’AI nel mio laboratorio. Aiuto i founder a crescere e gli hotel a mettere l’AI al lavoro.',
      secondary: 'Scopri il Lab',
    },
    offers: [
      {
        key: 'advisory',
        audience: 'Per le aziende hotel tech',
        name: 'Advisory',
        text: 'Prodotto, go-to-market, posizionamento e le presentazioni giuste.',
      },
      {
        key: 'ai',
        audience: 'Per gli hotel',
        name: 'AI in Practice',
        text: 'Il lavoro fatto con l’AI, e il metodo resta a te.',
      },
      {
        key: 'lab',
        audience: 'Per i curiosi',
        name: 'The Lab',
        text: 'Cosa sto provando adesso, cosa ha funzionato e cosa no.',
      },
    ],
    namesHeading: 'Incarichi di advisory, clienti e il gruppo alberghiero che contribuisco a guidare',
    sides: {
      label: '01 — Tre lati',
      title: 'Una persona, tre lati del *tavolo*.',
      intro:
        'Nell’ospitalità sono in pochi a comprare tecnologia da operatori, a consigliare le aziende che la vendono e a costruire con l’AI in prima persona. Io faccio tutte e tre le cose, e ogni lato tiene onesti gli altri due.',
      portraitAlt: 'Ritratto di Marco Rosso',
      caption: 'Marco Rosso, Lugano',
      tabsLabel: 'I tre lati del mio lavoro',
      items: [
        {
          key: 'operator',
          tab: 'Operatore',
          seat: 'Dalla parte dell’hotel',
          line: 'La compro e la uso.',
          body: 'Dal 2024 sono Chief Digital Strategy & Business Automation Officer di Planhotel Hospitality Group: strategia digitale, automazione e adozione dell’AI dentro un gruppo alberghiero vero. So cosa viene adottato, cosa viene ignorato e perché.',
          proof: ['Planhotel Hospitality Group', 'Dal 2024'],
        },
        {
          key: 'advisor',
          tab: 'Advisor',
          seat: 'Dalla parte del fornitore',
          line: 'Aiuto le aziende che la vendono.',
          body: 'Quasi dieci anni in ruoli commerciali in Triptease, SiteMinder, Cloudbeds e Canary Technologies, da account executive a global director. Oggi sono advisor di quattro aziende di tecnologia per l’ospitalità. I founder hanno lo sguardo di chi compra e quello di chi vende.',
          proof: ['Canary Technologies', 'RoomPriceGenie', 'LobbyAI', 'Snapfix'],
        },
        {
          key: 'builder',
          tab: 'Builder',
          seat: 'Al banco di lavoro',
          line: 'Costruisco con l’AI, in prima persona.',
          body: 'Non ho mai imparato a programmare, eppure ho creato e lanciato Astia Web, un servizio di siti web per hotel e piccole imprese, con l’AI come team di sviluppo. Con lo stesso metodo sono nati i brand e i siti di Hotel Association Zanzibar, THE VIEW Lugano e Francorosso.',
          proof: ['Astia Web', 'Hotel Association Zanzibar', 'THE VIEW Lugano', 'Francorosso'],
        },
      ],
    },
    signature: {
      title: 'Provato, poi *consigliato.*',
      promise:
        'Ogni raccomandazione si basa su qualcosa che ho gestito, venduto, costruito o testato. Se una cosa non l’ho ancora provata, lo dico, e mi offro di provarla.',
    },
    wheel: {
      label: '02 — Come si tiene insieme',
      title: 'Ogni linea di lavoro alimenta le *altre*.',
      intro:
        'Consulenza per le aziende che costruiscono tecnologia per gli hotel, lavoro concreto per gli hotel che la usano, e un laboratorio che produce le prove di cui entrambi hanno bisogno.',
      centre: 'Ogni giro rende il successivo più credibile.',
      replay: 'Riproduci',
      nodes: [
        {
          key: 'lab',
          name: 'The Lab',
          text: 'Provo cose nuove con l’AI su problemi reali. Ogni esperimento, riuscito o no, diventa una Field Note.',
        },
        {
          key: 'proof',
          name: 'Prove',
          text: 'Field Notes e casi documentati. Gli hotel comprano da chi ha già fatto la cosa, e si vede.',
        },
        {
          key: 'ai',
          name: 'AI in Practice',
          text: 'Lavoro retribuito dentro gli hotel, e la prova diretta di cosa adottano davvero.',
        },
        {
          key: 'advisory',
          name: 'Advisory',
          text: 'I founder ricevono quelle prove. In cambio portano uno sguardo sul mercato, problemi che vale la pena risolvere e, ogni tanto, un partner per una venture.',
        },
      ],
    },
    lab: {
      title: 'Cosa c’è nel Lab *adesso*.',
      intro: 'Il Lab mostra solo ciò che esiste oggi.',
      link: 'Scopri il Lab',
    },
    notes: {
      label: '03 — Note',
      title: 'Note *recenti*.',
      link: 'Leggi le note',
    },
  },

  advisory: {
    seo: {
      title: 'Advisory per founder e investitori nella tecnologia per hotel · Rosso Consulting',
      description:
        'Consulenza continuativa per founder, team di leadership e investitori nella tecnologia per hotel, da chi l’ha venduta, ha fatto crescere chi la vende e oggi la compra.',
    },
    hero: {
      label: 'Per le aziende di tecnologia per hotel',
      title: 'Un posto al tavolo del *founder*.',
      standfirst:
        'Ho venduto tecnologia per hotel, ho fatto crescere i team che la vendono e oggi la compro. Founder e team di leadership ricevono questo sguardo come consulenza continuativa, franca e concreta.',
      secondary: 'Vedi il portfolio',
    },
    deal: {
      heading: 'I due lati della trattativa',
      items: [
        {
          when: '2015–2024',
          line: 'L’ho venduta.',
          text: 'Da account executive a Head of Sales EMEA in Triptease, poi SiteMinder, Cloudbeds e Canary Technologies.',
        },
        {
          when: '80+ persone',
          line: 'Ho fatto crescere i team che la vendono.',
          text: 'Organizzazioni commerciali passate da poche unità a oltre 80 persone, in EMEA e a livello globale.',
        },
        {
          when: 'Dal 2024',
          line: 'Oggi la compro.',
          text: 'Chief Digital Strategy & Business Automation Officer di Planhotel Hospitality Group.',
        },
      ],
    },
    areas: {
      title: 'Dove lo sguardo dell’operatore cambia le *decisioni*.',
      items: [
        {
          name: 'Prodotto',
          text: 'Cosa adotteranno davvero gli hotel, dove l’AI entra nella roadmap e come un operatore giudica un prodotto.',
        },
        {
          name: 'Go-to-market',
          text: 'Cliente ideale, prezzi e pacchetti, processo di vendita, espansione in EMEA e programmi partner.',
        },
        {
          name: 'Posizionamento',
          text: 'Narrativa, messaggi e quadro competitivo, messi alla prova con il modo di pensare di chi compra in hotel.',
        },
        {
          name: 'Rete',
          text: 'Presentazioni a gruppi alberghieri, partner tecnologici e investitori, quando servono a entrambe le parti.',
        },
      ],
    },
    portfolio: {
      label: '01 — Portfolio attuale',
      title: 'Quattro aziende, nessuna *sovrapposizione*.',
      intro: 'Un solo incarico per categoria, così nessuna azienda del portfolio è in concorrenza con un’altra.',
      cols: { company: 'Azienda', category: 'Categoria', role: 'Ruolo', focus: 'Focus' },
      visit: 'Visita',
      items: {
        canary: {
          category: 'Piattaforma di guest management per hotel',
          role: 'GTM Strategic Advisor',
          focus: 'Espansione in Europa e partnership',
        },
        rpg: {
          category: 'Revenue management per hotel indipendenti',
          role: 'Advisory Board',
          focus: 'Direzione di prodotto e tendenze di settore',
        },
        lobbyai: {
          category: 'Agenti AI per prenotazioni di gruppi in hotel e viaggi',
          role: 'Advisory Board',
          focus: 'Go-to-market, strategia commerciale e prospettiva dell’operatore',
        },
        snapfix: {
          category: 'Gestione di operations e manutenzione per hotel',
          role: 'Advisory Board',
          focus: 'Feedback di prodotto e go-to-market',
        },
      },
      note: 'Le relazioni sono dichiarate e non rivendo nulla.',
    },
    formats: {
      title: 'Come lavoriamo *insieme*.',
      shape: 'Formato',
      cadence: 'Frequenza',
      items: [
        {
          name: 'Advisory board seat',
          shape: 'Advisor continuativo per il founder e il team di leadership.',
          cadence: 'Sessioni regolari, e disponibilità tra una e l’altra.',
        },
        {
          name: 'Strategic GTM advisor',
          shape: 'Un mandato mirato, come una regione o un programma di partnership.',
          cadence: 'Definita per mandato.',
        },
        {
          name: 'Investor support',
          shape: 'Expert call, due diligence o un ruolo stabile di advisor di settore per un fondo.',
          cadence: 'Per chiamata, per progetto o trimestrale.',
        },
        {
          name: 'Talk e panel',
          shape: 'Eventi di settore, con spunti dal Lab e dall’esperienza da operatore.',
          cadence: 'Selettiva.',
        },
      ],
    },
    investors: {
      label: 'Per gli investitori',
      title: 'Vedo la trattativa dal posto di chi compra e da quello di chi *vende*.',
      body: 'Un giudizio rapido e franco su un’azienda o una tesi, dal lato dell’operatore e da quello del fornitore. Si può partire da una sola chiamata e arrivare a una due diligence o a un ruolo stabile di settore.',
      items: ['Expert call', 'Due diligence commerciale', 'Advisor di settore per un fondo'],
    },
    independence: {
      title: 'Indipendente per *scelta*.',
      items: [
        {
          name: 'Prima dichiaro',
          text: 'Se il prodotto di un’azienda del portfolio può interessarti, te lo dico fin dall’inizio.',
        },
        {
          name: 'Informazioni separate',
          text: 'Le informazioni dei clienti non arrivano mai alle aziende del portfolio, e viceversa.',
        },
        {
          name: 'Stessi criteri per ogni fornitore',
          text: 'Un’azienda del portfolio in valutazione viene giudicata con la stessa griglia di ogni altro fornitore.',
        },
      ],
      footnote: 'Ciascuna delle parti può chiudere la relazione se un conflitto non si può gestire in modo onesto.',
    },
    seats: {
      title: 'Dove sto aggiungendo *incarichi*.',
      intro: 'Categorie vicine al portfolio attuale, senza sovrapporsi.',
      categories: ['Property management system', 'Distribuzione', 'F&B e POS', 'Gestione del personale', 'Dati degli ospiti', 'Pagamenti'],
      lookFor: 'Cosa cerco',
      criteria: [
        'Lo sguardo dell’operatore cambia le decisioni dell’azienda. Il legame è reale, non di facciata.',
        'Nel portfolio non c’è già un concorrente diretto.',
        'Il founder cerca confronto, non applausi.',
        'Le condizioni tutelano il lavoro indipendente: IP, perimetro di non concorrenza e non sollecitazione sono concordati per iscritto.',
      ],
    },
    cta: {
      title: 'Portami la tua *domanda*.',
      body: 'Trenta minuti, gratuiti. La forma dell’incarico viene dopo.',
    },
  },

  ai: {
    seo: {
      title: 'AI in Practice: lavoro vero fatto con l’AI, per gli hotel · Rosso Consulting',
      description:
        'Gli hotel ottengono lavoro concreto fatto con l’AI, e il metodo resta a loro. Brand bible, SOP e audit costruiti con il tuo team e controllati da una persona che conosce gli hotel.',
    },
    hero: {
      label: 'Per gli hotel',
      title: 'Dalle parole sull’AI agli strumenti che un hotel *usa*.',
      standfirst:
        'Agli hotel non serve un’altra presentazione sull’AI. Servono le SOP scritte, la brand bible finita, l’audit fatto, e un team che sappia fare il prossimo da solo.',
      secondary: 'Vedi il Build menu',
    },
    promise: {
      label: 'La promessa',
      text: 'Lo costruisco con il tuo team, usando l’AI, e il metodo *resta a voi*.',
    },
    who: {
      title: 'Per chi è',
      text: 'Hotel indipendenti, piccoli gruppi e aziende di famiglia: proprietari, direttori e capi reparto che vogliono risultati dall’AI senza assumere un team digitale. Comincio con hotel in Svizzera e in Italia.',
    },
    why: {
      title: 'Perché fatto insieme',
      text: 'Gli hotel comprano lavoro finito, non teoria. Produrre il risultato vero con il tuo team significa avere subito lo strumento e imparare il metodo strada facendo. I corsi sull’AI lasciano poco, le agenzie si tengono il know-how.',
    },
    alongside:
      'L’AI copre i lavori che nessun software fa bene. Lavora accanto agli strumenti che il tuo hotel usa già, non contro.',
    path: {
      label: '01 — Start, Build, Stay',
      title: 'Tre passi, e puoi fermarti dopo *ognuno*.',
      steps: [
        {
          key: 'start',
          step: 'Start',
          name: 'AI Opportunity Workshop',
          meta: 'Mezza giornata, in sede o da remoto',
          text: 'Mezza giornata per capire dove l’AI fa risparmiare tempo o guadagnare, reparto per reparto.',
          details: [
            { k: 'Prima', v: 'Un breve questionario e uno sguardo agli strumenti e ai documenti che usi oggi.' },
            { k: 'Durante', v: 'Un percorso con proprietà o direzione e capi reparto, con dimostrazioni dal vivo sul tuo materiale.' },
            { k: 'Dopo', v: 'Entro una settimana, una AI Opportunity Map: casi d’uso ordinati per valore e sforzo, con tre primi progetti consigliati.' },
          ],
        },
        {
          key: 'build',
          step: 'Build',
          name: 'Progetti a perimetro fisso',
          meta: 'Uno o più moduli, ciascuno a prezzo fisso',
          text: 'I risultati di cui un hotel ha più bisogno, prodotti con l’AI e controllati da una persona che conosce gli hotel.',
          details: [
            { k: 'Scegli', v: 'Un modulo qualsiasi del Build menu qui sotto.' },
            { k: 'Consegna', v: 'Ascolto, costruzione con l’AI, controllo, passaggio di consegne.' },
            { k: 'Resta a te', v: 'Ogni progetto si chiude con un kit di consegna e una sessione di lavoro con il team.' },
          ],
        },
        {
          key: 'stay',
          step: 'Stay',
          name: 'AI Advisory',
          meta: 'Mensile',
          text: 'Una sessione di lavoro al mese per continuare a usare l’AI.',
          details: [
            { k: 'Verifica', v: 'Cosa è in funzione, e quanto fa risparmiare.' },
            { k: 'Scegli', v: 'Il prossimo caso d’uso, con la direzione.' },
            { k: 'Ripeti', v: 'Se serve, gli audit rifatti ogni trimestre.' },
          ],
        },
      ],
    },
    menu: {
      title: 'Il Build *menu*.',
      intro: 'Scegli uno o più moduli. Ciascuno viene definito con te e quotato a prezzo fisso.',
      gets: 'Cosa ottieni',
      inputs: 'Da cosa parto',
      keeps: 'Cosa resta a te',
      testingNote: 'In via di completamento nel Lab. Chiedimi cosa è già pronto.',
      liveNote: 'Già in uso con i clienti.',
      modules: [
        {
          key: 'brand-bible',
          name: 'Brand Bible',
          status: 'live',
          short: 'La storia, la voce e le regole visive della struttura, messe per iscritto e pronte all’uso.',
          gets: 'Storia, posizionamento e voce della struttura; il linguaggio di ogni punto di contatto con l’ospite; regole visive e direzione per le immagini.',
          inputs: 'Interviste, materiali esistenti e recensioni degli ospiti.',
          keeps: 'Un kit di prompt per scrivere nel tono del brand.',
          note: '',
        },
        {
          key: 'sop-library',
          name: 'SOP Library',
          status: '',
          short: 'Le procedure di ogni reparto in un unico formato, nelle lingue del team.',
          gets: 'Procedure operative standard per ogni reparto, in un formato coerente e nelle lingue in cui lavora il tuo team.',
          inputs: 'Interviste, sopralluoghi e manuali esistenti.',
          keeps: 'Il modello e i prompt per scrivere e aggiornare le SOP.',
          note: '',
        },
        {
          key: 'distribution-audit',
          name: 'Distribution Consistency Audit',
          status: 'testing',
          short: 'Ogni incoerenza tra OTA, sito, booking engine e pagine trade, e dove correggerla.',
          gets: 'Ogni discrepanza tra OTA, sito, booking engine, metasearch e pagine di tour operator e trade (nomi delle camere, descrizioni, servizi, punti ristoro, policy), con cosa correggere e dove.',
          inputs: 'Le schede pubbliche, più gli export degli extranet dove disponibili.',
          keeps: 'Una checklist e un flusso per ripeterlo.',
          note: 'Riguarda i contenuti, non le tariffe. Per la parità tariffaria esistono già strumenti specializzati. Per le incoerenze di contenuto no, e si moltiplicano ogni volta che in hotel cambia qualcosa.',
        },
        {
          key: 'guest-sentiment',
          name: 'Guest Sentiment Report',
          status: 'testing',
          short: 'Cosa dicono gli ospiti sulle varie piattaforme, trasformato in azioni per reparto.',
          gets: 'Temi, tendenze e azioni per reparto, dalle recensioni su tutte le piattaforme.',
          inputs: 'Recensioni pubbliche ed export dei questionari.',
          keeps: 'Un flusso trimestrale da ripetere.',
          note: '',
        },
        {
          key: 'search-ai-visibility',
          name: 'Search & AI Visibility Audit',
          status: 'testing',
          short: 'Come i motori di ricerca e gli assistenti AI descrivono il tuo hotel, e come correggerli.',
          gets: 'Come motori di ricerca e assistenti AI trovano e descrivono l’hotel, e cosa sistemare perché lo facciano bene.',
          inputs: 'Il tuo sito, le tue schede e le risposte degli assistenti AI.',
          keeps: 'Prompt di monitoraggio e una checklist.',
          note: '',
        },
        {
          key: 'custom-workflows',
          name: 'Custom workflows',
          status: '',
          short: 'Per i lavori che nessun software fa bene.',
          gets: 'Per esempio risposte alle recensioni nella voce dell’hotel, modelli per la comunicazione con gli ospiti, reportistica per la direzione o materiale di onboarding per il personale.',
          inputs: 'Definiti durante il workshop.',
          keeps: 'Un flusso documentato, e la formazione per il team.',
          note: '',
        },
      ],
    },
    delivery: {
      title: 'Come viene consegnato ogni *progetto*.',
      steps: [
        { name: 'Ascolto', text: 'Capire l’hotel, il suo team e il materiale che esiste già.' },
        { name: 'Costruzione con l’AI', text: 'Bozze veloci, iterazioni con il team, rifinitura finché è giusto.' },
        { name: 'Controllo', text: 'Una persona che conosce gli hotel rivede ogni risultato prima della consegna.' },
        { name: 'Consegna', text: 'Il tuo team possiede il risultato, i prompt e il flusso di lavoro.' },
      ],
    },
    work: {
      label: '02 — Già in pratica',
      title: 'Brand e siti costruiti in questo *modo*.',
      items: [
        {
          kind: 'Strategic advisor · 2026',
          name: 'Hotel Association Zanzibar',
          text: 'Un logo rinnovato e nuovi asset digitali, una brand guide completa e un sito nuovo.',
          more: 'In corso: il programma digitale più ampio dell’associazione, con HAZ Digital e un portale per i soci.',
        },
        {
          kind: 'Cliente · Hotel, Lugano',
          name: 'THE VIEW Lugano',
          text: 'Progetti di brand, sito e operations per l’hotel, realizzati con lo stesso metodo assistito dall’AI.',
          more: '',
        },
        {
          kind: 'Cliente · Agenzia di viaggi, Lugano',
          name: 'Francorosso',
          text: 'Un nuovo logo, una brand guideline con gli asset visivi e un sito completamente rinnovato.',
          more: '',
        },
      ],
    },
    terms: {
      fee: {
        title: 'Perimetro fisso, prezzo fisso',
        items: [
          'Ogni incarico viene definito parlando e quotato a prezzo fisso. Mai a ore.',
          'Il perimetro si concorda per iscritto prima di iniziare.',
          'La prima conversazione è gratuita e dura circa trenta minuti.',
          'Stay è un retainer mensile.',
        ],
      },
      data: {
        title: 'Il tuo materiale resta tuo',
        items: [
          'Il materiale dell’hotel si usa solo per l’incarico.',
          'Il materiale riservato entra solo in strumenti con protezione dei dati di livello aziendale.',
          'La maggior parte dei moduli non richiede alcun dato personale degli ospiti.',
          'Risultati e flussi di lavoro appartengono all’hotel.',
        ],
      },
    },
    cta: {
      title: 'Portami la tua *domanda*.',
      body: 'Si parte da una conversazione. Se c’è sintonia, l’AI Opportunity Workshop è il primo passo a pagamento.',
    },
  },

  lab: {
    seo: {
      title: 'The Lab: dove le idee vengono provate · Rosso Consulting',
      description:
        'Dove provo cosa rende possibile l’AI, prima di consigliarlo. Il Lab produce prove, servizi e, ogni tanto, un’azienda.',
    },
    hero: {
      label: 'The Lab',
      title: 'Dove le idee vengono *provate*.',
      standfirst:
        'Qui provo cosa rende possibile l’AI su problemi reali, prima di consigliarlo a chiunque. Ne escono prove, servizi e, ogni tanto, un’azienda.',
      button: 'Leggi le note',
    },
    story: {
      quote:
        'Non ho mai imparato a programmare, eppure ho creato e lanciato Astia Web a forza di prompt, test e iterazioni, finché non era giusto. Mi ha insegnato più in qualche mese che anni di letture.',
      who: 'Marco Rosso',
    },
    path: {
      title: 'Dall’esperimento all’*azienda*.',
      stages: [
        {
          key: 'testing',
          stage: 'Esperimento',
          verb: 'Provarlo',
          text: 'Un problema reale, affrontato con l’AI su materiale reale. Condiviso come Field Note, qualunque sia il risultato.',
        },
        {
          key: 'live',
          stage: 'Servizio',
          verb: 'Offrirlo',
          text: 'Quando funziona più volte, diventa un modulo Build di AI in Practice.',
        },
        {
          key: 'venture',
          stage: 'Venture',
          verb: 'Farlo camminare da solo',
          text: 'Quando supera il venture test, diventa un’azienda con un brand proprio: a Rosso Consulting company.',
        },
      ],
    },
    now: {
      label: '01 — Il Lab oggi',
      title: 'Cosa esiste *oggi*.',
      filterLabel: 'Filtra per stato',
      all: 'Tutti',
      legend: {
        testing: 'In costruzione o in prova su materiale reale.',
        live: 'In uso, con clienti.',
        venture: 'Attivo con un brand proprio.',
      },
      empty: 'Al momento niente con questo stato.',
      items: [
        {
          key: 'astia',
          status: 'venture',
          name: 'Astia Web',
          text: 'Siti web per hotel e piccole imprese: brand guide, sito su misura, ogni modifica e ogni lingua per CHF 150 al mese per sito. Costruito e gestito con l’AI, con clienti paganti.',
          endorsement: 'A Rosso Consulting company',
          link: 'Visita Astia Web',
        },
        {
          key: 'brand-sites',
          status: 'live',
          name: 'Brand guide e siti costruiti con l’AI',
          text: 'Il metodo dietro i lavori per Hotel Association Zanzibar, THE VIEW Lugano e Francorosso, oggi offerto come moduli Build in AI in Practice.',
          endorsement: '',
          link: 'Vedi AI in Practice',
        },
        {
          key: 'audit-toolkit',
          status: 'testing',
          name: 'Toolkit di audit con l’AI',
          text: 'Coerenza della distribuzione, sentiment degli ospiti e visibilità su motori di ricerca e assistenti AI, in preparazione come moduli Build.',
          endorsement: '',
          link: '',
        },
      ],
    },
    test: {
      title: 'Il venture test. Devono valere *tutte e quattro*.',
      items: [
        { name: 'Bisogno ricorrente', text: 'Il problema si ripresenta in molti clienti, in forma simile.' },
        { name: 'Erogazione standard', text: 'Si può offrire come servizio standard, non come lavoro su misura.' },
        { name: 'Conti che tornano', text: 'I numeri reggono alla scala che il mercato consente.' },
        { name: 'Meglio con un brand proprio', text: 'Il mercato si fida di più sotto un nome dedicato.' },
      ],
    },
    run: {
      title: 'Come funziona un *esperimento*.',
      steps: [
        { name: 'Una sola domanda', text: 'Scrivere prima di iniziare cosa deve dimostrare l’esperimento.' },
        { name: 'Materiale reale', text: 'Provare su contenuti e dati veri di un hotel, non su demo.' },
        { name: 'Tempo limitato', text: 'Fissare una scadenza, perché lo sforzo resti proporzionato alla domanda.' },
        { name: 'Decidere e condividere', text: 'Trasformarlo in servizio, oppure chiuderlo e tenere la lezione. Poi scrivere la Field Note.' },
      ],
    },
    cta: {
      title: 'Hai un problema che vale la pena *provare*?',
      body: 'Se hai qualcosa da mettere alla prova su materiale reale, mi interessa sentirlo.',
      secondary: 'Leggi le note',
    },
  },

  notes: {
    seo: {
      title: 'Note: Field Notes e saggi di Marco Rosso',
      description:
        'Note brevi su cosa ho provato, cosa ha funzionato e cosa no, e saggi più lunghi su distribuzione alberghiera, vendita diretta e AI.',
    },
    hero: {
      label: 'Note',
      title: 'Cosa ho provato, cosa ha funzionato e cosa *no*.',
      standfirst:
        'Le Field Notes sono note brevi dal Lab: una cosa provata e cosa mi ha insegnato. Una nuova ogni due settimane, qui e su LinkedIn.',
    },
    langNote: 'Le note sono scritte in inglese.',
    fieldNotes: {
      title: 'Field Notes',
      noteLabel: 'Field Note',
      empty: 'Le prime Field Notes sono in arrivo. Seguimi su LinkedIn o iscriviti al feed RSS.',
    },
    essays: {
      title: 'Saggi',
      intro: 'Testi più lunghi su distribuzione, vendita diretta e AI negli hotel.',
    },
    follow: 'Seguimi su LinkedIn',
    rss: 'Feed RSS',
  },

  article: {
    back: 'Tutte le note',
    related: 'Continua a leggere',
    essay: 'Saggio',
    fieldNote: 'Field Note',
    authorTitle: 'Scritto da Marco Rosso',
    authorBio: 'Operatore, advisor e builder nella tecnologia per l’ospitalità. Guido digitale e automazione in Planhotel Hospitality Group, faccio da advisor ad aziende di tecnologia per hotel e costruisco con l’AI nel mio laboratorio.',
    progress: 'Avanzamento della lettura',
  },

  about: {
    seo: {
      title: 'Chi è Marco Rosso · Rosso Consulting',
      description:
        'Marco Rosso è operatore nell’ospitalità, advisor nella tecnologia per hotel e builder, con base a Lugano, in Svizzera.',
    },
    hero: {
      label: 'Chi sono',
      title: 'La storia, con parole *mie*.',
      standfirst:
        'Lavoro sull’ospitalità da tre lati. Guido digitale e automazione in un gruppo alberghiero, faccio da advisor alle aziende che costruiscono tecnologia per gli hotel, e costruisco con l’AI in prima persona. Rosso Consulting è dove queste cose si incontrano.',
      portraitAlt: 'Ritratto di Marco Rosso',
    },
    story: [
      'Sono cresciuto nell’ospitalità. Mio nonno ha fondato Francorosso International e Planhotel Hospitality Group, quindi gli hotel erano la lingua di casa molto prima di diventare il mio lavoro.',
      'Dopo EHL sono passato dall’altra parte del tavolo. Per quasi dieci anni ho venduto tecnologia per hotel e fatto crescere chi la vende, in Triptease, SiteMinder, Cloudbeds e Canary Technologies: da account executive fino a guidare team commerciali in EMEA e nel mondo.',
      'Nel 2024 sono tornato a fare l’operatore. Come Chief Digital Strategy & Business Automation Officer di Planhotel Hospitality Group oggi compro il tipo di software che vendevo, e vedo ogni giorno cosa gli hotel adottano davvero.',
      'Poi l’AI ha cambiato quello che una persona sola può fare. Non ho mai imparato a programmare, eppure ho creato e lanciato Astia Web, un servizio di siti web per hotel e piccole imprese, a forza di prompt, test e iterazioni, finché non era giusto. Mi ha insegnato più in qualche mese che anni di letture.',
      'Rosso Consulting mette insieme questi lati. Faccio da advisor ai founder che costruiscono tecnologia per l’ospitalità, aiuto gli hotel a mettere l’AI al lavoro e tengo un laboratorio dove provo le idee prima di consigliarle a chiunque. Se stai pensando a cosa viene dopo, mi piacerebbe sentirne parlare.',
    ],
    path: {
      label: '01 — Il percorso',
      title: 'Dalle radici a *oggi*.',
      items: [
        { key: 'roots', stage: 'Radici', title: 'Una famiglia di ospitalità', text: 'Francorosso International e Planhotel, fondate da mio nonno.' },
        { key: 'seller', stage: 'Vendita', title: 'Quasi dieci anni di SaaS per hotel', text: 'Triptease, SiteMinder, Cloudbeds, Canary Technologies.' },
        { key: 'operator', stage: 'Operatore', title: 'Di nuovo a gestire hotel', text: 'Planhotel Hospitality Group, dal 2024.' },
        { key: 'builder', stage: 'Builder', title: 'L’AI come team', text: 'Astia Web, costruito senza saper programmare.' },
        { key: 'now', stage: 'Oggi', title: 'Rosso Consulting', text: 'Advisory, AI in Practice e il Lab.' },
      ],
    },
    numbers: [
      { value: 4, suffix: '', text: 'aziende SaaS per l’ospitalità, da account executive a global director' },
      { value: 80, suffix: '+', text: 'persone nelle organizzazioni commerciali fatte crescere da poche unità' },
      { value: 4, suffix: '', text: 'incarichi di advisory attivi con aziende di tecnologia per l’ospitalità' },
      { value: 3, suffix: '', text: 'lingue di lavoro: inglese, italiano e spagnolo' },
    ],
    career: {
      title: 'Carriera',
      items: [
        { years: '2024–oggi', org: 'Planhotel Hospitality Group', role: 'Chief Digital Strategy & Business Automation Officer' },
        { years: '2023–2024', org: 'Canary Technologies', role: 'Director of Sales & GTM EMEA' },
        { years: '2020–2023', org: 'Cloudbeds', role: 'Director, Inside Sales & CSM (Global)' },
        { years: '2019–2020', org: 'SiteMinder', role: 'Senior Regional Sales Manager, Spain' },
        { years: '2015–2019', org: 'Triptease', role: 'Da Account Executive a Head of Sales EMEA' },
      ],
      alsoTitle: 'Inoltre',
      also: [
        'Advisor di Canary Technologies, RoomPriceGenie, LobbyAI e Snapfix',
        'Strategic advisor della Hotel Association Zanzibar',
        'Fondatore di Astia Web',
      ],
    },
    education: {
      title: 'Formazione',
      items: [
        { years: '2024–2025', org: 'Harvard Business School', what: 'Executive Education: Program for Leadership Development' },
        { years: '2011–2015', org: 'EHL Lausanne', what: 'BSc International Hospitality Management' },
        { years: '2010', org: 'Cornell University', what: 'Diploma in Hospitality & Revenue Management' },
      ],
    },
    principles: {
      label: '02 — Principi',
      title: 'Come *lavoro*.',
      items: [
        { name: 'Provato, poi consigliato', text: 'Consiglio solo ciò che ho gestito, venduto, costruito o testato. Se non l’ho provato, lo dico, e mi offro di provarlo.' },
        { name: 'Prima dichiaro', text: 'Se il prodotto di un’azienda di cui sono advisor può interessare un cliente, dichiaro la relazione fin dall’inizio.' },
        { name: 'Informazioni separate', text: 'Le informazioni dei clienti non arrivano mai alle aziende di cui sono advisor, e viceversa.' },
        { name: 'Stessi criteri per ogni fornitore', text: 'Un’azienda del portfolio in valutazione viene giudicata con la stessa griglia di ogni altro fornitore.' },
        { name: 'Perimetro fisso, prezzo fisso', text: 'Conosci il costo prima di iniziare, e ogni modifica al perimetro si concorda per iscritto.' },
        { name: 'Ogni risultato dell’AI è controllato', text: 'L’AI fa la bozza. Una persona che conosce gli hotel rivede tutto prima della consegna.' },
        { name: 'Il risultato è tuo', text: 'Risultati, prompt e flussi di lavoro restano a te. Non trattengo nulla per creare dipendenza.' },
        { name: 'Cura dei dati', text: 'Il tuo materiale si usa solo per l’incarico, e solo in strumenti con un’adeguata protezione dei dati.' },
        { name: 'Dire di no quando non è il caso', text: 'Un no chiaro protegge la reputazione che porta il prossimo sì.' },
        { name: 'Condividere ciò che imparo', text: 'Le Field Notes mostrano cosa ho provato e cosa mi ha insegnato, così vedi il ragionamento dietro il risultato.' },
      ],
    },
    bios: {
      title: 'Per organizzatori di eventi e *stampa*.',
      intro: 'Biografie approvate, in terza persona. Scegli la lunghezza e copiala.',
      copy: 'Copia',
      copied: 'Copiato',
      items: [
        { key: 'line', tab: 'Una riga', text: 'Marco Rosso è operatore nell’ospitalità, advisor nella tecnologia per hotel e builder.' },
        {
          key: 'short',
          tab: '30 parole',
          text: 'Marco Rosso è Chief Digital Strategy & Business Automation Officer di Planhotel Hospitality Group, advisor di aziende di tecnologia per l’ospitalità tra cui Canary Technologies e RoomPriceGenie, e fondatore di Rosso Consulting.',
        },
        {
          key: 'medium',
          tab: '60 parole',
          text: 'Marco Rosso lavora sull’ospitalità da tre lati. È Chief Digital Strategy & Business Automation Officer di Planhotel Hospitality Group e advisor di Canary Technologies, RoomPriceGenie, LobbyAI e Snapfix. Prima di tornare alle operations nel 2024, ha passato quasi dieci anni a vendere tecnologia per hotel in Triptease, SiteMinder, Cloudbeds e Canary. Con Rosso Consulting affianca i founder, aiuta gli hotel a usare l’AI e crea nuove aziende.',
        },
        {
          key: 'long',
          tab: '120 parole',
          text: 'Marco Rosso è cresciuto nell’ospitalità: suo nonno ha fondato Francorosso International e Planhotel Hospitality Group. Dopo la laurea all’EHL di Losanna ha passato quasi dieci anni a vendere tecnologia per hotel e a far crescere chi la vende, in Triptease, SiteMinder, Cloudbeds e Canary Technologies, portando organizzazioni commerciali da poche unità a oltre 80 persone. Nel 2024 è tornato dalla parte degli operatori come Chief Digital Strategy & Business Automation Officer di Planhotel Hospitality Group. È advisor di Canary Technologies, RoomPriceGenie, LobbyAI e Snapfix, strategic advisor della Hotel Association Zanzibar e, con Rosso Consulting, aiuta gli hotel a mettere l’AI al lavoro. Ha anche fondato Astia Web, un servizio di siti web costruito e gestito con l’AI. Ha studiato all’EHL, alla Cornell e alla Harvard Business School.',
        },
      ],
    },
  },

  contact: {
    seo: {
      title: 'Parliamone · Rosso Consulting',
      description:
        'Portami la tua domanda. La prima conversazione è gratuita e dura circa trenta minuti.',
    },
    hero: {
      label: 'Parliamone',
      title: 'Portami la tua *domanda*.',
      standfirst:
        'La prima conversazione è gratuita e dura circa trenta minuti. Raccontami a cosa stai lavorando. La forma del lavoro viene dopo.',
    },
    form: {
      title: 'Scrivimi',
      name: 'Il tuo nome',
      email: 'Email',
      org: 'Azienda o hotel',
      optional: 'facoltativo',
      role: 'Sei',
      rolePlaceholder: 'Scegli un’opzione',
      roles: [
        'Founder o leadership di un’azienda di tecnologia per hotel',
        'Proprietario, direttore o capo reparto di un hotel',
        'Un investitore',
        'Organizzatore di un evento',
        'Altro',
      ],
      message: 'Di cosa vorresti parlare?',
      messageHelp: 'Bastano poche righe.',
      submit: 'Invia',
      sending: 'Invio in corso',
      required: 'Compila questo campo.',
      invalidEmail: 'Inserisci un indirizzo email valido.',
      successTitle: 'Grazie. Il tuo messaggio è partito.',
      successBody: 'Leggo personalmente ogni messaggio e ti risponderò via email.',
      error: 'Qualcosa è andato storto e il messaggio non è stato inviato. Riprova, oppure scrivimi direttamente.',
      privacy: 'Uso i tuoi dati solo per risponderti.',
      privacyLink: 'Informativa sulla privacy',
      honeypot: 'Lascia vuoto questo campo',
    },
    direct: {
      title: 'Oppure scrivimi direttamente',
      email: 'Email',
      linkedin: 'LinkedIn',
      where: 'Dove',
      whereValue: 'Lugano, Svizzera. Lavoro in tutta l’area EMEA.',
    },
    next: {
      title: 'Cosa succede *dopo*.',
      steps: [
        { name: 'Conversazione', text: 'Prima ascolto, e se non è il caso lo dico chiaramente.' },
        { name: 'Nota di perimetro', text: 'Una pagina: il problema, il risultato, cosa è incluso e cosa no.' },
        { name: 'Proposta', text: 'Un prezzo fisso per il perimetro concordato.' },
        { name: 'Consegna', text: 'Ascolto, costruzione, controllo, passaggio di consegne.' },
        { name: 'Caso documentato', text: 'Con il tuo permesso, una breve nota su cosa è stato fatto.' },
      ],
    },
  },

  privacy: {
    seo: {
      title: 'Informativa sulla privacy · Rosso Consulting',
      description: 'Come Rosso Consulting tratta i dati personali che condividi tramite questo sito.',
    },
    title: 'Informativa sulla *privacy*.',
    updated: 'Ultimo aggiornamento: ottobre 2026',
    sections: [
      {
        h: 'Chi è responsabile',
        p: 'Marco Rosso, Rosso Consulting, Lugano, Svizzera. Per qualsiasi domanda sui tuoi dati scrivi a marco@rossoconsulting.ch.',
      },
      {
        h: 'Cosa raccolgo',
        p: 'Solo ciò che invii con il modulo di contatto: nome, indirizzo email, azienda o hotel se lo indichi, l’opzione scelta e il messaggio. Come ogni hosting, anche Netlify tratta dati tecnici come gli indirizzi IP per servire e proteggere il sito.',
      },
      {
        h: 'Perché',
        p: 'Per leggere il tuo messaggio, risponderti e preparare l’eventuale lavoro che concordiamo. Niente liste di marketing, niente condivisione per scopi di altri.',
      },
      {
        h: 'Dove vengono trattati',
        p: 'Il sito e il modulo sono ospitati da Netlify, Inc. negli Stati Uniti, e i messaggi arrivano nella mia casella email. I dati possono quindi essere trattati fuori dalla Svizzera e dall’UE, con le garanzie offerte da questi fornitori.',
      },
      {
        h: 'Per quanto tempo',
        p: 'Per il tempo necessario a gestire la tua richiesta e l’eventuale incarico che ne segue, poi vengono cancellati.',
      },
      {
        h: 'Cookie e tracciamento',
        p: 'Questo sito non usa cookie di tracciamento né script di analisi o pubblicità. Se cambi il tema chiaro o scuro, la scelta resta salvata solo nel tuo browser. I font sono serviti da questo sito, non da terzi.',
      },
      {
        h: 'I tuoi diritti',
        p: 'In base alla Legge federale svizzera sulla protezione dei dati e, dove si applica, al GDPR, puoi chiedere di vedere, correggere o cancellare i tuoi dati, o opporti al loro uso. Scrivi a marco@rossoconsulting.ch.',
      },
    ],
  },

  notFound: {
    seo: { title: 'Pagina non trovata · Rosso Consulting', description: 'Questa pagina non esiste.' },
    label: '404',
    title: 'Questa pagina non *esiste*.',
    text: 'Forse si è spostata quando il sito è stato rifatto. Da qui si riparte bene:',
  },
};

export default it;
