CREATE TABLE user{
    PRIMARY KEY username VARCHAR(255),
    plan BOOLEAN NOT NULL,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    contact_number VARCHAR(13),
    date_of_birth DATE,
    company VARCHAR(255),
    city VARCHAR(255),
    user_agreement BOOLEAN NOT NULL
}