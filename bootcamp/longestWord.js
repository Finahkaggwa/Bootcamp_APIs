export default function longestWord(thestring){
    var longest = thestring.split(' ');
      var maxiLength = 0;
      var theLongest = ''; 
      for(var i=0; i<longest.length; i++){
      if(longest[i].length >= maxiLength){maxiLength = longest[i].length
            theLongest = longest[i]                                                   
        }
      }
      return theLongest
     }