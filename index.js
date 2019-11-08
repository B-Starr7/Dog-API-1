'use strict';



function getDogImage(userInput) {
    fetch('https://dog.ceo/api/breeds/image/random/' + `${userInput}`)
      .then(response => response.json())
      .then(responseJson => console.log(responseJson));
  }

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    // let userInput = '#user-input';
    console.log($('#user-input').val())
   let userInput = $('#user-input').val()
    getDogImage(userInput);
  });
}


// function num(val) {

// }


$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});

// document.getElementById("input").submit();

// $(function() {
//     $('.js-form').submit(event => {
//     //   this stops the default form submission behavior
//       event.preventDefault();
//       const userTextElement = $(event.currentTarget).find('#user-text');
//       $(".js-display-user-text").text(`user text is:  ${userTextElement.val()}`);
//       userTextElement.val("");
//     });  
//   })


// $(document).ready(function() {
//     $('#button-id').click(function() {
//     num($('#user-text').val());
//     });
// });


// String(userInput)