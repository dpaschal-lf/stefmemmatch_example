

class Game{
	constructor(heroData){
		this.cards = [];
		this.clickedCards = [];
		this.handleClick = this.handleClick.bind(this);
		this.makeCards(heroData);
	}
	makeCards( data ){
		this.cards = data.map( datum =>  {
			var cardObj = new Card(datum, this.handleClick);
			var dom = cardObj.render();
			$("#container").append(dom);
		});
	}
	handleClick( card ){
		console.log('child was clicked: ', card)
		if(this.clickedCards.length<2){
			this.clickedCards.push(card);
		}
		if(this.clickedCards.length===2){
			if(this.clickedCards[0].getID() === this.clickedCards[1].getID()){
				console.log('they match!');
				this.clickedCards[0].run('match')
			} else {
				this.clickedCards[0].run('mismatch', this.clickedCards[1])
			}
		} else {
			console.log(this.clickedCards.length + ' cards clicked')
		}
	}
}



