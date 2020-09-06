DROP  DATABASE  IF  EXISTS School;
CREATE   DATABASE  School;
-- In prisma all tables begin in capital letter else an error occurs during introspection
USE School; 
CREATE TABLE IF NOT EXISTS Section(
    id_ INTEGER  PRIMARY KEY  NOT NULL,
    section VARCHAR(255) UNIQUE  NOT NULL,
    languages TEXT
);

CREATE TABLE IF NOT EXISTS  Gender (
    id INTEGER PRIMARY KEY  NOT NULL,
    gender VARCHAR(10)
);

CREATE TABLE  IF NOT EXISTS Title(
    id INTEGER PRIMARY KEY,
    title VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS Position (      -- post held BY Staff
    id INTEGER PRIMARY KEY,
    position VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS Subjects (
    id INTEGER PRIMARY KEY,
    subject VARCHAR(255),
    sectionId INTEGER,
    FOREIGN KEY (sectionId) REFERENCES Section(id_)
);

CREATE TABLE IF NOT EXISTS Classes (
    id INTEGER PRIMARY KEY  NOT NULL,
    class TEXT UNIQUE NOT NULL,
    sectionId INTEGER NOT NULL,
    FOREIGN KEY (sectionId) REFERENCES Section(id_)
);

CREATE TABLE IF NOT EXISTS ClassSubject(
  id INTEGER PRIMARY KEY NOT NULL,
  classId INTEGER NOT NULL,
  subjectId INTEGER NOT NULL,
  FOREIGN KEY (classId) REFERENCES Classes(id),
  FOREIGN KEY (subjectId) REFERENCES Subjects(id)
);

CREATE TABLE IF NOT EXISTS StudentProfile(
  id INTEGER PRIMARY KEY  NOT NULL, -- AUTO_INCREMENT NO
  firstname TEXT,
  lastname TEXT,
  dateofbirth DATE, -- YYYY-MM-DD
  dateOfEnrollment TIMESTAMP NOT NULL DEFAULT now(),  -- CURDATE()
  age INTEGER NOT NULL, 
  gender INTEGER NOT NULL,
  email VARCHAR(255) UNIQUE,
  FOREIGN KEY (gender) REFERENCES Gender(id)
);

CREATE TABLE IF NOT EXISTS StaffProfile(
  id INTEGER PRIMARY KEY  NOT NULL, -- AUTO_INCREMENT NO
  firstname TEXT,
  lastname TEXT,
  staffTitle INTEGER NOT NULL,
  dateofbirth DATE, -- YYYY-MM-DD
  dateOfAssumption TIMESTAMP NOT NULL DEFAULT now(),  -- CURDATE()
  age INTEGER NOT NULL, 
  gender INTEGER NOT NULL,
  email VARCHAR(255) UNIQUE,
  phoneNumber VARCHAR(20),
  FOREIGN KEY (gender) REFERENCES Gender(id),
  FOREIGN KEY (staffTitle) REFERENCES Title(id)
);

CREATE TABLE IF NOT EXISTS ParentProfile(
  id INTEGER PRIMARY KEY  NOT NULL, -- AUTO_INCREMENT
  firstname TEXT,
  lastname TEXT, 
  age INTEGER NOT NULL, 
  gender INTEGER NOT NULL,
  email VARCHAR(255) UNIQUE,
  parentTitle INTEGER NOT NULL,
  phoneNumber VARCHAR(20),
  FOREIGN KEY (gender) REFERENCES Gender(id),
  FOREIGN KEY (parentTitle) REFERENCES Title(id)
);

INSERT INTO 
  Gender (id, gender) 
VALUES 
  (1,"Male"),(2,"Female"),(3,"unknown");