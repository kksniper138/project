let player = document.querySelector('#player')
let rocket = document.querySelector('#rocket')
var click = document.querySelector('#clickBox')

click.addEventListener('click', e =>{
    rocket.innerHTML +='<a-animation attribute="position" from="6 0 -10" to="6 10000 -10" dur="50000" delay="0"></a-animation>'
})

let levelComplete = false


setInterval(checkIfComplete, 2000)

function checkIfComplete(){
    let position = player.getAttribute('position')
    console.log(position)
    
    
    if (position.y < -5) {
        // player.body.position.set(0, 4, -5
        player.setAttribute('position', '0 7 -5')
        player.setAttribute('velocity', '0 0 0')
    }
    // player.body.position.set(0, 4, -7)
}


