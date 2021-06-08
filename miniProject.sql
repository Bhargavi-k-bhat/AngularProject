use MiniProject1;
create table Admin(adminId varchar(20) primary key not null,adminPassword varchar(20));
insert into Admin values('swathi','swathi@123');
insert into Admin values('palak','palak@123');
insert into Admin values('rishav','rishav@123');
select * from Admin;

create table customer(customerId varchar(20)
 primary key not null,customerName varchar(20),
 customerPassword varchar(20));

 insert into customer values('ekart123@gmail.com','Ekart','12345');
 insert into customer values('abc123@gmail.com','EABC','132323');
 select * from customer;