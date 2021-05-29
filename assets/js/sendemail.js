function sendMail(contactForm) {
    emailjs.send("gmail", "MS2", {
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