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
    id:1,

    name:"iPhone 17",

    brand:"Apple",

    category:"Smartphone",

    image:iphone17,

    images: [
    iphone17,
    iphone17,
    iphone17,
    iphone17
    ],

    rating:4.8,

    reviews:2543,

    stock: "In Stock",
discount: "10% OFF",


    specifications:{
        display:"6.1-inch Super Retina XDR OLED",
        processor:"Apple A19",
        ram:"8 GB",
        storage:"128 GB",
        battery:"3700 mAh",
        camera:"48 MP + 12 MP",
        os:"iOS 26",
        refreshRate:"120 Hz"
    },

    prices:[
        {
            platform:"Amazon",
            price:80999,
            link:"#"
        },
        {
            platform:"Flipkart",
            price:79999,
            link:"#"
        },
        {
            platform:"Blinkit",
            price:81999,
            link:"#"
        }
    ],

    aiSummary:"Excellent camera performance, premium build quality and smooth iOS experience.",

    featured:true
},

{
    id:2,

    name:"iPhone 17 Pro",

    brand:"Apple",

    category:"Smartphone",

    image: iphone17pro,

images:[
    iphone17pro,
    iphone17pro,
    iphone17pro,
    iphone17pro
],

    rating:4.9,

    reviews:1942,

    stock: "In Stock",
discount: "10% OFF",


    specifications:{
        display:"6.3-inch Super Retina XDR OLED",
        processor:"Apple A19 Pro",
        ram:"12 GB",
        storage:"256 GB",
        battery:"4300 mAh",
        camera:"48 MP + 48 MP + 12 MP",
        os:"iOS 26",
        refreshRate:"120 Hz"
    },

    prices:[
        {
            platform:"Amazon",
            price:129999,
            link:"https://amzn.in/d/0eaVsAlW"
        },
        {
            platform:"Flipkart",
            price:119999,
            link:"https://dl.flipkart.com/dl/apple-iphone-17-pro-cosmic-orange-256-gb/p/itm76fe37ca9ea8c?pid=MOBHFN6YR8HF5BQ9&lid=LSTMOBHFN6YR8HF5BQ9RBYDOE&_refId=&_appId=CL"
        }
    ],

    aiSummary:"Perfect for photography, videography and professional users.",

    featured:true
},

{
    id:3,

    name:"Samsung Galaxy S26",

    brand:"Samsung",

    category:"Smartphone",

    image:s26,

    images:[
    s26,
    s26,
    s26,
    s26
],

    rating:4.7,

    reviews:1710,

    stock: "In Stock",
discount: "10% OFF",

    specifications:{
        display:"6.4-inch Dynamic AMOLED 2X",
        processor:"Snapdragon 8 Elite",
        ram:"12 GB",
        storage:"256 GB",
        battery:"5000 mAh",
        camera:"50 MP + 12 MP + 10 MP",
        os:"Android 16",
        refreshRate:"120 Hz"
    },

    prices:[
        {
            platform:"Amazon",
            price:75999,
            link:"#"
        },
        {
            platform:"Flipkart",
            price:74999,
            link:"#"
        }
    ],

    aiSummary:"Excellent all-round flagship with great battery and gaming performance.",

    featured:true
},

{
    id:4,

    name:"Samsung Galaxy S26 Ultra",

    brand:"Samsung",

    category:"Smartphone",

    image:s26ultra,

    rating:4.9,

    reviews:1482,

    stock: "In Stock",
discount: "10% OFF",

    specifications:{
        display:"6.9-inch Dynamic AMOLED 2X",
        processor:"Snapdragon 8 Elite",
        ram:"16 GB",
        storage:"512 GB",
        battery:"5500 mAh",
        camera:"200 MP + 50 MP + 50 MP + 12 MP",
        os:"Android 16",
        refreshRate:"120 Hz"
    },

    prices:[
        {
            platform:"Amazon",
            price:131999,
            link:"#"
        },
        {
            platform:"Flipkart",
            price:129999,
            link:"#"
        }
    ],

    aiSummary:"One of the most powerful Android phones for photography and productivity.",

    featured:true
},

{
    id:5,

    name:"Nothing Phone 4a",

    brand:"Nothing",

    category:"Smartphone",

    image:nothing4a,

    images:[
    nothing4a,
    nothing4a,
    nothing4a,
    nothing4a
],

    rating:4.6,

    reviews:1128,

    stock: "In Stock",
discount: "10% OFF",


    specifications:{
        display:"6.7-inch AMOLED",
        processor:"Snapdragon 7s Gen 3",
        ram:"8 GB",
        storage:"128 GB",
        battery:"5000 mAh",
        camera:"50 MP + 8 MP",
        os:"Nothing OS 4.0",
        refreshRate:"120 Hz"
    },

    prices:[
        {
            platform:"Amazon",
            price:28499,
            link:"#"
        },
        {
            platform:"Flipkart",
            price:27999,
            link:"#"
        }
    ],

    aiSummary:"A clean Android experience with a unique Glyph interface and excellent value for everyday users.",

    featured:false
},

{
    id:6,

    name:"Nothing Phone 4a Pro",

    brand:"Nothing",

    category:"Smartphone",

    image:nothing4apro,

    images:[
    nothing4apro,
    nothing4apro,
    nothing4apro,
    nothing4apro
],

    rating:4.7,

    reviews:954,

    stock: "In Stock",
discount: "10% OFF",


    specifications:{
        display:"6.77-inch AMOLED",
        processor:"Snapdragon 8s Gen 4",
        ram:"12 GB",
        storage:"256 GB",
        battery:"5500 mAh",
        camera:"50 MP + 50 MP + 8 MP",
        os:"Nothing OS 4.0",
        refreshRate:"120 Hz"
    },

    prices:[
        {
            platform:"Amazon",
            price:35499,
            link:"#"
        },
        {
            platform:"Flipkart",
            price:34999,
            link:"#"
        }
    ],

    aiSummary:"Excellent balance of performance, battery life and software with a premium design.",

    featured:true
},

{
    id:7,

    name:"MacBook Air M4",

    brand:"Apple",

    category:"Laptop",

    image:macbookm4,

    images:[
    macbookm4,
    macbookm4,
    macbookm4,
    macbookm4
],

    rating:4.9,

    reviews:1486,

    stock: "In Stock",
discount: "5% OFF",


    specifications:{
        display:"13.6-inch Liquid Retina",
        processor:"Apple M4",
        ram:"16 GB",
        storage:"256 GB SSD",
        battery:"Up to 18 Hours",
        camera:"12 MP Center Stage",
        os:"macOS Tahoe",
        refreshRate:"60 Hz"
    },

    prices:[
        {
            platform:"Amazon",
            price:95999,
            link:"#"
        },
        {
            platform:"Flipkart",
            price:94999,
            link:"#"
        }
    ],

    aiSummary:"Perfect for students and professionals looking for excellent battery life and performance.",

    featured:true
},

{
    id:8,

    name:"MacBook Air M4 Pro",

    brand:"Apple",

    category:"Laptop",

    image:macbookm4pro,

    images:[
    macbookm4pro,
    macbookm4pro,
    macbookm4pro,
    macbookm4pro
],

    rating:4.9,

    reviews:931,

    stock: "In Stock",
discount: "5% OFF",


    specifications:{
        display:"14.2-inch Liquid Retina XDR",
        processor:"Apple M4 Pro",
        ram:"24 GB",
        storage:"512 GB SSD",
        battery:"Up to 20 Hours",
        camera:"12 MP Center Stage",
        os:"macOS Tahoe",
        refreshRate:"120 Hz"
    },

    prices:[
        {
            platform:"Amazon",
            price:131999,
            link:"#"
        },
        {
            platform:"Flipkart",
            price:129999,
            link:"#"
        }
    ],

    aiSummary:"A professional laptop designed for developers, designers and content creators requiring high performance.",

    featured:true
},

{
    id:9,

    name:"MacBook Air M5",

    brand:"Apple",

    category:"Laptop",

    image:macbookm5,

    images:[
    macbookm5,
    macbookm5,
    macbookm5,
    macbookm5
],

    rating:4.9,

    reviews:824,

    stock:"In Stock",

    discount:"8% OFF",

    specifications:{
        display:"13.6-inch Liquid Retina",
        processor:"Apple M5",
        ram:"16 GB",
        storage:"512 GB SSD",
        battery:"Up to 20 Hours",
        camera:"12 MP Center Stage",
        os:"macOS Tahoe",
        refreshRate:"60 Hz"
    },

    prices:[
        {
            platform:"Amazon",
            price:111999,
            link:"#"
        },
        {
            platform:"Flipkart",
            price:109999,
            link:"#"
        }
    ],

    aiSummary:"The latest MacBook Air with Apple's M5 chip offering exceptional battery life and everyday performance.",

    featured:true
},

{
    id:10,

    name:"MacBook Air M5 Pro",

    brand:"Apple",

    category:"Laptop",

    image:macbookm5pro,

    images:[
    macbookm5pro,
    macbookm5pro,
    macbookm5pro,
    macbookm5pro
],

    rating:5.0,

    reviews:536,

    stock:"In Stock",

    discount:"5% OFF",

    specifications:{
        display:"14.2-inch Liquid Retina XDR",
        processor:"Apple M5 Pro",
        ram:"24 GB",
        storage:"1 TB SSD",
        battery:"Up to 22 Hours",
        camera:"12 MP Center Stage",
        os:"macOS Tahoe",
        refreshRate:"120 Hz"
    },

    prices:[
        {
            platform:"Amazon",
            price:151999,
            link:"#"
        },
        {
            platform:"Flipkart",
            price:149999,
            link:"#"
        }
    ],

    aiSummary:"Designed for developers, video editors and creators who need top-tier Apple performance.",

    featured:true
},

{
    id:11,

    name:"Avatar Whey Protein 1kg",

    brand:"Avatar",

    category:"Protein",

    image:avatar,

    images:[
    avatar,
    avatar,
    avatar,
    avatar
],

    rating:4.7,

    reviews:3874,


    stock:"In Stock",

    discount:"15% OFF",

    specifications:{
        flavour:"Malai Kulfi",
        protein:"27 g",
        servingSize:"36 g",
        servings:"27",
        calories:"136 kcal",
        source:"100% Whey Protein",
        weight:"1 kg",
        vegetarian:"Yes"
    },

    prices:[
        {
            platform:"Amazon",
            price:2099,
            link:"#"
        },
        {
            platform:"Flipkart",
            price:1999,
            link:"#"
        }
    ],

    aiSummary:"High-quality whey protein with excellent taste and a high protein content, suitable for muscle recovery and lean muscle gain.",

    featured:true
},

{
    id:12,

    name:"Whey Bioenzyme Protein 1kg",

    brand:"Wellcore",

    category:"Protein",

    image:bioenzyme,

    images:[
    bioenzyme,
    bioenzyme,
    bioenzyme,
    bioenzyme
],

    rating:4.6,

    reviews:2154,


    stock:"In Stock",

    discount:"12% OFF",

    specifications:{
        flavour:"Chocolate",
        protein:"25 g",
        servingSize:"35 g",
        servings:"28",
        calories:"132 kcal",
        source:"Bioenzyme Whey Blend",
        weight:"1 kg",
        vegetarian:"Yes"
    },

    prices:[
        {
            platform:"Amazon",
            price:1949,
            link:"#"
        },
        {
            platform:"Flipkart",
            price:1899,
            link:"#"
        }
    ],

    aiSummary:"An affordable whey protein with digestive enzymes, ideal for beginners and everyday fitness enthusiasts.",

    featured:false
}

];