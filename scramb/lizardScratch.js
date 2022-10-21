function fromEnglish() {
    //setup
    var leString = "No input";
    var leStringOutput = "";
    var i;
    console.log("English input:" + document.getElementById('inputAreaEnglish').value) //debug
    leString = document.getElementById('inputAreaEnglish').value;

    //basic scramble
    for(let i = 0; i < leString.length; i++){

    if(leString.charCodeAt(i) - 69 != -37){
    leStringOutput = leStringOutput + String.fromCharCode(Number(leString.charCodeAt(i) - 2));
    }
    else{
    leStringOutput = leStringOutput + " ";
    }
    }
    
    console.log(leStringOutput)

    //end
    document.getElementById('inputAreaScratch').value = leStringOutput;
    return leString
}

function fromScratch() {
    //setup
    var leString = "No input";
    var leStringOutput = "";
    var i;
    console.log("English input:" + document.getElementById('inputAreaScratch').value) //debug
    leString = document.getElementById('inputAreaScratch').value;

    //basic scramble
    for(let i = 0; i < leString.length; i++){

    if(leString.charCodeAt(i) - 69 != -37){
    leStringOutput = leStringOutput + String.fromCharCode(Number(leString.charCodeAt(i) + 2));
    }
    else{
    leStringOutput = leStringOutput + " ";
    }
    }
    
    console.log(leStringOutput)

    //end
    document.getElementById('inputAreaEnglish').value = leStringOutput;
    return leString
}