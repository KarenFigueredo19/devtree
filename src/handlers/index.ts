import { Request, Response } from "express";
import { validationResult } from "express-validator";
import slug from "slug";
import User from "../models/user";
import { checkPassword, hashPassword } from "../utils/auth";

/*Crear cuenta */
export const createAccount = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const userExist = await User.findOne({ email });
  if (userExist) {
    const error = new Error("El usuario ya está registrado con ese email");
    res.status(409).json({ error: error.message });
  }

  const handle = slug(req.body.handle, "_");
  const handleExist = await User.findOne({ handle });
  if (handleExist) {
    const error = new Error("Nombre de usuario no disponible");
    res.status(409).json({ error: error.message });
  }

  const user = new User(req.body);
  user.password = await hashPassword(password);
  user.handle = handle;

  await user.save();
  res.status(201).send("Registro creado correctamente");
};

/*Iniciar sesión */
export const login = async (req: Request, res: Response) => {
  //Manejar errores
  let errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    const error = new Error("El usuario no está registrado");
    res.status(404).json({ error: error.message });
  }

  console.log("Sí existe...");

  /*Comprobar password */
  const isPasswordCorrect = await checkPassword(password, user.password);
  console.log(user.password);
  if (!isPasswordCorrect) {
    const error = new Error("La contraseña es incorrecta");
    res.status(401).json({ error: error.message });
    return;
  }
  res.send("Autenticado...");
};
