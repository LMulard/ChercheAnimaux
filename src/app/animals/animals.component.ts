import { Component, OnInit } from '@angular/core';
import { Animal } from '../_models';
import { AnimalsService } from '../_services/animals.service';


@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {
  animals;
  animal = new Animal();


  constructor(private animalsService : AnimalsService) { }

  ngOnInit() {
    this.animals = this.animalsService.getAnimals();
  }
  
  addAnimal(){
    this.animals.push(this.animal);
    this.animal = new Animal();
  }
}
