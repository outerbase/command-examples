# This node executes a Python function on your current base
#
# HOW TO USE:
# To access your commands POST inputs, use "{{request.body.INPUT_NAME}}"
# To access your commands GET inputs, use "{{request.query.INPUT_NAME}}"
# To access the raw value of previous nodes in your command, use "{{node-1}}"
# To access JSON key values from previous nodes in your command, use "{{node-1.keyValue}}"

def UserCode():

    email: str = {{request.body.email}}
    name: str = {{request.body.fname}}

    message = '{ "text": "' + name +' (' + email + ') just signed up for the email list!"}'
    messageBytes =  bytes(message, 'utf-8')
    response = http_send(
        Request("POST", "https://hooks.slack.com/services/YOUR_SLACK_WEBHOOK", { 'Content-Type': 'application/json' }, messageBytes))