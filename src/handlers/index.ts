import { Request, Response } from "express";
import User from "../models/user";
import { hashPassword } from "../utils/auth";

export const createAccount = async (req: Request, res: Response) => {

  const { email, password } = req.body;

  const userExist = await User.findOne({ email });
  if (userExist) {
    const error = new Error("El usuario ya está registrado");
    res.status(409).json({ error: error.message });
  }

  const user = new User(req.body);
  user.password = await hashPassword(password);
  
  await user.save();
  res.status(201).send("Registro creado correctamente");
};
