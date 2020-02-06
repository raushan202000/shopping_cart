
import { Component, OnInit } from '@angular/core';
import { InfoService } from './../info.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public data; 
  public service;
  public count;
  constructor(private myservice:InfoService){}
  ngOnInit() {
    this.service=this.myservice;
    this.data=this.service.getdata();
    //console.log(this.data[0][1]);
  }
  
  //for cart counting and item//
 
  public cartfun(event){
    this.service.cartcounter();
    //console.log(this.service.updatecount);


    // for cart item
    var event1=event;
    //for image
    var x=event1.path[4].firstElementChild.src;
    //for price
    var y=event1.path[4].children[1].lastElementChild.innerText;
    console.log(event);
    //console.log(x);
    //for name
    var z=event1.path[4].children[1].firstElementChild.innerText;
      this.service.cartindex+=1;
      this.count=this.service.cartindex;
    var i=this.count;
    var c=true;
    var p={src:x,price:y,name:z,index:i,condition:c}
     this.service.cartdata.push(p);
     console.log(this.service.cartdata);
     //end of cart item code
     // console.log(event1);
    // console.log(event1.clientX)
    // console.log(event1.path[4])
    
    
    // console.log(y);
    // console.log(z);

  }
  

}
