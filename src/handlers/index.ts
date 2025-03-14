import {Request, Response} from 'express'
import User from "../models/user";

export const createAccount = async (req: Request, res: Response) => {
    const user = new User(req.body);
    await user.save();
    res.send("Registro creado correctamente");
  }