// This node executes a Javascript function. on your current base.
//
// HOW TO USE:
// To access your commands POST inputs, use "{{request.body.INPUT_NAME}}"
// To access your commands GET inputs, use "{{request.query.INPUT_NAME}}"
// To access the raw value of previous nodes in your command, use "{{node-1}}"
// To access JSON key values from previous nodes in your command, use "{{node-1.keyValue}}"

function userCode() {
    // ---- Validate Input Parameters ----
    const email = {{request.body.email}}
    const fname = {{request.body.fname}}
    const lname = {{request.body.lname}}

    // Email must be present
    if (!email) {
        return {
            status: 400,
            error: "missing email from request body"
        }
    }

    // First & Last name must be present
    if (!{{request.body.fname}}) {
        return {
            status: 400,
            error: "missing first name from request body"
        }
    }

    if (!{{request.body.lname}}) {
        return {
            status: 400,
            error: "missing last name from request body"
        }
    }

    return {
        FullName: lname + ", " + fname
    }
}