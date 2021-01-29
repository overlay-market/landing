/*

COPIED FROM https://github.com/keep3r-network/Uniquote/blob/master/src/stores/store.jsx
Ctrl+f for XXX to see all the modifications.

MIT License

Copyright (c) 2020 yearn

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import async from 'async';
import config from "./config";
import {
  GET_FEEDS,
  FEEDS_UPDATED,
  FEEDS_RETURNED,
} from '../constants';

import { ERC20ABI } from "./abi/erc20ABI";
import { UniswapV2PairABI } from './abi/uniswapV2PairABI';
import { Keep3rV1OracleABI } from './abi/keep3rV1OracleABI'
import { Keep3rV1VolatilityABI } from './abi/keep3rV1VolatilityABI'

import Web3 from 'web3';
const web3 = new Web3(config.provider)

const rp = require('request-promise');

const Dispatcher = require('flux').Dispatcher;
const Emitter = require('events').EventEmitter;

const dispatcher = new Dispatcher();
const emitter = new Emitter();

class Store {
  constructor() {

    this.store = {
      assets: [
        {
          address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
          decimals: "18",
          symbol: "WETH",
          price_id: 'ethereum',
        },
        {
          address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
          decimals: "8",
          symbol: "WBTC",
          price_id: 'wrapped-bitcoin',
        },
        {
          address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          decimals: "6",
          symbol: "USDC",
          price_id: 'usd-coin'
        },
        {
          address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          decimals: "6",
          symbol: "USDT",
          price_id: 'tether'
        },
        {
          address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
          decimals: "18",
          symbol: "DAI",
          price_id: 'dai',
        },
        {
          address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
          decimals: "18",
          symbol: "UNI",
          price_id: 'uniswap',
        },
        {
          address: "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e",
          decimals: "18",
          symbol: "YFI",
          price_id: 'yearn-finance',
        },
        {
          address: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
          decimals: "18",
          symbol: "AAVE",
          price_id: 'aave',
        },
        {
          address: "0xc00e94Cb662C3520282E6f5717214004A7f26888",
          decimals: "18",
          symbol: "COMP",
          price_id: 'compound-governance-token',
        },
        {
          address: "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
          decimals: "18",
          symbol: "MKR",
          price_id: 'maker',
        },
        {
          address: "0x1ceb5cb57c4d4e2b2433641b95dd330a33185a44",
          decimals: "18",
          symbol: "KP3R",
          price_id: 'keep3rv1',
        },
        {
          address: "0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f",
          decimals: "18",
          symbol: "SNX",
          price_id: 'havven',
        },
        {
          address: "0x514910771af9ca656af840dff83e8264ecf986ca",
          decimals: "18",
          symbol: "LINK",
          price_id: 'link',
        },
        {
          address: "0xd533a949740bb3306d119cc777fa900ba034cd52",
          decimals: "18",
          symbol: "CRV",
          price_id: 'curve-dao-token',
        },
        {
          address: "0x04fa0d235c4abf4bcf4787af4cf447de572ef828",
          decimals: "18",
          symbol: "UMA",
          price_id: 'uma',
        },
        {
          address: "0xeb4c2781e4eba804ce9a9803c67d0893436bb27d",
          decimals: "8",
          symbol: "renBTC",
          price_id: 'renbtc',
        },
        {
          address: "0x584bc13c7d411c00c01a62e8019472de68768430",
          decimals: "18",
          symbol: "Hegic",
          price_id: 'hegic',
        },
        {
          address: "0xc76fb75950536d98fa62ea968e1d6b45ffea2a55",
          decimals: "18",
          symbol: "Col",
          price_id: 'unit-protocol',
        },
        {
          address: "0x0ae055097c6d159879521c384f1d2123d1f195e6",
          decimals: "18",
          symbol: "STAKE",
          price_id: 'xdai-stake',
        }
      ],
      priceFeeds: [

      ]
    }

    dispatcher.register(
      function(payload) {
        switch (payload.type) {
          case GET_FEEDS:
            this.getFeeds(payload);
            break;
          default:
            break;
        }
      }.bind(this)
    );
  }

  getStore(index) {
    return (this.store[index]);
  };

  setStore(obj) {
    this.store = { ...this.store, ...obj }
    return emitter.emit('StoreUpdated');
  };


  //get pairs

  // get hard-coded address to { decimals, name, icon }
  // populate pair token info
  // get missing pair token info
  // retunr temp data

  // get consult pricing
  // get coingecko USD/ETH pricing


  getFeeds = async () => {
    try {
      const uniOracleContract = new web3.eth.Contract(Keep3rV1OracleABI, config.keep3rOracleAddress)
      const pairs = await uniOracleContract.methods.pairs().call({})

      if (!pairs || pairs.length === 0) {
        return emitter.emit(FEEDS_RETURNED)
      }

      store.setStore({ feeds: pairs })
      emitter.emit(FEEDS_UPDATED)

      const usdPrices = await this._getUSDPrices()

      async.map(pairs, async (pair, callback) => {

        let pairPopulated = await this._populatePairsTokens(pair)
        pairPopulated.address = pair

        let consult = await this._getConsult(pairPopulated)
        pairPopulated.consult = consult

        let lastUpdated = await this._getLastUpdated(pairPopulated)
        pairPopulated.lastUpdated = lastUpdated.timestamp

        let volatility = await this._getVolatility(pairPopulated)
        pairPopulated.volatility = volatility

        let quote = await this._getQuotes(pairPopulated)
        pairPopulated.quote = quote

        const usdPrice0 = usdPrices[pairPopulated.token0.price_id]
        const usdPrice1 = usdPrices[pairPopulated.token1.price_id]

        if (usdPrice0) {
          pairPopulated.priceToken0 = usdPrice0.usd
        }
        if (usdPrice1) {
          pairPopulated.priceToken1 = usdPrice1.usd
        }

        if (callback) {
          callback(null, pairPopulated)
        } else {
          return pairPopulated
        }
      }, (err, pairsData) => {
        if (err) {
          console.log(err)
        }
        store.setStore({ feeds: pairsData })
        emitter.emit(FEEDS_RETURNED)
      })

    } catch (e) {
      console.log(e)
      return {}
    }
  }

  _populatePairsTokens = async (pair) => {
    try {
      const assets = store.getStore('assets')

      const uniswapV2PairContract = new web3.eth.Contract(UniswapV2PairABI, pair)
      const token0Address = await uniswapV2PairContract.methods.token0().call({})
      const token1Address = await uniswapV2PairContract.methods.token1().call({})

      let token0 = null
      let token1 = null

      let token0Data = assets.filter((asset) => {
        return asset.address.toLowerCase() === token0Address.toLowerCase()
      })

      if (token0Data.length > 0) {
        token0 = token0Data[0]
      } else {
        const token0Contract = new web3.eth.Contract(ERC20ABI, token0Address)

        token0 = {
          address: token0Address,
          symbol: await token0Contract.methods.symbol().call({}),
          decimals: await token0Contract.methods.decimals().call({})
        }
      }


      let token1Data = assets.filter((asset) => {
        return asset.address.toLowerCase() === token1Address.toLowerCase()
      })

      if (token1Data.length > 0) {
        token1 = token1Data[0]
      } else {
        const token1Contract = new web3.eth.Contract(ERC20ABI, token1Address)

        token1 = {
          address: token1Address,
          symbol: await token1Contract.methods.symbol().call({}),
          decimals: await token1Contract.methods.decimals().call({})
        }
      }
      if (token0.symbol === "WETH") {
        return {
          token0: token1,
          token1: token0
        }
      } else {
        return {
          token0,
          token1
        }
      }
    } catch (ex) {
      console.log(ex)
      console.log(pair)
      return {
        token0: {},
        token1: {},
        error: ex
      }
    }

  }

  _getConsult = async (pair) => {
    try {

      const uniOracleContract = new web3.eth.Contract(Keep3rV1OracleABI, config.keep3rOracleAddress)

      let sendAmount0 = (10 ** pair.token0.decimals).toFixed(0)
      let sendAmount1 = (10 ** pair.token1.decimals).toFixed(0)

      const consult0To1 = await uniOracleContract.methods.current(pair.token0.address, sendAmount0, pair.token1.address).call({})
      const consult1To0 = await uniOracleContract.methods.current(pair.token1.address, sendAmount1, pair.token0.address).call({})

      return {
        consult0To1: consult0To1 / 10 ** pair.token1.decimals,
        consult1To0: consult1To0 / 10 ** pair.token0.decimals,
      }


    } catch (e) {
      return {
        consult0To1: null,
        consult1To0: null,
        err: e
      }
    }
  }

  _getLastUpdated = async (pair) => {
    try {
      const uniOracleContract = new web3.eth.Contract(Keep3rV1OracleABI, config.keep3rOracleAddress)

      const lastUpdated = await uniOracleContract.methods.lastObservation(pair.address).call({})

      return lastUpdated
    } catch (e) {
      return { timestamp: 0 }
    }
  }

  _getVolatility = async (pair) => {
    const keep3rVolatilityContract = new web3.eth.Contract(Keep3rV1VolatilityABI, config.keep3rVolatilityAddress)

    try {
      const realizedVolatilityHourly = await keep3rVolatilityContract.methods.rVol(pair.token0.address, pair.token1.address, 4, 24).call({})
      const realizedVolatilityDaily = await keep3rVolatilityContract.methods.rVol(pair.token0.address, pair.token1.address, 4, 48).call({})
      const realizedVolatilityWeekly = realizedVolatilityDaily

      return {
        realizedVolatilityHourly: realizedVolatilityHourly / 1e18 * 100,
        realizedVolatilityDaily: realizedVolatilityDaily / 1e18 * 100,
        realizedVolatilityWeekly: realizedVolatilityWeekly / 1e18 * 100
      }
    } catch (e) {
      console.log(e)

      try {
        const realizedVolatility = await keep3rVolatilityContract.methods.rVol(pair.token0.address, pair.token1.address, 12, 2).call({})

        return {
          realizedVolatility: realizedVolatility / 1e18 * 100,
          realizedVolatilityHourly: null,
          realizedVolatilityDaily: null,
          realizedVolatilityWeekly: null,
        }
      } catch (ex) {
        console.log(ex)
        return {
          realizedVolatility: null,
          realizedVolatilityHourly: null,
          realizedVolatilityDaily: null,
          realizedVolatilityWeekly: null,
          err: ex
        }
      }
    }
  }

  _getQuotes = async (pair) => {
    const keep3rVolatilityContract = new web3.eth.Contract(Keep3rV1VolatilityABI, config.keep3rVolatilityAddress)

    try {
      const quote = await keep3rVolatilityContract.methods.quote(pair.token0.address, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 7).call({})
      return {
        call: quote.call / 1e18,
        put: quote.put / 1e18
      }
    } catch (e) {
      return {
        call: null,
        put: null
      }
    }
  }

  _getUSDPrices = async () => {
    try {
      const url = 'https://api.coingecko.com/api/v3/simple/price?ids=dai,usd-coin,true-usd,tether,yearn-finance,wrapped-bitcoin,ethereum,aave,uniswap,compound-governance-token,maker,havven,curve-dao-token,keep3rV1,link,renbtc,uma,hegic,unit-protocol,xdai-stake&vs_currencies=usd'
      const priceString = await rp(url);
      const priceJSON = JSON.parse(priceString)

      return priceJSON
    } catch (e) {
      console.log(e)
      return null
    }
  }
}

var store = new Store();

export default {
  store: store,
  dispatcher: dispatcher,
  emitter: emitter
};
