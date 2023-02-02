import { TrialsService } from './../../../services/trials.service';
import { Component, OnInit } from '@angular/core';
import { Paginate } from 'src/app/models';

@Component({
  selector: 'app-primary',
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.scss']
})
export class PrimaryComponent implements OnInit {

  paginate: Paginate = new Paginate();
  constructor(private sT: TrialsService,) {

  }

  ngOnInit(): void {
    this.sT.get().subscribe(
      {
        next: (r:any)=>{
          this.paginate = r;
        }
      }
    );
  }

}
