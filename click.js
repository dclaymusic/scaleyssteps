
//play button
function togglePlay()
{
    if(isClickable)
    {
        isPlaying = !isPlaying;

        if(isPlaying)
        {
            //if no sounds loaded, play a scale
            if(song.length == 0)
            {
                setTimeout(() => { selectMenuSound(notes[7].position); notes[7].tileDraw = tileMax; }, 0);
                setTimeout(() => { selectMenuSound(notes[6].position); notes[6].tileDraw = tileMax; }, 200);
                setTimeout(() => { selectMenuSound(notes[5].position); notes[5].tileDraw = tileMax; }, 400);
                setTimeout(() => { selectMenuSound(notes[4].position); notes[4].tileDraw = tileMax; }, 600);
                setTimeout(() => { selectMenuSound(notes[3].position); notes[3].tileDraw = tileMax; }, 800);
                setTimeout(() => { selectMenuSound(notes[2].position); notes[2].tileDraw = tileMax; }, 1000);
                setTimeout(() => { selectMenuSound(notes[1].position); notes[1].tileDraw = tileMax; }, 1200);
                setTimeout(() => { selectMenuSound(notes[0].position); notes[0].tileDraw = tileMax; }, 1400);
                setTimeout(() => {         
                    document.getElementById("playbutton").src = "img/playimg.png";
                    document.getElementById("playtext").innerHTML = "Play";
                    isPlaying = false;
                }, 1500)
            }

            document.getElementById("playbutton").src = "img/stopimg.png";
            document.getElementById("playtext").innerHTML = "Stop";
        }

        else {
            
            loadclick(); playclick();
            document.getElementById("playbutton").src = "img/playimg.png";
            document.getElementById("playtext").innerHTML = "Play";

        }
    }
}

//when the canvas is clicked on
function clickHandler(event) 
{
    const rect = document.getElementById('canvas').getBoundingClientRect();
    var x = Math.floor((event.clientX - rect.left)*scale); // divide by a tileW if needed
    var y = Math.floor((event.clientY - rect.top)*scale); // divide by a tileH if needed

    if(!hasStarted && allBuffersLoaded == true)
    { 
        startGame();
    }
    else if(!allBuffersLoaded)
    { }
    else
    {

        if(isClickable && !isPlaying)
        {
            
            //if a note is loaded, add note to timeline
            if(loadedSound)
            {
                let click = false;
                
                //scan through the notes
                for(let i = 0; i < notes.length; i++)
                {
                    if(
                        (y >= ((notes[i].position + 1) * tileH) - (tileH*0.5) &&
                        y <= ((notes[i].position + 1) * tileH) + (tileH*0.1)) &&
                        (x >= marginX + 5 && x <= width)
                    )
                    {
                        song.push(new Note(notes[i].scale, x));
                        selectMenuSound(notes[i].position);
                        notes[i].tileDraw = tileMax;
                        click = true;
                        break;
                    }
                }
                if(!click && x <= width)
                {
                    document.getElementById("hnote").style.visibility = "hidden";
                    loadedSound = false;
                }
            }

            //if no note is loaded, clicking deletes notes on the timeline
            else
            {
                let click = false;
                for(let i = 0; i < song.length; i++)
                {
                    //prevents from deleting notes when toggling "play"
                    let endX = song[i].x + (tileW * tileScale * 2);
                    if(endX >= width) { endX = width; }

                    //delete notes
                    if(
                        (x >= song[i].x && x <= endX) &&
                        (y >= song[i].y && y <= song[i].y + (tileH * tileScale))
                    )
                    {
                        loadclick(); playclick();
                        song.splice(i,1);
                        click = true;
                        break;
                    }
                }
                //if there is no note, toggle interval display
                if(!click && x >= marginX && x <= width)
                {
                    loadclick(); playclick();
                    showingIntervals = !showingIntervals;
                }
            }


            //if the cursor is in the left margin
            for(let i = 0; i < notes.length; i++)
            {

                let click = false;
                //if it's over a pitch, play the pitch
                let dsx = offsetX;
                let dsy = ((notes[i].position + 1)*tileH) - (tileH*0.5*tileScale) - bufferH;
                let dex = dsx + (tileW * tileScale);
                let dey = dsy + (tileH * tileScale);
                if((x >= dsx && x <= dex) && (y >= dsy && y <= dey))
                {
                    selectMenuSound(notes[i].position);
                    notes[i].tileDraw = tileMax;
                    click = true;
                    break;
                }

                else if(notes[i].scale > 1 && notes[i].scale < 8)
                {   
                    //if it's over a down arrow, move that pitch down if you can
                    if(notes[i].accidental > -1 && scalePositions[notes[i].position + 1] == false)
                    {
                        //the only pitch that can't go to accidental -1 is an F
                        if( (notes[i].scale == 4 && notes[i].accidental == 1) || (notes[i].scale != 4) ) 
                        {
                            //these proportions are culled directly from "tile.js" draw function
                            let downStartX = offsetX;
                            let downStartY = ((notes[i].position + 1)*tileH) - (tileH*0.5*tileScale) - bufferH + (tileH * tileScale);
                            let downEndX = downStartX + (tileW * tileScale);
                            let downEndY = downStartY + (tileH * 0.4);

                            if((x >= downStartX && x <= downEndX) && (y >= downStartY && y <= downEndY))
                            {
                                notes[i].moveDown();
                                selectMenuSound(notes[i].position);
                                notes[i].tileDraw = tileMax;
                                click = true;
                            }
                        }
                    }
                    if(click) { break; }

                    //if it's over an up arrow, move that pitch up if you can
                    if(notes[i].accidental < 1 && scalePositions[notes[i].position - 1] == false)
                    {
                        //only note that can't go to accidental 1 is an E
                        if( (notes[i].scale == 3 && notes[i].accidental == -1) || (notes[i].scale != 3) ) 
                        {
                            //these proportions are culled directly from "tile.js" draw function
                            let upStartX = offsetX;
                            let upStartY = ((notes[i].position + 1)*tileH) - (tileH*0.5*tileScale) - bufferH - (tileH * 0.5);
                            let upEndX = upStartX + (tileW * tileScale);
                            let upEndY = upStartY + (tileH * 0.5);

                            if((x >= upStartX && x <= upEndX) && (y >= upStartY && y <= upEndY))
                            {
                                notes[i].moveUp();
                                selectMenuSound(notes[i].position);
                                notes[i].tileDraw = tileMax;
                                click = true;
                            }
                        }
                    }
                }
                if(click) { break; }
            }
        }

    }
}

//mouse hover-over info for loaded sounds
function getHoverOver(event) {
    const rect = document.getElementById('body').getBoundingClientRect();
    var x = Math.floor((event.clientX - rect.left)*2); // divide by a tileW if needed
    var y = Math.floor((event.clientY - rect.top)*2); // divide by a tileH if needed
    return([x,y]);
}

//get selected sound as an image element 
function pickSnd()
{
    if(isClickable)
    {
        loadclick(); playclick();
        loadedSound = true;
        let h = document.getElementById("hnote");
        h.style.visibility = 'visible';
    }
}

//selected sound image hover-over
function updateLoadedSound()
{
    let h = document.getElementById("hnote");
    h.style.left = (mousePos[0] * 0.5) + 'px';
    h.style.top = ((mousePos[1]-(tileH*0.3)) * 0.5) + 'px';
}


//change pitch display from letters to solfege
function toggleDisplay(num)
{
    if(isClickable)
    {
        loadclick(); playclick();
        if(num == 0)
        { 
            //if letters
            document.getElementById("letterimg").src = 'img/letter2.png'
            document.getElementById("solfegeimg").src = 'img/solfege1.png'
            isLetters = true; 
            for(i = 0; i < notes.length; i++)
            {
                if(notes[i].scale == 1 || notes[i].scale == 8) { notes[i].tile = 1; }
                if(notes[i].scale == 2 && notes[i].accidental == -1) { notes[i].tile = 2; }
                if(notes[i].scale == 2 && notes[i].accidental == 0) { notes[i].tile = 3; }
                if(notes[i].scale == 2 && notes[i].accidental == 1) { notes[i].tile = 4; }
                if(notes[i].scale == 3 && notes[i].accidental == -1) { notes[i].tile = 5; }
                if(notes[i].scale == 3 && notes[i].accidental == 0) { notes[i].tile = 6; }
                if(notes[i].scale == 4 && notes[i].accidental == 0) { notes[i].tile = 7; }
                if(notes[i].scale == 4 && notes[i].accidental == 1) { notes[i].tile = 8; }
                if(notes[i].scale == 5 && notes[i].accidental == -1) { notes[i].tile = 9; }
                if(notes[i].scale == 5 && notes[i].accidental == 0) { notes[i].tile = 10; }
                if(notes[i].scale == 5 && notes[i].accidental == 1) { notes[i].tile = 11; }
                if(notes[i].scale == 6 && notes[i].accidental == -1) { notes[i].tile = 12; }
                if(notes[i].scale == 6 && notes[i].accidental == 0) { notes[i].tile = 13; }
                if(notes[i].scale == 6 && notes[i].accidental == 1) { notes[i].tile = 14; }
                if(notes[i].scale == 7 && notes[i].accidental == -1) { notes[i].tile = 15; }
                if(notes[i].scale == 7 && notes[i].accidental == 0) { notes[i].tile = 16; }
            }
        }
        else 
        { 
            //if solfege
            document.getElementById("letterimg").src = 'img/letter1.png'
            document.getElementById("solfegeimg").src = 'img/solfege2.png'
            isLetters = false; 
            for(i = 0; i < notes.length; i++)
            {
                if(notes[i].scale == 1 || notes[i].scale == 8) { notes[i].tile = 21; }
                if(notes[i].scale == 2 && notes[i].accidental == -1) { notes[i].tile = 22; }
                if(notes[i].scale == 2 && notes[i].accidental == 0) { notes[i].tile = 23; }
                if(notes[i].scale == 2 && notes[i].accidental == 1) { notes[i].tile = 24; }
                if(notes[i].scale == 3 && notes[i].accidental == -1) { notes[i].tile = 25; }
                if(notes[i].scale == 3 && notes[i].accidental == 0) { notes[i].tile = 26; }
                if(notes[i].scale == 4 && notes[i].accidental == 0) { notes[i].tile = 27; }
                if(notes[i].scale == 4 && notes[i].accidental == 1) { notes[i].tile = 28; }
                if(notes[i].scale == 5 && notes[i].accidental == -1) { notes[i].tile = 29; }
                if(notes[i].scale == 5 && notes[i].accidental == 0) { notes[i].tile = 30; }
                if(notes[i].scale == 5 && notes[i].accidental == 1) { notes[i].tile = 31; }
                if(notes[i].scale == 6 && notes[i].accidental == -1) { notes[i].tile = 32; }
                if(notes[i].scale == 6 && notes[i].accidental == 0) { notes[i].tile = 33; }
                if(notes[i].scale == 6 && notes[i].accidental == 1) { notes[i].tile = 34; }
                if(notes[i].scale == 7 && notes[i].accidental == -1) { notes[i].tile = 35; }
                if(notes[i].scale == 7 && notes[i].accidental == 0) { notes[i].tile = 36; }
            }
        }
    }
}

//turn on and off info screen
function toggleInfoScreen() {

    isInfoScreen = !isInfoScreen;

    loadclick(); playclick();
    if(isInfoScreen)
    {
        document.getElementById('infoscreen').style.visibility = 'visible';
        isClickable = false;
    }
    else
    {
        document.getElementById('infoscreen').style.visibility = 'hidden';
        isClickable = true;
    }


}

//create a random melody with accompaniment
function shuffleSounds()
{
    if(isClickable)
    {
        loadshuffle(); playshuffle();
        song = [];

        //start on a tonic triad
        let thisPitch;
        let startChoices = [1,3,5,8];
        let startPitch = startChoices[randomInt(3)];

        //create a wandering melody that's 8 pulses long
        for(let i = 0; i < 8; i++)
        {
            let x = Math.round(((width - marginX + tileW*1.8) * (i/8)) + 10);
            let ran = Math.random();
            if(i == 0) 
            { 
                //start on a tonic triad
                thisPitch = startPitch;
                if(ran <= 0.5) 
                {
                    song.push(new Note(1, x + marginX));
                    song.push(new Note(3, x + marginX));
                    song.push(new Note(5, x + marginX));
                }
                else
                {
                    song.push(new Note(3, x + marginX));
                    song.push(new Note(5, x + marginX));
                    song.push(new Note(8, x + marginX));
                }
            }
            else {
                //weighted melody decisions - step up, step down, or leap randomly
                if(ran <= 0.3) { thisPitch = prevPitch + 1; if(thisPitch > 8) { thisPitch = 8; } }
                else if(ran > 0.3 && ran <= 0.6) { thisPitch = prevPitch - 1; if(thisPitch < 1) { thisPitch = 1; } }
                else if(ran > 0.6 && ran <= 1.0) { thisPitch = randomInt(7) + 1; }
                song.push(new Note(thisPitch, x + marginX));
            }
            prevPitch = thisPitch;

            //harmonize every other note with a triad
            if(i % 2 == 0 && i != 0)
            { 
                let harmony1 = thisPitch + 2;
                let harmony2 = thisPitch + 4;
                if(harmony1 > 8) { harmony1 -= 7; }
                if(harmony2 > 8) { harmony2 -= 7; }
                song.push(new Note(harmony1, x + marginX));
                song.push(new Note(harmony2, x + marginX));
            }
        }
        
    isPlaying = false;
    document.getElementById("playbutton").src = "img/playimg.png";
    document.getElementById("playtext").innerHTML = "Play";

    }

}

//clear all notes on the timeline
function clearAllSounds()
{
    if(isClickable && !isPlaying)
    {
        loadclick(); playclick();
        song = [];
    }
}


//soundtrack button
function toggleSounds(value)
{
    if(isClickable)
    {
        currentSoundSet = value; 
        soundDisplay(value);
    }
}


function soundDisplay(value) 
{
    if(value == 0)
    { 
        if(!isPlaying) { loads01(); plays01(); }
        document.getElementById("bell").src = "img/imgbell2.png";
        document.getElementById("harp").src = "img/imgharp.png";
        document.getElementById("key").src = "img/imgkey.png";
    }

    if(value == 1)
    { 
        if(!isPlaying) { loadh01(); playh01(); }
        document.getElementById("bell").src = "img/imgbell.png";
        document.getElementById("harp").src = "img/imgharp2.png";
        document.getElementById("key").src = "img/imgkey.png";
    }

    if(value == 2)
    { 
        if(!isPlaying) { loadk01(); playk01(); }
        document.getElementById("bell").src = "img/imgbell.png";
        document.getElementById("harp").src = "img/imgharp.png";
        document.getElementById("key").src = "img/imgkey2.png";
    }

}
