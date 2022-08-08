
document.body.addEventListener('keyup',(event)=>{
    playSound(event.code.toLowerCase())
})

document.querySelector('.composer button').addEventListener('click',()=>{
    let song=document.querySelector('#input').value
    
    if(song !== ''){
        const songArray= song.split('')
        playComposition(songArray)
    }
})

function playSound(sound){
    let audioElement=document.querySelector(`#s_${sound}`)  //nul
    let keyElement=document.querySelector(`div[data-key=${sound}]`) //cor 
    
    if(audioElement){
        audioElement.currentTime=0;  //bug do aperta rapido
        audioElement.play()

    }

    if(keyElement){
        keyElement.classList.add('active')

        setTimeout(()=>{
            keyElement.classList.remove('active')
        },300)
    }
}

function playComposition(songArray){
    let wait=0; //para não tocar tudo de vez

    for(let songItem of songArray){

        setTimeout(()=>{
            playSound(`key${songItem}`)
        },wait)
       wait+=250;  //vai aumentando de 250 em 250
    }
}