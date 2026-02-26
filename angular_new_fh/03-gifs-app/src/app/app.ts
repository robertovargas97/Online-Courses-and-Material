import { Component, signal } from '@angular/core';
import DashboardPage from './gifs/pages/dashboard-page/dashboard-page';

@Component({
  selector: 'app-root',
  imports: [DashboardPage],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('gifs-app');
}
