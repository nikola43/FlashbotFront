import { TokenAbi } from './tokenAbi';
import { RouterAbi } from './routerAbi';
import { TokenGeneratorAbi } from './TokenGeneratorAbi';
import { FactoryAbi } from './factoryAbi';
import { GoldKing } from './goldKingAbi';

export const BSCNetwork = {
  ABI: TokenAbi,
  ROUTER_ABI: RouterAbi,
  GENERATOR_ABI: TokenGeneratorAbi,
  FACTORY_ABI: FactoryAbi,
  GOLDKING_ABI: GoldKing
};
