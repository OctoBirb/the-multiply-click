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
    cost: 1
    ,scaling: 10
    ,mult1: 1.01
    ,quandale: 0
}

var clk1 = {
    cost: 10
    ,scaling: 100
    ,mult1: 1.00
    ,quandale: 0
}

var endgame = "eee6" // milliduplexion
var version = "1.2.0"

function buyDim1() {
    if (x.gt(dim1.cost)) {
        x = Decimal.sub(x, dim1.cost)
        dim1.quandale = Decimal.add(1, dim1.quandale)
        dim1.mult1 = Decimal.add(dim1.mult1, 0.01)
        dim1.cost = Decimal.pow(3, dim1.quandale)
    } else {
        console.log("not enough value :(")
    }
}

function buyClk1() {
    if (x.gt(clk1.cost)) {
        x = Decimal.sub(x, clk1.cost)
        clk1.quandale = Decimal.add(1, clk1.quandale)
        clk1.mult1 = Decimal.mul(clk1.mult1, 1.50)
        clk1.cost = Decimal.mul(clk1.cost, clk1.scaling)
    } else {
        console.log("not enough value :(")
    }
}

function xxclk() {
    x = Decimal.mul(clk1.mult1, x)
}

/// updating
window.setInterval(function() {
    if (x.layer == 0) {
        ud("xtxt", "Your value is " + (Decimal.trunc(x * 10) / 10) + ".")
    } else if (x.layer == 1 || x.e > 10) {
        ud("xtxt", "Your value is " + (Decimal.trunc(x.m * 10) / 10) + "e" + x.e + ".")
    } else if (x.layer == 2) {
        ud("xtxt", "Your value is " + (Decimal.trunc(x.m * 10) / 10) + "ee" + x.e + ".")
    }
    ud("xmps", "...and it's multiplying by approximately " + (Decimal.trunc(Decimal.pow(mult, 20).mul(100)).div(100)) + " every second.")
    ud("dim1", "Buy a Dimension 1 (Cost: " + dim1.cost + ")")
    ud("clk1", "Multiply your click multiplier by 150\u0025 (Cost: " + clk1.cost + ")")
    ud("click", "Click (multiply x by " + clk1.mult1 + ")")
    
    x = Decimal.mul(mult, x) // or ((mult*x)*100), truncated, and then /100.
    mult = Decimal.add(mult, Decimal.mul(dim1.quandale, (0.00002)))
}, 50)
