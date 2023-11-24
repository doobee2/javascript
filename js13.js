var html = "";
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var btn3 = document.getElementById("btn3");
    var btn4 = document.getElementById("btn4");
    var btn5 = document.getElementById("btn5");
    var btn6 = document.getElementById("btn6");
    var btn7 = document.getElementById("btn7");
    var btn8 = document.getElementById("btn8");

    var res = document.getElementById("res");
    var res2 = document.getElementById("res2");

    btn1.addEventListener("click", function(){
        objectInfo()
    });
    function objectInfo(){
        for(var key in history){                        
            html += "<p>"+key+":"+history[key]+"</p>";
        }
        res.innerHTML = html;
    }

    btn2.addEventListener("click", function(){
        res2.innerText = location.href;
        setTimeout(function() {          //setTimeout : 주기를 가진 후에 실행되게끔, 뒤에 시간기입 
        location.href = "http://www.naver.com";
        }, 2500);
    });

    btn3.addEventListener("click", function(){
        location.reload();
    });

    btn4.addEventListener("click", function(){      //사이트 이동(변경)이기 때문에 뒤로가기 없음
        location.replace("http://www.google.com");  //메소드이기 때문에 = "링크" 의 형태로 적지않고
    });                                             //("링크")의 형태로 적음
    
    btn5.addEventListener("click", function(){      //뒤로가기 있음
        location.assign("http://www.daum.net");     //메소드로 쓰고 싶으면 assign 많이 씀
    });

    btn6.addEventListener("click", function(){      //history 방문했던 정보 알 수 있음
        history.back();                             //history.back(); ()안에 숫자 기입하면 그만큼 이동
    });
    
    btn7.addEventListener("click", function(){   
        history.forward();
    });

    btn8.addEventListener("click", function(){
        //history.go(1);  //한 단계 앞으로
        //history.go(2);  //두 단계 앞으로
        //history.go(-1); //한 단계 뒤로
        history.go(-2); //두 단계 뒤로
    });
    
    
    function moving(){
    var loc = document.getElementById("sel");
    if(loc.value!=""){          // !=없는경우 ==있는(같을)경우            
    //location.href = loc.value;
    //location.replace(loc.value);
    locarion.assign(loc.value);
}
}