
function drawDividingLines()
{
     //draw subdivision lines
     for(let i = 1; i < 14; i++)
     {
          ctx.strokeStyle = 'black';
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(0, (i * tileH) - bufferH);
          ctx.lineTo(width, (i * tileH) - bufferH);
          ctx.stroke();
     }

}

function drawPianoKeys()
{
     for(let i = 0; i < 14; i++)
     {       
          if(i == 2 || i == 4 || i == 6 || i == 9 || i == 11) { ctx.fillStyle = 'black'; }
          else { ctx.fillStyle = 'white'; }
          ctx.strokeStyle = 'black';
          ctx.lineWidth = 8;
          ctx.strokeRect(0, (i*tileH) + (tileH*0.15), marginX, tileH)
          ctx.fillRect(0, (i*tileH) + (tileH*0.15), marginX, tileH)
     }
     //a little shadow to the right
     ctx.fillStyle = 'rgba(0,0,0,0.5)';
     ctx.fillRect(marginX, 0, 20, height);

}

function drawIntervals()
{
     //fill in top and bottom areas
     ctx.fillStyle = 'grey';
     ctx.fillRect(marginX, 0, 980, bufferH + (tileH*0.5));
     ctx.fillRect(marginX, (13*tileH) - bufferH , 980, tileH*2);
     ctx.strokeStyle = 'black';
     ctx.lineWidth = 4;
     ctx.strokeRect(marginX, 0, 980, bufferH + (tileH*0.5));
     ctx.strokeRect(marginX, (13*tileH) - bufferH , 980, tileH*2);

     //calculate divisions between notes & draw boxes
     for(i = 1; i < notes.length; i++)
     {
          let tile;
          let span = notes[i].position - notes[i-1].position;

          if(span == 1) { ctx.fillStyle = '#a5cfff'; tile = tileTypes[38]; } //half step
          if(span == 2) { ctx.fillStyle = '#e8d1e5'; tile = tileTypes[39]; } //whole step
          if(span == 3) { ctx.fillStyle = '#ffbac1'; tile = tileTypes[40]; } //minor 3rd
          if(span == 4) { ctx.fillStyle = '#ffb894'; tile = tileTypes[41]; } //major 3rd

          let yDistance = ((notes[i-1].position * tileH) - bufferH + tileH);

          ctx.fillRect(marginX, yDistance, 980, span * tileH);
          ctx.strokeStyle = 'black';
          ctx.strokeRect(marginX, yDistance, 980, span * tileH);
          
          //add interval text if it's toggled on
          if(showingIntervals)
          {
               ctx.drawImage(tileset, tile.sprite[0].x, tile.sprite[0].y, tile.sprite[0].w, tile.sprite[0].h,
               marginX + 300, yDistance + (tileH * (span-1) * 0.5), tileW * tileScale * 5, tileH * tileScale);
          }
     }

}

function drawSidebar()
{
   ctx.fillStyle = "#1f1f1f";
   ctx.fillRect(0,0,marginX,height);

}

function randomInt(max)
{
    let rand_val = Math.floor(Math.random() * Math.floor(max + 1))
    return rand_val;
}
