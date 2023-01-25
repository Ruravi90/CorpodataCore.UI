import { ClientService } from './../../services';
import { Component, OnInit } from '@angular/core';
import { Client } from '../../models';
import izitoast from 'izitoast';

@Component({
  templateUrl: 'business-group.component.html'
})
export class BusinessGroupComponent implements OnInit {
  client: Client = {};
  clients: Array<Client> = [];
  constructor(private clientService: ClientService,) {

  }

  ngOnInit(): void {
    this.clientService.get().subscribe(
      {
        next: (r:any)=>{
          this.clients = r;
          console.table(this.clients);
        },
        error: ()=>{
          izitoast.error({
            theme: 'dark',
            title: 'Error en el servicio'
          });
        }
      }
    )
  }
}
