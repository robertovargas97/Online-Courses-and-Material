import { GiphyItem } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/git.interface';

export class GifMapper {
  static mapGiphyItemToGif(giphyItem: GiphyItem): Gif {
    return {
      id: giphyItem.id,
      url: giphyItem.images.original.url,
      title: giphyItem.title,
    };
  }

  static mapGiphyItemsToGifs(giphyItems: GiphyItem[]): Gif[] {
    return giphyItems.map(GifMapper.mapGiphyItemToGif);
  }
}
