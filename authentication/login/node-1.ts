// This node looks for the "authentication" header in the request, base64 decodes it and then splits
// it on the semi-colon to get the username and password.
function userCode() {
    const authheader = {{request.headers.authorization}}
    const authheaderParsed = new Buffer(authheader.split(" ")[1], 'base64').toString().split(":")
    return {
        "user": authheaderParsed[0],
        "pass": authheaderParsed[1],
    }
}