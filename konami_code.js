const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here
  let index = 0

  const body = document.querySelector('body')

  body.addEventListener('keydown', function(event) {
    const key = e.key

    if (key === codes[index]) {
      index++

      if (index === codes.length) {
        window.alert("Hurray!")

        index = 0
      }
    } else {
      index = 0
    }
  }
}
