import { PartnerService } from './../../services/partner.service';
import { Component, OnInit } from '@angular/core';
import { Paginate } from 'src/app/models';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  paginate: Paginate = new Paginate();
  constructor(private sP: PartnerService,) {

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
