-- Active: 1699539369336@@psql-dd1368-ht23.sys.kth.se@5432@pvkbox@public
CREATE TABLE Users (
    UserID VARCHAR(50) PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Password VARCHAR(100) NOT NULL
);

CREATE TABLE User_Phonenumber (
    Phonenumber INTEGER,
    UserID VARCHAR(50),
    PRIMARY KEY (Phonenumber),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

CREATE TABLE User_Mailaddress (
    Mailaddress VARCHAR(255),
    UserID VARCHAR(50),
    PRIMARY KEY (Mailaddress),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

CREATE TABLE User_Agreement (
    UserAgreementID VARCHAR(50) PRIMARY KEY,
    AgreementText VARCHAR(255) NOT NULL,
    AgreementDate DATE NOT NULL,
    UserID VARCHAR(50),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

CREATE TABLE User_Details (
    UserID VARCHAR(50) PRIMARY KEY,
    DateOfBirth DATE,
    City VARCHAR(100),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

CREATE TABLE User_Schedule (
    UserID VARCHAR(50),
    EventDate DATE,
    Time INT,
    Comment VARCHAR(255),
    PRIMARY KEY (UserID, EventDate, Time),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

CREATE TABLE Admin (
    UserID VARCHAR(50) PRIMARY KEY,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

CREATE TABLE Employee (
    UserID VARCHAR(50) PRIMARY KEY,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

CREATE TABLE WorksAt (
    UserID VARCHAR(50),
    CompanyID VARCHAR(50),
    PRIMARY KEY (UserID, CompanyID),
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (CompanyID) REFERENCES Company(CompanyID)
); 

CREATE TABLE Company (
    CompanyID VARCHAR(50) PRIMARY KEY,
    CompanyName VARCHAR(100) NOT NULL
);

CREATE TABLE Project (
    ProjectID VARCHAR(50) PRIMARY KEY,
    CompanyID VARCHAR(50) NOT NULL,
    FOREIGN KEY (CompanyID) REFERENCES Company(CompanyID)
);

CREATE TABLE Post_it_Note (
    NoteID VARCHAR(50) PRIMARY KEY,
    ProjectID VARCHAR(50),
    UserID VARCHAR(50) NOT NULL,
    FOREIGN KEY (ProjectID) REFERENCES Project(ProjectID),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

CREATE TABLE Note_Coords (
    NoteID VARCHAR(50),
    x_coord INT NOT NULL,
    y_coord INT NOT NULL,
    PRIMARY KEY (NoteID),
    FOREIGN KEY (NoteID) REFERENCES Post_it_Note(NoteID)
);

CREATE TABLE Note_Date (
    NoteID VARCHAR(50),
    CreatedDate DATE NOT NULL,
    LastModifiedDate DATE NOT NULL,
    PRIMARY KEY (NoteID),
    FOREIGN KEY (NoteID) REFERENCES Post_it_Note(NoteID)
);

CREATE TABLE ProjectPlan (
    ProjectPlanID VARCHAR(50) PRIMARY KEY,
    ProjectID VARCHAR(50) NOT NULL,
    FOREIGN KEY (ProjectID) REFERENCES Project(ProjectID)
);

CREATE TABLE Tools (
    ToolID VARCHAR(50) PRIMARY KEY,
    ToolType VARCHAR(100) NOT NULL
);

CREATE TABLE ProjectPlanTools (
    ProjectPlanID VARCHAR(50),
    ToolID VARCHAR(50),
    ArrayIndex INT NOT NULL,
    Completed BOOL,
    PRIMARY KEY (ProjectPlanID, ToolID, ArrayIndex),
    FOREIGN KEY (ProjectPlanID) REFERENCES ProjectPlan(ProjectPlanID),
    FOREIGN KEY (ToolID) REFERENCES Tools(ToolID)
);

CREATE TABLE Worksheet (
    WorksheetID VARCHAR(50) PRIMARY KEY,
    ProjectID VARCHAR(50) NOT NULL,
    WorksheetName VARCHAR(100) NOT NULL,
    FOREIGN KEY (ProjectID) REFERENCES Project(ProjectID)
);

CREATE TABLE WorksheetNode (
    NodeID VARCHAR(50) PRIMARY KEY,
    NodeName VARCHAR(100) NOT NULL
);

CREATE TABLE WorksheetNodeAssignment (
    WorksheetID VARCHAR(50),
    NodeID VARCHAR(50),
    PRIMARY KEY (WorksheetID, NodeID),
    FOREIGN KEY (WorksheetID) REFERENCES Worksheet(WorksheetID),
    FOREIGN KEY (NodeID) REFERENCES WorksheetNode(NodeID)
);

CREATE TABLE WorksheetNodeCoords (
    NodeID VARCHAR(50),
    x_coord INT NOT NULL,
    y_coord INT NOT NULL,
    PRIMARY KEY (NodeID),
    FOREIGN KEY (NodeID) REFERENCES WorksheetNode(NodeID)
);

