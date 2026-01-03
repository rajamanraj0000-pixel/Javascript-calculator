let inputbox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = '';

buttons.forEach(button => {
    button.addEventListener('click', (e) => {

        let value = e.target.innerText;

        if (value === '=') {
            try {
                string = String(eval(string));
                inputbox.value = string;
            } catch {
                inputbox.value = 'Error';
                string = '';
            }
        }
        else if (value === 'AC') {
            string = '';
            inputbox.value = '0';
        }
        else if (value === 'DEL') {
            string = string.substring(0, string.length - 1);
            inputbox.value = string || '0';
        }
        else if (e.target.id === 'plusminus') {
            if (string) {
                string = String(-eval(string));
                inputbox.value = string;
            }
        }
        else {
            string += value;
            inputbox.value = string;
        }
    });
});
