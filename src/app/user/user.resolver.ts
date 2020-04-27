import { GetMyProfileCommand } from './usecases/get-my-profile/get-my-profile.dto';
import { GetMyProfileUsecase } from './usecases/get-my-profile/get-my-profile.usecase';
import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { User } from './user.graph';

@Resolver()
export class UserResolver {
  constructor(private getMyProfileUsecase: GetMyProfileUsecase) {}

  @Query(() => User)
  async me(): Promise<any> {
    const command = GetMyProfileCommand.create({
      userId: '1',
    });

    return await this.getMyProfileUsecase.execute(command);
  }
}
