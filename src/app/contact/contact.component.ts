import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  user : any
  constructor() { }

  ngOnInit() {
    this.user = localStorage.getItem('username');
  }

}
