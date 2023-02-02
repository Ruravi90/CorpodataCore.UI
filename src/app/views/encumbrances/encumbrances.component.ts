import { EncumbrancesService } from './../../services/encumbrances.service';
import { Component, OnInit } from '@angular/core';
import { Paginate } from 'src/app/models';

@Component({
  selector: 'app-encumbrances',
  templateUrl: './encumbrances.component.html',
  styleUrls: ['./encumbrances.component.scss']
})
export class EncumbrancesComponent implements OnInit {

  paginate: Paginate = new Paginate();
  constructor(private sE: EncumbrancesService,) {

  }

  ngOnInit(): void {
    this.sE.get().subscribe(
      {
        next: (r:any)=>{
          this.paginate = r;
        }
      }
    );
  }

}
