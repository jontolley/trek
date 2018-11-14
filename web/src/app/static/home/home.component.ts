import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { environment as env } from '@env/environment';

@Component({
  selector: 'trek-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  appTitle = env.appName;

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(`${this.appTitle}`);
  }
}
