/**
 * Logos in the strip under the home hero (supplied by Marco, with permission).
 * Files in public/logos/ are single-colour alpha masks made from the originals:
 * background removed, margins trimmed. They are tinted in CSS, so they follow
 * the light and dark themes and never compete with Rosso.
 *
 * Sizes are optically balanced: equal visual area, corrected for how heavy
 * each mark is, rather than equal height, then adjusted by eye (Canary, HAZ
 * up; Lobby, Snapfix down). Width and height are CSS pixels; keep the ratio.
 */
export interface StripLogo {
  id: string;
  name: string;
  src: string;
  width: number;
  height: number;
}

export const stripLogos: StripLogo[] = [
  { id: 'canary', name: 'Canary Technologies', src: '/logos/canary.png', width: 124, height: 24 },
  { id: 'roompricegenie', name: 'RoomPriceGenie', src: '/logos/roompricegenie.png', width: 55, height: 42 },
  { id: 'lobby', name: 'LobbyAI', src: '/logos/lobby.png', width: 87, height: 24 },
  { id: 'snapfix', name: 'Snapfix', src: '/logos/snapfix.png', width: 68, height: 38 },
  { id: 'haz', name: 'Hotel Association Zanzibar', src: '/logos/haz.png', width: 102, height: 36 },
  { id: 'the-view', name: 'THE VIEW Lugano', src: '/logos/the-view.png', width: 83, height: 42 },
  { id: 'francorosso', name: 'Francorosso', src: '/logos/francorosso.png', width: 148, height: 16 },
];

/** Shown as text until a logo file is supplied. */
export const stripTextNames = ['Planhotel Hospitality Group'];
