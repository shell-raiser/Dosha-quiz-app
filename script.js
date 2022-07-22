var quiz = {
  questions: [
    {
      text: "How is your Body Build?",
      responses: [
        { text: "Thin,Bony and small frammed, I hardly gain weight." },
        { text: "Medium Built, I Can gain or lose weight easily." },
        { text: "Large Built, I Gain weight easily but difficult to lose" }]
    },



    {
      text: "How do you Walk and Talk?",
      responses: [
        { text: "Fast Walking and Talking.", vath: true },
        { text: "Moderate Talk and Determined Walk", pith: true },
        { text: "Slow Talk and Steady Walk. ", kafh: true }]
    },


    {
      text: "Which Weather you Like, or Very comfortable for you?",
      responses: [
        { text: "Enjoy warm climate but feel uncomfortable in cool weather. ", vath: true },
        { text: "Enjoy cool weather and don't like warm climate. ", pith: true },
        { text: "Comfortable for most of the year, but prefer Summer and Spring, Don't like Slightly wet climate. ", kafh: true }]
    },
    {
      text: "4. How often do you Sweat?",
      responses: [
        { text: "Sweat little but not much and have medium odour. ", vath: true },
        { text: "Sweat a lot and have strong odour. ", pith: true },
        { text: "Sweat moderately, but sweat a lot when working hard and have minimum odour. ", kafh: true }]
    },

    {
      text: "5. What is your Skin Type",
      responses: [
        { text: "Normal to dry, rough, thin and cool, with skin issues like dryness, dullness and wrinkly. ", vath: true },
        { text: "Normal to moist, soft, reddish, sensitive and warm, with skin issues like inflammation. ", pith: true },
        { text: "Normal to oily, soft, thick and cool, with skin issues like excessive oily, itching, fungal infections. ", kafh: true }]
    },


    {
      text: "How is the texture of your Hair?",
      responses: [
        { text: "Rough, Dry and Wavy. I get split ends easily. ", vath: true },
        { text: "Normal, Straight, Thin and brownish. ", pith: true },
        { text: "Thick, Curly and oily. Hair color tends to be darker side. ", kafh: true },
        { text: "I'm Bald from young age. ", vath: true }]
    },
    {
      text: "Tell us about your Lips",
      responses: [
        { text: "Have thin lips that tend to get dry. ", vath: true },
        { text: "Have medium sized soft lips, Upper lip is slightly darker than lower lip. ", pith: true },
        { text: "Large and Smooth Lips. ", kafh: true }]
    },


    {
      text: "Tell us about your Eyes?",
      responses: [
        { text: "Small in size, Feels dry and sleepy eyes often, I blink a lot. ", vath: true },
        { text: "Medium in size, I often get reddish eyes. ", pith: true },
        { text: "Big and Attractive, I have thick eye lashes. ", kafh: true }]
    },


    {
      text: "How often do you hear cracking sounds from your bones?",
      responses: [
        { text: "Noise on movements. ", vath: true },
        { text: "Nothing specific. ", pith: true },
        { text: "Strong Joints. ", kafh: true }]
    },



    {
      text: "How do you feel after some physical activity?",
      responses: [
        { text: "Very Active. ", vath: true },
        { text: "Moderate. ", pith: true },
        { text: "I will become Slow. ", kafh: true }]
    },


    {
      text: "Tell us about your Nails.",
      responses: [
        { text: "I have blackish, thin and cracking nails. ", vath: true },
        { text: "I have Reddish, soft and Flat nails. ", pith: true },
        { text: "I have white, thick and convex nails. ", kafh: true }]
    },


    {
      text: "Tell us about your Teeth.",
      responses: [
        { text: "Teeth are somewhat pale and uneven. ", vath: true },
        { text: "Teeth are Yellowish and medium sized, but I tend to suffer from cavities. ", pith: true },
        { text: "Teeth are well formed and aligned and Require less care in general. ", kafh: true }]
    },



    {
      text: "Tell us about your Tongue.",
      responses: [
        { text: "Tongue is Rough and dry. ", vath: true },
        { text: "Tongue is Glossy and Red. ", pith: true },
        { text: "Tongue in Smooth and Pink. ", kafh: true }]
    },



    {
      text: "Tell us about your Forehead.",
      responses: [
        { text: "I have narrow sized Forehead. ", vath: true },
        { text: "I have medium sized Forehead. ", pith: true },
        { text: "I have broad Forehead. ", kafh: true }]
    },




    {
      text: " What is your Thirst Level?",
      responses: [
        { text: "Medium Thirst ", vath: true },
        { text: "Maximum Thirst. ", pith: true },
        { text: "Minimum Thirst. ", kafh: true }]
    },



    {
      text: "What is your Normal Body temperature?",
      responses: [
        { text: "Normally, I have Warm Body Temperature. ", vath: true },
        { text: "Normally, I have Hot Body Temperature. ", pith: true },
        { text: "Normally, I have cold Body Temperature. ", kafh: true }]
    },



    {
      text: "How is your Memory Power?",
      responses: [
        { text: "Quick to learn but quickly to forget, short term memory is good. ", vath: true },
        { text: "Average speed of learning, but once learnt never forget. ", pith: true },
        { text: "Slow to learn but remembers for a long time, long term memory is good. ", kafh: true }]
    },



    {
      text: "What is the Nature of your Mind?",
      responses: [
        { text: "Mind tends to get restless easily. ", vath: true },
        { text: "Mind gets impatient or aggressive easily. ", pith: true },
        { text: "Mind remain cool and calm, mostly undisturbed. ", kafh: true }]
    },



    {
      text: " How good your mind is in taking Action?",
      responses: [
        { text: "Over thinking a lot before taking decision. ", vath: true },
        { text: "Quick Implementation. ", pith: true },
        { text: "Lazy in Implementation, Has a tendency to Procrastinate. ", kafh: true }]
    },



    {
      text: "How is the quality of your Sleep?",
      responses: [
        { text: "Light and Disturbed sleep, I wake up easily in the morning. ", vath: true },
        { text: "Moderate but regular, I can go back to sleep easily. ", pith: true },
        { text: "Deep and Heavy, I can't easily wake up in morning. ", kafh: true }]
    },


    {
      text: "What is your Emotional Nature?",
      responses: [
        { text: "I worry a lot, often feel nervous and anxious. ", vath: true },
        { text: "I often get irritated, angry and impatient. ", pith: true },
        { text: "Loving and Caring, It takes a lot to make me angry. ", kafh: true }]
    },

    {
      text: " How is your Speech and Voice?",
      responses: [
        { text: "Talkatvie/Fast, Irrelevant speech and in Normal voice. ", vath: true },
        { text: "Moderate, clear and Louder voice. ", pith: true },
        { text: "Slow, Gentle and in Sweet voice. ", kafh: true }]
    },

    {
      text: "How is your Appetite or Hunger?",
      responses: [
        { text: "Irregular, sometimes I feel hungry, sometimes I don't. ", vath: true },
        { text: "Strong and sharp, I Always feel hungry. ", pith: true },
        { text: "Decent Appetite or Hunger, Have tendency to eat for comfort and taste. ", kafh: true }]
    },

    {
      text: "How much is your capacity to Intake or Ingest food?",
      responses: [
        { text: "Unpredictable. ", vath: true },
        { text: "Could Ingest or Intake more food. ", pith: true },
        { text: "Moderate. ", kafh: true }]
    },

    {
      text: "How easily can you Digest Food?",
      responses: [
        { text: "Unpredictable. ", vath: true },
        { text: "Can digest Excess food. ", pith: true },
        { text: "Moderate/Low. ", kafh: true }]
    },

    {
      text: "What kind of food you like to eat more?",
      responses: [
        { text: "Prefer sweet, sour, salty & oily. I like Hot food and I eat more. ", vath: true },
        { text: "Prefer bitter, astringent. I like cold/warm food and eat more. ", pith: true },
        { text: "Like Spicy, bitter, sweet , astringent. I like hot food and Eat slowly. ", kafh: true }]
    },

    {
      text: "What are the properties of your urine?",
      responses: [
        { text: "Pale yellow, less quantity & passed with efforts and sound. In past 24 hrs, I have passed Medium amount of urine. ", vath: true },
        { text: "Yellow/red color, Hot and burning sensation. In past 24 hrs, I have passed Maximum amount of urine. ", pith: true },
        { text: "Milky in color, Less in quantity with lot of foam/froth. In past 24 hrs, I have passed Minimum amount of urine. ", kafh: true }]
    },

    {
      text: "What are the properties of your stool?",
      responses: [
        { text: "Hard constipated. In past 24 hrs, one/none Dark stool. ", vath: true },
        { text: "Soft, loose and unformed. In past 24 hrs, two/more yellowish stool. ", pith: true },
        { text: "Semi solid & well formed. In past 24 hrs, two/more Pale stool. ", kafh: true }]
    }
  ]
}

let dateObj = new Date();
var foodData = {
  kafh: {
    oil: ["cold or wood pressed Seseme oil"],
    0: {
      Breakfast: "Red clove tea, egg whites, apple juice.",
      Lunch: "Rice, chicken, fish, barley, cumin.",
      Dinner: "Durham flour in small quantity, leafy greens, bitter gourd, beans"
    },
    1: {
      Breakfast: "Barley tea, oats, watermelon, pistachio nuts (in small quantities)",
      Lunch: "Barley, rice, leafy green vegetables.",
      Dinner: "Lentiles, onion, mushroom, cooked tomatoes, leafy greens, garlic"
    },
    2: {
      Breakfast: "Cinnamon tea, millet, carrot, cherries",
      Lunch: "millet, rice, cauliflower, garlic, green bean",
      Dinner: "Legumes, prickly pear, spinach, garlic, cabbage."
    },
    3: {
      Breakfast: "Ginger tea, pasta, tomato, guava, pine nuts(in small quantities)",
      Lunch: "Rice, barley, wheat, fish, chicken, sugarcane juice",
      Dinner: "Mung beans, Ghee, goat milk, fresh paneer, beans."
    },
    4: {
      Breakfast: "Lemon tea, green beans, Sprouts boiled, grapes.",
      Lunch: "Rye rice, green beans, onion, spinach, chicken",
      Dinner: "Chicken, Egg white, ginger, leafy greens."
    },
    5: {
      Breakfast: "Clove tea, pomegranate juice, almonds(soaked and peeled)",
      Lunch: "Rice,bean sprouts boiled, leafy greens.",
      Dinner: "Fish, Onions, Coriander, Peas, bottle gourd, rice "
    },
    6: {
      Breakfast: "Lemon grass tea, mung dal yoghurt(diluted with 2 parts of water).",
      Lunch: "Rice,barley, leafy greens, bean, sprouts boiled, duck",
      Dinner: "Pinto beans, Thur dal, ridge gourd, Mushrooms"
    },
  },
  vath: {
    oil: ["cold or wood pressed SunFlower oil",
      "cold or wood pressed  Ground Nut oil",
      "cold or wood pressed coconut oil",
      'Ghee/Clarified Butter',
      "cold or wood pressed olive oil"],
    0: {
      Breakfast: "Cereals with ginger and Honey.",
      Lunch: "Pasta oats, sweet potato, apples, strawberry, tur dal, buttermilk, lmonds, cashews, apple juice, garlic, ginger, honey, jaggery.",
      Dinner: "Rice, cucumber, bananas, beans, ghee, fish, carrots, jaggery, kulfi, or ice cream."
    },
    1: {
      Breakfast: "Rice or wheat Kichidi, Soup of Green gram with Jaggery and coconut, Milk with cinnamon and Almond powder",
      Lunch: "Rice,carrots, green beans, ghee,ginger",
      Dinner: "Durham flor chapathi, carrots, cherries, beans, apple juice, jaggery."
    },
    2: {
      Breakfast: "Green and fresh herb frittat, orange juice, Apple, grape fruits, honey and ginger",
      Lunch: "rice cakes, wheat, cucumber, sprouts boiled, apricots, kiwi, buttermilk",
      Dinner: "Rice, turnip, strawberries, orange juice, Buttermilk, soyasauce."
    },
    3: {
      Breakfast: "Rice soup with ghee and ginger, Slices of banana, Fresh coriander juice",
      Lunch: "Rice, turnip, sweet potato, urad-dal, orange, buttermilk, cashews,coconut.",
      Dinner: "Quinoa, fish, cucumber, plum, tur-dal, Rice, olives, carrot juice."
    },
    4: {
      Breakfast: "Hot cereals with soaked oatsand ghee, Apricots with cardamom, Banana juice,lime and cardamom",
      Lunch: "Rice,cucumber, banana,buttermilk, walnuts, ginger, basil, Apple juice.",
      Dinner: "wheat flour dosa or chapathi, leafy greens, avocado, cow milk, beans, saffron with milk"
    },
    5: {
      Breakfast: "Mashed sweet potato rice with ginger and pepper, mango lassi, warm water with pepper and jeera",
      Lunch: "Wheat, carrots, cherries, tur-dal,buttermilk, walnuts, peanut, apple juice, honey",
      Dinner: "seitan, corn, grapes, ghee, mango juice, cumine, goat meet, ice cream"
    },
    6: {
      Breakfast: "Paneer burji, Sweet dessert of wheat and dry fruits",
      Lunch: "Rice, ridge gourd,sweet potato, urad Dal, orange, buttermilk, cashews, coconut water",
      Dinner: "Durham flour chapathi, radish boiled, plum, olives, black gram beans, apples, pine nuts, apple juice."
    }
  },
  pith: {
    oil: ["cold or wood pressed Mustard oil",
      "cold or wood pressed SunFlower oil",
      "Ghee/Clarified Butter",
      "cold or wood pressed coconut oil",
      "cold or wood pressed olive oil"],

    0: {
      Breakfast: "Quinoa and spices, milk/herbal tea, chicken,brocolli,berries,apple.",
      Lunch: "chicken,rice,egg whites,freshwater fish.",
      Dinner: "Rice,wheat,asparagus,olives,peas, sariva juice."
    },
    1: {
      Breakfast: "Cereal almond milk,herbal tea,  watermelon, apple, brocolli.",
      Lunch: "rice(basmati), barley, cauliflower, wheat,  yoghurt, ghee.",
      Dinner: "corn, spinach, potatoes, rice, cucumber"
    },
    2: {
      Breakfast: "Oats and maple syrup, apple juice/herbal tea,  strawberries, blueberries, bottle gaurd.",
      Lunch: "snake gourd, cucumber, rice, green beans,  peas, pumpkin.",
      Dinner: "apples, potatoes, rice, spinach, sariva juice,  cherries, goat milk."
    },
    3: {
      Breakfast: "Pancakes and honey, goat milk/herbal tea,  melons, grapes, cucumber.",
      Lunch: "turdal, urad dal, rice, soyabeans, yoghurt",
      Dinner: "cool dairy drinks, goat milk, grape juice,  lemon grass, rice, asparagus."
    },
    4: {
      Breakfast: "Pasta and brocolli, grape juice/herbal tea,  pomegranates,  berries,  corn",
      Lunch: "mixed green vegetables, rice, yoghurt, cucumber",
      Dinner: "Fresh fruit juice, fresh basil leaves, goat milk,  rice,  fresh water fish."
    },
    5: {
      Breakfast: "oats bran and honey, barley tea,  avocado, sweet potato",
      Lunch: "grain tea, kidney beans rice, yoghurt, cucumber",
      Dinner: "Ghee, almonds, coconut, fresh cool dairy products,  cow milk, cherries, spinach"
    },
    6: {
      Breakfast: "Tapioca and spices(pepper), coconut milk,  apricots, sprouts boiled.",
      Lunch: "wheat, paneer, rice, yoghurt.",
      Dinner: "Asparagus, ghee, goat cheese, peas, potatoes,  cucumber, watermelon, rice, spinach"
    }
  },
  vathPith: {
    oil: ["cold or wood pressed SunFlower oil",
      "cold or wood pressed  Ground Nut oil",
      "cold or wood pressed coconut oil",
      "Ghee/Clarified Butter",
      "cold or wood pressed Mustard oil",
      "cold or wood pressed olive oil"],

    0: {
      Breakfast: "Cereals with ginger and lime, Ridge gourd,apple,brocolli,berries, Quinoa with spices, milk/herbal tea",
      Lunch: "Pasta oats,sweet potato,apples, strawberry,tur dal,buttermilk., grape juice,garlic,ginger,honey, chicken,rice,egg whites,",
      Dinner: "Rice,cucumber,bananas,beans,, ghee,fish,carrots,jaggery,kulfi,or ice cream., Rice,wheat,asparagus,olives,peas,lemon juice."
    },
    1: {
      Breakfast: "Rice or wheat Kichidi, Soup of Green gram with Jaggery and coconut, Cereal almond milk,herbal tea., water-melon,apple,brocolli.",
      Lunch: "Rice,carrots,green beans,ghee,ginger, rice(basmati),barley,cauliflower,wheat",
      Dinner: "Durham flor chapathi,carrots,cherries, beans,apple juice,jaggery,snake gourd.,spinach,potatoes,rice,cucumber"
    },
    2: {
      Breakfast: "Green and fresh herb frittat, lemon juice, orange juice, Apple,grape fruits,honey and ginger, Oats and maple syrup,apple juice/herbal juice",
      Lunch: "rice cakes,wheat,cucumber,sprouts boiled,apricots, kiwi,buttermilk,snake gourd,cucumber,rice.,green beans, peas,pumpkin.",
      Dinner: "Buttermilk,soyasauce,orange juice,Rice,turnip,strawberries,mung dhal,apples,potatoes,rice,spinach,lemon juice"
    },
    3: {
      Breakfast: "Rice soup with ghee and ginger,Slices of banana,sariva juice,Fresh coriander juice,Pancakes and honey,goat milk/herbal tea",
      Lunch: "Rice,Ridge gourd,sweet potato,urad-dal,orange,buttermilk,cashews,coconut,turdal,urad-dal,rice,soyabeans,yoghurt",
      Dinner: "Quinoa,fish,cucumber,plum,tur-dal,fibers,olives,carrot juice.,cool dairy drinks,goat milk,grapes juice,rice"
    },
    4: {
      Breakfast: "Hot cereals with soaked oatsand ghee,Apricots with cardamom,Banana juice,lime and cardamom,Pasta and brocolli,grape juice/herbal tea,pomegranates",
      Lunch: "Rice,cucumber,banana,buttermilk,walnuts,ginger,basil,lemon juice  ,mixed green vegetables,rice,yoghurt,cucumber",
      Dinner: "wheat flour dosa or chapathi,leafy greens,,avocado,cow milk,beans,saffron with milk,Fresh fruit juice,fresh basil leaves,goat milk"
    },
    5: {
      Breakfast: "Mashed sweet potato rice with ginger and pepper,mango lassi,warm water with pepper and jeera,oats bran with honey,barley tea, avocado, sweet potato",
      Lunch: "Wheat,carrots,cherries,black gram dal,buttermilk,walnuts,peanut apple juice honey,kidney beans rice,yoghurt,cucumber.",
      Dinner: "seitan,corn,grapes,ghee,mango juice,cumine,fish,ice-cream,fresh cool dairy products,cow milk,cherries,spinach"
    },
    6: {
      Breakfast: "Paneer burji,Sweet dessert of wheat and dry fruits,Tapioca and spices(pepper),coconut milk",
      Lunch: "Rice,bottle gourd,sweet potato,urad-Dal,,orange,buttermilk,cashews,coconut water,wheat,paneer,rice,yoghurt.",
      Dinner: "Durham flour chapathi,radish boiled,plum,olives,apples,,black gram beans,pine nuts,apple juice,Asparagus,ghee,goat cheese,peas,potatoes,cucumber,watermelon,rice"
    }
  },
  pithVath: {
    oil: ["cold or wood pressed Mustard oil",
      "Ghee/Clarified Butter",
      "cold or wood pressed SunFlower oil",
      "cold or wood pressed  Ground Nut oil",
      "cold or wood pressed coconut oil",
      "cold or wood pressed olive oil"],
    0: {
      Breakfast: "cabbage,chicken,brocolli,berries,apple,Quinoa and spices, milk/herbal tea,Cereals with ginger and lime",
      Lunch: "chicken,rice,egg whites,fresh water fish.,strawberry,tur dal,buttermilk,almonds cashews,apple juice, jaggery,honey",
      Dinner: "Rice,wheat,asparagus,olives,peas,lemon juice.,carrots,jaggery,ghee, kulfi or ice cream."
    },
    1: {
      Breakfast: "Cereal almond milk,herbal tea,watermelon,apple,brocolli.,Milk with cinnamon and Almond powder",
      Lunch: "rice(basmati),barley,cauliflower,wheat,yoghurt,ghee.Rice,carrots,green beans,ghee,ginger",
      Dinner: "snake gourd,spinach,potatoes,rice,cucumber,beans,apple juice,carrots,cherries,Durham flor chapathi."
    },
    2: {
      Breakfast: "Oats and maple syrup,apple juice/herbal tea,strawberries,blueberries,bottle gourd.,Apple,grape fruits, honey and ginger",
      Lunch: "snake gourd,cucumber,rice,green beans,peas,pumpkin,apricots,kiwi,buttermilk,wheat,cucumber,sprouts boiled",
      Dinner: "apples,potatoes,rice,spinach,sariva juice,cherries,goat milk,Buttermilk,soyasauce,orange juice,turnip"
    },
    3: {
      Breakfast: "Pancakes and honey,goat milk/herbal tea,melons,grapes,cucumber,Fresh coriander juice,Rice soup with ghee and ginger.",
      Lunch: "turdal,urad dal,rice,soyabeans,yoghurt,Rice,turnip,sweet potato,urad-dal,orange,buttermilk,cashews.",
      Dinner: "cool dairy drinks,goat milk,mango juice,lemon grass,rice,asparagus,tur-dal,fibers,olives,carrot juice."
    },
    4: {
      Breakfast: "Pasta and brocolli,grape juice/herbal tea,pomegranates,berries corn,Apricots with cardamom,Hot cereals with soaked oatsand ghee",
      Lunch: "mixed green vegetables,rice,yoghurt,cucumber,orange,buttermilk,cashews,coconut,Rice,snake gourd,sweet potato",
      Dinner: "Fresh fruit juice,fresh basil leaves,goat milk,rice, fresh water fish, saffron with milk,avocado,cow milk,beans."
    },
    5: {
      Breakfast: "oats bran with honey,barley tea,avocado,sweet potato,mango lassi,warm water with pepper and jeera",
      Lunch: "grain tea,kidney beans rice,yoghurt,cucumber,walnuts,peanut, apple juice, honey,carrots,cherries",
      Dinner: "Ghee,almonds,coconut,fresh cool dairy products,cow milk,cherries,spinach, seitan,cumine,corn,grapes,ghee,mango juice,ice cream"
    },
    6: {
      Breakfast: "Tapioca and spices(pepper),coconut milk,apricots,sprouts boiled,Sweet dessert of wheat and dry fruits",
      Lunch: "wheat,paneer,rice,grape juice,walnuts,ginger,basil,yoghurt,cucumber,banana",
      Dinner: "Asparagus,ghee,goat cheese,peas,potatoes,cucumber,watermelon,rice,spinach,olives,Durham flour chapathi,radish boiled,plum,apple juice."
    }

  },
  vathKafh: {
    oil: ["cold or wood pressed Seseme oil",
      "Ghee/Clarified Butter",
      "cold or wood pressed SunFlower oil",
      "cold or wood pressed  Ground Nut oil",
      "cold or wood pressed coconut oil",
      "cold or wood pressed olive oil"],
    0: {
      Breakfast: "Cereals with ginger and lime,Red clove tea,egg whites,pineapple juice.",
      Lunch: "Almonds cashews,apple juice,grape juice,garlic,ginger,honey,jaggery,Rice,chicken,fish,barley,goat meat.",
      Dinner: "Rice,cucumber,bananas,beans,bitter gourd,ghee,fish,carrots,jaggery,kulfi or ice cream,Durham flour in small quantity,leafy greens."
    },
    1: {
      Breakfast: "Rice or wheat Kichidi,Soup of Green gram,Barley tea,oats,banana,pistachio nuts (in small quantities)",
      Lunch: "Rice,carrots,green beans,ghee,ginger,Barley, rice,leafy green vegetables.",
      Dinner: "Durham flor chapathi,carrots,cherries,beans,apple juice,jaggery,leafy greens,Lentiles,onion,mushroom,cooked tomatoes,garlic."
    },
    2: {
      Breakfast: "Green and fresh herb frittat, orange juice,Apple,grape fruits, honey and ginger,Cinnamon tea,millet,carrot,cherries",
      Lunch: "apricots,kiwi,buttermilk,rice cakes,wheat,cucumber,sprouts boiled,millet,rice,cauliflower,garlic,green bean",
      Dinner: "Rice,turnip,strawberries,mung dhal,soyasauce,Buttermilk,orange juice,Legumes,spinach,prickly pear,garlic."
    },
    3: {
      Breakfast: "Rice soup with ghee and ginger,Slices of banana,Fresh coriander juice,Ginger tea,pasta,tomato,guava,(in small quantities)",
      Lunch: "Rice,cabbage,sweet potato,urad-dal,coconut,orange,buttermilk,cashews,barley,wheat,chicken",
      Dinner: "Quinoa,fish,cucumber,plum,tur-dal,olives,fibers,carrot juice,Mung beans,Ghee,goat milk,fresh paneer,beans."
    },
    4: {
      Breakfast: "Hot cereals with soaked oatsand ghee,Apricots with cardamom,lime and cardamom,Lemon tea,green beans,Sprouts boiled,grapes.",
      Lunch: "Rice,cauliflower,sweet potato,urad-dal,Rye rice,green beans,onion,spinach,chicken",
      Dinner: "wheat flour dosa or chapathi,leafy greens,avocado,cow milk,beans,saffron with milk,Chicken,Egg white,ginger,leafy greens."
    },
    5: {
      Breakfast: "Mashed sweet potato rice with ginger and pepper,warm water with pepper and jeera,pomegranate juice,Clove tea,almonds(soaked and peeled),mango lassi.",
      Lunch: "Wheat,carrots,cherries,mung dal,buttermilk,Rice,walnuts,peanut,apple juice, honey,bean sprouts boiled,leafy greens.",
      Dinner: "seitan,corn,grapes,ghee,mango juice,cumine,fish,ice cream,Fish,Onions,Coriander,Peas"
    },
    6: {
      Breakfast: "Paneer burji, Sweet dessert of wheat and dry fruits,Lemon grass tea,yoghurt(diluted with 2parts of water).",
      Lunch: "Rice,cucumber,watermelon,buttermilk,chai,walnuts,ginger,basil,sugarcane juice,leafy greens,Rice,barley,bean sprouts boiled.",
      Dinner: "Durham flour chapathi,radish boiled,plum,apple juice,olives,mung beans,apples,pine nuts,Pinto beans,Thur dal,Ridge gourd, Mushrooms"
    }


  },
  kafhVath: {
    oil: ["cold or wood pressed Seseme oil",
      "cold or wood pressed SunFlower oil",
      "Ghee/Clarified Butter",
      "cold or wood pressed olive oil",
      "cold or wood pressed  Ground Nut oil"],

    0: {
      Breakfast: "Red clove tea,egg whites,apple juice.,Cereals with ginger and lime",
      Lunch: "Rice,chicken,fish,barley,goat meat,garlic,ginger,almonds cashews,apple juice,grape juice,honey",
      Dinner: "Durham flour in small quantity,bitter gourd,beans,leafy greens,ghee,fish,carrots,jaggery,kulfi,or ice cream."
    },
    1: {
      Breakfast: "Barley tea,oats,watermelon,pistachio nuts (in small quantities),Milk with cinnamon and Almond powder",
      Lunch: "Barley, rice,leafy green vegetables.,Rice,carrots,green beans,ghee,ginger",
      Dinner: "Lentiles,onion,mushroom,cooked tomatoes,leafy greens,garlic,apple juice,beans,Durham flor chapathi,carrots,cherries"
    },
    2: {
      Breakfast: "Cinnamon tea,millet,carrot,cherries,Apple,grape fruits, honey and ginger",
      Lunch: "millet,rice,cauliflower,garlic,green bean,kiwi,rice cakes,wheat,cucumber,sprouts boiled,apricots,buttermilk",
      Dinner: "Legumes,prickly pear,spinach,garlic,Buttermilk,Rice,turnip,strawberries,mung dhal,orange juice"
    },
    3: {
      Breakfast: "Ginger tea,pasta,tomato,guava,pine nuts,apricots (in small quantities), Fresh coriander juice,Slices of banana",
      Lunch: "Rice,barley,wheat,fish,chicken,cashews,orange,Rice,cabbage,sweet potato,urad-dal,buttermilk,",
      Dinner: "Mung beans,Ghee,goat milk, fresh paneer,beans.,Quinoa,fish,cucumber,plum,tur-dal,fibers,olives,carrot juice."
    },
    4: {
      Breakfast: "Lemon tea,green beans,Sprouts boiled,grapes.,guava juice,lime and cardamom,Apricots with cardamom",
      Lunch: "Rye rice,green beans,onion,spinach,chicken,walnuts,watermelon,buttermilk,sugarcane juice,ginger,basil.",
      Dinner: "Chicken,Egg white,ginger,leafy greens,saffron with milk,wheat flour dosa or chapathi,leafy greens,avocado."
    },
    5: {
      Breakfast: "Clove tea,pomegranate juice,almonds(soaked and peeled) mango lassi,Mashed sweet potato rice with ginger and pepper",
      Lunch: "Rice,bean sprouts boiled,leafy greens,walnuts, apple juice,Wheat,carrots,cherries,mung dal,buttermilk",
      Dinner: "Fish,Onions,Coriander,Peas,fish,ice cream,grapes,ghee,mango juice,cumine"
    },
    6: {
      Breakfast: "Lemon grass tea,Paneer burji,yoghurt(diluted with 2 parts of water). Sweet dessert of wheat and dry fruits",
      Lunch: "Rice,barley,leafy greens,bean sprouts boiled,duck,buttermilk,cabbage,sweet potato,urad Dal,coconut water",
      Dinner: "Pinto beans,Thur dal,cabbage, Mushrooms,olives,mung beans,apples,pine nuts,apple juice.,Durham flour chapathi"
    }
  },
  pithKafh: {
    oil: ["cold or wood pressed Seseme oil",
      "cold or wood pressed Mustard oil",
      "Ghee/Clarified Butter",
      "cold or wood pressed coconut oil",
      "cold or wood pressed SunFlower oil",
      "cold or wood pressed olive oil"],

    0: {
      Breakfast: "Quinoa and spices, milk/herbal tea, apple, cabbage, chicken, brocolli, berries, Red clove tea, egg whites, apple juice.",
      Lunch: "chicken, rice, egg whites, fresh water fish, Rice,chicken, fish, barley, meat.",
      Dinner: "Rice, wheat, asparagus, olives, peas, lemon juice. Durham flour in small quantity, leafy greens, bitter gourd, beans."
    },
    1: {
      Breakfast: "Cereal almond milk, herbal tea, watermelon, apple, brocolli, Barley tea, oats, banana, pistachio nuts(in small quantities)",
      Lunch: "rice(basmati), barley, cauliflower, wheat, yoghurt, ghee, leafy green vegetables, Barley, rice.",
      Dinner: "cabbage, spinach, potatoes, rice, cucumber, Lentiles, onion, mushroom, cooked tomatoes, leafy greens, garlic"
    },
    2: {
      Breakfast: "Oats and maple syrup, apple juice/herbal tea, strawberries, blueberries, cabbage., Cinnamon tea, millet, carrot, cherries",
      Lunch: "cabbage, cucumber, rice, green beans, peas, pumpkin, millet, rice, cauliflower, garlic,",
      Dinner: "apples, potatoes, rice, spinach, lemon juice, cherries, goat milk, Legumes, prickly pear, spinach, garlic."
    },
    3: {
      Breakfast: "Pancakes and honey, goat milk/herbal tea, melons, grapes, cucumber, pasta, tomato, guava, Ginger tea, pine nuts(in small quantities)",
      Lunch: "turdal,urad dal, rice, soyabeans, yoghurt, Rice, barley, wheat, fish, chicken",
      Dinner: "cool dairy drinks, goat milk, mango juice, Ghee, goat milk, lemon grass, rice, asparagus, Mung beans.fresh paneer, beans."
    },
    4: {
      Breakfast: "Pasta and brocolli, grape juice/herbal tea, green beans, pomegranates, berries, corn, Sprouts, grapes, Lemon tea.",
      Lunch: "mixed green vegetables, rice, yoghurt, cucumber, Rye rice, green beans, onion, spinach, chicken",
      Dinner: "Fresh fruit juice, fresh basil leaves, goat milk, rice, fresh water fish. Chicken, Egg white, ginger, leafy greens."
    },
    5: {
      Breakfast: "oats bran and honey,barley tea, avocado sweet potato, Clove tea, pomegranate juice, almonds(soaked and peeled)",
      Lunch: "grain tea, kidney beans rice, yoghurt, cucumber, Rice, bean sprouts, leafy greens.",
      Dinner: "Ghee, almonds, coconut, fresh cool dairy products, cow milk, cherries, spinach, Fish, Onions, Coriander, Peas"
    },
    6: {
      Breakfast: "Tapioca and spices(pepper), coconut milk, apricots, sprouts, Lemon grass tea, yoghurt(diluted with 2 parts of water).",
      Lunch: "wheat, paneer, rice, yoghurt, bean sprouts, duck, Rice, barley, leafy greens.",
      Dinner: "Asparagus, ghee, goat cheese, peas, potatoes, cucumber, watermelon, rice, spinach, Mushrooms, Pinto beans, Thur dal, Broccoli."
    }
  },
  kafhPith: {
    oil: ["cold or wood pressed Seseme oil",
      "cold or wood pressed Mustard oil",
      "Ghee/Clarified Butter",
      "cold or wood pressed  Ground Nut oil",
      "cold or wood pressed olive oil"],

    0: {
      Breakfast: "Red clove tea, egg whites, apple juice, cabbage, chicken, brocolli, berries, milk/herbal tea, Quinoa and spices.",
      Lunch: "Rice, chicken, fish, barley, meat. chicken, rice, egg whites, fresh water fish.",
      Dinner: "Durham flour in small quantity, leafy greens, bitter gourd, beans, lemon juice, asparagus, olives, Rice, wheat, peas."
    },
    1: {
      Breakfast: "Barley tea, oats, banana, watermelon, apple, pistachio nuts (in small quantities). Cereal almond milk, herbal tea, brocolli.",
      Lunch: "Barley, rice, leafy green vegetables, ghee, rice(basmati), barley, cauliflower, wheat, yoghurt.",
      Dinner: "Lentiles, onion, mushroom, cooked tomatoes, leafy greens, garlic, rice, cucumber, cabbage, spinach, potatoes"
    },
    2: {
      Breakfast: "Cinnamon tea, millet, carrot, cherries, cabbage, Oats and maple syrup, apple juice/herbal tea, strawberries, blueberries.",
      Lunch: "millet, rice, cauliflower, garlic, green bean, peas, cabbage, cucumber, rice, green beans, pumpkin.",
      Dinner: "Legumes, prickly pear, spinach, garlic, cherries, apples, potatoes, rice, spinach, lemon juice"
    },
    3: {
      Breakfast: "Ginger tea, pasta, tomato, guava, cucumber, pine nuts(in small quantities), melons, grapes, Pancakes and honey, goat milk/herbal tea.",
      Lunch: "Rice, barley, wheat, fish, chicken, tur dal, urad dal, rice, soyabeans, yoghurt",
      Dinner: "Mung beans, Ghee, goat milk, fresh paneerpaneer, beans. cool dairy drinks, goat milk, mango juice, asparagus, lemon grass, rice."
    },
    4: {
      Breakfast: "Lemon tea, green beans, Sprouts, grapes., Pasta and brocolli, grape juice/herbal tea, berries, corn, pomegranates.",
      Lunch: "Rye rice, green beans, onion, spinach, chicken, mixed green vegetables, rice, yoghurt, cucumber",
      Dinner: "Chicken, Egg white, ginger, leafy greens, fresh water fish, Fresh fruit juice, fresh basil leaves, goat milk, rice."
    },
    5: {
      Breakfast: "Clove tea, pomegranate juice, almonds(soaked and peeled), oats bran and honey, barley tea, avocado sweet potato",
      Lunch: "Rice, bean sprouts, leafy greens. grain tea, kidney beans rice, yoghurt, cucumber",
      Dinner: "Fish, Onions, Coriander, Peas, cow milk, cherries, spinach, Ghee, almonds, coconut, fresh cool dairy products."
    },
    6: {
      Breakfast: "Lemon grass tea, yoghurt(diluted with 2 parts of water)., Tapioca and spices(pepper), coconut milk,apricots,sprouts.",
      Lunch: "Rice, barley, leafy greens, bean sprouts, duck, wheat, paneer, rice, yoghurt.",
      Dinner: "Pinto beans, Thur dal, Broccoli, Mushrooms, spinach, Asparagus, ghee, goat cheese, peas, potatoes, rice, cucumber, watermelon."
    }
  },
  tri: {
    oil: ["cold or wood pressed SunFlower oil",
    "cold or wood pressed Seseme oil",
    "cold or wood pressed Mustard oil",
    "Ghee/Clarified Butter",
    "cold or wood pressed olive oil",
    "cold or wood pressed  Ground Nut oil",
    "cold or wood pressed coconut oil"],

    0: {
      Breakfast: "Cereals with ginger and lime,Red clove tea cabbage,chicken,brocolli,berries,apple juice ,egg whites,apple fruit.",
      Lunch: "Strawberry,tur dal,buttermilk,barley,goat meat.Pasta oats,sweet potato,apples,jaggery egg whites,fresh water fish.Rice,chicken.",
      Dinner: "Rice,cucumber,bananas,beans,bitter gourd, ghee,fish,carrots,jaggery,kulfi or ice cream, wheat,asparagus,olives,peas,sariva juice, Durham flour in small quantity,leafy greens."
    },
    1: {
      Breakfast: "Rice or wheat Kichidi,oats,banana, Milk with cinnamon and Almond powder watermelon,apple,brocolli,Barley tea ,pistachio nuts (in small quantities).",
      Lunch: "Rice,carrots,green beans,ghee,ginger rice(basmati),barley,cauliflower,wheat yoghurt,Barley, rice,leafy green vegetables.",
      Dinner: "Durham flor chapathi,carrots,cherries, beans,apple juice,jaggery,cabbage,onion ,spinach,potatoes,rice,cucumber,Lentiles, cooked tomatoes,garlic,leafy greens."
    },
    2: {
      Breakfast: "Oats and maple syrup,apple juice/herbal tea sariva juice, orange juice,millet,Apple,grape fruits honey and ginger,carrot,blueberries,cherries strawberries,cabbage.",
      Lunch: "rice cakes,wheat,cucumber,sprouts boiled,garlic apricots,kiwi,buttermilk,peas,pumpkin, cabbage,green beans,millet,rice,cauliflower.",
      Dinner: "Rice,turnip,strawberries,mung dhal, Buttermilk,soyasauce,orange juice,prickly pear, apples,potatoes,spinach,lemon juice,cherries, goat milk,Legumes,garlic."
    },
    3: {
      Breakfast: "Rice soup with ghee and ginger,cucumber,guava, Slices of banana,Fresh coriander juice,grapes,pasta, Pancakes with honey,goat milk/herbal tea,melons ,tomato,pine nuts(in small quantities)",
      Lunch: "Rice,cabbage,sweet potato,urad-dal,barley, orange,buttermilk,cashews,coconut,fish,chicken turdal,soyabeans,yoghurt,wheat.",
      Dinner: "Quinoa,fish,cucumber,plum,tur-dal,lemon grass fibers,olives,carrot juice,Ghee,Mung beans,rice cool dairy drinks,mango juice,goat milk, fresh paneer, ,asparagus."
    },
    4: {
      Breakfast: "Hot cereals with soaked oatsand ghee,berries, corn, Apricots with cardamom,pomegranates,Sprouts boiled, Banana juice,Lemon tea,green beans, Pasta and brocolli,grape juice/herbal tea.",
      Lunch: "Rice,cucumber,watermelon,buttermilk,spinach,chicken walnuts,ginger,basil,sugarcane juice,onion,green beans Rye rice,mixed green vegetables,yoghurt,cucumber.",
      Dinner: "wheat flour dosa or chapathi,leafy greens,ginger. avocado,cow milk,beans,saffron with milk Fresh fruit juice,fresh basil leaves,goat milk, rice, fresh water fish,Chicken,Egg white."
    },
    5: {
      Breakfast: "Mashed sweet potato rice with ginger and pepper,mango lassi warm water with pepper and jeera,avocado,Clove tea, oats bran and honey,barley tea,pomegranate juice, almonds(soaked and peeled)",
      Lunch: "Wheat,carrots,cherries,mung dal,buttermilk,leafy greens. walnuts,peanut, apple juice, honey,bean sprouts boiled,Rice, grain tea,kidney beans rice,yoghurt,cucumber",
      Dinner: "seitan,corn,grapes,ghee,mango juice,cumine fish,ice cream,Ghee,almonds,coconut,fresh cool dairy products cow milk,cherries,spinach,Coriander,Peas,Fish,Onions."
    },
    6: {
      Breakfast: "Paneer burji,Sweet dessert of wheat and dry fruits Tapioca and spices(pepper),coconut milk,apricots, sprouts boiled,Lemon grass tea, yoghurt(diluted with 2 parts of water).",
      Lunch: "Rice,cabbage,sweet potato,urad Dal,leafy greens, orange,buttermilk,cashews,coconut water,barley, wheat,paneer,rice,yoghurt,bean sprouts boiled,duck",
      Dinner: "Durham flour chapathi,radish boiled,plum,apple juice,Thur dal, olives,mung beans,apples,pine nuts,Bottle gourd, peas Asparagus,ghee,goat cheese,potatoes,Pinto beans cucumber,watermelon,rice,spinach,Mushrooms"
    }
  },
  Oil: {
    0: "Kachchi Ghanni tel",
    1: "Mustard Oil",
    2: "Coconut Oil",
    3: "Sesame Oil",
    4: "Ground Nut Oil",
    5: "Olive Oil",
    6: "Ghee/Clarified Butter"
  }
  // vathPith: {
  //   0: {
  //     Breakfast: "",
  //     Lunch: "",
  //     Dinner: ""
  //   },
  //   1: {
  //     Breakfast: "",
  //     Lunch: "",
  //     Dinner: ""
  //   },
  //   2: {
  //     Breakfast: "",
  //     Lunch: "",
  //     Dinner: ""
  //   },
  //   3: {
  //     Breakfast: "",
  //     Lunch: "",
  //     Dinner: ""
  //   },
  //   4: {
  //     Breakfast: "",
  //     Lunch: "",
  //     Dinner: ""
  //   },
  //   5: {
  //     Breakfast: "",
  //     Lunch: "",
  //     Dinner: ""
  //   },
  //   6: {
  //     Breakfast: "",
  //     Lunch: "",
  //     Dinner: ""
  //   }
  // }

}

var doshaIs = 0;
userResponseSkelaton = Array(quiz.questions.length).fill(null);

var app = new Vue({
  el: "#app",
  data: {
    quiz: quiz,
    foodData: foodData,
    doshaMode: true,
    questionIndex: 0,
    userResponses: userResponseSkelaton,
    isActive: false,
    vath: 0,
    Vatha: false,
    pith: 0,
    Pitta: false,
    kafh: 0,
    Kapha: false,
    VathaPitta: false,
    PittaVatha: false,
    VathaKapha: false,
    KaphaVatha: false,
    PittaKapha: false,
    KaphaPitta: false,
    Tri: false,
    probStats: 0,
    result: ""
  },

  filters: {
    charIndex: function (i) {
      return String.fromCharCode(97 + i);
    }
  },

  methods: {
    // restart: function () {
    //   this.questionIndex = 0;
    //   this.userResponses = Array(this.quiz.questions.length).fill(null);
    // },
    dietMode: function () {
      this.doshaMode = false;
      this.questionIndex = 0;
      console.log("See diet pressed");
    },

    selectOption: function (index) {
      Vue.set(this.userResponses, this.questionIndex, index);
      //console.log(this.userResponses);
      console.log(this.userResponses)
    },
    next: function () {
      if (this.questionIndex < this.quiz.questions.length) {
        this.questionIndex += 1;
      }

      // for (let i = 1; i < (this.userResponses.length); i++) {
      //   if (this.quiz.questions[i].responses[this.userResponses[0]].vath) {
      //     this.vath = this.vath + 1;
      //     // console.log("1st if");
      //   }
      //   else if (this.quiz.questions[i].responses[this.userResponses[0]].pith) {
      //     this.pith = this.pith + 1;
      //     // console.log("1st if");
      //   }
      //   else if (this.quiz.questions[i].responses[this.userResponses[0]].kafh) {
      //     this.kafh = this.kafh + 1;
      //     // console.log("1st if");
      //   }
      // }


      if (this.quiz.questions.length == this.questionIndex) {
        this.score();
        // probStats();
      }


      console.log("Next pressed")
    },

    prev: function () {
      if (this.quiz.questions.length > 0) this.questionIndex--;
    },
    // Return "true" count in userResponses
    score: function () {
      console.log("Score() ran");
      this.vath = 0;
      this.pith = 0;
      this.kafh = 0;
      // var score = 0;

      for (let j = 0; j < this.userResponses.length; j++) {
        if (this.userResponses[j] == 0) {
          this.vath = this.vath + 1;
          console.log(this.vath)
          // console.log("1st if");
        }
        else if (this.userResponses[j] == 1) {
          this.pith = this.pith + 1;
          // console.log("1st if");
        }
        else if (this.userResponses[j] == 2) {
          this.kafh = this.kafh + 1;
          // console.log("1st if");
        }
      }

      this.vath = ((this.vath / this.quiz.questions.length) * 100);
      this.pith = ((this.pith / this.quiz.questions.length) * 100);
      this.kafh = ((this.kafh / this.quiz.questions.length) * 100);
      console.log(this.vath)
      console.log(this.pith)
      console.log(this.kafh)
      if (this.vath >= this.kafh && this.vath >= this.pith && this.vath > 75) {
        this.result = "You belong to Dwandwaja Vata";
        this.doshaIs = 1;
        this.Vatha = true;
        // console.log("1st if inside");
      }
      else if ((this.pith >= this.vath) && (this.pith >= this.kafh) && (this.pith > 75)) {
        this.result = "You belong to Dwandwaja Pitta";
        this.doshaIs = 2;
        this.Pitta = true;
      }
      else if ((this.kafh >= this.vath) && (this.kafh >= this.pith) && (this.kafh > 75)) {
        this.result = "You belong to Dwandwaja Kapha";
        this.doshaIs = 3;
        this.Kapha = true;
      }
      else if ((this.vath > 31) && (this.pith > 31) && (this.kafh > 31)) {
        this.result = "You belong to Ekadoshaja Prakruti (Tri-Dosha)";
        this.doshaIs = 4;
        this.Tri = true;
      }
      else if (((this.vath + this.pith) > 70) && (this.vath > 30) && (this.pith > 30) && (this.vath > this.kafh) && (this.pith > this.kafh)) {
        console.log("Inside vath pith condition");
        if (this.vath > this.pith) {
          this.result = "You belong to Dwidoshaja Vata-Pitta";
          this.doshaIs = 1;
          this.VathaPitta = true;
        }
        else {
          this.result = "You belong to Dwidoshaja Pitta-Vata";
          this.doshaIs = 2;
          this.PittaVatha = true;
        }

      }
      else if (((this.kafh + this.pith) > 70) && (this.kafh > 30) && (this.pith > 30) && (this.kafh >= this.vath) && (this.pith >= this.vath)) {
        if (this.pith > this.kafh) {
          this.result = "You belong to Dwidoshaja Pitta-Kapha";
          this.doshaIs = 2;
          this.PittaKapha = true;
        }
        else {
          this.result = "You belong to Dwidoshaja Kapha-Pitta";
          this.doshaIs = 3;
          this.KaphaPitta = true;
        }

      }
      else if (((this.vath + this.kafh) > 70) && (this.vath > 30) && (this.kafh > 30) && (this.vath >= this.pith) && (this.kafh >= this.pith)) {
        if (this.kafh > this.vath) {
          this.result = "You belong to Dwidoshaja Kapha-Vata";
          this.doshaIs = 3;
          this.KaphaVatha = true;
        }
        else {
          this.result = "You belong to Dwidoshaja Vata-Kapha";
          this.doshaIs = 1;
          this.VathaKapha = true;
        }

      }
      this.probStats = String("Vata: " + this.vath.toFixed(2) + "," + "Kapha: " + this.kafh.toFixed(2) + "," + "Pitta: " + this.pith.toFixed(2));
      // console.log(this.probStats);

      return this.result;

      //return this.userResponses.filter(function(val) { return val }).length;
    },

    // probStats: function () {
    //   return this.probStats;
    // },
  }
});