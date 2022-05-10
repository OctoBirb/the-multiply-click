/// octomod
var ud=(x,y)=>{document.getElementById(x).textContent=y}
var d=(x)=>{new Decimal(x)}
var rb=(x,y)=>{
    let roundedNum = Decimal.div(Decimal.mul(Decimal.round(x), 10**y), 10**y)
    return roundedNum
}
console.log("hello vadim blyad")
/// variables
var x = 1
var mult = 1.01

var dim1 = {
    cost: 10
    ,scaling: 10
    ,mult1: 1.01
}

var endgame = "eee6" // milliduplexion

/// updating
window.setInterval(function() {
    if (x.layer == 0) {
        ud("xtxt", "Your value is " + (Decimal.trunc(x * 10) / 10) + ".")
    } else if (x.layer == 1) {
        ud("xtxt", "Your value is " + (Decimal.trunc(x.m * 10) / 10) + "e" + x.e + ".")
    } else if (x.layer == 2) {
        ud("xtxt", "Your value is " + (Decimal.trunc(x.m * 10) / 10) + "ee" + x.e + ".")
    }
    
    x = Decimal.mul(mult, x) // or ((mult*x)*100), truncated, and then /100.
}, 50)