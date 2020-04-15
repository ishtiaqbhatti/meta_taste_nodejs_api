const data = [
  {
    name: "Rina’s Kitchenette",
    desc:
      "A trendy eatery which is home to the original Chocolate Toblerone and Caramel Crunch. Their menu has grown over time to offer a variety of cuisines from around the world, be it their Smash Burgers, seasonal beverages or Oriental Bowl.",
    image:
      "https://profiles.pk/wp-content/uploads/2017/12/12998699_10156785158310274_2148234815734048381_n-537x408.jpg",
    location: "Commercial Area, 242 Y, Sector Y DHA Phase 3, Lahore",
    meals: [
      {
        mealType: "lunch",
        name: "Mozzarella Sticks",
        desc:
          "An elongated pieces of battered mozzarella, served with signature marinara sauce",
        calories: "high",
        price: "Rs 510",
        image:
          "https://images.eatthismuch.com/site_media/img/5651_test_user_fe886342-4fee-4973-87b7-555455f34acd.png",
      },

      {
        mealType: "lunch",
        name: "Thai Spring Rolls",
        desc:
          " The vegetarian super light, crispy and tender vegetarian appetizer ,less chewy, more crispy and light.",
        calories: "high",
        price: "Rs 510",
        image:
          " https://dinnerthendessert.com/wp-content/uploads/2018/08/Spring-Rolls-688x459.jpg",
      },

      {
        mealType: "lunch",
        name: "Chicken Ceasar Salad",
        desc:
          "Chicken Caesar Salads are perfect for lunch , especially when topped with this creamy Caesar dressing, black olives and croutons.",
        calories: "Medium ",
        price: "Rs 480",
        image:
          " https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwDorvqGym2lM8MBQca9dakegVtCp52CTJHh4iBW2SYNSohV9M&usqp=CAU",
      },
      {
        mealType: "lunch",
        name: "Roast Beef Sliders",
        desc:
          "Small but mighty, these Italian Roast Beef Sliders involve simple ingredients and packed with flavors!",
        calories: "High ",
        price: "Rs 450",
        image:
          " https://www.unicornsinthekitchen.com/wp-content/uploads/2018/12/Roast-Beef-Slider-3.700px.jpg",
      },

      {
        mealType: "lunch",
        name: "Roast Beef Sliders",
        desc:
          "Small but mighty, these Italian Roast Beef Sliders involve simple ingredients and packed with flavors!",
        calories: "High ",
        price: "Rs 450",
        image:
          " https://www.unicornsinthekitchen.com/wp-content/uploads/2018/12/Roast-Beef-Slider-3.700px.jpg",
      },
      {
        mealType: "lunch",
        name: "The Cheese Burger",
        desc:
          "Tender and juicy beef patty topped with mix to fine and premium cheeses in Rina’s Signature Potato bun with baked potato wedges.",
        calories: "Medium ",
        price: "Rs 900",
        image:
          " https://www.gannett-cdn.com/-mm-/9ac38da32b9cdc8b88fb2bb3a11422d220b45792/c=0-39-533-340/local/-/media/2018/09/18/Rochester/Rochester/636728558183120194-red-robin-burger-gourmet-cheeseburger-large.png?auto=webp&format=pjpg&width=1200",
      },
      {
        mealType: "lunch",
        name: "Buttermilk Fried Chicken Sandwich",
        desc:
          "Tender and juicy chicken dipped in buttermilk tossed in Italian herbs topped with creamy sauce and coleslaw served in Rina’s signature potato bun and fries",
        calories: "High ",
        price: "Rs 990",
        image:
          " https://img.taste.com.au/dQuaxcdj/taste/2016/11/lillydale_buttermilkfriedchickenburger-118174-1.jpg",
      },
      {
        mealType: "lunch",
        name: "Lemon Cheese Cake",
        desc:
          "Simple zingy dessert, smooth, thick and creamy with tangy taste of lemon with mouth melting tart base.",
        calories: "low ",
        price: "Rs 340",
        image:
          " https://i.pinimg.com/originals/f8/bb/1f/f8bb1ff9588d4f4ddb7d8e1a6388f480.jpg",
      },
      {
        mealType: "lunch",
        name: "Double Chocolate Fudge Mousse",
        desc:
          "Rina’s signature chocolate sauce with light and fluffy full-fat cream makes it creamy, thick, and delicious.",
        calories: "medium ",
        price: "Rs 590",
        image: " https://www.kroger.com/asset/5940482bbae8a2517539af58?data=1",
      },

      {
        mealType: "Dinner",
        name: "Aglio olio",
        desc:
          "A traditional Italian pasta made by lightly sauteeing sliced garlic in olive oil, with the addition of dried red chili flakes, served with mushroom cream sauce and grilled chicken on the side ",
        calories: "High ",
        price: "Rs 1100 ",
        image:
          " https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWnzRI1wREVQlRsDO45-aMo4XYTqGC8VvWEeMrLvGdZDGo36eV&usqp=CAU",
      },

      {
        mealType: "Dinner",
        name: "Classico Margherita Pizza",
        desc:
          "A traditional Italian pizza dough with Rina’s italian tomato base sauce, buffalo mozzarella, homemade mozzarella use for perfect pizza texture.",
        calories: "High ",
        price: "Rs 1250 ",
        image:
          " https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Eataly_Las_Vegas_-_Feb_2019_-_Stierch_12.jpg/240px-Eataly_Las_Vegas_-_Feb_2019_-_Stierch_12.jpg",
      },
      {
        mealType: "Dinner",
        name: "Pepperoni Chicken Pizza",
        desc:
          "A traditional Italian pizza dough Chicken pepperoni, Rina’s italian tomato base sauce, buffalo mozzarella, homemade mozzarella use for perfect pizza texture.",
        calories: "High ",
        price: "Rs 1550 ",
        image:
          " https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUtAV3V2OQgl_CfhPgG4jzqBJ7bVveMAf8N0sd9pqQctkUTQuH&usqp=CAU",
      },
      {
        mealType: "Dinner",
        name: "Traditional Chocolate Éclair ",
        desc:
          "An oblong pastry made with choux dough filled with a cream and topped with Rina’s chocolate icing.",
        calories: "low ",
        price: "Rs 250 ",
        image:
          " https://www.tasteofhome.com/wp-content/uploads/2018/01/Chocolate-Eclairs_EXPS_GBDBZ20_1818_B01_08_3b-696x696.jpg",
      },
      {
        mealType: "Dinner",
        name: "Traditional Chocolate Éclair ",
        desc:
          "An oblong pastry made with choux dough filled with a cream and topped with Rina’s chocolate icing.",
        calories: "low ",
        price: "Rs 250 ",
        image:
          " https://www.tasteofhome.com/wp-content/uploads/2018/01/Chocolate-Eclairs_EXPS_GBDBZ20_1818_B01_08_3b-696x696.jpg",
      },
      {
        mealType: "Dinner",
        name: "Banoffee Pie ",
        desc:
          "An English dessert pie made from bananas, cream and toffee, layered on a buttery biscuit base, made from Rina’s signature crumbled biscuits and topped with chocolate",
        calories: "high ",
        price: "Rs 380 ",
        image:
          " https://natashaskitchen.com/wp-content/uploads/2018/09/Banoffee-Pie-21-Edit-2.jpg",
      },
      {
        mealType: "Dinner",
        name: "Caramel Crunch Cake Slice ",
        desc:
          "Soft fluffy caramel cake layered with fresh whip cream, crushed toffees and caramel coated nuts topped with whipped cream and caramel crunch. ",
        calories: "low ",
        price: "Rs 325 ",
        image:
          " https://i.pinimg.com/originals/03/a9/de/03a9de915f60f65db60fbf2b0e4f2a1c.jpg",
      },
    ],
  },
  {
    name: "Wasabi",
    desc:
      " Light-filled, modern chain branch serving up bento boxes, sushi and hot Japanese dishes.",
    image:
      " https://mir-s3-cdn-cf.behance.net/projects/404/badc0069975521.Y3JvcCw5MzMsNzMwLDMyLDA.jpg",
    location: " 258 Y Block Commercial، Street 10, Sector Y DHA Phase 3 ",
    meals: [
      {
        mealType: "lunch",
        name: "Pepper Beef Tataki",
        desc:
          "Seared tender beef in toasted crushed black peppers, Japanese spice with garlic shoyu.",
        calories: "high",
        price: "Rs 1000",
        image:
          " https://static.oprah.com/images/own/2011/annaandkristina/106/nobu-west-beef-takati-365x240.jpg ",
      },

      {
        mealType: "lunch",
        name: "Thai Spring Rolls",
        desc:
          " The vegetarian super light, crispy and tender vegetarian appetizer ,less chewy, more crispy and light.",
        calories: "high",
        price: "Rs 510",
        image:
          " https://dinnerthendessert.com/wp-content/uploads/2018/08/Spring-Rolls-688x459.jpg",
      },

      {
        mealType: "lunch",
        name: "Beef Yaki Udon",
        desc: " Stir fried sliced beef udon noodles with Japanese chutney.",
        calories: "Medium ",
        price: "Rs 1100",
        image:
          " https://i.pinimg.com/736x/37/53/64/375364b44aaca89209d3dc2a6e3d5ce0.jpg ",
      },
      {
        mealType: "lunch",
        name: "Chicken Chowmein",
        desc:
          " Chinese stir-fried noodles with vegetables and soya sauce glazed chicken. ",
        calories: "medium ",
        price: "Rs 650",
        image:
          " https://i.pinimg.com/736x/fa/8c/eb/fa8ceb5eae921776aa95883430d0473d.jpg ",
      },

      {
        mealType: "lunch",
        name: " Hokkaido Scallop Katsu ",
        desc: " 8 Pieces breaded soft scallop accompanied with Japanese sauce.",
        calories: "High ",
        price: "Rs 1400",
        image:
          " https://www.thespruceeats.com/thmb/B7HF4cc899E9RxRY_B6A_6MqV_I=/1622x1155/filters:fill(auto,1)/Step_2_Baked_Sea_Scallops-5a4504734e4f7d003a085557.jpg ",
      },
      {
        mealType: "lunch",
        name: "Chicken Breast Katsu",
        desc:
          "Crumbed fried chicken breast served with boil rice and tonkatsu sauce",
        calories: "Medium ",
        price: "Rs 900",
        image:
          " https://copykat.com/wp-content/uploads/2019/09/chicken-katsu-on-a-plate.jpg ",
      },
      {
        mealType: "lunch",
        name: "Thai Green Curry Prawns",
        desc:
          "Signature green curry paste tossed with baked prawns and served with white rice.",
        calories: "High ",
        price: "Rs 1250",
        image:
          " https://i.pinimg.com/originals/04/42/5c/04425c718a46072ed1f4e88c1f4fcbd5.jpg ",
      },
      {
        mealType: "lunch",
        name: "Dobin Mushi Soup",
        desc: " Japanese clear soup with mixed seafood’s and green onions",
        calories: "low ",
        price: "Rs 600",
        image:
          " https://lh4.googleusercontent.com/t6CTp5Y-BXcwVEbTfisf3tIcii8y8vAX9W6hB15kkj_l4KhCyutRCI5H5gpi-mNXwseVGxVmwaB6rVHxA-dwQlKaTQwA_ljThf7DdhD0HVA9AtjWevY ",
      },
      {
        mealType: "lunch",
        name: " Tuna Avocado Salad",
        desc:
          " Sliced tuna, avocado, green vegetables and seasonal fruit salad served with onion dressing.",
        calories: "medium ",
        price: "Rs 950",
        image:
          " https://www.dinneratthezoo.com/wp-content/uploads/2018/01/avocado-tuna-salad-13.jpg ",
      },

      {
        mealType: "Dinner",
        name: " Wafu Sashimi Salad",
        desc:
          " Ceberg and kaiso leaves tossed with in-housedressing and topped with vegetable caviar assorted sashim",

        calories: "High ",
        price: "Rs 1200 ",
        image:
          " https://s3-ap-southeast-1.amazonaws.com/smoovpos-live/c7a51885-fcf7-47de-8500-9eb412649d7d/725863342_KaniSeagraceSalad.jpg ",
      },

      {
        mealType: "Dinner",
        name: " Maguro Orange Salad",
        desc:
          " Thinly sliced Salmon glazed with lime and Freshtuna, orange and green vegetables salad served with mixed Japanese dressing .",
        calories: "medium ",
        price: "Rs 950 ",
        image:
          " https://japcook.com/en/wp-content/uploads/sites/3/2016/06/Chirashi-Tataki-Sake-Maguro.jpg ",
      },
      {
        mealType: "Dinner",
        name: " Salmon Paradise Platter",
        desc:
          " Salmon Nigri 5Pcs Spicy Salmon Maki 8Pcs Salmon Avocado Roll 8Pcs ",
        calories: "High ",
        price: "Rs 2550 ",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmnaKf-bQsKy9YAsKZ6vPeyItt0n19XzyI2mA0hY_bKT-zX88b&usqp=CAU",
      },
      {
        mealType: "Dinner",
        name: " Black Cod Roll",
        desc:
          " Miso black cod, and avocado rolled with sesameseeds and topped with micro greens",
        calories: "high ",
        price: "Rs 1800 ",
        image: " https://i.ytimg.com/vi/msZDz-qyZVo/maxresdefault.jpg",
      },
      {
        mealType: "Dinner",
        name: "Dynamite Spider Roll",
        desc:
          " Soft shell crab, chili mayonnaise, avocado and wasabi mayo sauce roll",
        calories: "high ",
        price: "Rs 1600 ",
        image:
          " https://alchetron.com/cdn/spider-roll-c6596912-b027-40d8-90d9-79995873cd7-resize-750.jpeg ",
      },
      {
        mealType: "Dinner",
        name: " Grilled Lobster",
        desc: " King lobster, spicy cod roe and Japanese aioli.",
        calories: "High ",
        price: "Rs 2200 ",
        image:
          " https://www.savingdessert.com/wp-content/uploads/2018/05/Grilled-Lobster-Tails-9.jpg ",
      },
      {
        mealType: "Dinner",
        name: " Spicy Salmon Steak",
        desc: " Marinated salmon steak with special miso mixture sauce",
        calories: "low ",
        price: "Rs 2500 ",
        image:
          " https://static01.nyt.com/images/2017/12/13/dining/13COOKING-4SPICE-SALMON1/13COOKING-4SPICE-SALMON1-articleLarge.jpg",
      },
      {
        mealType: "Dinner",
        name: " Beef Shogayaki (Local)",
        desc: " Thinly sliced beef scallion with ginger soy",
        calories: "medium ",
        price: "Rs 1000 ",
        image:
          " https://s3-media0.fl.yelpcdn.com/bphoto/2WulM6HeBZ_0CNR8gxZs0g/348s.jpg ",
      },
    ],
  },
  {
    name: "McDonald’s",
    desc:
      " Better known for its hamburgers, cheeseburgers and french fries, they also feature chicken products, breakfast items, soft drinks, milkshakes, wraps, and desserts..",
    image:
      " https://fh-uploads-hzscjv5a1k85do6fzz7kdmffiwhxul5bcoakysrttzf.netdna-ssl.com/fd926b05-460f-4f37-b1c2-da0ac325acff",
    location: " near Sheeba Park، Y Block Market Sector Y DHA Phase 3",
    meals: [
      {
        mealType: "Breakfast",
        name: " Omelette N’ Tomato Wrap",
        desc:
          " Tortilla filled with omellette, onion and tomato, to boost your energy to start a healthy day. ",

        calories: "low ",
        price: "Rs 275 ",
        image:
          " https://www.cheatsheet.com/wp-content/uploads/2018/02/Sausage-Burrito-640x399.png",
      },

      {
        mealType: "Breakfast",
        name: " Egg N’ Hashbrowns wrap",
        desc:
          " Tortilla filled with omellette, hashbrowns and bologna slice, to boost your energy to start a healthy day. ",

        calories: "low ",
        price: "Rs 385 ",
        image:
          " https://i.pinimg.com/originals/88/41/d6/8841d6114619726deaeb8fa7c67eb2d7.png",
      },
      {
        mealType: "Breakfast",
        name: " Egg N’ Sausage wrap",
        desc:
          " Tortilla filled with omellette, hashbrowns, sausage and cheese slice, to boost your energy to start a healthy day. ",

        calories: "medium ",
        price: "Rs 385 ",
        image:
          " https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/product/products/mcdonalds-Breakfast-Wrap-with-Ketchup.jpg",
      },
      {
        mealType: "Breakfast",
        name: " Egg N’ Sausage wrap",
        desc:
          " Tortilla filled with omellette, hashbrowns, sausage and cheese slice, to boost your energy to start a healthy day. ",

        calories: "medium ",
        price: "Rs 385 ",
        image:
          " https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/product/products/mcdonalds-Breakfast-Wrap-with-Ketchup.jpg",
      },
      {
        mealType: "Breakfast",
        name: "Omelette McMuffin",
        desc:
          " English breakfast bun filled with omellette, vegetables and cheese slice, to boost your energy to start a healthy day. ",
        calories: "medium ",
        price: "Rs 238 ",
        image:
          " https://www.mcdelivery.com.pk/pk/static/1492946816900/assets/92/products/5001.png?",
      },
      {
        mealType: "Breakfast",
        name: "Chicken Sausage McMuffin with Egg",
        desc:
          " English breakfast bun filled with omellette, chicken sausage and cheese slice, to boost your energy to start a healthy day. ",
        calories: "medium ",
        price: "Rs 372 ",
        image:
          " https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Sausage-McMuffin-with-Egg.jpg",
      },
      {
        mealType: "Breakfast",
        name: "Chicken Sausage McMuffin",
        desc:
          " English breakfast bun filled with chicken sausage and cheese slice, to boost your energy to start a healthy day. ",
        calories: "medium ",
        price: "Rs 310 ",
        image:
          " https://d1nqx6es26drid.cloudfront.net/app/uploads/2015/04/04033107/product-sausage-mcmuffin.png",
      },
      {
        mealType: "Breakfast",
        name: "Chicken McMuffin",
        desc:
          " English breakfast bun filled with crispy chicken Pattie, fresh lettuce and signature mayo to boost your energy to start a healthy day. ",
        calories: "medium ",
        price: "Rs 265 ",
        image:
          " https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUNNSenlFTgKWel6BkDcNdoeO-w_N3K4UW1XEbgHm9uxbRkc53&usqp=CAU",
      },
      {
        mealType: "Breakfast",
        name: "Big Breakfast",
        desc:
          " English breakfast bun with hashbrown, chicken sausage and scrambled egg to boost your energy to start a healthy day. ",
        calories: "medium ",
        price: "Rs 450 ",
        image:
          " https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/s-mcdonalds-Big-Breakfast-Regular-Size-Biscuit.jpg",
      },

      {
        mealType: "Breakfast",
        name: "Hotcakes (2 piece)",
        desc: " Fresh oven baked hotcakes served with maple syrup and butter. ",
        calories: "medium ",
        price: "Rs 330 ",
        image:
          " https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Hotcakes.jpg",
      },
      {
        mealType: "Breakfast",
        name: "Hashbrown & Coffee",
        desc:
          " Fresh and crispy hashbrown served with coffee a perfect combo with any wrap or mcmuffin. ",
        calories: "medium ",
        price: "Rs 420 ",
        image:
          " https://prod-shop-a-docket-s3.s3-ap-southeast-2.amazonaws.com/cdn/images/399065.jpg",
      },
      {
        mealType: "Breakfast",
        name: "Hashbrown & Tea",
        desc:
          " Fresh and crispy hashbrown served with tea a perfect combo with any wrap or mcmuffin. ",
        calories: "medium ",
        price: "Rs 380 ",
        image:
          " https://img.resized.co/lovin_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwczpcXFwvXFxcL2ltYWdlcy5sb3Zpbi5pZVxcXC91cGxvYWRzXFxcLzIwMTlcXFwvMTFcXFwvMTUxMjAwMzZcXFwvU2NyZWVuLVNob3QtMjAxOS0xMS0xNS1hdC0xMi4wMC4xNC5wbmdcIixcIndpZHRoXCI6XCJcIixcImhlaWdodFwiOlwiXCIsXCJkZWZhdWx0XCI6XCJodHRwczpcXFwvXFxcL2xvdmluLmllXFxcL2ltYWdlc1xcXC9uby1pbWFnZS5wbmdcIn0iLCJoYXNoIjoiZjUyMzE5ZjUyZjQxZDMwOWI3ZGFhNmEwNjNmM2I4YTkzZGI2Mjk0NSJ9/mcdonald-s-is-extending-its-breakfast-hours-across-its-irish-restaurants.png",
      },

      {
        mealType: "lunch and Dinner ",
        name: "Double Big Mac",
        desc:
          "Mcdonald’s signature bun overloaded with four beef patties, cheese slice, cucumber pickle and signature mayo served with fries and drink.",
        calories: "High ",
        price: "Rs 870",
        image:
          " https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSn2m1DCtPrEtjdMyOj4EkaljxF4-N0KC2daHHMB-d_bvobEI7p&usqp=CAU ",
      },
      {
        mealType: "lunch and Dinner ",
        name: "Quarter Pounder",
        desc:
          "Mcdonald’s signature bun overloaded with beef patty, cheese slice, cucumber pickle, salad and signature mayo served with fries and drink.",
        calories: "High ",
        price: "Rs 670",
        image:
          " https://www.mcdonalds.com/is/image/content/dam/usa/nfl/assets/meal/desktop/h-mcdonalds-Quarter-Pounder-with-Cheese-Extra-Value-Meals.jpg",
      },

      {
        mealType: "lunch and Dinner ",
        name: "Grand Chicken Spicy",
        desc:
          "Mcdonald’s signature bun overloaded with crispy chicken patty, cheese slice, salad and signature mayo served with fries and drink.",
        calories: "High ",
        price: "Rs 710",
        image:
          " https://emirates-restaurants.com/wp-content/uploads/6_McDonalds_Grand_chicken_spicy.jpg",
      },
      {
        mealType: "lunch and Dinner ",
        name: "Chicken Mac",
        desc:
          "Mcdonald’s signature bun overloaded with double crispy chicken patty, salad and signature mayo served with fries and drink.",
        calories: "High ",
        price: "Rs 560",
        image:
          " https://images.ladbible.com/thumbnail?type=jpeg&url=http://beta.ems.ladbiblegroup.com/s3/content/35e904925e52e4d6e2846696566b9a11.png&quality=70&width=720",
      },
      {
        mealType: "lunch and Dinner ",
        name: "McChicken",
        desc:
          "Mcdonald’s signature bun overloaded with crispy chicken patty, salad and signature mayo served with fries and drink.",
        calories: "High ",
        price: "Rs 470",
        image:
          " https://food.homeshop.ph/image/cache/catalog/Products/Food/McDonalds/Burgers/McChicken-Meal-500x500-product_popup.jpg",
      },
      {
        mealType: "lunch and Dinner ",
        name: "Spicy McCrispy Deluxe",
        desc:
          "Mcdonald’s signature bun overloaded with extra-crispy chicken patty, cheese slice, salad and signature mayo served with fries and drink.",
        calories: "High ",
        price: "Rs 520",
        image:
          " https://s3.us-east-2.amazonaws.com/s3-awaytake-com/images/12695_7_13_item.JPG",
      },
      {
        mealType: "lunch and Dinner ",
        name: "McArabia",
        desc:
          "Mcdonald’s signature pita bread overloaded with chicken patties, cheese slice, salad and signature mayo served with fries and drink.",
        calories: "High ",
        price: "Rs 720",
        image:
          "https://static.wixstatic.com/media/cb0c2b_ee3a9b590efd4348b6753b3a5788b376.jpg/v1/fill/w_720,h_480,al_c,lg_1,q_85/cb0c2b_ee3a9b590efd4348b6753b3a5788b376.jpg",
      },
      {
        mealType: "lunch and Dinner ",
        name: "Filet-O-Fish",
        desc:
          "Mcdonald’s signature bun overloaded with fish patty, cheese slice, salad and signature mayo served with fries and drink.",
        calories: "medium ",
        price: "Rs 520",
        image: " https://cdn1.clickthecity.com/gallery/normal_small_224.jpg",
      },

      {
        mealType: "lunch and Dinner ",
        name: "Chicken McNuggets (6 pieces)",
        desc:
          "Mcdonald’s signature crispy chicken nuggets served with barbeque sauce, fries and drink.",
        calories: "medium ",
        price: "Rs 420",
        image:
          " https://www.mcdonalds.co.za/sites/default/files/productThumbnail/mcd-meals-chicken-mcnuggets.png",
      },
      {
        mealType: "lunch and Dinner ",
        name: "Chicken McNuggets (9 pieces)",
        desc:
          "Mcdonald’s signature crispy chicken nuggets served with barbeque sauce, fries and drink.",
        calories: "high",
        price: "Rs 550",
        image:
          " https://www.mcdonalds.com/is/image/content/dam/usa/nfl/assets/meal/desktop/h-mcdonalds-Chicken-McNuggets-10-piece-Extra-Value-Meals.jpg",
      },
      {
        mealType: "lunch and Dinner ",
        name: "2 Pieces Crispy Chicken",
        desc: "Mcdonald’s signature crispy chicken, fries and drink.",
        calories: "medium ",
        price: "Rs 530",
        image:
          " https://az836796.vo.msecnd.net/media/image/product/en/medium/0020765400000.jpg",
      },
      {
        mealType: "lunch and Dinner ",
        name: "McFlurry Oreo",
        desc:
          "Mcdonald’s signature soft serve ice-cream topped with oreo and chocolate sauce.",
        calories: "low ",
        price: "Rs 330",
        image:
          " https://vignette.wikia.nocookie.net/nippuru/images/3/31/Hero_mcflurry.png/revision/latest/scale-to-width-down/340?cb=20160311034820",
      },
      {
        mealType: "lunch and Dinner ",
        name: "Cornetto McFlurry Strawberry",
        desc:
          "Mcdonald’s signature soft serve ice-cream topped with cornetto crunch, chocolate chip and strawberry sauce.",
        calories: "medium ",
        price: "Rs 330",
        image:
          " https://d1nqx6es26drid.cloudfront.net/app/uploads/2015/09/04124347/McFlurryPink.png",
      },
      {
        mealType: "lunch and Dinner ",
        name: "Cornetto McFlurry Chocolate",
        desc:
          "Mcdonald’s signature soft serve ice-cream topped with biscuit, chocolate chip and chocolate sauce.",
        calories: "medium ",
        price: "Rs 330",
        image:
          "https://storage.gra.cloud.ovh.net/v1/AUTH_296c7803aa594af69d39b970927c8fb9/media/avatars/0Q/0QEeNCALh33CwP4O.jpeg",
      },
      {
        mealType: "lunch and Dinner ",
        name: "Hot Fudge Sundae",
        desc:
          "Mcdonald’s signature soft serve ice-cream topped signature hot chocolate fudge sauce.",
        calories: "medium ",
        price: "Rs 270",
        image:
          " https://www.mcdonalds.com/content/dam/ca/nfl/web/nutrition/products/tile/en/mcdonalds-hot-fudge-sundae.jpg",
      },
      {
        mealType: "lunch and Dinner ",
        name: "Strawberry Sundae",
        desc:
          "Mcdonald’s signature soft serve ice-cream topped signature strawberry sauce.",
        calories: "medium ",
        price: "Rs 270",
        image:
          " https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Strawberry-Sundae.jpg",
      },
      {
        mealType: "lunch and Dinner ",
        name: "Apple Pie",
        desc: "Fresh from the oven, filo pastry filled apple sauce.",
        calories: "low ",
        price: "Rs 190",
        image:
          " https://www.seriouseats.com/images/20120406-mcdonalds-fried-apple-pie-1.jpg",
      },
      {
        mealType: "lunch and Dinner ",
        name: "Vanila Shake",
        desc:
          "Well blended combination of signature soft serve ice-cream with vanilla.",
        calories: "low ",
        price: "Rs 250",
        image:
          " https://www.mcdonalds.co.za/sites/default/files/productThumbnail/mcd-food-desserts-shakes-vanilla.png",
      },
      {
        mealType: "lunch and Dinner ",
        name: "Chocolate Shake",
        desc:
          "Well blended combination of signature soft serve ice-cream with chocolate sauce.",
        calories: "low ",
        price: "Rs 250",
        image: " https://i.ytimg.com/vi/qE85NhQGKy8/hqdefault.jpg",
      },
      {
        mealType: "lunch and Dinner ",
        name: "Strawberry Shake",
        desc:
          "Well blended combination of signature soft serve ice-cream with strawberry sauce.",
        calories: "low ",
        price: "Rs 250",
        image:
          " https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZ-5wyaE_LpzUwppvFdRtCPpCG4BkiU7HuuDoviHnDDdAcdc11&usqp=CAU",
      },
      {
        mealType: "lunch and Dinner ",
        name: "Salted Caramel Shake",
        desc:
          "Well blended combination of signature soft serve ice-cream with salted caramel sauce.",
        calories: "low ",
        price: "Rs 250",
        image:
          " https://i.pinimg.com/originals/5b/22/2e/5b222e42140ea514f6f35458a8db1da4.png",
      },
    ],
  },
];

module.exports = data;
