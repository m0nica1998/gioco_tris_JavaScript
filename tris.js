  
  CreazioneCampo();
  const cell =document.querySelectorAll(".cell");
  
  for(let i = 0; i < 9; i++){
    console.log("for ok");
    cell[i].addEventListener("click", function e(){
      Selezione()
    });
    
   // document.getElementById(i).addEventListener("click", Selezione());
  }
 
  //funzione per creare il campo di gioco
  function CreazioneCampo() {

    const board = document.getElementById("board");
    for(let i = 0; i< 9; i++){
      board.innerHTML += `<div class="cell col-4  border d-flex align-items-center justify-content-center" id="${i}"></div>`
  }
  
  }
  
  function Selezione(){
    console.log("E' stata selezionata una cella");
  }
   //funzione che chiede al giocatore di riempire la casella al click a turni
   //determinare le combo vincenti in modo dinamico
   const winningCombos = [
    [0,1,2], [3,4,5], [6,7,8], // righe
    [0,3,6], [1,4,7], [2,5,8], // colonne
    [0,4,8], [2,4,6]           // diagonali
  ];
  