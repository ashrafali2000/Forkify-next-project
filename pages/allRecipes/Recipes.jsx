import React from 'react';
import {Select} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Typography } from 'antd';
import { useState } from 'react';

const items = [
    { value: "broccoli", label: "broccoli" },
    { value: "asparagus", label: "asparagus" },
    { value: "cauliflower", label: "cauliflower" },
    { value: "corn", label: "corn" },
    { value: "cucumber", label: "cucumber" },
    { value: "salami", label: "salami" },
    { value: "pepperoni", label: "pepperoni" },
    { value: "ribs", label: "ribs" },
    { value: "saffron", label: "saffron" },
    { value: "carrot", label: "carrot" },
    { value: "green pepper", label: "green pepper" },
    { value: "ham", label: "ham" },
    { value: "bacon", label: "bacon" },
    { value: "crab", label: "crab" },
    { value: "fish", label: "fish" },
    { value: "pork", label: "pork" },
    { value: "turkey", label: "turkey" },
    { value: "lamb", label: "lamb" },
    { value: "goat", label: "goat" },
    { value: "beef", label: "beef" },
    { value: "curry", label: "curry" },
    { value: "duck", label: "duck" },
    { value: "ice cream", label: "ice cream" },
    { value: "sushi", label: "sushi" },
    { value: "rendang", label: "rendang" },
    { value: "donuts", label: "donuts" },
    { value: "pierogi", label: "pierogi" },
    { value: "bunny chow", label: "bunny chow" },
    { value: "arepas", label: "arepas" },
    { value: "croissant", label: "croissant" },
    { value: "chocolate", label: "chocolate" },
    { value: "poke", label: "poke" },
    { value: "lasagna", label: "lasagna" },
    { value: "champ", label: "champ" },
    { value: "fajitas", label: "fajitas" },
    { value: "parma ham", label: "parma ham" },
    { value: "maple syrup", label: "maple syrup" },
    { value: "chili", label: "chili" },
    { value: "hummus", label: "hummus" },
    { value: "ketchup", label: "ketchup" },
    { value: "tofu", label: "tofu" },
    { value: "marzipan", label: "marzipan" },
    { value: "toast", label: "toast" },
    { value: "chicken", label: "chicken" },
    { value: "som tam", label: "som tam" },
    { value: "paella", label: "paella" },
    { value: "masala", label: "masala" },
    { value: "fries", label: "fries" },
    { value: "chips", label: "chips" },
    { value: "seafood", label: "seafood" },
    { value: "poutine", label: "poutine" },
    { value: "kebab", label: "kebab" },
    { value: "tacos", label: "tacos" },
    { value: "sausage", label: "sausage" },
    { value: "cake", label: "cake" },
    { value: "pie", label: "pie" },
    { value: "hamburger", label: "hamburger" },
    { value: "pudding", label: "pudding" },
    { value: "bbq", label: "bbq" },
    { value: "steak", label: "steak" },
    { value: "lobster", label: "lobster" },
    { value: "popcorn", label: "popcorn" },
    { value: "pasta", label: "pasta" },
    { value: "pizza", label: "pizza" },
    { value: "salad", label: "salad" },
    { value: "watermelon", label: "watermelon" },
    { value: "strawberry", label: "strawberry" },
    { value: "raspberry", label: "raspberry" },
    { value: "quince", label: "quince" },
    { value: "pomegranate", label: "pomegranate" },
    { value: "plum", label: "plum" },
    { value: "pineapple", label: "pineapple" },
    { value: "pear", label: "pear" },
    { value: "peach", label: "peach" },
    { value: "passion fruit", label: "passion fruit" },
    { value: "papaya", label: "papaya" },
    { value: "orange", label: "orange" },
    { value: "nectarine", label: "nectarine" },
    { value: "melon", label: "melon" },
    { value: "mango", label: "mango" },
    { value: "mandarin", label: "mandarin" },
    { value: "lychee", label: "lychee" },
    { value: "lime", label: "lime" },
    { value: "lemon", label: "lemon" },
    { value: "kiwifruit", label: "kiwifruit" },
    { value: "grapefruit", label: "grapefruit" },
    { value: "grape", label: "grape" },
    { value: "fig", label: "fig" },
    { value: "coconut", label: "coconut" },
    { value: "cherry", label: "cherry" },
    { value: "boysenberry", label: "boysenberry" },
    { value: "blueberry", label: "blueberry" },
    { value: "blackcurrant", label: "blackcurrant" },
    { value: "blackberry", label: "blackberry" },
    { value: "banana", label: "banana" },
    { value: "avocado", label: "avocado" },
    { value: "apricot", label: "apricot" },
    { value: "apple", label: "apple" },
    { value: "lentil", label: "lentil" },
    { value: "chickpea", label: "chickpea" },
    { value: "bean", label: "bean" },
    { value: "green bean", label: "green bean" },
    { value: "cinnamon", label: "cinnamon" },
    { value: "oregano", label: "oregano" },
    { value: "rosemary", label: "rosemary" },
    { value: "dill", label: "dill" },
    { value: "parsley", label: "parsley" },
    { value: "coriander", label: "coriander" },
    { value: "basil", label: "basil" },
    { value: "garlic", label: "garlic" },
    { value: "chili", label: "chili" },
    { value: "celery", label: "celery" },
    { value: "cabbage", label: "cabbage" },
    { value: "leek", label: "leek" },
    { value: "artichoke", label: "artichoke" },
    { value: "sweet potato", label: "sweet potato" },
    { value: "zucchini", label: "zucchini" },
    { value: "peas", label: "peas" },
    { value: "brussel sprouts", label: "brussel sprouts" },
    { value: "beetroot", label: "beetroot" },
    { value: "tomato", label: "tomato" },
    { value: "red pepper", label: "red pepper" },
    { value: "pumpkin", label: "pumpkin" },
    { value: "potato", label: "potato" },
    { value: "onion", label: "onion" },
    { value: "mushrooms", label: "mushrooms" },
    { value: "lettuce", label: "lettuce" }
]

export default function Reciepes({myFunc}) {

    
const handleChange = (value) => {
    const myOne = value;
    myFunc(myOne);
  };
    return (
   
    <Select
    size={"large"}
    autoFocus={true}
    defaultValue="Categories"
    onChange={handleChange}
    style={{
      width: 150,
      
    }}
    options={items}
  />
    )
}
