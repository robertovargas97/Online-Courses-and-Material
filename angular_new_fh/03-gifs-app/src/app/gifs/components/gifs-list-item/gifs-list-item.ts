import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'gifs-list-item',
  imports: [],
  templateUrl: './gifs-list-item.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifsListItem {
  imageURL = input.required<string>();
}
