import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Band } from 'src/app/models/band';
import { Song } from 'src/app/models/song';
import { InfoComponent } from 'src/app/shared/UI/info/info.component';
import { SongService } from 'src/app/songs/song.service';
import { environment } from 'src/environments/environment';
import { BandsFormComponent } from '../bands-form/bands-form.component';
import { BandsService } from '../bands-grid/bands.service';

@Component({
  selector: 'app-band-single',
  templateUrl: './band-single.component.html',
  styleUrls: ['./band-single.component.scss']
})
export class BandSingleComponent implements OnInit {

  band: Band;
  imageUrl = environment.baseUrl + 'images/';
  defaultImage = 'assets/images/img.jpg';
  isLoggedIn = false;
  disableClose: boolean | undefined;
  songs: Song[];
  id: number;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bandsService: BandsService,
    private dialog: MatDialog,
    private songService: SongService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.getBand(params.id));
    // this.route.params.subscribe(params => this.getSongs(params.id));

  }

  getBand(id: string): void {
    this.bandsService.getBandById(id).subscribe(band => this.band = band);
  }

  deleteBand(): void {
    const dialogRef = this.dialog.open(InfoComponent, {
      width: '300px',
      height: '200px',
      data: 'Estas seguro.'
     });
    dialogRef.afterClosed().subscribe(isConfirmed => {
      if (!isConfirmed) {
        return;
      }

      this.bandsService.deleteBand(this.band.id).subscribe(res => {
        this.router.navigateByUrl('/bands');
      });
    });
  }

  updateBand(): void {
    const dialogRef = this.dialog.open(BandsFormComponent, {
      data: this.band,
      width: '80%'
    });

    dialogRef.afterClosed().subscribe(band => {
      this.bandsService.updateBand(band, this.band.id)
        .subscribe(updatedBand => this.band = updatedBand);
    });
  }
  // getSongs(id: number): void {
  //   this.songService.getSongsByUserId(id).subscribe((x) => {
  //     this.songs = x;
  //     for(let i=0; i<this.songs.length; i++) {
  //       this.songs.push(this.songs[i]);
  //     }
  //   });

  // }






}
