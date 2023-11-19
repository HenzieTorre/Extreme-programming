const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');
const overdisplay = document.querySelector('#overdisplay');
const btnLoan = document.getElementById('Loan');




// main.js

document.addEventListener('DOMContentLoaded', function () {
    // 获取 Loan 按钮
    var loanButton = document.getElementById('Loan');

    // 获取利率计算器容器
    var interestRateContainer = document.querySelector('.interestRate');

    // 添加 Loan 按钮的点击事件处理程序
    loanButton.addEventListener('click', function () {
        // 隐藏原本的计算器
        document.querySelector('.calculator').style.display = 'none';
        // 显示利率计算器
        interestRateContainer.style.display = 'block';
    });

    // 添加返回按钮的点击事件处理程序
    var backButton = document.getElementById('back');
    backButton.addEventListener('click', function () {
        // 显示原本的计算器
        document.querySelector('.calculator').style.display = 'block';
        // 隐藏利率计算器
        interestRateContainer.style.display = 'none';
    });
});



function jg(num) {

    if ((num | 0) == num) return num;
    return parseFloat(num.toFixed(9));
} 

function start() {


    buttons.forEach((item) => {
        item.onclick = () => {
            if (item.id == 'clear') {
                display.innerText = '';
                overdisplay.innerText = '';
            }

            else if (item.id == 'backspace') {

                var str = display.innerText.toString();
                display.innerText = str.substr(0, str.length - 1);
            }
                
            else if (display.innerText != '' && item.id == 'equal') {
                var str = display.innerText;
                str = str.replace(/ln/g, 'Math.log').replace(/√/g, 'Math.sqrt').replace(/sin/g, 'Math.sin').replace(/\^/g, '**').replace(/cos/g, 'Math.cos').replace(/tan/g, 'Math.tan');
                overdisplay.innerText = display.innerText + "=";
                var ans = eval(str);
                // console.log(ans);
                display.innerText = jg(ans);

                display.innerText = display.innerText.replace('Infinity','Error');

                var xhr = new XMLHttpRequest();
                var formData = 'equation=' + str + '&result=' + ans;
                xhr.onreadystatechange = function () {
                    if (this.readyState === 4) {
                        if (this.status === 200) {

                        } else {
                            alert(this.status);
                        }
                    }
                }
                xhr.open("POST","/Login_war_exploded/Message",true);
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                xhr.send(formData);

            }
                
            else if (display.innerText == '' && item.id == 'equal') {
                display.innerText = '';
            }
                
            else if (display.innerText != '' && item.id == 'reverse') {
                if (display.innerText != '0') {
                    display.innerText = eval(display.innerText * -1);
                }
            }
                
            else if (item.id >= '0' && item.id <= '9') {
                if (display.innerText == '0') {
                    display.innerText = item.id;
                }
                else {
                    display.innerText += item.id;
                }
            }
                
            else if (item.className == 'btn-operator base') {

                if (display.innerText == '') {
                    if (item.id == '-')
                        display.innerText = item.id;
                }
                else {
                    str = display.innerText;
                    if (str[str.length - 1] >= '0' && str[str.length - 1] <= '9')
                        display.innerText += item.id;
                }
            }
                
            else if (item.id == '.') {
                str = display.innerText;
                if (str[str.length - 1] >= '0' && str[str.length - 1] <= '9') {
                    display.innerText += item.id;
                }
            }
                
            else if (item.id == '(' || item.id == ')') {
                display.innerText += item.id;
            }
                
            else if (item.id == 'fun1') {              
                display.innerText = "1/" + display.innerText ;
            }
                
            else if (item.id == 'fun2') {
                display.innerText = display.innerText + "^";
                
            }
                
            else if (item.id == 'fun3') {
                
                display.innerText += "√(";

            }

            else if (item.id == 'sin') {
                display.innerText += "sin(";
            }

            else if (item.id == 'cos') {
                display.innerText += "cos(";
            }

            else if (item.id == 'tan') {
                display.innerText += "tan(";
            }

            
        }
    })
}





start();



    
