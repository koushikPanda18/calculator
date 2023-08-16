const displayContainer=document.querySelector(".display");

const backContainer=document.querySelector(".back");
const clearContainer=document.querySelector(".clear");
const slashContainer=document.querySelector(".slash");
const multiContainer=document.querySelector(".multiply");
const sevenContainer=document.querySelector(".seven");
const eightContainer=document.querySelector(".eight");
const nineContainer=document.querySelector(".nine");
const minusContainer=document.querySelector(".minus");
const fourContainer=document.querySelector(".four");
const fiveContainer=document.querySelector(".five");
const sixContainer=document.querySelector(".six");
const plusContainer=document.querySelector(".plus");
const oneContainer=document.querySelector(".one");
const twoContainer=document.querySelector(".two");
const threeContainer=document.querySelector(".three");
const zeroContainer=document.querySelector(".zero");
const decimalContainer=document.querySelector(".decimal"); 

const equallContainer=document.querySelector(".part2");

//required variables
let ans;
let operation;
let expression;
let currentValue;

function initialize(){
    ans=0;
    operation="";
    expression="";
    currentValue="";
    //to clear the display
    displayContainer.innerText="";
}
initialize();
function display(value){
    displayContainer.innerText=value;
}

// function concatination(value){
//     expression=expression+value;
//     for(let i=0;i<expression.length;i++){
//         if(expression[i] != '+' || expression[i]!='-' || expression[i]!='*' || expression[i]!='/'){
//                     flag=1;
//         }
//         else{
//             flag=0;
//         }
//     }
//     console.log("there")
//     if(flag===1){
//         number1=number1+value;
//         console.log("number 1 is",number1);
//         display(number1);
//     }
//     else{
//         number2=number2+value;
//         console.log("number 2 is",number2);
//         display(number2);
//     }
// }



function concatination(value){
    if(expression ===""){
        console.log("expression is empty");
        // if(value != '+' || value!='-' || value!='*' || value!='/'){
        //     expression=expression+value;
        //     display(expression);
        //     console.log(" expression is empty and value is not +-*")
        // }
        // else{
        //     console.log("expression is empty and the value is +-*")
        //     plusContainer.removeEventListener('click',()=>{
        //         concatination("+");
        //     })
        // }
        if(value == '+' || value=='-' || value=='*' || value=='/'){
            plusContainer.removeEventListener('click',()=>{
                concatination('+');
            })
        }
        else{
            expression=expression+value;
            // currentValue=expression;
            display(expression);
            console.log(" expression is empty and value is not +-*")
        }
    }
    else{
        if(  (expression.includes('+') || expression.includes('-') || expression.includes('*') || expression.includes('/')) && (expression[0]!="-") ){
            if(value=='+' || value=='-' ||value=='*'|| value=='/'){
                plusContainer.removeEventListener('click',()=>{
                    concatination('+');
                })
            }
            else{
                expression=expression+value;
                // currentValue=expression;
                display(expression);
            }
        }
        else{
            expression=expression+value;
            // currentValue=expression;
            display(expression);
        }
    }
    
}






oneContainer.addEventListener('click',()=>{
    concatination("1");
});
twoContainer.addEventListener('click',()=>{
    concatination("2");
});
threeContainer.addEventListener('click',()=>{
    concatination("3");
});
fourContainer.addEventListener('click',()=>{
    concatination("4");
});
fiveContainer.addEventListener('click',()=>{
    concatination("5");
});
sixContainer.addEventListener('click',()=>{
    concatination("6");
});
sevenContainer.addEventListener('click',()=>{
    concatination("7");
});
eightContainer.addEventListener('click',()=>{
    concatination("8");
});
nineContainer.addEventListener('click',()=>{
    concatination("9");
});
decimalContainer.addEventListener('click',()=>{
    concatination(".");
});



plusContainer.addEventListener('click',()=>{
    concatination('+');
});
minusContainer.addEventListener('click',()=>{
    concatination("-");
})
multiContainer.addEventListener('click',()=>{
    concatination("*");
})
slashContainer.addEventListener('click',()=>{
    concatination("/");
})






//to clear the display
clearContainer.addEventListener('click',()=>{
    initialize();
})

backContainer.addEventListener('click',()=>{
    expression=expression.substring(0,expression.length-1);
    display(expression);
})


equallContainer.addEventListener('click',()=>{
    showResult();
})


function showResult(){
    let num1;
    let num2;
    let myArr=[];
    if(expression!=""){
        if(expression.includes('+',1)){
            operation="+";
            myArr=expression.split("+");
        }
        if(expression.includes('-',1)){
            operation="-";
            myArr=expression.split("-");
        }
        if(expression.includes('*',1)){
            operation="*";
            myArr=expression.split("*");
        }
        if(expression.includes('/',1)){
            operation="/";
            myArr=expression.split("/");
        }
    }  
    num1=myArr[0];
    num2=myArr[1];
    console.log(num1);
    console.log(num2);
    if(operation=="+"){
        ans=parseFloat(num1)+parseFloat(num2);
    }
    if(operation=="-"){
        ans=parseFloat(num1)-parseFloat(num2);
    }
    if(operation=="*"){
        ans=parseFloat(num1)*parseFloat(num2);
    }
    if(operation=="/"){
        ans=parseFloat(num1)/parseFloat(num2);
    }
    // currentValue=ans.toString();
    // ans=Math.round(ans);
    displayContainer.innerText=ans.toString();
    expression=ans.toString();
}