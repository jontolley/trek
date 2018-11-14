import { Component, OnInit, Input } from '@angular/core';
import { TrekShortcut } from '@app/shared/models/shortcut';

@Component({
  selector: 'trek-shortcut-square',
  templateUrl: './shortcut-square.component.html',
  styleUrls: ['./shortcut-square.component.scss']
})
export class ShortcutSquareComponent implements OnInit {
  @Input() shortcut: TrekShortcut;
  @Input() isSelected: boolean;

  constructor() {}

  ngOnInit() {}
}
