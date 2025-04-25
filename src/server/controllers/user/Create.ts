import { Request, Response } from "express";
import UserModel from "../../models/user";

const Create = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, role } = req.body;

        if (!name || !email || !role) {
            res.status(400).json({ error: 'Campos obrigatórios faltando.' });
            return;
        }

        if (!['aluno', 'mentor'].includes(role.toLowerCase())) {
            res.status(400).json({ error: "Role inválida. Use 'aluno' ou 'mentor'." });
            return;
        }

        const existing = await UserModel.findOne({ email });
        if (existing) {
            res.status(409).json({ error: 'E-mail já está em uso.' });
            return;
        }

        const newUser = new UserModel({
            name,
            email,
            role: role.toLowerCase(),
        });

        await newUser.save();

        res.status(201).json({ message: 'Usuário criado com sucesso.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro interno no servidor.' });
    }
};

export { Create };