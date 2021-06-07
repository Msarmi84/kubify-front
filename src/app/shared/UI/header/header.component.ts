import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LocalStorageService } from 'src/app/services/local-storage.service';
// import { BandsService } from 'src/app/bands/bands.service';
// import { SearcherBand } from '../../../models/searcher-band';
// import { Band } from '../../../models/band';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;
  isLoggedSub: Subscription;
  constructor(private lss: LocalStorageService) { }

  ngOnInit(): void {
    this.isLoggedSub = this.lss.isLoggedIn.subscribe(loggedIn => this.isLoggedIn = loggedIn);
  }

  logout(): void {
    this.lss.removeUserToken();
  }

  ngOnDestroy(): void {
    this.isLoggedSub.unsubscribe();
  }
  // searchBand(filtro: SearcherBand): void {
  //   this.bandsService.buscarConPost(filtro).subscribe(x => {
  //     this.bands = x;
  //   })
  // }


}
