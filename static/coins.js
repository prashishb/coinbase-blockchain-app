import btcLogo from '../assets/btc.png';
import maticLogo from '../assets/matic.png';
import dogeLogo from '../assets/doge.png';
import ethLogo from '../assets/eth.png';
import lunaLogo from '../assets/luna.png';
import solLogo from '../assets/sol.png';

export const coins = [
  {
    name: 'Bitcoin',
    sign: 'BTC',
    logo: btcLogo,
    balanceUsd: 224659.6,
    balanceCoin: 6.35667736,
    priceUsd: 5.32,
    change: -4.74,
    allocation: 41.89,
  },
  {
    name: 'Solana',
    sign: 'SOL',
    logo: solLogo,
    balanceUsd: 11869.199999999999,
    balanceCoin: 120,
    priceUsd: 5.32,
    change: 4.74,
    allocation: 41.89,
  },
  {
    name: 'Polygon',
    sign: 'MATIC',
    logo: maticLogo,
    balanceUsd: 8000,
    balanceCoin: 5000,
    priceUsd: 5.22,
    change: -5.24,
    allocation: 17.89,
  },
  {
    name: 'Ethereum',
    sign: 'ETH',
    logo: ethLogo,
    balanceUsd: 32515.1422,
    balanceCoin: 13.2845,
    priceUsd: 5.22,
    change: 6.24,
    allocation: 17.89,
  },
  {
    name: 'Terra',
    sign: 'LUNA',
    logo: lunaLogo,
    balanceUsd: 227.54678558440003,
    balanceCoin: 3.35664236,
    priceUsd: 5.22,
    change: -5.24,
    allocation: 17.89,
  },
  {
    name: 'Dogecoin 🌙',
    sign: 'DOGE',
    logo: dogeLogo,
    balanceUsd: 13991.9,
    balanceCoin: 100000,
    priceUsd: 5.22,
    change: 200.24,
    allocation: 17.89,
  },
];
