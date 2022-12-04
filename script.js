let OperandBtn;

let calculatorContainer=document.getElementsByClassName('calculator-container')

// create title
let h1=document.createElement('h1')
h1.setAttribute('id', 'title')
h1.innerHTML = 'Calculator'
var title=document.getElementById('title');
calculatorContainer[0].appendChild(h1)

// description tag
let ptag=document.createElement('p')
ptag.setAttribute('id', 'description')
ptag.innerHTML='basic calculator'
var description=document.getElementById('description');
calculatorContainer[0].appendChild(ptag)


// created the table element
let table=document.createElement('table')
calculatorContainer[0].appendChild(table)

// thead created and appended the table
let thead=document.createElement('thead')
table.appendChild(thead)

// table row in thead is created and appended
let thead_tr=document.createElement('tr')
thead.appendChild(thead_tr)

// table head is created and appended
let thead_th=document.createElement('th')
thead_th.setAttribute('colspan','4')
thead_tr.appendChild(thead_th)

// input tag is created and appended in th
let thead_input=document.createElement('input')
thead_input.setAttribute('type', 'text')
thead_input.setAttribute('id','result')
thead_th.appendChild(thead_input)

//======================================tbody====================================================
// tbody is created and appended
let tbody=document.createElement('tbody')
table.appendChild(tbody)

// 1st row is created and appended
let tbody_tr_1=document.createElement('tr')
tbody.appendChild(tbody_tr_1)

// 1st table data is created in 1st table row
let tbody_tr_1_td_1=document.createElement('td')
tbody_tr_1_td_1.setAttribute('colspan', '2')
tbody_tr_1.appendChild(tbody_tr_1_td_1)

let clearBtn=document.createElement('button')
clearBtn.setAttribute('class', 'ClearBtn maxWidth')
clearBtn.setAttribute('id','clear')
clearBtn.innerHTML='Clear'
tbody_tr_1_td_1.appendChild(clearBtn)

// 2nd table data is created in 1st table row
let tbody_tr_1_td_2=document.createElement('td')
tbody_tr_1_td_2.setAttribute('colspan', '2')
tbody_tr_1.appendChild(tbody_tr_1_td_2)

let backspaceBtn=document.createElement('i')
backspaceBtn.setAttribute('class', 'BackSpaceBtn maxWidth fa-solid fa-delete-left')
tbody_tr_1_td_2.appendChild(backspaceBtn)

// 2nd table row is created and appended
let tbody_tr_2=document.createElement('tr')
tbody.appendChild(tbody_tr_2)

// 1st table data is created and appended in 2nd table row
let tbody_tr_2_td_1=document.createElement('td')
tbody_tr_2.appendChild(tbody_tr_2_td_1)

let OperatorBtn1=document.createElement('button')
OperatorBtn1.setAttribute('class','OperatorBtn maxWidth')
OperatorBtn1.innerHTML='('
tbody_tr_2_td_1.appendChild(OperatorBtn1)

// 2nd table data is created and appended in 2nd table row
let tbody_tr_2_td_2=document.createElement('td')
tbody_tr_2.appendChild(tbody_tr_2_td_2)

let OperatorBtn2=document.createElement('button')
OperatorBtn2.setAttribute('class','OperatorBtn maxWidth')
OperatorBtn2.innerHTML=')'
tbody_tr_2_td_2.appendChild(OperatorBtn2)

// 3rd table data is created and appended in 2nd table row
let tbody_tr_2_td_3=document.createElement('td')
tbody_tr_2.appendChild(tbody_tr_2_td_3)

let OperatorBtn3=document.createElement('button')
OperatorBtn3.setAttribute('class','OperatorBtn maxWidth')
OperatorBtn3.innerHTML='%'
tbody_tr_2_td_3.appendChild(OperatorBtn3)

// 4th table data is created and appended in 2nd table row
let tbody_tr_2_td_4=document.createElement('td')
tbody_tr_2.appendChild(tbody_tr_2_td_4)

let OperatorBtn4=document.createElement('button')
OperatorBtn4.setAttribute('class','OperatorBtn maxWidth')
OperatorBtn4.innerHTML='/'
tbody_tr_2_td_4.appendChild(OperatorBtn4)


// 3rd table row is created and appended
let tbody_tr_3=document.createElement('tr')
tbody.appendChild(tbody_tr_3)

// 1st table data is created and appended in 3rd table row
let tbody_tr_3_td_1=document.createElement('td')
tbody_tr_3.appendChild(tbody_tr_3_td_1)

let OperandBtn7=document.createElement('button')
OperandBtn7.setAttribute('class', 'OperandBtn maxWidth')
OperandBtn7.setAttribute('id','7')
OperandBtn7.innerHTML='7'
tbody_tr_3_td_1.appendChild(OperandBtn7)

// 2nd table data is created and appended in 3rd table row
let tbody_tr_3_td_2=document.createElement('td')
tbody_tr_3.appendChild(tbody_tr_3_td_2)

let OperandBtn8=document.createElement('button')
OperandBtn8.setAttribute('class', 'OperandBtn maxWidth')
OperandBtn8.setAttribute('id','8')
OperandBtn8.innerHTML='8'
tbody_tr_3_td_2.appendChild(OperandBtn8)

// 3rd table data is created and appended in 3rd table row
let tbody_tr_3_td_3=document.createElement('td')
tbody_tr_3.appendChild(tbody_tr_3_td_3)

let OperandBtn9=document.createElement('button')
OperandBtn9.setAttribute('class', 'OperandBtn maxWidth')
OperandBtn9.setAttribute('id','9')
OperandBtn9.innerHTML='9'
tbody_tr_3_td_3.appendChild(OperandBtn9)

// 4th table data is created and appended in 3rd table row
let tbody_tr_3_td_4=document.createElement('td')
tbody_tr_3.appendChild(tbody_tr_3_td_4)

let OperatorBtn5=document.createElement('button')
OperatorBtn5.setAttribute('class','OperatorBtn maxWidth basicoperation')
OperatorBtn5.innerHTML='*'
tbody_tr_3_td_4.appendChild(OperatorBtn5)


// 4th table row is created and appended
let tbody_tr_4=document.createElement('tr')
tbody.appendChild(tbody_tr_4)

// 1st table data is created and appended in 4th table row
let tbody_tr_4_td_1=document.createElement('td')
tbody_tr_4.appendChild(tbody_tr_4_td_1)

let OperandBtn4=document.createElement('button')
OperandBtn4.setAttribute('class', 'OperandBtn maxWidth')
OperandBtn4.setAttribute('id','4')
OperandBtn4.innerHTML='4'
tbody_tr_4_td_1.appendChild(OperandBtn4)

// 2nd table data is created and appended in 4th table row
let tbody_tr_4_td_2=document.createElement('td')
tbody_tr_4.appendChild(tbody_tr_4_td_2)

let OperandBtn5=document.createElement('button')
OperandBtn5.setAttribute('class', 'OperandBtn maxWidth')
OperandBtn5.setAttribute('id','5')
OperandBtn5.innerHTML='5'
tbody_tr_4_td_2.appendChild(OperandBtn5)

// 3rd table data is created and appended in 4th table row
let tbody_tr_4_td_3=document.createElement('td')
tbody_tr_4.appendChild(tbody_tr_4_td_3)

let OperandBtn6=document.createElement('button')
OperandBtn6.setAttribute('class', 'OperandBtn maxWidth')
OperandBtn6.setAttribute('id','6')
OperandBtn6.innerHTML='6'
tbody_tr_4_td_3.appendChild(OperandBtn6)

// 4th table data is created and appended in 4th table row
let tbody_tr_4_td_4=document.createElement('td')
tbody_tr_4.appendChild(tbody_tr_4_td_4)

let OperatorBtn6=document.createElement('button')
OperatorBtn6.setAttribute('class', 'OperatorBtn maxWidth basicoperation')
OperatorBtn6.setAttribute('id','subtract')
OperatorBtn6.innerHTML='-'
tbody_tr_4_td_4.appendChild(OperatorBtn6)


// 5th table row is created and updated
let tbody_tr_5=document.createElement('tr')
tbody.appendChild(tbody_tr_5)

// 1st table data is created and appended in 5th table row
let tbody_tr_5_td_1=document.createElement('td')
tbody_tr_5.appendChild(tbody_tr_5_td_1)

let OperandBtn1=document.createElement('button')
OperandBtn1.setAttribute('class', 'OperandBtn maxWidth')
OperandBtn1.setAttribute('id','1')
OperandBtn1.innerHTML='1'
tbody_tr_5_td_1.appendChild(OperandBtn1)

// 2nd table data is created and appended in 5th table row
let tbody_tr_5_td_2=document.createElement('td')
tbody_tr_5.appendChild(tbody_tr_5_td_2)

let OperandBtn2=document.createElement('button')
OperandBtn2.setAttribute('class', 'OperandBtn maxWidth')
OperandBtn1.setAttribute('id','1')
OperandBtn2.innerHTML='2'
tbody_tr_5_td_2.appendChild(OperandBtn2)

// 3rd table data is created and appended in 5th table row
let tbody_tr_5_td_3=document.createElement('td')
tbody_tr_5.appendChild(tbody_tr_5_td_3)

let OperandBtn3=document.createElement('button')
OperandBtn3.setAttribute('class', 'OperandBtn maxWidth')
OperandBtn3.setAttribute('id','3')
OperandBtn3.innerHTML='3'
tbody_tr_5_td_3.appendChild(OperandBtn3)

// 4th table data is created and appended in 5th table row
let tbody_tr_5_td_4=document.createElement('td')
tbody_tr_5.appendChild(tbody_tr_5_td_4)

let OperatorBtn7=document.createElement('button')
OperatorBtn7.setAttribute('class', 'OperatorBtn maxWidth basicoperation')
OperatorBtn7.setAttribute('id','add')
OperatorBtn7.innerHTML='+'
tbody_tr_5_td_4.appendChild(OperatorBtn7)


// 6th table row is created and updated
let tbody_tr_6=document.createElement('tr')
tbody.appendChild(tbody_tr_6)

// 1st table data is created and appended in 6th table row
let tbody_tr_6_td_1=document.createElement('td')
tbody_tr_6.appendChild(tbody_tr_6_td_1)

let OperandBtn0=document.createElement('button')
OperandBtn0.setAttribute('class', 'OperandBtn maxWidth')
OperandBtn0.setAttribute('id','0')
OperandBtn0.innerHTML='0'
tbody_tr_6_td_1.appendChild(OperandBtn0)

// 2nd table data is created and appended in 6th table row
let tbody_tr_6_td_2=document.createElement('td')
tbody_tr_6.appendChild(tbody_tr_6_td_2)

let OperandBtnDot=document.createElement('button')
OperandBtnDot.setAttribute('class','OperandBtn maxWidth')
OperandBtnDot.innerHTML='.'
tbody_tr_6_td_2.appendChild(OperandBtnDot)

// 3rd table data is created and appended in 6th table row
let tbody_tr_6_td_3=document.createElement('td')
tbody_tr_6_td_3.setAttribute('colspan', '2')
tbody_tr_6.appendChild(tbody_tr_6_td_3)

let OperatorBtn9=document.createElement('button')
OperatorBtn9.setAttribute('class', 'EvaluateBtn maxWidth')
OperandBtn9.setAttribute('id','equal')
OperatorBtn9.innerHTML='='
tbody_tr_6_td_3.appendChild(OperatorBtn9)























let ClearBtn=document.querySelector('.ClearBtn')
let OperatorBtn = document.querySelectorAll('.OperatorBtn')
OperandBtn = document.querySelectorAll('.OperandBtn')
let BackSpaceBtn = document.querySelector('.BackSpaceBtn')
let EvaluateBtn = document.querySelector('.EvaluateBtn')
let outputDisplay = document.querySelector('#result')


let currentValue = outputDisplay.value || '';
let cal_regExp = /^[\d\%\*\+\.\(\)/-\s]*$/;

outputDisplay.addEventListener('input',(e)=>{
   // Track the current value
    if (cal_regExp.test(e.target.value)) {
        currentValue = e.target.value;
    } else {
        // Users enter the not supported characters
        // Restore the value and selection
        alert('Only Numbers and Operators are allowed')
        e.target.value = currentValue;
        //e.target.setSelectionRange(selection.selectionStart, selection.selectionEnd);
    }
})

outputDisplay.addEventListener('keyup',(e)=>{
    console.log(e.code)
    console.log(e.key)
    if(e.key === 'Backspace'){
        Backspace()
    }
    if(e.key === 'Enter'){
        Execute()
    }
})

for(let btns of OperandBtn){
    btns.addEventListener('click',(e)=>{
        let BtnValue = btns.innerText
        currentValue += BtnValue
        outputDisplay.value = currentValue
    })
}

for(let btns of OperatorBtn){
    btns.addEventListener('click',(e)=>{
        if(currentValue.length === 0){
            alert('enter the numbers first')
        }else{
            let BtnValue = btns.innerText
            currentValue += BtnValue
            outputDisplay.value = currentValue
        }
    })
}

BackSpaceBtn.addEventListener('click',Backspace)

function Backspace(){
    console.log('inside the Backspace Btn ====')
    currentValue = currentValue.substring(0,currentValue.length-1)
    console.log(currentValue)
    outputDisplay.value = currentValue
}

ClearBtn.addEventListener('click',(e)=>{
    currentValue = ''
    outputDisplay.value = currentValue
})

EvaluateBtn.addEventListener('click',Execute)

function Execute(){
    console.log('inside the evaluate btn ===')
    let res = EvaluateExpression(currentValue.split(''))
    outputDisplay.value = res
}

function EvaluateExpression(arr){
    console.log('inside the EvaluateExpression function ====')
    console.log(arr)
    if(arr.length !== 0){
        let length = arr.length
        let tempstr = ''
        let OperandStack = new Array()
        let OperatorStack = new Array()
        for(let i=0;i<length;i++){
            if(IsOperand(arr[i])){
                tempstr += arr[i]
            }
            else if(tempstr !== ''){
                OperandStack.push(parseFloat(tempstr))
                //console.log("OperandStack = ",OperandStack)
                tempstr = ''
            }
            if(IsOperator(arr[i])){
                if(arr[i] === '(' || OperatorStack.length === 0){
                    OperatorStack.push(arr[i])
                }
                else if(arr[i] === ')'){
                    while(OperatorStack[OperatorStack.length-1] !== '('){
                        let operator = OperatorStack.pop()
                        if(OperandStack.length >= 2){
                            let top1 = OperandStack.pop()
                            let top2 = OperandStack.pop()
                            let res = Evaluate(operator,top1,top2)
                            if(res !== 'Infinity'){
                                OperandStack.push(res)
                                //console.log('OperandStack = ',OperandStack)
                            }else{
                                return 'Infinity'
                            }
                        }else{
                            return 'Error'
                        }
                    }
                    OperatorStack.pop()
                }
                else{
                    let arrtoppri = getPriority(arr[i])
                    while((OperatorStack.length > 0)&&(getPriority(OperatorStack[OperatorStack.length-1]) > arrtoppri)){
                         let operator = OperatorStack.pop()
                         //console.log("operator = ",operator)
                            if(OperandStack.length >= 2){
                                let top1 = OperandStack.pop()
                                let top2 = OperandStack.pop()
                                let res = Evaluate(operator,top1,top2)
                                if(res !== 'Infinity'){
                                    OperandStack.push(res)
                                    //console.log('OperandStack = ',OperandStack)
                                }else{
                                    return 'Infinity'
                                }
                            }else{
                                return 'Error'
                            }
                    }
                    OperatorStack.push(arr[i])
                }
            }
        }
        if(tempstr !== ''){
            OperandStack.push(parseFloat(tempstr))
            //console.log('2nd OperandStack = ',OperandStack)
        }
        while(OperatorStack.length > 0){
            let Operator = OperatorStack.pop()
            //console.log('2nd Operator = ',Operator)
             if(OperandStack.length >= 2){
                let top1 = OperandStack.pop()
                let top2 = OperandStack.pop()
                let res = Evaluate(Operator,top1,top2)
                if(res !== 'Infinity'){
                    OperandStack.push(res)
                    //console.log('OperandStack = ',OperandStack)
                }else{
                    return 'Infinity'
                }
            }else{
                return 'Error'
            }
        }
        //console.log('final operandstack  = ',OperandStack)
        return OperandStack[OperandStack.length-1]
    }
    else{
        return ''
    }
}

function IsOperand(x){
    if((x >= '0' && x <= '9')||(x === '.')){
        return true
    }else{
        return false
    }
}

function IsOperator(x){
    let set1 = new Set(['/','*','-','+','(',')','%'])
    if(set1.has(x)){
        return true
    }else{
        return false 
    }
}

function getPriority(x){
    if((x === '+')||(x === '-')){
        return 1
    }
    if((x === '*')||(x === '/')||(x==='%')){
        return 2
    }
    return 0
}

function Evaluate(x,top1,top2){
    let res = 0
    if(x === '/'){
        res = top2/top1
    }
    if(x === '+'){
        res = top2 + top1
    }
    if(x === '-'){
        res = top2 - top1
    }
    if(x === '*'){
        res = top2 * top1
    }
    if(x==='%') {
        res = top2%top1
    }
    return res
}















