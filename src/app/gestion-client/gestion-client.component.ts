import { Observable } from 'rxjs/internal/Observable';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Client } from '../models/client';

@Component({
  selector: 'app-gestion-client',
  templateUrl: './gestion-client.component.html',
  styleUrls: ['./gestion-client.component.scss']
})
export class GestionClientComponent implements OnInit {
  clients !: Client[];
  constructor(private ser$:AppService) { }

  ngOnInit(): void {
    this.ser$.getAllClients().subscribe(clients =>{

      this.clients=clients
    console.log("clients : ",this.clients);
    }
    );

  }

}
