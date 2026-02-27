import { Component, computed, inject, signal } from '@angular/core';
import { GifsList } from '../../components/gifs-list/gifs-list';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'trending-page',
  imports: [GifsList],
  templateUrl: './trending-page.html',
})
export default class TrendingPage {
  trendingGifsService = inject(GifsService);

  title = 'Trending Gifs';
}
