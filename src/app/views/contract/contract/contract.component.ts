import { ContractsService } from './../../../services/contracts.service';
import { Component, OnInit } from '@angular/core';
import { Paginate } from 'src/app/models';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent implements OnInit {

  paginate: Paginate = new Paginate();
  constructor(private sC: ContractsService,) {

  }

  ngOnInit(): void {
    this.sC.get().subscribe(
      {
        next: (r:any)=>{
          this.paginate = r;
        }
      }
    );
  }

}
