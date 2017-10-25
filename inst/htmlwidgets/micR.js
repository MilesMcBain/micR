var mic, fft;
var g = 50;
var plotwidth = 725 + g;
var plotheight = 400;
var gridwitdh = 100;
/**var txt = loadString(dataPath("tmp.txt"));*/

function setup() {

   createCanvas(plotwidth, plotheight); // use a multiple of 50 for height
   noFill();

   mic = new p5.AudioIn();
   mic.start();

   fft = new p5.FFT();
   fft.setInput(mic);
}

 /**
     * Grid Lines
     */
    function grid() {

        var w = canvas.width,
            h = canvas.height;

        /**
         * draw the axes
         *
         * stroke(0); // black
         * line(0, 0, w, 0);
         * line(0, 0, 0, h);
         */

        /**
         * i is used for both x and y to draw
         * a line every 50 pixels starting at
         * XXX.5 to offset the canvas edgesXXX
         * http://jsfiddle.net/DarkThrone/DNUCw/
         */
        stroke(255); // white
        for(var i = 0; i < w || i < h; i += gridwitdh) {
            // draw horizontal lines
            line(i + g, 0, i + g, h);
            // draw vertical lines
            line(0, h - i + g, w, h - i + g);
        }

        /**
         * white out the axes space
         */
        noStroke();
        fill(255, 255, 255);
        rect(0, height-g, width, height);
        rect(0, 0, g, height);
        noFill();

        /**
          * draw the tick marks
          */
        stroke(0); // black
        for(var i = gridwitdh; i < (w - g) || i < (h - g); i += gridwitdh) {
            // draw horizontal lines
            line(g + i, height - g, g + i, height - g + 5);
            // draw vertical lines
            line(g, i - g, g - 5, i - g);
        }

        /**
          * draw the tick labels
          */
        textSize(12);
        textAlign(CENTER, CENTER);
        textFont('Helvetica');
        for(var i = gridwitdh; i < (w - g) || i < (h - g); i += gridwitdh) {
            // draw y labels
            text(i, g - 20, height - g - i);
            // draw x labels
            text(i, i + g, height - g + 20);
        }

        /**
         * draw the axis label
         */
        text("frequency", g + (plotwidth - g)/2, h - 10);

    }


function draw() {
   background('#ebebeb'); // grey92
   grid();

   var spectrum = fft.analyze();

   beginShape();
   for (i = 0; i < spectrum.length; i++) {
    stroke(0);
    vertex(i + g, map(spectrum[i], 0, 255, height - g, g) );
   }
   endShape();
}
