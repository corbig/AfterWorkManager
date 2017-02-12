

export var data = {
  sondage : [
    {
      title: "Qui vient ?",
      options: [
        {id:0, text:"Moi Moi", checked: false},
        {id:1, text:"Non j'ai piscine", checked: false},
        {id:2, text:"Non", checked: false},
      ],
      res : [
        {id:0, nb:4, users:[0,1,2,3]},
        {id:1, nb:2, users:[3,8]},
        {id:2, nb:1, users:[5]}
      ],
      displaySondage : true
    },
    {
      title: "Qui vient ?",
      options: [
        {id:0, text:"Moi Moi", checked: false},
        {id:1, text:"Non j'ai piscine", checked: false},
        {id:2, text:"Non", checked: false},
      ],
      res : [
        {id:0, nb:4, users:[5,6,4,1]},
        {id:1, nb:2, users:[1,2]},
        {id:2, nb:1, users:[2]}
      ],
      displaySondage : true
    },
    {
      title: "Qui vient ?",
      options: [
        {id:0, text:"Moi Moi", checked: false},
        {id:1, text:"Non j'ai piscine", checked: false},
        {id:2, text:"Non", checked: false},
      ],
      res : [
        {id:0, nb:4, users:[0,8,7,5]},
        {id:1, nb:2, users:[0,5]},
        {id:2, nb:1, users:[4]}
      ],
      displaySondage : true,
    },
    {
      title: "Qui vient ?",
      options: [
        {id:0, text:"Moi Moi", checked: false},
        {id:1, text:"Non j'ai piscine", checked: false},
        {id:2, text:"Non", checked: false},
      ],
      res : [
        {id:0, nb:4, users:[8,1,3,4]},
        {id:1, nb:2, users:[7,6]},
        {id:2, nb:1, users:[5]}
      ],
      displaySondage : true,
    }
  ],

  soirees : [
	  {

      title: "Soirée Bowling",
      pic: require("../images/bowling.jpg"),
      date: "2017-01-18",
      hour: "09:17",
      subtitle: "",
      todos: [
        {text: "Réserver au Silver bowling", status: " a fait", userId : 0},
      ],
      messages : [
        {idUser: 0, message: "Wesh"},
        {idUser: 1, message: "Salut"},
        {idUser: 0, message: "Tu bouge ?"},
        {idUser: 1, message: "Non je code"},
        {idUser: 2, message: "Moi aussi je rush"},
        {idUser: 3, message: "Je finis mon programme d'automatisme"},
      ],

    cursor : {lat:47.480489,lng:-0.5922931000000062,text:""}
  },

	  {
      title: "Soirée Cinema",
      pic: require('../images/fantasticbeast.jpg'),
      subtitle: "Les Animaux Fantastiques",
      date: "2017-01-18",
      hour: "09:17",
      todos: [
        {text: "Lunette 3D", status: "fait", userId:1},
        {text: "Place cineday", status: " à faire", userId:2},
      ],
      messages: [
        {idUser: 4, message: "Bien le bonjour Mesdames"},
        {idUser: 5, message: "Bonsoir"},
        {idUser: 4, message: "Cassez-vous des oeufs ces temps-ci ?"},
        {idUser: 5, message: "Je suis rond comme une queue de pelle"},
        {idUser: 4, message: "Les brocolis sont de la partie"},
      ],
      cursor : {lat: 47.47958550000001, lng: -0.5506655000000364, text : "1 Avenue des Droits de l'Homme, 49100 Angers, France"}

	  },

	  {
      title: "Soirée Raclette",
      pic: require('../images/raclette.jpg'),
      date: "2017-01-25",
      hour: "18:00",
      subtitle: "",
      todos: [
        {text: "Acheter fromage", status: "fait", userId : 3},
        {text: "Acheter pommes de terre", status: " à faire", userId: 6},
      ],
      messages: [
        {idUser: 6, message: "AV César"},
      ],
      cursor: {lat:47.480489,lng:-0.5922931000000062,text:""}
	  },
    {
      title: "Magie Magie",
      pic: require("../images/magie_soiree.jpg"),
      date: "2017-03-01",
      hour: "10:30",
      subtitle: "",
      todos: [
        {text: "Amener des cartes", status: "à faire", userId : 7},
        {text: "Acheter le costume de magicien", status: "fait", userId : 8},
        {text: "Amener le nerf", status: " à faire", userId : 8}
      ],
      messages : [
        {idUser: 8, message: "Salut"},
        {idUser: 7, message: "Bonjour"},
        {idUser: 8, message: "J'ai un nouveau tour de magie à te montrer"},
        {idUser: 7, message: "Vazy montre !"},
        {idUser: 8, message: "Non je le garde pour mon spectacle le jour du partiel"},
        {idUser: 3, message: "Ca va pas marcher encore"},
        {idUser: 8, message: "Si si, sinon on fera une bataille de nerf"},
      ],
      cursor: {lat:47.480489,lng:-0.5922931000000062,text:""}
	  }
  ],


  currentUser: {
    name: "Tux",
    avatar: "images/tux.png"
  },

  currentIdUser: 0,

  Users : [
    {firstname: "David", lastname: "Langin", avatar: require("../images/avatar/engineer.png"), password:""},
    {firstname: "Corentin", lastname: "Bigot", avatar: require("../images/avatar/tux.png"), password:""},
    {firstname: "Romain", lastname: "Marechal", avatar: require("../images/avatar/dark_vador.png"), password:""},
    {firstname: "Nicolas", lastname: "Babillot", avatar: require("../images/avatar/nutella.png"), password:""},
    {firstname: "Alphonse", lastname: "", avatar: require("../images/avatar/freepik.jpg"), password:""},
    {firstname: "Bazile", lastname: "", avatar: require("../images/avatar/5074.jpg"), password:""},
    {firstname: "Jean-Louis", lastname: "", avatar: require("../images/avatar/frite.png"), password:""},
    {firstname: "Alexandre", lastname: "", avatar: require("../images/avatar/ava.jpg"), password:""},
    {firstname: "Mehdi", lastname: "", avatar: require("../images/avatar/magicien.jpg"), password:""},
  ],

  currentIndex: 0,

  current_view: false,

}
