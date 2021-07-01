import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from './user.entity';

export const GetUser = createParamDecorator(
  (data, ctx: ExecutionContext): User => {
    console.log('data', data);
    console.log('ctx', ctx);
    const req = ctx.switchToHttp().getRequest();
    console.log('req', req);
    return req.user;
  },
);
