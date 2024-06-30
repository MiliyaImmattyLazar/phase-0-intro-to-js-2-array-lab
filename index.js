// Write your solution here!

const cats=["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(nam)
{
    cats.push('Ralph')
}
destructivelyAppendCat(nam)

function destructivelyPrependCat(name){
    cats.unshift(name)
}
destructivelyPrependCat("Bob")
function destructivelyRemoveLastCat(){
    cats.pop()

}
destructivelyRemoveLastCat()
function  destructivelyRemoveFirstCat(){
    cats.shift()

}
destructivelyRemoveFirstCat()



function appendCat(name) {
    return cats.concat(name);
}

const newCatsArray2 = appendCat("Ralph");
console.log(newCatsArray2); // Output: [ 'Milo', 'Otis', 'Garfield', 'Ralph' ]
console.log(cats); // Output: [ 'Milo', 'Otis', 'Garfield' ]
function prependCat(name) {
    return [name, ...cats];
}

const newCatsArray3= prependCat("Ralph");
console.log(newCatsArray3); // Output: [ 'Ralph', 'Milo', 'Otis', 'Garfield' ]
console.log(cats); // Output

function removeLastCat() {
    return cats.slice(0, cats.length - 1);
}

const newCatsArray = removeLastCat();
console.log(newCatsArray); // Output: [ 'Milo', 'Otis' ]
console.log(cats); // Output: [ 'Milo', 'Otis', 'Garfield' ]

function removeFirstCat() {
    return cats.slice(1);
}

const newCatsArray1 = removeFirstCat();
console.log(newCatsArray1); // Output: [ 'Otis', 'Garfield' ]
console.log(cats); // Output: [ 'Milo', 'Otis', 'Garfield' ]