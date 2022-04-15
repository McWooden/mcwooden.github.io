// Jumbotron
let jumbotron = document.getElementById('jumbotron')
let pp = document.getElementById('photoProfile');
let nama = document.getElementById('nama')
let title = document.getElementById('title')
let particle = document.getElementById('particle')

ganti = () => {
    let X = Math.round(Math.random() * -20) + Math.round(Math.random() * 20);
    let Y =  Math.round(Math.random() * -20) + Math.round(Math.random() * 20);
    return 'translate('+ X + 'px,' + Y + 'px)';
}
gantiTitle = () => {
    let randomText = Math.floor(Math.random()*5);
    if (randomText == 1) {
        pp.title = '>:V'
    } else if (randomText == 2) {
        pp.title = 'hey!'
    } else if (randomText == 3) {
        pp.title = 'heyy!'
    } else if (randomText == 4) {
        pp.title = 'heyyy!'
    } else if (randomText == 5) {
        pp.title = 'hy'
    }
    return randomText
}
putar = degree =>{
    let deg = Math.round(Math.random()*degree)
    let negativeDeg = Math.round(Math.random()*-degree)
    let rotate = deg + negativeDeg
    return 'rotate('+rotate+'deg'+')'
}
paralax = (kecepatan) => {
    return Math.floor((window.scrollY) * kecepatan)
}

window.addEventListener('scroll',() => {
    pp.style.transform = 'translateY('+paralax(0.15)+'px)'
    nama.style.transform = 'translateY('+paralax(0.1) +'px)'
    title.style.transform = 'translateY('+paralax(0.09)+'px)'
})



pp.addEventListener('click', () => {
    gantiTitle()
    pp.style.transform += putar(2)
    pp.style.transform += ganti()
});
nama.addEventListener('click', () => {
    nama.style.transform += ganti()
    nama.style.transform += putar(1)
});
title.addEventListener('click', () => {
    title.style.transform += ganti()
    title.style.transform += putar(1)
});


jumbotron.addEventListener('mouseenter', () => {
    gerakInterval = setInterval(() => {
        gantiTitle()
        pp.style.transform += putar()
        pp.style.transform += ganti()
        nama.style.transform += ganti()
        nama.style.transform += putar(1)
        title.style.transform += ganti()
        title.style.transform += putar(1)

    },5000)
})
jumbotron.addEventListener('mouseleave', () => {
    clearInterval(gerakInterval)
})

randomColors = () => {
    let colors = 
    ['orange' ,
    'goldenrod',
    'gold', 
    'white'];
    return colors[Math.floor(Math.random() * colors.length)]
}
boxShadow = (e) => {
    e.style.boxShadow = 
    ' 1px 1px 3px ' + randomColors()+', ' +
    '0 0 3px ' + randomColors()
    setTimeout(() => {
        e.style.boxShadow = ' 1px 1px 1px ' + randomColors()+', ' + 
        '0 0 5px ' + randomColors()
    }, 3000)
}
buatKotak = () => {
    const particle = document.createElement('particle')

    var size = Math.random()*50
    particle.style.width = 20 + size + 'px'
    particle.style.height = 20 + size + 'px'

    particle.style.top = Math.random() * innerHeight + 'px'
    particle.style.left = Math.random() * innerWidth + 'px'

    particle.style.background = randomColors();

    jumbotron.appendChild(particle);
    setTimeout(()=>{
        particle.remove()
    },7500)
}
let addParticle = setInterval(buatKotak, 1000);
window.addEventListener('scroll', () => {
    if (window.scrollY == 0) {
        addParticle = setInterval(buatKotak, 1000)
    } else {
        clearInterval(addParticle)
    }
})
// About
const html = document.querySelector('.html')
const css = document.querySelector('.css')
const js = document.querySelector('.js')
const htmlBar = document.querySelector('.htmlBar')
const cssBar = document.querySelector('.cssBar')
const jsBar = document.querySelector('.jsBar')
// projects
const tribute = document.getElementById('tribute')
const miniGames = document.getElementById('miniGames')
const landing = document.getElementById('landing')
const personal = document.getElementById('personal')


// Contact
let inputForm = document.querySelectorAll('input')
inputPlaceholder = (el) =>{
    if (el.value.length >= 1) {
        el.previousElementSibling.style.opacity = 1
        el.previousElementSibling.style.transform = 'translate(3px,-14px) scale(0.9)'
        el.previousElementSibling.style.color = 'white'
        el.previousElementSibling.style.zIndex = '1'
        el.previousElementSibling.style.backgroundColor = '#333'
        el.style.opacity = '1'
    } else {
        el.previousElementSibling.style.transform = 'translate(3px,4px) scale(1)'
        el.previousElementSibling.style.color = '#999'
        el.previousElementSibling.style.zIndex = '-1'
        el.previousElementSibling.style.backgroundColor = 'transparent'
        el.style.opacity = '0.5'
    }
}
inputForm.forEach(e => e.addEventListener('mouseenter', () => {
    inputPlaceholder(e)
}))
inputForm.forEach(e => e.addEventListener('keydown', () => {
    inputPlaceholder(e)
}))
inputForm.forEach(e => e.addEventListener('keyup', () => {
    inputPlaceholder(e)
}))
inputForm.forEach(e => e.addEventListener('keypress', () => {
    boxShadow(e)
    setTimeout(() => {
        e.style.boxShadow = '0 0 0 white'
    }, 5000)
}))
// Typewriter
let writer = document.getElementsByClassName('typewriter');
let typingsatu = 0;
let typingdua = 0;
let typingtiga = 0;
let txt1 = 'My Name';
let txt2 = 'My Skill';
let txt3 = 'Contact';
typeWritersatu = () => {
    if (typingsatu < txt1.length) {
        writer[0].innerHTML += txt1.charAt(typingsatu)
        typingsatu++
        setTimeout(() => {
            typeWritersatu()
        },100)
    }
}
typeWriterdua = () => {
    if (typingdua < txt2.length) {
        writer[1].innerHTML += txt2.charAt(typingdua)
        typingdua++
        setTimeout(() => {
            typeWriterdua()
        },150)
    }

}
typeWritertiga = () => {
    if (typingtiga < txt3.length) {
        writer[2].innerHTML += txt3.charAt(typingtiga)
        typingtiga++
        setTimeout(() => {
            typeWritertiga()
        },175)
    }
}
setTimeout(()=>{
    typeWritersatu()
    typeWriterdua()
    typeWritertiga()
}, 300)


window.addEventListener('scroll', () => {
    // Skill
    if (window.scrollY >= html.offsetHeight) {
        htmlBar.style.width = '50%'
    }
    if (window.scrollY >= css.offsetHeight) {
        cssBar.style.width = '40%'
    }
    if (window.scrollY >= js.offsetHeight) {
        jsBar.style.width = '30%'
    }
    // project
    if (window.scrollY >= tribute.offsetHeight) {
        tribute.style.opacity = 1
        tribute.style.transform = 'translateY(0)'
    }
    if (window.scrollY >= miniGames.offsetHeight) {
        miniGames.style.opacity = 1
        miniGames.style.transition = '1.4s'
        miniGames.style.transform = 'translateY(0)'
    }
    if (window.scrollY >= landing.offsetHeight) {
        landing.style.opacity = 1
        landing.style.transition = '1.8s'
        landing.style.transform = 'translateY(0)'
    }
    if (window.scrollY >= personal.offsetHeight) {
        personal.style.opacity = 1
        personal.style.transition = '2.2s'
        personal.style.transform = 'translateY(0)'
    }
    
})