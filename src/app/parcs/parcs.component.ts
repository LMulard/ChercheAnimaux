import { Component, OnInit } from '@angular/core';
import { Parc } from '../_models';

@Component({
  selector: 'app-parcs',
  templateUrl: './parcs.component.html',
  styleUrls: ['./parcs.component.css']
})
export class ParcsComponent implements OnInit {
  parc = new Parc();
  parcs;
  
  constructor() { }

  ngOnInit() {
  }

  addParc(){
    this.parcs.push(this.parc);
    this.parc = new Parc();
  }

  /*getParcById (id:number) : Parc {
    return this.parc.filter(p => p.id === id)[0];
  }*/

}
