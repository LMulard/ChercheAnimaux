import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParcsService } from '../_services/parcs.service';

@Component({
  selector: 'app-parc',
  templateUrl: './parc.component.html',
  styleUrls: ['./parc.component.css']
})
export class ParcComponent implements OnInit {
  param: number;
  parc;

  constructor(private activatedRoutes: ActivatedRoute, private parcsServices: ParcsService) { }

  ngOnInit() {
    this.activatedRoutes.params.subscribe(p=>this.loadParcs(p['id']))[0];
  }

  loadParcs(id:string){
    this.param = +id;
    this.parc = this.parcsServices.getParcById(this.param);
  }
}
