import $ from 'jquery';
import _ from 'lodash';

// Append elements to the body
$('body').append('<p>ALX Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button id="btn">Click here to get started</button>');
$('body').append("<p id='count'></p>");
$('body').append('<p>Copyright - ALX</p>');

let count = 0;

function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

// Debounce the click handler
$('#btn').on('click', _.debounce(updateCounter, 300));

