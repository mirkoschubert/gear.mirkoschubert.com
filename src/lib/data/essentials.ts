import type { ProductType } from "$lib/types"

export default [
  {
    name: 'Muela Rhino Olive',
    description: 'Knife',
    image: '/images/essentials/muela-rhino-olive.jpg',
    url: 'https://amzn.to/40z0hg2',
    price: 69.60,
    weight: 207,
  },
  {
    name: 'Lansky Blademedic',
    description: 'Knife Sharpener',
    image: '/images/essentials/lansky-blade-medic.jpg',
    url: 'https://amzn.to/3lQjGKB',
    price: 19.32,
    weight: 105,
  },
  {
    name: 'Camp Buddy "Bamboo" XXL',
    description: 'Fire Steel',
    image: '/images/essentials/camp-buddy.jpg',
    url: 'https://amzn.to/40iCtxk',
    price: 21.99,
    weight: 200,
  },
  {
    name: 'Brotree 550/9 30m ',
    description: 'Paracord',
    image: '/images/essentials/brotree.jpg',
    url: 'https://amzn.to/40fEhar',
    price: 14.99,
    weight: 250,
  },
  {
    name: 'DD Hammocks Olive',
    description: 'Tarp',
    image: '/images/essentials/dd-tarp.jpg',
    url: 'https://amzn.to/42JDiR8',
    price: 69.99,
    weight: 790,
    size: {
      width: 300,
      height: 300,
    }
  },
  {
    name: 'Nitecore NU43',
    description: 'Head Lamp',
    image: '/images/essentials/nitecore-nu43.jpg',
    url: 'https://amzn.to/3nqyIaE',
    price: 69.99,
    weight: 115,
  },
  {
    name: 'Mardingtop 75L green',
    description: 'Backpack',
    image: '/images/essentials/mardingtop-75.jpg',
    url: 'https://amzn.to/3TMRMM9',
    price: 102.99,
    weight: 2260,
    size: {
      width: 0,
      height: 0,
      depth: 0
    }
  },
  {
    name: 'Nordmut Poles Telescope',
    description: 'Trekking Poles',
    image: '/images/essentials/nordmut.jpg',
    url: 'https://amzn.to/40EflZF',
    price: 39.90,
    weight: 970
  },
  {
    name: 'Hultafors Hultan',
    description: 'Hatchet',
    image: '/images/essentials/hultafors-hachet.jpg',
    url: 'https://amzn.to/3npfjXf',
    price: 99.90,
    weight: 970,
  },
] as ProductType[]