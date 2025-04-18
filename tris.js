
let turno = "X"; // turno attuale
let gioco = true; // stato del gioco


 // Bottone "Rigioca"
const bottone = document.getElementById("bottone");
bottone.addEventListener("click", function e() {
  inizioGioco()
});
  
  


  //funzione per creare il campo di gioco
  function CreazioneCampo() {

    const board = document.getElementById("board");
    board.innerHTML = " ";  // svuota il campo
    for(let i = 0; i< 9; i++){
      // crea 9 celle con ID da 0 a 8
      board.innerHTML += `<div class="cell col-4  border d-flex align-items-center justify-content-center" id="${i}"></div>`


  }
  
  }
  
  // Funzione chiamata quando si clicca su una cella
  function Selezione(cell,celle, messaggio, count,gioco){
    console.log("E' stata selezionata una cella");
    if(cell.textContent == "" && gioco  ){
             if(turno == "X"){
         cell.textContent = "X";
        
       
         vittoriaGioco(cell,celle,count,turno,messaggio)
         turno = "O";
         
       } else {
        cell.textContent = "O";
        
        
        vittoriaGioco(cell,celle,count,turno,messaggio)
        turno = "X";
        
        
       }
    } 
    Pareggio(celle,messaggio); // controlla il pareggio

  }

  // Controlla se tutte le celle sono piene (pareggio)
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

  // Inizializza il gioco
  function inizioGioco(){

    CreazioneCampo();
  const cell =document.querySelectorAll(".cell");
  const messaggio = document.getElementById("messaggio");
  messaggio.textContent = ""; // reset messaggio
  turno = "X";
  gioco = true;
  let count= 0;
  
    for(let i = 0; i < 9; i++){
      
        // Aggiungi event listener alle celle
      cell[i].addEventListener("click", function e(){
        
        Selezione(cell[i],cell,messaggio,count,gioco);
        count+= 1;
        
      });
      
      
     
    }
   
  }
 // Verifica se c'è una combinazione vincente
function vittoriaGioco(cell,celle,count,turno, messaggio) {

  if(count >= 4){ // inizia a controllare dal  4° turno
      cell.id;
      const combo = [];
      let flag = 0;
      console.log(cell.id);
      
      // Trova tutte le combinazioni che contengono la cella cliccata
      for(let i = 0; i<winningCombos.length; i++){
        console.log(winningCombos[i]);
        console.log(winningCombos[i].includes(Number(cell.id)));
        
        if(winningCombos[i].includes(Number(cell.id))){
          combo.push(winningCombos[i]);
        }
      }
      console.log(combo);
      
      // Per ogni combinazione possibile, controlla se tutti i simboli sono uguali
      for(let i=0; i<combo.length; i++){
        console.log(turno);
        console.log(turno == "X");
        
        if(turno == "X"){
          for(let j=0; j<combo[i].length; j++){
          const cellaCombo =  document.getElementById(combo[i][j]);
          console.log(cellaCombo);
          if( cellaCombo.textContent == "X"){
            flag+= 1;
            
          } 
          console.log(flag);
          
          }
          if(flag == 3) {
            console.log("falg "+ flag);
            gioco = false;
            messaggio.textContent = "X ha vinto!";
            console.log(celle);
            
            for(let i = 0; i < 9; i++){
              celle[i].removeEventListener("click", function e(){
        
                Selezione(cell[i],cell,messaggio,count);
                count+= 1;
                console.log(count);
                console.log(cell[i].textContent);
              });
              console.log(cell[i]);
              
            }
            
          } else {
            console.log(flag);
            flag = 0;
            console.log(flag);
          }
        } else {
          
            for(let j=0; j<combo[i].length; j++){
            const cellaCombo =  document.getElementById(combo[i][j]);
            if( cellaCombo.textContent == "O"){
              flag+= 1;
              
            } 
            
            
            }
            if(flag == 3) {
              gioco = false;
              messaggio.textContent = "O ha vinto!";
              for(let i = 0; i < 9; i++){
                celle[i].removeEventListener("click", function e(){
          
                  Selezione(cell[i],cell,messaggio,count);
                  count+= 1;
                  console.log(count);
                  console.log(cell[i].textContent);
                });
              }
              
            } else {
              flag = 0;
  
            }
          }
      }
  }

}



   //determinare le combo vincenti in modo dinamico
   const winningCombos = [
    [0,1,2], [3,4,5], [6,7,8], // righe
    [0,3,6], [1,4,7], [2,5,8], // colonne
    [0,4,8], [2,4,6]           // diagonali
  ];
  