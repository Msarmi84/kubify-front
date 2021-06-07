import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Band } from '../../models/band';
import { environment } from 'src/environments/environment';
import { SearcherBand } from '../../models/searcher-band';


@Injectable({
  providedIn: 'root'
})
export class BandsService {

  URL = environment.baseUrl + 'bands';
  constructor(private http: HttpClient) { }

  getBands(): Observable<Band[]> {
    return this.http.get<Band[]>(this.URL)
    .pipe(map(bands => bands.map(band => new Band(band))));
  }

  saveBand(band: FormData): Observable<void> {
    return this.http.post<void>(this.URL, band);
  }

  getBandById(id: string): Observable<Band> {
    return this.http.get<Band>(`${this.URL}/${id}`)
      .pipe(map(band => new Band(band)));
  }

  deleteBand(id: number): Observable<void> {
    return this.http.delete<void>(`${this.URL}/${id}`);
  }

  updateBand(band: FormData, id: number): Observable<Band> {
    return this.http.put<Band>(`${this.URL}/${id}`, band);
  }

  buscarConPost(filtro: SearcherBand): Observable<Band[]> {
    return this.http.post<Band[]>(`${this.URL}/buscar`, filtro).pipe(
      map(x => x.map(band => new Band(band)))
    );
  }


}
