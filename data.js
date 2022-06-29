var APP_DATA = {
  "scenes": [
    {
      "id": "0-servery",
      "name": "Servery",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.4738152305115708,
        "pitch": -0.08399374169587048,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": 1.5925577837647094,
          "pitch": 0.14760493885056825,
          "rotation": 6.283185307179586,
          "target": "1-dining-room"
        },
        {
          "yaw": -1.0957383095149087,
          "pitch": 0.09136860296228022,
          "rotation": 0.7853981633974483,
          "target": "2-kitchen---dish-wash-side"
        },
        {
          "yaw": -2.5654447213773146,
          "pitch": 0.10679292842236165,
          "rotation": 10.995574287564278,
          "target": "4-kp-room"
        },
        {
          "yaw": -2.0207298892284697,
          "pitch": 0.07439213064902006,
          "rotation": 12.566370614359176,
          "target": "3-kitchen---prep-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-dining-room",
      "name": "Dining Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.5573707171641793,
        "pitch": -0.0826776320626692,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -1.5289455438026298,
          "pitch": 0.1400074832097573,
          "rotation": 0,
          "target": "0-servery"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen---dish-wash-side",
      "name": "Kitchen - Dish wash side",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.8299105926679022,
        "pitch": -0.007516148369337117,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": 1.9607057628719557,
          "pitch": 0.09663625943596976,
          "rotation": 0.7853981633974483,
          "target": "0-servery"
        },
        {
          "yaw": -3.0917178132078824,
          "pitch": 0.07237833290878015,
          "rotation": 5.497787143782138,
          "target": "3-kitchen---prep-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kitchen---prep-side",
      "name": "Kitchen - Prep side",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.0244749951991885,
          "pitch": 0.03447697951826889,
          "rotation": 5.497787143782138,
          "target": "2-kitchen---dish-wash-side"
        },
        {
          "yaw": 0.5205075003333519,
          "pitch": 0.10485104574001447,
          "rotation": 0.7853981633974483,
          "target": "0-servery"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kp-room",
      "name": "KP Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.3530935332880816,
        "pitch": -0.05637111276999107,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -0.9512745413880168,
          "pitch": 0.09427688961373448,
          "rotation": 5.497787143782138,
          "target": "3-kitchen---prep-side"
        },
        {
          "yaw": -0.23410553266354128,
          "pitch": 0.2122977854335435,
          "rotation": 0.7853981633974483,
          "target": "0-servery"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Dining Hall - Kitchen",
  "settings": {
    "mouseViewMode": "qtvr",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
