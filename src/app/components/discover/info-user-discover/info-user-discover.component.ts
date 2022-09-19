import { Component, Input, OnInit} from '@angular/core';
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-info-user-discover',
  templateUrl: './info-user-discover.component.html',
  styleUrls: ['./info-user-discover.component.scss']
})
export class InfoUserDiscoverComponent implements OnInit {
  @Input() user!: User;
  @Input() isDarkMode?: boolean;

  get colorScheme(): 'light' | 'dark' {
    return this.isDarkMode ? 'dark' : 'light';
  }

  constructor() { }

  ngOnInit(): void {
  }
}
