import { Component, OnInit } from '@angular/core';
import { Song } from '../models/song';
import { SongService } from './song.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit {

  songs: Song[] = [];

  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.songService.getSongs().subscribe(x => {
      this.songs = x;
      console.log(this.songs);
    });
  }

}
