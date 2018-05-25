import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AnimalsComponent } from './animals/animals.component';
import { AnimalsService } from './_services/animals.service';
import { ParcsService } from './_services/parcs.service';
import { RegionsService } from './_services/regions.service';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [AnimalsService, ParcsService, RegionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
