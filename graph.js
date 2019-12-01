// Defines all the links for the page
const links = ["home.html", "gps.html", "handsfree_driving.html", "voice_commands.html", "texting_and_driving.html"];

window.onload = () => {

	// Gives each link in the navigation bar its corresponding link (once the window loads)
	for(let i = 0; i < links.length; i++){
		document.querySelector('.section' + (i+1)).addEventListener('click', function(){
			location.href = links[i];
		});
	}

	// Sets up the graph using Chart.js
	var ctx = document.getElementById("canvas").getContext("2d");
	var newChart = new Chart(ctx, {
		type: "bar",
		data: {
			labels: ["18-33", "34-45", "46-64"],
			datasets: [{
	            label: '% of People (Within a Particular Age Group) Who Admit to Texting While Driving',
	            data: [59, 50, 29],
	            backgroundColor: [
	                'rgba(255, 99, 132, 0.2)',
	                'rgba(54, 162, 235, 0.2)',
	                'rgba(255, 206, 86, 0.2)'
	            ],
	            borderColor: [
	                'rgba(255, 99, 132, 1)',
	                'rgba(54, 162, 235, 1)',
	                'rgba(255, 206, 86, 1)'
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero: true,
	                    max: 100,
	                    callback: function(value, index, values) {
	                        return value + "%";
	                    }
	                }
	            }],
	            xAxes: [{
	            	scaleLabel: {
	            		display: true,
	            		labelString: "Age Groups"
	            	}
	            }]
			}
		}
	});
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