import { Injectable } from '@nestjs/common';
import { GetMyProfileCommand } from './get-my-profile.dto';

@Injectable()
export class GetMyProfileUsecase {
  constructor() {}

  async execute(command: GetMyProfileCommand) {
    return {
        _id : '5e9382eb7df576bd5970f0c9',
        userSettings : {
            lockWindowTop : true,
            autoCollapse : true,
            allowContactsAutoTeamAdd : true
        },
        secondaryEmails: [],
        availabilityStatus: "waiting",
        _invites: [],
        email: "tomer@barnea.io",
        firstName: "Jake",
        lastName: "Willams",
        password: "$2b$10$aCbdT3ympwPjzdbR5/PXLeqQist1gmPoBdTNRP8FESfv.wsR1qYJS",
        availabilityDescription: "I'm available",
        availabilityStatusImage: "happy",
        lastSeen: new Date(),
        availabilityStatusUpdatedAt: new Date(),
        tokens: [],
        createdAt: new Date(),
        updatedAt: new Date(),
    }  }
}
