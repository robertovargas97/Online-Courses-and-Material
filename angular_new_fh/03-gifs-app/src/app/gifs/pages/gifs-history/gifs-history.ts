import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { GifsList } from '../../components/gifs-list/gifs-list';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-gifs-history',
  imports: [GifsList],
  templateUrl: './gifs-history.html',
})
export default class GifsHistory {
  gifService = inject(GifsService);
  activatedRouteService = inject(ActivatedRoute);

  queryParam = toSignal(
    this.activatedRouteService.params.pipe(map((params) => params['searchQuery'])),
  );

  getGifsFromHistory() {
    return this.gifService.getGifsFromHistory(this.queryParam());
  }
}
