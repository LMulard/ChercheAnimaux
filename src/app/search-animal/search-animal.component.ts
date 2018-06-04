import { Component, OnInit } from '@angular/core';
import { AnimalsService } from '../_services/animals.service';

@Component({
  selector: 'app-search-animal',
  templateUrl: './search-animal.component.html',
  styleUrls: ['./search-animal.component.css']
})
export class SearchAnimalComponent implements OnInit {
  wordsToSearch : string;
  animals;
  resultList = [];

  constructor(private animalsService : AnimalsService) { }

  ngOnInit() {
    this.animals = this.animalsService.getAnimals();
  }

  search(){
    if (this.wordsToSearch === ""){
      this.resultList = null;
    }else {
      this.resultList = this.animals.filter(e=>e.espece.toUpperCase().indexOf(this.wordsToSearch.toUpperCase()) !== -1);
    }
    
  }

}
