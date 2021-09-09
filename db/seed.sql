CREATE TABLE users (
    user_key SERIAL PRIMARY KEY,
    email VARCHAR(80),
    password VARCHAR(100),
    admin BOOLEAN
);

INSERT INTO users
(email, password, admin)
VALUES
('a@b.com', '$2a$10$jNYaCfu58G2k1V1nE39moeCZbEmeg.CGHCxFksyT47XNSOfwShjoi', 'true');

CREATE TABLE sites (
    site_key SERIAL PRIMARY KEY,
    site_id VARCHAR(80),
    description VARCHAR(255)
);

CREATE TABLE photos (
    photo_key SERIAL PRIMARY KEY,
    photo VARCHAR(100),
    description VARCHAR(100),
    site_key INT REFERENCES sites(site_key),
    main BOOLEAN
);

CREATE TABLE reservations (
    reservation_key SERIAL PRIMARY KEY,
    user_key INT REFERENCES users(user_key),
    site_key INT REFERENCES sites(site_key),
    startDate DATE DEFAULT CURRENT_DATE,
    endDate DATE DEFAULT CURRENT_DATE,
    paid INT,
    creationDate DATE DEFAULT CURRENT_DATE
);

CREATE TABLE notices (
    notice_key SERIAL PRIMARY KEY,
    site_key INT REFERENCES sites(site_key),
    main BOOLEAN,
    startDate DATE DEFAULT CURRENT_DATE,
    endDate DATE,
    notice VARCHAR(255)
);

INSERT INTO notices (main, startdate, enddate, notice)
VALUES
(TRUE, CURRENT_DATE, '2021-07-29', 'This one is expired'),
(TRUE, CURRENT_DATE, '2039-07-29', '10:00 PM quiet. No generators. No outside lights.'),
(TRUE, CURRENT_DATE, '2039-07-29', 'Kayaks are available for rent. $25/hr'),
(TRUE, CURRENT_DATE, '2021-08-31', 'Fishing: Mosquito flies are performing well this month.'),
(TRUE, CURRENT_DATE, '2039-07-29', 'Wood for campfire can be purchased for $5 a bundle.'),
(TRUE, CURRENT_DATE, '2021-07-29', 'Another notice'),
(TRUE, CURRENT_DATE, '2021-07-29', 'And another'),
(TRUE, CURRENT_DATE, '2021-07-29', 'One more'),
(TRUE, CURRENT_DATE, '2021-08-29', 'This has not started yet');