BEGIN;

-- XXX Add DDLs here.
DROP TABLE IF EXISTS client, responsibility, picture, question, kind, exercise, theme, possible_answer, client_exercise, exercise_theme;

CREATE TABLE responsibility (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    entitled text NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE picture (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name text,
    path text NOT NULL,
    alternative text,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE client (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email text NOT NULL,
    pseudo text NOT NULL,
    password text NOT NULL,
    responsibility_id int NOT NULL REFERENCES responsibility(id),
    picture_id int REFERENCES picture(id) ON DELETE SET NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE kind (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name text NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE exercise (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title text NOT NULL,
    brief text,
    slug text,
    published boolean NOT NULL,
    kind_id int REFERENCES kind(id) ON DELETE SET NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE question (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    brief text,
    code text NOT NULL,
    explanation text NOT NULL,
    exercise_id int REFERENCES exercise(id) ON DELETE SET NULL,
    picture_id int REFERENCES picture(id) ON DELETE SET NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE theme (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name text NOT NULL,
    color text NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE possible_answer (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    content text NOT NULL,
    correct boolean NOT NULL,
    question_id int REFERENCES question(id) ON DELETE SET NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE client_exercise (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    score int,
    client_id int REFERENCES client(id) ON DELETE CASCADE,
    exercise_id int REFERENCES exercise(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE exercise_theme (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    exercise_id int REFERENCES exercise(id) ON DELETE CASCADE,
    theme_id int REFERENCES theme(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
);

COMMIT;
