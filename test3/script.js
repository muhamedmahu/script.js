// document.querySelector('#ex-8').addEventListener('click', function() {
//     for (let i =0; i<3; i++) {
//         alert('hello')
//     }
//     this.remove()
//  });

// let body = document.querySelector('body')
// let lickGoogle = document.createElement('button')
// body.append(lickGoogle)
// lickGoogle.textContent = 'Google'
// let html = document.querySelector('html')
// html.style.backgroundImage = 'linear-gradient(to top right, red, lightgray, purple, lightgreen, blue, green)'
// html.style.height = '100%'

// lickGoogle.addEventListener('click', function() {
//     lickGoogle.textContent = 'Yandex'
// })

// lickGoogle.addEventListener('contextmenu', function() {
//     lickGoogle.style.backgroundColor = 'red'
// })

// lickGoogle.addEventListener('dblclick', function() {
//     lickGoogle.remove()
// })


// html.addEventListener('click', function(event) {
//     let div = document.createElement('div')
//     div.style.display = 'inline'
//     div.style.padding = `${Math.random()*50}px`
//     div.style.borderRadius = '100%'
//     div.style.backgroundColor = `rgb(${Math.random()*250},${Math.random()*250},${Math.random()*250})`
//     div.style.position = 'absolute'
//     div.style.top = (event.clientY) + 'px'
//     div.style.left = event.clientX + 'px'
//     body.append(div)

// })

var friends = ['apple', 'banana', 'cherry', ];
html = '<ul>';
friends.forEach(function(item, i, arr) {
    html += '<li>' + item + '</li>';
});
html += '</ul>'

document.write(html)

let myInput = document.createElement('input');
document.write(myInput);



