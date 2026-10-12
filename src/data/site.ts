/**
 * Facts that are the same in every language: names, links, contact details.
 * Company names are written exactly as the companies write them.
 */
export const site = {
  name: 'Rosso Consulting',
  url: 'https://rossoconsulting.ch',
  person: {
    fullName: 'Marco Rosso',
    givenName: 'Marco',
    familyName: 'Rosso',
    jobTitle: 'Chief Digital Strategy & Business Automation Officer, Planhotel Hospitality Group; founder, Rosso Consulting',
    alumniOf: ['EHL Lausanne', 'Cornell University', 'Harvard Business School'],
    knowsLanguage: ['en', 'it', 'es'],
  },
  email: 'marco@rossoconsulting.ch',
  linkedin: 'https://www.linkedin.com/in/mprosso/',
  linkedinLabel: 'linkedin.com/in/mprosso',
  locality: 'Lugano',
  region: 'Ticino',
  country: 'CH',
  astiaUrl: 'https://astiaweb.com',
} as const;

/** Advisory portfolio. Order follows the Business Foundation. */
export const portfolio = [
  { id: 'canary', name: 'Canary Technologies', url: 'https://canarytechnologies.com' },
  { id: 'rpg', name: 'RoomPriceGenie', url: 'https://roompricegenie.com' },
  { id: 'lobbyai', name: 'LobbyAI', url: 'https://joinlobby.com' },
  { id: 'snapfix', name: 'Snapfix', url: 'https://snapfix.com' },
] as const;
export type PortfolioId = (typeof portfolio)[number]['id'];

export type LabStatus = 'testing' | 'live' | 'venture';
