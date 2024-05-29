function schoolCountDown(){
    const schoolDate = new Date("August 27, 2024 08:15");
    const now = new Date();
    const difference = schoolDate - now;

    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;

    const displayDay = Math.floor(difference / msInDay);
    document.querySelector(".days").textContent = displayDay

    const displayHour = Math.floor((difference % msInDay) / msInHour);
    document.querySelector(".hours").textContent = displayHour;

    const displayMinute = Math.floor((difference % msInHour) / msInMinute);
    document.querySelector(".minutes").textContent = displayMinute;

    const displaySeconds = Math.floor((difference % msInMinute) / msInSecond);
    document.querySelector(".seconds").textContent = displaySeconds;

    if(difference < 0) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;
        clearInterval(timerID);
        welcomeToSchool();

        const school = document.querySelectorAll("h4");
        const three = document.querySelectorAll("h3");
        school.forEach((item) => {
            item.classList.add("back")
        })

        three.forEach((item) => {
            item.classList.add("back")
        })
    }
    
}
let timerID = setInterval(schoolCountDown, 1000);
schoolCountDown()

function welcomeToSchool() {
    const heading = document.querySelector("h1");
    heading.textContent = "WELCOME!!!";
    heading.classList.add("red")
}

const playButton = document.querySelector("#myPlayButton");
const stopButton = document.querySelector("#myStopButton");

playButton.addEventListener("click", () => {
    document.querySelector("#myAudio").play();
})

stopButton.addEventListener("click", () => {
    document.querySelector("#myAudio").pause();
    
})