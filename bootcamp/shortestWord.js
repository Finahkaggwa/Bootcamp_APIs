export default function shortestWord(thestring){
    var shortest = thestring.split(' ');
      var theShortest = shortest[0]; 
      for(var i=0; i<shortest.length; i++){
      if(shortest[i].length <= theShortest.length){
            theShortest = shortest[i] 
        }
      }
      return  theShortest
    }