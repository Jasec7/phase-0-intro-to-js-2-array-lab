// Write your solution here!
const cats = [
    "Milo",
    "Otis",
    "Garfield"
];
cats.push();


beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
  
  function destructivelyAppendCat(name) {
    cats.push("Ralph");
  };

  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function destructivelyPrependCat(name){
    cats.unshift("Bob");
  };

  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
  function destructivelyRemoveLastCat(name) {
    cats.pop();
  };

  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
  function destructivelyRemoveFirstCat() {
    cats.shift();
  };

  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

 const copyOfCats = [...cats];
const moreCats = [...cats]
  function appendCat() {
    return [...cats, "Broom"]
  };

  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
  function prependCat() {
    return ["Arnold",...cats]
  };

  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function  removeLastCat() {
     return [...cats.slice(0 , 2)]
  };

  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
  function removeFirstCat() {
    return [...cats.slice(1 , 3)]
  };