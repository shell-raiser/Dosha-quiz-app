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




userResponseSkelaton = Array(quiz.questions.length).fill(null);

var app = new Vue({
  el: "#app",
  data: {
    quiz: quiz,
    questionIndex: 0,
    userResponses: userResponseSkelaton,
    isActive: false,
    vath: 0,
    pith: 0,
    kafh: 0,
    probStats: 0,
    result: ""
  },

  filters: {
    charIndex: function (i) {
      return String.fromCharCode(97 + i);
    }
  },

  methods: {
    restart: function () {
      this.questionIndex = 0;
      this.userResponses = Array(this.quiz.questions.length).fill(null);
    },
    selectOption: function (index) {
      Vue.set(this.userResponses, this.questionIndex, index);
      //console.log(this.userResponses);
    },
    next: function () {
      if (this.questionIndex < this.quiz.questions.length){
        this.questionIndex += 1;
      }
      

      console.log("Next pressed")
    },

    prev: function () {
      if (this.quiz.questions.length > 0) this.questionIndex--;
    },
    // Return "true" count in userResponses
    score: function () {
      console.log("Score() ran")
      
      // var score = 0;
      for (let j=0; j<this.quiz.questions.length; j++){
        for (let i = 0; i < this.userResponses.length; i++) {
          if (this.quiz.questions[i].responses[this.userResponses[i]].vath) {
            this.vath = this.vath + 1;
            console.log("1st if");
          }
          else if (this.quiz.questions[i].responses[this.userResponses[i]].pith) {
            this.pith = this.pith + 1;
            console.log("1st if");
          }
          else if (this.quiz.questions[i].responses[this.userResponses[i]].kafh) {
            this.kafh = this.kafh + 1;
            console.log("1st if");
          }
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
        console.log("1st if inside");
      }
      else if (this.pith >= this.vath && this.pith >= this.kafh && this.pith > 80) {
        this.result = "You belong to Dwandwaja Pitta";
      }
      else if (this.kafh >= this.vath && this.kafh >= this.pith && this.kafh > 80) {
        this.result = "You belong to Dwandwaja Kapha";
      }
      else if (this.vath > 31 && this.pith > 31 && this.kafh > 31) {
        this.result = "You belong to Ekadoshaja Prakruti (Tri-Dosha)";
      }
      else if (this.vath + this.pith > 70 && this.vath, this.pith > 30 && this.vath, this.pith > this.kafh) {
        this.result = "You belong to Dwidoshaja Vata-Pitta";
      }
      else if (this.kafh + this.pith > 70 && this.kafh, this.pith > 30 && this.kafh, this.pith > this.vath) {
        this.result = "You belong to Dwidoshaja Pitta-Kapha";
      }
      else if (this.vath + this.kafh > 70 && this.vath, this.kafh > 30 && this.vath, this.kafh > this.pith) {
        this.result = "You belong to Dwidoshaja Kapha-Vata";
      }
      this.probStats = String("Vata: " + this.vath + "," + "Kapha: " + this.kafh + "," + "Pitta: " + this.pith);
      console.log(this.probStats);
      
      return this.result;

      //return this.userResponses.filter(function(val) { return val }).length;
    },
    probStats: function () {
      return this.probStats;
    }
  }
});