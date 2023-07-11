let input = document.getElementById('box');
let btn = document.getElementById('btn');



btn.onclick = () => {
    for (let i = 0; i < input.value; i++) {
        let color = '';
        if(i > 9){
            break
        } else if(i % 3 === 0){
            color = "red";
        } else if (i % 3 === 1){
            color = "yellow";
        } else {
            color = "green";
        } 
        document.write(`<div style="width: 200px; height: 200px; margin: 10px; background-color: ${color};" class="con"></div>`)
    }
    
};