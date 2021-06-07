import { Component, OnInit } from '@angular/core';
import { BandsService } from './bands-grid/bands.service';
import { Band } from 'src/app/models/band';
import { Song } from '../models/song';
import { SongService } from '../songs/song.service';


@Component({
  selector: 'app-bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.scss']
})
export class BandsComponent implements OnInit  {

  bands: Band[] = [];


  constructor(private bandsService: BandsService){}

  ngOnInit(): void {
    this.bandsService.getBands().subscribe(response => {
      this.bands = response;
    });


    // this.getBands();
  }
  getBands(): void {
    this.bandsService.getBands().subscribe(res => this.bands = res);
  }

  saveBand(band: FormData): void {
    this.bandsService.saveBand(band).subscribe(() => this.getBands());
  }



}
