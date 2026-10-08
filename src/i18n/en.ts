/**
 * English copy. The source of truth for every string on the site.
 * Italian and Spanish are typed against this file, so a missing string fails the build.
 *
 * House rules (Brand Guidelines, 05–06): first person singular, British English,
 * sentence case, one *italic phrase* per headline, curly apostrophes,
 * offer and company names unchanged in every language.
 */
const en = {
  meta: {
    htmlLang: 'en',
    ogLocale: 'en_GB',
    langName: 'English',
  },

  ui: {
    skip: 'Skip to content',
    menu: 'Menu',
    close: 'Close',
    mainNav: 'Main',
    nav: {
      advisory: 'Advisory',
      ai: 'AI in Practice',
      lab: 'The Lab',
      notes: 'Notes',
      about: 'About',
    },
    cta: 'Start a conversation',
    langLabel: 'Language',
    themeDark: 'Switch to dark theme',
    themeLight: 'Switch to light theme',
    newTab: '(opens in a new tab)',
    minRead: 'min read',
    home: 'Home',
  },

  footer: {
    signature: 'Tried before *advised.*',
    about: 'Rosso Consulting is the advisory practice and lab of Marco Rosso, operator, advisor and builder in hospitality technology.',
    work: 'Work',
    read: 'Read',
    contact: 'Contact',
    location: 'Lugano, Switzerland',
    languages: 'Working in English, Italian and Spanish',
    privacy: 'Privacy',
    rights: 'Rosso Consulting',
  },

  cta: {
    title: 'Bring the *question*.',
    body: 'The first conversation is unbilled and takes about thirty minutes. The shape of the work comes later.',
    button: 'Start a conversation',
    or: 'Or write to',
  },

  status: {
    testing: 'Testing',
    live: 'Live',
    venture: 'Venture',
    closed: 'Closed',
  },

  home: {
    seo: {
      title: 'Marco Rosso · Operator, advisor and builder in hospitality technology',
      description:
        'I lead digital and automation at a hotel group, advise hospitality technology companies, and build with AI in my own lab. I help founders grow and hotels put AI to work.',
    },
    hero: {
      label: 'Marco Rosso · Lugano',
      words: ['Operator.', 'Advisor.', 'Builder.'],
      intro:
        'I lead digital and automation at a hotel group, advise hospitality technology companies, and build with AI in my own lab. I help founders grow and hotels put AI to work.',
      secondary: 'See the Lab',
    },
    offers: [
      {
        key: 'advisory',
        audience: 'For hotel tech companies',
        name: 'Advisory',
        text: 'Product, go-to-market, positioning and the right introductions.',
      },
      {
        key: 'ai',
        audience: 'For hotels',
        name: 'AI in Practice',
        text: 'Get the work done with AI, and keep the method.',
      },
      {
        key: 'lab',
        audience: 'For the curious',
        name: 'The Lab',
        text: 'What I am trying now, what worked and what did not.',
      },
    ],
    namesHeading: 'Advisory roles, clients and the hotel group I help run',
    sides: {
      label: '01 — Three sides',
      title: 'One person, three sides of the *table*.',
      intro:
        'Few people in hospitality buy hotel technology as an operator, advise the companies that sell it and build with AI themselves. I do all three, and each side keeps the others honest.',
      portraitAlt: 'Portrait of Marco Rosso',
      caption: 'Marco Rosso, Lugano',
      tabsLabel: 'Three sides of my work',
      items: [
        {
          key: 'operator',
          tab: 'Operator',
          seat: 'The operator’s seat',
          line: 'I buy and run it.',
          body: 'Since 2024 I have been Chief Digital Strategy & Business Automation Officer at Planhotel Hospitality Group: digital strategy, automation and AI adoption inside a working hotel group. I know what gets adopted, what gets ignored and why.',
          proof: ['Planhotel Hospitality Group', 'Since 2024'],
        },
        {
          key: 'advisor',
          tab: 'Advisor',
          seat: 'The vendor’s side',
          line: 'I help the companies that sell it.',
          body: 'Nearly a decade in commercial roles at Triptease, SiteMinder, Cloudbeds and Canary Technologies, from account executive to global director. Today I advise four hospitality technology companies. Founders get the buyer’s view and the seller’s.',
          proof: ['Canary Technologies', 'RoomPriceGenie', 'LobbyAI', 'Snapfix'],
        },
        {
          key: 'builder',
          tab: 'Builder',
          seat: 'The maker’s bench',
          line: 'I build with AI myself.',
          body: 'I never learned to code, yet I built and launched Astia Web, a website service for hotels and small businesses, with AI as my engineering team. The same method produced the brands and websites for Hotel Association Zanzibar, THE VIEW Lugano and Francorosso.',
          proof: ['Astia Web', 'Hotel Association Zanzibar', 'THE VIEW Lugano', 'Francorosso'],
        },
      ],
    },
    signature: {
      title: 'Tried before *advised.*',
      promise:
        'Every recommendation rests on something I have run, sold, built or tested. When I have not tried something, I say so, and offer to try it.',
    },
    wheel: {
      label: '02 — How it fits together',
      title: 'Each line of work feeds the *others*.',
      intro:
        'Advice for the companies building hotel technology, practical builds for the hotels using it, and a lab that keeps producing the evidence both depend on.',
      centre: 'Every turn makes the next one more credible.',
      replay: 'Play again',
      nodes: [
        {
          key: 'lab',
          name: 'The Lab',
          text: 'I try new things with AI on real problems. Every experiment, successful or not, becomes a Field Note.',
        },
        {
          key: 'proof',
          name: 'Proof',
          text: 'Field Notes and case notes. Hotels buy from someone who has visibly done the thing.',
        },
        {
          key: 'ai',
          name: 'AI in Practice',
          text: 'Paid work inside hotels, and first-hand evidence of what operators actually adopt.',
        },
        {
          key: 'advisory',
          name: 'Advisory',
          text: 'Founders get that evidence. They bring back a view across the market, problems worth solving and, now and then, a partner for a venture.',
        },
      ],
    },
    lab: {
      title: 'What is in the Lab *now*.',
      intro: 'The Lab shows only what exists today.',
      link: 'See the Lab',
    },
    notes: {
      label: '03 — Notes',
      title: 'Recent *notes*.',
      link: 'Read the notes',
    },
  },

  advisory: {
    seo: {
      title: 'Advisory for hotel technology founders and investors · Rosso Consulting',
      description:
        'Recurring advice for hotel technology founders, leadership teams and investors, from someone who has sold, scaled and now buys hotel technology.',
    },
    hero: {
      label: 'For hotel technology companies',
      title: 'A seat at the founder’s *table*.',
      standfirst:
        'I have sold hotel technology, scaled the teams that sell it, and today I buy it. Founders and leadership teams get that view as recurring, candid and practical advice.',
      secondary: 'See the portfolio',
    },
    deal: {
      heading: 'Both sides of the deal',
      items: [
        {
          when: '2015–2024',
          line: 'I sold it.',
          text: 'Account executive to Head of Sales EMEA at Triptease, then SiteMinder, Cloudbeds and Canary Technologies.',
        },
        {
          when: '80+ people',
          line: 'I scaled the teams that sell it.',
          text: 'Commercial organisations grown from single digits to more than 80 people, across EMEA and globally.',
        },
        {
          when: 'Since 2024',
          line: 'Today I buy it.',
          text: 'Chief Digital Strategy & Business Automation Officer at Planhotel Hospitality Group.',
        },
      ],
    },
    areas: {
      title: 'Where the operator’s view changes *decisions*.',
      items: [
        {
          name: 'Product',
          text: 'What hotels will actually adopt, where AI fits the roadmap, and how operators judge a product.',
        },
        {
          name: 'Go-to-market',
          text: 'Ideal customer, pricing and packaging, sales motion, EMEA expansion and partner programmes.',
        },
        {
          name: 'Positioning',
          text: 'Narrative, messaging and competitive frame, tested against how hotel buyers think.',
        },
        {
          name: 'Network',
          text: 'Introductions to hotel groups, technology partners and investors, where they serve both sides.',
        },
      ],
    },
    portfolio: {
      label: '01 — Current portfolio',
      title: 'Four companies, no *overlap*.',
      intro: 'One seat per category, so no two companies in the portfolio compete with each other.',
      cols: { company: 'Company', category: 'Category', role: 'Role', focus: 'Focus' },
      visit: 'Visit',
      items: {
        canary: {
          category: 'Guest management platform for hotels',
          role: 'GTM Strategic Advisor',
          focus: 'EU expansion and partnerships',
        },
        rpg: {
          category: 'Revenue management for independent hotels',
          role: 'Advisory Board',
          focus: 'Product direction and industry trends',
        },
        lobbyai: {
          category: 'AI agents for hotel and travel group bookings',
          role: 'Advisory Board',
          focus: 'Go-to-market, commercial strategy and the operator’s perspective',
        },
        snapfix: {
          category: 'Operations and maintenance management for hotels',
          role: 'Advisory Board',
          focus: 'Product feedback and go-to-market',
        },
      },
      note: 'Relationships are disclosed and nothing is resold.',
    },
    formats: {
      title: 'How we work *together*.',
      shape: 'Shape',
      cadence: 'Cadence',
      items: [
        {
          name: 'Advisory board seat',
          shape: 'Ongoing advisor to the founder and leadership team.',
          cadence: 'Regular sessions, plus access in between.',
        },
        {
          name: 'Strategic GTM advisor',
          shape: 'A focused remit, such as a region or a partnership programme.',
          cadence: 'Agreed per remit.',
        },
        {
          name: 'Investor support',
          shape: 'Expert calls, deal diligence or a standing sector role for a fund.',
          cadence: 'Per call, per project or quarterly.',
        },
        {
          name: 'Talks and panels',
          shape: 'Industry events, drawing on Lab work and operator experience.',
          cadence: 'Selective.',
        },
      ],
    },
    investors: {
      label: 'For investors',
      title: 'I see the deal from the buyer’s seat and the *seller’s*.',
      body: 'Fast, candid judgement on a company or a thesis, from the operator side and the vendor side. It can start with a single call and grow into diligence or a standing sector role.',
      items: ['Expert calls', 'Commercial due diligence', 'Sector advisor to a fund'],
    },
    independence: {
      title: 'Independent by *design*.',
      items: [
        {
          name: 'Disclose first',
          text: 'If a portfolio company’s product may be relevant to you, I say so at the outset.',
        },
        {
          name: 'Keep information apart',
          text: 'Client information never reaches portfolio companies, and portfolio information never reaches clients.',
        },
        {
          name: 'Same criteria for every vendor',
          text: 'A portfolio company in an evaluation is scored against the same rubric as every other vendor.',
        },
      ],
      footnote: 'Either side can end a relationship if a conflict cannot be managed honestly.',
    },
    seats: {
      title: 'Where I am adding *seats*.',
      intro: 'Categories next to the current portfolio, without overlapping it.',
      categories: ['Property management systems', 'Distribution', 'F&B and POS', 'Workforce tools', 'Guest data', 'Payments'],
      lookFor: 'What I look for',
      criteria: [
        'Operator insight changes the company’s decisions. The fit is real, not decorative.',
        'No direct competitor already sits in the portfolio.',
        'The founder wants challenge, not applause.',
        'Terms protect independent work: IP, non-compete scope and non-solicitation are agreed explicitly.',
      ],
    },
    cta: {
      title: 'Bring the *question*.',
      body: 'Thirty minutes, unbilled. The shape of a seat comes later.',
    },
  },

  ai: {
    seo: {
      title: 'AI in Practice: real work done with AI, for hotels · Rosso Consulting',
      description:
        'Hotels get real work done with AI, and keep the method. Brand bibles, SOP libraries and audits built with your team and checked by a person who knows hotels.',
    },
    hero: {
      label: 'For hotels',
      title: 'From talk about AI to tools a hotel *uses*.',
      standfirst:
        'Hotels do not need another presentation about AI. They need the SOPs written, the brand bible finished and the audit done, and a team that knows how to do the next one.',
      secondary: 'See the Build menu',
    },
    promise: {
      label: 'The promise',
      text: 'I build it with your team, using AI, and leave the workflow *behind*.',
    },
    who: {
      title: 'Who it is for',
      text: 'Independent hotels, small groups and family-owned operators: owners, general managers and department heads who want results from AI without hiring a digital team. I start with hotels in Switzerland and Italy.',
    },
    why: {
      title: 'Why done with you',
      text: 'Hotels buy finished work, not understanding. Producing the real deliverable with your team means you get the asset now and learn the method along the way. AI training leaves little behind, and agencies keep the know-how.',
    },
    alongside:
      'AI covers the jobs no software handles well. It sits alongside the tools your hotel already uses, not against them.',
    path: {
      label: '01 — Start, Build, Stay',
      title: 'Three steps, and you can stop after *any* of them.',
      steps: [
        {
          key: 'start',
          step: 'Start',
          name: 'AI Opportunity Workshop',
          meta: 'Half a day, on site or remote',
          text: 'Half a day to find where AI saves time or makes money, department by department.',
          details: [
            { k: 'Before', v: 'A short questionnaire and a look at your current tools and documents.' },
            { k: 'During', v: 'A walkthrough with the owner or GM and department heads, with live demonstrations on your own material.' },
            { k: 'After', v: 'An AI Opportunity Map within a week: use cases ranked by value and effort, with three recommended first builds.' },
          ],
        },
        {
          key: 'build',
          step: 'Build',
          name: 'Fixed-scope builds',
          meta: 'One module or several, a fixed fee each',
          text: 'The deliverables a hotel needs most, produced with AI and checked by a person who knows hotels.',
          details: [
            { k: 'Choose', v: 'Any module from the Build menu below.' },
            { k: 'Deliver', v: 'Listen, build with AI, check, hand over.' },
            { k: 'Keep', v: 'Every build ends with a handover kit and a working session for the team.' },
          ],
        },
        {
          key: 'stay',
          step: 'Stay',
          name: 'AI Advisory',
          meta: 'Monthly',
          text: 'A monthly working session to keep putting AI to use.',
          details: [
            { k: 'Review', v: 'What is live, and what it is saving.' },
            { k: 'Choose', v: 'The next use case, with the GM or leadership team.' },
            { k: 'Re-run', v: 'Optional quarterly re-runs of audits.' },
          ],
        },
      ],
    },
    menu: {
      title: 'The Build *menu*.',
      intro: 'Pick one module or several. Each is scoped with you and quoted as a fixed fee.',
      gets: 'What you get',
      inputs: 'What I work from',
      keeps: 'What you keep',
      testingNote: 'Being finished in the Lab. Ask what is ready today.',
      liveNote: 'Already in use with clients.',
      modules: [
        {
          key: 'brand-bible',
          name: 'Brand Bible',
          status: 'live',
          short: 'The property’s story, voice and visual rules, written down and ready to use.',
          gets: 'The property’s story, positioning and voice; the language used at every guest touchpoint; visual rules and imagery direction.',
          inputs: 'Interviews, existing materials and guest reviews.',
          keeps: 'A prompt kit for writing on-brand.',
          note: '',
        },
        {
          key: 'sop-library',
          name: 'SOP Library',
          status: '',
          short: 'Every department’s procedures in one consistent format, in the team’s languages.',
          gets: 'Standard operating procedures for each department in one consistent format, in the languages your team works in.',
          inputs: 'Interviews, walkthroughs and existing manuals.',
          keeps: 'The template and prompts to write and update SOPs.',
          note: '',
        },
        {
          key: 'distribution-audit',
          name: 'Distribution Consistency Audit',
          status: 'testing',
          short: 'Every mismatch between your OTAs, website, booking engine and trade pages, and where to fix it.',
          gets: 'Every discrepancy across OTAs, website, booking engine, metasearch and trade or tour-operator pages (room names, descriptions, amenities, outlets, policies), with what to fix and where.',
          inputs: 'Public listings, plus extranet exports where available.',
          keeps: 'A checklist and a workflow to re-run it.',
          note: 'It covers content, not rates. Rate parity is already well served by specialist tools. Content mismatches are not, and they compound every time something changes at the hotel.',
        },
        {
          key: 'guest-sentiment',
          name: 'Guest Sentiment Report',
          status: 'testing',
          short: 'What guests say across platforms, turned into actions per department.',
          gets: 'Review themes, trends and actions per department, across platforms.',
          inputs: 'Public reviews and survey exports.',
          keeps: 'A repeatable quarterly workflow.',
          note: '',
        },
        {
          key: 'search-ai-visibility',
          name: 'Search & AI Visibility Audit',
          status: 'testing',
          short: 'How search engines and AI assistants describe your hotel, and how to correct them.',
          gets: 'How search engines and AI assistants find and describe the hotel, and what to fix so they get it right.',
          inputs: 'Your website, your listings and answers from AI assistants.',
          keeps: 'Monitoring prompts and a checklist.',
          note: '',
        },
        {
          key: 'custom-workflows',
          name: 'Custom workflows',
          status: '',
          short: 'For the jobs no software handles well.',
          gets: 'For example review replies drafted in the hotel’s voice, guest communication templates, management reporting or staff onboarding material.',
          inputs: 'Defined in the workshop.',
          keeps: 'A documented workflow, and training for the team.',
          note: '',
        },
      ],
    },
    delivery: {
      title: 'How every build is *delivered*.',
      steps: [
        { name: 'Listen', text: 'Understand the hotel, its team and the material that already exists.' },
        { name: 'Build with AI', text: 'Draft fast, iterate with the team, refine until it is right.' },
        { name: 'Check', text: 'A person who knows hotels reviews every output before it is delivered.' },
        { name: 'Hand over', text: 'Your team owns the result, the prompts and the workflow.' },
      ],
    },
    work: {
      label: '02 — Already in practice',
      title: 'Brands and websites, built this *way*.',
      items: [
        {
          kind: 'Strategic advisor · 2026',
          name: 'Hotel Association Zanzibar',
          text: 'A revamped logo and digital assets, a full brand guide and a new website.',
          more: 'In progress: the association’s wider digital programme, including HAZ Digital and a member portal.',
        },
        {
          kind: 'Client · Hotel, Lugano',
          name: 'THE VIEW Lugano',
          text: 'Brand, website and operations projects for the hotel, built with the same AI-assisted method.',
          more: '',
        },
        {
          kind: 'Client · Travel agency, Lugano',
          name: 'Francorosso',
          text: 'A new logo, a brand guideline document with visual assets and a fully revamped website.',
          more: '',
        },
      ],
    },
    terms: {
      fee: {
        title: 'Fixed scope, fixed fee',
        items: [
          'Every engagement is scoped in conversation and quoted as a fixed fee. Never hourly.',
          'The scope is agreed in writing before work starts.',
          'The first conversation is unbilled and takes about thirty minutes.',
          'Stay is a monthly retainer.',
        ],
      },
      data: {
        title: 'Your material stays yours',
        items: [
          'Hotel material is used only for the engagement.',
          'Confidential material goes only into tools with business-grade data protection.',
          'Most modules need no guest personal data at all.',
          'Deliverables and workflows belong to the hotel.',
        ],
      },
    },
    cta: {
      title: 'Bring the *question*.',
      body: 'Start with a conversation. If there is a fit, the AI Opportunity Workshop is the first paid step.',
    },
  },

  lab: {
    seo: {
      title: 'The Lab: where ideas get tried · Rosso Consulting',
      description:
        'Where I try what AI makes possible, before I recommend it. The Lab produces proof, services and, now and then, a company.',
    },
    hero: {
      label: 'The Lab',
      title: 'Where ideas get *tried*.',
      standfirst:
        'This is where I test what AI makes possible on real problems, before I recommend it to anyone. It produces proof, services and, now and then, a company.',
      button: 'Read the notes',
    },
    story: {
      quote:
        'I never learned to code, yet I built and launched Astia Web by prompting, testing and iterating until it was right. It taught me more in months than years of reading about it would have.',
      who: 'Marco Rosso',
    },
    path: {
      title: 'From experiment to *company*.',
      stages: [
        {
          key: 'testing',
          stage: 'Experiment',
          verb: 'Try it',
          text: 'A real problem, tested with AI on real material. Shared as a Field Note, whatever the result.',
        },
        {
          key: 'live',
          stage: 'Service',
          verb: 'Offer it',
          text: 'When it works repeatedly, it becomes a Build module in AI in Practice.',
        },
        {
          key: 'venture',
          stage: 'Venture',
          verb: 'Spin it out',
          text: 'When it passes the venture test, it becomes a company with its own brand: a Rosso Consulting company.',
        },
      ],
    },
    now: {
      label: '01 — Current Lab',
      title: 'What exists *today*.',
      filterLabel: 'Filter by status',
      all: 'All',
      legend: {
        testing: 'Being built or trialled on real material.',
        live: 'In use, with clients.',
        venture: 'Operating under its own brand.',
      },
      empty: 'Nothing with this status right now.',
      items: [
        {
          key: 'astia',
          status: 'venture',
          name: 'Astia Web',
          text: 'Websites for hotels and small businesses: brand guide, custom site, every change and every language for CHF 150 a month per site. Built and run with AI, with paying customers.',
          endorsement: 'A Rosso Consulting company',
          link: 'Visit Astia Web',
        },
        {
          key: 'brand-sites',
          status: 'live',
          name: 'AI-built brand guides and websites',
          text: 'The method behind the Hotel Association Zanzibar, THE VIEW Lugano and Francorosso work, now offered as Build modules in AI in Practice.',
          endorsement: '',
          link: 'See AI in Practice',
        },
        {
          key: 'audit-toolkit',
          status: 'testing',
          name: 'AI audit toolkit',
          text: 'Distribution consistency, guest sentiment, and search and AI visibility, being prepared as Build modules.',
          endorsement: '',
          link: '',
        },
      ],
    },
    test: {
      title: 'The venture test. All four must *hold*.',
      items: [
        { name: 'Repeatable need', text: 'The problem recurs across many clients in a similar shape.' },
        { name: 'Productised delivery', text: 'It can be delivered as a standard service, not bespoke work.' },
        { name: 'Working economics', text: 'The numbers work at the scale the market supports.' },
        { name: 'Its own brand serves better', text: 'The market trusts it more under a dedicated name.' },
      ],
    },
    run: {
      title: 'How an experiment *runs*.',
      steps: [
        { name: 'Ask one question', text: 'Write down what the experiment should prove before starting.' },
        { name: 'Use real material', text: 'Test on real hotel content and data, not demos.' },
        { name: 'Time-box it', text: 'Set a deadline, so the effort stays proportional to the question.' },
        { name: 'Decide and share', text: 'Turn it into a service, or close it and keep the lesson. Then write the Field Note.' },
      ],
    },
    cta: {
      title: 'Got a problem worth *trying*?',
      body: 'If you have something that should be tested on real material, I would like to hear about it.',
      secondary: 'Read the notes',
    },
  },

  notes: {
    seo: {
      title: 'Notes: Field Notes and essays by Marco Rosso',
      description:
        'Short notes on what I tried, what worked and what did not, plus longer essays on hotel distribution, direct booking and AI.',
    },
    hero: {
      label: 'Notes',
      title: 'What I tried, what worked and what did *not*.',
      standfirst:
        'Field Notes are short notes from the Lab: one thing tried and what it taught. A new one every two weeks, here and on LinkedIn.',
    },
    langNote: '',
    fieldNotes: {
      title: 'Field Notes',
      noteLabel: 'Field Note',
      empty: 'The first Field Notes are on their way. Follow along on LinkedIn, or subscribe by RSS.',
    },
    essays: {
      title: 'Essays',
      intro: 'Longer pieces on distribution, direct booking and AI in hotels.',
    },
    follow: 'Follow on LinkedIn',
    rss: 'RSS feed',
  },

  article: {
    back: 'All notes',
    related: 'Keep reading',
    essay: 'Essay',
    fieldNote: 'Field Note',
    authorTitle: 'Written by Marco Rosso',
    authorBio: 'Operator, advisor and builder in hospitality technology. I lead digital and automation at Planhotel Hospitality Group, advise hotel technology companies and build with AI in my own lab.',
    progress: 'Reading progress',
  },

  about: {
    seo: {
      title: 'About Marco Rosso · Rosso Consulting',
      description:
        'Marco Rosso is a hospitality operator, hotel technology advisor and builder, based in Lugano, Switzerland.',
    },
    hero: {
      label: 'About',
      title: 'The story, in my own *words*.',
      standfirst:
        'I work on hospitality from three sides. I lead digital and automation at a hotel group, I advise the companies building hotel technology, and I build with AI myself. Rosso Consulting is where those come together.',
      portraitAlt: 'Portrait of Marco Rosso',
    },
    story: [
      'I grew up in hospitality. My grandfather founded Francorosso International and Planhotel Hospitality Group, so hotels were the language at home long before they were my job.',
      'After EHL I went to the other side of the table. I spent nearly a decade selling and scaling hotel technology at Triptease, SiteMinder, Cloudbeds and Canary Technologies, from account executive to leading commercial teams across EMEA and globally.',
      'In 2024 I went back to operating. As Chief Digital Strategy & Business Automation Officer at Planhotel Hospitality Group, I now buy the kind of software I used to sell, and I see every day what hotels actually adopt.',
      'Then AI changed what one person can do. I never learned to code, yet I built and launched Astia Web, a website service for hotels and small businesses, by prompting, testing and iterating until it was right. It taught me more in months than years of reading about it would have.',
      'Rosso Consulting brings these sides together. I advise the founders building hospitality technology, I help hotels put AI to work, and I keep a lab where I try ideas before I recommend them to anyone. If you are thinking about what comes next, I would like to hear about it.',
    ],
    path: {
      label: '01 — The path',
      title: 'From roots to *now*.',
      items: [
        { key: 'roots', stage: 'Roots', title: 'Hospitality family', text: 'Francorosso International and Planhotel, founded by my grandfather.' },
        { key: 'seller', stage: 'Seller', title: 'Nearly a decade in hotel SaaS', text: 'Triptease, SiteMinder, Cloudbeds, Canary Technologies.' },
        { key: 'operator', stage: 'Operator', title: 'Back to running hotels', text: 'Planhotel Hospitality Group, since 2024.' },
        { key: 'builder', stage: 'Builder', title: 'AI as the team', text: 'Astia Web, built without a coding background.' },
        { key: 'now', stage: 'Now', title: 'Rosso Consulting', text: 'Advisory, AI in Practice and the Lab.' },
      ],
    },
    numbers: [
      { value: 4, suffix: '', text: 'hospitality SaaS companies, from account executive to global director' },
      { value: 80, suffix: '+', text: 'people in commercial organisations scaled from single digits' },
      { value: 4, suffix: '', text: 'active advisory roles with hospitality technology companies' },
      { value: 3, suffix: '', text: 'working languages: English, Italian and Spanish' },
    ],
    career: {
      title: 'Career',
      items: [
        { years: '2024–today', org: 'Planhotel Hospitality Group', role: 'Chief Digital Strategy & Business Automation Officer' },
        { years: '2023–2024', org: 'Canary Technologies', role: 'Director of Sales & GTM EMEA' },
        { years: '2020–2023', org: 'Cloudbeds', role: 'Director, Inside Sales & CSM (Global)' },
        { years: '2019–2020', org: 'SiteMinder', role: 'Senior Regional Sales Manager, Spain' },
        { years: '2015–2019', org: 'Triptease', role: 'Account Executive to Head of Sales EMEA' },
      ],
      alsoTitle: 'Also',
      also: [
        'Advisor to Canary Technologies, RoomPriceGenie, LobbyAI and Snapfix',
        'Strategic advisor to the Hotel Association Zanzibar',
        'Founder of Astia Web',
      ],
    },
    education: {
      title: 'Education',
      items: [
        { years: '2024–2025', org: 'Harvard Business School', what: 'Executive Education: Program for Leadership Development' },
        { years: '2011–2015', org: 'EHL Lausanne', what: 'BSc International Hospitality Management' },
        { years: '2010', org: 'Cornell University', what: 'Diploma in Hospitality & Revenue Management' },
      ],
    },
    principles: {
      label: '02 — Principles',
      title: 'How I *work*.',
      items: [
        { name: 'Tried before advised', text: 'I recommend only what I have run, sold, built or tested. When I have not tried something, I say so, and offer to try it.' },
        { name: 'Disclose first', text: 'Where an advisory company’s product may be relevant to a client, I disclose the relationship at the outset.' },
        { name: 'Keep information apart', text: 'Client information never reaches advisory companies, and advisory information never reaches clients.' },
        { name: 'Same criteria for every vendor', text: 'A portfolio company in an evaluation is scored against the same rubric as every other vendor.' },
        { name: 'Fixed scope, fixed fee', text: 'You know the cost before work starts, and scope changes are agreed in writing.' },
        { name: 'A person checks every AI output', text: 'AI drafts. A person who knows hotels reviews everything before it is delivered.' },
        { name: 'You own the result', text: 'Deliverables, prompts and workflows stay with you. Nothing is held back to create dependence.' },
        { name: 'Care with data', text: 'Your material is used only for the engagement, and only in tools with appropriate data protection.' },
        { name: 'Say no when it is not a fit', text: 'A clear no protects the reputation that brings the next yes.' },
        { name: 'Share what I learn', text: 'Field Notes show what I tried and what it taught, so you can see the thinking behind the result.' },
      ],
    },
    bios: {
      title: 'For event organisers and *press*.',
      intro: 'Approved bios in the third person. Pick a length and copy it.',
      copy: 'Copy',
      copied: 'Copied',
      items: [
        { key: 'line', tab: 'One line', text: 'Marco Rosso is a hospitality operator, hotel technology advisor and builder.' },
        {
          key: 'short',
          tab: '30 words',
          text: 'Marco Rosso is Chief Digital Strategy & Business Automation Officer at Planhotel Hospitality Group, an advisor to hospitality technology companies including Canary Technologies and RoomPriceGenie, and the founder of Rosso Consulting.',
        },
        {
          key: 'medium',
          tab: '60 words',
          text: 'Marco Rosso works on hospitality from three sides. He is Chief Digital Strategy & Business Automation Officer at Planhotel Hospitality Group and advises Canary Technologies, RoomPriceGenie, LobbyAI and Snapfix. Before returning to operations in 2024, he spent nearly a decade selling hotel technology at Triptease, SiteMinder, Cloudbeds and Canary. Through Rosso Consulting he advises founders, helps hotels use AI and builds ventures.',
        },
        {
          key: 'long',
          tab: '120 words',
          text: 'Marco Rosso grew up in hospitality: his grandfather founded Francorosso International and Planhotel Hospitality Group. After graduating from EHL Lausanne, he spent nearly a decade selling and scaling hotel technology at Triptease, SiteMinder, Cloudbeds and Canary Technologies, growing commercial organisations from single digits to more than 80 people. In 2024 he returned to the operating side as Chief Digital Strategy & Business Automation Officer at Planhotel Hospitality Group. He advises Canary Technologies, RoomPriceGenie, LobbyAI and Snapfix, is strategic advisor to the Hotel Association Zanzibar, and through Rosso Consulting helps hotels put AI to work. He also founded Astia Web, a website service built and run with AI. He studied at EHL, Cornell and Harvard Business School.',
        },
      ],
    },
  },

  contact: {
    seo: {
      title: 'Start a conversation with Marco Rosso · Rosso Consulting',
      description:
        'Bring the question. The first conversation is unbilled and takes about thirty minutes.',
    },
    hero: {
      label: 'Start a conversation',
      title: 'Bring the *question*.',
      standfirst:
        'The first conversation is unbilled and takes about thirty minutes. Tell me what you are working on. The shape of the work comes later.',
    },
    form: {
      title: 'Write to me',
      name: 'Your name',
      email: 'Email',
      org: 'Company or hotel',
      optional: 'optional',
      role: 'You are',
      rolePlaceholder: 'Choose one',
      roles: [
        'A hotel technology founder or leadership team',
        'A hotel owner, GM or department head',
        'An investor',
        'An event organiser',
        'Something else',
      ],
      message: 'What would you like to talk about?',
      messageHelp: 'A few lines are enough.',
      submit: 'Send',
      sending: 'Sending',
      required: 'Please fill in this field.',
      invalidEmail: 'Please enter a valid email address.',
      successTitle: 'Thank you. Your message is on its way.',
      successBody: 'I read every message myself and will reply by email.',
      error: 'Something went wrong and the message was not sent. Please try again, or write to me directly.',
      privacy: 'I use your details only to reply to you.',
      privacyLink: 'Privacy notice',
      honeypot: 'Leave this field empty',
    },
    direct: {
      title: 'Or write directly',
      email: 'Email',
      linkedin: 'LinkedIn',
      where: 'Where',
      whereValue: 'Lugano, Switzerland. Working across EMEA.',
    },
    next: {
      title: 'What happens *next*.',
      steps: [
        { name: 'Conversation', text: 'I listen first, and say plainly if it is not a fit.' },
        { name: 'Scope note', text: 'One page: the problem, the outcome, what is in and what is out.' },
        { name: 'Proposal', text: 'A fixed fee for the agreed scope.' },
        { name: 'Delivery', text: 'Listen, build, check, hand over.' },
        { name: 'Case note', text: 'With your permission, a short note on what was done.' },
      ],
    },
  },

  privacy: {
    seo: {
      title: 'Privacy notice · Rosso Consulting',
      description: 'How Rosso Consulting handles the personal data you share through this website.',
    },
    title: 'Privacy *notice*.',
    updated: 'Last updated: October 2026',
    sections: [
      {
        h: 'Who is responsible',
        p: 'Marco Rosso, Rosso Consulting, Lugano, Switzerland. For any question about your data, write to marco@rossoconsulting.ch.',
      },
      {
        h: 'What I collect',
        p: 'Only what you send through the contact form: your name, email address, company or hotel if you give one, the option you choose and your message. Like any website host, Netlify also processes technical data such as IP addresses to deliver and protect the site.',
      },
      {
        h: 'Why',
        p: 'To read and answer your message, and to prepare any work we then agree on. Nothing is used for marketing lists or shared for anyone else’s purposes.',
      },
      {
        h: 'Where it is processed',
        p: 'The site and its form are hosted by Netlify, Inc. in the United States, and messages are delivered to my email inbox. Data may therefore be processed outside Switzerland and the EU, with the safeguards those providers offer.',
      },
      {
        h: 'How long it is kept',
        p: 'As long as needed to handle your enquiry and any engagement that follows, then deleted.',
      },
      {
        h: 'Cookies and tracking',
        p: 'This site sets no tracking cookies and runs no analytics or advertising scripts. If you change the light or dark theme, that choice is stored in your own browser only. Fonts are served from this site, not from third parties.',
      },
      {
        h: 'Your rights',
        p: 'Under the Swiss Federal Act on Data Protection and, where it applies, the GDPR, you can ask to see, correct or delete your data, or object to its use. Write to marco@rossoconsulting.ch.',
      },
    ],
  },

  notFound: {
    seo: { title: 'Page not found · Rosso Consulting', description: 'This page does not exist.' },
    label: '404',
    title: 'This page does not *exist*.',
    text: 'It may have moved when the site was rebuilt. These are good places to start:',
  },
};

export default en;
export type Copy = typeof en;
