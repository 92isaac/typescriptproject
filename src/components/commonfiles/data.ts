import img1 from '../../assets/products/1.png'
import img2 from '../../assets/products/2.png'
import img3 from '../../assets/products/3.png'
import img4 from '../../assets/products/5.png'

interface Testimonies {
  product: string;
  delivery: string;
  response: string;
}

interface Review {
  id: number;
  img: string;
  name: string;
  testimonies: Testimonies;
}

interface Product {
  id: number;
  image: string;
  category: string;
  description: string;
  price: string;
  rating: string;
  totalRating: string;
}

export const images: string[] = [img1, img2, img3, img4];

export const reviews: Review[] = [
    {
        id:1,
        img:img1,
        name:'Eren Y***r',
        testimonies:{
            product:"Lorem ipsum dolor sit",
            delivery:'Lorem ipsum dolor sit',
            response:'Lorem ipsum dolor sit',
        },

    },
    {
        id:2,
        img:img2,
        name:'Annie Le***hart',
        testimonies:{
            product:"Lorem ipsum dolor sit",
            delivery:'Lorem ipsum dolor sit',
            response:'Lorem ipsum dolor sit',
        },

    },
    {
        id:3,
        img:img3,
        name:'Levi A***man',
        testimonies:{
            product:"Lorem ipsum dolor sit",
            delivery:'Lorem ipsum dolor sit',
            response:'Lorem ipsum dolor sit',
        },

    },
]


export const product: Product[] =[
    {
        id:1,
        image:img1,
        category:'Shirt',
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit?",
        price:"35.00",
        rating:"4.9",
        totalRating:"2500"
    }, 
    {
        id:2,
        image:img2,
        category:'Shirt',
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit?",
        price:"35.00",
        rating:"4.9",
        totalRating:"2500"
    }, 
    {
        id:3,
        image:img3,
        category:'Shirt',
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit?",
        price:"35.00",
        rating:"4.9",
        totalRating:"2500"
    }, 
    {
        id:4,
        image:img4,
        category:'Shirt',
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit?",
        price:"35.00",
        rating:"4.9",
        totalRating:"2500"
    }, 
    {
        id:5,
        image:img1,
        category:'Shirt',
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit?",
        price:"35.00",
        rating:"4.9",
        totalRating:"2500"
    }, 
    {
        id:6,
        image:img3,
        category:'Shirt',
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit?",
        price:"35.00",
        rating:"4.9",
        totalRating:"2500"
    }, 
    {
        id:7,
        image:img4,
        category:'Shirt',
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit?",
        price:"35.00",
        rating:"4.9",
        totalRating:"2500"
    }, 
    {
        id:8,
        image:img2,
        category:'Shirt',
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit?",
        price:"35.00",
        rating:"4.9",
        totalRating:"2500"
    }, 
    {
        id:9,
        image:img1,
        category:'Shirt',
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit?",
        price:"35.00",
        rating:"4.9",
        totalRating:"2500"
    }, 
    {
        id:10,
        image:img1,
        category:'Shirt',
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit?",
        price:"35.00",
        rating:"4.9",
        totalRating:"2500"
    }, 

]