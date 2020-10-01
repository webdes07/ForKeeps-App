import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent  { 
  
  myClickFunction() { 
    document.getElementById("hamburdBtn").classList.toggle("open");  
    document.getElementById('mainDiv').classList.toggle("open-menu");
    document.getElementById('mainMenu').classList.toggle("open-menu");
  }; 
 
  active = false;
  toggleClass(){
    if(this.active){
      return 'active';
    } else {
      return '';
    }
  }

}
