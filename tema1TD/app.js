
function sumValues(){

    var num1, num2, res;
    num1 = Number(document.calculator.txtnum1.value);
    num2 = Number(document.calculator.txtnum2.value);
    res = num1 + num2;
    returnRes(res);
    //document.calculator.txtres.value = res;
}
returnRes(res);

function difValues() {

    var num1, num2, res;
    num1 = Number(document.calculator.txtnum1.value);
    num2 = Number(document.calculator.txtnum2.value);
    res = num1 - num2;
    returnRes(res);
    //document.calculator.txtres.value = res;
}
difValues();
function multValues() {

    var num1, num2, res;
    num1 = Number(document.calculator.txtnum1.value);
    num2 = Number(document.calculator.txtnum2.value);
    res = num1 * num2;
    returnRes(res);
    //document.calculator.txtres.value = res;
}
multValues();

function impValues() {

    var num1, num2, res;
    num1 = Number(document.calculator.txtnum1.value);
    num2 = Number(document.calculator.txtnum2.value);
    res = num1 / num2;
    returnRes(res);
    //document.calculator.txtres.value = res;
}
impValues();

function returnRes(res) {
    
    document.calculator.txtres.value = res;
}
returnRes(res);