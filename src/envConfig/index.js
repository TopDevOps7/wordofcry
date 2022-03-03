const env = import.meta.env.VITE_MODE;

const common = {
  wocd: 'WOCD',
};

const config = {
  development: {
    ...common,
    marketURL: 'https://market.kkchain.xyz',
    apiURL: 'https://marketserver.kkchain.xyz',
    playURL: 'https://game.kkchain.xyz/infinity/',
    eggURL: 'https://market.kkchain.xyz/purchase',
  },
  test: {
    ...common,
    marketURL: 'https://market.nnchain.xyz',
    apiURL: 'https://marketserver.nnchain.xyz',
    playURL: 'https://game.nnchain.xyz/infinity/',
    eggURL: 'https://market.nnchain.xyz/purchase',
  },
  production: {
    ...common,
    marketURL: 'https://market.cryptoids.world',
    apiURL: 'https://res.cryptoids.world',
    playURL: 'https://game.cryptoids.world/infinity/',
    eggURL: 'https://market.cryptoids.world/purchase',
  },
};

export default config[env];
