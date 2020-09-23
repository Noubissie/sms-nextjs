-- DROP  DATABASE  IF  EXISTS School;
-- CREATE   DATABASE  School;

DROP DATABASE IF EXISTS heroku_2a3497a522ffc4d;
CREATE DATABASE heroku_2a3497a522ffc4d;

USE heroku_2a3497a522ffc4d;
-- dzeng database
-- DROP DATABASE IF EXISTS heroku_83ee802453d0ccc; 
-- CREATE DATABASE heroku_83ee802453d0ccc; 

-- In prisma all tables begin in capital letter else an error occurs during introspection
-- USE School; 

-- USE heroku_83ee802453d0ccc;

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
    class VARCHAR(250) UNIQUE NOT NULL,
    sectionId INTEGER NOT NULL,
    FOREIGN KEY (sectionId) REFERENCES Section(id_)
);

CREATE TABLE IF NOT EXISTS ClassSubject(
  id INTEGER PRIMARY KEY NOT NULL,
  classId INTEGER NOT NULL,
  subjectId INTEGER NOT NULL,
  subjectCoefficient INTEGER NOT NULL,
  FOREIGN KEY (classId) REFERENCES Classes(id),
  FOREIGN KEY (subjectId) REFERENCES Subjects(id)
);

CREATE TABLE IF NOT EXISTS StudentProfile(
  id INTEGER PRIMARY KEY  AUTO_INCREMENT NOT NULL,
  familyname TEXT NOT NULL,
  givenname TEXT NOT NULL,
  dateofbirth DATE, -- YYYY-MM-DD
  gender INTEGER NOT NULL,
  dateOfEnrollment TIMESTAMP NOT NULL DEFAULT now(),  -- CURDATE()
  age INTEGER NOT NULL, 
  religion TEXT NOT NULL,
  bloodgroup VARCHAR(5) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  sectionid INTEGER NOT NULL,
  AdmissionID VARCHAR(100) UNIQUE NOT NULL,
  phonenumber VARCHAR(15),
  StudentAddress TEXT,
  shortbiography TEXT NOT NULL,
  studentPicture Text NOT NULL,
  FatherName TEXT,
  FatherOccupation TEXT,
  FatherAddress TEXT,
  FatherContact TEXT,
  MotherName TEXT,
  MotherOccupation TEXT,
  MotherAddress TEXT,
  MotherContact TEXT,
  FOREIGN KEY (gender) REFERENCES Gender(id),
  FOREIGN KEY (sectionid) REFERENCES Section(id_)
);

CREATE TABLE IF NOT EXISTS StaffProfile(
  id INTEGER PRIMARY KEY   AUTO_INCREMENT NOT NULL,
  firstname TEXT,
  lastname TEXT,
  staffTitle INTEGER NOT NULL,
  dateofbirth DATE, -- YYYY-MM-DD
  dateOfAssumption TIMESTAMP NOT NULL DEFAULT now(),  -- CURDATE()
  age INTEGER NOT NULL, 
  gender INTEGER NOT NULL,
  email VARCHAR(255) UNIQUE,
  phoneNumber VARCHAR(20),
  imagepath TEXT NOT NULL,
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