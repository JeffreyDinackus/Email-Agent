// Content script to extract tr elements



setTimeout(script, 4000);


function script() {


  const trElements = Array.from(document.querySelectorAll('tr'));
  const textContents = [];

  for (let i = 0; i < trElements.length; i++) {
    textContents.push(trElements[i].textContent.trim());
  }

  console.log(textContents);

  fetch('http://127.0.0.1:5000/put', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ textContents }),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    })

}