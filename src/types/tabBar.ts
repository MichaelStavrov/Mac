

import iconMacbook from '../img/tabBar/icon-13macbook.png'
import iconIPhone from '../img/tabBar/icon-iphone.png'
import iconMusic from '../img/tabBar/icon-music.png'
import iconWatch from '../img/tabBar/icon-watch.png'

export enum ProductCategory {
  iPhone = 'iPhone/iPad',
  Macs = 'Macs',
  Music = 'Music',
  Watch = 'Watch'
};

export const arrayProductCategory = [
  {
    name: ProductCategory.iPhone,
    img: iconIPhone
  },
  {
    name: ProductCategory.Macs,
    img: iconMacbook
  },
  {
    name: ProductCategory.Music,
    img: iconMusic
  },
  {
    name: ProductCategory.Watch,
    img: iconWatch
  }
]
