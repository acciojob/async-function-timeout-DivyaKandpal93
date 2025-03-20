//your JS code here. If required.
async function showMsg() {

            //Read Input
            const textInput = document.getElementById("text");
            const delayInput = document.getElementById("delay"); 
            const outputDiv = document.getElementById("output");

            //Validate Input
            if(!textInput.value){
                outputDiv.innerHTML = "Please Enter Text Input";
                return;
            }

            if(!delayInput.value || delayInput.value <0){
                outputDiv.innerHTML = "Please enter a valid delay(ms)";
                return;
            }
            //Convert delay to a valid input
            const delay = parseInt(delayInput.value);

             // Clear previous output
             outputDiv.innerHTML = "⏳ Waiting...";

             //async function to wait
             await new Promise(resolve => setTimeout(resolve, delay));

            //Display the msg after delay
            outputDiv.innerHTML = `${textInput.value}`;

        }
        document.getElementById("button").addEventListener("click", showMsg);

