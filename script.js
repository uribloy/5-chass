let chass = [];
let Row = [];

for (let i=0; i<8; i++) {
    for (let j=0; j<8; j++) {
        if ((i+j)%2 == 0){
            Row.push("black");
        } else {
            Row.push("whith");
        }
    } 
    chass.push(Row);
    Row = [];
}
console.table(chass);
