export class Band {
  id?: number;
  name: string;
  img: string;
  img1: string;
  img2: string;
  description: string;

  constructor(item?: any) {
    this.id = item?.id || null;
    this.name = item?.name || '';
    this.img = item?.img || null;
    this.img1 = item?.img1 || null;
    this.img2 = item?.img2 || null;
    this.description = item?.description || '';

  }
}
