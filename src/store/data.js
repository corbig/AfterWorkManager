export var data = {

  soirees : [
	  {
      title: "Soirée Bowling",
      pic: "images/bowling.jpg",
      date: "",
      hour: "",
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
        {idUser: 2, message: "Je finis mon programme d'automatisme"},
      ],
      cursor: {}
	  },

	  {
      title: "Soirée Cinema",
      pic: "images/fantasticbeast.jpg",
      subtitle: "Les Animaux Fantastiques",
      date: "",
      hour: "",
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
      cursor: {}
	  },

	  {
      title: "Soirée Raclette",
      pic: "images/raclette.jpg",
      date: "",
      hour: "",
      subtitle: "",
      todos: [
        {text: "Acheter fromage", status: "fait", user: {name: "Tux", avatar: "images/tux.png"}},
        {text: "Acheter pommes de terre", status: " à faire", user: {name: "Tux", avatar: "images/tux.png"}},

      ],
      messages: [],
      cursor: {}
	  }
  ],
	
   
  currentUser: {
    name: "Tux",
    avatar: "images/tux.png"
  },

  currentIdUser: 0,

  Users : [
    {firstname: "David", lastname: "Langin", avatar: "images/tux.png"},
    {firstname: "Corentin", lastname: "Bigot", avatar: "images/tux.png"},
    {firstname: "Romain", lastname: "Marechal", avatar: "images/tux.png"},
    {firstname: "Nicolas", lastname: "Babillot", avatar: "images/tux.png"},
    {firstname: "Alphonse", lastname: "", avatar: "images/tux.png"},
    {firstname: "Bazile", lastname: "", avatar: "images/tux.png"},
  ],

  currentIndex: 0,
  
  
}
