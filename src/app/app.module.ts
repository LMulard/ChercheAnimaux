import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AnimalsComponent } from './animals/animals.component';
import { AnimalsService } from './_services/animals.service';
import { ParcsService } from './_services/parcs.service';
import { RegionsService } from './_services/regions.service';
import { HeaderComponent } from './header/header.component';
import { AnimalComponent } from './animal/animal.component';
import {RouterModule, Routes} from '@angular/router';
import { SearchAnimalComponent } from './search-animal/search-animal.component';
import { ParcsComponent } from './parcs/parcs.component';
import { ParcComponent } from './parc/parc.component';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { HttpClientModule } from '@angular/common/http';
import { WebComponent } from './web/web.component';


const appRoutes : Routes = [
  {path:'', component: AnimalsComponent}, 
  {path: 'animal/:id', component: AnimalComponent},
  {path: 'parc/:id', component: ParcComponent},
  {path: 'parcs', component: ParcsComponent},
   {path: 'search', component: SearchAnimalComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AnimalsComponent,
    HeaderComponent,
    AnimalComponent,
    SearchAnimalComponent,
    ParcsComponent,
    ParcComponent,
    AnimalDetailsComponent,
    WebComponent,

  ],
  imports: [
    RouterModule.forRoot(appRoutes), BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [AnimalsService, ParcsService, RegionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
