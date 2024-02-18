// Function to store <tr> elements in localStorage
function storeTRs() {
  const trElements = document.querySelectorAll('tr');
  const trArray = Array.from(trElements);
  localStorage.setItem('gmail_tr_elements', JSON.stringify(trArray.map(tr => tr.outerHTML)));
}

// Run the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', storeTRs);
