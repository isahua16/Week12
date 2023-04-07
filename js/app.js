let parentContainer = document.getElementById("container");
parentContainer.innerHTML = ``;

let target = document.getElementById('attack_button');
target.setAttribute(`damage`, `20`);
target.setAttribute(`block`, `10`);

let text_box = document.getElementById(`text-box`);
text_box[`style`][`color`] = `red`;

function sayAnimal(animal){

    animal = 'Tiger';

    console.log('Best pet ever: ' + animal);

}

 

let animals = [ 'Lion', 'Aardvark', 'Leopard' ];

sayAnimal(animals[1]);