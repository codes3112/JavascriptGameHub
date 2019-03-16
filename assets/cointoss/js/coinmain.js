function agree()
{
alert("Want to play Heads n Tails????");}
function getName() {
    var person = prompt("Please enter your name", "");
    if (person != null) {
        document.getElementById("demo").innerHTML =
        "Hello " + person + "! How are you today? Ready to Play...? <br><br><br>" +
                // Create button to begin game
                "<button class=\"btn\" onclick=\"toss()\">Let's Start !!!</button>";
		}
		else{
		document.getElementById("demo").innerHTML =
        "You must Enter your Name.. ";
		 var person = prompt("Please enter your name", "");
		}
		 

	}
function toss() {
    
	var totalCount=0;
	var countWin=0;
	var result;
	var winLose;
	while(choice!=99)
	{
	 
	 var random = Math.round(Math.random());
	 var choice = prompt("Enter '0' for heads and '1' for tails and 99 to exit", "");	
     if (choice != 0 && choice != 1 && choice!=99 ||choice == NaN) 
				{
                alert("Enter a Valid Number..");
				totalCount--;
				}
			else if(choice==99)
			 {
			 alert("Exit??");
			 totalCount--;
			 }
		// Determines if user selection matches randomly generated flip
             else {   
			 switch (choice) {
                    case '0':
                        winLose = (choice == random)? alert("You Chose Heads. You Win!!!"): alert("It's Tails. You Lose!");
						if(choice == random){
						countWin++;}
                        break;
                    case '1':
                        winLose = (choice == random)? alert("You Chose Tails. You Win!!!"): alert("It's Heads. You Lose!");
						if(choice == random){
						countWin++;}
                        break;
                    default: alert("Invalid input");
                }
               } 
			
        totalCount++;		 
		           		 
	  } //while loop[ ends]
	

	 document.getElementById("demo").innerHTML ="Number of tosses :"+totalCount+"<br>Number of Wins :"+countWin+"<style>#demo{width: 100%; padding: 50px 0;text-align:center;font-size:2em;background-color:blue;margin-top: 20px;color:#ffffff;}</style>";
	  
	} 