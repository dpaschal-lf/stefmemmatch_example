var heroData = [
	{
		name: 'bastion',
		frontImage: 'bastionfront.jpg',
		heroPose: 'bastionpose.jpg',
		clickSound: 'http://filipcicspagerprogramming.weebly.com/uploads/1/0/5/4/10541783/min5_tone_3.wav',
		events:{
			mismatch: function(otherCard){
				if(otherCard.data.name==='mei'){
					console.log('my oil is frozen!')
				}
			},
			match: function(){
				console.log('maybe if I put my hydrospanner here and you put your wanklerotaryengine there..... CONNECT!')
			}			
		}

	},
	{
		name: 'mei',
		frontImage: 'brrr.jpg',
		heroPose: 'epicbrrr.jpg',
		clickSound: 'http://mattersofgrey.com/audio/Minecraft-snow3.mp3',
		events:{
			// click: function(cardObject){
			// 	cardObject.domElements.back.addClass('woohoo')
			// }
			mismatch: function(otherCard){
				console.log('mismatched, so sad')
			},
			match: function(){
				console.log('double girl trouble power!')
			}			
		}
		
	}
]