const btn = document.querySelectorAll('.btn')
const output = document.querySelector('#output')

btn.forEach((key) => {
    key.onclick = () => {
        if(key.id == 'AC') {
            output.innerText = '';
        } else if (key.id == 'DEL') {
            let string = output.innerText.toString();
            output.innerText = string.substr(0, string.length - 1)
        } else if (output.innerText !== '' && key.id == '=') {
            output.innerText = eval(output.innerText);
        } else if (output.innerText == '' && key.id == '=') {
            output.innerText = '';
        } else {
            output.innerText += key.id;
        } 
    }
})