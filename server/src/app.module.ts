import { Module, Logger} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as mongoose from 'mongoose';


@Module({

  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,

    }),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    UserModule,
  ],
  controllers: [],
  providers: [],
})

export class AppModule {
  private readonly logger = new Logger(AppModule.name);

  constructor() {
    mongoose.connection.once('open', () => {
      this.logger.log('Connected to MongoDB');
    });
    mongoose.connection.on('error', (err) => {
      this.logger.error('Error connecting to MongoDB:', err);
    });
  }
}









































// @Module({
//   imports: [UserModule, AuthModule],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}


// @Module({
//   imports: [

  // imports: [UserModule, AuthModule],
  // controllers: [AppController],
  // providers: [AppService],
    // Load the ConfigModule to access environment variables
    // ConfigModule.forRoot({
    //   isGlobal: true, // Make the ConfigModule available globally
    //   envFilePath: '.env', // Specify the path to the .env file
    // }),
    
    // MongooseModule configured to connect to MongoDB using the connection string from .env
//     MongooseModule.forRootAsync({
//       imports: [ConfigModule],
//       inject: [ConfigService],
//       useFactory: async (configService: ConfigService) => ({
//         uri: configService.get<string>('MONGODB_URI'),
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       }),
//     }),
//   ],
// })
// export class AppModule {}



// src/app.module.ts
// import { Module } from '@nestjs/common';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { MongooseModule } from '@nestjs/mongoose';
// import { UserModule } from './user/user.module';

// @Module({
//   imports: [
//     ConfigModule.forRoot({
//       isGlobal: true,
//       envFilePath: '.env',
//     }),
//     MongooseModule.forRootAsync({
//       imports: [ConfigModule],
//       inject: [ConfigService],
//       useFactory: async (configService: ConfigService) => ({
//         uri: configService.get<string>('MONGODB_URI'),
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       }),
//     }),
//     UserModule,
//   ],
// })
// export class AppModule {}
