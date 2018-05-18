export const defaultCoin = 'BTC';

export const coins = [
  {
    name: 'Bitcoin',
    currency: 'BTC',
    hasTokens: false,
    tokens: [],  
  },

  {
    name: 'Ethereum',
    currency: 'ETH',
    hasTokens: true,
    tokens: [
      { tokenName: 'TRONix', ticker: 'TRON' },
      { tokenName: 'VeChain', ticker: 'VEN' },
      { tokenName: 'Binance Coin', ticker: 'BNB' },
      { tokenName: 'OmiseGO', ticker: 'OMG' },
      { tokenName: 'Zilliqa', ticker: 'ZIL' },
    ],
  },

  {
    name: 'Litecoin',
    currency: 'LTC',
    hasTokens: false,
    tokens: [],
  },

  {
    name: 'NEO',
    currency: 'NEO',
    hasTokens: true,
    tokens: [
      { tokenName: 'lrnToken', ticker: 'LRN' },
      { tokenName: 'Trinity Network Credit', ticker: 'TNC' },
      { tokenName: 'Qlink Token', ticker: 'QLC' },
      { tokenName: 'Orbis', ticker: 'OBT' },
      { tokenName: 'THKEY', ticker: 'TKY' },
    ],
  },
  
  {
    name: 'Stellar',
    currency: 'XLM',
    hasTokens: true,
    tokens: [
      { tokenName: 'Mobius', ticker: 'MOBI' },
      { tokenName: 'Repocoin', ticker: 'REPO' },
      { tokenName: 'Firefly', ticker: 'XCN' },
      { tokenName: 'Diruna', ticker: 'DRA' },
      { tokenName: 'Smartlands', ticker: 'SLT' },
    ],
  },
];