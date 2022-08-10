class Dinner{
  constructor(final, split){
      let total = parseFloat(document.getElementById('bill').value);
      let percentage = parseFloat(document.getElementById('quality').value);
      let guests = parseFloat(document.getElementById('guests').value);
      let extra = parseFloat((total*percentage).toFixed(2));
      let full_bill = parseFloat((total + extra).toFixed(2));
      let shares = (full_bill/guests).toFixed(2);        
      this.tip = extra;
      this.final = full_bill;
      this.split = shares;
        }
  }
  
  function displayOut(){
      let meal = new Dinner();
        let htmlString1 = "Amount of tip: $"+ meal.tip;
        let htmlString2 = "Each person pays: $"+ meal.split;
        let htmlString3 = "Full bill is: $"+ meal.final;
    document.getElementById("gratuity").innerHTML = htmlString1;
    document.getElementById("eachguest").innerHTML = htmlString2;
    document.getElementById("totalof").innerHTML = htmlString3;
  }