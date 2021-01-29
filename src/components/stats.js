import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

const data = {
  stats: "Stats",
  line3: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/line-3@2x.svg",
  totalSupply: "Total supply",
  tvl: "TVL",
  liquidity: "Spot liquidity",
  staked: "Staked OVL",
  x102482987Ovl: "1,024,829.87 OVL",
  x102482987Ovl2: "124,056.17 OVL",
  x102482987OvlUsd2: "2,480,562 USD",
  x102482987Ovl3: "1,024,829.87 OVL",
  x102482987Ovl4: "263,056.17 OVL",
  x102482987OvlUsd4: "5,260,562 USD",
  x102482987OvlAmount5: "Amount: 263,056.17 OVL",
  x102482987OvlApy5: "APY: 27.67123%",
};

class Stats extends Component {
  render = () => (
    <Container className="py-3 px-0" style={{ width: '256px' }}>
      <div>
        <h1 className="roboto-black-mine-shaft-36px m-0">{data.stats}</h1>
        <img className="line-3" src={data.line3} />
      </div>
      <div className="d-flex flex-column">
        <div className="py-2">
          <div className="roboto-bold-mine-shaft-24px"><u>{data.totalSupply}</u></div>
          <div className="py-1 roboto-normal-mine-shaft-16px">{data.x102482987Ovl3}</div>
        </div>
        <div className="py-2">
          <div className="roboto-bold-mine-shaft-24px"><u>{data.tvl}</u></div>
          <div className="pt-1 roboto-normal-mine-shaft-16px">{data.x102482987Ovl2}</div>
          <small className="roboto-normal-mine-shaft-16px text-muted">{data.x102482987OvlUsd2}</small>
        </div>
        <div className="py-2">
          <div className="roboto-bold-mine-shaft-24px"><u>{data.liquidity}</u></div>
          <div className="pt-1 roboto-normal-mine-shaft-16px">{data.x102482987Ovl4}</div>
          <small className="roboto-normal-mine-shaft-16px text-muted">{data.x102482987OvlUsd4}</small>
        </div>
        <div className="py-2">
          <div className="roboto-bold-mine-shaft-24px"><u>{data.staked}</u></div>
          <div className="pt-1 roboto-normal-mine-shaft-16px">{data.x102482987OvlAmount5}</div>
          <div className="pt-1 roboto-normal-mine-shaft-16px">{data.x102482987OvlApy5}</div>
        </div>
      </div>
    </Container>
  );
}

export default Stats;
