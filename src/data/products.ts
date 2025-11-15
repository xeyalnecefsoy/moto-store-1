export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  category: string;
  description: string;
  specs: string[];
  image: string;
  type: 'Motorcycle' | 'Moped' | 'Scooter';
};

export const products: Product[] = [
  {
    id: "1",
    slug: "yamaha-mt-07",
    name: "Yamaha MT-07",
    price: 7699,
    category: "Naked",
    description:
      "Agile, torquey twin-cylinder with a lightweight chassis—perfect for city and weekend rides.",
    specs: ["689cc parallel twin", "184 kg wet", "ABS brakes"],
    image:
      "https://turbo.azstatic.com/uploads/f460x343/2025%2F08%2F05%2F15%2F23%2F21%2F5967c6b3-ebbd-40e2-8901-edf1f2df9c44%2F4513_SdFmiiX51JZHxZnCDO0xMg.jpg",
    type: 'Motorcycle',
  },
  {
    id: "2",
    slug: "kawasaki-ninja-650",
    name: "Kawasaki Ninja 650",
    price: 7899,
    category: "Sport",
    description:
      "Comfortable sport machine balancing daily usability with weekend fun.",
    specs: ["649cc parallel twin", "ABS", "Comfortable ergonomics"],
    image:
      "https://cdn.bikedekho.com/processedimages/kawasaki/2020-ninja-650/source/2020-ninja-650685528015cb20.jpg?imwidth=412&impolicy=resize",
    type: 'Motorcycle',
  },
  {
    id: "3",
    slug: "bmw-r1250gs",
    name: "BMW R 1250 GS",
    price: 17495,
    category: "Adventure",
    description:
      "Iconic adventure bike with a boxer engine and advanced electronics.",
    specs: ["1254cc boxer", "Dynamic ESA", "Ride modes"],
    image:
      "https://www.lonerider-motorcycle.com/cdn/shop/articles/2021-bmw-r-1250-gs-lone-rider-blog-4_1600x.jpg?v=1606157695",
    type: 'Motorcycle',
  },
  {
    id: "4",
    slug: "ducati-scrambler-icon",
    name: "Ducati Scrambler Icon",
    price: 9395,
    category: "Scrambler",
    description: "Retro styling meets modern tech with playful handling.",
    specs: ["803cc L-twin", "LED lighting", "Cornering ABS"],
    image: "https://imgd.aeplcdn.com/1056x594/n/labttgb_1859252.jpg?q=80",
    type: 'Motorcycle',
  },
  {
    id: "5",
    slug: "honda-cbr600rr",
    name: "Honda CBR600RR",
    price: 11999,
    category: "Supersport",
    description: "Track-bred supersport with razor-sharp handling.",
    specs: ["599cc inline-4", "High-revving", "Track-focused geometry"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/2006HondaCBR600RR-001.jpg/1100px-2006HondaCBR600RR-001.jpg",
    type: 'Motorcycle',
  },
  {
    id: "6",
    slug: "royal-enfield-classic-350",
    name: "Royal Enfield Classic 350",
    price: 4599,
    category: "Classic",
    description: "Timeless design with smooth single-cylinder thump.",
    specs: ["349cc single", "Relaxed ergonomics", "Iconic style"],
    image:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/183389/classic-350-right-front-three-quarter-2.jpeg?isig=0&q=80",
    type: 'Motorcycle',
  },
];
