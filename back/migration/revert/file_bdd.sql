-- Revert create_db:file_bdd from pg

BEGIN;

-- XXX Add DDLs here.
DROP TABLE client, role, image, question, type, exercise, doc, theme, possible_answer, client_exercise, client_doc, theme_doc, exercise_theme;

COMMIT;
