const request = require('request')
console.log('supreme register spammer  ')

function sendEmail() {
    console.log('Sending request to Supreme.')
    request({
        url: 'https://register.supremenewyork.com/mailinglist_signup',
        method: 'post',
        formData: {
            email: 'example@example.com'
        },
        json: true
    },function(err, resp, body){
        sendEmail()
        // console.log(body)
    })
}

    sendEmail()

