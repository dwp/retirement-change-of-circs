//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

// window.GOVUKPrototypeKit.documentReady(() => {
//   // Add JavaScript here
// })

document.addEventListener('click', ({ target }) => {
    if (target.matches('button')) {
      
      let identifier = target.id //identify the id of the button pressed
      identifier = identifier.substring(0, identifier.length - 6); //remove the word button from the end
      navigator.clipboard.writeText(document.getElementById(identifier).innerHTML); //copy the text from the relevant field
      document.getElementById(target.id).innerHTML = document.getElementById(identifier+'CopyMessage').innerHTML;
      
      // Remove the copied message after 2 seconds.
      setTimeout(function() {
          document.getElementById(target.id).innerHTML = document.getElementById(identifier+'Message').innerHTML;
      }, 2500);
    }
  });