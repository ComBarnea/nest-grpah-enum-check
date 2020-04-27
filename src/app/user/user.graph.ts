import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';

export enum UserAvailabilityStatsEnum {
    ONLINE = 'online',
    WAITING = 'waiting',
    BUSY = 'busy',
    OFFLINE = 'offline',
}

registerEnumType(UserAvailabilityStatsEnum, {
  name: 'UserAvailabilityStatsEnum',
});

@ObjectType()
export class User {
  @Field({ nullable: true })
  _id?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field({ nullable: true })
  name?: string;

  @Field((type) => UserAvailabilityStatsEnum, { nullable: true })
  availabilityStatus?: UserAvailabilityStatsEnum;

  @Field({ nullable: true })
  profilePicture?: string;

  @Field({ nullable: true })
  availabilityDescription?: string;

  @Field({ nullable: true })
  availabilityStatusImage?: string;

}
