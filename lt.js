// Defines all the links for the page
const links = ["home.html", "gps.html", "handsfree_driving.html", "voice_commands.html", "texting_and_driving.html"];

// Gives each link in the navigation bar its corresponding link (once the window loads)
window.onload = () => {
	for(let i = 0; i < links.length; i++){
		document.querySelector('.section' + (i+1)).addEventListener('click', function(){
			location.href = links[i];
		});
	}
}

// Decides which section the website should be sent to upon pressing the previous button in the footer
function previous(x){
	if(x != 1){
		location.href = links[x-2];
	} else{
		location.href = links[links.length-1];
	}
}

// Decides which section the website should be sent to upon pressing the next button in the footer
function next(x){
	if(x != links.length){
		location.href = links[x];
	} else{
		location.href = links[0];
	}
}