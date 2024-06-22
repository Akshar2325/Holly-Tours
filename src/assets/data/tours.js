import tourImg01 from "../images/Varanasi.jpg";
import tourImg02 from "../images/Haridwar.jpg";
import tourImg03 from "../images/Kedarnath.jpg";
import tourImg04 from "../images/Bodh Gaya.jpg";
import tourImg05 from "../images/Kushinagar.jpg";
import tourImg06 from "../images/Velankanni.jpg";
import tourImg07 from "../images/Palitana.jpg";
import tourImg08 from "../images/Jagannath Puri.jpg";

const tours = [
  {
    id: "01",
    title: "Varanasi",
    city: "Uttar Pradesh",
    distance: 300,
    price: 99,
    maxGroupSize: 10,
    desc: "Kashi Vishwanath Temple, Ganga Aarti at Dashashwamedh Ghat, and Sarnath",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "jhon doe",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Haridwar & Rishikesh",
    city: "Uttarakhand",
    distance: 400,
    price: 99,
    maxGroupSize: 8,
    desc: "Ganga Aarti at Har Ki Pauri, Laxman Jhula, and the many yoga and meditation centers in Rishikesh.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Kedarnath and Badrinath",
    city: "Uttarakhand",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "Kedarnath Temple, Badrinath Temple, and the stunning Himalayan scenery.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Bodh Gaya",
    city: "Bihar",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "Mahabodhi Temple, Bodhi Tree, and the Great Buddha Statue",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Kushinagar",
    city: "Uttar Pradesh",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "Mahaparinirvana Temple, Ramabhar Stupa, and the various international Buddhist temples",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Velankanni",
    city: "Tamil Nadu",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "Basilica of Our Lady of Good Health, the Annual Feast in September, and Velankanni Beach.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Palitana",
    city: "Gujarat",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "Adinath Temple, the climb up the Shatrunjaya hills, and the view from the top",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Jagannath Puri",
    city: "Odisha",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "Jagannath Temple, Puri Beach, and the Puri Beach Festival",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg08,
    featured: false,
  },
];

export default tours;
