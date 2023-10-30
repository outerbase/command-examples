INSERT INTO
    users ('first', 'last', 'email', 'password', 'salt')
VALUES
    (
        '{{request.body.first}}',
        '{{request.body.last}}',
        '{{request.body.email}}',
        '{{hash-node.hash}}',
        '{{hash-node.salt}}'
    )