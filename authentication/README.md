# Authenticaion Example

This example shows how to register a user with a username/password, that password is hashed, and stored in the DB.
Then, the user can login with the username/password, and the password is checked against the hash in the DB.

## Register new User

Register a new user with the name "Jim Halpert". 

```bash
 curl -i -X POST "https://<base>.cmd.outerbase.io/account/create" \
-H "Content-Type: application/json" \
-d '{ "first": "Jim", "last": "Halpert", "password": "cece", "email": "jim@dundermifflin.com" }'
```

## Login

Login Jim with basic auth using username "jim@dundermifflin.com" and password "cece".

```bash
curl -X POST 'https://<base>.cmd.outerbase.io/auth' \
--header 'Authorization: Basic amltQGRmLmNvbTpjZWNlMzQzNA=='
```