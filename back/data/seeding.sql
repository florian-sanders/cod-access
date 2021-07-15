DELETE FROM client;
DELETE FROM responsibility;
DELETE FROM picture;
DELETE FROM question;
DELETE FROM kind;
DELETE FROM exercise;
DELETE FROM theme;
DELETE FROM possible_answer;
DELETE FROM client_exercise;
DELETE FROM exercise_theme;

INSERT INTO responsibility (entitled)
VALUES 
('utilisateur'),
('admin')
;

INSERT INTO picture (name, path, alternative)
VALUES 
('car.jpg', 'www.picimage.com/22122.jpg', ''),
('plane.jpg', 'www.picimage.com/331282.jpg', ''),
('profile.jpg', 'https://cdn.pixabay.com/photo/2019/12/01/23/53/otter-4666677_1280.jpg', ''),
('car.jpg', 'www.picimage.com/22122.jpg', ''),
('plane.jpg', 'www.picimage.com/331282.jpg', ''),
('profile.jpg', 'https://cdn.pixabay.com/photo/2019/12/01/23/53/otter-4666677_1280.jpg', ''),
('car.jpg', 'www.picimage.com/22122.jpg', ''),
('plane.jpg', 'www.picimage.com/331282.jpg', ''),
('profile.jpg', 'https://cdn.pixabay.com/photo/2019/12/01/23/53/otter-4666677_1280.jpg', ''),
('car.jpg', 'www.picimage.com/22122.jpg', ''),
('plane.jpg', 'www.picimage.com/331282.jpg', ''),
('profile.jpg', 'https://cdn.pixabay.com/photo/2019/12/01/23/53/otter-4666677_1280.jpg', '')
;

INSERT INTO kind (name)
VALUES 
('drag n drop')
;

INSERT INTO theme (name, color)
VALUES 
('Image', '#8E2DFA'),
('Cadres', '#495CFA'),
('Couleurs', '#28AFFA'),
('Multimédia', '#21FAF8'),
('Tableaux', '#30FABE'),
('Liens', '#3FFA6B'),
('Scripts', '#7DFA3A'),
('Éléments obligatoires', '#E0FA3A'),
('Structuration de l''information', '#FADD3A'),
('Présentation de l''information', '#FAA335'),
('Formulaires', '#DE703C'),
('Navigation', '#FA4488'),
('Consultation', '#C83CFA')
;