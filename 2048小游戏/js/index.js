//记录得分
var score=0;
var first_colick = 0
//将16个格子的id存储在二维数组a中
//记录上
var a=[['a1','a2','a3','a4'],['b1','b2','b3','b4'],['c1','c2','c3','c4'],['d1','d2','d3','d4']];
//记录下
var b=[['d4','d3','d2','d1'],['c4','c3','c2','c1'],['b4','b3','b2','b1'],['a4','a3','a2','a1']];
//记录左
var c=[['d1','c1','b1','a1'],['d2','c2','b2','a2'],['d3','c3','b3','a3'],['d4','c4','b4','a4']];
//记录右
var d=[['a4','b4','c4','d4'],['a3','b3','c3','d3'],['a2','b2','c2','d2'],['a1','b1','c1','d1']];
var xx=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
 /*小方块对象，与放入盒子中的num*/
function create_num_color(kuai_object,num){
    //var kaui_object;/*存放盒子对象*/
    switch (num){
    case 2:
    kuai_object.style.backgroundColor="#efe5db";
    kuai_object.innerHTML="2";
    kuai_object.style.color="#7a6d65";
    kuai_object.style.fontSize="65px";
    kuai_object.style.textAlign="center";
    kuai_object.style.lineHeight="98px";
    break;
    case 4:
    kuai_object.style.backgroundColor="#eddcbe";
    kuai_object.innerHTML="4";
    kuai_object.style.color="#7a6d65";
    kuai_object.style.fontSize="65px";
    kuai_object.style.textAlign="center";
    kuai_object.style.lineHeight="98px";
    break;
    case 8:
    kuai_object.style.backgroundColor="#f3b079";
    kuai_object.innerHTML="8";
    kuai_object.style.color="#ffffff";
    kuai_object.style.fontSize="65px";
    kuai_object.style.textAlign="center";
    kuai_object.style.lineHeight="98px";
    break;
    case 16:
    kuai_object.style.backgroundColor="#f7925c";
    kuai_object.innerHTML="16";
    kuai_object.style.color="#ffffff";
    kuai_object.style.fontSize="60px";
    kuai_object.style.textAlign="center";
    kuai_object.style.lineHeight="98px";
    break;
    case 32:
    kuai_object.style.backgroundColor="#f57656";
    kuai_object.innerHTML="32";
    kuai_object.style.color="#ffffff";
    kuai_object.style.fontSize="60px";
    kuai_object.style.textAlign="center";
    kuai_object.style.lineHeight="98px";
    break;
    case 64:
    kuai_object.style.backgroundColor="#f4522c";
    kuai_object.innerHTML="64";
    kuai_object.style.color="#ffffff";
    kuai_object.style.fontSize="60px";
    kuai_object.style.textAlign="center";
    kuai_object.style.lineHeight="98px";
    break;
    case 128:
    kuai_object.style.backgroundColor="#edce71";
    kuai_object.innerHTML="128";
    kuai_object.style.color="#7a6d65";
    kuai_object.style.fontSize="45px";
    kuai_object.style.textAlign="center";
    kuai_object.style.lineHeight="98px";
    break;
    case 256:
    kuai_object.style.backgroundColor="#e6d151";
    kuai_object.innerHTML="256";
    kuai_object.style.color="#ffffff";
    kuai_object.style.fontSize="45px";
    kuai_object.style.textAlign="center";
    kuai_object.style.lineHeight="98px";
    break;
    case 512:
    kuai_object.style.backgroundColor="#1200ff";
    kuai_object.innerHTML="512";
    kuai_object.style.color="#7a6d65";
    kuai_object.style.fontSize="45px";
    kuai_object.style.textAlign="center";
    kuai_object.style.lineHeight="98px";
    break;
    case 1024:
    kuai_object.style.backgroundColor="#cc00ff";
    kuai_object.innerHTML="1024";
    kuai_object.style.color="#ffffff";
    kuai_object.style.fontSize="35px";
    kuai_object.style.textAlign="center";
    kuai_object.style.lineHeight="98px";
    break;
    case 2048:
    kuai_object.style.backgroundColor="#000000";
    kuai_object.innerHTML="2048";
    kuai_object.style.color="#ffffff";
    kuai_object.style.fontSize="35px";
    kuai_object.style.textAlign="center";
    kuai_object.style.lineHeight="98px";
    break;
    }
  }
//随机生成数字函数（‘2’或‘4’）
function suiji(){
  var flag_x=[];//定义一个空数组，记录空的小方块的x坐标
  var flag_y=[];//定义一个空数组，记录空的小方块的y坐标
    for (var i=0;i<4 ;i++ )//检查所有为空的小方块，并记录其下标
    {
      for (var j=0;j<4 ;j++ )
      {
        if(document.getElementById(a[i][j]).innerHTML==""){//getElementById() 方法可返回对拥有指定 ID 的第一个对象的引用
          flag_x.push(i);         //innerHTML==""  该小方块为空
          flag_y.push(j);
        }
      }
    }
    if(flag_x.length!=0){//当一个空的小方块都没有时，则游戏结束
      //存在空的小方块，可以生成2或4
      var r=[2,4];
      var num_object=Math.floor(Math.random() * flag_x.length);
      var object=document.getElementById(a[flag_x[num_object]][flag_y[num_object]]);
      create_num_color(object,r[Math.floor(Math.random() * 2)]);
      return;
    }
  }

/*清空小方块的内容*/
  function qingkong(kuai_object){
    kuai_object.style.backgroundColor="#cdc1b3";//空白时的颜色
    kuai_object.innerHTML="";//清空数字
  }
// 更新得分
  function update_score(num){
    document.getElementById("caidan").innerHTML=num;
  }

//左
  function remove_zuo(x,y,n){
    n++;
    if(x==0){
      return remove_zuo(x+parseInt((y+1)/4),(y+1)%4,n);//
    }
    if(x>3){
      return n;
    }else{      
        var two=document.getElementById(c[x][y]);
        var one=document.getElementById(c[x-1][y]);
      if(one.innerHTML==""&&two.innerHTML!=""){//第二行不空，第一行空
        create_num_color(one,parseInt(two.innerHTML));
        qingkong(two);
        return remove_zuo(x-1,y,n);
      }
      if(one.innerHTML!=""&&two.innerHTML!=""){//两行都不等于空
        if(one.innerHTML==two.innerHTML&&xx[x-1][y]==0){
          xx[x-1][y]=1;
          score=score+2*two.innerHTML;
          update_score(score);
          create_num_color(one,2*two.innerHTML);
          qingkong(two);
          return remove_zuo(x+parseInt((y+1)/4),(y+1)%4,n);//
        }
      }
      }
      return remove_zuo(x+parseInt((y+1)/4),(y+1)%4,n);//
  }

//上
  function remove_shang(x,y,n){
    n++;
    if(x==0){
      return remove_shang(x+parseInt((y+1)/4),(y+1)%4,n);
    }
    if(x>3){
      return n;
    }else{      
        var two=document.getElementById(a[x][y]);
        var one=document.getElementById(a[x-1][y]);
      if(one.innerHTML==""&&two.innerHTML!=""){//第二行不空，第一行空
        create_num_color(one,parseInt(two.innerHTML));
        qingkong(two);
        return remove_shang(x-1,y,n);
      }
      if(one.innerHTML!=""&&two.innerHTML!=""){//两行都不等于空
        if(one.innerHTML==two.innerHTML&&xx[x-1][y]==0){
          xx[x-1][y]=1;
          score=score+2*two.innerHTML;
          update_score(score);
          create_num_color(one,2*two.innerHTML);
          qingkong(two);
          return remove_shang(x+parseInt((y+1)/4),(y+1)%4,n);
        }
      }
      }
      return remove_shang(x+parseInt((y+1)/4),(y+1)%4,n);
  }

//右
  function remove_you(x,y,n){
    n++;
    if(x==0){
      return remove_you(x+parseInt((y+1)/4),(y+1)%4,n);
    }
    if(x>3){
      return n;
    }else{      
        var two=document.getElementById(d[x][y]);
        var one=document.getElementById(d[x-1][y]);
      if(one.innerHTML==""&&two.innerHTML!=""){//第二行不空，第一行空
        create_num_color(one,parseInt(two.innerHTML));
        qingkong(two);
        return remove_you(x-1,y,n);
      }
      if(one.innerHTML!=""&&two.innerHTML!=""){//两行都不等于空
        if(one.innerHTML==two.innerHTML&&xx[x-1][y]==0){
          xx[x-1][y]=1;
          score=score+2*two.innerHTML;
          update_score(score);
          create_num_color(one,2*two.innerHTML);
          qingkong(two);
          return remove_you(x+parseInt((y+1)/4),(y+1)%4,n);//
        }
      }
      }
      return remove_you(x+parseInt((y+1)/4),(y+1)%4,n);//
  }

//下

  function remove_xia(x,y,n){
    n++;
    if(x==0){//防止越界
      return remove_xia(x+parseInt((y+1)/4),(y+1)%4,n);//
    }
    if(x>3){//终止循环
      return n;
      
    }else{      
        var two=document.getElementById(b[x][y]);
        var one=document.getElementById(b[x-1][y]);
      if(one.innerHTML==""&&two.innerHTML!=""){//第二行不空，第一行空
        create_num_color(one,parseInt(two.innerHTML));
        qingkong(two);
        return remove_xia(x-1,y,n);//
      }
      if(one.innerHTML!=""&&two.innerHTML!=""){//两行都不等于空
        if(one.innerHTML==two.innerHTML&&xx[x-1][y]==0){//相等
          xx[x-1][y]=1;
          //score
          score=score+2*two.innerHTML;
          update_score(score);

          create_num_color(one,2*two.innerHTML);
          qingkong(two);
          return remove_xia(x+parseInt((y+1)/4),(y+1)%4,n);//
        }
      }
      }
      return remove_xia(x+parseInt((y+1)/4),(y+1)%4,n);//
  }

  function zero(){
    for (var i=0;i<4 ;i++ )
    {
      for (var j=0;j<4 ;j++ )
      {
        xx[i][j]=0;
      }
    }
  }
  function check_over(){
    var jishu=0;
    for (var i=0;i<4 ;i++ )
    {
      for (var j=0;j<4 ;j++ )
      {
        if(document.getElementById(a[i][j]).innerHTML!=""){
          jishu=jishu+1;
        }
      }
    }
    if(jishu==16){
      alert("游戏结束!");
    }
  }
  function f_key(){
    if(first_colick == 0)
      {
        var audio = document.createElement('audio');
        audio.src = './music/bjmusic.mp3';
        audio.autoplay = 'autoplay';
        audio.loop = 'loop';
        first_colick = 1
        console.log(audio)
      }
    function addSoundEffect() {
      var audio = document.createElement('audio');
      audio.src = './music/dianji.mp3';
      audio.autoplay = 'autoplay';
    }
    document.addEventListener('keydown', addSoundEffect);
      
    if(window.event.keyCode==97 || window.event.keyCode==37){//左
      
      var num=0;
      zero();
     num=remove_zuo(0,0,num)
     if(num!=17){
       //随机生成小方块的条件是移动，且空
      suiji();
     }else{
       check_over();
     }
    }
    if(window.event.keyCode==119 || window.event.keyCode==38){//上
     var num=0;
     zero();
     num=remove_shang(0,0,num)
     if(num!=17){
       //随机生成小方块的条件是移动，且空
      suiji();
     }else{
       check_over();
     }
    }
    if(window.event.keyCode==100 || window.event.keyCode==39){//右
      var num=0;
      zero();
     num=remove_you(0,0,num)
     if(num!=17){
       //随机生成小方块的条件是移动，且空
      suiji();
     }else{
       check_over();
     }
    }
    if(window.event.keyCode==115 || window.event.keyCode==40){//下  
      var num=0;
      zero();
     num=remove_xia(0,0,num)
     if(num!=17){
       //随机生成小方块的条件是移动，且空
      suiji();
     }else{
       check_over();
     }
    }
  }   
  /*按键时触发*/
  function restart() {
    // 将得分重置为0
    score = 0;
    update_score(score);
  
    // 清空所有小方块的内容
    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 4; j++) {
        var obj = document.getElementById(a[i][j]);
        qingkong(obj);
      }
    }
    // 随机生成一个小方块
    suiji();
  }  
  document.onkeypress=f_key;

  window.onload=function(){
    //首次生成随机块
    suiji();
  }