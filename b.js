const num = 52000

Number.prototype.won = function(){
    return this.valueOf() + "won"
}

console.log(num.won())