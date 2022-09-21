import { User } from './../../interfaces/User';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-icon',
  templateUrl: './user-icon.component.html',
  styleUrls: ['./user-icon.component.scss']
})
export class UserIconComponent implements OnInit {
  @Input() user!: User;
  @Input() height?: string;
  @Input() width?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
