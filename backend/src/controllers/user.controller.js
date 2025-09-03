import {userModel} from "../models/users.model";

// Metodo para crear un usuario -Post
export const postuser = (request, response) => {
    // aca va la logica de la peticion
return response.json ({"mensaje":"Funciona peticion POST"});
}

// Metodo para mostrar todos los usuarios -GET
export const getAllUsers = (request, response) => {
    // aca va la logica de la peticion
return response.json ({"mensaje":"Funciona peticion GET"});
}

// Metodo para actualizar un usuario -PUT
export const putuser = (request, response) => {
    // aca va la logica de la peticion
return response.json ({"mensaje":"Funciona peticion PUT"}); 

}

export const putuserById = (request, response) => {
    // aca va la logica de la peticion
return response.json ({"mensaje":"Funciona peticion PUT"}); 

}

// Metodo para eliminar un usuario -DELETE
export const deleteUser = (request, response) => {
    // aca va la logica de la peticion
return response.json ({"mensaje":"Funciona peticion Delete"}); 

}

export const deleteuserById = (request, response) => {
    // aca va la logica de la peticion
return response.json ({"mensaje":"Funciona peticion Delete"}); 

}