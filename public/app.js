let livestock = [
  {
    name: "Norman",
    birthdate: "2017",
    age: "2",
    height: "41",
    weight: "438",
    breed: "Corriente",
    chondro: "No",
    temperament: "guarded/friendly",
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
    age: "4",
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
    chondro: "yes",
    temperament: "docile",
    dam: "unk",
    sire: "unk",
    sex: "bull",
    color: "brindle",
    bio: "Bruce Almighty is a brindle, Highland bull",
    image: "./Images/bruce.jpg",
  },
  {
    name: "Master Po",
    birthdate: "April 29, 2020",
    age: "7 months",
    height: "34",
    weight: "unk",
    breed: "Panda",
    chondro: "Yes",
    temperament: "friendly",
    dam: "HH Lily",
    sire: "RMC Maximus",
    sex: "bull",
    color: "dun and white",
    polled: "homozygous",
    bio:
      "Master Po is a dun and white Panda bull out of HH Lily and RMC Maximus ",
    image: "./Images/masterpo.jpg",
  },
  {
    name: "Humphrey",
    birthdate: "11/25/2019",
    age: "11 months",
    height: "35",
    weight: "unk",
    breed: "Zebu",
    chondro: "unk",
    temperament: "Guarded/friendly",
    dam: "Muffin",
    sire: "Ranger",
    sex: "bull",
    color: "black and gray",
    polled: "no",
    bio:
      "Humphrey is a 35 inch Zebu bull",
    image: "./Images/humphrey.jpg",
  },
  {
    name: "Mason",
    birthdate: "March 16, 2019",
    age: "20 months",
    height: "38",
    weight: "unk",
    breed: "Jersey",
    chondro: "No",
    temperament: "friendly",
    dam: "South House Melody",
    sire: "Rocking Robins Rowan",
    sex: "bull",
    color: "Fawn/white, white switch",
    polled: "homozygous",
    bio:
      "Mason is a Jersey bull out of South House Melody and Rocking Robins Rowan",
    image: "./Images/mason.jpg",
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
    age: "22mo",
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
    age: "19mo",
    height: "38",
    weight: "300",
    breed: "white Park X Lowline",
    chondro: "No",
    temperament: "friendly",
    dam: "RCM Pearl",
    sire: "Lowline",
    sex: "heifer",
    color: "white w/black points",
    bio:
      "Bo Peep is a 19 month old white Park, lowline Angus cross heifer out of RCM Pearl and a lowline angus bull",
    image: "./Images/bopeep.jpg",
  },
  {
    name: " Poppy",
    birthdate: "April 1, 2019",
    age: "19 mo",
    height: "33.5",
    weight: "254",
    breed: "Belted Galloway",
    chondro: "Yes",
    temperament: "friendly",
    dam: "CC Petra",
    sire: "CC Hank",
    sex: "heifer",
    color: "black",
    bio:
      "Poppy is a 19 month old black belted Galloway heifer out of Croakers Crossing's Petra and Hank.  She is a full sibling of Ivy",
    image: "./Images/poppy.jpg",
  },
  {
    name: "RJ Maggie Lil Doll",
    birthdate: "June 28, 2019",
    age: "17mo",
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
      "Maggie is a 17mo old fawn A2/A2 Jersey heifer out of RJ Molly Moo and MPRR Firecracker",
    image: "./Images/maggie.jpg",
  },
  {
    name: "Ivy",
    birthdate: "February 8, 2020",
    age: "9mo",
    height: "34",
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
      "Ivy is a 9 month old black Belted Galloway heifer out of Croakers Crossing's Petra and Hank.  She is a full sibling of Poppy",
    image: "./Images/ivy.jpg",
  },
  {
    name: "Mama",
    birthdate: "December 20, 2014",
    age: "5yr 11mo",
    height: "40",
    weight: "unk",
    breed: "Shorthorn",
    chondro: "No",
    temperament: "friendly",
    dam: "Unk",
    sire: "Unk",
    sex: "cow",
    color: "black/white brindle",
    polled: "No",
    bio: "Mama is a 5yr and 11 month old Shorthorn cow, mama is Dam to Sundae and to Banana Split. ",
    image: "./Images/mama.jpg",
  },
  {
    name: "Sundae",
    birthdate: "April 20, 2017",
    age: "3yr 7mo",
    height: "40",
    weight: "unk",
    breed: "Shorthorn ",
    chondro: "No",
    temperament: "friendly",
    dam: "Mama",
    sire: "Unk",
    sex: "heifer",
    color: "black/white brindle",
    polled: "No",
    bio: "Sundae is a 3yr and 7 month old Shorthorn Heifer, Daughter to Mama and sibling to Banana Split.",
    image: "./Images/sundae.jpg",
  },
  {
    name: "Dottie",
    birthdate: "February 25, 2019",
    age: "21mo",
    height: "35",
    weight: "unk",
    breed: "25% Zebu, 25% Dexter, 50% Lowline Angus",
    chondro: "No",
    temperament: "friendly",
    dam: "Lady",
    sire: "CC Hank",
    sex: "heifer",
    color: "black",
    polled: "homozygous",
    bio:
      "Dottie is a 21mo old, micro-miniature lowline/zebu/dexter cross heifer",
    image: "./Images/dottie.jpg",
  },
  {
    name: "Ms. Piggy",
    birthdate: "March 24, 2020",
    age: "7mo",
    height: "32",
    weight: "unk",
    breed: "White Park X Hereford",
    chondro: "Yes",
    temperament: "friendly",
    dam: "unk",
    sire: "unk",
    sex: "Heifer",
    color: "white w/ red tips",
    polled: "No",
    bio:
      "Ms. Piggy is a 7 month old White Park, Hereford cross",
    image: "./Images/mspiggy.jpg",
  },
  {
    name: "Frida",
    birthdate: "April 17, 2020",
    age: "7mo",
    height: "35",
    weight: "unk",
    breed: "Lowline X White Park",
    chondro: "No",
    temperament: "friendly",
    dam: "Buttercup",
    sire: "CC Hank",
    sex: "Heifer",
    color: "black",
    polled: "homozygous",
    bio:
      "Frida is a Lowline, White Park cross out of Buttercup and CC Hank",
    image: "./Images/frida.jpg",
  },
  {
    name: "Banana Split",
    birthdate: "May 10, 2020",
    age: "5 mo",
    height: "37",
    weight: "unk",
    breed: "Shorthorn X Highland",
    chondro: "unk",
    temperament: "friendly",
    dam: "Mama",
    sire: "Hammerlunds Macho",
    sex: "Heifer",
    color: "Brindle and White",
    polled: "homozygous",
    bio:
      "Banana Split is a Brindle and White Longhorn/Highland/lowline heifer out of Mama, and is a half sister to Sundae",
    image: "./Images/nana.jpg",
  },
  {
    name: "Flo",
    birthdate: "unk",
    age: "7 mo",
    height: "40",
    weight: "364 lbs",
    breed: "Club Calf, Maine Anjou cross",
    chondro: "No",
    temperament: "friendly",
    dam: "unk",
    sire: "unk",
    sex: "Heifer",
    color: "white and black",
    polled: "homozygous",
    bio:
      "Flo is a Club Calf: Maine Anjou cross",
    image: "./Images/flo.jpg",
  },
  {
    name: "BVR Magson "'"Mr"'" Brown",
    birthdate: "May 24, 2021",
    age: "1 mo",
    height: "25",
    weight: "60 lbs",
    breed: "Jersey",
    chondro: "No",
    temperament: "friendly",
    dam: "RJ Maggie Little Doll",
    sire: "RR Mason",
    sex: "Bull",
    color: "Fawn",
    polled: "homozygous",
    bio:
      "BVR Magson Brown is a Jersey Bull out of RJ Maggie Little Doll and RR Mason",
    image: "./Images/magson.jpg",
  }
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
            <li>Height: ${livestock.height} inches </li>
            <li>Weight: ${livestock.weight} lbs </li>
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
