// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const modal = document.querySelector('#modal')
console.log('modal is ', modal)
// When a user clicks on an empty heart:
const likes = document.querySelectorAll('span.like-glyph')

likes.forEach(like => {
  like.addEventListener('click', (e) => {
    console.log(e.target)
    handleLike(e.target)
  })
})

// Invoke mimicServerCall to simulate making a server request
function handleLike(target) {
  mimicServerCall()
    // When the "server" returns a success status:
    .then((data) => {
      console.log('sucess, ', data)
      // When a user clicks on a full heart:
      if (target.className === 'activated-heart') {
        // Change the heart back to an empty heart
        // Remove the .activated-heart class
        target.className = 'like-glyph'
      } else {
        // Change the heart to a full heart
        target.textContent = FULL_HEART
        // Add the .activated-heart class to make the heart appear red
        target.className = 'activated-heart'
      }
    })
    // When the "server" returns a failure status:
    // Respond to the error using a .catch(() => {}) block after your .then(() => {}) block.
    .catch((err) => {
      console.error('failure, ', err)
      // Display the error modal by removing the .hidden class
      //remove the class 'hidden' from targets 
      modal.className = ''
      // Display the server error message in the modal
      modal.textContent = err
      // Use setTimeout to hide the modal after 3 seconds (add the .hidden class)
      setTimeout(() => {
        modal.className = 'hidden'
      }, 3000)
    })
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
