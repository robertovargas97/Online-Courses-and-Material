import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GifsService } from '../../services/gifs.service';

interface MenuOption {
  icon: string;
  label: string;
  route: string;
  subLabel: string;
}
@Component({
  selector: 'side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuOptions {
  gifsService = inject(GifsService);
  searchHistoryKeys = computed(() => Object.keys(this.gifsService.searchHistory()));

  menuOptions: MenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      route: 'trending',
      subLabel: 'Popular Gifs',
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Search',
      route: 'search',
      subLabel: 'Search Gifs',
    },
  ];
}
