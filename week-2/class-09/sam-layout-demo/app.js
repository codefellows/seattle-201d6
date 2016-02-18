// CSS layout demo

var para1 = document.getElementsByClassName('one');
var para2 = document.getElementsByClassName('two');
var para3 = document.getElementsByClassName('three');
var para4 = document.getElementsByClassName('four');
var para5 = document.getElementsByClassName('five');
var para6 = document.getElementsByClassName('six');
var para7 = document.getElementsByClassName('seven');
var para8 = document.getElementsByClassName('eight');
var para9 = document.getElementsByClassName('nine');
var para10 = document.getElementsByClassName('ten');

var butt1 = document.getElementById('button-one');
var butt2 = document.getElementById('button-two');
var butt3 = document.getElementById('button-three');
var butt4 = document.getElementById('button-four');
var butt5 = document.getElementById('button-five');
var butt6 = document.getElementById('button-six');
var butt7 = document.getElementById('button-seven');
var butt8 = document.getElementById('button-eight');
var butt9 = document.getElementById('button-nine');
var butt10 = document.getElementById('button-ten');

butt1.addEventListener('click', function(){
  console.log('Button 1 was clicked');
  para1[0].textContent = 'I was clicked and turned green!';
  para1[0].className += ' green';
  para1[0].style.display = 'block';
});

butt2.addEventListener('click', function(){
  console.log('Button 2 was clicked');
  para2[0].style.color = 'red';
  para2[0].style['background-color'] = 'white';
});

butt3.addEventListener('click', function(){
  console.log('Button 3 was clicked');
  para3[0].textContent = 'WHHOOOOOAAAAAAAAAA';
  para3[0].style.color = 'white';
  para3[0].style['background-color'] = 'blue';
  para3[0].style.display = 'inline';
});

butt4.addEventListener('click', function(){
  console.log('Button 4 was clicked');
  para4[0].innerHTML = '<img src="../skeleton-demo/img/Duncan.jpg">';
  para4[0].style['background-color'] = 'pink';
});

butt5.addEventListener('click', function(){
  console.log('Button 5 was clicked');
  para5[0].textContent = '';
  para5[0].style['background-color'] = 'orange';
});

var totalClicks6 = 0;
butt6.addEventListener('click', function(){
  console.log('Button 6 was clicked');
  totalClicks6 += 1;
  para6[0].style.color = 'black';
  para6[0].style['background-color'] = 'yellow';
  para6[0].textContent = 'I have been clicked ' + totalClicks6 + ' times!';
  para6[0].style.display = 'block';
  butt6.textContent = 'YOU WANT TO CLICK ME';
  butt6.style.display = 'block';
});

var counter7 = 0;
butt7.addEventListener('click', function(){
  console.log('Button 7 was clicked');
  var students = ['Rashid', 'Mike', 'Adrienne', 'Carrie', 'Misty Mountain Hop'];
  para7[0].innerHTML = '<h1>' + students[counter7] + '</h1>';
  butt7.style.color = 'red';
  counter7 += 1;
});

butt8.addEventListener('click', function(){
  console.log('Button 8 was clicked');
  para8[0].style.display = 'inline';
});

butt9.addEventListener('click', function(){
  console.log('Button 9 was clicked');
  butt9.style.display = 'inline';
});

butt10.addEventListener('click', function(){
  console.log('Button 10 was clicked');
  document.body.style['background-image'] = 'url("wigglecat.gif")';
});
