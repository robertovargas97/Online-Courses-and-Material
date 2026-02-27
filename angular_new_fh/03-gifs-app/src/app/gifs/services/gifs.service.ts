import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import type { Gif } from '../interfaces/git.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class GifsService {
  private readonly httpClient = inject(HttpClient);
  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal<boolean>(true);
  searchHistory = signal<Record<string, Gif[]>>(
    JSON.parse(localStorage.getItem('searchHistory') || '{}'),
  );
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs() {
    const url = `${environment.giphyBaseUrl}/trending`;
    const requestParams = {
      api_key: environment.gifsApiKey,
      limit: 20,
    };

    this.httpClient.get<GiphyResponse>(url, { params: requestParams }).subscribe({
      next: (response) => {
        const gifs = GifMapper.mapGiphyItemsToGifs(response.data);
        this.trendingGifs.set(gifs);
        this.trendingGifsLoading.set(false);
      },
    });
  }

  searchGifs(searchTerm: string) {
    const url = `${environment.giphyBaseUrl}/search`;
    const requestParams = {
      api_key: environment.gifsApiKey,
      q: searchTerm,
      limit: 20,
    };

    return this.httpClient.get<GiphyResponse>(url, { params: requestParams }).pipe(
      map(({ data }) => data),
      map((data) => GifMapper.mapGiphyItemsToGifs(data)),
      tap((gifs) => {
        this.searchHistory.update((history) => ({
          ...history,
          [searchTerm]: gifs,
        }));
        localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory()));
      }),
    );
  }

  getGifsFromHistory(searchTerm: string) {
    return this.searchHistory()[searchTerm] ?? [];
  }
}
