import { Dress } from '../../app/entity/dress';
import { IMAGES } from './images';

export const DRESS: Dress[] = [
  { id: 1, images: [IMAGES[0], IMAGES[1], IMAGES[2]], price: 35, size: '44-45', iformation: 'Рыбный текст' },
  { id: 2, images: [IMAGES[1], IMAGES[0], IMAGES[2]], price: 35, size: '44-45', iformation: 'Рыбный текст' },
  { id: 3, images: [IMAGES[2], IMAGES[0], IMAGES[1]], price: 35, size: '44-45', iformation: 'Рыбный текст' },
  { id: 4, images: [IMAGES[3], IMAGES[4], IMAGES[5]], price: 35, size: '44-45', iformation: 'Рыбный текст' },
  { id: 5, images: [IMAGES[4], IMAGES[3], IMAGES[5]], price: 35, size: '44-45', iformation: 'Рыбный текст' },
  { id: 6, images: [IMAGES[5], IMAGES[3], IMAGES[4]], price: 35, size: '44-45', iformation: 'Рыбный текст' },
  { id: 7, images: [IMAGES[6], IMAGES[7], IMAGES[8]], price: 35, size: '44-45', iformation: 'Рыбный текст' },
  { id: 7, images: [IMAGES[7], IMAGES[6], IMAGES[8]], price: 35, size: '44-45', iformation: 'Рыбный текст' },
  { id: 7, images: [IMAGES[8], IMAGES[7], IMAGES[6]], price: 35, size: '44-45', iformation: 'Рыбный текст' }
];
