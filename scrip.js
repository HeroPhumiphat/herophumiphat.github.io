let showDetails = () => {
  const divA = document.createElement('div')
  divA.id = 'details'
  divA.style.position = 'fixed'
  divA.style.width = 'auto'
  divA.style.height = 'auto'
  divA.style.color = 'var(--c3)'
  divA.style.border = '2px solid #e1e1e1'
  divA.style.borderRadius = '5px'
  divA.style.bottom = '8px'
  divA.style.left = '8px'
  divA.style.padding = '20px'
  divA.style.opacity = '.3'
  divA.style.textAlign = 'start'
  document.body.append(divA)

  const details = document.getElementById('details')
  details.innerText = `Display Size\n=> width: ${window.innerWidth}px.\n=> height: ${window.innerHeight}px`

  window.addEventListener('resize', function() {
    details.innerText = `Display Size\n=> width: ${window.innerWidth}px.\n=> height: ${window.innerHeight}px`
  })


  const divB = document.createElement('div')
  divB.id = 'positionScrollY'
  divB.style.position = 'fixed'
  divB.style.width = 'auto'
  divB.style.height = 'auto'
  divB.style.color = 'var(--c3)'
  divB.style.border = '2px solid #e1e1e1'
  divB.style.borderRadius = '5px'
  divB.style.bottom = '8px'
  divB.style.right = '8px'
  divB.style.padding = '20px'
  divB.style.opacity = '.3'
  divB.style.textAlign = 'end'
  document.body.append(divB)

  const positionScrollY = document.getElementById('positionScrollY')
  positionScrollY.innerText = `scrollY: ${window.scrollY.toFixed(1)}px.`

  window.addEventListener('scroll', function () {
    positionScrollY.innerText = `scrollY: ${window.scrollY.toFixed(1)}px.`
  })
}

function onLoad () {
  const load = document.querySelector('.load')
  setTimeout(() => {
    load.style.display = 'none'
  }, 1000);
  load.classList.add('TL')
}

function Test (position, color) {
  function random (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
  }
  const divBox = document.createElement('div')
  divBox.id = 'boxAnima'
  divBox.style.position = 'relative'
  divBox.style.top = 0
  divBox.style.left = 0
  // divBox.style.border = '1px solid red'
  divBox.style.display = 'flex'
  divBox.style.justifyContent = 'center'
  divBox.style.alignItems = 'center'
  divBox.style.width = '100%'
  divBox.style.height = '100%'
  position.append(divBox)

  const divElement = document.createElement('div')
  divElement.id = 'textAnima'
  divElement.style.position = 'relative'
  divElement.style.minHeight = '70px'
  // divElement.style.width = '800px'
  divElement.style.color = 'var(--c1)'
  // divElement.style.border = `2px solid ${color}`
  // divElement.style.boxShadow = `5px 4px 5px ${color}`
  // divElement.style.borderRadius = '15px'
  divElement.style.padding = '15px'
  divElement.style.paddingLeft = '30px'
  divElement.style.display = 'flex'
  divElement.style.justifyContent = 'center'
  divElement.style.alignItems = 'center'
  document.getElementById('boxAnima').append(divElement)

  const ms = document.createElement('span')
  ms.id = 'ms'
  ms.innerText = 'PM: "'
  ms.style.marginRight = '15px'
  ms.style.fontWeight = '600'
  // ms.style.fontSize = '30px'
  ms.style.color = 'var(--c3)'
  document.getElementById('textAnima').append(ms)

  const span = document.createElement('span')
  span.id = 'char'
  span.style.padding = '0 3px'
  span.style.letterSpacing = '2px'
  span.style.color = 'var(--c3)'
  document.getElementById('textAnima').append(span)

  const char = document.getElementById('char')
  const chars = []

  const title = [
    'Hi!, I\'m\tPhumiphat Ro🙂.',
    'I Would Like to Be a Developer.'
  ]

  let count = 0
  let text

  text = title[count]

  const time = random(1.2, 1.8) * 100
  let key = 0
  let status = 'push'

  const creText = () => {
    if (status === 'push') {
      if (chars.length < 1 || chars.length < text.length) {
        chars.push(text[key])
        char.innerText = chars.join('')
        // console.log(chars, 'key: '+ key)
        key++
        if (key === text.length) {
          setTimeout(() => {
            status = 'pop'
            // console.log(status)
          }, 3 * 1000)
        }
      }
    } else if (status === 'pop') {
      if (chars.length > 1 || chars.length < text.length) {
        chars.pop()
        char.innerText = chars.join('')
        // console.log(chars, 'key: '+ key)
        key--
        if (key === 0) {
          setTimeout(() => {
            key = 0
            status = 'push'
            count++
            text = title[count % title.length]
          }, 2 * 1000)
        }
      }
    }
  }


  const set = () => setInterval(creText, time)
  setTimeout(set, 5000)

  const space = document.createElement('span')
  space.id = 'space'
  space.style.padding = '0 3px'
  space.style.paddingRight = '30px'
  space.style.color = color
  space.style.width = '15px'
  setInterval(()=> {
    space.innerText === '' ? space.innerText = '_' : space.innerText = ''
  }, .8 * 1000)
  document.getElementById('textAnima').append(space)

  const msl = document.createElement('span')
  msl.id = 'msl'
  msl.innerText = '"'
  msl.style.marginLeft = '0px'
  msl.style.fontWeight = '600'
  msl.style.color = 'var(--c3)'
  document.getElementById('textAnima').append(msl)
}

function runTitle () {
  const body = document.querySelector('.textShow')
  const color = 'var(--c3)'
  return Test(body, color)
}
runTitle()

setTimeout(onLoad, 1500)
showDetails()

let ct = 0
function menubar () {
  const menubar = document.querySelector('header>div.menubar')

  menubar.classList.toggle('active')
}

function onCopy() {
  let copyText = document.getElementById("myInput");

  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

  alert("Copied the text: " + copyText.value);
}

function other () {
  const header = document.querySelector('header')
  window.addEventListener('scroll', function () {
    if (this.window.scrollY > 800) {
      header.classList.add('active')
    } else {
      header.classList.remove('active')
    }
  })
}
other()

function goto (page) {
    if (page === 'about' ) {
      if ((window.innerWidth >= 900 && this.window.innerWidth <= 2000) && (window.innerHeight > 800 && window.innerHeight <= 1000)) {
        window.scrollTo(0, 700)
      } else if ((window.innerWidth >= 900 && this.window.innerWidth <= 2000) && (window.innerHeight > 1000)) {
        window.scrollTo(0, 1000)
      } else if (window.innerWidth >= 500 && window.innerWidth < 900) {
        window.scrollTo(0, 700)
      } else if (window.innerWidth < 500 && window.innerHeight > 700) {
        window.scrollTo(0, 750)
      } else if (window.innerWidth < 500 && window.innerHeight < 700) {
        window.scrollTo(0, 650)
      } else if (window.innerWidth > 2000) {
        window.scrollTo(0, 1400)
      }
    } else if (page === 'skills' ) {
      if ((window.innerWidth >= 900 && this.window.innerWidth <= 2000) && (window.innerHeight > 800 && window.innerHeight <= 1000)) {
        window.scrollTo(0, 1450)
      } else if ((window.innerWidth >= 900 && this.window.innerWidth <= 2000) && (window.innerHeight > 1000)) {
        window.scrollTo(0, 1550)
      } else if (window.innerWidth >= 500 && window.innerWidth < 900) {
        window.scrollTo(0, 1350)
      } else if (window.innerWidth < 500 && window.innerHeight > 700) {
        window.scrollTo(0, 1500)
      } else if (window.innerWidth < 500 && window.innerHeight < 700) {
        window.scrollTo(0, 1300)
      } else if (window.innerWidth > 2000) {
        window.scrollTo(0, 2600)
      }
    } else if (page === 'contact' ) {
      if (window.innerWidth >= 900 && this.window.innerWidth <= 2000) {
        window.scrollTo(0, 2250)
      } else if (window.innerWidth >= 500 && window.innerWidth < 900) {
        window.scrollTo(0, 2050)
      }else if (window.innerWidth < 500 && window.innerHeight > 700) {
        window.scrollTo(0, 2450)
      } else if (window.innerWidth < 500 && window.innerHeight < 700) {
        window.scrollTo(0, 2350)
      } else if (window.innerWidth > 2000) {
        window.scrollTo(0, 3850)
      }
    }
}

// document.querySelector('.load').style.display = 'none'
