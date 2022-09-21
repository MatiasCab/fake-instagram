import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-uploadbutton',
  templateUrl: './navbar-uploadbutton.component.html',
  styleUrls: ['./navbar-uploadbutton.component.scss']
})
export class NavbarUploadbuttonComponent implements OnInit {

  @Input() text: string | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

}
