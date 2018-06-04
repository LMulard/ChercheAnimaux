import { Injectable } from '@angular/core';
import { Animal } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {
  animals = [new Animal('zebre', 'Equidés', '/assets/images/iconeZebre.jpg', "herbivore", "Afrique", 28), 
  new Animal('panda roux', 'Ailuridés', '/assets/images/iconePandaRoux.jpg', "omnivore", "Chine", 15),
  new Animal ('lion', 'Felides','/assets/images/iconeLion.jpg', "carnivore", "Afrique Subsaharienne", 12),
  new Animal('wombat', 'Marsupio', '/assets/images/iconeWombat.jpg', "herbivore", "Australie", 15),
  new Animal('ours blanc', 'Ursidae', '/assets/images/iconeOursBlanc.jpg', "omnivore", "region Arctique", 30),];

  constructor() { }

  getAnimals(){
    return this.animals;
  }

  getAnimalById (id:number) : Animal {
    return this.animals.filter(a => a.id === id)[0];
  }
}
