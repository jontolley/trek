import { Component, OnInit } from '@angular/core';
import { DataService } from '@app/core';
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

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPackingItems().subscribe(
      data => {
        this.splitItemList(data);
      }
    );
  }

  private splitItemList(itemList: TrekPackingItem[]) {
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
