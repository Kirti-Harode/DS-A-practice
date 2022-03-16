let bribes = 0;
    let arr = [];
    for(let i = 1; i <= q.length; i++){
        arr.push(i);
    }
    
    for(let i = 0; i < q.length; i++ ){
        if(q[i] != arr[i]){
            if(q[i] === arr[i+1]){
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                bribes += 1;
            }
            else if(q[i] === arr[i+2]){
                [arr[i+1], arr[i+2]] = [arr[i+2], arr[i+1]];
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                bribes += 2;                
            }
            else{
                console.log('Too chaotic');
                return;
            }
        }
    }
    console.log(bribes);