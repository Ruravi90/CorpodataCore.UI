import { ClientService } from './../../services';
import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate } from '@angular/animations';
import { Client, Paginate } from '../../models';
import izitoast from 'izitoast';

@Component({
  styleUrls:["./business-group.component.scss"],
  templateUrl: 'business-group.component.html',
  animations: [
    trigger('rowExpansionTrigger', [
        state('void', style({
            transform: 'translateX(-10%)',
            opacity: 0
        })),
        state('active', style({
            transform: 'translateX(0)',
            opacity: 1
        })),
        transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
]
})
export class BusinessGroupComponent implements OnInit {

  client: Client = {};
  clients: Paginate = new Paginate();
  constructor(private clientService: ClientService,) {

  }

  ngOnInit(): void {
    this.clientService.get().subscribe(
      {
        next: (r:any)=>{
          this.clients = r;
        }
      }
    );
  }
}
