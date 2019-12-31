const request = require('request')
console.log('supreme register spammer made by @pupperpuppy')

const target = 'example@example.com';


function sendEmail() {
    console.log('Sending request to Supreme.')
    request({
        url: 'https://register.supremenewyork.com/mailinglist_signup',
        method: 'post',
        formData: {
            email: target, // put your email here instead of example
        },
        json: true
    },function(err, resp, body){
		if (err)
			console.log(err)
		else
        sendEmail()
		console.log('Email sent...')
    });
}
sendEmail()

// made with love by @pupperpuppy

