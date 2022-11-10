DROP TABLE IF EXISTS players;

CREATE TABLE players(
  player_id SERIAL PRIMARY KEY,
  full_name text,
  jersey_num INTEGER,
  position VARCHAR(10),
  height INTEGER,
  weight INTEGER,
  experience VARCHAR(10),
  college text
);

INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Jaire Alexander', 23, 'CB', 70, 196, '5', 'Louisville');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Adrian Amos', 31, 'S', 72, 214, '8','Penn State');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('David Bakhtiari', 69, 'OT', 76, 310, '10', 'Colorado');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Krys Barnes', 51,'LB',74, 229, '3', 'UCLA');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('De`Vondre Campbell',59, 'ILB', 75, 232, '7', 'Minnesota');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Tariq Carpenter', 24, 'SAF', 75, 230, 'R', 'Georgia Tech');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Kenny Clark', 97, 'NT', 75, 314, '7', 'UCLA');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Jack Coco', 56, 'LS', 74, 248, 'R', 'Georgia Tech');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Marson Crosby', 2, 'K', 73, 207, '16', 'Colorado');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Tyler Davis', 84, 'TE', 76, 252, '3', 'Georgia Tech');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Josiah Deguara', 81, 'TE', 74, 238, '3', 'Cincinnati');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('AJ Dillon', 28, 'RB', 72, 274, '3', 'Boston College');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Romeo Doubs', 87, 'WR', 74, 204, 'R', 'Nevada');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Rasul Douglas', 29, 'CB', 74, 209, '6', 'West Virginia');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Kingsley Enagbare', 55, 'LB', 76, 258, 'R', 'South Carolina');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Jonathan Ford', 99, 'DT', 77, 338, 'R', 'Miami');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Rudy Ford', 20, 'DB', 72, 200, '6', 'Auburn');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Jonathan Garvin', 53, 'LB', 76, 257, '3','Miami');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Rashan Gary', 52, 'OLB', 77, 277, '4', 'Michigan');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Kylin Hill', 32, 'RB', 70, 214,'2','Mississippi State');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Shemar Jean-Charles', 22, 'CB', 70, 184, '2', 'Appalachian');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Elgton Jenkins', 74, 'G', 77, 311, '4', 'Mississippi');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Aaron Jones', 33, 'RB', 69, 208, '6', 'Texas-El Paso');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Allen Lazard', 13, 'WR', 77, 227, '4', 'Iowa State');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Dallin Leavitt', 6, 'SAF', 70, 195, '4', 'Utah State');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Marcades Lewis', 89, 'TE', 78, 267,'17','UCLA');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Jordan Love', 10, 'QB', 76, 219, '3', 'Utah State');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Dean Lowry', 94, 'DE', 78, 296, '7', 'Northwestern');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Isaiah McDuffie', 58, 'LB', 73, 227, '2', 'Boston College');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Josh Myers', 71, 'C', 77, 310, '2', 'Ohio State');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Royce Newman', 70, 'OT', 77, 310, '2', 'Mississippi');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Yosh Nijman', 73, 'OT', 79, 314, '3', 'Virginia Tech');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Keisean Nixon', 25, 'DB', 70, 200, '4', 'South Carolina');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Pat O`Donnell', 16, 'P', 76, 220, '9', 'Miami');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Jarran Reed', 90, 'DE', 75, 306, '7', 'Alabama');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Sean Rhyan', 75, 'OT', 77, 320, 'R', 'UCLA');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Aaron Rodgers', 12, 'OT', 74, 225, '18', 'California');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Amari Rodgers', 8, 'WR', 69, 212, '2', 'Clemson');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Jon Runyan', 76, 'G', 76, 307, '3', 'Michigan');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Darnell Savage', 26, 'SAF', 71, 198, '4', 'Maryland');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Tedarrell Slaton', 93, 'DT', 76, 330, '2', 'Florida');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Preston Smith', 91, 'OLB', 77, 265, '8', 'Mississippi');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Eric Stokes', 21, 'CB', 72, 194, '2', 'Georgia');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Luke Tenuta', 78, 'OT', 80, 314, 'R', 'Virginia Tech');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Zach Tom', 50, 'G', 76, 304, 'R', 'Wake Forest');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Robert Tonyan', 85, 'TE', 77, 240, '5', 'Indiana State');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Samori Toure', 83, 'WR', 73, 191, 'R', 'Nebraska');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Quay Walker', 7, 'ILB', 76, 240, 'R', 'Georgia');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Rasheed Walker', 63, 'OT', 78, 325, 'R', 'Penn State');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Sammy Watkins', 11, 'WR', 73, 211, '9', 'Clemson');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Christian Watson', 9, 'WR', 77, 208, 'R', 'North Dakota State');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Eric Wilson', 45, 'LB', 73, 230, '6', 'Cincinnati');
INSERT INTO players(full_name, jersey_num, position, height, weight, experience, college) VALUES('Devonte Wyatt', 95, 'DT', 75, 304, 'R', 'Georgia');