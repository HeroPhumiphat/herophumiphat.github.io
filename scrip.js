let showDetails = () => {
  const divA = document.createElement('div')
  divA.id = 'details'
  divA.style.position = 'fixed'
  divA.style.width = 'auto'
  divA.style.height = 'auto'
  divA.style.color = 'var(--c3)'
  divA.style.border = '2px solid #e1e1e1'
  divA.style.borderRadius = '5px'
  divA.style.bottom = 0
  divA.style.left = 0
  divA.style.margin = '20px'
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
  divB.style.bottom = 0
  divB.style.right = 0
  divB.style.margin = '20px'
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
  startOnWeb ()
  setTimeout(() => {
    runTitle()
  }, 2000);

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
  // divBox.style.border = '1px solid red'
  divBox.style.top = 0
  divBox.style.left = 0
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
  divElement.style.border = `1px solid ${color}`
  divElement.style.boxShadow = `5px 4px 5px ${color}`
  divElement.style.borderRadius = '5px'
  divElement.style.padding = '15px'
  divElement.style.paddingLeft = '30px'
  divElement.style.display = 'flex'
  divElement.style.justifyContent = 'center'
  divElement.style.alignItems = 'center'
  document.getElementById('boxAnima').append(divElement)

  // const textAnima = document.getElementById('textAnima')
  // let size = 10
  // const setSizeWidth = setInterval(() => {
  //   console.log('a')
  //   size += 10
  //   console.log(size)
  //   let boxWidth  = `${size}px`
  //   textAnima.style.width = boxWidth
  //   if (size > 500) {
  //     clearInterval(setSizeWidth)
  //   }
  // }, 70)

  // const form = document.createElement('span')
  // form.id = 'formAnima'
  // form.style.letterSpacing = '3px'
  // form.style.paddingRight = '10px'
  // form.style.color = color
  // form.style.fontWeight = '600'
  // // form.innerText = 'Me : '
  // document.getElementById('textAnima').append(form)

  const span = document.createElement('span')
  span.id = 'char'
  span.style.padding = '0 3px'
  span.style.letterSpacing = '2px'
  span.style.color = color
  // span.style.border = '1px solid red'
  document.getElementById('textAnima').append(span)

  const char = document.getElementById('char')
  const chars = []

  const title = [
    'Hi!, I\'m\tPhumiphat (Ro)🙂.',
    'สวัสดีครับ!, ผมชื่อ ภูมิพัฒน์ (โร่) ครับ🙂.',
    'I Would Like to Be a Developer.'
  ]

  let count = 0
  let text

  text = title[count]

  const time = random(.8, 2) * 100
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
            // console.log(status)
            count++
            // cosnsole.log('count: ', count % title.length)
            text = title[count % title.length]
          }, 2 * 1000)
        }
      }
    }
  }


  const set = () => setInterval(creText, time)
  setTimeout(set, 3500)

  const space = document.createElement('span')
  space.id = 'space'
  space.style.padding = '0 3px'
  space.style.paddingRight = '30px'
  space.style.color = color
  // space.style.border = '1px solid blue'
  space.style.width = '15px'
  setInterval(()=> {
    space.innerText === '' ? space.innerText = '_' : space.innerText = ''
  }, .8 * 1000)
  document.getElementById('textAnima').append(space)
}

function runTitle () {
  const body = document.querySelector('.textShow')
  const color = '#197EDE'
  return Test(body, color)
}

setTimeout(onLoad, 1500)
showDetails()

let ct = 0
function menubar () {
  const menubar = document.querySelector('header>div.menubar')
  console.log(ct % 2)

  ct % 2 == 0 ? menubar.classList.add('close') : menubar.classList.remove('close')
  ct % 2 == 1 ? menubar.classList.add('open') : menubar.classList.remove('open')
  ct++

  console.log('test?')
}


// document.querySelector('.load').style.display = 'none'

function controlOpacityContai1 () {
  const contai1 = document.querySelector('.container>.contai1')
  let scroll

  window.addEventListener('scroll', function () {
    let act = 500
    if(this.window.scrollY <= act) {
      scroll = window.scrollY / act
      console.log(scroll)
      console.log('scrollY: ', window.scrollY, 'px.')

      contai1.style.opacity = 1-scroll
      contai1.style.display = 'flex'
    } else {
      contai1.style.opacity = '0'
    }
  })
}

controlOpacityContai1()

function startOnWeb () {
  const h1TextTitle = document.querySelector('.container>.contai1>.textTitle>h1')

  h1TextTitle.classList.add('on')
}