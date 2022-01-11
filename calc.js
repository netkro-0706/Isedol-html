var inputNum_val = document.getElementById('inputNum').value;
var calc_sign=1;//boolean
var num1, num2=null;
var result=null;
var run_val = 1;
console.log(document.getElementById("inputNum").value);
console.log("inputNum_val : " + inputNum_val);
inputNum_val=0;

//계산기 모니터
function Input_text(){
    document.getElementById("inputNum").value = inputNum_val;
}

//C버튼-계산기 초기화
function Cancle(){
    inputNum_val=0;
    calc_sign=1;
    num1, num2=null;
    Input_text();
    console.log("inputNum_val : " + inputNum_val, "calc_sign : " + calc_sign);
}

//연산자 입력시 동작
function sign_add(calc){
    console.log("first_calc : " + calc_sign);
    if(calc_sign!==1){
        //연산자가 입력되어 있다면 계산을 해버리고 연산자가 추가된 입력을 넣음
        run();
        run_val=1;
        calc_sign=1;
        sign_add(calc);
        console.log("sing_add bool");
        return; //if종료 후 숫자대입이 한번더 발생하므로 종료
    } else if(calc=="%"){
        calc_sign = "%";
    } else if(calc=="/"){
        calc_sign = "/";
    } else if(calc=="-"){
        calc_sign = "-";
    } else if(calc=="+"){
        calc_sign = "+";
    } else if(calc=="X"){
        calc_sign = "X";
    } else {
        alert("잘못된 연산자 입력 : " + calc_sign);
    }
    num1 = inputNum_val;
    inputNum_val += calc_sign;
    console.log("sign_add sign : " + calc_sign);
    console.log("sign_add inputNum : " + inputNum_val);
    Input_text();
}

//숫자 입력시 동작
function number(num){
    num = String(num);
    //Enter입력 후 다시 숫자를 누를시 0으로 만들기
    console.log("result : " + result);
    if(run_val==0 && result==null){
        inputNum_val="";
        num1, num2 = null;
        run_val=1;
        console.log("num_0 : " + inputNum_val);
    }

    //입력된 숫자 입력
    if(calc_sign==1){
        if(inputNum_val == 0){
            num1 = num;
        } else{
            num1 += num;
        }    
        inputNum_val=num1;
    } else {
        if(num2==null){
            num2=num;
        } else {
            num2 += num;
        }
        console.log("num2 : " + num2);
        inputNum_val+=num;
    }

    console.log("F_num - inputNum_val : " + inputNum_val);
    console.log("number : " + num);
    Input_text();
}

//계산
function run(){
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    if(calc_sign=="%"){
        result = (num1 % num2);
    } else if(calc_sign=="/"){
        result = (num1 / num2);
    } else if(calc_sign=="-"){
        result = (num1 - num2);
    } else if(calc_sign=="+"){
        result = (num1 + num2);
    } else if(calc_sign=="X"){
        result = (num1 * num2);
    }
    inputNum_val = result;
    Input_text();
    console.log("run : " + calc_sign);
    console.log("run : " + inputNum_val);
    //inputNum_val = 0;
    num1, num2=null;
    calc_sign=1;
    console.log("run_end : " + inputNum_val);
    run_val=0;
}