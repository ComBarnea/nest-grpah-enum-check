import { forwardRef, Module } from '@nestjs/common';
import { USE_CASES } from './usecases';
import { UserResolver } from './user.resolver';

@Module({
  imports: [],
  controllers: [],
  providers: [UserResolver, ...USE_CASES],
  exports: [UserResolver, ...USE_CASES],
})
export class UserModule {}
