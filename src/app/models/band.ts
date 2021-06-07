export class Band {
  id?: number;
  name: string;
  img: string;
  description: string;

  constructor(item?: any) {
    this.id = item?.id || null;
    this.name = item?.name || '';
    this.img = item?.img || null;
    this.description = item?.description || '';

  }
}
