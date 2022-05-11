function isValid(stale, latest, otjson) {
 
    let copy = stale.slice();
    let ot = JSON.parse(otjson);
    let i = 1;
    for(let operation of ot){                // copy = 'Repl.it uses operational transformations.', 
        if(operation['op'] === "skip"){       // [{"op": "skip", "count": 40}, {"op": "delete", "count": 47}, {"op": "delete", "count": 2}] 
            if((copy.length - i) >= operation['count'] ){
              i += operation['count'];
            }else{
               return "false, skip past end";
            }  
        }
        if(operation['op'] === "delete"){
            let totalIndex = i + operation['count']   // 50+20 <= 60
            if(totalIndex <= copy.length){
              copy = copy.slice(0, i-1) + copy.slice(totalIndex-1)
            }else{
                return "false, delete past end";
            }
            
        }
        if(operation['op'] === "insert"){
            copy = copy.slice(0, i-1) + operation['chars'] + copy.slice(i-1);
            i += operation['chars'].length;
        }  
    }
    return (copy === latest);
}

// console.log('Repl.it uses operational transformations.'.length)
console.log(isValid(
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    'Repl.it uses operational transformations.',
    '[{"op": "skip", "count": 40}, {"op": "delete", "count": 47}]'
  )); // true
  
  console.log(isValid(
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    'Repl.it uses operational transformations.',
    '[{"op": "skip", "count": 45}, {"op": "delete", "count": 47}]'
  )); // false, delete past end
  
  console.log( isValid(
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync test test.',
    'Repl.it uses operational transformations.',
    '[{"op": "skip", "count": 40}, {"op": "delete", "count": 47}, {"op": "skip", "count": 1}, {"op": "delete", "count": 50}]'
  )); // false, skip past end
  
  console.log( isValid(
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    'We use operational transformations to keep everyone in a multiplayer repl in sync.',
    '[{"op": "delete", "count": 7}, {"op": "insert", "chars": "We"}, {"op": "skip", "count": 4}, {"op": "delete", "count": 1}]'
  )
  ); // true
  
  console.log( isValid(
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    '[]'
  )); // true