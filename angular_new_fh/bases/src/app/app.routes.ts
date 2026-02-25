import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page';
import { HeroPageComponent } from './pages/hero/hero-page';
import { DragonBallPageComponent } from './pages/dragon-ball/dragon-ball-page';
import { DragonBallSuperPageComponent } from './pages/dragon-ball-super/dragon-ball-super-page';

export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent,
  },
  {
    path: 'hero',
    component: HeroPageComponent,
  },
  {
    path: 'dragon-ball',
    component: DragonBallPageComponent,
  },
  {
    path: 'dragon-ball-super',
    component: DragonBallSuperPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
