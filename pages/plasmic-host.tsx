import * as React from 'react';
import { PlasmicCanvasHost, registerComponent, registerGlobalContext } from '@plasmicapp/react-web/lib/host';

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// registerComponent(...)

import CustomSwitch from "../components/CustomSwitch"; // Adjust the import path as necessary

registerComponent(CustomSwitch, {
  name: "CustomSwitch",
  isDefaultExport: true,
  props: {
    backgroundColor: "string",
    activeColor: "string",
    inactiveColor: "string",
    activeThumbColor: "string",
defaultChecked: "boolean",
    onActivate: {
      type: "eventHandler",
      argTypes: []
    },
    onDeactivate: {
      type: "eventHandler",
      argTypes: []
    }
  },
  importPath: './components/CustomSwitch'
});



import NavigationMenuComponent from "../components/react-navigation-menu";

registerComponent(NavigationMenuComponent, {
isDefaultExport: true,
  name: "NavigationMenuComponent",
  props: {
    className: "string",
classNameList: "string",
children: "slot",
children2: "slot",
children3: "slot",
},
importPath: './components/react-navigation-menu',
});

import CustomMarquee from "../components/Marquee";

registerComponent(CustomMarquee, {
isDefaultExport: true,
  name: "Custom Marquee",
  props: {
    className: "string",
    style: "object",
    autoFill: "boolean",
    play: "boolean",
    pauseOnHover: "boolean",
    pauseOnClick: "boolean",
    direction: {
      type: "choice",
      options: ["left", "right", "up", "down"]
    },
    speed: "number",
    delay: "number",
    loop: "number",
    gradient: "boolean",
    gradientColor: "string",
    gradientWidth: {
      type: "number",
      displayName: "Gradient Width",
      description: "Width of the gradient on either side"
    },
    onFinish: {
      type: "eventHandler",
      argTypes: []
    },
    onCycleComplete: {
      type: "eventHandler",
      argTypes: []
    },
    onMount: {
      type: "eventHandler",
      argTypes: []
    },
    children: {
      type: "slot",
      defaultValue: [
        {
          type: "text",
          value: "I can be a React component, multiple React components, or just some text."
        }
      ]
    }
  },
  importPath: "./components/Marquee"
});


import SkeletonWrapper from '../components/SkeletonWrapper';

registerComponent(SkeletonWrapper, {
isDefaultExport: true,
  name: 'SkeletonWrapper',
isAttachment: true,
  props: {
    isLoading: 'boolean',
    width: 'string',
    height: 'string',
    count: 'number',
    circle: 'boolean',
    className: 'string',
    children: 'slot',
baseColor: {
type: 'string'},
highlightColor: 'string',
borderRadius: 'number'
  },
  importPath: './components/SkeletonWrapper'
});


import swiperJS from "../components/swiper";

registerComponent(swiperJS, {
isDefaultExport: true,
  name: "SwiperJS",
  props: {
children: "slot",
    className: "string",
},
importPath: './components/swiper',
});

import worldMap from "../components/worldMap";

registerComponent(worldMap, {
isDefaultExport: true,
  name: "worldMap",
  props: {
    className: "string",
},
importPath: './components/worldMap',
});

import FramerMotion from "../components/FramerMotion";

registerComponent(FramerMotion, {
isDefaultExport: true,
isAttachment: true,
  name: "Framer Motion",
  props: {
children: 'slot',
  initial: "object",
  animate: "object",
  transition: "object",
  whileHover: "object",
  whileTap: "object",
delay: "number",
  className: "string",
},
importPath: './components/FramerMotion',
});

import NumberTickerComponent from "../components/number-ticker";

registerComponent(NumberTickerComponent, {
isDefaultExport: true,
  name: "Number Ticker",
  props: {
  value: "number",
delay: "number",
  direction: "string",
decimals: "number",
  className: "string",
},
importPath: './components/number-ticker',

});
import ScrollProvider from "../components/ScrollContext";

registerGlobalContext(ScrollProvider, {
isDefaultExport: true,
  name: "ScrollProvider",
  providesData: true,
  props: {},
importPath: './components/ScrollContext',

});

import Globe from '../components/Globe';

registerComponent(Globe, {
  name: 'Globe',
  props: {
    className: "string",
    width: "number",
    height: "number",
    devicePixelRatio: "number",
    dark: "number",
    opacity: {
      type: 'number',
      control: 'slider',
      min: 0,
      max: 1,
    },
    diffuse: "number",
    mapSamples: {
      type: 'number',
      control: 'slider',
      min: 0,
      max: 99999,
    },
    mapBrightness: "number",
    baseColor: "string", // Assuming you will convert this prop to an array [r, g, b] format in your component
    markerColor: "string", // Assuming same as baseColor
    glowColor: "string", // Assuming same as baseColor
    markers: "object", // This should be detailed according to how you handle marker objects
    offset: "object", 

  },
  importPath: './components/Globe',
  isDefaultExport: true,
});	

import GlobePan from '../components/Globe-Pan';

registerComponent(GlobePan, {
  name: 'Globe-Pan',
  props: {
    className: "string",
    width: "number",
    height: "number",
    devicePixelRatio: "number",
    dark: "number",
    opacity: {
      type: 'number',
      control: 'slider',
      min: 0,
      max: 1,
    },
    diffuse: "number",
    mapSamples: {
      type: 'number',
      control: 'slider',
      min: 0,
      max: 99999,
    },
    mapBrightness: "number",
    baseColor: "string", // Assuming you will convert this prop to an array [r, g, b] format in your component
    markerColor: "string", // Assuming same as baseColor
    glowColor: "string", // Assuming same as baseColor
    markers: "object", // This should be detailed according to how you handle marker objects
    offset: "object",
    canvasStyle: "object",
    containerStyle: "object",
    currentLocation: {
      type: "array",
      itemType: {
        type: "object",
        fields: {
          lat: "number",
          lng: "number",
        },
      },
    }, // New prop for panning to a location, should be an array of objects with lat and lng
  },
  importPath: './components/Globe-Pan',
  isDefaultExport: true,
});



export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}
