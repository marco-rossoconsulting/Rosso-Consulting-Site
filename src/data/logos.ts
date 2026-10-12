/**
 * Logos in the strip under the home hero (supplied by Marco, with permission).
 * Files in public/logos/ are single-colour alpha masks (WebP, 3x display size) made from the originals:
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
  { id: 'canary', name: 'Canary Technologies', src: '/logos/canary.webp', width: 124, height: 24 },
  { id: 'roompricegenie', name: 'RoomPriceGenie', src: '/logos/roompricegenie.webp', width: 55, height: 42 },
  { id: 'lobby', name: 'LobbyAI', src: '/logos/lobby.webp', width: 87, height: 24 },
  { id: 'snapfix', name: 'Snapfix', src: '/logos/snapfix.webp', width: 68, height: 38 },
  { id: 'planhotel', name: 'Planhotel Hospitality Group', src: '/logos/planhotel.webp', width: 153, height: 22 },
  { id: 'haz', name: 'Hotel Association Zanzibar', src: '/logos/haz.webp', width: 102, height: 36 },
  { id: 'the-view', name: 'THE VIEW Lugano', src: '/logos/the-view.webp', width: 83, height: 42 },
  { id: 'francorosso', name: 'Francorosso', src: '/logos/francorosso.webp', width: 148, height: 16 },
];

/** Names shown as text until a logo file is supplied (none at the moment). */
export const stripTextNames: string[] = [];
