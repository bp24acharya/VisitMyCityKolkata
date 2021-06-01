
// Create sendMail function (adapted from CI walkthrough project)

//user_HQuMO406M2M3PCpd1ofZd Parent Form(Name)--> Template(template Name, ID ) --> 4 objects name, email,request,nl

function sendMail(contactForm) {
    emailjs.send("pagm","emtPacharya", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "info_request": contactForm.message.value,
        "newsletter_request": contactForm.newsletter.value
    })
    // supply then() method for the promise
    .then(
        // Sweet Alert custom pop-up alert if success
        function () {           
            Swal.fire(
            'Thank you for contacting us!',
            'Message sent!',
            'success'
            );
        },        
          // Sweet Alert custom pop-up alert if fail            
        function () {
            Swal.fire(
            'Oops...',
            'Something went wrong!',
            'error'
            );
        });               
    // Clear the form and stop the page from scrolling up 
    document.getElementById("contactForm").reset();
    return false;    
}                 
