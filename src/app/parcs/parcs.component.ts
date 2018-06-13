import { Component, OnInit } from '@angular/core';
import { Parc } from '../_models';
import { ParcsService } from '../_services/parcs.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-parcs',
  templateUrl: './parcs.component.html',
  styleUrls: ['./parcs.component.css']
})
export class ParcsComponent implements OnInit {
  parc = new Parc();
  parcs;
  listParc = [];
  
  constructor(private parcsService: ParcsService, private http: HttpClient) { }

  ngOnInit() {
    this.getAllParc();
    
  }

  addParc(){
    this.parcs.push(this.parc);
    this.parc = new Parc();
  }

  /*getParcById (id:number) : Parc {
    return this.parc.filter(p => p.id === id)[0];
  }*/

  getAllParc() {
    this.parcsService.getAllParc().subscribe(r => this.listParc = r);
  }
}
