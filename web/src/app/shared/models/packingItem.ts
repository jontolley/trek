export class TrekPackingItem {
  id: number;
  name: string;
  neededBy: string;

  constructor(obj: TrekPackingItem = {} as TrekPackingItem) {
    this.id = obj.id;
    this.name = obj.name;
    this.neededBy = obj.neededBy;
  }
}
