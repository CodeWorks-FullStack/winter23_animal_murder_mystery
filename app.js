// SECTION array method examples

let cats = [
  {
    name: 'Iron Man',
    hasFur: true,
    tailLength: 10,
    hasCriminalRecord: true,
    lives: 9
  },
  {
    name: 'Demogorgan',
    hasFur: false,
    tailLength: 20,
    hasCriminalRecord: true,
    lives: 8
  },
  {
    name: 'Nubby',
    hasFur: true,
    tailLength: 1,
    hasCriminalRecord: false,
    lives: 5
  },
  {
    name: 'Buttlass',
    hasFur: true,
    tailLength: 5,
    hasCriminalRecord: false,
    lives: 7
  },
]


// initializer, comparison, afterthought

for (let i = cats.length - 1; i >= 0; i--) {
  let cat = cats[i]
  // console.log('Name:', cat.name);
  // console.log('Tail Length', cat.tailLength)
}

// NOTE does the exact same thing as the forLoop on line 35

cats.forEach(cat => {
  // console.log('Name:', cat.name);
  // console.log('Tail Length', cat.tailLength)
})

// NOTE finds one item in an array
// NOTE                  VVV this is declaring what one item in the array is
//                       VVV don't call this a bunny, unless it is actually a bunny
// || or operator
// && and operator
let foundCat = cats.find(bunny => bunny.name == 'Demogorgan')

// NOTE finds one index in an array
let foundIndex = cats.findIndex(cat => cat.name == 'Iron Man')

// console.log('Here is my found cat!', foundCat);
// console.log('Here is my found index!', foundIndex);

// NOTE filter returns a new array with specified qualities

let filteredCats = cats.filter(cat => cat.tailLength > 6)

// console.log(filteredCats);


// SECTION main application

// SECTION variables

let animals = [
  {
    emoji: '🦒',
    name: 'Gerald',
    age: 72,
    isMammal: true,
    weapon: 'horns',
    diet: ['vegetables', 'fruits'],
    isMurderer: false
  },
  {
    emoji: '🐊',
    name: 'Alf',
    age: 1000,
    isMammal: false,
    weapon: 'teeth',
    diet: ['meats'],
    isMurderer: false,
  },
  {
    emoji: '🦙',
    name: 'Larry',
    age: 18,
    isMammal: true,
    weapon: 'intellect',
    diet: ['vegetables'],
    isMurderer: false,
  },
  {
    name: 'Oslo',
    emoji: '🦧',
    isMammal: true,
    age: 28,
    weapon: 'intellect',
    diet: ['vegetables', 'fruits', 'bugs'],
    isMurderer: false
  },
  {
    name: 'Roger',
    emoji: '🦏',
    isMammal: true,
    age: 12,
    weapon: 'horns',
    diet: ['vegetables'],
    isMurderer: false
  },
  {
    name: 'Kenny',
    emoji: '🦘',
    isMammal: true,
    age: 8,
    weapon: 'limbs',
    diet: ['vegetables', 'fruits'],
    isMurderer: false
  },
  {
    name: 'Tanya',
    emoji: '🐅',
    isMammal: true,
    age: 77,
    weapon: 'claws',
    diet: ['meats'],
    isMurderer: false
  },
  {
    name: 'Sid',
    emoji: '🦅',
    isMammal: false,
    age: 2,
    weapon: 'claws',
    diet: ['meats', 'fishes'],
    isMurderer: false
  },
  {
    name: 'Manny',
    emoji: '🐒',
    isMammal: true,
    age: 16,
    diet: ['fruits', 'meats'],
    weapon: 'teeth',
    isMurderer: false
  },
  {
    name: 'George',
    emoji: '🦍',
    isMammal: true,
    age: 12,
    diet: ['fruits', 'vegetables'],
    weapon: 'limbs',
    isMurderer: false
  },
  {
    name: 'Orsen',
    emoji: '🦧',
    isMammal: true,
    age: 22,
    diet: ['fruits', 'vegetables', 'meats'],
    weapon: 'limbs',
    isMurderer: false
  },
  {
    name: 'Oslo',
    emoji: '🐃',
    isMammal: true,
    age: 33,
    diet: ['vegetables'],
    weapon: 'horns',
    isMurderer: false
  },
  {
    name: 'Jeff jr.',
    emoji: '🐊',
    isMammal: false,
    age: 8,
    diet: ['meats'],
    weapon: 'teeth',
    isMurderer: false
  },
  {
    name: 'Jeff sr.',
    emoji: '🐊',
    isMammal: false,
    age: 23,
    diet: ['meats'],
    weapon: 'teeth',
    isMurderer: false
  },
  {
    name: 'Madam Blackwell',
    emoji: '🐈‍⬛',
    isMammal: true,
    age: 10,
    diet: ['fishes', 'vegetables'],
    weapon: 'claws',
    isMurderer: false
  },
  {
    name: 'Tony',
    emoji: '🐄',
    isMammal: true,
    age: 11,
    diet: ['fruits', 'vegetables'],
    weapon: 'Horns',
    isMurderer: false
  },
  {
    name: 'Chomps',
    emoji: '🦖',
    isMammal: false,
    age: 100000000000,
    diet: ['meats'],
    weapon: 'teeth',
    isMurderer: false
  },
  {
    name: 'Buster',
    emoji: '🦕',
    isMammal: false,
    age: 10000320000,
    diet: ['fruits', 'vegetables'],
    weapon: 'limbs',
    isMurderer: false
  },
  {
    name: 'Chuck',
    emoji: '🐓',
    isMammal: false,
    age: 10,
    diet: ['vegetables'],
    weapon: 'claws',
    isMurderer: false
  },
  {
    name: 'Sarah',
    emoji: '🦥',
    isMammal: true,
    age: 24,
    diet: ['fruits'],
    weapon: 'claws',
    isMurderer: false
  },
  {
    name: 'Gloria',
    emoji: '🦛',
    isMammal: true,
    age: 13,
    diet: ['meats', 'vegetables'],
    weapon: 'teeth',
    isMurderer: false
  },
  {
    name: 'Bob',
    emoji: '🐉',
    isMammal: false,
    age: 3000,
    diet: ['meats', 'vegetables', 'fruits'],
    weapon: 'horns',
    isMurderer: false
  },
  {
    name: 'Malinda',
    emoji: '🦞',
    isMammal: false,
    age: 400,
    diet: ['meats'],
    weapon: 'claws',
    isMurderer: false
  },
  {
    name: 'Reggie',
    emoji: '🐢',
    isMammal: false,
    age: 99,
    diet: ['vegetables'],
    weapon: 'intellect',
    isMurderer: false
  },
  {
    name: 'Jane',
    emoji: '🦫',
    isMammal: true,
    age: 32,
    diet: ['vegetables'],
    weapon: 'teeth',
    isMurderer: false
  },

]

// SECTION functions

function drawAnimals(array) {
  let animalElement = document.getElementById('animals')
  // console.log(animalElement);
  let animalLineup = ''
  // NOTE injecting text
  // array.forEach(animal => animalLineup += animal.emoji)
  // animalElement.innerText = animalLineup

  array.forEach(animal => {
    animalLineup += `<span title="${animal.name}">${animal.emoji}</span>`
  })

  animalElement.innerHTML = animalLineup
}

function makingAMurderer() {
  let randomIndex = Math.floor(Math.random() * animals.length)
  let randomAnimal = animals[randomIndex]
  randomAnimal.isMurderer = true
  // console.log(`The murderer used their ${randomAnimal.weapon} to murder someone`);
  let clueElement = document.getElementById('clues')
  clueElement.innerText = `The murderer used their ${randomAnimal.weapon} to murder someone`
}

function filterAnimalsByTeeth() {
  const toothyBoyzzz = animals.filter(animal => animal.weapon == 'teeth')
  console.log(toothyBoyzzz);
  drawAnimals(toothyBoyzzz)
}

function filterAnimalsByClaws() {
  const nailGirlzzz = animals.filter(animal => animal.weapon == 'claws')
  drawAnimals(nailGirlzzz)
}

function filterByDiet(favoriteFood) {
  console.log(favoriteFood);
  const animalsWhoEatThisFood = animals.filter(animal => animal.diet.includes(favoriteFood))
  drawAnimals(animalsWhoEatThisFood)
}

function accuse() {
  let accused = window.prompt('Who are we sending to jail?')
  console.log(accused.toLowerCase());
  // NOTE this find does the exact same thing as the find right underneath
  // const guiltyAnimal = animals.find(animal => animal.isMurderer == true)
  const guiltyAnimal = animals.find(animal => animal.isMurderer)
  if (guiltyAnimal.name.toLowerCase() == accused.toLowerCase()) {
    window.alert(`${guiltyAnimal.name} is going to jail, baby!`)
  } else {
    window.alert(`${accused} is not the murderer, but he's still going to jail 🥺`)
    let accusedIndex = animals.findIndex(animal => animal.name == accused)
    if (accusedIndex > -1) {
      animals.splice(accusedIndex, 1)
      drawAnimals(animals)
    }
  }
}

// SECTION initialization (run these when page loads)

drawAnimals(animals)
makingAMurderer()