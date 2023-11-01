interface NewUser {
    first: string
    last: string
    username: string
    password: string
    email: string
}


async function userCode() {
  // Take the input from the body, parse it as json
  let reqBody: NewUser = JSON.parse({{request.body}})

  var randKey = new Uint8Array(32);
  const saltArray = crypto.getRandomValues(randKey);
  const salt = toString(saltArray); // convert bytes to hex string
  const passwordArray = encoder.encode(reqBody.password + salt);

  const hashBuffer = await crypto.subtle.digest(
    "SHA-256",
    passwordArray.buffer
  ); // hash the message
  const hash = toString(hashBuffer);

  return { 
    "hash": hash,
    "salt": salt,
  }
}

function toString(input: ArrayBuffer): string {
  const output = Array.from(new Uint8Array(input)); // convert buffer to byte array
  return output.map((b) => b.toString(16).padStart(2, "0")).join(""); // convert bytes to hex string
}
