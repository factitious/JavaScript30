// // My solution

// document.addEventListener('keydown', (key) => {
//     selected_key = document.querySelector(`div[data-key="${key.which}"]`);
//     selected_audio = document.querySelector(`audio[data-key="${key.which}"]`).play()
//     selected_key.classList.add('playing')
// })

// document.addEventListener('keyup', (key) => {
//     selected_key = document.querySelector(`div[data-key="${key.which}"]`);
//     selected_key.classList.remove('playing')
// })


// Suggested solution

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!audio) return; // don't run function if audio is not present for that key.
    audio.currentTime = 0;
    audio.play()
    key.classList.add('playing')
}

function removeTransition(e){

    if(e.propertyName !== 'transform') return;
    // console.log(this)
    console.log(e)
    // e.classList.remove('playing')

}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener(`transitionend`, removeTransition));
window.addEventListener('keydown', playSound);
