import { PropertyProjectsService } from './../../../services/property-projects.service';
import { Component, OnInit } from '@angular/core';
import { Paginate } from 'src/app/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  paginate: Paginate = new Paginate();
  constructor(private sPP: PropertyProjectsService,) {

  }

  ngOnInit(): void {
    this.sPP.get().subscribe(
      {
        next: (r:any)=>{
          this.paginate = r;
        }
      }
    );
  }

}
