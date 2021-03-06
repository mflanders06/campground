DROP TABLE IF EXISTS users, characters, avatars, charStats, equipment, charactersEquipment, monsters;



CREATE TABLE users (
    user_key SERIAL PRIMARY KEY,
    username varchar(50),
    email VARCHAR(80),
    password VARCHAR(100),
);

CREATE TABLE characters (
    character_key SERIAL PRIMARY KEY,
    char_name VARCHAR(80),
    [description] VARCHAR(255),
    user_key INT REFERENCES users(user_key),
    avater_key INT REFERENCES avatars(avatar_key),
    gold INT,
    experience INT,
    [level] INT
);

CREATE TABLE avatars (
    avatar_key SERIAL PRIMARY KEY,
    [filename] VARCHAR(100),
    description VARCHAR(100),
);

CREATE TABLE charStats (
    charStats_key SERIAL PRIMARY KEY,
    character_key INT REFERENCES characters(character_key),
    strength INT,
    constitution INT,
    intelligence INT,
    dexterity INT,
);

CREATE TABLE equipment (
    equipment_key SERIAL PRIMARY KEY,
    slot INT, -- 1=head, 2= right hand, 3=left hand, 4=armor, 5=feet
    equipment_name VARCHAR(100),
    equipment_description VARCHAR(200),
    effect_stat int,
    effect_other int,
    rarity VARCHAR(30),
    cost INT
);

CREATE TABLE charactersEquipment (
    charactersEquipment_key SERIAL PRIMARY KEY,
    character_key INT REFERENCES characters(character_key),
    equipment_key INT REFERENCES equipment(equipment_key),
    equipped BOOLEAN,
    quantity INT
);

CREATE TABLE monsters (
    monster_key SERIAL PRIMARY KEY,
    monster_name varchar(100),
    base_strength INT,
    base_constitution INT,
    base_intelligence INT,
    base_dexterity INT
)