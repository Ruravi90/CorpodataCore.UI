import { CompanyPowersService } from './../../services/company-powers.service';
import { Component, OnInit } from '@angular/core';
import { Paginate } from 'src/app/models';

@Component({
  selector: 'app-company-powers',
  templateUrl: './company-powers.component.html',
  styleUrls: ['./company-powers.component.scss']
})
export class CompanyPowersComponent implements OnInit {

  paginate: Paginate = new Paginate();
  constructor(private sCP: CompanyPowersService,) {

  }

  ngOnInit(): void {
    this.sCP.get().subscribe(
      {
        next: (r:any)=>{
          this.paginate = r;
        }
      }
    );
  }

}
