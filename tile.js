//one pitch per scale degree
function Tile(scaleDeg, positionInScale)
{ 
    this.scale = scaleDeg
    this.position = positionInScale;
    this.accidental = 0;
    this.tileDraw = 1;
    scalePositions[this.position] = true;

    //assigning tile types based on position in scale
    if(this.scale == 1 || this.scale == 8) { this.tile = 1; }
    if(this.scale == 2 && this.accidental == -1) { this.tile = 2; }
    if(this.scale == 2 && this.accidental == 0) { this.tile = 3; }
    if(this.scale == 2 && this.accidental == 1) { this.tile = 4; }
    if(this.scale == 3 && this.accidental == -1) { this.tile = 5; }
    if(this.scale == 3 && this.accidental == 0) { this.tile = 6; }
    if(this.scale == 4 && this.accidental == 0) { this.tile = 7; }
    if(this.scale == 4 && this.accidental == 1) { this.tile = 8; }
    if(this.scale == 5 && this.accidental == -1) { this.tile = 9; }
    if(this.scale == 5 && this.accidental == 0) { this.tile = 10; }
    if(this.scale == 5 && this.accidental == 1) { this.tile = 11; }
    if(this.scale == 6 && this.accidental == -1) { this.tile = 12; }
    if(this.scale == 6 && this.accidental == 0) { this.tile = 13; }
    if(this.scale == 6 && this.accidental == 1) { this.tile = 14; }
    if(this.scale == 7 && this.accidental == -1) { this.tile = 15; }
    if(this.scale == 7 && this.accidental == 0) { this.tile = 16; }

}

//draw the pitch
Tile.prototype.draw = function()
{
    let startX = offsetX - (((this.tileDraw * tileW) - tileW) * 0.5);
    let startY = ((this.position + 1)*tileH) - (tileH*0.5*this.tileDraw) - bufferH;

    if(this.tileDraw <= 1) { this.tileDraw = 1; }
    else 
    { 
        //key highlights pitch color if pressed
        this.tileDraw -= 0.002;
        let thisAlpha = (this.tileDraw-1) * 5;
        if(this.position == 0 || this.position == 12 ) { ctx.fillStyle = `rgba(241, 103, 104,${thisAlpha}`; }
        if(this.position == 11 ) { ctx.fillStyle = `rgba(202, 102, 47,${thisAlpha}`; }
        if(this.position == 10 ) { ctx.fillStyle = `rgba(246, 139, 30,${thisAlpha}`; }
        if(this.position == 9 && this.scale == 2 ) { ctx.fillStyle = `rgba(248, 191, 121,${thisAlpha}`; }
        if(this.position == 9 && this.scale == 3 ) { ctx.fillStyle = `rgba(210, 171, 60,${thisAlpha}`; }
        if(this.position == 8 ) { ctx.fillStyle = `rgba(245, 238, 71,${thisAlpha}`; }
        if(this.position == 7 ) { ctx.fillStyle = `rgba(125, 190, 66,${thisAlpha}`; }
        if(this.position == 6 && this.scale == 4 ) { ctx.fillStyle = `rgba(203, 224, 132,${thisAlpha}`; }
        if(this.position == 6 && this.scale == 5 ) { ctx.fillStyle = `rgba(82, 128, 193,${thisAlpha}`; }
        if(this.position == 5 ) { ctx.fillStyle = `rgba(113, 188, 233,${thisAlpha}`; }
        if(this.position == 4 && this.scale == 5 ) { ctx.fillStyle = `rgba(193, 230, 250,${thisAlpha}`; }
        if(this.position == 4 && this.scale == 6 ) { ctx.fillStyle = `rgba(142, 87, 157,${thisAlpha}`; }
        if(this.position == 3 ) { ctx.fillStyle = `rgba(172, 132, 188,${thisAlpha}`; }
        if(this.position == 2 && this.scale == 6 ) { ctx.fillStyle = `rgba(217, 184, 215,${thisAlpha}`; }
        if(this.position == 2 && this.scale == 7 ) { ctx.fillStyle = `rgba(180, 54, 112,${thisAlpha}`; }
        if(this.position == 1 ) { ctx.fillStyle = `rgba(241, 118, 174,${thisAlpha}`; }
        // if(this.accidental == 1) { ctx.fillStyle = `rgba(246,160,160,${thisAlpha}`};
        // if(this.accidental == 0) { ctx.fillStyle = `rgba(241,118,174,${thisAlpha}`}
        // if(this.accidental == -1) { ctx.fillStyle = `rgba(172,132,188,${thisAlpha}`}
        ctx.fillRect(0, (this.position*tileH) + (tileH*0.15), marginX, tileH - 4);
        
    }

    var tile = tileTypes[this.tile];
    ctx.drawImage(tileset, tile.sprite[0].x, tile.sprite[0].y, tile.sprite[0].w, tile.sprite[0].h,
        startX, startY, tileW * tileScale * this.tileDraw, tileH * tileScale * this.tileDraw);


    if(!isPlaying)
    {       
        if(this.scale > 1 && this.scale < 8)
        {

            //check to see if upper tile has something, if not draw an arrow
            if(scalePositions[this.position-1] == false && this.accidental < 1)
            {
                //only note that can't go to accidnetal 1 is an E
                if( (this.scale == 3 && this.accidental == -1) || (this.scale != 3) ) 
                {
                    let scaledY = ((this.position + 1)*tileH) - (tileH*0.5) - bufferH;
                    let tile;
                    if(this.position - 1 == 2 || 
                        this.position - 1 == 4 || 
                        this.position - 1 == 6 || 
                        this.position - 1 == 9 || 
                        this.position - 1 == 11)  { tile = tileTypes[20]; }
                    else { tile = tileTypes[18]; }
                    ctx.drawImage(tileset, tile.sprite[0].x, tile.sprite[0].y, tile.sprite[0].w, tile.sprite[0].h,
                        offsetX, scaledY - (tileH * tileScale * 1.1), tileW * tileScale, tileH * tileScale);
                }
            }
            
            //check to see if lower tile has something, if not draw an arrow
            if(scalePositions[this.position+1] == false && this.accidental > -1)
            {
                //only note that can't go to accidental -1 is an F
                if( (this.scale == 4 && this.accidental == 1) || (this.scale != 4) ) 
                {
                    let scaledY = ((this.position + 1)*tileH) - (tileH*0.5) - bufferH;
                    let tile;
                    if(this.position + 1 == 2 || 
                        this.position + 1 == 4 || 
                        this.position + 1 == 6 || 
                        this.position + 1 == 9 || 
                        this.position + 1 == 11)  { tile = tileTypes[19]; }
                    else { tile = tileTypes[17]; }
                    ctx.drawImage(tileset, tile.sprite[0].x, tile.sprite[0].y, tile.sprite[0].w, tile.sprite[0].h,
                        offsetX, scaledY + (tileH * tileScale * 1.08), tileW * tileScale, tileH * tileScale);
                }
            }
        }
    }

}

//move scale degree up
Tile.prototype.moveUp = function()
{
    if(song.length != 0)
    {
        for(i = 0; i < song.length; i++)
        {
            if(song[i].position == this.position)
            {
                song[i].position -= 1;
                song[i].y = ((song[i].position + 1)*tileH) - (tileH*0.8*tileScale) - bufferH;
            }
        }
    }

    scalePositions[this.position] = false;
    this.position -= 1;
    scalePositions[this.position] = true;
    this.accidental += 1;

    if(isLetters)
    {
        if(this.scale == 1 || this.scale == 8) { this.tile = 1; }
        if(this.scale == 2 && this.accidental == -1) { this.tile = 2; }
        if(this.scale == 2 && this.accidental == 0) { this.tile = 3; }
        if(this.scale == 2 && this.accidental == 1) { this.tile = 4; }
        if(this.scale == 3 && this.accidental == -1) { this.tile = 5; }
        if(this.scale == 3 && this.accidental == 0) { this.tile = 6; }
        if(this.scale == 4 && this.accidental == 0) { this.tile = 7; }
        if(this.scale == 4 && this.accidental == 1) { this.tile = 8; }
        if(this.scale == 5 && this.accidental == -1) { this.tile = 9; }
        if(this.scale == 5 && this.accidental == 0) { this.tile = 10; }
        if(this.scale == 5 && this.accidental == 1) { this.tile = 11; }
        if(this.scale == 6 && this.accidental == -1) { this.tile = 12; }
        if(this.scale == 6 && this.accidental == 0) { this.tile = 13; }
        if(this.scale == 6 && this.accidental == 1) { this.tile = 14; }
        if(this.scale == 7 && this.accidental == -1) { this.tile = 15; }
        if(this.scale == 7 && this.accidental == 0) { this.tile = 16; }
    }
    if(!isLetters)
    {
        if(this.scale == 1 || this.scale == 8) { this.tile = 21; }
        if(this.scale == 2 && this.accidental == -1) { this.tile = 22; }
        if(this.scale == 2 && this.accidental == 0) { this.tile = 23; }
        if(this.scale == 2 && this.accidental == 1) { this.tile = 24; }
        if(this.scale == 3 && this.accidental == -1) { this.tile = 25; }
        if(this.scale == 3 && this.accidental == 0) { this.tile = 26; }
        if(this.scale == 4 && this.accidental == 0) { this.tile = 27; }
        if(this.scale == 4 && this.accidental == 1) { this.tile = 28; }
        if(this.scale == 5 && this.accidental == -1) { this.tile = 29; }
        if(this.scale == 5 && this.accidental == 0) { this.tile = 30; }
        if(this.scale == 5 && this.accidental == 1) { this.tile = 31; }
        if(this.scale == 6 && this.accidental == -1) { this.tile = 32; }
        if(this.scale == 6 && this.accidental == 0) { this.tile = 33; }
        if(this.scale == 6 && this.accidental == 1) { this.tile = 34; }
        if(this.scale == 7 && this.accidental == -1) { this.tile = 35; }
        if(this.scale == 7 && this.accidental == 0) { this.tile = 36; } 
    }

}

//move scale degree down
Tile.prototype.moveDown = function()
{

    if(song.length != 0)
    {
        for(i = 0; i < song.length; i++)
        {
            if(song[i].position == this.position)
            {
                song[i].position += 1;
                song[i].y = ((song[i].position + 1)*tileH) - (tileH*0.8*tileScale) - bufferH;
            }
        }
    }

    scalePositions[this.position] = false;
    this.position += 1;
    scalePositions[this.position] = true;
    this.accidental -= 1;

    if(isLetters)
    {
        if(this.scale == 1 || this.scale == 8) { this.tile = 1; }
        if(this.scale == 2 && this.accidental == -1) { this.tile = 2; }
        if(this.scale == 2 && this.accidental == 0) { this.tile = 3; }
        if(this.scale == 2 && this.accidental == 1) { this.tile = 4; }
        if(this.scale == 3 && this.accidental == -1) { this.tile = 5; }
        if(this.scale == 3 && this.accidental == 0) { this.tile = 6; }
        if(this.scale == 4 && this.accidental == 0) { this.tile = 7; }
        if(this.scale == 4 && this.accidental == 1) { this.tile = 8; }
        if(this.scale == 5 && this.accidental == -1) { this.tile = 9; }
        if(this.scale == 5 && this.accidental == 0) { this.tile = 10; }
        if(this.scale == 5 && this.accidental == 1) { this.tile = 11; }
        if(this.scale == 6 && this.accidental == -1) { this.tile = 12; }
        if(this.scale == 6 && this.accidental == 0) { this.tile = 13; }
        if(this.scale == 6 && this.accidental == 1) { this.tile = 14; }
        if(this.scale == 7 && this.accidental == -1) { this.tile = 15; }
        if(this.scale == 7 && this.accidental == 0) { this.tile = 16; }
    }
    if(!isLetters)
    {
        if(this.scale == 1 || this.scale == 8) { this.tile = 21; }
        if(this.scale == 2 && this.accidental == -1) { this.tile = 22; }
        if(this.scale == 2 && this.accidental == 0) { this.tile = 23; }
        if(this.scale == 2 && this.accidental == 1) { this.tile = 24; }
        if(this.scale == 3 && this.accidental == -1) { this.tile = 25; }
        if(this.scale == 3 && this.accidental == 0) { this.tile = 26; }
        if(this.scale == 4 && this.accidental == 0) { this.tile = 27; }
        if(this.scale == 4 && this.accidental == 1) { this.tile = 28; }
        if(this.scale == 5 && this.accidental == -1) { this.tile = 29; }
        if(this.scale == 5 && this.accidental == 0) { this.tile = 30; }
        if(this.scale == 5 && this.accidental == 1) { this.tile = 31; }
        if(this.scale == 6 && this.accidental == -1) { this.tile = 32; }
        if(this.scale == 6 && this.accidental == 0) { this.tile = 33; }
        if(this.scale == 6 && this.accidental == 1) { this.tile = 34; }
        if(this.scale == 7 && this.accidental == -1) { this.tile = 35; }
        if(this.scale == 7 && this.accidental == 0) { this.tile = 36; } 
    }
}

