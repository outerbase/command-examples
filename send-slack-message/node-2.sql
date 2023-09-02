--- This node executes a SQL query on your current base
---
--- HOW TO USE:
--- To access your commands POST inputs, use "{{request.body.INPUT_NAME}}"
--- To access your commands GET inputs, use "{{request.query.INPUT_NAME}}"
--- To access the raw value of previous nodes in your command, use "{{node-1}}"
--- To access JSON key values from previous nodes in your command, use "{{node-1.keyValue}}"

INSERT INTO EmailSignup (first_name, last_name, full_name, email) VALUES ('{{request.body.fname}}', '{{request.body.lname}}', '{{node-1.FullName}}', '{{request.body.email}}')