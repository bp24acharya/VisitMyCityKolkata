# VisitMyCityKolkata
This website aims to promote The City of Joy, Kolkata as a travel destination on the international market.It is one of India’s largest cities and one of its major ports.Fashioned by the colonial British in the manner of a grand European capital—yet now set in one of the poorest and most overpopulated regions of India—Kolkata has grown into a city of sharp contrasts and contradictions. Kolkata has had to assimilate strong European influences and overcome the limitations of its colonial legacy in order to find its own unique identity.     
## UX:
This Website will be helpful to people who has got no idea about any City in India but wants to go or a holiday and would also not like to spend much.
* I want to get idea for my next travel exerience.
* I want to be able to understand what kind of travel experience I am being offered and explore it from   the comfort of my own home.
* I want to find out more information on the food and culture and the weather of the place.
* I can use the easily accessible simple navigation bar to select the section of the website that I need.
* I want to see beautiful images of new locations that will encourage me to visit that place.
* I want to find out when is the best time to visit Kolkata.
* I want to see more images of the place that would give me better idea of the spot.
* I want to have access to all necessary travel information I need to plan my trip.
* I want to see if there is any feedback from someone about the place.
* I want to use the website's Social Media for more inspiration.
## Goals:
To provide a virtual experience to tourist to know better about the place.
To give the detailed idea of the city.
To enable easy access to the information needed to plan their trip.
To showcase the best spots to visit.
To ensure users are able to get in touch directly from the website via the Feedback Form.

## Wireframing my project on Balsamiq
The wire frame can be seen here:<a href="VisitMyCityKolkata_Wireframe.bmpr" target="_blank">WireFrame</a>

## Design Process
This website is a single page website that consists of four sections: Home, Attraction and Contact. To navigate to different destinations on the website, users need to click navigation links that allow them to jump to different sections of the content or scroll down the page.
Simple white background, minimalist design, easily accessible navigation bar, together with stunning images of must-see places were selected to allow users to explore the destination from their living rooms, whether they are looking for a guide to a specific location or just browsing for the next trip inspiration. There are different social media links aswell that will help the visitors to explore more about the place.

##  Technologies used
* <a href="https://www.tutorialspoint.com/html5/index.htm" target="_blank">HTML 5</a>
HTML5 is a markup language used for structuring and presenting content on the World Wide Web.

* <a href="https://www.educba.com/what-is-css3/" target="_blank">CSS 3</a>
CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.

* <a href="https://balsamiq.com/wireframes/" target="_blank">Balsamiq Wireframe</a>
Balsamiq helped me crystalise my design ideas, creating the layout structure.

* <a href="https://fontawesome.com/download" target="_blank">Fontawesome 4</a>
I got all the icons for my website from here.

* <a href="https://desktop.github.com/" target="_blank">GitHub</a>
GitHub is a for-profit company that offers a cloud-based Git repository hosting service. Essentially, it makes it a lot easier for individuals and teams to use Git for version control and collaboration.

* <a href="https://github.com/gitpod-io" target="_blank">Gitpod</a>
Gitpod is an open source platform for automated and ready-to-code development environments that blends into your existing workflow.


* <a href="https://www.canva.com/design/play?template=EADk-fQc_8A&category=tACZCki4tbY&type=TACQ-j4WGew" target="_blank">Canva</a>
It helped me in designing the style guide. This is a great tool and easy to use.

* <a href="https://www.w3schools.com/css/css_rwd_mediaqueries.asp" target="_blank">Media Query</a>
I used this for the resposive design of the website.

* <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" target="_blank">Bootstrap</a>
Used to create a layout and to build a responsive, mobile-first design, which is compatible with all modern browsers. 

* <a href="https://developers.google.com/maps/apis-by-platform" target="_blank">Google maps API</a>
Used to embed Google Maps into the website, to provide users with the locations information.
 
 * <a href="https://www.emailjs.com/docs/rest-api/send/" target="_blank">EmailJS API</a>
  Helped to create an email template and enable users to send emails directly without using the server.
 
* <a href="https://sweetalert2.github.io/" target="_blank">SweetAlert2</a>
 An interactive custom modal window, provides a status confirmation (success / fail) when users submit a form on the website.

## Features

Header-responsive navigation header, designed using Bootstrap "navbar" and "fixed-top" and "navbar-light" classes.
It is positioned on top of the page and always visible. This allows easy navigation if users wish to jump to a different section of the website.
Home page consists of a Bootstrap image carousel that cycles through a series of images showcasing the natural beauty of the city Kolkata. The image carousel allows next controls for users' convenience.
In the Attraction page facts about kolkata is given and there are three sections like Food and Culture/ Season / Best time to visit the city where the details on each topic is given clearly and will help the tourist.
There are images of top attractions aswell for  reference.This images if clicked will enlarge and will have details about the page underneath it.
The Contact form helps the user to give their feedback and this will help the other tourist alot.
Footer is designed using Bootstrap and is located on the bottom of the page. It is responsive and takes up the whole width of the screen on all screen size devices.
##  Testing
* HTML Markup Validation Service,
* CSS Validation Service,
* JavaScript Code Quality Tool JSHint 

##  Further Testing
* Navigation Bar

The fixed navbar is placed on top of the page and always visible on all screen sizes.
All the links on the navbar have been clicked to test and are working as intended, allowing users to jump to the linked page.

* Image Carousel

Bootstrap Image carousel takes up the full page as intended and cycles through the images. The time delay attribute is functioning as intended, allowing some delay between automatically cycling the images.In this section I have included images with a description on it so that it attracts the tourists.


* Map Section

All Google Map markers have been for testing purposes and are functioning correctly. Upon clicking on the markers, the corresponding info window content appears in the sidebar section, located to the left of the map on medium and larger screens and on top of the map on small screen sizes.
This section proved to be very challenging to get it work correctly and required an extensive online research.I had to debug and ensure the image and description of the places display in the "sidebar" div when the markers are clicked.


* Contact Form

Form has been tested by submitting the form with one or more empty required fields. This returns an error message requesting to fill in all the requested fields.
When a text input entered into an email field it returns an error "@ sign should be included in the email address". This however doesn't stop users from entering incorrect email address.
"Submit" button changes color on hover as intended.
JavaScript reset() function is working correctly as the form resets after users fill in all input fields with valid data and click on "Submit" button.
Tests revealed that the page was scrolling up to the top each time the form had been submitted. To prevent this from happening, return false; had been added to the event handler.
When the form has been submitted, users see a customised SweetAlert2 message to confirm their action has been successful / failed. This has been tested and is working as expected.
The Contact Form has been correctly linked to EmailJS and sends an email every time users submit the form.

* Footer
 
 I took quite a long time in doing this section as few things that were shown in the Code institute tutorial videos is not the same and the tutor group has helped me in pointing that.
 Footer is responsive and always stays on the bottom of the page. This have been tested by reducing / increasing the screen width and is working as intended.
Change of colour and transition effects on hovering over Social Icons have been tested and working as intended.
Click on each Social icon revealed that links are functioning as intended and open in new tabs.

##  Usability Testing
Usability of this website has been tested by sharing it with family and friends. No issues arose during the tests and it was confirmed that the website was simple, engaging and user-friendly. They were able to intuitively use the interactive elements of the website, find the information they were looking for and easily understand the purpose of the website.They really found the website very attractive and informative.

##  Compatibility Testing
Compatibility and responsiveness of the website was extensively tested across multiple browsers (Chrome, Safari, Microsoft Edge, Fire Fox) and on muliple screen size devices including iPhone (5, 6, 7, PLus, X), iPad, iPad Pro; Android devices (Microsoft Lumia 950; Kindle Fire, Samsung Galaxy S, HTC One X) using Chrome Dev Tools and Responsive Web Design Tester. It was also tested on physical devices including iPhone and iPad.

##  Problem Encountered
Initially I could'nt get how the Contact Form would work as the code institute tutorial showed a different format and now most of the things are changed so I took help from the tutor group and they helped me with a link which I referred to get it done. 
I got stuck in ReadMore and ReadLess section but my mentor Excellence Illesanmi helped me to sort it out.
##  Deployment
The deployment process of getting this project on GitHub Pages:
All code for this website was written in Gitpod and then pushed to GitHub to store in my local repository. It was then published using GitHub Pages directly from the main branch by following the steps below:

* Select VisitMyCityKolkata in the repositories
* Click on Settings in the menu bar
* Scroll down to GitHub Pages and select "main branch" in drop-down menu in the Source section
* The page will reload and you'll be provided with a link to your published website.
* To run the code locally by cloning this repository, click on Download Code. To clone the repository     using HTTPS, under "Clone with HTTPS" click on Save.
* To create a personal copy of this repository, click on Fork button on the top right corner of the page.
There is no difference between the deployed version and the development version.

#### The HTML, CSS and JavaScript codes were written on Gitpod, using  project template.
  Gitpod is an online integrated development environment (IDE)
####  I made a new repository on my GitHub account:
 
 Click 'New'

Choose respository template - Code-Institute-Org/gitpod-full-template.

Typed in respository's name.

Clicked on Gitpod button to be transported to a new workspace there.
#### Getting codes up to GitHub respository:

Click on the source control.

Type the changes that has been made.

Click on the yes button and code will be saved.
#### To publish the project to GitHubPages:

Clicked on settings in the respository page in GitHub.

Under Options to the left, scrolled down to Pages.

Under Source, I chose Branch: Master and Folder: /(root).

Page took awhile to be published.

This project may be downloaded or cloned:

On respository page, select button titled Code.

Drop down menu will give the option of Clone, Open with GitHub Desktop or Download Zip.
## Acknowledgements

My Friend has helped me by sending links to different websites that I referred while working for this project.

My mentor Excellence Ilesanmi for his continuous support and feedback throughout this project.

CI Tutors and Slack Community for help and support.