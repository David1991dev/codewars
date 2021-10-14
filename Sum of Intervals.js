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