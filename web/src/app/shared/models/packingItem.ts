export class TrekPackingItem {
  id: number;
  name: string;
  neededBy: string;
  isRequired: boolean;
  sortOrder: number;

  constructor(obj: TrekPackingItem = {} as TrekPackingItem) {
    this.id = obj.id;
    this.name = obj.name;
    this.neededBy = obj.neededBy;
    this.isRequired = obj.isRequired;
    this.sortOrder = obj.sortOrder;
  }
}
