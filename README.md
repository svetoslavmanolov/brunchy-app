# Brunchy - simple delivery app of brunch meals

This project was created with [Create React App](https://create-react-app.dev/).

## Used tools

- [UUID] (https://www.npmjs.com/package/react-uuid)

## Getting Started

Clone this repository and install dependencies

...> git clone https://github.com/svetoslavmanolov/brunchy-app
...> npm install

## To start the app, you must run the following command in your terminal:

...> npm start

Open [http://localhost:3000] to view it in your browser. The page will reload when you make changes.

### There is а created 'data.json' file in the 'src' folder with specified information regarding all brunches. You can change ONLY the value of every property. To add a new image you must put a new one in folder 'public/images'

### Example for one item:

        {
            "name": "Butter Pancakes",
            "caption": "With honey",
            "price": 14.5,
            "image": "images/1-butter-pancakes.png"
        }

### How app is working:

First you have to select your favorive brunches and it happens when click on the 'basket' button on each product you want. A total amount will be displayed and you can continue to add more products or order already selected products. If you would like to see what you have ordered so far you have to click on the 'basket' button at the bottom of the page. Once you are ready with all desired products, all you have to do is to click the 'Order Now' button and your BRUNCH will be on its way to you. And don't worry if you forgot to order some brunch, you can make multiple orders.




















