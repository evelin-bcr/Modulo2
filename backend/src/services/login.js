import { userModel } from "../models/users.model.js"; //validar usuario
import { generateToken } from "../config/jwt.js"; //generar el token de seguridad
import bcryptjs from "bcryptjs"; //validar la contraseña

export const login = async (request, response) => {
    try {

        const { emailLogin, passwordLogin } = request.body;

        // 1. Buscar en la bd
        const userFound = await userModel.findOne({
            email: emailLogin
        });

        console.log("usuario encontrado", userFound)

        if (!userFound) {
            return response.status(404).json({
                "mensaje": "usuario no encontrado, por favor registrese"
            });
        }

// Validacion 2: contraseña correcta

const validPassword = await bcryptjs.compare(passwordLogin, userFound.password);

if(!validPassword){
    return response.status(400).json({
        "mensaje": "contraseña incorrecta"
    });
}

// Generacion de token: verificar permisos

const payload = {
    id: userFound._id,
    user: userFound.username
}

if (userFound.role === "admin") {
    payload.admin = true;
} else {
    payload.admin = false;
}

const token = await generateToken(payload);
console.log("payload: ",payload );
console.log("token", token);
return response.status(200).json({
    "mensaje": "Inicio de sesion exitoso",
    "token": token
});


    } catch (error) {
        return response.status(400).json({
            "mensaje": "Ocurrio un error al iniciar sesion",
            "error": error.message || error
        });

    }





}