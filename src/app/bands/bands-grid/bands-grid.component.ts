import { Component, Input, OnInit } from '@angular/core';
import { Band } from 'src/app/models/band';
import { SearcherBand } from 'src/app/models/searcher-band';
import { environment } from 'src/environments/environment';
import { BandsService } from './bands.service';


@Component({
  selector: 'app-bands-grid',
  templateUrl: './bands-grid.component.html',
  styleUrls: ['./bands-grid.component.scss']
})
export class BandsGridComponent implements OnInit {

  defaultImg = 'assets/images/img.jpg';
  imageUrl = environment.baseUrl + 'images/';


  @Input() bands: Band[] = [];
  bandsSearch: Band[] = [];

  constructor(private bandsService: BandsService) { }

  ngOnInit(): void {

  }
  searchBand(filtro: SearcherBand): void {
    this.bandsService.buscarConPost(filtro).subscribe(x => {
      this.bands = x;
    });
  }

}
