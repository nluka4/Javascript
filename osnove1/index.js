let korisnik; 
korisnik = "ASJas[d";
// console.log(korisnik);

// const korisnikConst = 5;
// console.log(korisnikConst);

// var korisnikBool; 
// korisnikBool = true;
// console.log(korisnikBool);


// //------- String
// console.log(typeof('a'));
// console.log(typeof('AJSPDJKA'));
// console.log(typeof("a"));
// console.log(typeof("poasjkdpoas"));
// //------- Number
// console.log(typeof(1));
// console.log(typeof(0.123123));
// //------- Boolean
// console.log(typeof(true));
// console.log(typeof(false));


// let num = parseInt('5'); 
// console.log("Broj " + num);

// console.log(num);

//Nizovi 

// let niz = [1,23,4,45,4,,56,456];
// let niz2 = [1,'2',2.4,'asd',"a",true, false];
// console.log("Niz1 duzina: "+niz.length);
// console.log("Niz2 duzina: "+niz2.length);

// for(brojac in niz2){
// 	console.log("i: "+brojac);
// 	console.log(niz2[brojac])
// }
// console.log("##################")
// for(element of niz2){
// 	console.log(element)
// }

let automobili = {
	audi: ['70000','2017','Q7'],
	bmw : ['50000','2018','330D'],
	porsche: ['60000','2016','Boxter'],
	mercedes: ['100000','2019','S400'],
}

for(automobil in automobili){
	let ime = automobil;
	let podaci_vozila = automobili[automobil];
	console.log(`${ime} = ${podaci_vozila[2]}`);
}

let nekretnine = {
	stan: 70000,
	kuca: 150000,
	plac: 30000,
}

function printaj_vretnosti(kljuc,vrednost){
	console.log(`${kljuc}: ${vrednost}`);
}

for(kljuc in nekretnine){
	nekretnina = nekretnine[kljuc];
	printaj_vretnosti(kljuc,nekretnina)
}

console.log("Cena stana " + nekretnine.stan)

let broj = 0.2789546982354876165;
console.log(broj.toFixed(3));

let textByTag = document.getElementsByTagName('p');
let textByClass = document.getElementsByClassName('txt');

console.log(textByTag);
console.log(textByClass);