import { Routes } from '@angular/router';
import { gifsRoutes } from './gifs/gifs.routes';

export const routes: Routes = [
  ...gifsRoutes,
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
