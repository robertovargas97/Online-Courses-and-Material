import { Component, inject, signal } from '@angular/core';
import { GifsList } from '../../components/gifs-list/gifs-list';
import { GifsService } from '../../services/gifs.service';
import type { Gif } from '../../interfaces/git.interface';

@Component({
  selector: 'search-page',
  imports: [GifsList],
  templateUrl: './search-page.html',
})
export default class SearchPage {
  searchGifsService = inject(GifsService);
  gifs = signal<Gif[]>([]);
  searchTerm = signal<string>('');

  onSearch(searchTerm: string) {
    this.searchTerm.set(searchTerm);
    this.searchGifsService.searchGifs(searchTerm).subscribe((gifs) => {
      this.gifs.set(gifs);
    });
    this.resetSearchInput();
  }

  resetSearchInput() {
    this.searchTerm.set('');
  }
}
