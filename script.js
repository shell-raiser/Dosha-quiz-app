var quiz = {
  questions: [
    {
      text: "How is your Body Build?",
      responses: [
        { text: "Thin,Bony and small frammed, I hardly gain weight."},
        { text: "Medium Built, I Can gain or lose weight easily."},
        { text: "Large Built, I Gain weight easily but difficult to lose"}]
    },



    {
      text: "How do you Walk and Talk?",
      responses: [
      { text: "Fast Walking and Talking.", vath: true },
      { text: "Moderate Talk and Determined Walk", pith: true  },
      { text: "Slow Talk and Steady Walk. ", kafh: true  }] },


    {
      text: "Which Weather you Like, or Very comfortable for you?",
      responses: [
      { text: "Enjoy warm climate but feel uncomfortable in cool weather. ", vath: true  },
      { text: "Enjoy cool weather and don't like warm climate. ", pith: true  },
      { text: "Comfortable for most of the year, but prefer Summer and Spring, Don't like Slightly wet climate. ",kafh: true }] },
    {
      text: "4. How often do you Sweat?",
      responses: [
      { text: "Sweat little but not much and have medium odour. ", vath: true  },
      { text: "Sweat a lot and have strong odour. ", pith: true  },
      { text: "Sweat moderately, but sweat a lot when working hard and have minimum odour. ",kafh: true }] },

    {
      text: "5. What is your Skin Type",
      responses: [
      { text: "Normal to dry, rough, thin and cool, with skin issues like dryness, dullness and wrinkly. ", vath: true  },
      { text: "Normal to moist, soft, reddish, sensitive and warm, with skin issues like inflammation. ", pith: true  },
      { text: "Normal to oily, soft, thick and cool, with skin issues like excessive oily, itching, fungal infections. ",kafh: true }] },


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
    { text: "Have thin lips that tend to get dry. ", vath: true  },
    { text: "Have medium sized soft lips, Upper lip is slightly darker than lower lip. ", pith: true  },
    { text: "Large and Smooth Lips. ",kafh: true }] },


    {
    text: "Tell us about your Eyes?",
    responses: [
    { text: "Small in size, Feels dry and sleepy eyes often, I blink a lot. ", vath: true  },
    { text: "Medium in size, I often get reddish eyes. ", pith: true  },
    { text: "Big and Attractive, I have thick eye lashes. ",kafh: true }] },


    {
    text: "How often do you hear cracking sounds from your bones?",
    responses: [
    { text: "Noise on movements. ", vath: true  },
    { text: "Nothing specific. ", pith: true  },
    { text: "Strong Joints. ",kafh: true }] },



    {
    text: "How do you feel after some physical activity?",
    responses: [
    { text: "Very Active. ", vath: true  },
    { text: "Moderate. ", pith: true  },
    { text: "I will become Slow. ",kafh: true }] },


    {
    text: "Tell us about your Nails.",
    responses: [
    { text: "I have blackish, thin and cracking nails. ", vath: true  },
    { text: "I have Reddish, soft and Flat nails. ", pith: true  },
    { text: "I have white, thick and convex nails. ",kafh: true }] },


    {
    text: "Tell us about your Teeth.",
    responses: [
    { text: "Teeth are somewhat pale and uneven. ", vath: true  },
    { text: "Teeth are Yellowish and medium sized, but I tend to suffer from cavities. ", pith: true  },
    { text: "Teeth are well formed and aligned and Require less care in general. ",kafh: true }] },



    {
    text: "Tell us about your Tongue.",
    responses: [
    { text: "Tongue is Rough and dry. ", vath: true  },
    { text: "Tongue is Glossy and Red. ", pith: true  },
    { text: "Tongue in Smooth and Pink. ",kafh: true }] },



    {
    text: "Tell us about your Forehead.",
    responses: [
    { text: "I have narrow sized Forehead. ", vath: true  },
    { text: "I have medium sized Forehead. ", pith: true  },
    { text: "I have broad Forehead. ",kafh: true }] },




    {
    text: " What is your Thirst Level?",
    responses: [
    { text: "Medium Thirst ", vath: true  },
    { text: "Maximum Thirst. ", pith: true  },
    { text: "Minimum Thirst. ",kafh: true }] },



    {
    text: "What is your Normal Body temperature?",
    responses: [
    { text: "Normally, I have Warm Body Temperature. ", vath: true  },
    { text: "Normally, I have Hot Body Temperature. ", pith: true  },
    { text: "Normally, I have cold Body Temperature. ",kafh: true }] },



    {
    text: "How is your Memory Power?",
    responses: [
    { text: "Quick to learn but quickly to forget, short term memory is good. ", vath: true  },
    { text: "Average speed of learning, but once learnt never forget. ", pith: true  },
    { text: "Slow to learn but remembers for a long time, long term memory is good. ",kafh: true }] },



    {
    text: "What is the Nature of your Mind?",
    responses: [
    { text: "Mind tends to get restless easily. ", vath: true  },
    { text: "Mind gets impatient or aggressive easily. ", pith: true  },
    { text: "Mind remain cool and calm, mostly undisturbed. ",kafh: true }] },



    {
    text: " How good your mind is in taking Action?",
    responses: [
    { text: "Over thinking a lot before taking decision. ", vath: true  },
    { text: "Quick Implementation. ", pith: true  },
    { text: "Lazy in Implementation, Has a tendency to Procrastinate. ",kafh: true }] },



    {
    text: "How is the quality of your Sleep?",
    responses: [
    { text: "Light and Disturbed sleep, I wake up easily in the morning. ", vath: true  },
    { text: "Moderate but regular, I can go back to sleep easily. ", pith: true  },
    { text: "Deep and Heavy, I can't easily wake up in morning. ",kafh: true }] },


    {
    text: "What is your Emotional Nature?",
    responses: [
    { text: "I worry a lot, often feel nervous and anxious. ", vath: true  },
    { text: "I often get irritated, angry and impatient. ", pith: true  },
    { text: "Loving and Caring, It takes a lot to make me angry. ",kafh: true }] },

    {
    text: " How is your Speech and Voice?",
    responses: [
    { text: "Talkatvie/Fast, Irrelevant speech and in Normal voice. ", vath: true  },
    { text: "Moderate, clear and Louder voice. ", pith: true  },
    { text: "Slow, Gentle and in Sweet voice. ",kafh: true }] },

    {
    text: "How is your Appetite or Hunger?",
    responses: [
    { text: "Irregular, sometimes I feel hungry, sometimes I don't. ", vath: true  },
    { text: "Strong and sharp, I Always feel hungry. ", pith: true  },
    { text: "Decent Appetite or Hunger, Have tendency to eat for comfort and taste. ",kafh: true }] },

    {
    text: "How much is your capacity to Intake or Ingest food?",
    responses: [
    { text: "Unpredictable. ", vath: true  },
    { text: "Could Ingest or Intake more food. ", pith: true  },
    { text: "Moderate. ",kafh: true }] },

    {
    text: "How easily can you Digest Food?",
    responses: [
    { text: "Unpredictable. ", vath: true  },
    { text: "Can digest Excess food. ", pith: true  },
    { text: "Moderate/Low. ",kafh: true }] },

    {
    text: "What kind of food you like to eat more?",
    responses: [
    { text: "Prefer sweet, sour, salty & oily. I like Hot food and I eat more. ", vath: true  },
    { text: "Prefer bitter, astringent. I like cold/warm food and eat more. ", pith: true  },
    { text: "Like Spicy, bitter, sweet , astringent. I like hot food and Eat slowly. ",kafh: true }] },

    {
    text: "What are the properties of your urine?",
    responses: [
    { text: "Pale yellow, less quantity & passed with efforts and sound. In past 24 hrs, I have passed Medium amount of urine. ", vath: true  },
    { text: "Yellow/red color, Hot and burning sensation. In past 24 hrs, I have passed Maximum amount of urine. ", pith: true  },
    { text: "Milky in color, Less in quantity with lot of foam/froth. In past 24 hrs, I have passed Minimum amount of urine. ",kafh: true }] },

    {
    text: "What are the properties of your stool?",
    responses: [
    { text: "Hard constipated. In past 24 hrs, one/none Dark stool. ", vath: true  },
    { text: "Soft, loose and unformed. In past 24 hrs, two/more yellowish stool. ", pith: true  },
    { text: "Semi solid & well formed. In past 24 hrs, two/more Pale stool. ",kafh: true }] }
  ]
}

let dateObj = new Date();
var foodData = {
    kafh: {
        0: {
            Breakfast: "Barley tea, oats,  Banana,pistachio nuts( in small quantities)",
            Lunch: "barley, rice, leafy green vegetables,",
            Dinner: "Durham flour in small quantity, leafy greens,bitter gourd,beans"
        },
        1: {
            Breakfast: "Cinnamon tea, millet,  carrot, cherris",
            Lunch: "millet, rice, cauliflower ,garlic, green beans, ",
            Dinner: "Lentiles,onion,mushroom,cooked tomatoes,leafy greens,garlic,oils"
        },
        2: {
            Breakfast: "Ginger tea, Pasta, Tamato, Guava, Pine nuts( in small quantities) ",
            Lunch: "rice, barley, wheat, fish, chicken ",
            Dinner: "Legumes,prickly pear,spinach,garlic."
        },
        3: {
            Breakfast: "Lemon tea, green beans, Sprouts, Grapes",
            Lunch: "rye, rice, green beans, onion, spinach,   ,chicken ,",
            Dinner: "Mung beans,Ghee,goat milk,fresh paneer,beans."
        },
        4: {
            Breakfast: "Clove tea, pomegranate juice, Alomnds(soaked+ peeled",
            Lunch: "rice, bean sprouts, leafy greens,",
            Dinner: "Chicken,Egg white,ginger,leafy greens."
        },
        5: {
            Breakfast: "Lemon grass tea, yogurt(diluted with 2parts of water) ",
            Lunch: "rice, barley, leafy greens, bean sprouts ,duck, ",
            Dinner: "Fish,Onions,Coriander,Peas"
        },
        6: {
            Breakfast: "Red clove tea, egg whites, pineapple juice ",
            Lunch: "rice, chicken, fish, barley, meat",
            Dinner: "Pinto beans,Thur dal,Broccoli, Mushrooms"
        }
    },
    vath: {
        0: {
            Breakfast: " Rice Or wheat kichidi , soup of green gram, Milk with Cinnamon and Almond powder",
            Lunch: "rice ,carrots, green beans, coconut, ghee, ginger ",
            Dinner: "Durham flour chapati,carrots ,cherries, Beans,apple juice, Jaggery "

        },
        1: {
            Breakfast: "Green and fresh herb frittata, lemon, orange...juice, Apple, grape fruits with honey  and ginger",
            Lunch: "rice cakes, wheat, cucumber, sprouts, apricots, kiwi, buttermilk ",
            Dinner: "Rice, Turnip,strawberries, mung dhal, Buttermilk, soyasauce,orrange juice (sweet)"
        },
        2: {
            Breakfast: "Rice soup with ghee and ginger, slices of Banana ,lemon juice, fresh coriander juice",
            Lunch: "rice, cabbage, sweet potato, orange, urad Dal, buttermilk, cashews, coconut, ",
            Dinner: "Quinoa,fish, cucumber, plum,tur dal ,fiberts, olives, carrot juice "
        },
        3: {
            Breakfast: "Hot cereals with soaked oatsand ghee, Apricots with cardamom, Banana , juice with kale, lime and cardamom",
            Lunch: "rice, cabbage, sweet potato, orange, urad Dal, buttermilk, cashews, coconut, ",
            Dinner: "wheat flour dosa or chapati ,Leafy greens , avocado, cow milk,Beans,saffron with milk"
        },
        4: {
            Breakfast: "mashed sweet potato rice  + Ginger+ pepper,mango lassi, warm water with pepper and jeera",
            Lunch: "wheat, carrots, cherries, mung Dal, buttermilk, walnuts, peanut apple juice honey ",
            Dinner: "seitan,corn,grapes,ghee,mango juice, cumine,fish,ice cream "
        },
        5: {
            Breakfast: "paneer burji, sweet dessert of wheat and dry fruits",
            Lunch: "rice, cucumber, banana, buttermilk, walnuts, chai, ginger, basil, sugarcane juice ",
            Dinner: "Durham flour chapati, radish, plum,olives, mung beans,apples,pine nuts,apple juice, "
        },
        6: {
            Breakfast: "Pasta +ghee, cereals with ginger and lime",
            Lunch: "pasta oats, sweet potato, apples, strawberry, tur Dal, buttermilk, almonds cashews, apple juice grape juice,garlic,ginger,honey jaggery",
            Dinner: "Rice ,cucumber, bananas, Beans,ghee,fish,carrots, Jaggery, kulfi or ice cream "
        }
    },
    pith: {
        0: {
            Breakfast: "Cereal, Almond milk, Herbal tea, water melon, Apple, brocolli",
            Lunch: "rice(basmati) ,barley ,cauliflower ,wheat, yoghurt ,ghee",
            Dinner: "Rice, wheat, asparagus, Alives,peas, lemon juice"

        },
        1: {
            Breakfast: "Oats + maple syrup, Apple juice/ Herbal tea, strawberries , blueberries, cabbage",
            Lunch: "cabbage, cucumber , rice,green beans, peas, pumpkin ",
            Dinner: "Cabbage, spinach, potatoes, rice, cucumber "
        },
        2: {
            Breakfast: "Pancakes + Honey, Goat milk/ herbal tea, melons, grapes, cucumber",
            Lunch: "tur dal ,urad dal,rice,soy beans , yoghurt ",
            Dinner: "apples,potatoes,rice,spinach,lemon juice,cherries,goat milk"
        },
        3: {
            Breakfast: "Pasta + brocolli, Grape juice / herbal tea, pomegranates, berries, corn",
            Lunch: "mixed green vegetables rice, yoghurt, cucumber ",
            Dinner: "cool dairy drinks,goat milk,mango juice ,lemon grass,rice,asparagus"
        },
        4: {
            Breakfast: "oats bran + honey, Barley tea, Avocado, sweet potato",
            Lunch: "grain teas, kidney beans,rice, yoghurt, cucumber ,",
            Dinner: "Fresh fruit juices, fresh basil leaves, goat milk, olive oil, rice, fresh water fish"
        },
        5: {
            Breakfast: "Tapioca + spices ( pepper etc;), coconut milk, Apricots , sprouts",
            Lunch: " wheat ,paneer, rice, ,yoghurt ",
            Dinner: "Ghee, almonds, coconut, fresh cool dairy products, cows milk, cherries, spinach, cherries "
        },
        6: {
            Breakfast: "Quinoa + spices, milk/ Herbal tea, cabbage , chiken, brocolli, berries , Apple",
            Lunch: "chicken,rice,egg whites , fresh water fish",
            Dinner: "Asparagus, ghee, goat cheese, peas, potatoes, cucumber, watermelon, rice, spinach, asparagus "
        }
    }

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
    dietMode: function(){
      this.doshaMode = false;

    },

    selectOption: function (index) {
      Vue.set(this.userResponses, this.questionIndex, index);
      //console.log(this.userResponses);
      console.log(this.userResponses)
    },
    next: function () {
      if (this.questionIndex < this.quiz.questions.length){
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


      if (this.quiz.questions.length == this.questionIndex){
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

      for (let j=0; j<this.userResponses.length; j++){
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
      if (this.vath >= this.kafh && this.vath >= this.pith && this.vath > 80) {
        this.result = "You belong to Dwandwaja Vata";
        this.doshaIs = 1;
        // console.log("1st if inside");
      }
      else if (this.pith >= this.vath && this.pith >= this.kafh && this.pith > 80) {
        this.result = "You belong to Dwandwaja Pitta";
        this.doshaIs = 2;
      }
      else if (this.kafh >= this.vath && this.kafh >= this.pith && this.kafh > 80) {
        this.result = "You belong to Dwandwaja Kapha";
        this.doshaIs = 3;
      }
      else if (this.vath > 31 && this.pith > 31 && this.kafh > 31) {
        this.result = "You belong to Ekadoshaja Prakruti (Tri-Dosha)";
        this.doshaIs = 4;
      }
      else if (this.vath + this.pith > 70 && this.vath, this.pith > 30 && this.vath, this.pith > this.kafh) {
        if (this.vath > this.pith){
          this.result = "You belong to Dwidoshaja Vata-Pitta";
          this.doshaIs = 1;
        }
        else{
          this.result = "You belong to Dwidoshaja Pitta-Vata";
          this.doshaIs = 2;
        }
        
      }
      else if (this.kafh + this.pith > 70 && this.kafh, this.pith > 30 && this.kafh, this.pith > this.vath) {
        if (this.pith > this.kafh){
          this.result = "You belong to Dwidoshaja Pitta-Kapha";
          this.doshaIs = 2;
        }
        else{
          this.result = "You belong to Dwidoshaja Kapha-Pitta";
          this.doshaIs = 3;
        }
        
      }
      else if (this.vath + this.kafh > 70 && this.vath, this.kafh > 30 && this.vath, this.kafh > this.pith) {
        if (this.kafh > this.vath){
          this.result = "You belong to Dwidoshaja Kapha-Vata";
          this.doshaIs = 3;
        }
        else{
          this.result = "You belong to Dwidoshaja Vata-Kapha";
          this.doshaIs = 1;
        }
        
      }
      this.probStats = String("Vata: " + this.vath + "," + "Kapha: " + this.kafh + "," + "Pitta: " + this.pith);
      // console.log(this.probStats);
      
      return this.result;

      //return this.userResponses.filter(function(val) { return val }).length;
    },

    // probStats: function () {
    //   return this.probStats;
    // },
  }
});