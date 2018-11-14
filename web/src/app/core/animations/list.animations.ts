import {
  animate,
  query,
  style,
  transition,
  trigger,
  stagger
} from '@angular/animations';

export const ANIMATE_LIST_ITEMS = 'staggered-item';

export const staggerItems = [
  trigger('staggerItems', [
    transition('* => *', [

      query('.' + ANIMATE_LIST_ITEMS, style({ opacity: 0 }), {
        optional: true
      }),

      query(
        '.' + ANIMATE_LIST_ITEMS,
        stagger(80, [
          style({ transform: 'translateY(15%)', opacity: 0 }),
          animate('200ms 500ms ease-in-out', style({ transform: 'translateY(0)', opacity: 1 }))
        ]),
        { optional: true }
      )

    ])
  ])
];
