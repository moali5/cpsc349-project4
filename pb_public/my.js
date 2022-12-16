
import PocketBase from 'https://unpkg.com/pocketbase@0.8.3/dist/pocketbase.es.mjs'

const USERNAME = 'moali5@csu.fullerton.edu'
const PASSWORD = '1234567890'

const pb = new PocketBase('http://127.0.0.1:8090')

const authData = await pb.admins.authWithPassword(USERNAME, PASSWORD)
console.log(authData)

// for button
const home = document.querySelector('#home')
const login = document.querySelector('#login')
const reset = document.querySelector('#reset')
const forget = document.querySelector('#forget')
const signup = document.querySelector('#signup')

// for pages
const pic = document.querySelector('#pic')
const loginn = document.querySelector('#loginn')
const signupp = document.querySelector('#signupp')
const forgett = document.querySelector('#forgett')
const resett = document.querySelector('#resett')

home.addEventListener('click', () => {
  pic.classList.remove('hidden')
  loginn.classList.add('hidden')
  signupp.classList.add('hidden')
  forgett.classList.add('hidden')
  resett.classList.add('hidden')
})

login.addEventListener('click', () => {
  pic.classList.add('hidden')
  loginn.classList.remove('hidden')
  signupp.classList.add('hidden')
  forgett.classList.add('hidden')
  resett.classList.add('hidden')
})

reset.addEventListener('click', () => {
  pic.classList.add('hidden')
  loginn.classList.add('hidden')
  signupp.classList.add('hidden')
  forgett.classList.remove('hidden')
  resett.classList.add('hidden')
})

forget.addEventListener('click', () => {
  pic.classList.add('hidden')
  loginn.classList.add('hidden')
  signupp.classList.add('hidden')
  forgett.classList.add('hidden')
  resett.classList.remove('hidden')
})

signup.addEventListener('click', () => {
  pic.classList.add('hidden')
  loginn.classList.add('hidden')
  signupp.classList.remove('hidden')
  forgett.classList.add('hidden')
  resett.classList.add('hidden')
})

const btn = document.querySelector('#chcolor')

function random (number) {
  return Math.floor(Math.random() * (number + 1))
}

btn.addEventListener('click', () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`
  document.body.style.backgroundColor = rndCol
})
