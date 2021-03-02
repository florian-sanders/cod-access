-- Revert create_db:file_bdd from pg

BEGIN;

-- XXX Add DDLs here.
DROP TABLE client, responsibility, picture, question, kind, exercise, doc, theme, possible_answer, client_exercise, client_doc, theme_doc, exercise_theme;

COMMIT;
