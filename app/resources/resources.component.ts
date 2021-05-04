import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isShow = false;
  isDevelopment=true;
  isCommunity=false;
  isEducational=false;
 
  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  developmentDisplay() {
   this.isDevelopment= true;
   this.isCommunity=false;
   this.isEducational=false;

    //  this.isDevelopment=!this.isDevelopment;
  //  this.isCommunity=this.isCommunity;
  //  this.isEducational=this.isEducational;
  //  console.log(this.isDevelopment);
  //  console.log(this.isEducational);
  //   console.log(this.isCommunity);
  
  }

  educationalDisplay() {
    
   this.isDevelopment= false;
   this.isCommunity=false;
   this.isEducational=true;
  //   this.isEducational=!this.isEducational;
  //   this.isDevelopment=this.isDevelopment;
  //  this.isCommunity=this.isCommunity;
  //    console.log(this.isDevelopment);
  //  console.log(this.isEducational);
  //   console.log(this.isCommunity);
  }

  communityDisplay() {
    this.isDevelopment= false;
   this.isCommunity=true;
   this.isEducational=false;
  //   this.isCommunity = !this.isCommunity;
  //   this.isEducational=this.isEducational;
  //   this.isDevelopment=this.isDevelopment;
  //    console.log(this.isDevelopment);
  //  console.log(this.isEducational);
  //   console.log(this.isCommunity);
  }

}
