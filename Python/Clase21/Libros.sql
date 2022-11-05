create table libros(
    titulo varchar(100),
    autor varchar(30),
    editorial varchar(15),
    precio float,
    cantidad integer
)

insert into libros (titulo,autor,editorial,precio,cantidad)
values
("El aleph","Borges","MS",45,100),
("El equis lol","Caroll","Planeta",25.20,300),
("Mates","Paenza","Exdi",15,150);

select * from libros where autor <> "Borges";
select * from libros where precio <= 45;

select * from libros where (autor = 'Borges') and (editorial='paidos' or precio > 20);

select * from libros where precio between 20 and 40;

select * from libros order by titulo desc; 

/*funciones matematicas*/
select sum(cantidad) from libros;
select max(precio) from libros;
select min(precio) from libros;
select count(titulo) from libros;

/**/
alter table libros..
drop column /*eliminar */
rename column /*renombrar*/
update libros set editorial="paidos"
where editorial = "planeta";/*actualizar datos*/