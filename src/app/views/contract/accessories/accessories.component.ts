import { AccessoriesContractsService } from './../../../services/accessories-contracts.service';
import { Component, OnInit } from '@angular/core';
import { Paginate } from 'src/app/models';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.scss']
})
export class AccessoriesComponent implements OnInit {

  paginate: Paginate = new Paginate();
  constructor(private sAC: AccessoriesContractsService,) {

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
