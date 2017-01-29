export var data = {

  soirees : [
  {
    title : "Soirée Bowling",
    pic : "images/bowling.jpg",
    date : "",
    hour : "",
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
    date : "",
    hour : "",
    todos :[
      {text:"Lunette 3D",status:"fait", user:{name : "Tux", avatar : "images/tux.png"}},
      {text:"Place cineday",status:" à faire",user:{name : "Tux", avatar : "images/tux.png"}},
    ],

    messages : [
		{idUser: 0, message: "Wesh"},
		{idUser: 1, message: "Salut"},
		{idUser: 0, message: "Tu bouge ?"},
		{idUser: 1, message: "Non je code"},
		{idUser: 2, message: "Moi aussi je rush"},
	],
    cursor : {}
  },

  {
    title : "Soirée Raclette",
    pic : "images/raclette.jpg",
    date : "",
    hour : "",
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
    ],
	messages : [
		{idUser: 0, message: "Wesh"},
		{idUser: 1, message: "Salut"},
		{idUser: 0, message: "Tu bouge ?"},
		{idUser: 1, message: "Non je code"},
		{idUser: 2, message: "Moi aussi je rush"},
	],
  },

   currentUser : {
    name : "Tux",
    avatar : "images/tux.png"
  },

  currentIdUser: 0,

  Users : [
	{firstname: "David", lastname: "Langin", avatar: "images/tux.png"},
	{firstname: "Corentin", lastname: "Bigot", avatar: "images/tux.png"},
	{firstname: "Romain", lastname: "Marechal", avatar: "images/tux.png"},
  ],

  currentIndex : 0

}
