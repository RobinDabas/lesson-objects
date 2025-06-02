//Dot notaion practice

let storeManager = {}
storeManager.health = 30;
storeManager.socialSkills = 90;
storeManager.emotionalState = 70;
storeManager = {health: storeManager.health}
console.log(storeManager)

//Object literal - with the assignment operator ":" 

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

//Brackets notation

let cityBangkok = {}
cityBangkok['weather'] = 'Sunny & very humid';
cityBangkok['population'] = '71.7 million';
cityBangkok['province'] = 'Krung Thep Mahan Nakhon';
cityBangkok['expats'] = '300,000'
cityBangkok = cityBangkok.weather;
console.log(cityBangkok)