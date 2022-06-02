function subtract() {
    let numb1=document.getElementById('firstNumber').value;
    let numb2=document.getElementById('secondNumber').value;
    let result=Number(numb1)-Number(numb2);
    document.getElementById('result').textContent=result;
}