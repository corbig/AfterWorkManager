export var data = {

  soirees : [
  {
    title : "Soirée Bowling",
    pic : "images/bowling.jpg",
    subtitle : "",
    todos :[
      {text:"Réserver au Silver bowling",status:" a fait", user:{name : "Tux", avatar : "images/tux.png"}}
    ],

    messages : [],
    cursor : {}
  },

  {
    title : "Soirée Cinema",
    pic : "images/fantasticbeast.jpg",
    subtitle : "Les Animaux Fantastiques",
    todos :[
      {text:"Lunette 3D",status:"fait", user:{name : "Tux", avatar : "images/tux.png"}},
      {text:"Place cineday",status:" à faire",user:{name : "Tux", avatar : "images/tux.png"}},
    ],

    messages : [],
    cursor : {}
  },

  {
    title : "Soirée Raclette",
    pic : "images/raclette.jpg",
    subtitle : "",
    todos :[
      {text:"Acheter fromage",status:"fait", user:{name : "Tux", avatar : "images/tux.png"}},
      {text:"Acheter pommes de terre",status:" à faire",user:{name : "Tux", avatar : "images/tux.png"}},

    ],

    messages : [],
    cursor : {}
  }

  ],
   currentSoiree : {
    todos :[
      {text:"Lunette 3D",status:"fait", user:{name : "Tux", avatar : "images/tux.png"}},
      {text:"Place cineday",status:" à faire",user:{name : "Tux", avatar : "images/tux.png"}},
    ]
  },

   currentUser : {
    name : "Tux",
    avatar : "images/tux.png"
  },

  currentIndex : 0

}
