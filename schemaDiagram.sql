//// -- LEVEL 1
//// -- Tables and References

// Creating tables
Table Gender as U{
  gender_id int [pk, increment] // auto-increment
  gender varchar [not null, unique]
}

Table countries {
  code int [pk]
  name varchar
  continent_name varchar
 }

// Creating references
// You can also define relaionship separately
// > many-to-one; < one-to-many; - one-to-one


//----------------------------------------------//

//// -- LEVEL 2
//// -- Adding column settings

Table Position {
  position_id int // inline relationship (many-to-one)
  position varchar [not null,unique]
}



Table Title {
  title_id int [pk] // primary key
  Title int [not null, unique]
  
}

Table Grade {
  grade_id int [pk]
  grade Varchar [not null, unique]
}

Table School {
  id int [pk]
  school varchar [not null, unique]
}

Table Sections {
  id int [pk]
  section Varchar [not null, unique]
}

Table Classes {
  class_id int [pk]
  sectionID int
  class Varchar [not null,unique]
  
}
Ref: Classes.sectionID > Sections.id

Table Subjects {
  subject_id int [pk]
  sectionID int
  subject Varchar [not null,unique]
  
}
Ref: Subjects.sectionID > Sections.id

Table SubjectsAndClasses {
  id int [pk]
  subjectID int
  classID int
}
Ref: SubjectsAndClasses.subjectID > Subjects.subject_id
Ref: SubjectsAndClasses.classID > Classes.class_id


Table Staff {
  staff_id int [pk]
  firstname TEXT
  lastname TEXT
  
  matricle VARCHAR(50) UNIQUE
  formerPost TEXT
  locationOfFomerPost TEXT
  decisionNo TEXT
  decisionDate DATE
  diploma TEXT
  
  dateofbirth DATE 
  dateOfAssumption TIMESTAMP [NOT NULL]
  email VARCHAR(255) UNIQUE
  phoneNumber VARCHAR(20)
  imagepath TEXT [NOT NULL]
  
  shortbiography TEXT [NOT NULL]
  teacherAddress TEXT
  religion TEXT [NOT NULL]
  bloodgroup VARCHAR(5) [NOT NULL]
  
  staffTitleID INTEGER [NOT NULL]
  speciality INT [NOT NULL]
  gradeID INTEGER [NOT NULL]
  genderID INT 
  positionID INTEGER [NOT NULL]
  EmergencyContactID INT 
  
}
Ref: Staff.positionID > Position.position_id
Ref: Staff.gradeID > Grade.grade_id
Ref: Staff.staffTitleID > Title.title_id
Ref: Staff.genderID > Gender.gender_id
Ref: Staff.speciality > Subjects.subject_id
Ref: Staff.EmergencyContactID > SEC.SEC_id
//----------------------------------------------//


Table StaffEmergencyContact as SEC {
  SEC_id int [pk]
  emergencyContactName TEXT
  emergencyContactPhone TEXT
  EcontactOccupation TEXT
  emergencyContactEmail TEXT
  emergencyContactAddress TEXT
}


Table StaffSubjectClass {
  id int [pk]
  staffId int 
  subjectID int
  ClassID int
}

Ref: StaffSubjectClass.staffId  > Staff.staff_id
Ref: StaffSubjectClass.subjectID > Subjects.subject_id
Ref: StaffSubjectClass.ClassID > Classes.class_id


//// -- Level 3 
//// -- Enum, Indexes

// Enum for 'products' table below
Enum products_status {
  out_of_stock
  in_stock
  running_low [note: 'less than 20'] // add column note
}

// Indexes: You can define a single or multi-column index 
Table products {
  id int [pk]
  name varchar
  merchant_id int [not null]
  price int
  status products_status
  created_at datetime [default: `now()`]
  
  Indexes {
    (merchant_id, status) [name:'product_status']
    id [unique]
  }
}

Table merchants {
  id int
  country_code int
  merchant_name varchar
  
  "created at" varchar
  admin_id int [ref: > U.gender_id]
  Indexes {
    (id, country_code) [pk]
  }
}

Table merchant_periods {
  id int [pk]
  merchant_id int
  country_code int
  start_date datetime
  end_date datetime
}

Ref: products.merchant_id > merchants.id // many-to-one
//composite foreign key
Ref: merchant_periods.(merchant_id, country_code) > merchants.(id, country_code)


Ref: "merchants"."admin_id" < "merchants"."id"