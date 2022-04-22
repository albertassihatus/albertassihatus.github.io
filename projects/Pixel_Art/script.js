let bgColor = document.querySelectorAll(".color");
bgColor[0].style.backgroundColor = 'black';
bgColor[1].style.backgroundColor = 'red';
bgColor[2].style.backgroundColor = 'blue';
bgColor[3].style.backgroundColor = 'green';
bgColor[4].style.backgroundColor = 'white';
bgColor[5].style.backgroundColor = 'brown';
bgColor[6].style.backgroundColor = 'gray';
bgColor[7].style.backgroundColor = 'yellow';
bgColor[8].style.backgroundColor = 'orange';


function quadroPixel(){
    
    let quadroPixels = document.getElementById('pixel-board');
        for (let index = 0; index < 25; index +=1){
            let pixelDivs = document.createElement('div');
            pixelDivs.className = 'pixel';     
            quadroPixels.appendChild(pixelDivs);
        }
};
quadroPixel();


function selecionarCor(){

    let setColor = document.getElementById('color-palette');

        function setNewColor(event) {
            let selectedColor = document.getElementsByClassName('selected')[0];
            selectedColor.classList.remove('selected');
            let otherColor = event.target;
            otherColor.classList.add('selected');
        };

    setColor.addEventListener('click', setNewColor);

};
selecionarCor();


function pintarPixels(){

    let quadroPixels = document.getElementById('pixel-board');

    quadroPixels.addEventListener('mouseup', function (event) {
        let selectedColor = document.querySelectorAll('.selected')
        event.target.style.background = selectedColor[0].id
        console.log(selectedColor)
    }); 
};
pintarPixels();


function apagarPixels(buttonName){

    let cleanButton = document.querySelector('p');
    let newButton = document.createElement('button');
    newButton.id = 'clear-board';
    newButton.innerHTML = buttonName;
    cleanButton.appendChild(newButton);

    newButton.addEventListener('click', function () {
        let pixelsPintados = document.querySelectorAll('.pixel');
        for (let index = 0; index < pixelsPintados.length; index +=1){
            pixelsPintados[index].style.background = 'white';
        }    
        });
    };
apagarPixels('Limpar');





