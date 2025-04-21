var name;
name = JSON.parse(localStorage.getItem('name'))

console.log('Ohh I see you can use console You noob')

for (;;) {
    if (name === 'null' || name === '') {
        name = prompt('Enter your name Noob!');
        if (name === 'null' || name.trim() === '') {
            alert('Do enter the Name you noobda');
            continue;
        }
    }
    localStorage.setItem('name', JSON.stringify(name));
    break;
}

var h2 = document.querySelector('h2');
h2.innerHTML = `Hey -- "${name}" -- you Noob!! <br>Beat the sound out of it`

h2.addEventListener('click', e=>{    
    localStorage.removeItem('name');
    location.reload()
})

const dabba = document.querySelectorAll('.drum')

const shanta =(kari)=>{
    switch(kari){
        case 'w':
            var audio = new Audio('./sounds/crash.mp3')
            audio.play()
        break;
        case 'a':
            var audio = new Audio('./sounds/kick-bass.mp3')
            audio.play()
        break;
        case 's':
            var audio = new Audio('./sounds/snare.mp3')
            audio.play()
        break;
        case 'd':
            var audio = new Audio('./sounds/tom-1.mp3')
            audio.play()
        break;
        case 'j':
            var audio = new Audio('./sounds/tom-2.mp3')
            audio.play()
        break;
        case 'k':
            var audio = new Audio('./sounds/tom-3.mp3')
            audio.play()
        break;
        case 'l':
            var audio = new Audio('./sounds/tom-4.mp3')
            audio.play()
        break;
        default:
            console.log('Type the one in the box you freak !!\n')
    }
}

dabba.forEach(saman=>{
    saman.addEventListener('click', e=>{
        var inner = saman.innerText;
        shanta(inner);
    });
})

document.addEventListener('keypress', e=>{
    shanta(e.key);
})