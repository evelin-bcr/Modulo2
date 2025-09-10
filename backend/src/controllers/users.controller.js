import {userModel} from "../models/users.model.js";
import bcryptjs from "bcryptjs";

// Metodo para crear un usuario -Post
export const postUser = async (request, response) => {
    // aca va la logica de la peticion

try { 
    // deestructuracion cuando se hace -procesar la informacion del usuario antes de guardarla
    const {name, username, email, age, password, role} = request.body;
    // hash - encripta la contraseña
    const codedPassword = bcryptjs.hash(password,10)
    await userModel.create({
        name, 
        username,
        email,
        age,
        password:codedPassword,
        role
    });

    return response.status(201).json({
        "mensaje":"usuario creado correctamente"
    });
    
} catch (error) {
    return response.status(400).json({
        "mensaje": "Ocurrió un error al crear producto",
        "error": error.message || error 
    })
}


}

// Metodo para mostrar todos los usuarios -GET
export const getAllUsers = (request, response) => {
    // aca va la logica de la peticion
return response.json ({"mensaje":"Funciona peticion GET"});
}

// Metodo para actualizar un usuario -PUT
export const putUser = (request, response) => {
    // aca va la logica de la peticion
return response.json ({"mensaje":"Funciona peticion PUT"}); 

}

export const putUserById = (request, response) => {
    // aca va la logica de la peticion
return response.json ({"mensaje":"Funciona peticion PUT"}); 

}

// Metodo para eliminar un usuario -DELETE
export const deleteUser = (request, response) => {
    // aca va la logica de la peticion
return response.json ({"mensaje":"Funciona peticion Delete"}); 

}

export const deleteUserById = (request, response) => {
    // aca va la logica de la peticion
return response.json ({"mensaje":"Funciona peticion Delete"}); 

}