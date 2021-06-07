import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Song } from '../models/song';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  // http://localhost:3000/products
  URL = environment.baseUrl + 'songs';

  constructor(private http: HttpClient) { }

  getSongs(): Observable<Song[]> {
    return this.http.get<Song[]>(`${this.URL}`).pipe(
      map(x => x.map(song => new Song(song)))
    );
  }

  getSongsByUserId(id: number): Observable<Song[]> {
    return this.http.get<Song[]>(`${this.URL}/allSongs/${id}`).pipe(
      map(x => x.map(song => new Song(song)))
    );
  }


}

