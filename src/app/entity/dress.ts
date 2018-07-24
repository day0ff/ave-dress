export class Dress {
  id: number;
  images: string[];
  price: number;
  size: string;
  iformation: string;
  constructor(id: number, images: string[], price: number, size: string, iformation: string) {
    this.id = id;
    this.images = images;
    this.price = price;
    this.size = size;
    this.iformation = iformation;
  }
}
