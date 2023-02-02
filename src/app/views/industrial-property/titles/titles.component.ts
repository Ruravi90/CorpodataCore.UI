import { IndustrialPropertyTitlesService } from './../../../services/industrial-property-titles.service';
import { Component, OnInit } from '@angular/core';
import { Paginate } from 'src/app/models';

@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.scss']
})
export class TitlesComponent implements OnInit {

  paginate: Paginate = new Paginate();
  constructor(private sIPT: IndustrialPropertyTitlesService,) {

  }

  ngOnInit(): void {
    this.sIPT.get().subscribe(
      {
        next: (r:any)=>{
          this.paginate = r;
        }
      }
    );
  }

}
