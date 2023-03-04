import { Route } from '@angular/router';
import { CounterComponent } from './counter';
import { CounterRefComponent } from './counter-ref';

export const ROUTES: Route[] = [
  {
    path: '',
    component: CounterComponent,
  },
  {
    path: 'ref',
    component: CounterRefComponent,
  },
];
