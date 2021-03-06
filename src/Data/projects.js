import ventrBackgroundImage from "./ventr/ventrSplash.png";
import zelleBackgroundImage from "./zelleActivity/splash.png";
import portfolioBackgroundImage from "./portfolio/Slice.png";
import scribdCBackgroundImage from "./scribdC/scribdCSplash.png";
import prototypeBackgroundImage from "./prototypes/concierge_chatbot.gif";
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
    image: portfolioBackgroundImage,
    key: "portfolio"
  },
  {
    title: "Scribd Book Concierge",
    description:
      "Leveraging curated editorial lists to help user's their next favorite book!",
    image: scribdCBackgroundImage,
    key: "scribd_concierge"
  },
  {
    title: "Scribd Mobile Personalization",
    description:
      "Scribd's mobile personalization was a few years old when I joined, it wasn't helping jumpstart user recommendations because it was based on and outdate and unscalabe category tree.",
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
