import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { environment as env } from '@env/environment';

@Component({
  selector: 'trek-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  pageTitle = '404';
  appTitle = env.appName;

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(`${this.pageTitle} | ${this.appTitle}`);
  }
}
