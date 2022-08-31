export default function wordLengths(thestring){
    var myString = thestring.split(' ');
    var wordlens= myString.map(word=>word.length);
      console.log(wordlens);
      let sum = 0;
      for(var i=0; i<wordlens.length; i++){
        sum += wordlens[i];
      } 
      return sum
      
    }