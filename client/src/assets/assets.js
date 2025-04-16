
// src/data/dummyProducts.js
import Potato from '../assets/potatoImage.jpg'
import Tomato from '../assets/tomatoImage.jpg'

export const dummyProducts = [
  {
    _id: "gd46g23h",
    name: "Potato 500g",
    category: "Vegetables",
    price: 25,
    rating: 4,
    offerPrice: 20,
    image: Potato,
    description: [
      "Fresh and organic",
      "Rich in carbohydrates",
      "Ideal for curries and fries",
    ],
    createdAt: "2025-03-423432",
    UpdatedAt: "3243-352-234343",
    inStock: true,
  },
  {
    _id: "g646g23h",
    name: "Tomato 500g",
    category: "Vegetables",
    price: 25,
    rating: 4,
    offerPrice: 20,
    image: Tomato,
    description: [
      "Fresh",
      "Rich in Nutrients",
      "Ideal for curries and fries",
    ],
    createdAt: "2015-03-423432",
    UpdatedAt: "3253-352-234343",
    inStock: true,
  },
]



export const dummyAddress = [
  {
    firstName : "Thomas",
    lastName : "VG",
    street: "Pravithanam",
    city: "Pala",
    district: "Kottayam",
    state: "Kerala",
    country: "India",
    zipcode: 43423
  }
]

import deleveryTruck from "../assets/deliveryTruck.png"
import leafIcon from "../assets/leaf.png"
export const features = [
  {
    icon: deleveryTruck,
    title: "Fastest Delivery",
    description: "Groceries delivered in under 30 minutes.",
  },
  {
    icon: leafIcon,
    title: "Freshness Guaranteed",
    description: "Fresh produce straight from the source.",
  },
]

import OrganicVeg from "../assets/organic-vegetables.jpg"
import FreshFruits from "../assets/freshFruits.jpeg"
export const categories = [
  {
    text: "Organic veggies",
    path: "Vegetables",
    image: OrganicVeg,
    bgColor: "#FEF6DA",
  },
  {
    text: "Fresh Fruits",
    path: "Fruits",
    image: FreshFruits,
    bgColor: "FEE0E0",
  }
]

export const dummyOrders = [
  {
    _id: "g5sdge3ewtw64fadq2e",
    userId: "454tgwt2twf3r342",
    items: [
      {
        product: dummyProducts[0],
        quantity: 2,
        _id: "32rtt342t34635634td",
      },
    ],
    amount: 86,
    address: dummyAddress[0],
    status: "Order Placed",
    paymentType: "Online",
    isPaid: true,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:16.108Z",
  },
]