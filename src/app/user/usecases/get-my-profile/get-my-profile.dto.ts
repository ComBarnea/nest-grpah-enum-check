import { plainToClass } from 'class-transformer';
import { ClassType } from 'class-transformer/ClassTransformer';

class CommandHelper {
    static create<T>(command: ClassType<T>, data: object): T {
        return plainToClass<T, object>(command, {
            ...data,
        });
    }
}


export class GetMyProfileCommand {
  static create(data: GetMyProfileCommand) {
    return CommandHelper.create(GetMyProfileCommand, data);
  }
}
