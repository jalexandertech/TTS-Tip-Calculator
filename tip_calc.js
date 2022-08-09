class Dinner{
constructor(final, split){
    let total = parseFloat(document.getElementById('bill').value);
    let percentage = parseFloat(document.getElementById('quality').value);
    let guests = parseFloat(document.getElementById('guests').value);
    let full_bill = (total + (total*percentage)).toFixed(2);
    let shares = (full_bill/guests).toFixed(2);
    this.final = full_bill;
    this.split = shares;
  	}
}

function displayOut(){
	let meal = new Dinner();
  	let htmlString = "Each guest pays $"+ meal.split +". This equates to a total of: $"+ meal.final;
  document.getElementById("results").innerHTML = htmlString;
}
