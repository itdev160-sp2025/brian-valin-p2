function factorialCalc(n) {
    if(n < 0 )
    {
        return "input cannot be negative"
    }

    if(n === 0)
    {
        return 1;
    }

    let result = 1;
    for(let i = 1; i <= n; i++)
    {
        result *= i;
    }
    return result;
}

function geometricCalc(pop, sucInPop, sam, sucInSam) {
    var N = pop;
    var k = sucInPop;
    var n = sam;
    var x = sucInSam;
    var h = 0;

    h = ((factorialCalc(k)/(factorialCalc(x)*factorialCalc(k-x))) * (factorialCalc(N-k)/(factorialCalc(n-x)*factorialCalc((N-k)-(n-x)))) / (factorialCalc(N)/(factorialCalc(n)*factorialCalc(N-n))))
    
    return h;
}

function lessThan(pop, sucInPop, sam, sucInSam) {
    var total = 0;
    var i = parseInt(sucInSam) - 1;

    for(i; i >= 0; i--) 
    {
        temp = geometricCalc(pop, sucInPop, sam, i);
        total += parseFloat(temp);
    }

    return total;
}


function greaterThan(pop, sucInPop, sam, sucInSam) {
    var total = 0;
    var i = parseInt(sucInSam) + 1;
    var j = parseInt(sam);

    for(i; i <= j; i++) 
    {
        if(i > sucInPop)
        {
            break;
        }
        temp = geometricCalc(pop, sucInPop, sam, i);
        total += parseFloat(temp);
    }

    return total;
}


function startCalc(){
    var pop = document.getElementById('population').value;
    var sucInPop = document.getElementById('successes_in_pop').value;
    var sam = document.getElementById('sample').value;
    var sucInSam = document.getElementById('successes_in_sample').value;

    var inputArray = [pop, sucInPop, sam, sucInSam];

    var exactEl = document.getElementById('exact');
    var lessEl = document.getElementById('lessThan');
    var lessEqualEl = document.getElementById('lessThanEqual');
    var greaterEl = document.getElementById('greaterThan');
    var greaterEqualEl = document.getElementById('greaterThanEqual');

    var exact = geometricCalc(pop, sucInPop, sam, sucInSam);
    exactEl.textContent = exact.toFixed(5);

    var less = lessThan(pop, sucInPop, sam, sucInSam);
    lessEl.textContent = less.toFixed(5);

    var lessEqual = parseFloat(exact) + parseFloat(less);
    lessEqualEl.textContent = lessEqual.toFixed(5);

    var greater = greaterThan(pop, sucInPop, sam, sucInSam);
    greaterEl.textContent = greater.toFixed(5);

    var greaterEqual = parseFloat(exact) + parseFloat(greater);
    greaterEqualEl.textContent = greaterEqual.toFixed(5);
}


const button = document.getElementById('calculate')
button.addEventListener("click", startCalc)



