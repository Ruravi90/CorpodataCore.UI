import { TrialsService } from './../../../services/trials.service';
import { Component, OnInit } from '@angular/core';
import { Paginate } from 'src/app/models';

@Component({
  selector: 'app-secundary',
  templateUrl: './secundary.component.html',
  styleUrls: ['./secundary.component.scss']
})
export class SecundaryComponent implements OnInit {

  paginate: Paginate = new Paginate();
  constructor(private sP: TrialsService,) {

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
