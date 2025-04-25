import { Request, Response } from 'express';
import UserModel from '../../models/user';

export const getUserByEmail = async (req: Request, res: Response): Promise<void> => {
  const { email } = req.body;

  if (!email) {
    res.status(400).json({ error: 'O e-mail é obrigatório.' });
    return;
  }

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      res.status(404).json({ error: 'Usuário não encontrado.' });
      return;
    }
    res.status(200).json(user);
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    res.status(500).json({ error: 'Erro no servidor.' });
  }
};
