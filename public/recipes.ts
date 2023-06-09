import { StaticImageData } from "next/image";

import BlackCoffeeImage from "./recipes/black-coffee.jpg";
import CaffeeSuaImage from "./recipes/caffee-sua.jpg";
import CaffeeLatteNamImage from "./recipes/caffee-latte-nam.jpg";
import CaffeeLatteImage from "./recipes/caffee-latte.jpg";
import CaffeeCoconutImage from "./recipes/caffee-coconut.jpg";
import CaffeeSaltImage from "./recipes/caffee-salt.png";

export interface Recipe {
  readonly id: string;
  name: string;
  desc: string;
  img: StaticImageData;
  ingredients: string[];
  directions: string;
  tip?: string;
}

const recipes: Recipe[] = [
  {
    id: "caphe den",
    name: "C&#224; ph&#234; &#272;en",
    desc: "The simple and super strong black coffee. Perfect for espresso lovers and used as an ingredient for other recipes.",
    img: BlackCoffeeImage,
    ingredients: [
      "Grouded Olivier Coffee beans",
      "Boiling water",
      "Filter",
      "Optional: Ice",
    ],
    directions: `See detailed directions at the start of this page...`,
  },
  {
    id: "caphe sua",
    name: "C&#224; ph&#234; s&#7919;a &#273;&#225;",
    desc: "The signature coffee of Vietnam. My personal favorite, perfect for warm summer monings, take your time while drinking it.",
    img: CaffeeSuaImage,
    ingredients: [
      "45ml Olivier Coffee",
      "15 - 20ml Condense Milk",
      "Optional: Ice",
    ],
    directions: `Pour the coffee in your glass and add the condese milk. Mix well!
            Condense milk takes a while to fully mix with the coffee.
            Traditionaly this coffee is served as an ice coffee, but feel free
            to heat the mixture again to enjoy a warm version.`,
    tip: "Tipp from the locals:<br /> Put the ingredients in a handshaker and shake shake shake...",
  },
  {
    id: "caphe latte nam",
    name: "C&#224; ph&#234; b&#7841;c x&#236;u",
    desc: "The Vietnamese version of Caffè Latte. Strong, bold drip coffee smoothly balanced with sweet, creamy condensed milk.",
    img: CaffeeLatteNamImage,
    ingredients: [
      "30ml Olivier Coffee",
      "15 - 20ml Condense Milk",
      "25ml Milk",
      "Optional: Ice",
    ],
    directions: `Brew the Olivier Coffee like you woud do for simple black coffee.
            Pour the coffee in your glass and add the condese milk and your choice of milk. Mix well!
            Condense milk takes a while to fully mix with the coffee.
            Traditionaly this coffee is served as an ice coffee, but feel free
            to heat the mixture again to enjoy a warm version.`,
    tip: "Tipp from Yves:<br /> Oat-Milk works like a charm...",
  },
  {
    id: "caphe latte",
    name: "Café-Latte",
    desc: "Not just like your everyday latte, the vietnam coffee flavor gives your latte a completly different experience.",
    img: CaffeeLatteImage,
    ingredients: ["30ml Olivier Coffee", "25ml Milk", "Optional: Ice"],
    directions: `Brew the Olivier Coffee like you woud do for simple black coffee.
            Pour the coffee in your glass and add your choice of milk. Feel free to experiment with the milk you add.
            Oat-Milk usualy goes very well with vietnamese coffee.`,
  },
  {
    id: "caphe coconut",
    name: "C&#224; ph&#234; d&#7915;a",
    desc: "Savor the indulgence of Vietnamese Coconut Coffee - a unique blend of rich, aromatic coffee beautifully mixed with creamy coconut milk and ice.",
    img: CaffeeCoconutImage,
    ingredients: [
      "45ml Olivier Coffee",
      "30ml Condense Milk",
      "25ml Coconut Milk",
      "Optional: Ice",
    ],
    directions: `Brew the Olivier Coffee like you woud do for simple black coffee.
            Pour the coffee in your glass and add the coconut & condense. Mix well!
            Traditionaly this coffee is served as an iced coffee, but feel free
            to heat the mixture again to enjoy a warm version.`,
    tip: "Tipp from the locals:<br /> Put the ingredients in a handshaker and shake shake shake...",
  },
  {
    id: "caphe salted",
    name: "C&#224; ph&#234; mu&#245;i",
    desc: "Coffee with salt? I know, sounds weird, but give it a try, this experience will surprise you and the pinch of salt does magic to the taste.",
    img: CaffeeSaltImage,
    ingredients: [
      "45ml Olivier Coffee",
      "25ml Condense Milk",
      "5ml Milk",
      "30ml Non-Dairy Creamer",
      "A pinch of Himalaya salt",
    ],
    directions: `Brew the Olivier Coffee like you woud do for simple black coffee. 
    First add the condense milk, then the Olivier Coffee with the normal milk.
    Top it with the non-dairy creamer and add the pinch of salt as a final step.
    This coffee is usually served in glasses so all the different layers of ingredients are visible.
    Mix with a spoon before drinking.`,
  },
];

export default recipes;
