import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public http: Http) { }

  ngOnInit() {
    this.http.get('/api/users').subscribe(
      res => {console.log('res',res);}, 
      err => {console.log('err',err);}
    );
  }

}
