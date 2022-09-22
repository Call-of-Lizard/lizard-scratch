function fromEnglish() {
    //setup
    var leString = "No input";
    var leStringOutput = "";
    var i;
    console.log("English input:" + document.getElementById('inputAreaEnglish').value) //debug
    leString = document.getElementById('inputAreaEnglish').value;

    //basic scramble
    for(let i = 0; i < leString.length; i++){
        //turn to number
    console.log(leString.charCodeAt(i) - 69);
    console.log("loop: " + i);
        //add to string
    leStringOutput = leStringOutput + Number(leString.charCodeAt(i) - 69);
    }
    
    console.log(leStringOutput)

    //end
    return leString
}

function fromScratch() {
    var useThisLater = "lol"
    console.log("Scratch input:" + document.getElementById('inputAreaEnglish').value) //debug
    return useThisLater
}