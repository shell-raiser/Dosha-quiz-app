var quiz=document.getElementById("quiz");
var ques= document.getElementById("question");
var opt1=document.getElementById("option1");
var opt2=document.getElementById("option2");
var opt3=document.getElementById("option3");
var res=document.getElementById("result");
var nextbutton= document.getElementById("next");
var q=document.getElementById('quit');
var tques=questions.length;
var score=0;
var quesindex=0;
var vath = 0;
var pith = 0;
var kafh = 0;
function quit()
{         
	      quiz.style.display='none';
          result.style.display='';
		  probStats.style.display='';
          var f=score/tques;
          result.textContent="You can try again anytime you want !"
          q.style.display="none";
}
function give_ques(quesindex) 
{	quesNo.textContent="Q"+(quesindex+1)+"/"+tques;
	ques.textContent=questions[quesindex][0];
	opt1.textContent=questions[quesindex][1];
	opt2.textContent=questions[quesindex][2];
	opt3.textContent=questions[quesindex][3];
	 return;
};

give_ques(0);

function nextques(){
	var selected_ans= document.querySelector('input[type=radio]:checked');
	if(!selected_ans){
		alert("Please select an option before going to the next question !");return;
	}

	if(selected_ans.value==1){
		vath = vath +1;
	}
	else if(selected_ans.value==2){
		pith = pith +1 ;
	}
	else if(selected_ans.value==3){
		kafh = kafh +1
	}

	selected_ans.checked=false;
	quesindex++;
	if(quesindex==tques-1){
	    nextbutton.textContent="Finish";}
	if(quesindex==tques){
		q.style.display='none';
		quiz.style.display='none';
		result.style.display='';
		probStats.style.display='';
		quesNo.style.display='none';
		vath = ((vath/tques)*100).toFixed(2);
		pith = ((pith/tques)*100).toFixed(2);
		kafh = ((kafh/tques)*100).toFixed(2);
		
		if(vath >= kafh && vath >= pith && vath > 80) {
		result.textContent="You belong to Dwandwaja Vata";
		}
		else if (pith >= vath && pith >= kafh && pith > 80) {
		result.textContent="You belong to Dwandwaja Pitta";
		}
		else if (kafh >= vath && kafh >= pith && kafh > 80) {
		result.textContent="You belong to Dwandwaja Kapha";
		}
		else if (vath > 32 && pith > 32 && kafh > 32){
			result.textContent="You belong to Ekadoshaja Prakruti (Tri-Dosha)";
		}
		else if (vath+pith > 70 && vath,pith > 30 && vath,pith > kafh){
			result.textContent="You belong to Dwidoshaja Vata-Pitta";
		}
		else if (kafh+pith > 70 && kafh,pith > 30 && kafh,pith > vath){
			result.textContent="You belong to Dwidoshaja Pitta-Kapha";
		}
		else if (vath+kafh > 70 && vath,kafh > 30 && vath,kafh > pith){
			result.textContent="You belong to Dwidoshaja Kapha-Vata";
		}
		
		probStats.textContent= "Vata: "+vath+","+"Kapha: "+kafh+","+"Pitta: "+pith;
		
		return;
	    }
        give_ques(quesindex);
}