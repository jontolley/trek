import { Component, OnInit } from '@angular/core';

import { environment as env } from '@env/environment';

@Component({
  selector: 'trek-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  isProd = env.production;
  envName = env.envName;
  appName = env.appName;
  version = env.versions.app;
  year = new Date().getFullYear();

  constructor() {}

  ngOnInit() {}
}
