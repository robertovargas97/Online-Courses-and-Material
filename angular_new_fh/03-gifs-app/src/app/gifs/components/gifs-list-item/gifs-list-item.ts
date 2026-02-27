import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Gif } from '../../interfaces/git.interface';

@Component({
  selector: 'gifs-list-item',
  imports: [],
  templateUrl: './gifs-list-item.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifsListItem {
  gif = input.required<Gif>();
}
