import { Injectable } from '@angular/core';
import { Parc } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class ParcsService {
  parcs = [new Parc("Zoo de la Barben", "zoo", 83, "/assets/images/iconeZooBarben.jpg",[0,1]), 
  new Parc("Zoo de la Fleche", "zoo", 72, "/assets/images/iconeZooFleche.jpg", [0]),
  new Parc("Parc zoologique de Paris", "zoo", 75, "/assets/images/iconeZooParis.jpg", [2]),
  new Parc("Zoo de la Fleche", "zoo", 72, "/assets/images/iconeZooFleche.jpg",[1]),
];

  constructor() { }

  getParcs(){
    return this.parcs;
  }

  getParcById (id:number) : Parc {
    return this.parcs.filter(p => p.id === id)[0];
  }
}
