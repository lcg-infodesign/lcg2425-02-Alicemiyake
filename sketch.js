function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  
}

let a=10


function draw() {
  background("#ddb289");
  stroke("#800000");
  strokeWeight(3);

  for(let i=0; i<40; i++){
    for(let j = 0; j < 20; j++){
      push();//salva come era il sistema prima delle trasformazioni 
      translate(5*a*i, 0);
      line(a, j * 50 + 10, a, j * 50 + 50);
      line(a, j * 50 + 10, 5*a, j * 50 + 10);
      drawRect(j);
  


      // Crea la quarta linea (lato destro) in modo random
      if (random(1) > 0.5) { // Condizione casuale: restituisce numero casuale tra 0 e 1, se è maggiore di 0.5 ciò che è nella condizione
        //viene disegnato 
        line(5*a, j*50+10, 5*a, j * 50 + 50); // Disegna il lato destro
        line(a, j * 50 + 50, 5*a, j * 50 + 50);
        
    }
      if (random(1) > 0.5) { // Condizione casuale: restituisce numero casuale tra 0 e 1, se è maggiore di 0.5 viene disegnato 
        //ciò che è dentro la condizione
        line(3*a, j * 50 + a, 3*a, j * 50 + 4 * a);//prima linea verticale x spirale
        line(4.5*a, j * 50 + 4 * a ,3*a, j * 50 + 4 * a);//prima linea orizzonatale x spirale
        line(4.5*a, j * 50 + 2 * a, 4.5*a, j * 50 + 4 * a);//seconda linea verticale x spirale
        line(4.5*a, j * 50 + 2 * a, 3.5*a, j * 50 + 2 * a);//seconda linea orizzonatale x spirale
        line(3.5*a, j * 50 + 2 * a, 3.5*a, j * 50 + 3.5 * a);//terza linea verticale x spirale
        line(3.5*a, j * 50 + 3.5 * a, 4.1*a, j * 50 + 3.5 * a);//terza linea orizzontale x spirale 
        line(4.1*a, j * 50 + 2.5 * a, 4.1*a, j * 50 + 3.5 * a);//quarta linea verticale x spirale
      }else{
        line(3*a, j * 50 + 4 * a, 3*a, j * 50 + 5 * a);//prima linea vertical x spirale dal basso
        line(4.5*a, j * 50 + 4 * a ,3*a, j * 50 + 4 * a);//prima linea orizzonatale x spirale
        line(4.5*a, j * 50 + 2 * a, 4.5*a, j * 50 + 4 * a);//seconda linea verticale x spirale
        line(4.5*a, j * 50 + 2 * a, 3.5*a, j * 50 + 2 * a);//seconda linea orizzonatale x spirale
        line(3.5*a, j * 50 + 2 * a, 3.5*a, j * 50 + 3.5 * a);//terza linea verticale x spirale
        line(3.5*a, j * 50 + 3.5 * a, 4.1*a, j * 50 + 3.5 * a);//terza linea orizzontale x spirale 
        line(4.1*a, j * 50 + 2.5 * a, 4.1*a, j * 50 + 3.5 * a);//quarta linea verticale x spirale
      }

      

      if (random(1)<0.5){
        line(2.6*a, j * 50 + 4 * a, 2.6*a, j * 50 + 3 * a);//trattino verticale a caso
    
      }

      if (random(1)>0.4){
        line(2.5*a, j * 50 + a, a, j * 50 + 2.5 * a);//x da alto sinistra a basso destra 
        line(a, j * 50 + a, 2.5*a, j * 50 + 2.5 * a);//x da alto destra a basso sinistra 
        line(2.5*a, j * 50 + a, 2.5*a, j * 50 + 2.5 * a);//trattino completa x
        line(a, 40 + j * 50, 2 * a, 40 + j * 50); // Prima linea fissa
        line(a, 35 + j * 50, 2 * a, 35 + j * 50); // Seconda linea fissa
        line(a, 30 + j * 50, 2 * a, 30 + j * 50); // Terza linea fissa
        
      }

      if (random(1)>0.2){
        strokeWeight(5);
        point(4*a, j * 50 + 1.5 * a);
        
      }
      pop();  
    }
  
  }


}

function drawRect(j){
  let brect = random(5,10);
  noFill();
  rect(3.5 * a, j * 50 + 44, brect, 5);
}
