-- Verify create_db:file_bdd on pg

BEGIN;

-- XXX Add verifications here.
SELECT pseudo FROM client;
SELECT entitled FROM role;
SELECT name FROM image;
SELECT code FROM question;
SELECT name FROM type;
SELECT brief FROM exercise;
SELECT slug FROM doc;
SELECT name FROM theme;
SELECT correct FROM possible_answer;
SELECT score FROM client_exercise;
SELECT doc_id FROM client_doc;
SELECT doc_id FROM theme_doc;
SELECT theme_id FROM exercise_theme;

ROLLBACK;
