import { StatutesService } from './../../../services/statutes.service';
import { Component, OnInit } from '@angular/core';
import { Paginate } from 'src/app/models';

@Component({
  selector: 'app-statutes',
  templateUrl: './statutes.component.html',
  styleUrls: ['./statutes.component.scss']
})
export class TransientStatutesComponent implements OnInit {

  paginate: Paginate = new Paginate();
  constructor(private sP: StatutesService,) {

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
