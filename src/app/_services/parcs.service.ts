import { Injectable } from '@angular/core';
import { Parc } from '../_models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParcsService {
  /*parcs = [new Parc("Zoo de la Barben", "zoo", 83, "/assets/images/iconeZooBarben.jpg",[0,1]), 
  new Parc("Zoo de la Fleche", "zoo", 72, "/assets/images/iconeZooFleche.jpg", [0]),
  new Parc("Parc zoologique de Paris", "zoo", 75, "/assets/images/iconeZooParis.jpg", [2]),
  new Parc("Zoo de la Fleche", "zoo", 72, "/assets/images/iconeZooFleche.jpg",[1]),
];*/

url = 'http://localhost:8080/parc';

  constructor(private http:HttpClient) { }

 /* getParcs(){
    return this.parcs;
  }

  getParcById (id:number) : Parc {
    return this.parcs.filter(p => p.id === id)[0];
  }*/

  getAllParc(){
    return this.http.get<Parc[]>(this.url+"/all");
  }

  getParcById(id:number){
    return this.http.get<Parc>(this.url + "/get/" + id);
  }

}
