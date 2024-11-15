export const PRODUCTS_LIST = [
  {
    brand: "Too Faced",
    name: "Better than sex",
    price: 31.99,
    id: 1,
    imgSrc: "imgs/2d58df42921a4da33f70305574279fbd.jpg",
    imgAlt: "Máscara de pestañas"
  },
  {
    brand: "Nars",
    name: "Afterglow Liquid Blush",
    price: 30.40,
    id: 2,
    imgSrc: "imgs/775871c33f903196faf3bd6440760f90.jpg",
    imgAlt: "Colorete líquido"
  },
  {
    brand: "L'oreal Paris",
    name: "Les chocolats",
    price: 10.95,
    id: 3,
    imgSrc: "imgs/360052364384_2.jpg",
    imgAlt: "Labiales líquidos"
  },
  {
    brand: "Skeen",
    name: "Jelly Blush",
    price: 15.95,
    id: 4,
    imgSrc: "imgs/B4812E3B-F9E8-4AFF-B13B-847CE1C9F355.jpg",
    imgAlt: "Coloretes en barra"
  },
  {
    brand: "Benefit Cosmetics",
    name: "They're Real! Magnet",
    price: 31.99,
    id: 5,
    imgSrc: "imgs/benbenefitmascara_1_600x400-j74ijjpg_1633093532.png",
    imgAlt: "Máscara de pestañas"
  },
  {
    brand: "Estée Lauder",
    name: "Bronze Goddess Liquid Bronzer",
    price: 50.00,
    id: 6,
    imgSrc: "imgs/c5dd1ae28a790bc633de923541c0b18f.jpg",
    imgAlt: "Bronceador en crema"
  },
  {
    brand: "Sisley Paris",
    name: "Phyto-Touche Illusion d'Eté",
    price: 76.65,
    id: 7,
    imgSrc: "imgs/image2_7f823163-60e0-4a53-8531-bde283d8c87e_600x600.jpg",
    imgAlt: "Bronceador polvo"
  },
  {
    brand: "Nabla Cosmetics",
    name: "Shine Theory Eyeshadow Pack",
    price: 48.00,
    id: 8,
    imgSrc: "imgs/liquid-eyeshadows-nabla-cosmetics.jpg",
    imgAlt: "Sombras líquidas"
  },
  {
    brand: "Belif",
    name: "Aqua bomb brightening vitamin C cream",
    price: 52.00,
    id: 9,
    imgSrc: "imgs/belif2.jpg",
    imgAlt: "Crema belif"
  },
  {
    brand: "Cerave",
    name: "Crema hidratante para rostro y cuerpo",
    price: 15.00,
    id: 10,
    imgSrc: "imgs/cerave-hidra-cream.jpg",
    imgAlt: "Crema cerave"
  },

]

export function getProductById(id) {
  const FOUND_PRODUCT = PRODUCTS_LIST.find((element) => {
    return element.id == id;
  });
  return FOUND_PRODUCT;
}