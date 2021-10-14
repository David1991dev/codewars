//https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/javascript


function sumIntervals(intervals){
    const fullList=[];
    const uniqueNumbers=[];
    
    intervals.map((block) =>  {
        for(let start = block[0]; start < block[1]; start++){
            fullList.push(start)
        }
    });
    
    fullList.map((numb) => { !uniqueNumbers.includes(numb) ? uniqueNumbers.push(numb) : null } )
    
    return uniqueNumbers.length;
    
    }



//vv
const range = ([from, to]) => {
    const size = to - from;
    return [...Array(size).keys()].map(i => i + from);
  };
  
  function sumIntervals(intervals) {
    return intervals
      .map(range)
      .reduce((acc, curr) => [...acc, ...curr])
      .filter((i, idx, arr) => arr.indexOf(i) === idx).length;
  }
  