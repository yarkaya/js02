//const priceEl = 3;
//const priceEr = 7;
//const total = priceEl + priceEr;

//document.write(`this is total:` + total);

//const x = "John" + " " + "Doe";
//document.write(x);


let first = parseFloat(prompt('write the first number'));
let second = parseFloat(prompt('write the second number'));
let third = parseFloat(prompt('write the third number'));

document.writeln(`rivniannia: a * x * x + b * x + c = 0 `);


function kvadratic(a,b,c) {
    let D = b * b - 4 * a * c ; 
        if (D < 0) {
            return 'nemaje rozwiazku';
        } if (D == 0){ 
            let x  = -b / 2 * a;
            return 'rozwiazok odyn' + x;
        } if (D > 0) {
            let x1 = -b + Math.sqrt(D) / 2 * a;
            let x2 = -b - Math.sqrt(D) / 2 * a;
            return 'washi rezultaty:x1= '+ x1 + 
            ' washi rezultaty:x2= ' + x2;
        }
}

document.writeln(kvadratic(first,second,third));



    
    
