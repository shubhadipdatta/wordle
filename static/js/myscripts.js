/*!
* Start Bootstrap - Bare v5.0.7 (https://startbootstrap.com/template/bare)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function myGame() {
  
    var unused_letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var used_letters="";
    var word= document.getElementById("word").value;
    var time_elapsed;
    //document.getElementById('word').style.visibility='hidden';
    var guess_count= document.getElementById("guess_count").value;

    var guess1= document.getElementById("guess1").value;
    var guess2= document.getElementById("guess2").value;
    var guess3= document.getElementById("guess3").value;
    var guess4= document.getElementById("guess4").value;
    var guess5= document.getElementById("guess5").value;
    var guess6= document.getElementById("guess6").value;
    var start_time= document.getElementById("start_time").value;


  
    var output=[guess1,guess2,guess3,guess4,guess5,guess6]
    for (var row = 0; row < output.length; row++) {
      var display = document.getElementById("display");
        if(output[row]=="None"){
          for(var n=0;n<5;n++){
            

            let textBox = document. createElement("INPUT"); 
            textBox.setAttribute( "type","text");
            textBox.setAttribute( "class","txt_box");
            textBox.setAttribute( "readonly","True");



            document.getElementById("unused_letters").innerHTML="<code style=\"background-color:#eddbff;color:black\">"+unused_letters+"</code>"


            display.appendChild(textBox);
            display.innerHTML += '&nbsp;&nbsp;&nbsp;';

            
          }
        }
      else{
        for(var n=0;n<output[row].length;n++){
          let textBox = document. createElement("INPUT"); 
          textBox.setAttribute( "type","text");
          textBox.setAttribute( "class","txt_box");
          textBox.setAttribute( "value",output[row][n]);
          textBox.setAttribute( "readonly","True");
          debugger;
          if(output[row][n]==word[n]){
            textBox.style.backgroundColor="#53cc02";
            used_letters.includes(output[row][n])?used_letters=used_letters:document.getElementById("used_letters").innerHTML=document.getElementById("used_letters").innerHTML+"<strong> <code style=\"background-color:#c0e2fa;color:black\">"+  output[row][n] + "</strong></code>"   
          }
          else if(word.indexOf(output[row][n]) > -1){
            textBox.style.backgroundColor="#fceb4e";
            used_letters.includes(output[row][n])?used_letters=used_letters:document.getElementById("used_letters").innerHTML=document.getElementById("used_letters").innerHTML+"<strong> <code style=\"background-color:#c0e2fa;color:black\">"+  output[row][n] + "</strong></code>"
          }
          else{
            textBox.style.backgroundColor="#e3e3e1";
            used_letters.includes(output[row][n])?used_letters=used_letters:document.getElementById("used_letters").innerHTML=document.getElementById("used_letters").innerHTML+"<code style=\"background-color:#fae2a0\">"+  output[row][n] + "</code>"
          }
          
          unused_letters=unused_letters.replace(output[row][n],'')
          document.getElementById("unused_letters").innerHTML="<code style=\"background-color:#eddbff;color:black\">"+unused_letters+"</code>"
          if(used_letters.includes(output[row][n])){
            used_letters=used_letters
          }
          else{
            used_letters=used_letters+output[row][n]
          }
          

          display.appendChild(textBox);
          display.innerHTML += '&nbsp;&nbsp;&nbsp;';
          
        }

      }

      
      display.appendChild(document.createElement("br"))
      display.appendChild(document.createElement("br"))

    }
    
    document.getElementById("guess").focus();

    myTimer();
   

}

function myTimer() {


  var start_time= document.getElementById("start_time").value;
  if(start_time === undefined || start_time==""|| start_time=="None"){
    start_time=new Date();
    time_elapsed=0;
    document.getElementById("start_time").value = start_time
  }
  else{
    now=new Date();
    start=Date.parse(start_time);
    time_elapsed=(now-start)/1000;
  }
  var minute=padZero(parseInt(time_elapsed/60));
  var second=padZero(parseInt(time_elapsed%60));
  document.getElementById("time").innerHTML ="<i class=\"fa fa-cog fa-spin fa-3x fa-fw\"></i>Time Elapsed: "+ minute+":"+second;
  var t=setTimeout(myTimer, 1000);
}

function padZero(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

function myResult() {
  var word= document.getElementById("word").value;
  var result_emoji="";
  var score=0;
  var time_elapsed;
  //document.getElementById('word').style.visibility='hidden';
  var guess_count= document.getElementById("guess_count").value;

  var guess1= document.getElementById("guess1").value;
  var guess2= document.getElementById("guess2").value;
  var guess3= document.getElementById("guess3").value;
  var guess4= document.getElementById("guess4").value;
  var guess5= document.getElementById("guess5").value;
  var guess6= document.getElementById("guess6").value;
  var start_time= document.getElementById("start_time").value;

  score= 100*(6-guess_count);

  for(i=1;i<=(7-guess_count);i++){
    document.getElementById("rating").innerHTML+="⭐"
  }


  var output=[guess1,guess2,guess3,guess4,guess5,guess6]
  for (var row = 0; row < output.length; row++) {
    var display = document.getElementById("display");
    if(output[row]=="None"){
      for(var n=0;n<5;n++){
        

        let textBox = document. createElement("INPUT"); 
        textBox.setAttribute( "type","text");
        textBox.setAttribute( "class","txt_box");
        textBox.setAttribute( "readonly","True");

        display.appendChild(textBox);
        result_emoji=result_emoji+"⬜";
        display.innerHTML += '&nbsp;';

        
      }
    }
    else{


        for(var n=0;n<output[row].length;n++){
          let textBox = document. createElement("INPUT"); 
          textBox.setAttribute( "type","text");
          textBox.setAttribute( "class","txt_box");
          textBox.setAttribute( "value",output[row][n]);
          textBox.setAttribute( "readonly","True");
          debugger;
          if(output[row][n]==word[n]){
            textBox.style.backgroundColor="#53cc02";
            result_emoji=result_emoji+"🟩";
            score=score+10;
        }
          else if(word.indexOf(output[row][n]) > -1){
            textBox.style.backgroundColor="#fceb4e";
            result_emoji=result_emoji+"🟨";
            score=score+5;
          }
          else{
            textBox.style.backgroundColor="#e3e3e1";
            result_emoji=result_emoji+"⬜️";
          }
          

          display.appendChild(textBox);
          display.innerHTML += '&nbsp;';
          
        }
    }
    display.appendChild(document.createElement("br"))
    result_emoji+= "<br>";

  }
  document.getElementById("score").innerHTML+=score + " ("+guess_count.toString()+"/6)";
  document.getElementById("score_share").innerHTML+=result_emoji;


}


function share_it() {
  /* Get the text field */
  var copyText = "I have just played the Wordle©TalkWithShubha.\n"
  copyText+=document.getElementById("score").innerHTML+"\n";
  var score_card=document.getElementById("score_share").innerHTML.replace(/<br>/g,"\n")+"\n";
  copyText+=score_card;
  copyText+="You can also enjoy this game  - https://shubhadipdatta.pythonanywhere.com/ \n";

  /* Select the text field */
  //test.select();
  //test.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText);
  alert("Status Copied:" +copyText);

}