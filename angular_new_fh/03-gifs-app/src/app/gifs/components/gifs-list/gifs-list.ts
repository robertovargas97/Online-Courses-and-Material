import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GifsListItem } from '../gifs-list-item/gifs-list-item';

@Component({
  selector: 'gifs-list',
  imports: [GifsListItem],
  templateUrl: './gifs-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifsList {
  imagesURLs = input.required<string[]>();
}
