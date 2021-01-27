import React from "react";
import "./style-mobile.css";

class AppMobile extends React.Component {
  render() {
    return <LandingMobile {...LandingMobileData} />;
  }
}

export default AppMobile;


class LandingMobile extends React.Component {
  render() {
    const {
      overlayLogo1,
      about,
      line3,
      number,
      number2,
      number3,
      text1,
      totalSupply,
      tvl,
      otherData,
      x102482987Ovl,
      x102482987Ovl2,
      x102482987Ovl3,
      line2,
      line7,
      line8,
      streams,
      line4,
      x01516Eth,
      rectangle15,
      x007131Eth,
      rectangle16,
      x0005743Eth,
      rectangle18,
      x3095Eth,
      rectangle17,
      x001263Eth,
      rectangle19,
      technical,
      line5,
      text2,
      text3,
      oip,
      github,
      overlayLogoCircles1,
      github1,
      number4,
      number5,
      number6,
      number7,
      number8,
      writings,
      line6,
      whatIsOverlay,
      text4,
      text5,
      text6,
      text7,
      why,
      line12,
      spanText,
      spanText2,
      ourStakeholders,
      line11,
      polychain,
      x1Kx,
      parafi,
      metacartel,
      theLao,
      text9,
      text10,
      whitepaperV2,
      telegram,
      appBeta,
      discord,
      medium,
      medium5121,
      twitter,
      telegram5121,
      x91DiscordLogoLogos5121,
      twitter3,
      cardHeader2Props,
      cardHeader22Props,
      cardHeader23Props,
      cardHeader24Props,
      cardHeader25Props,
      cardHeader1Props,
      cardHeader12Props,
    } = this.props;

    return (
      <div className="iphone-11-pro-x-1">
        <img className="overlay-logo-1" src={overlayLogo1} />
        <div className="overlap-group1">
          <h1 className="about roboto-bold-mine-shaft-36px">{about}</h1>
          <img className="line-3" src={line3} />
        </div>
        <div className="number roboto-bold-bon-jour-24px">{number}</div>
        <div className="number-1 roboto-bold-bon-jour-24px">{number2}</div>
        <div className="number-2 roboto-bold-bon-jour-24px">{number3}</div>
        <p className="text-1 roboto-normal-mine-shaft-16px">{text1}</p>
        <div className="total-supply roboto-bold-mine-shaft-24px">{totalSupply}</div>
        <div className="tvl roboto-bold-mine-shaft-24px">{tvl}</div>
        <div className="other-data roboto-bold-mine-shaft-24px">{otherData}</div>
        <div className="x102482987-ovl roboto-normal-mine-shaft-16px">{x102482987Ovl}</div>
        <div className="x102482987-ovl-1 roboto-normal-mine-shaft-16px">{x102482987Ovl2}</div>
        <div className="x102482987-ovl-2 roboto-normal-mine-shaft-16px">{x102482987Ovl3}</div>
        <img className="line-2" src={line2} />
        <img className="line-7" src={line7} />
        <img className="line-8" src={line8} />
        <div className="overlap-group5">
          <div className="streams roboto-bold-mine-shaft-36px">{streams}</div>
          <img className="line-4" src={line4} />
        </div>
        <div className="x01516-eth roboto-normal-mine-shaft-16px">{x01516Eth}</div>
        <img className="rectangle-15" src={rectangle15} />
        <CardHeader2 totalSupply={cardHeader2Props.totalSupply} line2={cardHeader2Props.line2} />
        <div className="x007131-eth roboto-normal-mine-shaft-16px">{x007131Eth}</div>
        <CardHeader2
          totalSupply={cardHeader22Props.totalSupply}
          line2={cardHeader22Props.line2}
          className="card-header-2-1"
        />
        <img className="rectangle-16" src={rectangle16} />
        <div className="x0005743-eth roboto-normal-mine-shaft-16px">{x0005743Eth}</div>
        <CardHeader2
          totalSupply={cardHeader23Props.totalSupply}
          line2={cardHeader23Props.line2}
          className="card-header-2-2"
        />
        <img className="rectangle-18" src={rectangle18} />
        <div className="x3095-eth roboto-normal-mine-shaft-16px">{x3095Eth}</div>
        <CardHeader2
          totalSupply={cardHeader24Props.totalSupply}
          line2={cardHeader24Props.line2}
          className="card-header-2-3"
        />
        <img className="rectangle-17" src={rectangle17} />
        <div className="x001263-eth roboto-normal-mine-shaft-16px">{x001263Eth}</div>
        <CardHeader2
          totalSupply={cardHeader25Props.totalSupply}
          line2={cardHeader25Props.line2}
          className="card-header-2-4"
        />
        <img className="rectangle-19" src={rectangle19} />
        <div className="overlap-group">
          <div className="technical roboto-bold-mine-shaft-36px">{technical}</div>
          <img className="line-5" src={line5} />
        </div>
        <p className="text-2 roboto-normal-mine-shaft-16px">{text2}</p>
        <p className="text-3 roboto-normal-mine-shaft-16px">{text3}</p>
        <div className="oip roboto-normal-mine-shaft-16px">{oip}</div>
        <div className="github roboto-normal-mine-shaft-16px">{github}</div>
        <img className="overlay-lo--circles-1" src={overlayLogoCircles1} />
        <img className="github-1" src={github1} />
        <div className="number-3 roboto-bold-bon-jour-24px">{number4}</div>
        <div className="number-4 roboto-bold-bon-jour-24px">{number5}</div>
        <div className="number-5 roboto-bold-bon-jour-24px">{number6}</div>
        <div className="number-6 roboto-bold-bon-jour-24px">{number7}</div>
        <div className="number-7 roboto-bold-bon-jour-24px">{number8}</div>
        <div className="overlap-group3">
          <div className="writings roboto-bold-mine-shaft-36px">{writings}</div>
          <img className="line-6" src={line6} />
        </div>
        <div className="what-is-overlay roboto-bold-mine-shaft-16px">{whatIsOverlay}</div>
        <p className="text-4 roboto-bold-mine-shaft-16px">{text4}</p>
        <div className="text-5 roboto-bold-mine-shaft-16px">{text5}</div>
        <div className="text-6 roboto-bold-mine-shaft-16px">{text6}</div>
        <div className="text-7 roboto-bold-mine-shaft-16px">{text7}</div>
        <div className="overlap-group2">
          <div className="why roboto-bold-mine-shaft-36px">{why}</div>
          <img className="line-12" src={line12} />
        </div>
        <p className="text-8 roboto-normal-mine-shaft-16px-2">
          <span className="span1">{spanText}</span>
          <span className="span2">{spanText2}</span>
        </p>
        <div className="overlap-group4">
          <div className="our-stakeholders roboto-bold-mine-shaft-36px">{ourStakeholders}</div>
          <img className="line-11" src={line11} />
        </div>
        <div className="polychain roboto-normal-mine-shaft-16px">{polychain}</div>
        <div className="x1kx roboto-normal-mine-shaft-16px">{x1Kx}</div>
        <div className="para-fi roboto-normal-mine-shaft-16px">{parafi}</div>
        <div className="metacartel roboto-normal-mine-shaft-16px">{metacartel}</div>
        <div className="the-lao roboto-normal-mine-shaft-16px">{theLao}</div>
        <div className="text-9 roboto-normal-mine-shaft-24px">{text9}</div>
        <div className="text-10 roboto-normal-mine-shaft-24px">{text10}</div>
        <div className="whitepaper-v2 roboto-normal-mine-shaft-20px">{whitepaperV2}</div>
        <div className="telegram roboto-normal-mine-shaft-20px">{telegram}</div>
        <div className="app-beta roboto-normal-mine-shaft-20px">{appBeta}</div>
        <div className="discord roboto-normal-mine-shaft-20px">{discord}</div>
        <div className="medium roboto-normal-mine-shaft-20px">{medium}</div>
        <img className="medium-512-1" src={medium5121} />
        <div className="twitter roboto-normal-mine-shaft-20px">{twitter}</div>
        <img className="telegram-512-1" src={telegram5121} />
        <img className="x91-discor-ogos-512-1" src={x91DiscordLogoLogos5121} />
        <img className="twitter-3" src={twitter3} />
        <CardHeader1 links={cardHeader1Props.links} line1={cardHeader1Props.line1} />
        <CardHeader1 links={cardHeader12Props.links} line1={cardHeader12Props.line1} className="card-header-1-1" />
      </div>
    );
  }
}


class CardHeader2 extends React.Component {
  render() {
    const { totalSupply, line2, className } = this.props;

    return (
      <div className={`card-header-2 ${className || ""}`}>
        <div className="total-supply-1 roboto-bold-mine-shaft-24px">{totalSupply}</div>
        <img className="line-2-1" src={line2} />
      </div>
    );
  }
}


class CardHeader1 extends React.Component {
  render() {
    const { links, line1, className } = this.props;

    return (
      <div className={`card-header-1 ${className || ""}`}>
        <div className="links roboto-bold-mine-shaft-36px">{links}</div>
        <img className="line-1" src={line1} />
      </div>
    );
  }
}
const cardHeader2Data = {
  totalSupply: "AAVE-ETH",
  line2: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/line-2@2x.svg",
};

const cardHeader22Data = {
  totalSupply: "UNI-ETH",
  line2: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/line-2@2x.svg",
};

const cardHeader23Data = {
  totalSupply: "SUSHI-ETH",
  line2: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/line-2@2x.svg",
};

const cardHeader24Data = {
  totalSupply: "YFI-ETH",
  line2: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/line-2@2x.svg",
};

const cardHeader25Data = {
  totalSupply: "SNX-ETH",
  line2: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/line-2@2x.svg",
};

const cardHeader1Data = {
  links: "Links",
  line1: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/line-1@2x.svg",
};

const cardHeader12Data = {
  links: "Stats",
  line1: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/line-1@2x.svg",
};

const LandingMobileData = {
  overlayLogo1: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/overlay-logo-1@2x.png",
  about: "About",
  line3: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/line-3@2x.svg",
  number: "01",
  number2: "02",
  number3: "03",
  text1: <>A cryptocurrency that lets you buy and sell nearly any streaming data.<br /><br />Recreates the dynamics of trading, but without counterparties, (with the ability to hedge DeFi token price exposure).<br /><br />Completely solves the liquidity problems which beset similar DeFi systems.</>,
  totalSupply: "Total supply",
  tvl: "TVL",
  otherData: "Other data",
  x102482987Ovl: "1,024,829.87 OVL",
  x102482987Ovl2: "1,024,829.87 OVL",
  x102482987Ovl3: "1,024,829.87 OVL",
  line2: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/line-2@2x.svg",
  line7: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/line-2@2x.svg",
  line8: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/line-2@2x.svg",
  streams: "Streams",
  line4: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010c165decee5e9c798bed6/img/line-4@2x.svg",
  x01516Eth: "0.1516 ETH",
  rectangle15: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/rectangle-15@2x.jpg",
  x007131Eth: ".007131 ETH",
  rectangle16: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/rectangle-15@2x.jpg",
  x0005743Eth: "0.005743 ETH",
  rectangle18: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/rectangle-15@2x.jpg",
  x3095Eth: "30.95 ETH",
  rectangle17: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/rectangle-15@2x.jpg",
  x001263Eth: "0.01263 ETH",
  rectangle19: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/rectangle-15@2x.jpg",
  technical: "Technical",
  line5: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/line-5@2x.svg",
  text2: "OIP is the place to do this and to do that and some other such stuff. It’s cool, check it out.",
  text3: "Where all the Noob Noobs go.",
  oip: "OIP",
  github: "Github",
  overlayLogoCircles1: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/overlay-logo-circles-1@2x.png",
  github1: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/github-1@2x.png",
  number4: "01",
  number5: "02",
  number6: "03",
  number7: "04",
  number8: "05",
  writings: "Writings",
  line6: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/line-6@2x.svg",
  whatIsOverlay: "What is Overlay?",
  text4: "A deep dive of our metrics",
  text5: "Tokenomics of Overlay",
  text6: "Our mission and values",
  text7: "Another article link",
  why: "Why",
  line12: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/line-12@2x.svg",
  spanText: <>We believe in open-source.<br />Free and fair internet.<br />Other things.<br /></>,
  spanText2: "Read about it",
  ourStakeholders: "Our stakeholders",
  line11: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010c165decee5e9c798bed6/img/line-11@2x.svg",
  polychain: "Polychain",
  x1Kx: "1kx",
  parafi: "ParaFi",
  metacartel: "Metacartel",
  theLao: "The LAO",
  text9: "📃",
  text10: "😸",
  whitepaperV2: "Whitepaper V2",
  telegram: "Telegram",
  appBeta: "App (beta)",
  discord: "Discord",
  medium: "Medium",
  medium5121: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/medium-512-1@2x.png",
  twitter: "Twitter",
  telegram5121: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/telegram-512-1@2x.png",
  x91DiscordLogoLogos5121: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/medium-512-1@2x.png",
  twitter3: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/twitter-3@2x.png",
  cardHeader2Props: cardHeader2Data,
  cardHeader22Props: cardHeader22Data,
  cardHeader23Props: cardHeader23Data,
  cardHeader24Props: cardHeader24Data,
  cardHeader25Props: cardHeader25Data,
  cardHeader1Props: cardHeader1Data,
  cardHeader12Props: cardHeader12Data,
};
