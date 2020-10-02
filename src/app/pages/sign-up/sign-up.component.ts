import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  country = [
    {flag:"../../../assets/flag_icons/india.png", country_name: "India", contact_code: "+91"}
  ];
  date = [

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
 