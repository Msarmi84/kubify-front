export class Song {
  id_song?: number;
  id?: number;
  name: string;

  constructor(item?: any) {
    this.id_song = item?.id_song || null;
    this.id = item?.id || null;
    this.name = item?.name || '';

  }
}
