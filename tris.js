
let turno = "X";
let gioco = true;
const bottone = document.getElementById("bottone");
bottone.addEventListener("click", function e() {inizioGioco()});
  
  
  
 




































  //funzione per creare il campo di gioco
  function CreazioneCampo() {

    const board = document.getElementById("board");
    board.innerHTML = " ";
    for(let i = 0; i< 9; i++){
      board.innerHTML += `<div class="cell col-4  border d-flex align-items-center justify-content-center" id="${i}"></div>`


  }
  
  }
  
  //funzione per selezionare una cella
  function Selezione(cell,celle, messaggio){
    console.log("E' stata selezionata una cella");
    if(cell.textContent == ""){
       if(turno == "X"){
         cell.textContent = "X";
         turno = "O";
       } else {
        cell.textContent = "O";
        turno = "X";
        
       }
    }
    Pareggio(celle,messaggio);

  }

  // funzione per determinare un pareggio
  function Pareggio(cell, messaggio){
    let contatore = 0;
    for(let i = 0; i < 9; i++){
      if(cell[i].textContent != ""){
        contatore ++;
      }
     
    }
    if(contatore == 9){
      messaggio.textContent = "C'è stato un pareggio!";
      turno = "X";
      gioco = false;
    }
   
  }

  function inizioGioco(){
    console.log("entro nel metodo");
    CreazioneCampo();
  const cell =document.querySelectorAll(".cell");
  const messaggio = document.getElementById("messaggio");
  turno = "X";
  gioco = true;
  
  
    for(let i = 0; i < 9; i++){
      console.log("for");
      
      cell[i].addEventListener("click", function e(){
        console.log("ok");
        Selezione(cell[i],cell,messaggio)
        console.log(cell[i].textContent);
      });
      
      
     
    }
  }
//funzione che determina la vittoria del gioco
//metter un pulsante per il reset





  
  

   //determinare le combo vincenti in modo dinamico
   const winningCombos = [
    [0,1,2], [3,4,5], [6,7,8], // righe
    [0,3,6], [1,4,7], [2,5,8], // colonne
    [0,4,8], [2,4,6]           // diagonali
  ];
  