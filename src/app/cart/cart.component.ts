
import { Component, OnInit } from '@angular/core';
import { InfoService } from './../info.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 public service;
 public data;
 user : any
  constructor(private myservice:InfoService ) { }

  ngOnInit() {
    this.service=this.myservice;
    this.data= this.service.cartdata1;
    this.user = localStorage.getItem('username');
  }
  public condition=true;
 
  public itemremove(event){
    
     var x=event.path[4].firstElementChild.textContent;
     var b=parseInt(x);
     this.data[b-1].condition=false;
  }
    
     
 }
 