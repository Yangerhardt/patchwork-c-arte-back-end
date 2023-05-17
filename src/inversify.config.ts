import { container } from 'tsyringe';
import { getCustomRepository } from 'typeorm';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.serivce';
import { UserRepository } from './repository/user.repository';

container.register<UserController>('UserController', {
  useClass: UserController,
});

container.register<UserService>('UserService', {
  useClass: UserService,
});

container.register<UserRepository>('UserRepository', {
  useValue: getCustomRepository(UserRepository),
});
