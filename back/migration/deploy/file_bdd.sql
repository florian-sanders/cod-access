-- Deploy create_db:file_bdd to pg

BEGIN;

-- XXX Add DDLs here.
DROP TABLE IF EXISTS client, responsibility, picture, question, kind, exercise, doc, theme, possible_answer, client_exercise, client_doc, theme_doc, exercise_theme;

CREATE TABLE responsibility (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    entitled text NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP
);

CREATE TABLE picture (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" text,
    "path" text NOT NULL,
    alternative text,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP
);

CREATE TABLE client (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    email text NOT NULL,
    pseudo text NOT NULL,
    "password" text NOT NULL,
    responsibility_id int REFERENCES responsibility(id) NOT NULL,
    picture_id int REFERENCES picture(id) ON DELETE SET DEFAULT,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP
);

CREATE TABLE kind (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" text NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP
);

CREATE TABLE exercise (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title text NOT NULL,
    brief text,
    slug text,
    published boolean NOT NULL,
    kind_id int REFERENCES kind(id) ON DELETE SET NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP
);

CREATE TABLE question (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    brief text,
    code text NOT NULL,
    explanation text NOT NULL,
    exercise_id int REFERENCES exercise(id) ON DELETE SET NULL,
    picture_id int REFERENCES picture(id) ON DELETE SET NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP
);

CREATE TABLE doc (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title text NOT NULL,
    brief text,
    slug text NOT NULL,
    content text NOT NULL,
    published boolean NOT NULL,
    picture_id int REFERENCES picture(id) ON DELETE SET NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP
);

CREATE TABLE theme (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" text NOT NULL,
    color text NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP
);

CREATE TABLE possible_answer (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    content text NOT NULL,
    correct boolean NOT NULL,
    question_id int REFERENCES question(id) ON DELETE SET NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP
);

CREATE TABLE client_exercise (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    score int,
    client_id int REFERENCES client(id) ON DELETE CASCADE,
    exercise_id int REFERENCES exercise(id) ON DELETE CASCADE,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP
);

CREATE TABLE client_doc (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    client_id int REFERENCES client(id) ON DELETE CASCADE,
    doc_id int REFERENCES doc(id) ON DELETE CASCADE,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP
);

CREATE TABLE theme_doc (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    theme_id int REFERENCES theme(id) ON DELETE CASCADE,
    doc_id int REFERENCES doc(id) ON DELETE CASCADE,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP
);

CREATE TABLE exercise_theme (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    exercise_id int REFERENCES exercise(id) ON DELETE CASCADE,
    theme_id int REFERENCES theme(id) ON DELETE CASCADE,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP
);

COMMIT;
