import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { BlockchainModule } from './modules/blockchain/blockchain.module';
import { TransactionsModule } from './modules/transactions/transactions.module';
import { WalletsModule } from './modules/wallets/wallets.module';
import { ContractModule } from './modules/contract/contract.module';
import { ProvidersModule } from './shared/providers/providers.module';
import { UtilsModule } from './shared/utils/utils.module';
import { EnvironmentDevTsModule } from './environment/environment.dev.ts/environment.dev.ts.module';
import { EnvironmentProdTsModule } from './environment/environment.prod.ts/environment.prod.ts.module';
import { EnvironmentDevTsService } from './environment/environment.dev.ts/environment.dev.ts.service';

@Module({
  imports: [UserModule, AuthModule, BlockchainModule, TransactionsModule, WalletsModule, ContractModule, ProvidersModule, UtilsModule, EnvironmentDevTsModule, EnvironmentProdTsModule],
  controllers: [AppController],
  providers: [AppService, EnvironmentDevTsService],
})
export class AppModule {}
