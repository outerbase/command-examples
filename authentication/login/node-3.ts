// This node takes the response from the db lookup, then compares the password hash with the one
// in the db to verify it's the same. 
async function userCode() {
    const users:any = {{node-2.response}}

    if (users.items.length == 0) {
        return "404 - NOT FOUND"
    }

    // Pick off first user from the result (should only be one)
    var user = users.items[0]

    const passwordArray = encoder.encode({{node-1.pass}} + user.salt);
    const hashBuffer = await crypto.subtle.digest("SHA-256", passwordArray.buffer); // hash the message
    const hash = toString(hashBuffer);

    if (hash == user.password) {
        return "VALID"
    }
    return "INVALID"
}

function toString(input: ArrayBuffer): string {
  const output = Array.from(new Uint8Array(input)); // convert buffer to byte array
  return output.map((b) => b.toString(16).padStart(2, "0")).join(""); // convert bytes to hex string
}