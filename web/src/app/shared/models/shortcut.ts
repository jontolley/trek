export class TrekShortcut {
  id: number;
  name: string;
  shortcutType: string;
  image: string;

  constructor(obj: TrekShortcut = {} as TrekShortcut) {
    this.id = obj.id;
    this.name = obj.name;
    this.shortcutType = obj.shortcutType;
    this.image = obj.image;
  }
}
