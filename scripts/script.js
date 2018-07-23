// document.addEventListener
// (
// 	'click',function()
// 		{
//     		window.alert('click event!');
// 		}
// );
console.log('inside javascript');

var bodyHeaderContent = document.querySelector('#body-header-content');

console.log(bodyHeaderContent);
var colors=['red','green','blue'];
var currentColor=0;
bodyHeaderContent.addEventListener('click', function(){
	// this.style.backgroundColor="green";
	// this.style.fontSize="100px";
	this.style.backgroundColor = colors[currentColor%3];
	currentColor += 1;

});
