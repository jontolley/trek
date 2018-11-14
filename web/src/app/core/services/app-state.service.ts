import { Injectable } from '@angular/core';

import { TrekItem } from '@app/shared';

@Injectable()
export class AppStateService {
  items: Array<TrekItem> = [];

  constructor() {
    this.items = [
      {
        id: 1,
        name: 'iPad',
        description: 'Cool iPad'
      }
    ];
  }
}
