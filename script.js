//Objects practice

let storeManager = {}
storeManager.health = 30;
storeManager.socialSkills = 90;
storeManager.emotionalState = 70;
storeManager = {health: storeManager.health}
console.log(storeManager)

//Other way 

let tribalSheikh = {
  name: "Theeb Al-Gaddafi Al-Enzi",
  tribe: "Banu Gadhadfa",
  status: "Sheikh",
  marital: "Married",
  children: "15",
  age: "56"
}

tribalSheikh = {name: tribalSheikh.name};
console.log(tribalSheikh);