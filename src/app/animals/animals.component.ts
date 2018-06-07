import { Component, OnInit } from '@angular/core';
import { Animal } from '../_models';
import { AnimalsService } from '../_services/animals.service';


@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {
  animalSelected = null;
  animals;
  animal = new Animal();
  list = [];
  resultat = null;


  constructor(private animalsService: AnimalsService) { }

  ngOnInit() {
    //this.animals = this.animalsService.getAnimals();
    this.getAll();
  }

  /*addAnimal() {
     this.animals.push(this.animal);
     this.animal = new Animal();
   }
 
   getAnimalById(id: number): Animal {
     return this.animals.filter(a => a.id === id)[0];
   }
 
   select(a: Animal) {
     if (this.animalSelected && this.animalSelected.id === a.id) {
       this.animalSelected = null;
     }else {
       this.animalSelected = a;
     }
   }*/

  getAll() {
    this.animalsService.getAll().subscribe(r => this.list = r);


  }

}

