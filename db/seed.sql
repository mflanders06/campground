CREATE TABLE users (
    user_key SERIAL PRIMARY KEY,
    email VARCHAR(80),
    password VARCHAR(100),
    admin BOOLEAN
);

INSERT INTO users
(email, password, admin)
VALUES
('a@b.com', '$2a$10$jNYaCfu58G2k1V1nE39moeCZbEmeg.CGHCxFksyT47XNSOfwShjoi', "true");

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

INSERT INTO notices (startdate, enddate, notice)
VALUES
(CURRENT_DATE, '2021-07-29', 'This one is expired'),
(CURRENT_DATE, '2039-07-29', '10:00 PM quiet. No generators. No outside lights.'),
(CURRENT_DATE, '2039-07-29', 'Kayaks are available for rent. $25/hr'),
(CURRENT_DATE, '2021-08-31', 'Fishing: Mosquito flies are performing well this month.'),
(CURRENT_DATE, '2039-07-29', 'Wood for campfire can be purchased for $5 a bundle.'),
(CURRENT_DATE, '2021-07-29', 'Another notice'),
(CURRENT_DATE, '2021-07-29', 'And another'),
(CURRENT_DATE, '2021-07-29', 'One more'),
(CURRENT_DATE, '2021-08-29', 'This has not started yet');