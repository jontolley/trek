import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { environment as env } from '@env/environment';

@Component({
  selector: 'trek-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  pageTitle = 'About';
  appTitle = env.appName;

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(`${this.pageTitle} - ${this.appTitle}`);
  }
}
