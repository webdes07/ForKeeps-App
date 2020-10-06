import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit { 
 
  buttonClick(isClicked:string) {
    if (isClicked == 'next'){
      document.getElementById('back_btn').classList.remove('hidden');
      document.getElementById('next_btn').classList.remove('w-100');
      var children = document.querySelectorAll('.form_fieldset'); 
      if (children[0].classList.contains('open')){
        children[0].classList.remove('open');
        children[0].classList.add('hidden');
        children[0].nextElementSibling.classList.add('open');
        children[0].nextElementSibling.classList.remove('hidden');
      } 
      else if (children[1].classList.contains('open')){
        children[1].classList.remove('open');
        children[1].classList.add('hidden');
        children[1].nextElementSibling.classList.add('open');
        children[1].nextElementSibling.classList.remove('hidden');
        document.getElementById('register_btn').classList.remove('hidden');
        document.getElementById('next_btn').classList.add('hidden');
      } 

    }
    if (isClicked == 'back'){ 
      var children = document.querySelectorAll('.form_fieldset'); 
      if (children[1].classList.contains('open')){ 
        document.getElementById('back_btn').classList.add('hidden');
        document.getElementById('next_btn').classList.add('w-100');
        children[1].classList.remove('open');
        children[1].classList.add('hidden');
        children[1].previousElementSibling.classList.add('open');
        children[1].previousElementSibling.classList.remove('hidden');
      } 
      else if (children[2].classList.contains('open')){
        children[2].classList.remove('open');
        children[2].classList.add('hidden');
        children[2].previousElementSibling.classList.add('open');
        children[2].previousElementSibling.classList.remove('hidden'); 
        document.getElementById('next_btn').classList.remove('hidden');
        document.getElementById('register_btn').classList.add('hidden');
      } 
    }
    
  } 

  constructor() { }

  ngOnInit(): void {
  }

}
 