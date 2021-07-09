/*
Copyright (c) 2021

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 documentation files (the "Software"), to deal in the Software without restriction, including without limitation
the rights to use, copy,modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
 and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or
substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE
AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/


export const drawRect = (detections, ctx) =>{
    // Loop through each prediction
    detections.forEach(prediction => {
  
      // Extract boxes and classes
      const [x, y, width, height] = prediction['bbox']; 
      const text = prediction['class']; 
  
      if(text === "book") {
        // Set styling
        const color = Math.floor(Math.random()*16777215).toString(16);
        ctx.strokeStyle = '#' + color
        ctx.font = '18px Arial';
  
        // Draw rectangles and text
        ctx.beginPath();   
        ctx.fillStyle = '#' + color
        ctx.fillText(text, x, y);
        ctx.rect(x, y, width, height); 
        ctx.stroke();
      }
    });
  }
  