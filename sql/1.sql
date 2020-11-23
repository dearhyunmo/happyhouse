drop database if exists jibdoljibsoon;
create database jibdoljibsoon;

use jibdoljibsoon;

drop table ssafy_member;

create table ssafy_member(
	userid varchar(15) not null primary key,
    username varchar(20) not null,
    userpwd varchar(50) not null,
    email varchar(50) not null,
    phonenum varchar(20) not null,
    address1 varchar(50) not null,
    address2 varchar(100) not null,
    joindate date not null
);

insert into ssafy_member(userid, username, userpwd, email, phonenum, address1, address2, joindate)
values	("admin", "관리자", "admin", "admin@jibs.com", "010-1234-5678", "서울특별시 중랑구 중랑천로109", "주함해븐빌 5동 601호", "2020-11-20"),
		("prestto", "정현모", "hyunmo", "prestto@naver.com", "010-3788-3468", "서울특별시 중랑구 중랑천로109", "주함해븐빌 5동 601호", "2020-11-20");

create table commercial(
	cname varchar(100),
    class1 varchar(100),
    class2 varchar(100), 
    class3 varchar(100),
    scode int, 
    sname varchar(50),
    gcode int,
    gname varchar(50),
    hdcode int,
    hdname varchar(100),
    bdcode int,
    bdname varchar(100),
    address varchar(100),
    y decimal(11,7),
    x decimal(10,7)
);

insert into commercial(cname, class1, class2, class3, scode, sname, gcode, gname, hdcode, hdname, bdcode, bdname, address, y, x)
values ("석봉토스트","음식","패스트푸드","토스트전문","11","서울특별시",11215,"광진구",1121586000,"구의2동",1121510300,"구의동","서울특별시 광진구 구의동 77-47번지 ",127.0883875,37.54924521);

select * from commercial;

delete from commercial where cname = "석봉토스트" and address='서울특별시 광진구 구의동 77-47번지 ';

drop table commercial;

	-- (cname, class1, class2, class3, scode, sname, gcode, gname, hdcode, hdname, bdcode, bdname, address, y, x)
	-- (상호명,상권업종대분류명,상권업종중분류명,상권업종소분류명,시도코드,시도명,시군구코드,시군구명,행정동코드,행정동명,법정동코드,법정동명,지번주소,경도,위도)
use ssafyweb;


select *
from ssafy_member;


use happyhouse;

select * from housedeal; 