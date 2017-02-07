var TennisGame = function(name1,name2) {
  this.playerOneName = name1;
  this.playerTwoName = name2;
  this.playerOneScore= 0;
  this.playerTwoScore= 0;
 this.playerOneScores= function() {
   this.playerOneScore++;
  }
 this.playerTwoScores= function() {
  this.playerTwoScore++;
  }
  this.isDeuce = function() {
  if ((this.playerTwoScore == this.playerOneScore) && this.playerOneScore >=3) {

    return(true);
  }
  else {
    return(false);

  }

  }
  this.translateScore =function(score) {
   switch (score) {
     case 0:
     return("Love");
     break;
     case 1:
     return("Fifteen");
     break;
     case 2:
     return("Thirty");
     break;
     case 3:
     return("Forty");
     break;
   }

  }
this.playerWithHighestScore = function() {
  if (this.playerOneScore > this.playerTwoScore) {
    return(this.playerOneName);
  }
  if (this.playerTwoScore>this.playerOneScore) {
    return(this.playerTwoName);
  }
}
   this.hasWinner = function() {

  if ((this.playerOneScore>3 || this.playerTwoScore>3) && (this.playerOneScore - this.playerTwoScore >1 || this.playerTwoScore - this.playerOneScore >1)   ){
    return(true);
}
  else {
    return(false);
  }
}

this.hasAdvantage = function() {
  if ((this.playerOneScore>3 || this.playerTwoScore>3)&& (this.playerOneScore>this.playerTwoScore || this.playerTwoScore>this.playerOneScore)) {

  return(true);
  }
  else {
    return(false);
  }
}
this.getScore = function() {
if (this.hasWinner()) {
  return(this.playerWithHighestScore()+" wins");

} else if (this.hasAdvantage()) {
  return("Advantage "+this.playerWithHighestScore());
}
  else if(this.isDeuce()) {
    return("Deuce");
  }
  else if ((this.playerOneScore == this.playerTwoScore)&& this.playerOneScore<3){
    return(this.translateScore(this.playerOneScore)+" all");
} else
    {
return(this.translateScore(this.playerOneScore)+", "+this.translateScore(this.playerTwoScore));
  }


}}
// write your code here to make the tests pass
