class Dinner{
constructor(final, split){
		let total = parseFloat(document.getElementById('bill').value);
    let percentage = parseFloat(document.getElementById('quality').value);
    let guests = parseFloat(document.getElementById('guests').value);
    let added = total * percentage;
    let fin = (total + added).toFixed(2);
    let zz = (fin/guests).toFixed(2);
    this.final = fin;
    this.split = zz;
  	}
}

function displayOut(){
	let x = new Dinner();
  	let htmlString = "Each guest pays $"+ x.split +". This equates to a total of: $"+ x.final;
  document.getElementById("results").innerHTML = htmlString;
}
