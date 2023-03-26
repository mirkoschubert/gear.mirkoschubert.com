import type { ProductType } from "$lib/types"

export default [
  {
    name: 'Vaude Sioux 800 SYN',
    description: 'Sleeping Bag',
    image: '/sleep/vaude-sioux-800.jpg',
    url: 'https://amzn.to/3LSMQnd',
    price: 88.99,
    weight: 1500,
    size: {
      width: 30,
      height: 25
    }
  },
  {
    name: 'Exped Dura 5R LW',
    description: 'Camping Mat',
    image: '/sleep/exped-dura-5r.jpg',
    url: 'https://www.exped.com/de/produkte/schlafmatten/dura-5r',
    price: 180,
    weight: 1045,
    size: {
      width: 15,
      height: 27
    }
  },
  {
    name: 'Flextailgear Tiny Pump 2X',
    description: 'Mat Pump',
    image: '/sleep/flextailgear-tiny-pump.jpg',
    url: 'https://amzn.to/3JOQfkf',
    price: 39.99,
    weight: 187,
  },
  {
    name: 'Forceatt 2P green',
    description: 'Tent',
    image: '/sleep/forceatt-tent.jpg',
    url: 'https://amzn.to/3ZjYFWD',
    price: 78.76,
    weight: 2580,
    size: {
      width: 41,
      height: 14,
    }
  },
  {
    name: 'OneTigris Kompound',
    description: 'Hammock',
    image: '/sleep/onetigris-kompound.jpg',
    url: 'https://amzn.to/3z9I1hE',
    price: 60.99,
    weight: 910,
    size: {
      width: 30,
      height: 20,
    }
  },
  {
    name: 'OneTigris Night Protector armeegrün',
    description: 'Underquilt',
    image: '/sleep/onetigris-night-protector.jpg',
    url: 'https://amzn.to/3z6RI0b',
    price: 65.79,
    weight: 800,
    size: {
      width: 33,
      height: 20,
    }
  },
] as ProductType[]