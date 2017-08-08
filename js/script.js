// Define the messages used in the game.
var messages = {
	"Creditos": {
		"Title": "Creditos",
		"Subtitle": "",
		"Message": "<p><a href='https://tilsonf.github.io/'><b>Github</b></a> Creador/DesarroladorTilson Fernandez</p><br/><p><a href='https://www.titerenet.com/2013/08/12/guiones-para-titeres-el-principe-y-la-princesa/'><b>El Príncipe y la Princesa</b></a> Autor Guion: José Luis García</p><br/><p><a href='http://imagenesnovelasvisuales.blogspot.com.co'><b>imagenesnovelasvisuales</b></a> Imagénes: imagenesnovelasvisuales</p>"
	}
}

// Define the notifications used in the game
var notifications = {
	"Welcome": {
		title: "Welcome",
		body: "This is the Monogatari VN Engine",
		icon: ""
	}
}

// Define the Particles JS Configurations used in the game
var particles = {

}

// Define the music used in the game.
var music = {

}

// Define the voice files used in the game.
var voice = {

}

// Define the sounds used in the game.
var sound = {

}

// Define the videos used in the game.
var videos = {

}

// Define the images used in the game.
var images = {

}

// Define the backgrounds for each scene.
var scenes = {
	"campo_1": "campo_1.png",
	"campo_2": "campo_2.png",
	"campo_3": "campo_3.png",

}

// Define the Characters
var characters = {
	"principe": {
		"Name": "PRINCIPE",
		"Color": "#5882FA",
		"Directory": "PRINCIPE",
		"Images":{
			"Normal": "p2.png",
			"Mad": "p6.png",
			"Doubt": "p5.png",
			"Disapointed":"p4.png",
			"Happy": "p1.png",
			"Molesto": "p4.png",
			"Confiado": "p9.png",
			"Nee": "p7.png"
		}
	},
	"bruja": {
		"Name": "BRUJA",
		"Color": "#FF0000",
		"Directory": "BRUJA",
		"Images":{
			"Normal": "b1.png",
			"Mad": "b2.png",
			"Doubt": "b3.png",
			"Disapointed":"b4.png",
			"Happy": "b5.png",
			"Confiada": "b6.png"
		}
	},
	"princesa": {
		"Name": "PRINCESA",
		"Color": "#F781F3",
		"Directory": "PRINCESA",
		"Images":{
			"Normal": "pri_1.png",
			"Mad": "pri_2.png",
			"Doubt": "pri_3.png",
			"Disapointed":"pri_4.png",
			"Happy": "pri_5.png",
			"Confiada": "pri_6.png",
			"Avergonzada": "pri_7.png",
			"Riendo": "pri_8.png"
		}
	}
}

var script = {
	// The game starts here.
	"Start": [

		/*"notify Welcome",
		{"Input": {
				"Text": "What is your name?",
				"Validation": function(input) {
					return input.trim().length > 0;
				},
				"Save": function(input) {
					storage.player.Name = input;
				},
				"Warning": "You must enter a name!"
			}
		},*/

		"scene campo_1",
		"show bruja Normal center with fadeIn",
		"bruja ¿Dónde te escondes, Príncipe?",
		//"bruja Hi {{player.Name}} Tilson",

		"principe No te lo diré",

		"show bruja Doubt center with fadeIn",
		"bruja ¿Dónde estás ahora, principito?",

		"principe No te lo diré",

		
		"bruja Ya eres mío.",
		"bruja ¿Te escondes de alguien?",

		"hide bruja with fadeOut",
		"show principe Normal center with fadeIn",
		"principe ¡La Bruja!",

		"hide principe with fadeOut",
		"show bruja Disapointed center with fadeIn",
		"bruja Príncipe eres, sapo serás y mi conjuro siempre recordarás.",
		"bruja Y si vuelves a ver a tu madre, dile que esto te lo he hecho por no invitarme a palacio.",

		"hide bruja with fadeOut",
		"show principe Doubt center with fadeIn",
		"principe ¿Qué dices?",

		"hide principe with fadeOut",
		"show bruja Disapointed center with fadeIn",
		"bruja ¿No lo sabías?, tu madre es una bruja aún más malvada que yo.",

		"hide bruja with fadeOut",
		"show principe Doubt center with fadeIn",
		"principe ¿Mi madre es una bruja?",

		"hide principe with fadeOut",
		"show bruja Doubt center with fadeIn",
		"bruja Y tu padre es un carnicero. Yo lo convertí­ en rey por medio de un hechizo.",

		"hide bruja with fadeOut",
		"show principe Molesto center with fadeIn",
		"principe No puede ser.",

		"hide principe with fadeOut",
		"show bruja Confiada center with fadeIn",
		"bruja Te lo dice la bruja Casimira, que cuando todos duermen, ella sonríe y se pira.",

		"hide bruja with fadeOut",
		"show principe Mad center with fadeIn",
		"principe Que suerte tan batracia la mía.",

		"hide principe with fadeOut",
		"(Entra la Princesa y al poco se detiene, pues ha visto al Sapo, y lo observa).",

		"show principe Confiado center with fadeIn",
		"principe Bésame.",

		"hide principe with fadeOut",
		"show princesa Mad center with fadeIn",
		"princesa ¿Estás loco, o que? Soy una princesa y las chicas como yo no besamos a sapos como tú. Pero dime, -¿cómo es que sabes hablar?",


		"hide princesa with fadeOut",
		"show principe Confiado center with fadeIn",
		"principe Dame un beso y lo sabrás.",

		"hide principe with fadeOut",
		"show princesa Doubt center with fadeIn",
		"princesa Puedo seguir viviendo sin saberlo.",

		"hide princesa with fadeOut",
		"show principe Confiado center with fadeIn",
		"principe Bésame y te llevarás una sorpresa.",

		"hide principe with fadeOut",
		"show princesa Doubt center with fadeIn",
		"princesa Ya estoy sorprendida por hablar con un sapo.",

		"(La Princesa da media vuelta y camina dispuesta a marcharse. El Sapo la sigue)",


		"princesa No me sigas. No quiero que me vean en compañí­a de un sapo.",

		"hide princesa with fadeOut",
		"show principe Confiado center with fadeIn",
		"principe Bésame y no te seguiré.",

		"hide principe with fadeOut",
		"show princesa Disapointed center with fadeIn",
		"princesa Sí, claro.",

		"hide princesa with fadeOut",
		"show principe Confiado center with fadeIn",
		"principe Bésame.",

		"hide principe with fadeOut",
		"show princesa Disapointed center with fadeIn",
		"princesa Está bien. Nunca conocí a un batracio tan pesado como tú. Pero te daré un único beso y dejarás de seguirme.",

		"hide princesa with fadeOut",
		"show principe Happy center with fadeIn",
		"principe Trato hecho.",

		"hide principe with fadeOut",
		"show princesa Avergonzada center with fadeIn",
		"(La Princesa, con mucha lentitud se agacha y luego, con prisa, le da un beso al Sapo. Y de pronto, la Princesa queda convertida en Rana).",

		"hide princesa with fadeOut",
		"show principe Nee center with fadeIn",
		"principe Yo debí convertirme en príncipe.",

		"hide principe with fadeOut",
		"show princesa Riendo center with fadeIn",
		"princesa ¡Es genial! Ahora puedo saltar y brincar sin que nadie me diga que soy una princesa, y que las princesas nunca hacen eso. -¡Las princesas nunca pueden hacer nada!",

		"hide princesa with fadeOut",
		"Y los dos vivieron felices en un charquito, donde nunca les faltó ni un mosquito. Ya lo dice el refranero: si disfrutas siendo sapo o rana, ser príncipe o princesa no te da la gana.",

		"display message Creditos",

		"end"
		/*{"Choice": {
				"Dialog": "h Have you already read some documentation?",
				"Yes": {
					"Text": "Yes",
					"Do": "jump Yes"
				},
				"No": {
					"Text": "No",
					"Do": "jump No"
				}
			}
		}*/
	],

	/*"Yes": [

		"h That's awesome!",
		"h Then you are ready to go ahead and create an amazing Game!",
		"h I can't wait to see what story you'll tell!",
		"end"
	],

	"No": [

		"h You can do it now.",

		"display message Help",

		"h Go ahead and create an amazing Game!",
		"h I can't wait to see what story you'll tell!",
		"end"
	]*/
}