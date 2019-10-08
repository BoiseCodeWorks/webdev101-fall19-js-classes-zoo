class Monkey {
  constructor(food, furColor, temperament, name) {
    this.food = food;
    this.furColor = furColor;
    this.temperament = temperament;
    this.name = name;
    this.gender = "male";
  }
  draw(index) {
    return `
        <div class="col-4 border">
          <h1>Monkey</h1>
          <h2>Name: ${this.name}</h2>
          <h5>Favorite Food: ${this.food}</h5>
          <h5>Fur Color: ${this.furColor}</h5>
          <h5>Temperament: ${this.temperament}</h5>
          <h5>Gender: ${this.gender}</h5>
          <button class="btn btn-success" onclick= "setFree (${index})">Set Free</button>
        </div>
    `;
  }
}

class Tiger {
  constructor(gender, type, activityLevel, name, food) {
    this.gender = gender;
    this.type = type;
    this.activityLevel = activityLevel;
    this.name = name;
    this.food = food;
  }

  draw(index) {
    return `
        <div class="col-4 border">
          <h1>Tiger</h1>
          <h2>Name: ${this.name}</h2>
          <h5>Food: ${this.food}</h5>
          <h5>Gender: ${this.gender}</h5>
          <h5>Activity Level: ${this.activityLevel}</h5>
          <h5>Type: ${this.type}</h5>
          <button class="btn btn-success" onclick= "setFree (${index})">Set Free</button>

        </div>
    `;
  }
}
class HornBill {
  constructor(canFly, stressLevel, color, name, food) {
    this.canFly = canFly;
    this.stressLevel = stressLevel;
    this.color = color;
    this.name = name;
    this.food = food;
  }

  draw(index) {
    return `
        <div class="col-4 border">
          <h1>HornBill</h1>
          <h2>Name: ${this.name}</h2>
          <h5>Food: ${this.food}</h5>
          <h5>Can it fly: ${this.canFly}</h5>
          <h5>Stress Level: ${this.stressLevel}</h5>
          <h5>Color: ${this.color}</h5>
          <button class="btn btn-danger" onclick= "setFree (${index})">Set Free</button>
        </div>
    `;
  }
}

let zoo = [
  new Monkey("bananas", "brown", "crazy", "Joe"),
  new Tiger("female", "Sumatran", "hyper", "Raja", "goat"),
  new HornBill("no", "elevated", "black", "Bill", "monkeys")
];
function drawZoo() {
  let template = "";
  for (let i = 0; i < zoo.length; i++) {
    let animal = zoo[i];
    template += animal.draw(i);
  }
  document.getElementById("zoo").innerHTML = template;
}
function setFree(animalIndex) {
  let animal = zoo[animalIndex];
  let template = `<p>${animal.name} is free!</p>`;
  document.querySelector("#messages").innerHTML += template;
}

drawZoo();
