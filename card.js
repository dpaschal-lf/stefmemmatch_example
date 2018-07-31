

class Card{
	constructor( thisCardData, clickCallback ){
		this.data = thisCardData;
		this.clickCallback = clickCallback;
		this.domElements = {
			card: null,
			front: null,
			back: null
		}
		this.handleClick = this.handleClick.bind(this);
	}
	render(){
		this.domElements.card = $("<div>",{
			'class': 'card',
			on: {
				click: this.handleClick
			}
		});
		this.domElements.front = $("<div>",{
			'class': 'front',
			css: {
				backgroundImage: `url(${this.data.frontImage})`
			}
		})
		this.domElements.back = $("<div>",{
			'class': 'back',
			css: {
				'background-image': `overwatch.jpg`
			},
			text: this.data.name
		});
		this.domElements.card.append(this.domElements.front, this.domElements.back);
		return this.domElements.card
	}
	getID(){
		return this.data.name;
	}
	handleClick(){
		this.playSound();
		console.log(this.data.name + ' was clicked', this.data);
		this.clickCallback(this);
	}
	playSound(){
		var player = new Audio(this.data.clickSound);
		player.play();
	}
	run(eventName){
		var args = Object.values(arguments);
		args.shift();
		this.data.events[eventName].apply(this, args);
	}
}




