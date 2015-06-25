var bottles = prompt('How many bottles of beer on the wall would you like?');
for (i=bottles; i>=0; i--){
    if (i ===0){
        console.log("No more bottles of beer on the wall.");
    }else if (i === 1){
        console.log(i + " bottle of beer on the wall" + " pass it around" + " 1 bottle of beer on the wall.");
    }else{
      console.log(i + " bottles of beer on the wall,");
        console.log("Take one down and pass it around,");
        console.log((i-1) + " bottles of beer on the wall!");
    }
 }
