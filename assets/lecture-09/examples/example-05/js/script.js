'use strict';

// Handle the window load event
window.addEventListener('load', () => {
  // or DOMContentLoaded

  const form = document.forms['register-form'];

  form.addEventListener('submit', (event) => {
    // Referrences for the form elements
    const age = form.elements['age'];
    const dob = form.elements['dob'];
    const phone = form.elements['phone'];
    const email = form.elements['e-mail'];

    let isValid = true;

    // Phone validation
    const phone_re = /^\d{3,5}[- ]?\d{5,}$/; // /^(\+\d{2} )?\(\d{3,5}\) [\d -]+$/;

    /*
		 * Some valid values

		   210-9999999
		   210 9999999
		   2109999999
		   22980-12345
		   22980 12345
		   2298012345
		*/

    if (phone.value.trim().length === 0) {
      // Required
      console.error('Phone is missing');
      isValid = false;
    } else if (!phone_re.test(phone.value)) {
      // Valid value
      console.error('Phone is not valid');
      isValid = false;
    }

    // E-mail validation. Only Gmail are accepted, for simplicity

    /*
		 * Some valid values

		   ned.stark@gmail.com
		   j0nsn0w@gmail.com
		   last.season.sucked@gmail.com
		*/

    const gmail_re = /^[a-z0-9\.]+@gmail\.com$/i;

    if (email.value.trim().length === 0) {
      // Required
      console.error('E-mail is missing');
      isValid = false;
    } else if (!gmail_re.test(email.value)) {
      // Valid value
      console.error('E-mail is not valid');
      isValid = false;
    }

    // Date of birth simple validation.

    /*
		 * Some valid values

		   01/02/1990
		   02-03-1990
		   03-04-90

		 * Unfortunately, those too

		   03/04-1990
		   99-99-9999
		*/

    const re_dob = /^\d{1,2}[-\/]\d{1,2}[-\/](\d{2}|\d{4})$/i;

    if (dob.value.trim().length === 0) {
      // Required
      console.error('Date of birth is missing');
      isValid = false;
    } else if (!re_dob.test(dob.value)) {
      // Valid value
      console.error('Date of birth is not valid');
      isValid = false;
    }

    // Prevent submit if any validation failed
    if (!isValid) event.preventDefault();
  });
});
