CREATE TABLE users (
    user_key SERIAL PRIMARY KEY,
    email VARCHAR(80),
    password VARCHAR(100),
    admin BOOLEAN
);

INSERT INTO users
(email, password, admin)
VALUES
('admin@default.com', '$2a$10$whcBZoYI/EJNTkefhxj8Uuv6iygKZtOjcWPrmBJJPdSxsbFC0RLWS', "true");

CREATE TABLE sites (
    site_key SERIAL PRIMARY KEY,
    site_id VARCHAR(80),
    photo_key FOREIGN KEY REFERENCES photos,
    description VARCHAR(255)
);

CREATE TABLE photos (
    photo_key SERIAL PRIMARY KEY,
    photo VARCHAR(100),
    description VARCHAR(100),
    site_key FOREIGN KEY REFERENCES sites,
    main BOOLEAN
);

CREATE TABLE reservations (
    reservation_key SERIAL PRIMARY KEY,
    user_key FOREIGN KEY REFERENCES users,
    site_key FOREIGN KEY REFERENCES sites,
    startDate DATE NOT NULL DEFAULT CURRENT_DATE,
    endDate DATE NOT NULL DEFAULT CURRENT_DATE,
    paid INT,
    creationDate DATE NOT NULL CURRENT_DATE,
);

CREATE TABLE notices (
    notice_key SERIAL PRIMARY KEY,
    startDate DATE NOT NULL DEFAULT CURRENT_DATE,
    endDate DATE,
    notice VARCHAR(255)
);