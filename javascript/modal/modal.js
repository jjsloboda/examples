// Code to show and hide the modal

function show_modal() {
  // find the modal
  var modal_element = document.getElementById('modal');
  // switch it to "display: block" CSS style
  modal_element.style.display = 'block';
}

function hide_modal() {
  // find the modal
  var modal_element = document.getElementById('modal');
  // switch it to "display: none" CSS style
  modal_element.style.display = 'none';
}

// show the modal after 3 seconds
setTimeout(show_modal, 3000);
