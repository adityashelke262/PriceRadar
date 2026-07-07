import iphone17 from "../assets/iphone17.png";
import iphone17pro from "../assets/iphone17pro.png";
import s26 from "../assets/s26.png";
import s26ultra from "../assets/s26ultra.png";
import nothing4a from "../assets/nothing4a.png";
import nothing4apro from "../assets/nothing4apro.png";
import macbookm4 from "../assets/macbookm4.png";
import macbookm4pro from "../assets/macbookm4pro.png";
import macbookm5 from "../assets/macbookm5.png";
import macbookm5pro from "../assets/macbookm5pro.png";
import avatar from "../assets/avatar.png";
import bioenzyme from "../assets/bioenzyme.png";

export const products = [
  {
    id: 1,

    name: "iPhone 17",

    brand: "Apple",

    category: "Smartphone",

    image: iphone17,

    images: [iphone17, iphone17, iphone17, iphone17],

    rating: 4.8,

    reviews: 2543,

    stock: "In Stock",
    discount: "10% OFF",

    specifications: {
      display: "6.1-inch Super Retina XDR OLED",
      processor: "Apple A19",
      ram: "8 GB",
      storage: "128 GB",
      battery: "3700 mAh",
      camera: "48 MP + 12 MP",
      os: "iOS 26",
      refreshRate: "120 Hz",
    },

    prices: [
      {
        platform: "Amazon",
        price: 82900,
        link: "https://www.amazon.in/s?k=iPhone+17",
      },
      {
        platform: "Flipkart",
        price: 81999,
        link: "https://www.flipkart.com/search?q=iphone+17",
      },
      {
        platform: "Croma",
        price: 82900,
        link: "https://www.croma.com/search/?text=iPhone%2017",
      },
      {
        platform: "Reliance Digital",
        price: 82900,
        link: "https://www.reliancedigital.in/collection/iphone-17",
      },
    ],

    aiSummary:
      "Excellent camera performance, premium build quality and smooth iOS experience.",

    featured: true,
  },

  {
    id: 2,

    name: "iPhone 17 Pro",

    brand: "Apple",

    category: "Smartphone",

    image: iphone17pro,

    images: [iphone17pro, iphone17pro, iphone17pro, iphone17pro],

    rating: 4.9,

    reviews: 1942,

    stock: "In Stock",
    discount: "10% OFF",

    specifications: {
      display: "6.3-inch Super Retina XDR OLED",
      processor: "Apple A19 Pro",
      ram: "12 GB",
      storage: "256 GB",
      battery: "4300 mAh",
      camera: "48 MP + 48 MP + 12 MP",
      os: "iOS 26",
      refreshRate: "120 Hz",
    },

    prices: [
      {
        platform: "Amazon",
        price: 133900,
        link: "https://www.amazon.in/s?k=iPhone+17+Pro",
      },
      {
        platform: "Flipkart",
        price: 129999,
        link: "https://www.flipkart.com/search?q=iphone+17+pro",
      },
      {
        platform: "Croma",
        price: 130990,
        link: "https://www.croma.com/search/?text=iPhone%2017%20Pro",
      },
      {
        platform: "Reliance Digital",
        price: 133900,
        link: "https://www.reliancedigital.in/search?q=iPhone%2017%20Pro",
      },
    ],

    aiSummary: "Perfect for photography, videography and professional users.",

    featured: true,
  },

  {
    id: 3,

    name: "Samsung Galaxy S26",

    brand: "Samsung",

    category: "Smartphone",

    image: s26,

    images: [s26, s26, s26, s26],

    rating: 4.7,

    reviews: 1710,

    stock: "In Stock",
    discount: "10% OFF",

    specifications: {
      display: "6.4-inch Dynamic AMOLED 2X",
      processor: "Snapdragon 8 Elite",
      ram: "12 GB",
      storage: "256 GB",
      battery: "5000 mAh",
      camera: "50 MP + 12 MP + 10 MP",
      os: "Android 16",
      refreshRate: "120 Hz",
    },

    prices: [
      {
        platform: "Amazon",
        price: 99999,
        link: "https://www.amazon.in/s?k=Samsung+Galaxy+S26",
      },
      {
        platform: "Flipkart",
        price: 97999,
        link: "https://www.flipkart.com/search?q=samsung+galaxy+s26",
      },
      {
        platform: "Croma",
        price: 99999,
        link: "https://www.croma.com/search/?text=Samsung%20Galaxy%20S26",
      },
      {
        platform: "Reliance Digital",
        price: 99999,
        link: "https://www.reliancedigital.in/search?q=Samsung%20Galaxy%20S26",
      },
    ],

    aiSummary:
      "Excellent all-round flagship with great battery and gaming performance.",

    featured: true,
  },

  {
    id: 4,

    name: "Samsung Galaxy S26 Ultra",

    brand: "Samsung",

    category: "Smartphone",

    image: s26ultra,

    rating: 4.9,

    reviews: 1482,

    stock: "In Stock",
    discount: "10% OFF",

    specifications: {
      display: "6.9-inch Dynamic AMOLED 2X",
      processor: "Snapdragon 8 Elite",
      ram: "16 GB",
      storage: "512 GB",
      battery: "5500 mAh",
      camera: "200 MP + 50 MP + 50 MP + 12 MP",
      os: "Android 16",
      refreshRate: "120 Hz",
    },

    prices: [
      {
        platform: "Amazon",
        price: 124999,
        link: "https://www.amazon.in/s?k=Samsung+Galaxy+S26+Ultra",
      },
      {
        platform: "Flipkart",
        price: 123999,
        link: "https://www.flipkart.com/search?q=samsung+galaxy+s26+ultra",
      },
      {
        platform: "Croma",
        price: 124999,
        link: "https://www.croma.com/search/?text=Samsung%20Galaxy%20S26%20Ultra",
      },
      {
        platform: "Reliance Digital",
        price: 124999,
        link: "https://www.reliancedigital.in/search?q=Samsung%20Galaxy%20S26%20Ultra",
      },
    ],

    aiSummary:
      "One of the most powerful Android phones for photography and productivity.",

    featured: true,
  },

  {
    id: 5,

    name: "Nothing Phone 4a",

    brand: "Nothing",

    category: "Smartphone",

    image: nothing4a,

    images: [nothing4a, nothing4a, nothing4a, nothing4a],

    rating: 4.6,

    reviews: 1128,

    stock: "In Stock",
    discount: "10% OFF",

    specifications: {
      display: "6.7-inch AMOLED",
      processor: "Snapdragon 7s Gen 3",
      ram: "8 GB",
      storage: "128 GB",
      battery: "5000 mAh",
      camera: "50 MP + 8 MP",
      os: "Nothing OS 4.0",
      refreshRate: "120 Hz",
    },

    prices: [
      {
        platform: "Amazon",
        price: 28999,
        link: "https://www.amazon.in/s?k=Nothing+Phone+4a",
      },
      {
        platform: "Flipkart",
        price: 27999,
        link: "https://www.flipkart.com/search?q=nothing+phone+4a",
      },
      {
        platform: "Croma",
        price: 28499,
        link: "https://www.croma.com/search/?text=Nothing%20Phone%204a",
      },
      {
        platform: "Reliance Digital",
        price: 28499,
        link: "https://www.reliancedigital.in/search?q=Nothing%20Phone%204a",
      },
    ],

    aiSummary:
      "A clean Android experience with a unique Glyph interface and excellent value for everyday users.",

    featured: false,
  },

  {
    id: 6,

    name: "Nothing Phone 4a Pro",

    brand: "Nothing",

    category: "Smartphone",

    image: nothing4apro,

    images: [nothing4apro, nothing4apro, nothing4apro, nothing4apro],

    rating: 4.7,

    reviews: 954,

    stock: "In Stock",
    discount: "10% OFF",

    specifications: {
      display: "6.77-inch AMOLED",
      processor: "Snapdragon 8s Gen 4",
      ram: "12 GB",
      storage: "256 GB",
      battery: "5500 mAh",
      camera: "50 MP + 50 MP + 8 MP",
      os: "Nothing OS 4.0",
      refreshRate: "120 Hz",
    },

    prices: [
      {
        platform: "Amazon",
        price: 35999,
        link: "https://www.amazon.in/s?k=Nothing+Phone+4a+Pro",
      },
      {
        platform: "Flipkart",
        price: 34999,
        link: "https://www.flipkart.com/search?q=nothing+phone+4a+pro",
      },
      {
        platform: "Croma",
        price: 35499,
        link: "https://www.croma.com/search/?text=Nothing%20Phone%204a%20Pro",
      },
      {
        platform: "Reliance Digital",
        price: 35499,
        link: "https://www.reliancedigital.in/search?q=Nothing%20Phone%204a%20Pro",
      },
    ],

    aiSummary:
      "Excellent balance of performance, battery life and software with a premium design.",

    featured: true,
  },

  {
    id: 7,

    name: "MacBook Air M4",

    brand: "Apple",

    category: "Laptop",

    image: macbookm4,

    images: [macbookm4, macbookm4, macbookm4, macbookm4],

    rating: 4.9,

    reviews: 1486,

    stock: "In Stock",
    discount: "5% OFF",

    specifications: {
      display: "13.6-inch Liquid Retina",
      processor: "Apple M4",
      ram: "16 GB",
      storage: "256 GB SSD",
      battery: "Up to 18 Hours",
      camera: "12 MP Center Stage",
      os: "macOS Tahoe",
      refreshRate: "60 Hz",
    },

    prices: [
      {
        platform: "Amazon",
        price: 96990,
        link: "https://www.amazon.in/s?k=MacBook+Air+M4",
      },
      {
        platform: "Flipkart",
        price: 94990,
        link: "https://www.flipkart.com/search?q=macbook+air+m4",
      },
      {
        platform: "Croma",
        price: 96990,
        link: "https://www.croma.com/search/?text=MacBook%20Air%20M4",
      },
      {
        platform: "Reliance Digital",
        price: 96990,
        link: "https://www.reliancedigital.in/search?q=MacBook%20Air%20M4",
      },
    ],

    aiSummary:
      "Perfect for students and professionals looking for excellent battery life and performance.",

    featured: true,
  },

  {
    id: 8,

    name: "MacBook Air M4 Pro",

    brand: "Apple",

    category: "Laptop",

    image: macbookm4pro,

    images: [macbookm4pro, macbookm4pro, macbookm4pro, macbookm4pro],

    rating: 4.9,

    reviews: 931,

    stock: "In Stock",
    discount: "5% OFF",

    specifications: {
      display: "14.2-inch Liquid Retina XDR",
      processor: "Apple M4 Pro",
      ram: "24 GB",
      storage: "512 GB SSD",
      battery: "Up to 20 Hours",
      camera: "12 MP Center Stage",
      os: "macOS Tahoe",
      refreshRate: "120 Hz",
    },

    prices: [
      {
        platform: "Amazon",
        price: 169990,
        link: "https://www.amazon.in/s?k=MacBook+Pro+M4+Pro",
      },
      {
        platform: "Flipkart",
        price: 167990,
        link: "https://www.flipkart.com/search?q=macbook+pro+m4+pro",
      },
      {
        platform: "Croma",
        price: 169990,
        link: "https://www.croma.com/search/?text=MacBook%20Pro%20M4%20Pro",
      },
      {
        platform: "Reliance Digital",
        price: 169990,
        link: "https://www.reliancedigital.in/search?q=MacBook%20Pro%20M4%20Pro",
      },
    ],
    aiSummary:
      "A professional laptop designed for developers, designers and content creators requiring high performance.",

    featured: true,
  },

  {
    id: 9,

    name: "MacBook Air M5",

    brand: "Apple",

    category: "Laptop",

    image: macbookm5,

    images: [macbookm5, macbookm5, macbookm5, macbookm5],

    rating: 4.9,

    reviews: 824,

    stock: "In Stock",

    discount: "8% OFF",

    specifications: {
      display: "13.6-inch Liquid Retina",
      processor: "Apple M5",
      ram: "16 GB",
      storage: "512 GB SSD",
      battery: "Up to 20 Hours",
      camera: "12 MP Center Stage",
      os: "macOS Tahoe",
      refreshRate: "60 Hz",
    },

    prices: [
      {
        platform: "Amazon",
        price: 114990,
        link: "https://www.amazon.in/s?k=MacBook+Air+M5",
      },
      {
        platform: "Flipkart",
        price: 112990,
        link: "https://www.flipkart.com/search?q=macbook+air+m5",
      },
      {
        platform: "Croma",
        price: 114990,
        link: "https://www.croma.com/search/?text=MacBook%20Air%20M5",
      },
      {
        platform: "Reliance Digital",
        price: 114990,
        link: "https://www.reliancedigital.in/search?q=MacBook%20Air%20M5",
      },
    ],

    aiSummary:
      "The latest MacBook Air with Apple's M5 chip offering exceptional battery life and everyday performance.",

    featured: true,
  },

  {
    id: 10,

    name: "MacBook Air M5 Pro",

    brand: "Apple",

    category: "Laptop",

    image: macbookm5pro,

    images: [macbookm5pro, macbookm5pro, macbookm5pro, macbookm5pro],

    rating: 5.0,

    reviews: 536,

    stock: "In Stock",

    discount: "5% OFF",

    specifications: {
      display: "14.2-inch Liquid Retina XDR",
      processor: "Apple M5 Pro",
      ram: "24 GB",
      storage: "1 TB SSD",
      battery: "Up to 22 Hours",
      camera: "12 MP Center Stage",
      os: "macOS Tahoe",
      refreshRate: "120 Hz",
    },

    prices: [
      {
        platform: "Amazon",
        price: 199990,
        link: "https://www.amazon.in/s?k=MacBook+Pro+M5+Pro",
      },
      {
        platform: "Flipkart",
        price: 197990,
        link: "https://www.flipkart.com/search?q=macbook+pro+m5+pro",
      },
      {
        platform: "Croma",
        price: 199990,
        link: "https://www.croma.com/search/?text=MacBook%20Pro%20M5%20Pro",
      },
      {
        platform: "Reliance Digital",
        price: 199990,
        link: "https://www.reliancedigital.in/search?q=MacBook%20Pro%20M5%20Pro",
      },
    ],

    aiSummary:
      "Designed for developers, video editors and creators who need top-tier Apple performance.",

    featured: true,
  },

  {
    id: 11,

    name: "Avatar Whey Protein 1kg",

    brand: "Avatar",

    category: "Protein",

    image: avatar,

    images: [avatar, avatar, avatar, avatar],

    rating: 4.7,

    reviews: 3874,

    stock: "In Stock",

    discount: "15% OFF",

    specifications: {
      flavour: "Malai Kulfi",
      protein: "27 g",
      servingSize: "36 g",
      servings: "27",
      calories: "136 kcal",
      source: "100% Whey Protein",
      weight: "1 kg",
      vegetarian: "Yes",
    },

    prices: [
      {
        platform: "Amazon",
        price: 3099,
        link: "https://www.amazon.in/AVVATAR-PROTEIN-Malai-Kulfi-Flavour/dp/B09CKM57HL",
      },
      {
        platform: "Flipkart",
        price: 2755,
        link: "https://www.flipkart.com/avvatar-whey-protein/p/itm42e78ad829cad",
      },
      {
        platform: "Blinkit",
        price: 3149,
        link: "https://blinkit.com/cn/supplements/cid/287/308",
      },
      {
        platform: "Zepto",
        price: 3199,
        link: "https://www.zepto.com/cn/protein-nutrition/protein-powder",
      },
      {
        platform: "BigBasket",
        price: 3199,
        link: "https://www.bigbasket.com/ps/?q=avvatar+whey+protein",
      },
    ],

    aiSummary:
      "High-quality whey protein with excellent taste and a high protein content, suitable for muscle recovery and lean muscle gain.",

    featured: true,
  },

  {
    id: 12,

    name: "MuscleBlaze Biozyme Performance Whey 1kg",
    brand: "MuscleBlaze",

    category: "Protein",

    image: bioenzyme,

    images: [bioenzyme, bioenzyme, bioenzyme, bioenzyme],

    rating: 4.6,

    reviews: 2154,

    stock: "In Stock",

    discount: "12% OFF",

    specifications: {
      flavour: "Chocolate",
      protein: "25 g",
      servingSize: "35 g",
      servings: "28",
      calories: "132 kcal",
      source: "Bioenzyme Whey Blend",
      weight: "1 kg",
      vegetarian: "Yes",
    },

    prices: [
      {
        platform: "Amazon",
        price: 3599,
        link: "https://www.amazon.in/MuscleBlaze-Performance-Certified-Chocolate-servings/dp/B091HTLXL3",
      },
      {
        platform: "Flipkart",
        price: 3599,
        link: "https://www.flipkart.com/muscleblaze-biozyme-performance-whey-protein-powder-25g-per-scoop/p/itmaa9337dc7cb27",
      },
      {
        platform: "Blinkit",
        price: 3599,
        link: "https://blinkit.com/cn/supplements/cid/287/308",
      },
      {
        platform: "Zepto",
        price: 3599,
        link: "https://www.zepto.com/cn/protein-nutrition/protein-powder",
      },
      {
        platform: "BigBasket",
        price: 3699,
        link: "https://www.bigbasket.com/ps/?q=muscleblaze+biozyme+whey",
      },
    ],

    aiSummary:
      "An affordable whey protein with digestive enzymes, ideal for beginners and everyday fitness enthusiasts.",

    featured: false,
  },
];
