let form = document.getElementById('form');
let music = new Audio('/media/Thala.mp3');
let vid = document.getElementById("ThalaVid");

function checkForThala(text)    {
    // check if it's a number
    num = +text;
    if(num)    {
        let sum = 0;
        // check for sum of digits
        for (let digit of text)
            sum += parseInt(digit);
        if (sum === 7)
            return true;
    }
    // check for length of text
    text = text.trim();
    if(text.length === 7)
        return true;
    else
        return false;
}

function updateHeading(text, result)  {
    // update the heading
    text = text.trim();
    let arr = text.split('');
    if (result)
        outString = "Yes! Because.. " + arr[0];
    else
        outString = "Opss.. " + arr[0];
    for(let i=1; i<arr.length; i++) {
        outString += " + " + arr[i];
    }
    (result)?outString += " = 7\nThala for a reason!":outString += " ≠ 7";
    let heading = document.querySelector(".heading");
    heading.innerText = outString;
} 

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let text = document.getElementById('text').value;
    result = checkForThala(text);
    if(result){
        // music.play();
        vid.style.visibility = "visible";
        vid.play();
    }
    else    {
        // music.pause();
        // music.currentTime = 0;
        vid.style.visibility = "hidden";
        vid.pause();
        vid.currentTime = 0;
    }

    updateHeading(text, result);
});

