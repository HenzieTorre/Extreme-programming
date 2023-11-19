var name;
var pass1;
var sh;
var phone;
var mail;

function checkname() {
    name = document.getElementById("name").value;
    var reg = /^[\u4e00-\u9fa5a-zA-Z]{2,4}$/;
    if(name==''){ 
        document.getElementById("cw").style.backgroundImage=" url(image/im1.png)";
        document.getElementById("cw").className="wrong";
        document.getElementById("cw").innerText="请输入用户名";
        document.getElementById("jc").innerText=" ";  
      
    } else{
     
         if (reg.test(name)) {
            document.getElementById("jc").innerHTML="<img src='im2.png'/>";
            document.getElementById("cw").innerText=" ";
            return true;
        } else {
            document.getElementById("cw").style.backgroundImage=" url(image/im1.png)";
            document.getElementById("cw").className="wrong";
            document.getElementById("cw").innerText="请输入有效的用户名";
            document.getElementById("jc").innerText=" ";
        
        }
       
    }
   
 
}
function checkpass() {
    pass1 = document.getElementById("pass1").value;
    var reg = /^[0-9a-zA-Z]{6,12}$/;
 
    if (reg.test(pass1)) {
        document.getElementById("jc1").innerHTML="<img src='im2.png'/>";
        document.getElementById("cw1").innerText=" ";
        return true;
    } else {
        document.getElementById("cw1").style.backgroundImage=" url(image/im1.png)";
        document.getElementById("cw1").className="wrong";
        document.getElementById("cw1").innerText="密码长度为6—12位";
        document.getElementById("jc1").innerText=" ";
     
    }
 
}
function checkpassw() {
    var pass2 = document.getElementById("pass2").value;
    if (pass2==pass1&&pass2!='') {
        document.getElementById("jc2").innerHTML="<img src='im2.png'/>";
        document.getElementById("cw2").innerText=" ";
        return true;
    } else {
        document.getElementById("cw2").style.backgroundImage=" url(image/im1.png)";
        document.getElementById("cw2").className="wrong";
        document.getElementById("cw2").innerText="请再次输入密码";
        document.getElementById("jc2").innerText=" ";
 
    }
 
}
var city = ['湖北','湖南','北京','上海'];  
var school = [['======请选择======'],  
                ['=======请选择======','武汉大学','华中科技大学','中国地质大学','武汉理工大学','华中农业大学','华中师范大学','中南财经政法大学','中南民族大学','湖北大学','武汉科技大学','长江大学','武汉工程大学','武汉纺织大学','武汉轻工大学','湖北工业大学','湖北中医药大学','江汉大学','湖北师范大学','三峡大学','黄冈师范学院','湖北民族大学','汉江师范学院','湖北文理学院','武汉体育学院','湖北美术学院','湖北汽车工业学院','湖北工程学院','湖北理工学院','湖北科技学院','湖北医药学院','湖北警官学院','荆楚理工学院','武汉音乐学院','湖北经济学院','武汉商学院','湖北第二师范学院','湖北大学知行学院','武汉科技大学城市学院','三峡大学科技学院','江汉大学文理学院'],  
                ['=======请选择======','长沙学院','湘潭大学','吉首大学','湖南大学','中南大学','湖南科技大学','湖南农业大学','中南林业科技大学','湖南中医药大学','湖南师范大学','湖南师范大学'],  
                ['=======请选择======','清华大学 ','北京大学',' 中国人民大学 ','北京邮电大学',' 北京航空航天大学 ','北京科技大学 ','北京化工大学 ','首都经贸大学 ','北京理工大学',' 北京交通大学 ','北京工业大学',' 北方工业大学',' 北京师范大学 ','首都师范大学',' 北京外国语大学 ','对外经贸大学',' 北京语言大学',' 中国农业大学',' 北京电影学院',' 中国石油大学','  北京大学医学部',' 中国协和医科大学',' 首都医科大学',' 北京中医药大学',' 中国地质大学 ','外交学院 ','中国青年政治学院 ','中央财经大学','中国传媒大学 ','中央音乐学院 ','北京体育大学 ','中国矿业大学','中央美术学院',' 中国人民公安大学',' 北京印刷学院 ','中国戏曲学院','北京林业大学 ','中央民族大学',' 中国政法大学',' 华北电力大学',' 北京第二外国语学院 ','北京信息科技大学',' 北京建筑工程学院',' 北京科技职业学院','中国音乐学院 ','中央广播电视大学',' 北京联合大学',' 北京石油化工学院','北京电子科技学院 ','北京教育学院 ','北京服装学院',' 中央戏剧学院'],  
                ['=======请选择======','复旦大学','上海交通大学 ','同济大学',' 华东师范大学 ','华东理工大学 ','东华大学',' 华东政法大学 ','上海大学',' 上海理工大学',' 上海海事大学',' 上海电力大学 ','上海师范大学','上海外国语大学 ','上海财经大学 ','上海对外经贸大学 ','上海海洋大学',' 上海中医药大学',' 上海工程技术大学',' 上海海关学院 ','上海科技大学 ','上海第二工业大学',' 上海应用技术大学',' 上海纽约大学']];  
window.onload=function(){  
    createCity();     
    document.getElementById("city").onchange= createschool;  
};  
function createCity(){  
    var ci = document.getElementById("city");  
    for(var i in city){  
        var op = new Option(city[i],city[i]);  
        ci.options.add(op);  
    }  
}  
function createschool(){  
    var index = document.getElementById("city").selectedIndex;   
    sh = document.getElementById("school");
    sh.options.length=0;   
    for(var i in school[index]){  
        var op = new Option(school[index][i],school[index][i]);  
        sh.options.add(op);  
    }  
} 
 
function checkphone() {
    phone = document.getElementById("phone").value;
    var reg = /^1[3578]\d{9}$/;
    if(phone!=''){
         if (reg.test(phone)) {
            document.getElementById("jc4").innerHTML="<img src='im2.png'/>";
            document.getElementById("cw4").innerText=" ";
            return true;
        } else {
            document.getElementById("cw4").style.backgroundImage=" url(image/im1.png)";
            document.getElementById("cw4").className="wrong";
            document.getElementById("cw4").innerText="请输入有效的手机号码";
            document.getElementById("jc4").innerText=" ";
            
        }
    }else{
        document.getElementById("cw4").style.backgroundImage=" url(image/im1.png)";
        document.getElementById("cw4").className="wrong";
        document.getElementById("cw4").innerText="请输入手机号码";
        document.getElementById("jc4").innerText=" ";
        
    }
}
function checkmail() {
    mail= document.getElementById("mail").value;
    var reg = /^\w{1,}@\w{1,}(.\w{1,}){1,}$/;
    if(mail!=''){
         if (reg.test(mail)) {
            document.getElementById("jc5").innerHTML="<img src='im2.png'/>";
            document.getElementById("cw5").innerText=" ";
            return true;
        } else {
            document.getElementById("cw5").style.backgroundImage=" url(image/im1.png)";
            document.getElementById("cw5").className="wrong";
            document.getElementById("cw5").innerText="请输入有效的邮箱";
            document.getElementById("jc5").innerText=" ";
           
        }
    }else{
        document.getElementById("cw5").style.backgroundImage=" url(image/im1.png)";
        document.getElementById("cw5").className="wrong";
        document.getElementById("cw5").innerText="请输入邮箱";
        document.getElementById("jc5").innerText=" ";
        
    }
}
function check(){
    var now=new Date();
    var hour=now.getHours();
    var minute=now.getMinutes();
    var second=now.getSeconds();
    var week=now.getDay();
    var a=['日','一','二','三','四','五','六'];
    var str="现在是："+hour+":"+minute+":"+second+",星期"+a[week];
    if( checkname()==true&&checkpass()==true&&checkpassw()==true&&checkphone()==true&&checkmail()==true){

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function (){
            if (this.readyState === 4 && this.status === 200){
            }
            else {
                alert(this.status);
            }
        }
        xhr.open("GET","/Index/IndexServlet?username="+name+"&userpassword="+pass1+"&school="+sh+"&phone="+phone+"&mail="+mail,true);
        xhr.send();

        location.href="../登录界面/login.html";
    }else{
        return false;
    }
}