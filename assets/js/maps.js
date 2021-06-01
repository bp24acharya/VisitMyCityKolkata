// Add Google Maps

function initMap(){
    //Map options
    const options = {
        zoom: 10,
        center: {lat:22.5677, lng:88.3707}
    };
    // New map
    const map = new 
    google.maps.Map(document.getElementById("map"), options);


    // Create an Array of Markers
        const markers =[
            {
                coords: {lat:22.5788, lng:88.4718}, //Jeti-Oguz Gorge    
                content: '<h4>Rajarhat New Town Sky Restaurant</h4>',
                info: `<img class="img-fluid" src="assets/images/biswabanglaBanner.jpg" alt="Rajarhat New Town Sky Restaurant">
                <h4 class="py-4">Rajarhat New Town Sky Restaurant</h4>
                <p>Sky Restaurant - Glook The Sky Lounge is a newly opened restaurant which has opened up its doors in New Town on the 5th Floor of Pride PLaza Hotel. The main attraction of this place is their rooftop seating arrangement. The place is so beautiful.`
            },
            {
                coords: {lat:22.6325, lng:88.3564}, //Jeti-Oguz Gorge    
                content: '<h4>Belur Math</h4>',
                info: `<img class="img-fluid" src="assets/images/BelurMath.jpg" alt="Belur Math">
                <h4 class="py-4">Belur Math</h4>
                <p>Belur Math - Beluṛ Maṭh is the headquarters of the Ramakrishna Math and Ramakrishna Mission, founded by Swami Vivekananda, the chief disciple of Ramakrishna Paramahamsa. It is located on the west bank of Hooghly River, Belur, West Bengal, India and is one of the significant institutions in Kolkata.`
            },
            {
                coords: {lat:22.5450, lng:88.3425}, // Ala-Archa National Park   VictoriaMemorial.jpg
                content: '<h4>Victoria Memorial</h4>',
                info: `<img class="img-fluid" src="assets/images/VictoriaMemorial.jpg" alt="Victoria Memorial">
                <h4 class="py-4">Victoria Memorial</h4>
                <p>The Victoria Memorial is a large marble building in Kolkata, which was built between 1906 and 1921. It is dedicated to the memory of Empress Victoria, and is now a museum under the auspices of the Ministry of Culture. The memorial lies on the Maidan and is one of the famous monuments of Kolkata.</p>`
            },
            {
                coords: {lat:22.5627, lng:88.4656}, // Aquatica   Aqua.jpg
                content: '<h4>Aquatica</h4>',
                info: `<img class="img-fluid" src="assets/images/Aqua.jpg" alt="Aquatica">
                <h4 class="py-4">Aquatica</h4>
                <p>The theme park was started in 1999. It is one of the largest water amusement parks in and around Kolkata, as well as eastern India. It is quite a popular destination on the day of Holi. Recently another water theme park, Wet 'O' Wild, has come up adjacent to Nicco Park in the Salt Lake City area.Aquatica has a number of rides including tremendously exciting ones like the Black Hole, the Wave Pool, Niagara Falls, surf racer, Tornado and the Aqua Dance Floor. Regular parties and Fashion shows are hosted here, especially in the winter. There are 55 well appointed Rooms with Conference Hall, Party Hall, Board Room, Food Courts available</p>`
            },
            {
                coords: {lat:22.5861, lng:88.3470}, // Aquatica   Aqua.jpg
                content: '<h4>Howrah Bridge</h4>',
                info: `<img class="img-fluid" src="assets/images/HB.jpg" alt="Howrah Bridge">
                <h4 class="py-4">Howrah Bridge</h4>
                <p>Howrah Bridge is a balanced cantilever bridge over the Hooghly River in West Bengal, India. Commissioned in 1943, the bridge was originally named the New Howrah Bridge, because it replaced a pontoon bridge at the same location linking the two cities of Howrah and Kolkata</p>`
            },
            {
                coords: {lat:22.5120, lng:88.3603}, // Rabindra Sarobar  RSarovar.jpg
                content: '<h4>Rabindra Sarobar</h4>',
                info: `<img class="img-fluid" src="assets/images/HB.jpg" alt="Rabindra Sarobar">
                <h4 class="py-4">Rabindra Sarobar</h4>
                <p>Rabindra Sarobar (previously known as Dhakuria Lake) is an artificial lake in south Kolkata in the Indian state of West Bengal. This lake is located close to the Rabindra Sarobar metro station in Kolkata. It is a hugely popular recreation destination for Kolkata residents. The lake offers boating facilities and also attracts migratory birds during winter. A lot of people come for morning walks near the lake and also enjoy the view at the sunrise point located here.</p>`
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