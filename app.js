const container = document.querySelector('.content')
let baseUrl = "https://source.unsplash.com/all/"
const rows = 7

for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img')
    img.src = `${baseUrl}${randomSize()}`
    container.appendChild(img)
}


function randomSize() {
  return `${randomNumber()}x${randomNumber()}`;
}

function randomNumber() {
    return Math.floor(Math.random() * 10) + 300;
}

