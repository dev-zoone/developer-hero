// alert('how are you');

const showalert = () => {
    alert('dosto taka lagbe dhar dite parbi. just 5000?');
}


const lendMany = () => {
    const result = confirm("dosto taka dibi?");

    if(result === true) {
        console.log('tui amar janer dosto tore dimu na to kare dimu')
    }else{
        console.log('DGM.... tor sathe breck up')
    }
}

const getInfo = () => {
    const name = prompt('Tell me Your Name');

    console.log(name)
}