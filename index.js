const request = require('request')
console.log('supreme register spammer made by @pupperpuppy')

function sendEmail() {
    console.log('Sending request to Supreme.')
    request({
        url: 'https://register.supremenewyork.com/mailinglist_signup',
        method: 'post',
        formData: {
            email: 'example@example.com' // put your email here instead of example
        },
        json: true
    },function(err, resp, body){
        sendEmail()
     console.log('Email sent...')
    })
}

    sendEmail()
// made with love by @pupperpuppy

