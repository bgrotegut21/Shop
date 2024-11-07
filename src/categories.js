import mensShirtImage from './assets/men-shirt.png';
import womenShirtImage from './assets/womenshirt.png';
import dragonJewleryImage from './assets/dragonjewlery.png';
import ssdImage from './assets/ssd.png';

const categories = [
  {
    title: 'Home',
    param: '/',
    id: 0,
  },
  {
    title: "Men's Clothing",
    src: mensShirtImage,
    alt: 'a shirt of a man',
    param: "men's clothing",
    id: 1,
  },
  {
    title: "Women's Clothing",
    src: womenShirtImage,
    alt: 'a shirt of a woman',
    param: "women's clothing",
    id: 2,
  },
  {
    title: 'Electronics',
    src: ssdImage,
    alt: 'solid state drive',
    param: 'electronics',
    id: 3,
  },
  {
    title: 'Jewelery',
    src: dragonJewleryImage,
    alt: 'a dragon bracelet',
    param: 'jewelery',
    id: 4,
  },
];

export { categories };
