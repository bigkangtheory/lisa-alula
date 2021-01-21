
/*
Query products associated with category Id in the database
(ideally from an actual database the categoryId is a number
but for less filtering and a quick look up in the front end I am directly using string id)
*/
export const products = [
  /* Essentials Products */
  {
    name: "The Original Pill Box",
    id: 9001,
    supplier: "Noka Supply",
    description: "No more searching for pills at the bottom of your bag! The magnetic drawers are designed for life on the go. Each drawer will hold 12 aspirin-sized tablets, 3 large vitamins, or 1 fish-oil pill.",
    imageUrl: "https://storage.googleapis.com/product_assets/beta_plus_assets/product_shelves/Organizing%20The%20Chaos/nokasupply_pillorganizer.jpg",
    categoryId: "The Essentials" // ideally this is a number
  },
  {
    name: "Twice A Day Pill Organizer",
    id: 9002,
    supplier: "Noka Supply",
    description: "This weekly pill organizer, with a AM/PM option, features compartments large enough to hold supplements, vitamins as well as medications, an innovative double magnet design to keep compartments in place while allowing for easy taking.",
    imageUrl: "https://storage.googleapis.com/product_assets/beta_plus_assets/product_shelves/Organizing%20The%20Chaos/nokasupply_twiceadaypillorganizer.jpg",
    categoryId: "The Essentials"
  },
  {
    name: "Reusable Silicone Snack Bag",
    id: 9003,
    supplier: "Stasher",
    description: "These silicone bags offer a durable and reusable way to store food, gadgets and random knick knacks to the hospital and in transit to treatment. They are fridge-safe and dishwasher-safe. And, easy to label and leave in the communal hospital fridge when you're in-patient.",
    imageUrl: "https://storage.googleapis.com/product_assets/beta_plus_assets/product_shelves/Organizing%20The%20Chaos/stasher_sandwichbag.jpg",
    categoryId: "The Essentials"
  },

  /* Surgery Products */
  {
    name: "Miena Robe and Belt",
    id: 201,
    supplier: "AnaOno",
    description: "Getting dressed can be really difficult in your first days post-operation.This soft, luxurious robe has a front tie closure so you don't have to worry about getting a shirt on and off. Bonus- there's an inner belt that can be used for drain management.",
    imageUrl: "https://storage.googleapis.com/product_assets/beta_plus_assets/product_shelves/Mastectomy/anaono_recoveryrobe.jpg",
    categoryId: "Surgery"
  },
  {
    name: "Memory Foam Pillow",
    id: 202,
    supplier: "PureCare",
    description: "You'll go every where with this pillow for a while. Even handy to place between your seatbelt and your chest, while driving.",
    imageUrl: "https://storage.googleapis.com/product_assets/beta_plus_assets/product_shelves/Mastectomy/memoryfoampillow.jpg",
    categoryId: "Surgery"
  },
  {
    name: "EZBra Breast Dressing",
    id: 203,
    supplier: "EZBra",
    description: "Traditional dressings are not designed specifically for women and can contribute to patients' overall emotional frustration post-op. EZBra adjusts to various compression levels to fit each patient's varying needs, defining a new standard of post-operative care.",
    imageUrl: "https://storage.googleapis.com/product_assets/beta_plus_assets/product_shelves/Mastectomy/ezbra_breastdressing.jpg",
    categoryId: "Surgery"
  },

  /* Gifting Products */
  {
    name: "Empathy Cards",
    id: 770,
    supplier: "Emily McDowell",
    description: "The creator of the viral hit \"Empathy Cards\" teams up with a compassion expert to help readers comfort loved ones who are struggling, cancer patients included.",
    imageUrl: "https://storage.googleapis.com/product_assets/beta_plus_assets/product_shelves/To%20Let%20Them%20Know%20You_re%20Thinking%20Of%20Them/emilymcdowell_empathycard.jpg",
    categoryId: "Gifting"
  },
  {
    name: "Hoya Heart Plant",
    id: 777,
    supplier: "The Sill",
    description: "This small but mighty plant is sure to brighten a loved ones day. Appropriately in the shape of a heart, it is the perfect way to send love from near or far.",
    imageUrl: "https://storage.googleapis.com/product_assets/beta_plus_assets/product_shelves/To%20Let%20Them%20Know%20You_re%20Thinking%20Of%20Them/thesill_hoyaplant.jpg",
    categoryId: "Gifting"
  },
  {
    name: "Gift Card",
    id: 779,
    supplier: "Airbnb",
    description: "Cancer treatment often requires traveling to a different city for specialized care. Booking an apartment with Airbnb can be a more affordable option (or at least feel more cozy) than staying in a hotel room.",
    imageUrl: "https://storage.googleapis.com/product_assets/beta_plus_assets/product_shelves/To%20Let%20Them%20Know%20You_re%20Thinking%20Of%20Them/airbnb_giftcard.jpg",
    categoryId: "Gifting"
  },
];


/* DataBase has a category table */
export const categories = [
  {
    name: "The Essentials",
    id: 1
  },
  {
    name: "Surgery",
    id: 2
  },
  {
    name: "Gifting",
    id: 3
  }
];

