import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

import { TrekPackingItem } from '@app/shared';

@Component({
  selector: 'trek-packing',
  templateUrl: './packing.component.html',
  styleUrls: ['./packing.component.scss']
})
export class PackingComponent implements OnInit {

  generalItems: TrekPackingItem[] = [];  
  personalItems: TrekPackingItem[] = [];
  prohibitedItems: TrekPackingItem[] = [];

  constructor(
    private route: ActivatedRoute) {
    this.route.data.pipe(take(1))
      .subscribe(data => this.splitItemList(data.packingItems));
  }

  ngOnInit() {}

  private splitItemList(itemList: Array<TrekPackingItem>) {
    itemList.forEach(item => {
      switch(item.neededBy) { 
        case 'all': { 
           this.generalItems.push(item);
           break; 
        }
        case 'personal': { 
          this.personalItems.push(item);
           break; 
        }
        case 'none': { 
          this.prohibitedItems.push(item);
           break; 
        }
        default: { 
           //statements; 
           break; 
        } 
     } 
    });
  }

}
