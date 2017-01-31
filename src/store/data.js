export var data = {
  sondage : [
    {

      title: "Qui vient ?",
      options: [
        {id:0, text:"Moi Moi", checked: true},
        {id:1, text:"Non j'ai piscine", checked: false},
        {id:2, text:"Non", checked: false},
      ],
      res : [
        {id:0, nb:4},
        {id:1, nb:2},
        {id:2, nb:1}
      ]
    }
  ],

  soirees : [
	  {

      title: "Soirée Bowling",
      pic: "images/bowling.jpg",
      date: "2017-01-18",
      hour: "09:17",
      subtitle: "",
      todos: [
        {text: "Réserver au Silver bowling", status: " a fait", user: {name: "Tux", avatar: "images/tux.png"}},
      ],
      messages : [
        {idUser: 0, message: "Wesh"},
        {idUser: 1, message: "Salut"},
        {idUser: 0, message: "Tu bouge ?"},
        {idUser: 1, message: "Non je code"},
        {idUser: 2, message: "Moi aussi je rush"},
        {idUser: 3, message: "Je finis mon programme d'automatisme"},
      ],

    cursor : {lat:0,lng:0,text:""}
  },

	  {
      title: "Soirée Cinema",
      pic: "images/fantasticbeast.jpg",
      subtitle: "Les Animaux Fantastiques",
      date: "2017-01-18",
      hour: "09:17",
      todos: [
        {text: "Lunette 3D", status: "fait", user: {name: "Tux", avatar: "images/tux.png"}},
        {text: "Place cineday", status: " à faire", user: {name: "Tux", avatar: "images/tux.png"}},
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
      pic: "images/raclette.jpg",
      date: "2017-01-18",
      hour: "09:17",
      subtitle: "",
      todos: [
        {text: "Acheter fromage", status: "fait", user: {name: "Tux", avatar: "images/tux.png"}},
        {text: "Acheter pommes de terre", status: " à faire", user: {name: "Tux", avatar: "images/tux.png"}},
      ],
      messages: [
        {idUser: 6, message: "AV César"},
      ],
      cursor: {lat:0,lng:0,text:""}
	  }
  ],


  currentUser: {
    name: "Tux",
    avatar: "images/tux.png"
  },

  currentIdUser: 0,

  Users : [
    {firstname: "David", lastname: "Langin", avatar: "images/avatar/engineer.png", password:""},
    {firstname: "Corentin", lastname: "Bigot", avatar: "images/avatar/tux.png", password:""},
    {firstname: "Romain", lastname: "Marechal", avatar: "images/avatar/dark_vador.png", password:""},
    {firstname: "Nicolas", lastname: "Babillot", avatar: "images/avatar/nutella.png", password:""},
    {firstname: "Alphonse", lastname: "", avatar: "images/avatar/freepik.jpg", password:""},
    {firstname: "Bazile", lastname: "", avatar: "images/avatar/5074.jpg", password:""},
    {firstname: "Jean-Louis", lastname: "", avatar: "images/avatar/frite.png", password:""},
  ],

  currentIndex: 0,


}
