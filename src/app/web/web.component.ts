import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit {

list='';

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:8080/all').subscribe(r=>this.showReturn(r));
  }


showReturn(r){
  this.list = JSON.stringify(r);
  console.log(r);
}
}

