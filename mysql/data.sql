drop database gradesystem;
create database gradesystem;

use gradesystem;

create table student (
	sid    int(10) primary key,
	sname  varchar(20),
	gender char(4)
);

create table course (
	cid    int(10) primary key,
	cname  varchar(20)
);

create table mark (
	mid    int(10) primary key,
	sid    int(10) not null,
	cid    int(10) not null,
    score  int(10) default 60,
	CONSTRAINT stu_sid FOREIGN KEY (sid) REFERENCES student(sid),
	CONSTRAINT cou_cid FOREIGN KEY (cid) REFERENCES course(cid)
);
insert into student values(01, 'test', 'nan');
insert into course values (01, 'math');
insert into mark values (01,01,01,90);
