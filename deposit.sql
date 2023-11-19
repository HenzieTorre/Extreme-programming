create table deposit
(
    活期存款 varchar(512) null,
    `0.50`   double       null
);

INSERT INTO xp.deposit (活期存款, `0.50`) VALUES ('整存整取定期存款', 0);
INSERT INTO xp.deposit (活期存款, `0.50`) VALUES ('三个月', 2.85);
INSERT INTO xp.deposit (活期存款, `0.50`) VALUES ('半年', 3.05);
INSERT INTO xp.deposit (活期存款, `0.50`) VALUES ('一年', 3.25);
INSERT INTO xp.deposit (活期存款, `0.50`) VALUES ('二年', 4.15);
INSERT INTO xp.deposit (活期存款, `0.50`) VALUES ('三年', 4.75);
INSERT INTO xp.deposit (活期存款, `0.50`) VALUES ('五年', 5.25);
