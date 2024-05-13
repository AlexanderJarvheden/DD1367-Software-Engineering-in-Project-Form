CREATE TABLE Users (
    UserID SERIAL PRIMARY KEY,
    Mailaddress String Not NULL,
    Phonenumber INT NOT NULL,
    Name VARCHAR(100) NOT NULL,
    Password VARCHAR(100) NOT NULL,
    CompanyName VARCHAR(100) NOT NULL
);

CREATE TABLE User_Phonenumber (
    Phonenumber INT,
    UserID INT,
    PRIMARY KEY (Phonenumber, UserID),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

CREATE TABLE User_Mailaddress (
    Mailaddress VARCHAR(255),
    UserID INT,
    PRIMARY KEY (Mailaddress, UserID),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

CREATE TABLE User_Schedule (
    UserID INT,
    EventDate DATE,
    Time INT,
    Comment VARCHAR(255),
    PRIMARY KEY (UserID, EventDate, Time),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

CREATE TABLE User_Plan (
    UserID INT PRIMARY KEY,
    PlanType VARCHAR(255) NOT NULL,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

CREATE TABLE Admin (
    UserID INT PRIMARY KEY,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

CREATE TABLE Employee (
    UserID INT PRIMARY KEY,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

CREATE TABLE Company (
    CompanyName VARCHAR(100) PRIMARY KEY
);

CREATE TABLE Project (
    ProjectID SERIAL PRIMARY KEY,
    ProjectName VARCHAR(50) NOT NULL,
    CompanyName VARCHAR(100) NOT NULL,
    FOREIGN KEY (CompanyID) REFERENCES Company(CompanyID)
);

CREATE TABLE ProjectTeam (
    ProjectID INT,
    UserID INT,
    PRIMARY KEY (UserID, ProjectID)
    FOREIGN KEY (ProjectID) REFERENCES Project(ProjectID)
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

CREATE TABLE Post_it_Note (
    NoteID SERIAL PRIMARY KEY,
    NoteName VARCHAR(50) NOT NULL,
    ProjectID INT NOT NULL,
    UserID INT NOT NULL,
    FOREIGN KEY (ProjectID) REFERENCES Project(ProjectID),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

CREATE TABLE Note_Coords (
    NoteID INT PRIMARY KEY,
    x_coord INT NOT NULL,
    y_coord INT NOT NULL,
    FOREIGN KEY (NoteID) REFERENCES Post_it_Note(NoteID)
);

CREATE TABLE Note_Date (
    NoteID INT PRIMARY KEY,
    CreatedDate DATE NOT NULL,
    LastModifiedDate DATE NOT NULL,
    FOREIGN KEY (NoteID) REFERENCES Post_it_Note(NoteID)
);

CREATE TABLE ProjectPlan (
    ProjectPlanID SERIAL PRIMARY KEY,
    ProjectPlanName VARCHAR(50) NOT NULL,
    ProjectID INT NOT NULL,
    FOREIGN KEY (ProjectID) REFERENCES Project(ProjectID)
);

CREATE TABLE Tools (
    ToolID SERIAL PRIMARY KEY,
    ToolType VARCHAR(100) NOT NULL
);

CREATE TABLE ProjectPlanTools (
    ProjectPlanID INT,
    ToolID INT,
    ArrayIndex INT,
    Completed BOOL,
    PRIMARY KEY (ProjectPlanID, ToolID, ArrayIndex),
    FOREIGN KEY (ProjectPlanID) REFERENCES ProjectPlan(ProjectPlanID),
    FOREIGN KEY (ToolID) REFERENCES Tools(ToolID)
);

CREATE TABLE Worksheet (
    WorksheetID SERIAL PRIMARY KEY,
    WorksheetName VARCHAR(50),
    ProjectID INT NOT NULL,
    FOREIGN KEY (ProjectID) REFERENCES Project(ProjectID)
);

CREATE TABLE WorksheetNode (
    NodeID SERIAL PRIMARY KEY,
    NodeName VARCHAR(100) 
);

CREATE TABLE WorksheetNodeAssignment (
    WorksheetID INT,
    NodeID INT,
    PRIMARY KEY (WorksheetID, NodeID),
    FOREIGN KEY (WorksheetID) REFERENCES Worksheet(WorksheetID),
    FOREIGN KEY (NodeID) REFERENCES WorksheetNode(NodeID)
);

CREATE TABLE WorksheetNodeCoords (
    NodeID INT,
    x_coord INT NOT NULL,
    y_coord INT NOT NULL,
    PRIMARY KEY (NodeID),
    FOREIGN KEY (NodeID) REFERENCES WorksheetNode(NodeID)
);

CREATE TABLE ProductJourneyMapping (
    ProjectID INT,
    InitialCycleTime VARCHAR(100),
    1stUse VARCHAR(255),
    2ndUse VARCHAR(255),
    3rdUse VARCHAR(255),
    xthUse VARCHAR(255),
    PRIMARY KEY (ProjectID),
    FOREIGN KEY (ProjectID) REFERENCES Project(ProjectID)
);

CREATE TABLE InterestInfluence (
    InterestInfluenceID SERIAL PRIMARY KEY,
    ProjectID INT NOT NULL,
    Comment VARCHAR(255),
    FOREIGN KEY (ProjectID) REFERENCES Project(ProjectID)
);

CREATE TABLE StakeholderNote (
    StakeID SERIAL PRIMARY KEY,
    Comment VARCHAR(255),
);

CREATE TABLE StakeholderNoteAssignment (
    InterestInfluenceID INT,
    StakeID INT,
    PRIMARY KEY (InterestInfluenceID, StakeID),
    FOREIGN KEY (InterestInfluenceID) REFERENCES InterestInfluence(InterestInfluenceID),
    FOREIGN KEY (StakeID) REFERENCES StakeholderNote(StakeID)
);

CREATE TABLE StakeholderNoteCoords (
    StakeID INT PRIMARY KEY,
    x_coord INT NOT NULL,
    y_coord INT NOT NULL,
    FOREIGN KEY (StakeID) REFERENCES StakeholderNote(StakeID)
);
