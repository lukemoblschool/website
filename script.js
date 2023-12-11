$(document).ready(function() {
  $('h1').text('Luke Mobley');
  $('p').filter(':contains("Senior, Class of 2024")').text('Senior, Class of 2024');
  $('#classes-list').empty().append(
    $('<li>').text('AP Physics C'),
    $('<li>').text('AP Statistics'),
    $('<li>').text('AP Microeconomics'),
    $('<li>').text('AP Environmental Science'),
    $('<li>').text('English'),
    $('<li>').text('Estudios Globales'),
    $('<li>').text('Creative Coding'),
    $('<li>').text('Free Period')
  );
  $('#athletics').text('Im the captain for the soccer team.');
  $('#other-things').text('Clash Royale');
});
