-- Look up the user by email in the database
SELECT
    *
FROM
    users
where
    email = '{{node-1.user}}'