import express, { Request, Response } from 'express';

const userRouter = express.Router();

// Rota GET /users
userRouter.get('/', (req: Request, res: Response) => {
  // Lógica para obter todos os usuários
  res.send('Obter todos os usuários');
});

// Rota GET /users/:id
userRouter.get('/:id', (req: Request, res: Response) => {
  const userId = req.params.id;
  // Lógica para obter um usuário específico com base no ID
  res.send(`Obter usuário com ID ${userId}`);
});

// Rota POST /users
userRouter.post('/', (req: Request, res: Response) => {
  // Lógica para criar um novo usuário
  const userData = req.body;
  res.send(`Criar novo usuário: ${JSON.stringify(userData)}`);
});

// Rota PUT /users/:id
userRouter.put('/:id', (req: Request, res: Response) => {
  const userId = req.params.id;
  // Lógica para atualizar um usuário específico com base no ID
  const updatedUserData = req.body;
  res.send(`Atualizar usuário com ID ${userId}: ${JSON.stringify(updatedUserData)}`);
});

// Rota DELETE /users/:id
userRouter.delete('/:id', (req: Request, res: Response) => {
  const userId = req.params.id;
  // Lógica para excluir um usuário específico com base no ID
  res.send(`Excluir usuário com ID ${userId}`);
});

export { userRouter };
