CREATE TABLE
    users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        first TEXT,
        last TEXT,
        email TEXT,
        password TEXT,
        salt TEXT,
        created DATE DEFAULT CURRENT_TIMESTAMP,
        updated DATE DEFAULT CURRENT_TIMESTAMP
    )