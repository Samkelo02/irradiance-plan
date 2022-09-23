CREATE TABLE weather (
id integer PRIMARY KEY AUTOINCREMENT,
period_start integer,
temperature integer,
ghi_actual integer,
company_id integer
FOREIGN key (company_id) REFERENCES company(id)
);