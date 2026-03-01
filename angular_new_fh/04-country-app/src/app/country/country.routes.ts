import { Routes } from '@angular/router';
import { ByCapitalPage } from './pages/ByCapitalPage/ByCapitalPage';
import { CountryLayout } from './layouts/country-layout/country-layout';

export const countryAppRoutes: Routes = [
  {
    path: '',
    component: CountryLayout,
    children: [
      {
        path: 'by-capital',
        component: ByCapitalPage,
      },
      {
        path: '**',
        redirectTo: 'by-capital',
      },
    ],
  },
];

export default countryAppRoutes;
