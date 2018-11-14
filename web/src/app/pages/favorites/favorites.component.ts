import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { take } from 'rxjs/operators';

import { environment as env } from '@env/environment';
import { DataService, ErrorService } from '@app/core';
import { TrekShortcut } from '@app/shared';
import { ANIMATE_LIST_ITEMS, staggerItems } from '@app/core';

@Component({
  selector: 'trek-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  animations: [staggerItems]
})
export class FavoritesComponent implements OnInit {
  appTitle = env.appName;
  busy = true;
  animateOnEnter = ANIMATE_LIST_ITEMS;

  shortcuts: Array<TrekShortcut> = [];
  selectedItems: number[] = [];

  constructor(
    private titleService: Title,
    private dataService: DataService,
    private errorService: ErrorService
  ) {}

  ngOnInit() {
    this.titleService.setTitle(`${this.appTitle}`);

    this.dataService
      .getShortcuts()
      .pipe(take(1))
      .subscribe(
        data => {
          this.shortcuts = [...data];
        },
        error => {
          this.errorService.broadcastError(error);
          this.busy = false;
        },
        () => {
          setTimeout(() => {
            this.busy = false;
          }, 500);
        }
      );
  }

  isSelected(id: number) {
    return this.selectedItems.includes(id);
  }

  toggleSelection(id: number) {
    const index = this.selectedItems.indexOf(id);

    if (index < 0) {
      this.selectedItems = [...this.selectedItems, id];
      return;
    }

    const temp = [...this.selectedItems];
    temp.splice(index, 1);
    this.selectedItems = [...temp];
  }
}
