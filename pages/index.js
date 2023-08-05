import MyCard from "./card/MyCard";
import Image from 'next/image'
import { useState } from "react";
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import React from 'react';
import { Carousel } from 'antd';
import {FormOutlined} from "@ant-design/icons";
import {GoBookmark} from "react-icons/go";
import Reciepes from "./allRecipes/Recipes";
import SampleRecipe from "./sample/SampleRecipe";

const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#f00',
    }}
  />
);

const mySampleRecipeArr = [
"carrot",
"broccoli",
"asparagus",
"cauliflower",
"corn",
"cucumber",
"green pepper",
"lettuce",
"mushrooms",
"onion",
"potato",
"pumpkin",
"red pepper",
"tomato",
"beetroot",
"brussel sprouts",
"peas",
"zucchini",
"radish",
"sweet potato",
"artichoke",
"leek",
"cabbage",
"celery",
"chili",
"garlic",
"basil",
"coriander",
"parsley",
"dill",
"rosemary",
"oregano",
"cinnamon",
"saffron",
"green bean",
"bean",
"chickpea",
"lentil",
"apple",
"apricot",
"avocado",
"banana",
"blackberry",
"blackcurrant",
"blueberry",
"boysenberry",
"cherry",
"coconut",
"fig",
"grape",
"grapefruit",
"kiwifruit",
"lemon",
"lime",
"lychee",
"mandarin",
"mango",
"melon",
"nectarine",
"orange",
"papaya",
"passion fruit",
"peach",
"pear",
"pineapple",
"plum",
"pomegranate",
"quince",
"raspberry",
"strawberry",
"watermelon",
"salad",
"pizza",
"pasta",
"popcorn",
"lobster",
"steak",
"bbq",
"pudding",
"hamburger",
"pie",
"cake",
"sausage",
"tacos",
"kebab",
"poutine",
"seafood",
"chips",
"fries",
"masala",
"paella",
"som tam",
"chicken",
"toast",
"marzipan",
"tofu",
"ketchup",
"hummus",
"chili",
"maple syrup",
"parma ham",
"fajitas",
"champ",
"lasagna",
"poke",
"chocolate",
"croissant",
"arepas",
"bunny chow",
"pierogi",
"donuts",
"rendang",
"sushi",
"ice cream",
"duck",
"curry",
"beef",
"goat",
"lamb",
"turkey",
"pork",
"fish",
"crab",
"bacon",
"ham",
"pepperoni",
"salami",
"ribs"
]




export default function Home() {

const [data, setData] = useState([]);

  const mySearcher = (val) => {
    fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${val}`)
      .then(response => {
        return response.json()
      })
      .then(item => {
        const myData = item.data.recipes
        setData(myData);
        console.log(myData)
      })
  }


  const onSearch = (value) =>  {
    mySearcher(value);
   
  }

  return (
    <div>
      <div className="container0">

    <Image 
    src="/forkify-logo.png"
    alt="Forkify-logo Logo"
    width={180}
    height={60}
    />
 
      <Search style={{
        width : 400,
        color: "#f00"
      }}
        placeholder="Search any type category which we have"
        enterButton="Search"
        size="large"
        suffix={suffix}
        onSearch={onSearch}
      />
      
   <Reciepes   myFunc = {onSearch}/>


      <div className="navbar">
      <div className="navContent">
      <FormOutlined style={{
        fontSize: 30,
        color: "#ed850e"
      }}/>{"ADD RECIPE"}
      </div>
      <div className="navContent">
      <GoBookmark style={{
        fontSize: 30,
        color: "#ed850e"
      }}/>{"BOOK MARKS"}
      </div>
      </div>
      </div>

<div style={{
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  alignItems: "center",
  marginTop: 30
}}>


<Image 
src="/fruits.png"
alt="myExample"
width={250}
height={230}
/>


<div style={{width: 600,
height:330,
}}>
      <Carousel autoplay style={{
        width: 600,
        height:330,
      }}>
        <div> 
           <Image
              src="/pizza.jpg"
              alt="myIMg"
              width={600}
              height={330}
            />
            </div> 
        <div> 
           <Image
              src="/pasta.jpeg"
              alt="myIMg"
              width={600}
              height={330}
            />
            </div> 
        <div> 
           <Image
              src="/biryani.webp"
              alt="myIMg"
              width={600}
              height={330}
            />
            </div> 
        <div> 
           <Image
              src="/ribs.jpg"
              alt="myIMg"
              width={600}
              height={330}
            />
            </div> 
        <div> 
           <Image
              src="/oil.webp"
              alt="myIMg"
              width={600}
              height={330}
            />
            </div> 
        <div> 
           <Image
              src="/grapes.jpg"
              alt="myIMg"
              width={600}
              height={330}
            />
            </div> 
        <div> 
           <Image
              src="/fish.jpg"
              alt="myIMg"
              width={600}
              height={330}
            />
            </div> 
        <div> 
           <Image
              src="/chips.jpg"
              alt="myIMg"
              width={600}
              height={330}
            />
            </div> 
  </Carousel>
  </div>

  <Image 
src="/barger2.png"
alt="myImg"
width={250}
height={230}
/>
  </div>

{/* <div className="SampleReciepe">
{data.map(myItem => (
        <SampleRecipe  key={Math.random()} img={myItem.image_url} name={myItem.title} publisher={myItem.publisher} />
      ))}
</div> */}


  <div className="container">
      {data.map(myItem => (
        <MyCard key={Math.random()} img={myItem.image_url} name={myItem.title} publisher={myItem.publisher}></MyCard>
      ))}
      </div>
    </div>
  )
}


