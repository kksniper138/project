let player = document.querySelector('#player')
let rocket = document.querySelector('#rocket')
var click = document.querySelector('#clickBox')
let ramp = document.querySelector('.ramp')

click.addEventListener('click', e =>{
    rocket.innerHTML +='<a-animation attribute="position" from="0 0 0" to="0 10000 0" dur="50000" delay="0"></a-animation>'
    ramp.classList.add('hidden')
})

let levelComplete = false

var d = new Date();
var n = d.getTime();

var d2 = 0;
var n2 = 0;

while(true){
    d2 = new Date();
    n2 = d.getTime();
}

setInterval(checkIfComplete, 2000);

function checkIfComplete(){
    let position = player.getAttribute('position')
    let rocketPos = rocket.getAttribute('position')
    console.log(position)
    console.log(rocketPos)
    
    
    
    if (position.y < -5) {
        player.setAttribute('position', '0 7 -5')
        player.setAttribute('velocity', '0 0 0')
    }
    // player.body.position.set(0, 4, -7)
}


