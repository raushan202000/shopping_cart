import { Component } from '@angular/core';
import { InfoService } from './info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-kart';
  
  public service;
  constructor(private myinfo:InfoService) { }

  ngOnInit() {
    this.service=this.myinfo;
  }

  public cartupdate(){
    this.service.cartdata1=this.service.cartdata;
    console.log(this.service.cartdata1);
  }
  

}
