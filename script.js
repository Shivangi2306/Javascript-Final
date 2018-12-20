// var wsh = new ActiveXObject(WScript.Network);
// var strCompName = wsh.ComputerName;

// var myPage=document.getElementById("firstSpace");

// var newHeading=myPage.createElement(`<h1 style=font-size: 68px>My Work Log-${strCompName}</h1>`);
// var currTime=document.getElementById("curTime");
// console.log(currTime);
// document.body.insertBefore(newHeading,currTime);


var clock = document.getElementById("clock"); //0:00
	var min = 0;
	var sec = 0;
	var hr  = 0;

	function DigitalC1()
	{
		console.log(sec);
		var secStr = sec;
		var minStr = min;
		if (min<10) {
					minStr="0"+min;
					if(sec<10 )
				{
					secStr="0"+sec;
				}
				else if(sec==60)
				{
					sec=0;
					secStr="00"
					min++;
					minStr=min;

				}
		}
		else if (min==60) {
					min=0;
					sec=0;
					minStr="00";
					hr++;
					if(sec<10 )
				{
					secStr="0"+sec;
				}
				else if(sec==60)
				{
					sec=0;
					secStr="00"
					min++;
					minStr=min;
				}

		}
		else if (min>=10) {
			
					//sec=0;
					//minStr=min;
					
					if(sec<10 )
				{
					secStr="0"+sec;
					minStr=min;
				}
				else if(sec==60)
				{
					sec=0;
					secStr="00"
					min++;
					minStr=min;
				}
		}
		
		clock.innerHTML=hr+":"+minStr+":"+secStr;
		sec++;
		setTimeout(DigitalC1,1000);
	}
	DigitalC1();
	let ourForm=document.getElementById("ourForm");
	let ourField=document.getElementById("ourField");
	let ourList=document.getElementById("ourList");
	ourForm.addEventListener("submit",(e)=>{e.preventDefault();createItem(ourField.value)});

	function createItem(x){
		let ourHTML=`<li>${x}<button onclick="deleteItem(this)">Delete</button><br/></li>`
		ourList.insertAdjacentHTML("beforeend",ourHTML);
		ourField.value="";
		ourField.focus();
	}

	function deleteItem(elementToDelete)
	{
		elementToDelete.parentElement.remove();
	}