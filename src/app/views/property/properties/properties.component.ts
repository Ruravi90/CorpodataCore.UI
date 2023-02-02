import { PropertiesService } from './../../../services/properties.service';
import { Component, OnInit } from '@angular/core';
import { Paginate } from 'src/app/models';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {

  paginate: Paginate = new Paginate();
  constructor(private sP: PropertiesService,) {

  }

  ngOnInit(): void {
    this.sP.get().subscribe(
      {
        next: (r:any)=>{
          this.paginate = r;
        }
      }
    );
  }

}
