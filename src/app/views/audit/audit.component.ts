import { AuditsService } from './../../services/audits.service';
import { Component, OnInit } from '@angular/core';
import { Paginate } from 'src/app/models';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss']
})
export class AuditComponent implements OnInit {

  paginate: Paginate = new Paginate();
  constructor(private sA: AuditsService,) {

  }

  ngOnInit(): void {
    this.sA.get().subscribe(
      {
        next: (r:any)=>{
          this.paginate = r;
        }
      }
    );
  }

}
