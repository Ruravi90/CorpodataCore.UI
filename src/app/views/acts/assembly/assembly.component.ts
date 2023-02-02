import { DocumentsService } from './../../../services/documents.service';
import { Component, OnInit } from '@angular/core';
import { Paginate } from 'src/app/models';
import {DialogService} from 'primeng/dynamicdialog';

@Component({
  selector: 'app-assembly',
  templateUrl: './assembly.component.html',
  styleUrls: ['./assembly.component.scss'],
  providers: [DialogService]
})
export class AssemblyComponent implements OnInit {
  modalDocument=false;
  paginate: Paginate = new Paginate();
  constructor(public dialogService: DialogService,private sD: DocumentsService,) {

  }

  ngOnInit(): void {
    this.sD.get().subscribe(
      {
        next: (r:any)=>{
          this.paginate = r;
        }
      }
    );
  }

  openModalDocument(){
    this.modalDocument = true;
  }

}
