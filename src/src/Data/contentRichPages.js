import ventrSplash from "./ventr/ventrSplash.png";
import ventr1 from "./ventr/ventr1.png";
import ventr2 from "./ventr/ventr2.png";
import ventr3 from "./ventr/ventr3.png";
import ventr4 from "./ventr/ventr4.png";
import ventr5 from "./ventr/ventr5.png";

import zelleSplash from "./zelleActivity/splash.png";
import zelle1 from "./zelleActivity/zelle1.png";
import zelle2 from "./zelleActivity/zelle2.png";
import zelle3 from "./zelleActivity/zelle3.png";
import zelle4 from "./zelleActivity/zelle4.png";
import zelle5 from "./zelleActivity/zelle5.png";
import zelle6 from "./zelleActivity/zelle6.png";
import zelle7 from "./zelleActivity/zelle7.png";
import zelle8 from "./zelleActivity/zelle8.png";

// import portfolioSplash from "./portfolio/portfolioSplash.png";
// import portfolio1 from "./portfolio/portfolio1.png";
// import portfolio2 from "./portfolio/portfolio2.png";
// import portfolio3 from "./portfolio/portfolio3.png";
// import portfolio4 from "./portfolio/portfolio4.png";
// import portfolio5 from "./portfolio/portfolio5.png";

// import scribdCSplash from "./scribdC/scribdCSplash.png";
// import scribdC1 from "./scribdC/scribdC1.png";
// import scribdC2 from "./scribdC/scribdC2.png";
// import scribdC3 from "./scribdC/scribdC3.png";
// import scribdC4 from "./scribdC/scribdC4.png";
// import scribdC5 from "./scribdC/scribdC5.png";
// import scribdC6 from "./scribdC/scribdC6.png";

// import scribdPSplash from "./scribdP/scribdPSplash.png";
// import scribdP1 from "./scribdP/scribdP1.png";
// import scribdP2 from "./scribdP/scribdP2.png";
// import scribdP3 from "./scribdP/scribdP3.png";
// import scribdP4 from "./scribdP/scribdP4.png";
// import scribdP5 from "./scribdP/scribdP5.png";
// import scribdP6 from "./scribdP/scribdP6.png";

// import prototypeSplash from "./prototype/prototypeSplash.png";
// import prototype1 from "./prototype/prototype1.png";
// import prototype2 from "./prototype/prototype2.png";
// import prototype3 from "./prototype/prototype3.png";
// import prototype4 from "./prototype/prototype4.png";
// import prototype5 from "./prototype/prototype5.png";

import kalitaSplash from "./kalita/kalitaBackground.png";
// import kalita1 from "./kalita/kalita1.png";
// import kalita2 from "./kalita/kalita2.png";
// import kalita3 from "./kalita/kalita3.png";
// import kalita4 from "./kalita/kalita4.png";
// import kalita5 from "./kalita/kalita5.png";

import onBelaySplash from "./onBelay/onBelaySplash.png";
import onBelay1 from "./onBelay/onBelay1.png";
import onBelay2 from "./onBelay/onBelay2.png";
import onBelay3 from "./onBelay/onBelay3.png";
import onBelay4 from "./onBelay/onBelay4.png";
import onBelay5 from "./onBelay/onBelay5.png";

export const projectData = [
  {
    key: "ventr",
    title: "Ventr",
    description:
      "Ventr is a side project with Travis Crampton, all built in react native! Ventr is a way for folks who bike tour (extended bike camping trips) document, share and discover journies.",
    tools: "Figma & Framer",
    responsibilities: "UX, UI & Motion",
    bannerImage: ventrSplash,
    content: [
      {
        image: ventr1,
        title: "The Onboarding Flow",
        paragraph:
          "The goal of the onboarding sequence was to keep it as short as possible so the user can get into the app, while also reducing cognitive load by isolating 1-2 tasks per screen."
      },
      {
        image: ventr2,
        title: "Profile Tab",
        paragraph:
          "Profile tabs may be the least flashy part of most apps but the UX is important.  We used new material style forms so users always have a title on the form field."
      },
      {
        image: ventr3,
        title: "Create a New Trip",
        paragraph:
          "The fab on the home menu screen lets the user create a trip or add onto an existing trip.  The goal was to only ask for the essential information and guide the user into adding chapter (sections) into their trip."
      },
      {
        image: ventr4,
        title: "My Trips & Trip Detail Screen",
        paragraph:
          "Bikers can browse past, current and upcoming trips on their My Trips tab.  On the Trip page, Chapters are show in chronological order with a few key snippets of information, the date, trip length and reading stats."
      },
      {
        image: ventr5,
        title: "The First Iteration",
        paragraph:
          "Ventr is all built in react native and launching late 2018.  We learned a lot from the MVP and will be continuing to update and improve the product!"
      }
    ]
  },
  {
    key: "zelle_activity",
    title: "Zelle Activity",
    description: "This is a description",
    tools: "UX",
    responsibilities: "UX, UI (paired with another UI designer & motion",
    bannerImage: zelleSplash,
    content: [
      {
        image: zelle1,
        title: "Early Ideation",
        paragraph:
          "Early sketches were focused on what information was missing from the first iteration of the activity feed, and what was not communicated well.  I used customer feedback to help drive the design process, with a goal of setting correct expectations for payments and timelines.  We also need to update to accomodate more screen sizes."
      },
      {
        image: zelle2,
        title: "User Journey",
        paragraph:
          "A big part of setting better expectations was mapping out the full user journey for activity.  There were for types of users, Requestors (sending the request), Responders (responding to requst), Sender (sending a payment) and Recepient (reciving a payment), each with their own unique needs."
      },
      {
        image: zelle3,
        title: "Mid Fidelity Wireframes",
        paragraph:
          "I explored a lot of options for presenting a large amount of information on one screen!  My mid fidelity iterations focused on finding a content hierarchy that displayed essential information while not turning into a cluttered list view."
      },
      {
        image: zelle4,
        title: "Final List view",
        paragraph:
          "The list view was split into two categories, pending and completed.  Each cell lets the user know what type of payment it is and if an action is needed!  The amounts are color coded to reflect money entering or leaving."
      },
      {
        image: zelle5,
        title: "Final Detail View",
        paragraph:
          "The user can also move into a detail view from the list view.  This view includes new functionality, such as viewing the other person's token (phone or email they sent money from), viewing details from Zelle about the progress of a payment, and a transaction ID to quickly ID a payment and cut down on customer service call times."
      },
      {
        image: zelle6,
        title: "A Modular Design",
        paragraph:
          "The activity feed was such a large section of the app (over 500 iOS screens) that I created a mini design system for the activity list view and detail view.  The system breaks the design into reusable components that are shared between engineers and designers. "
      },
      {
        image: zelle7,
        title: "Component & Spec Example",
        paragraph:
          "Here you can see an example of one of the components inside of the larger detail view, the chat bubbles.  This screen serves as a guide for front-end engineers to build the bubbles and deal with edge cases.  It includes zeplin spec links for both iOS and Android.  I also wrote the acceptance criteria alongside PM's."
      },
      {
        image: zelle8,
        title: "Flexible for future business needs",
        paragraph:
          "The design pattern also took into account future business goals for Zelle, including being adaptable to business to consumer disbursements and consumers paying businesses directly through Zelle."
      },
      {
        image: null,
        title: "Metrics",
        paragraph: "yes, it did well"
      }
    ]
  },
  {
    key: "portfolio",
    title: "This portfolio!",
    description:
      "Is this too meta? Hear me out! I put this site on here becuase it represents me learning front end development and trying to bridge the gap between development and design.",
    tools: "React, css, Figma, ",
    resonsibilities: "Development & Design :)",
    image: "../ass",
    content: [
      {
        image: "#",
        title: "Early Ideation",
        paragraph: "text"
      },
      {
        image: "#",
        title: "Early Ideation",
        paragraph: "text"
      },
      {
        image: "#",
        title: "Early Ideation",
        paragraph: "text"
      },
      {
        image: "#",
        title: "Early Ideation",
        paragraph: "text"
      },
      {
        image: "#",
        title: "Early Ideation",
        paragraph: "text"
      }
    ]
  },
  {
    key: "scribd_concierge",
    title: "Scribd Book Concierge",
    description: "This is a description",
    tools: "Sketch, Framer",
    resonsibilities: "UX, UI (with UI help from a teammate)",
    //image: scribdCSplash,
    content: [
      {
        image: "#",
        title: "Early Ideation",
        paragraph: "text"
      },
      {
        image: "#",
        title: "Early Ideation",
        paragraph: "text"
      },
      {
        image: "#",
        title: "Early Ideation",
        paragraph: "text"
      },
      {
        image: "#",
        title: "Early Ideation",
        paragraph: "text"
      },
      {
        image: "#",
        title: "Early Ideation",
        paragraph: "text"
      },
      {
        image: "#",
        title: "Early Ideation",
        paragraph: "text"
      }
    ]
  },
  {
    key: "scribd_personalization",
    title: "Scribd Mobile Personalization",
    description: "This is a description",
    tools: "Sketch",
    resonsibilities: "UX & UI",
    //image: scribdPSplash,
    content: [
      {
        image: "#",
        title: "Early Ideation",
        paragraph: "text"
      },
      {
        image: "#",
        title: "Early Ideation",
        paragraph: "text"
      },
      {
        image: "#",
        title: "Early Ideation",
        paragraph: "text"
      },
      {
        image: "#",
        title: "Early Ideation",
        paragraph: "text"
      },
      {
        image: "#",
        title: "Early Ideation",
        paragraph: "text"
      },
      {
        image: "#",
        title: "Early Ideation",
        paragraph: "text"
      }
    ]
  },
  {
    key: "prototypes",
    title: "Prototypes",
    description:
      "This past year I've been learning front end develepment to better understand, communicate and contribute to the development process in my work. I'm also learning modern css and js so that I can create interactive and high fidelity prototypes quickly.  I've found prototypes often communicate your idea better to stakeholders, help with user testing and are much quicker and cheaper if you fail than building a full feature!",
    tools: "Framer Studio, Framer X, html/css/js",
    resonsibilities: "UX, UI & Illustrations",
    image: "../ass",
    content: [
      {
        image: "#",
        title: "Early Ideation",
        paragraph: "text"
      },
      {
        image: "#",
        title: "Early Ideation",
        paragraph: "text"
      },
      {
        image: "#",
        title: "Early Ideation",
        paragraph: "text"
      },
      {
        image: "#",
        title: "Early Ideation",
        paragraph: "text"
      },
      {
        image: "#",
        title: "Early Ideation",
        paragraph: "text"
      },
      {
        image: "#",
        title: "Early Ideation",
        paragraph: "text"
      }
    ]
  },
  {
    key: "kalita",
    title: "Kalita USA",
    description:
      "Kalita is a high-end Japanese home goods company that was well established in the wholesale market but losing out on great SEO and industry recognition by not having a direct to consumer store. We constantly received emails from customers asking to purchase products directly to make sure they were buying authentic products. We also needed a way to introduce a high-end line to the United States to build brand value.",
    tools: "Sketch, InVision, Lucidchart",
    resonsibilities: "UX, UI & Illustrations",
    image: kalitaSplash,
    content: [
      {
        image: "#",
        title: "Early Ideation",
        paragraph:
          "I worked with stakeholders from our parent company to create a framework for a modern highend ecommerce site, that was fully responsive. The site needed to mix products with large education blocks that would help provide a value add and drive engagement."
      },
      {
        image: "#",
        title: "Site Map",
        paragraph:
          "This was our first consumer-facing website, so I worked with stakeholders to make sure we covered all the pages we needed to effectively communicate with the customer and still fulfill wholesale needs. "
      },
      {
        image: "#",
        title: "Mid Fidelity Wireframes",
        paragraph:
          "TI made many mid fidelity iterations to explore the relationship between educational content and shopable products, both for desktop and mobile. I used these to explain responsive behavior and interactions with engineers, ensuring that they met techincal constraints."
      },
      {
        image: "#",
        title: "Illustrations",
        paragraph:
          "I used illustrations to create a sense of playfulness but also to stand in as icons for a product line that comes in many different finshes."
      },
      {
        image: "#",
        title: "Responsive Desktop",
        paragraph:
          "The final product was a responsive website with a desktop focus on exclusive content because there are so many e-commerce site for speciality coffee.  We featured our product lines (Tsubame) that couldn't be found elsewhere and also featured educational content from the owners of the company."
      },
      {
        image: "#",
        title: "Responsive Mobile",
        paragraph:
          "The site was optimized for a mobile experience since this was an MVP before putting time and money into an iOS app.  The mobile site uses the illustrations as icons for our bestselling product lines as a tab bar instead of hiding them away in a hamburger menu"
      },
      {
        image: "#",
        title: "Metrics",
        paragraph:
          "The site was profitable within the first month!  We met our internal goal of explaining the value of our high end Tsubame line, leading to a 125% increase in sales of these products."
      }
    ]
  },
  {
    key: "onBelay",
    title: "On Belay",
    description:
      "I’m passionate about rock climbing but the process of finding a climbing partner can be difficult.  The popularity of climbing has exploded in the past few years, but the most common way of finding a climbing partner is announcing that you're looking for a partner over the loudspeaker at the gym.  I wanted a better way for climbers to find a partner that works for their skill level and their schedule! My project became On Belay, a simple and intuitive iOS app that focuses on helping climbers find a partner, explore the community at their local gym and take an outdoor trip",
    Tools: "Sketch, InVision, Lucidchart, Flinto",
    Responsibilities: "UX, UI, and motion.",
    bannerImage: onBelaySplash,
    content: [
      {
        image: onBelay1,
        title: "Research & Affinity Map",
        paragraph:
          "I did interviews at indoor climbing gyms and outdoor climbing areas in Northern California.  The findings confirmed my hypothesis that climbers have difficulties finding a suitable partner and also gave me the insight that climbers wanted a way to meet in a group setting."
      },
      {
        image: onBelay2,
        title: "Competitive Analysis",
        paragraph:
          "On Belay fills a gap in the marketplace. The current apps that cater towards climbers are either very rudimentary or they try to lump climbing into a broad outdoor base."
      },
      {
        image: onBelay3,
        title: "Site Map",
        paragraph:
          "A site map helped identify use cases & edge cases and helped me communicate better about the flows and workload with a developer."
      },
      {
        image: onBelay4,
        title: "Wireframes (adjusted after more testing)",
        paragraph:
          "My early sketches focused on a simple app that features designs that users see in dating or travel apps.  I did user testing again with my mid fidelity wireframes. I found that users were confused by the hamburger menu since there were only three main areas, so I pivoted to a bottom tab bar."
      },
      {
        image: onBelay5,
        title: "The Final Designs",
        paragraph:
          "The final design uses cards to standardize large amounts of data that are coming from different sources (climbing gyms, guides, etc) and a tab bar to let users quickly switch between different options to connect with the climbing community."
      }
    ]
  }
];
