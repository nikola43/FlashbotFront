import { FTMTokenAbi } from './tokenAbi';
import { RouterAbi } from './routerAbi';
import { FactoryAbi } from './factoryAbi';
import { TokenGeneratorAbi } from './TokenGeneratorAbi';
import { GoldKing } from './goldKingAbi';

export const FTMNetwork = {
  ABI: FTMTokenAbi,
  GENERATOR_ABI: TokenGeneratorAbi,
  ROUTER_ABI: RouterAbi,
  FACTORY_ABI: FactoryAbi,
  GOLDKING_ABI: GoldKing
};
