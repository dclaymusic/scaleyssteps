//add a note to the song
function Note(scaleDeg, timeInSong)
{ 
    this.scale = scaleDeg
    this.start = timeInSong;
    this.x = this.start;
    for(i = 0; i < notes.length; i++)
    {
        //make sure it's on the correct accidental
        if(notes[i].scale == this.scale)
        {
            this.position = notes[i].position;
            this.index = i;
        }
    }
    this.y = ((this.position + 1)*tileH) - (tileH*0.8*tileScale) - bufferH;

}

//draw the note
Note.prototype.draw = function()
{
    if(isPlaying)
    { this.x -= 2.5; }
    else { this.x = this.start; }

    var tile = tileTypes[37];
    ctx.drawImage(tileset, tile.sprite[0].x, tile.sprite[0].y, tile.sprite[0].w, tile.sprite[0].h,
        this.x, this.y, tileW * tileScale * 2, tileH * tileScale);

    if(this.x >= marginX-1 && this.x <= marginX+1)
    {
        //if it crosses the margin, play it
        selectMenuSound(this.position);
        notes[this.index].tileDraw = tileMax;
        
    }

    //if it crosses the margin, it loops back to the beginning
    if(this.x <= marginX - (tileW*tileScale*2)) 
    {
        this.x = width;
    }
}
