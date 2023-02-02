import { IndustrialPropertyProcessService } from './../../../services/industrial-property-processes.service';
import { Component, OnInit } from '@angular/core';
import { Paginate } from 'src/app/models';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent implements OnInit {

  paginate: Paginate = new Paginate();
  constructor(private sIPP: IndustrialPropertyProcessService,) {

  }

  ngOnInit(): void {
    this.sIPP.get().subscribe(
      {
        next: (r:any)=>{
          this.paginate = r;
        }
      }
    );
  }

}
