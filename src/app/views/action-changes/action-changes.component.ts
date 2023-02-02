import { ActionChangesService } from './../../services';
import { Component, OnInit } from '@angular/core';
import { Paginate } from 'src/app/models';

@Component({
  selector: 'app-action-changes',
  templateUrl: './action-changes.component.html',
  styleUrls: ['./action-changes.component.scss']
})
export class ActionChangesComponent implements OnInit {

  paginate: Paginate = new Paginate();
  constructor(private sAC: ActionChangesService,) {

  }

  ngOnInit(): void {
    this.sAC.get().subscribe(
      {
        next: (r:any)=>{
          this.paginate = r;
        }
      }
    );
  }

}
