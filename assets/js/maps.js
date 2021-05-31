// Add Google Maps

function initMap(){
    //Map options
    const options = {
        zoom: 6,
        center: {lat:22.6694, lng:88.3997}
    };
    // New map
    const map = new 
    google.maps.Map(document.getElementById("map"), options);


    // Create an Array of Markers
        const markers =[
            {
                coords: {lat:22.57889431510853, lng:88.47182918150588}, //Jeti-Oguz Gorge    
                content: '<h4>Rajarhat New Town Sky Restaurant</h4>',
                info: `<img class="img-fluid" src="assets/images/biswabanglaBanner.jpg" alt="Rajarhat New Town Sky Restaurant">
                <h4 class="py-4">Rajarhat New Town Sky Restaurant</h4>
                <p>Sky Restaurant - Glook The Sky Lounge is a newly opened restaurant which has opened up its doors in New Town on the 5th Floor of Pride PLaza Hotel. The main attraction of this place is their rooftop seating arrangement. The place is so beautiful.`
            },
            {
                coords: {lat:22.545045999502246, lng:88.34256852623457}, // Ala-Archa National Park
                content: '<h4>Victoria Memorial</h4>',
                info: `<img class="img-fluid" src="assets/images/ala-archa.jpg" alt="Victoria Memorial">
                <h4 class="py-4">Victoria Memorial</h4>
                <p>The Victoria Memorial is a large marble building in Kolkata, which was built between 1906 and 1921. It is dedicated to the memory of Empress Victoria, and is now a museum under the auspices of the Ministry of Culture. The memorial lies on the Maidan and is one of the famous monuments of Kolkata.</p>`
            }  
        ];

        //Loop through markers
        for(var i = 0; i < markers.length; i++) {
            // Add marker
            addMarker(markers[i]);
        }

      
    // Add marker Function
    function addMarker(props) {
        const marker = new google.maps.Marker({
        position: props.coords,
        map: map,        
        });

        if(props.content){
            const infowindow = new google.maps.InfoWindow({
                content:props.content
            });
            
            // Marker Infowindow appears on mouseover and disappears on mouseout 
            marker.addListener('mouseover', function(){
                infowindow.open(map, marker);
                
            google.maps.event.addListener(marker, 'mouseout', function() {
                infowindow.close();
                });
            }); 
            
            // Infowindow shows in "sidebar" section when marker is clicked
           google.maps.event.addListener(marker, 'click', (function(i) {
    
            return function() {
           document.getElementById("sidebar").innerHTML = markers[i].info;
                };
            })(i));

        }        
    }  
}