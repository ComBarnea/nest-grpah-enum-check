import { Module, OnModuleInit } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app/app.controller';
import { UserModule } from './app/user/user.module';

@Module({
  imports: [
    UserModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.graphql',
      context: ({ req }) => ({ req }),
    }),
  ],
  controllers: [AppController],
})
export class AppModule {
}
