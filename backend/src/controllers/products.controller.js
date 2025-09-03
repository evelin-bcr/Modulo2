// 1. Importar dependencias y modulos necesarios

import {productModel} from "../models/products.model";

// Definir las acciones que van a realizar CRUD

// Metodo para crear un producto -Post
export const postProduct = (request, response) => {
    // aca va la logica de la peticion
return response.json ({"mensaje":"Funciona peticion POST"});
}

// Metodo para mostrar todos los producto -GET
export const getAllProducts = (request, response) => {
    // aca va la logica de la peticion
return response.json ({"mensaje":"Funciona peticion GET"});
}

// Metodo para actualizar un product -PUT
export const putProduct = (request, response) => {
    // aca va la logica de la peticion
return response.json ({"mensaje":"Funciona peticion PUT"}); 

}

export const putProductById = (request, response) => {
    // aca va la logica de la peticion
return response.json ({"mensaje":"Funciona peticion PUT"}); 

}

// Metodo para eliminar un product -DELETE
export const deleteProduct = (request, response) => {
    // aca va la logica de la peticion
return response.json ({"mensaje":"Funciona peticion Delete"}); 

}

export const deleteProductById = (request, response) => {
    // aca va la logica de la peticion
return response.json ({"mensaje":"Funciona peticion Delete"}); 

}