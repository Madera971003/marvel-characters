type Thumbnail = {
  path: string;
  extension: string;
}

type Item = {
  resourceURI: string;
  name: string;
}

type Comics = {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
}

type Series = {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
}

type ItemStory = {
  resourceURI: string;
  name: string;
  type: string;
}

type Stories = {
  available: number;
  collectionURI: string;
  items: ItemStory[];
  returned: number;
}

type Events = {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
}

type Url = {
  type: string;
  url: string;
}

export type CharacterData = {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: Comics;
  series: Series;
  stories: Stories;
  events: Events;
  urls: Url[]
}