import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BandsService } from 'src/app/bands/bands-grid/bands.service';
import { SearcherBand } from 'src/app/models/searcher-band';


@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {

  @Output() filtrar = new EventEmitter<SearcherBand>();
  filterForm: FormGroup;


  constructor(fb: FormBuilder, private service: BandsService) {
    this.filterForm = fb.group({
      name: [''],
    });
  }

  ngOnInit(): void {
  }

  search(): void {
    this.filtrar.emit(this.filterForm.value);
    this.filterForm.reset();
  }


}
