-- Revert create_db:file_bdd from pg

BEGIN;

-- XXX Add DDLs here.
DROP TABLE exercise_theme, theme_doc, client_doc, client_exercise, possible_answer, theme, doc, question, exercise, kind, client, picture, responsibility;

COMMIT;
