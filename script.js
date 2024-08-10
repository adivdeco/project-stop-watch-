// let h1 =document.querySelector("h1");
// let start=document.querySelector(".start");
// let pause= document.querySelector(".pause");

// let count=0;
// start.addEventListener("click",function(){
//     int=setInterval(function(){
//       h1.textContent=count;
//       count++
//     },1000)
// })


// pause.addEventListener("click",function(){
//    clearInterval(int)
// })

function loadingpg(){
    let pg1=document.querySelector(".lodingpg")
setTimeout(() => {
    pg1.style.top="-100%"
}, 2000);
}



let h1 = document.querySelector("h1");
let start = document.querySelector(".start");
let pause = document.querySelector(".pause");

function timer(){
    let totalSeconds = 0; // To track the total elapsed time in seconds
let int = null; // Store the interval ID

// Function to format time as HH:MM:SS
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

start.addEventListener("click", function() {
    if (int) return; // Prevent starting multiple intervals
    h1.style.opacity=0.8
    int = setInterval(function() {
        totalSeconds++;
        h1.textContent = formatTime(totalSeconds); // Update the display
    }, 1000);
});

pause.addEventListener("click", function() {
    clearInterval(int);
    int = null; // Reset interval ID to allow starting again
    h1.style.opacity=1
});

}




loadingpg()
timer()