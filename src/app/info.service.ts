import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  constructor() { }
  public updatecount;
  public count=0;
  public cartindex=0;
  public cartcounter(){
   this.count+=1;
   this.updatecount=this.count;
   }
   

   public getdata(){
     return [[{id:1,name:'Redmi K20 Pro (Glacier Blue, 128 GB)  (6 GB RAM)',price:24999,like:0,img:"https://rukminim1.flixcart.com/image/416/416/jxz0brk0/mobile/w/s/r/redmi-k20-pro-na-original-imafgb4ye45dtzvf.jpeg?q=70" },
     {id:2,name:'Redmi Note 8 Pro (Shadow Black, 128 GB)  (6 GB RAM)',price:14990,like:0,img:"https://rukminim1.flixcart.com/image/416/416/k5lcvbk0pkrrdj/mobile-refurbished/9/a/e/redmi-note-8-pro-128-d-m1906g7l-mi-8-original-imafhgsasvw2wseg.jpeg?q=70"},
     {id:3,name:'Redmi Note 7 Pro (Space Black, 64 GB)  (4 GB RAM)',price:10990,like:0,img:"https://rukminim1.flixcart.com/image/416/416/jyyqc280/mobile/x/s/d/mi-redmi-note-7-pro-mzb8433in-original-imafj36gfh9gfr7g.jpeg?q=70"}
    ],
       [{id:4,name:'Samsung Galaxy Note 10 Plus (Aura Black, 256 GB)  (12 GB RAM)',price:79999,like:0,img:"https://rukminim1.flixcart.com/image/416/416/jz1l7rk0/mobile/p/v/8/samsung-galaxy-note-10-plus-sm-n975fzsgins-original-imafj58vd3nxggwr.jpeg?q=70"},
       {id:5,name:'Samsung Galaxy S10 Plus (Ceramic Black, 512 GB)  (8 GB RAM)',price:79900,like:0,img:"https://rukminim1.flixcart.com/image/416/416/jsdj8nk0/mobile/7/n/z/samsung-galaxy-s10-plus-sm-g975fckgins-original-imafdys4d6h8phu6.jpeg?q=70"},
       {id:6,name:'Samsung Galaxy A70s (Prism Crush Black, 128 GB)  (8 GB RAM)',price:25999,like:0,img:"https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/t/z/x/galaxy-a70s-128-d-sm-a707fzwwins-samsung-8-original-imafkx3exprzhgnq.jpeg?q=70"}
      ] ,
      [{id:7,name:'Apple iPhone 11 Pro Max (Space Grey, 512 GB)',price:141900,like:0,img:"https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/c/u/e/iphone-11-pro-512-u-mwcd2hn-a-apple-0-original-imafkg2fhzhzzh5s.jpeg?q=70"},
      {id:8,name:'Apple iPhone XS Max (Gold, 512 GB)',price:117900,like:0,img:"https://rukminim1.flixcart.com/image/416/416/jm9hfgw0/mobile/e/8/s/apple-iphone-xs-max-mt522hn-a-original-imaf97f6vzzxdq4p.jpeg?q=70"},
      {id:9,name:'Apple iPhone XS (Gold, 64 GB)',price:54999,like:0,img:"https://rukminim1.flixcart.com/image/416/416/jm9hfgw0/mobile/x/g/f/apple-iphone-xs-mt9k2hn-a-original-imaf97f6hqebeych.jpeg?q=70"}
     ]  ];
   }
   public cartdata=[];
   public cartdata1=[];
   public getcartdata(){
     return this.cartdata1;
   }

  }
