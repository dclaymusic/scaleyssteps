//start game function
function startGame() { 

    loadclick(); playclick();
    
    let loadscreen = document.querySelector('#loadscreen');
    loadscreen.style.visibility = 'hidden';
    
    document.getElementById("gamefoot").style.visibility = 'visible';

    hasStarted = true;

}

//loading screen
function loadbarHandler()
{
    let loadbarloading = document.getElementById('loadbarloading');
    loadbarloading.style.width = (checkBuffers()/numberOfSounds) * 200 + 'px';
    //before start
    if(checkBuffers() == numberOfSounds)
    {
        allBuffersLoaded = true;
        let loadtext = document.getElementById('loadtext');
        loadtext.innerHTML = '(Click anywhere to begin.)';
        loadtext.style.left = '122px';
        let loadbarloading = document.getElementById('loadbarloading');
        loadbarloading.style.backgroundColor = 'rgba(0,255,100,1)';
    }
    else 
    { } //opening state;
}

//buffer loadbar
function drawBuffer()
{
    ctx.strokeStyle = 'black';
    ctx.lineWidth = '1';
    // ctx.strokeRect(0, 0, w, h);
    ctx.strokeRect(window.innerWidth/2, window.innerHeight/2, 300, 20);
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.fillRect(window.innerWidth/2, window.innerHeight/2, checkBuffers() * (300/numberOfSounds), 20);
}

//show which sounds are loaded
function checkBuffers()
{
    let buffCount = 0;

    if(s01buff != null) { buffCount++; }
    if(s02buff != null) { buffCount++; }
    if(s03buff != null) { buffCount++; }
    if(s04buff != null) { buffCount++; }
    if(s05buff != null) { buffCount++; }
    if(s06buff != null) { buffCount++; }
    if(s07buff != null) { buffCount++; }
    if(s08buff != null) { buffCount++; }
    if(s09buff != null) { buffCount++; }
    if(s10buff != null) { buffCount++; }
    if(s11buff != null) { buffCount++; }
    if(s12buff != null) { buffCount++; }
    if(s13buff != null) { buffCount++; }
    if(h01buff != null) { buffCount++; }
    if(h02buff != null) { buffCount++; }
    if(h03buff != null) { buffCount++; }
    if(h04buff != null) { buffCount++; }
    if(h05buff != null) { buffCount++; }
    if(h06buff != null) { buffCount++; }
    if(h07buff != null) { buffCount++; }
    if(h08buff != null) { buffCount++; }
    if(h09buff != null) { buffCount++; }
    if(h10buff != null) { buffCount++; }
    if(h11buff != null) { buffCount++; }
    if(h12buff != null) { buffCount++; }
    if(h13buff != null) { buffCount++; }
    if(k01buff != null) { buffCount++; }
    if(k02buff != null) { buffCount++; }
    if(k03buff != null) { buffCount++; }
    if(k04buff != null) { buffCount++; }
    if(k05buff != null) { buffCount++; }
    if(k06buff != null) { buffCount++; }
    if(k07buff != null) { buffCount++; }
    if(k08buff != null) { buffCount++; }
    if(k09buff != null) { buffCount++; }
    if(k10buff != null) { buffCount++; }
    if(k11buff != null) { buffCount++; }
    if(k12buff != null) { buffCount++; }
    if(k13buff != null) { buffCount++; }
    if(clickbuff != null) { buffCount++; }
    if(shufflebuff != null) { buffCount++; }

    return buffCount;
}

function frameRate()
{
    ////////////frame rate check
    ctx.fillStyle = "#ff0000";
    ctx.font = "30px Andale Mono";
    ctx.textAlign = "start";
    ctx.fillText("FPS: " + framesLastSecond, 10, 20);
}
