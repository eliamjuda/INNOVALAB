
const headline = document.querySelector('.papernew');
const hamburger = document.querySelector('.titulo');
const hamburger2 = document.querySelector('.subtitulo');

const tl = new TimelineMax();

tl.fromTo(
	headline, 
	0.8,
	{opacity: 0, x: 00},
	 {opacity: 1, x:100},"0.5"
	).fromTo(
	hamburger, 
	0.5,
	{opacity: 0, x: 100},
	{opacity: 1, x:0},"-=0.5"
	).fromTo(
	hamburger2, 
	0.9,
	{opacity: 0, x: 70},
	{opacity: 1, x:0},"-=0.3")




