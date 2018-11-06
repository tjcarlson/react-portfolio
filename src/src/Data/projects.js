import ventrBackgroundImage from "./ventr/ventrSplash.png";
import zelleBackgroundImage from "./zelleActivity/splash.png";
// import portfolioBackgroundImage from "./porfolio/portfolioBackground.png"
// import ScribdCBackgroundImage from "./scribdC/scribdCBackground.png";
import prototypeBackgroundImage from "./prototypes/concierge_chatbot.gif";
// POSSIBLE FOR PROTOTYPES THAT IT MIGHT NOT BE PNG
import ScribdPBackgroundImage from "./scribdP/scribdPBackground.png";
import onBelayBackgroundImage from "./onBelay/onBelaySplash.png";
import kalitaBackgroundImage from "./kalita/kalitaBackground.png";

export const projects = [
  {
    title: "Ventr",
    type: "Product Design, Motion & Brand",
    description: "End to end design for a react native bike touring app.",
    image: ventrBackgroundImage,
    key: "ventr"
  },
  {
    title: "Zelle Activity",
    type: "UX",
    description:
      "Helping improve customer expectations through a new activity feed for Zelle.",
    image: "#",
    key: "zelle_activity",
    image: zelleBackgroundImage
  },
  {
    title: "This Portfolio",
    type: "UX, UI, Development (React)",
    description:
      "Is this too meta? Hear me out! I put this site on here becuase it represents me learning front end development and trying to bridge the gap between development and design.",
    // image: portfolioBackgroundImage,
    key: "portfolio"
  },
  {
    title: "Scribd Book Concierge",
    description: "This is a description",
    // image: scribdCBackgroundImage,
    key: "scribd_concierge"
  },
  {
    title: "Scribd Mobile Personalization",
    description: "This is a description",
    image: ScribdPBackgroundImage,
    key: "scribd_personalization"
  },
  {
    title: "Prototypes",
    description:
      "A collection of prototypes build in Framer Studio, Framer X and html/css/js.",
    image: prototypeBackgroundImage,
    key: "prototypes"
  },
  {
    title: "On Belay",
    description: "A native app to help build the climbing community.",
    image: onBelayBackgroundImage,
    key: "onBelay"
  },
  {
    title: "Kalita USA",
    description: "A responsive website to launch Kalita in the U.S. market",
    image: kalitaBackgroundImage,
    key: "kalita"
  }
];
