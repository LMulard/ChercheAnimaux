import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalsService } from '../_services/animals.service';
import { Parc } from '../_models';
import { ParcsService } from '../_services/parcs.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {
  param: number;
  animal;
  parc;
  parcs;
  listParc = [];

  constructor(private activatedRoute: ActivatedRoute, private animalsService: AnimalsService, private parcsService: ParcsService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(p => this.loadAnimal(p['id']));
    this.getAllParc();
  
  }

  loadAnimal(id: number) {
    this.param = + id; //si la string id (p['id']) est un nombre, on le convertit en number
    //this.animal = this.animalsService.getAnimalById(this.param);
   this.parcsService.getParcById(id).subscribe(p =>  p.animals.indexOf(this.param) != -1 );
  }

  getAllParc() {
    this.parcsService.getAllParc().subscribe(r => this.listParc = r);
  }

  getParcById(id:number){
    console.log("hello");
    return this.parcsService.getParcById(id).subscribe(r=>console.log(r));
  }


}
