CREATE PROCEDURE sp_insertarPersona(in elnombre varchar(45), in elapellido varchar(45))
Begin
insert into persona(nombre , apellido)
values (elnombre, elapellido);
END


call sp_insertarPersona("maria", "calas")

select *  from persona