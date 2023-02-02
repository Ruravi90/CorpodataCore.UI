import { Component, OnInit } from '@angular/core';
import { Paginate } from 'src/app/models';
import { PowerOrgansService } from 'src/app/services';

@Component({
  selector: 'app-powers',
  templateUrl: './powers.component.html',
  styleUrls: ['./powers.component.scss']
})
export class TransientPowersComponent implements OnInit {

  paginate: Paginate = new Paginate();
  constructor(private sPO: PowerOrgansService,) {

  }

  ngOnInit(): void {
    this.sPO.get().subscribe(
      {
        next: (r:any)=>{
          this.paginate = r;
        }
      }
    );
  }

}
