import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
const CrearEncuesta = ({ agregarEncuesta}) => {const { register, handleSubmit, formState: {errors} } =
useForm();
const navigate = useNavigate();
const onSubmit = (data) => {
agregarEncuesta(data)
navigate('/');
};
return (
<div>
<h1>Crear Nueva Encuesta</h1>
<form onSubmit={handleSubmit(onSubmit)}>
<label>Título:</label>
<input
type="text"
id="titulo"
name="titulo"
{... register("titulo", {
required: 'Este campo es obligatorio',
maxLength: { value: 50, message: 'El título debe tener menos de 50 caracteres' }
})}
/>
{errors.titulo && <p>{errors.titulo.message}</p>}
<label>Descripción:</label>
<textarea
id="descripcion"
name="descripcion"
{... register("descripcion", {
    required: 'Este campo es obligatorio',
maxLength: { value: 200, message: 'La descripción debe tener menos de 200 caracteres', required: 'Este campo es obligatorio' }
})}
/>
{errors.descripcion &&
<p>{errors.descripcion.message}</p>}
<label>Preguntas:</label>
<input
type="text"
id="preguntas"
name="preguntas"
{... register("preguntas", {
required: 'Este campo es obligatorio',
maxLength: { value: 50, message: 'El título debe tener menos de 50 caracteres' }
})}
/>
{errors.preguntas && <p>{errors.preguntas.message}</p>}
<button type="submit">Guardar Encuesta</button>
</form>
</div>
);
};
export default CrearEncuesta;