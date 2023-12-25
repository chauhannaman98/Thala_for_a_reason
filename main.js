let form = document.getElementById('form');
let music = new Audio('/media/Thala.mp3');
let vid = document.getElementById("ThalaVid");
let outString = "";


function checkForThala(text)    {
    text = text.trim();
    let arr = text.split('');
    num = +text;
    if(num)    {
        let sum = 0;
        // check for sum of digits
        for (let digit of text)
            sum += parseInt(digit);
        if (sum === 7)  {
            outString = "Yes! Because.. " + arr[0];
            for(let i=1; i<arr.length; i++) {
                outString += " + " + arr[i];
            }
            outString += " = 7\nThala for a reason!";
            return true;
        }
    }
    // check for word "seven"
    if(text.toLowerCase()==="seven")    {
        outString = "Yes! Because.. " + text + " = 7\nThala for a reason!";
        return true;
    }
    else    {
        // check for length of text
        if(text.length === 7)   {
            outString = "Yes! Because.. " + arr[0];
            for(let i=1; i<arr.length; i++) {
                outString += " + " + arr[i];
            }
            outString += " = 7\nThala for a reason!";
            return true;
        }
        else    {
            outString = "Opss.. " + arr[0];
            for(let i=1; i<arr.length; i++) {
                outString += " + " + arr[i];
            }
            outString += " ≠ 7";
            return false;
        }
    }
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

    let heading = document.querySelector(".heading");
    heading.innerText = outString;
});

