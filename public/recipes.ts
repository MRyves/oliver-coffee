export interface Recipe {
  readonly id: string;
  name: string;
  desc: string;
  ingredients: string[];
  directions: string;
  tip?: string;
}

const recipes: Recipe[] = [
  {
    id: "caphe den",
    name: "C&#224; ph&#234; &#272;en",
    desc: "The simple and super strong black coffee. Perfect for espresso lovers and used as an ingredient for other recipes.",
    ingredients: ["Grouded Oliver Coffee beans", "Boiling water", "Filter"],
    directions: `Brew the Oliver Coffee like you woud do for simple black coffee.
                Pour the coffee in your glass and add the condese milk. Mix well!
                Condense milk takes a while to fully mix with the coffee.
                Traditionaly this coffee is served as an ice coffee, but feel free
                to heat the mixture again to enjoy a warm version.`,
    tip: "Tipp from the locals: Put the ingredients in a handshaker and shake shake shake...",
  },
  {
    id: "caphe sua",
    name: "C&#224; ph&#234; s&#361;a &#273;&#225;",
    desc: "The signature coffee of Vietnam. My personal favorite, perfect for warm summer monings, take your time while drinking it.",
    ingredients: [
      "45ml Oliver Coffee",
      "15 - 20ml Condense Milk",
      "Optional: Ice",
    ],
    directions: `Brew the Oliver Coffee like you woud do for simple black coffee.
            Pour the coffee in your glass and add the condese milk. Mix well!
            Condense milk takes a while to fully mix with the coffee.
            Traditionaly this coffee is served as an ice coffee, but feel free
            to heat the mixture again to enjoy a warm version.`,
    tip: "Tipp from the locals: Put the ingredients in a handshaker and shake shake shake...",
  },
  {
    id: "caphe latte nam",
    name: "C&#224; ph&#234; s&#361;a &#273;&#225;",
    desc: "The signature coffee of Vietnam. My personal favorite, perfect for warm summer monings, take your time while drinking it.",
    ingredients: [
      "45ml Oliver Coffee",
      "15 - 20ml Condense Milk",
      "Optional: Ice",
    ],
    directions: `Brew the Oliver Coffee like you woud do for simple black coffee.
            Pour the coffee in your glass and add the condese milk. Mix well!
            Condense milk takes a while to fully mix with the coffee.
            Traditionaly this coffee is served as an ice coffee, but feel free
            to heat the mixture again to enjoy a warm version.`,
    tip: "Tipp from the locals: Put the ingredients in a handshaker and shake shake shake...",
  },
{
    id: "caphe latte",
    name: "C&#224; ph&#234; s&#361;a &#273;&#225;",
    desc: "The signature coffee of Vietnam. My personal favorite, perfect for warm summer monings, take your time while drinking it.",
    ingredients: [
      "45ml Oliver Coffee",
      "15 - 20ml Condense Milk",
      "Optional: Ice",
    ],
    directions: `Brew the Oliver Coffee like you woud do for simple black coffee.
            Pour the coffee in your glass and add the condese milk. Mix well!
            Condense milk takes a while to fully mix with the coffee.
            Traditionaly this coffee is served as an ice coffee, but feel free
            to heat the mixture again to enjoy a warm version.`,
    tip: "Tipp from the locals: Put the ingredients in a handshaker and shake shake shake...",
  },
  {
    id: "caphe coconut",
    name: "C&#224; ph&#234; s&#361;a &#273;&#225;",
    desc: "The signature coffee of Vietnam. My personal favorite, perfect for warm summer monings, take your time while drinking it.",
    ingredients: [
      "45ml Oliver Coffee",
      "15 - 20ml Condense Milk",
      "Optional: Ice",
    ],
    directions: `Brew the Oliver Coffee like you woud do for simple black coffee.
            Pour the coffee in your glass and add the condese milk. Mix well!
            Condense milk takes a while to fully mix with the coffee.
            Traditionaly this coffee is served as an ice coffee, but feel free
            to heat the mixture again to enjoy a warm version.`,
    tip: "Tipp from the locals: Put the ingredients in a handshaker and shake shake shake...",
  },
    {
    id: "caphe salted",
    name: "C&#224; ph&#234; s&#361;a &#273;&#225;",
    desc: "The signature coffee of Vietnam. My personal favorite, perfect for warm summer monings, take your time while drinking it.",
    ingredients: [
      "45ml Oliver Coffee",
      "15 - 20ml Condense Milk",
      "Optional: Ice",
    ],
    directions: `Brew the Oliver Coffee like you woud do for simple black coffee.
            Pour the coffee in your glass and add the condese milk. Mix well!
            Condense milk takes a while to fully mix with the coffee.
            Traditionaly this coffee is served as an ice coffee, but feel free
            to heat the mixture again to enjoy a warm version.`,
    tip: "Tipp from the locals: Put the ingredients in a handshaker and shake shake shake...",
  },

];

export default recipes;
