import { Injectable } from '@angular/core';
import { Animal } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {
  animals = [new Animal('zebre', 'Equidés'), new Animal('panda roux', 'Ailuridés'), new Animal ('wombat', 'Marsupio')]

  constructor() { }

  getAnimals(){
    return this.animals;
  }
}
