

// declaring winner in heading tag
function declare()
{
  // first random number
  randomNumber1=Math.floor(Math.random()*6)+1;
  if(randomNumber1==1)
  {
    document.querySelector(".img1").setAttribute("src","images/dice1.png");
  }
  else if(randomNumber1==2)
  {
    document.querySelector(".img1").setAttribute("src","images/dice2.png");
  }
  else if(randomNumber1==3)
  {
    document.querySelector(".img1").setAttribute("src","images/dice3.png");
  }
  else if(randomNumber1==4)
  {
    document.querySelector(".img1").setAttribute("src","images/dice4.png");
  }
  else if(randomNumber1==5)
  {
    document.querySelector(".img1").setAttribute("src","images/dice5.png");
  }
  else if(randomNumber1==6)
  {
    document.querySelector(".img1").setAttribute("src","images/dice6.png");
  }



  // Second Random Number
  randomNumber2=Math.floor(Math.random()*6)+1;
  if(randomNumber2==1)
  {
    document.querySelector(".img2").setAttribute("src","images/dice1.png");
  }
  else if(randomNumber2==2)
  {
    document.querySelector(".img2").setAttribute("src","images/dice2.png");
  }
  else if(randomNumber2==3)
  {
    document.querySelector(".img2").setAttribute("src","images/dice3.png");
  }
  else if(randomNumber2==4)
  {
    document.querySelector(".img2").setAttribute("src","images/dice4.png");
  }
  else if(randomNumber2==5)
  {
    document.querySelector(".img2").setAttribute("src","images/dice5.png");
  }
  else if(randomNumber2==6)
  {
    document.querySelector(".img2").setAttribute("src","images/dice6.png");
  }



  if(randomNumber1==randomNumber2)
  {
      document.querySelector(".win").textContent="It's a Draw."
  }
  else if(randomNumber1>randomNumber2)
  {
    document.querySelector(".win").textContent="🚩Player 1 Wins!"

  }
  else if (randomNumber1<randomNumber2)
  {
    document.querySelector(".win").textContent="Player 2 Wins!🚩"
  }
}
