/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;
const UITLEG = 0;

var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler

var vijandX =800;
var vijandY = 600

var coin = 200
/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // speler
  const KEY_DOWN = 40
  const KEY_UP = 38
  const KEY_LEFT = 37
  const KEY_RIGHT = 39
  const SPELEN = 1
  if (keyIsDown(37)) {
    spelerX=spelerX-5
  }
  if (keyIsDown(39)) {
   spelerX=spelerX+5
  }
  if (keyIsDown(38)) {
    spelerY=spelerY-5
  }
  if (keyIsDown(40)) {
  spelerY=spelerY+5
  }
  
  // vijand

  // kogel
  
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing speler tegen vijand
  if (spelerX - vijandX < 51 && 
      spelerY -vijandY > -51 &&
      spelerY - vijandY < 51 &&
      spelerX - vijandX > -51 ) {
      console.log("botsing");
    spelStatus = GAMEOVER;
  }
  // botsing kogel tegen vijand

  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
   fill("black")
   rect(0, 0, 1280, 720);
  // vijand
  fill("red");
  rect (vijandX - 25, vijandY - 25, 50, 50 );
  fill("black");
ellipse(vijandX, vijandY, 10, 10);
  // kogel

  // speler
  fill("white");
  rect(spelerX - 25, spelerY - 25, 50, 50);
  fill("black");
  ellipse(spelerX, spelerY, 15, 15);

  // punten en health

};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  // check of HP 0 is , of tijd op is, of ...
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  
  background("black");
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing(); // checkt ook gameover
    tekenAlles();
    
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm
    fill("white")
    text("druk op reload", 100, 100);
    if (keyIsDown(13)) { // enter
         text("daar gaan we weer", 100, 300);
      }
  }
};