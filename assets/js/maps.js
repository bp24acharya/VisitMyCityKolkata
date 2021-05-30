// Add Google Maps

function initMap(){
    //Map options
    const options = {
        zoom: 6,
        center: {lat:41.8339, lng:75.1312}
    };
    // New map
    const map = new 
    google.maps.Map(document.getElementById("map"), options);


    // Create an Array of Markers
        const markers =[
            {
                coords: {lat:42.4260911, lng:78.219132}, //Jeti-Oguz Gorge    
                content: '<h4>Jeti-Oguz Gorge</h4>',
                info: `<img class="img-fluid" src="assets/images/jeti-oguz.jpg" alt="Jeti-Oguz Gorge in Northern Issuk-Kul">
                <h4 class="py-4">Jeti-Oguz Gorge</h4>
                <p>Jeti-Oguz - The Seven Bulls, protrusions of deep red rock rearing from the alpine forests, make up one of the country’s most beloved natural landmarks. Just a short 40-minutes drive 
                from Karakol, verdant countryside gives way to snow-capped mountains, and the chiselled, burnt red rock face that forms the namesake of the region appears as if from nowhere.`
            },
            {
                coords: {lat:42.6448, lng:74.4803}, // Ala-Archa National Park
                content: '<h4>Ala-Archa National Park</h4>',
                info: `<img class="img-fluid" src="assets/images/ala-archa.jpg" alt="Ala-Archa National Park">
                <h4 class="py-4">Ala-Archa National Park</h4>
                <p>The Ala Archa National Park is an alpine national park in the Tian Shan mountains of Kyrgyzstan, established in 1976 and located approximately 40 km south of the capital 
                city of Bishkek. The park is a destination point for weekend picnickers, hikers, horse trekkers as well as mountain climbers and is open year round.</p>`
            },
            {
                coords: {lat:41.8339, lng:75.1312}, // Song-Kul Lake
                content: '<h4>Song-Kul Lake</h4>',
                info: `<img class="img-fluid" src="assets/images/song-kul.jpg" alt="Trail to Song-Kul Lake">
                <h4 class="py-4">Song-Kul Lake</h4>
                <p>Song-Lul lake is one of the most beautiful alpine lakes to visit in Kyrgyzstan. Almost every guide book describes Song-Kul lake as a tourist highlight and a must 
                visit on any Kyrgyzstan itinerary. Its the perfect Kyrgyz picture of mountains, yurts and horses and the perfect place to experience the life and culture of the Kyrgyz 
                nomads.</p>`
            },
            {
                coords: {lat:42.3732, lng:78.6116}, // Altin-Arashan valley
                content: '<h4>Altin-Arashan valley</h4>',
                info: `<img class="img-fluid" src="assets/images/altin-arashan.jpg" alt="Picturesque view of the Altin-Arashan Valley"></br>
                <h4 class="py-4">Altin-Arashan Valley</h4>
                <p>Altyn Arashan (Golden Spa) is a valley and mountain resort and a hot spring development set in an 
                alpine valley and includes nitric thermals springs situated in a picturesque forest landscape at an altitude of 2350-2435 metres. 
                The resort is set in a botanical research area called the Arashan State Nature Reserve which has about 20 snow leopards and several bears.</p>`
            },
            {
                coords: {lat:42.7464, lng:75.2504}, // Burana Tower
                content: '<h4>Burana Tower</h4>',
                info: `<img class="img-fluid" src="assets/images/burana.jpg" alt="Burana Tower near the town of Tokmok"></br>
                <h4 class="py-4">Burana Tower</h4>
                <p>The Burana Tower is a large minaret in the Chuy Valley in northern Kyrgyzstan. It is located about 80 km east of the country's capital Bishkek, near the town of Tokmok. 
                The entire site, including the mausoleums, castle foundations and grave markers, now functions as museum and there is a small building on the site containing historical 
                information as well as artifacts found at the site and in the surrounding region.</p>`
            },
            {
                coords: {lat:42.8746, lng:74.5698}, // Bishkek
                content: '<h4>Bishkek</h4>',
                info: `<img class="img-fluid" src="assets/images/bishkek.jpg" alt="Ala-Too Square in Bishkek City"></br>
                <h4 class="py-4">Bishkek</h4>
                <p>Bishkek is the capital and largest city of Kyrgyzstan. It is a relatively new city and has limited historical sites, but it makes a great place to start 
                your trips to the mountains and alpine lakes of the Tien Shans. Many young travelers find Bishkek's nightlife a delight and the people are friendly and very
                hospitable.</p>`
            },
            {
                coords: {lat:40.8308, lng:75.2986}, // Tash-Rabat Karavanserai
                content: '<h4>Tash-Rabat Karavanserai</h4>',
                info: `<img class="img-fluid" src="assets/images/tash-rabat.jpg" alt="Yurts in Naryn Valley"></br>
                <h4 class="py-4">Tash-Rabat Karavanserai</h4>
                <p>Tash Rabat is a well-preserved 15th century stone caravanserai in At-Bashy district, Naryn Province, Kyrgyzstan located at an altitude of 3,200 meters.
                Tash Rabat is located east of the main north-south highway. To the south are Lake Chatyr-Kul and Torugart Pass. To the north is Koshoy Korgon, a ruined fortress of uncertain date. 
                The area is a center for hiking and horse-trekking.</p>
                `
            },
            {
                coords: {lat:40.5140, lng:72.8161}, // Osh
                content: '<h4>Osh</h4>',
                info: `<img class="img-fluid" src="assets/images/osh.jpg" alt="Spectacular sunrise above Osh"></br>
                <h4 class="py-4">Osh</h4>
                <p>Osh is the second largest city in Kyrgyzstan, located in the Fergana Valley in the south of the country and often referred to as the "capital of the south".
                It is the oldest city in the country, estimated to be more than 3000 years old. Osh has an important outdoor bazaar which has been taking place on the same spot for the past 2000 years.</p>`
            },
            {
                coords: {lat:42.6503, lng:77.0852}, // Issuk-Kul Lake
                content: '<h4>Issyk-Kul Lake</h4>',
                info: `<img class="img-fluid" src="assets/images/issyk-kul.jpg" alt="Issyk-Kul Lake - The Pearl of Tian-Shan"></br>
                <h4 class="py-4">Issyk-Kul Lake</h4>
                <p>Issyk-Kul is an endorheic lake in the Northern Tian Shan mountains in Eastern Kyrgyzstan. It is the seventh deepest lake in the world 
                and the second largest saline lake after the Caspian Sea. Issyk-Kul means "warm lake" in the Kyrgyz language; although it is surrounded by snow-capped peaks, 
                it never freezes.</p>`
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