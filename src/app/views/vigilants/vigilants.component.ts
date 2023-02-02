import { VigilantsService } from './../../services/vigilants.service';
import { Component, OnInit } from '@angular/core';
import { Paginate } from 'src/app/models';

@Component({
  selector: 'app-vigilants',
  templateUrl: './vigilants.component.html',
  styleUrls: ['./vigilants.component.scss']
})
export class VigilantsComponent implements OnInit {

  paginate: Paginate = new Paginate();
  constructor(private sV: VigilantsService,) {

  }

  ngOnInit(): void {
    this.sV.get().subscribe(
      {
        next: (r:any)=>{
          this.paginate = r;
        }
      }
    );
  }

}
