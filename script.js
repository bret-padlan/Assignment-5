document.getElementById('button').addEventListener('click', calculatingButton)

let circumferenceC
let areaA
let areaCircle
let circumferenceCircle
let radius

function calculatingButton () {
  radius = document.getElementById('radius').value
  radius = parseInt(radius)
  areaA = 3.14 * radius ** 2
  circumferenceC = 2 * 3.14 * radius
  document.getElementById('name').innerHTML = areaA + ' = area'
  document.getElementById('name-two').innerHTML = circumferenceC + ' = circumference'
}
