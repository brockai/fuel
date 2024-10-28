(function () {
    "use strict";

    let forms = document.querySelectorAll('.php-email-form');
    const maxNumberOfTries = 5;

    let submitForm = false;
    let myCaptcha = new jCaptcha({
        el: '.jCaptcha',
        canvasClass: 'jCaptchaCanvas',
        canvasStyle: {
            width: 100,
            height: 10,
            textBaseline: 'top',
            font: '10px Arial',
            textAlign: 'left',
            fillStyle: '#bbb'
        },
        callback: (response, $captchaInputElement, numberOfTries) => {
            if (maxNumberOfTries === numberOfTries) {
                document.querySelector('form').removeEventListener('submit', formSubmit);
                $captchaInputElement.classList.add('disabled');
                $captchaInputElement.placeholder = 'Maximum attempts reached!';
                $captchaInputElement.setAttribute('disabled', 'true');
                document.querySelector('button').setAttribute('disabled', 'true');
                return;
            }
            if (response == 'success') {
                $captchaInputElement.classList.remove('error');
                $captchaInputElement.classList.add('success');
                $captchaInputElement.placeholder = 'Submit successful!';
                submitForm = true;
                return;
            }
            if (response == 'error') {
                $captchaInputElement.classList.remove('success');
                $captchaInputElement.classList.add('error');
                $captchaInputElement.placeholder = 'Please try again!';
                return;
            }
        }
    });

    forms.forEach(function (e) {
        e.addEventListener('submit', function (event) {
            event.preventDefault();
            let thisForm = this;
            myCaptcha.validate();
            if (submitForm) {
                thisForm.querySelector('.loading').classList.add('d-block');
                thisForm.querySelector('.error-message').classList.remove('d-block');
                thisForm.querySelector('.sent-message').classList.remove('d-block');

                axios.get(apiurl+'/key').then(function(response) {

                    // document.getElementById('responseMessage').textContent = 'Form submitted successfully!';
                    console.log('Success:', response.data);

                    if (response.data) {
                        let formData = new FormData(thisForm);
                        formData = {
                            name: document.getElementById('name').value,
                            phone: document.getElementById('phone').value,
                            email: document.getElementById('email').value,
                            subject: 'Demo Request',
                            message: document.getElementById('message').value
                        };
        
                        axios.post(apiurl+'/email', formData, {
                            headers: {
                                'x-api-key': response.data
                            }
                        })
                        .then(function (response) {
                            document.getElementById('responseMessage').textContent = 'Form submitted successfully!';
                            console.log('Success:', response.data);
                        })
                        .catch(function (error) {
                            displayError(thisForm, error.message)
                        });
                    }
                })
                .catch(function (error) {
                    displayError(thisForm, error.message)
                });
            }
        });

        function displayError(thisForm, error) {
            thisForm.querySelector('.loading').classList.remove('d-block');
            thisForm.querySelector('.error-message').innerHTML = error;
            thisForm.querySelector('.error-message').classList.add('d-block');
        }
    });

})();
