function add(num){
  var percent = parseFloat(document.getElementById("inp1").value);
  var per = (percent/100) * num;
  var sum = per + percent;
  var sumr = sum.toFixed(2);
document.querySelector(".Target-Heading").innerHTML = "Target= " +sumr;
document.querySelector(".Target-Heading").style.color = "green";
}



function Sl(num){
  var percent = parseFloat(document.getElementById("inp1").value);
  var per = (percent/100) * num;
  var stoploss = percent - per;
  var slr = stoploss.toFixed(2);
document.querySelector(".Sl-Heading").innerHTML = "StopLoss= " +slr;
document.querySelector(".Sl-Heading").style.color = "red";
}

function quantity(){
  var percent = parseFloat(document.getElementById("inp1").value);
  var qty = Math.floor(50000/percent);
  document.querySelector(".Qty-Heading").innerHTML = "Quantity= " + qty;

}
