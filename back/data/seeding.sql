DELETE FROM client;
DELETE FROM responsibility;
DELETE FROM picture;
DELETE FROM question;
DELETE FROM kind;
DELETE FROM exercise;
DELETE FROM doc;
DELETE FROM theme;
DELETE FROM possible_answer;
DELETE FROM client_exercise;
DELETE FROM client_doc;
DELETE FROM theme_doc;
DELETE FROM exercise_theme;

INSERT INTO "responsibility" ("entitled")
VALUES 
('client'),
('admin')
;

INSERT INTO "picture" ("name", "path", "alternative")
VALUES 
('car.jpg', 'www.picimage.com/22122.jpg', ''),
('plane.jpg', 'www.picimage.com/331282.jpg', '')
;

INSERT INTO "client" ("email", "pseudo", "password", "responsibility_id")
VALUES 
('toto@gamil.com', 'toto', 'totopass', 1),
('jo@yahoo.fr', 'jo', 'jopassword', 1),
('derf@yahoo.fr', 'derfy', 'derfypassword', 2)
;

INSERT INTO "kind" ("name")
VALUES 
('drag n drop'),
('code pen')
;

INSERT INTO "exercise" ("title", "brief", "published", "kind_id")
VALUES 
('attribut alt', 'exo1', 'true', 1),
('attribut image', 'exo1', 'false', 2)
;

INSERT INTO "question" ("brief", "code", "explanation", "exercise_id", "picture_id")
VALUES 
('question 1', 'toto is a', 'explanation 1', 1, 2),
('question 2', 'mama have a', 'explanation 2', 2, 1)
;

INSERT INTO "doc" ("title", "brief", "slug", "content", "published", "picture_id")
VALUES 
('image', 'doc1', 'doc-image', 'i am the doc image', 'true', 1),
('alt', 'doc2', 'doc-tata', 'i am the doc tata', 'false', 2)
;

INSERT INTO "theme" ("name", "color")
VALUES 
('alt', 'red'),
('html', 'bleu')
;

INSERT INTO "possible_answer" ("content", "correct")
VALUES 
('i am the first answer', 'true'),
('i am the second answer', 'false'),
('i am the third answer', 'false'),
('i am the four answer', 'false')
;

INSERT INTO "client_exercise" ("score", "client_id", "exercise_id")
VALUES
(83, 2, 1),
(62, 3, 2)
;
 
INSERT INTO "client_doc" ("client_id", "doc_id")
VALUES
(1 ,1)
;

INSERT INTO "theme_doc" ("theme_id", "doc_id")
VALUES
(1 ,2),
(2 ,1)
;

INSERT INTO "exercise_theme" ("exercise_id", "theme_id")
VALUES
(1 ,2),
(2 ,1)
;