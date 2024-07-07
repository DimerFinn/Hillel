document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
  
    document.getElementById('nameError').innerText = '';
    document.getElementById('messageError').innerText = '';
    document.getElementById('phoneError').innerText = '';
    document.getElementById('emailError').innerText = '';
  
    let isValid = true;
  
    if (name === '') {
      document.getElementById('nameError').innerText = 'Name is required';
      isValid = false;
    }
  
    if (message.length < 5) {
      document.getElementById('messageError').innerText = 'Message must be at least 5 characters';
      isValid = false;
    }
  
    const phoneRegex = /^\+380\d{9}$/;
    if (!phoneRegex.test(phone)) {
      document.getElementById('phoneError').innerText = 'Phone number must start with +380 and contain 12 digits';
      isValid = false;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById('emailError').innerText = 'Email must be valid';
      isValid = false;
    }
  
    if (isValid) {
      console.log({
        name: name,
        message: message,
        phone: phone,
        email: email
      });
    }
  });
  