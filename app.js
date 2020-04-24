let livestock = [
  {
    name: "Norman",
    birthdate: "2017",
    age: "2",
    height: "41",
    weight: "438",
    breed: "unk",
    chondro: "No",
    temperament: "spooky",
    dam: "unk",
    sire: "unk",
    sex: "bull",
    color: "brown",
    bio: "Norman is a bull",
    image: "./Images/norman.jpg",
  },
  {
    name: "Olaf",
    birthdate: "2016",
    age: "3",
    height: "44",
    weight: "1000",
    breed: "Highland",
    chondro: "No",
    temperament: "friendly",
    dam: "unk",
    sire: "unk",
    sex: "bull",
    color: "red",
    bio: "Olaf is a Highland Bull",
    image: "./Images/olafsky.jpg",
  },
  {
    name: "Ferdinand",
    birthdate: "2016",
    age: "3",
    height: "35",
    weight: "320",
    breed: "Zebu X",
    chondro: "No",
    temperament: "docile",
    dam: "unk",
    sire: "unk",
    sex: "bull",
    color: "black",
    bio: "Ferdinand is a Micro Zebu X bull",
    image: "./Images/ferdinand.jpg",
  },
  {
    name: "Bruce Almighty",
    birthdate: "2013",
    age: "6",
    height: "36",
    weight: "unk",
    breed: "Highland",
    chondro: "No",
    temperament: "docile",
    dam: "unk",
    sire: "unk",
    sex: "bull",
    color: "brindle",
    bio: "Bruce Almighty is a brindle, Highland bull",
    image: "./Images/bruce.jpg",
  },
  {
    name: "Pig",
    birthdate: "2013",
    age: "6",
    height: "42",
    weight: "551",
    breed: "lowline angus",
    chondro: "No",
    temperament: "friendly",
    dam: "unk",
    sire: "unk",
    sex: "cow",
    color: "black",
    bio: "Pig is a 6 year old black, lowline angus cow",
    image: "./Images/pig2.jpg",
  },
  {
    name: "Daphne",
    birthdate: "Nov 2018",
    age: "15mo",
    height: "37",
    weight: "253",
    breed: "Zebu",
    chondro: "No",
    temperament: "friendly, guarded",
    dam: "unk",
    sire: "unk",
    sex: "heifer",
    color: "brown",
    bio: "Daphne is a 15 month old brown, zebu heifer ",
    image: "./Images/daphne.jpg",
  },
  {
    name: "Roz",
    birthdate: "Nov 2018",
    age: "15mo",
    height: "34.5",
    weight: "182",
    breed: "Zebu",
    chondro: "No",
    temperament: "guarded",
    dam: "unk",
    sire: "unk",
    sex: "heifer",
    color: "gray brindle",
    bio: "Roz is a 15 month old gray brindle, zebu heifer",
    image: "./Images/roz.jpg",
  },
  {
    name: "Elsa",
    birthdate: "Jan 22, 2019",
    age: "1y",
    height: "40",
    weight: "322",
    breed: "Highland",
    chondro: "No",
    temperament: "friendly",
    dam: "HH Mocha Latte",
    sire: "HH Snowman",
    sex: "heifer",
    color: "red",
    bio:
      "Elsa is a 1 year old red Highland heifer, out of Holly's Highlands' Mocha Latte(D) and Snowman(S)",
    image: "./Images/elsa.jpg",
  },
  {
    name: "Bo Peep",
    birthdate: "April 11, 2019",
    age: "10mo",
    height: "38",
    weight: "300",
    breed: "Park X Lowline",
    chondro: "No",
    temperament: "friendly",
    dam: "RCM Pearl",
    sire: "unk",
    sex: "heifer",
    color: "white",
    bio:
      "Bo Peep is a 10 month old white Park, lowline Angus cross heifer out of RCM Pearl and a lowline angus bull",
    image: "./Images/bopeep.jpg",
  },
  {
    name: " Poppy",
    birthdate: "April 1, 2019",
    age: "10 mo",
    height: "33.5",
    weight: "254",
    breed: "Belted Galloway",
    chondro: "No",
    temperament: "friendly",
    dam: "CC Petra",
    sire: "CC Hank",
    sex: "heifer",
    color: "black",
    bio:
      "Poppy is a 10 month old black belted Galloway heifer out of Croakers Crossing's Petra and Hank.  She is a full sibling of Ivy",
    image: "./Images/poppy.jpg",
  },
  {
    name: "RJ Maggie Lil Doll",
    birthdate: "June 28, 2019",
    age: "7mo",
    height: "36",
    weight: "unk",
    breed: "Jersey A2/A2",
    chondro: "No",
    temperament: "friendly",
    dam: "RJ Molly Moo",
    sire: "MPRR Firecracker",
    sex: "heifer",
    color: "fawn",
    polled: "naturally",
    bio:
      "Maggie is a 7mo old fawn A2/A2 Jersey heifer out of RJ Molly Moo and MPRR Firecracker",
    image: "./Images/maggie.jpg",
  },
  {
    name: "Ivy",
    birthdate: "February 8, 2020",
    age: "2 days",
    height: "22",
    weight: "unk",
    breed: "Belted Galloway",
    chondro: "No",
    temperament: "friendly",
    dam: "CC Petra",
    sire: "CC Hank",
    sex: "heifer",
    color: "black",
    polled: "homozygous",
    bio:
      "Ivy is a 2 day old black Belted Galloway heifer out of Croakers Crossing's Petra and Hank.  She is a full sibling of Poppy",
    image: "./Images/ivy.jpg",
  },
];
console.log(livestock);

let card = document.getElementById("cards");

let cards = livestock.map((livestock, index) => {
  return `<div class='card' key=${index}>
      <div class='flipcard' id='flipcard'>
        <div class='flipcardFront'>
          <img class='cardImage' src=${livestock.image} alt='' />
          <h2>${livestock.name}</h2>
        </div>
        <div class='flipcardBack'>
          <h1 class='cardName'>${livestock.name}</h1>
          <ul class='info'>
            <li>Born: ${livestock.birthdate}</li>
            <li>Age: ${moment(livestock.birthdate).fromNow(true)}</li>
            <li>Height: ${livestock.height} </li>
            <li>Weight: ${livestock.weight} </li>
            <li>Breed: ${livestock.breed} </li>
            <li>Chondro: ${livestock.chondro} </li>

            <li>Temperament: ${livestock.temperament}</li>
            <li>Dam: ${livestock.dam} </li>
            <li>Sire: ${livestock.sire} </li>
            <li>Sex: ${livestock.sex} </li>
            <li>Color: ${livestock.color} </li>
            <li>${livestock.bio} </li>
          </ul>
        </div>
      </div>
    </div>  `;
});
console.log(cards);

card.innerHTML = cards;
