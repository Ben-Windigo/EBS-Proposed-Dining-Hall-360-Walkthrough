var APP_DATA = {
  "scenes": [
    {
      "id": "0-entry-lobby",
      "name": "Entry Lobby",
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
        "yaw": 1.2633498662513176,
        "pitch": -0.06576629823166869,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": 1.9152037442976297,
          "pitch": 0.2426903864581913,
          "rotation": 0.7853981633974483,
          "target": "1-meeting-room"
        },
        {
          "yaw": 0.7462787541875038,
          "pitch": 0.1622763409257182,
          "rotation": 0.7853981633974483,
          "target": "3-balcony-landing"
        },
        {
          "yaw": 0.3729514622457799,
          "pitch": 0.0961477339522947,
          "rotation": 0,
          "target": "2-upper-corridor"
        },
        {
          "yaw": -2.5097080929407483,
          "pitch": 0.09294903774418728,
          "rotation": 0,
          "target": "14-gibbs-deck"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-meeting-room",
      "name": "Meeting Room",
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
        "yaw": 2.0276349310124377,
        "pitch": 0.01879037092333924,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -0.6608107260552014,
          "pitch": 0.22038411191144291,
          "rotation": 0,
          "target": "0-entry-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-upper-corridor",
      "name": "Upper Corridor",
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
        "yaw": 2.8254289499787326,
        "pitch": 0.08831474333965161,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -2.599287486683016,
          "pitch": 0.0527742069631465,
          "rotation": 0,
          "target": "0-entry-lobby"
        },
        {
          "yaw": 1.981726166145581,
          "pitch": 0.2898685915110981,
          "rotation": 3.141592653589793,
          "target": "6-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-balcony-landing",
      "name": "Balcony Landing",
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
        "yaw": 1.2902010855127504,
        "pitch": 0.17099237540233858,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -2.1934899739314506,
          "pitch": -0.006437790157100665,
          "rotation": 6.283185307179586,
          "target": "0-entry-lobby"
        },
        {
          "yaw": -0.250826628440425,
          "pitch": -0.003369845257473969,
          "rotation": 6.283185307179586,
          "target": "2-upper-corridor"
        },
        {
          "yaw": 0.7076658378169647,
          "pitch": 0.2937742424465437,
          "rotation": 3.141592653589793,
          "target": "6-dining-room"
        },
        {
          "yaw": -2.612338056486088,
          "pitch": 0.3801534229965302,
          "rotation": 4.71238898038469,
          "target": "4-snack-area"
        },
        {
          "yaw": -2.747886120506161,
          "pitch": 0.08030307663547731,
          "rotation": 5.497787143782138,
          "target": "1-meeting-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-snack-area",
      "name": "Snack Area",
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
        "yaw": -2.837036698695565,
        "pitch": -0.05665856611083697,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -1.3127838237966607,
          "pitch": -0.07099893372117982,
          "rotation": 0.7853981633974483,
          "target": "3-balcony-landing"
        },
        {
          "yaw": -0.8524160898347866,
          "pitch": 0.06492581522736529,
          "rotation": 7.853981633974483,
          "target": "6-dining-room"
        },
        {
          "yaw": -3.01900494411057,
          "pitch": 0.05984809448999684,
          "rotation": 0,
          "target": "5-snack-area---open"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-snack-area---open",
      "name": "Snack Area - open",
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
        "yaw": -2.8291407452375488,
        "pitch": -0.05000970395562376,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -2.9933587707607785,
          "pitch": 0.1029594465570085,
          "rotation": 0,
          "target": "4-snack-area"
        },
        {
          "yaw": -1.3324103516978507,
          "pitch": -0.048843001276425824,
          "rotation": 0.7853981633974483,
          "target": "3-balcony-landing"
        },
        {
          "yaw": -0.8661428311755373,
          "pitch": 0.05712800720605138,
          "rotation": 1.5707963267948966,
          "target": "6-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-dining-room",
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
        "yaw": 1.5828793754625394,
        "pitch": 0.0507340014929909,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -1.5252306273203722,
          "pitch": 0.49068341474532673,
          "rotation": 3.141592653589793,
          "target": "9-dining-room---doors-closed"
        },
        {
          "yaw": -1.5203418909951232,
          "pitch": 0.17353042835373245,
          "rotation": 0,
          "target": "10-servery"
        },
        {
          "yaw": -3.0205474904149554,
          "pitch": -0.12697580507449224,
          "rotation": 0,
          "target": "3-balcony-landing"
        },
        {
          "yaw": 3.0697641624061633,
          "pitch": -0.005222388477744033,
          "rotation": 4.71238898038469,
          "target": "4-snack-area"
        },
        {
          "yaw": 1.5634523509405938,
          "pitch": 0.21498857797754667,
          "rotation": 0,
          "target": "7-dining-room---skipped-column"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-dining-room---skipped-column",
      "name": "Dining Room - skipped column",
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
        "yaw": 1.5801942535364084,
        "pitch": 0.044852529378978545,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": 1.5622779379652876,
          "pitch": 0.21200800490366234,
          "rotation": 0,
          "target": "6-dining-room"
        },
        {
          "yaw": -3.0126115720237365,
          "pitch": -0.13692452691028834,
          "rotation": 0,
          "target": "3-balcony-landing"
        },
        {
          "yaw": 3.064193187626472,
          "pitch": 0.03649097674452406,
          "rotation": 5.497787143782138,
          "target": "4-snack-area"
        },
        {
          "yaw": -1.5202777239523968,
          "pitch": 0.15590265931834324,
          "rotation": 0,
          "target": "10-servery"
        },
        {
          "yaw": -1.519523971885242,
          "pitch": 0.4531293165835457,
          "rotation": 3.141592653589793,
          "target": "9-dining-room---doors-closed"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-dining-room---open-doors",
      "name": "Dining Room - Open Doors",
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
        "yaw": -1.5385748636811574,
        "pitch": -0.062008224047005456,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -1.5230786308256974,
          "pitch": 0.17823975889124988,
          "rotation": 0,
          "target": "10-servery"
        },
        {
          "yaw": -1.52145272910502,
          "pitch": 0.4608921449429406,
          "rotation": 3.141592653589793,
          "target": "9-dining-room---doors-closed"
        },
        {
          "yaw": -3.030488848257116,
          "pitch": -0.1286473589681414,
          "rotation": 0,
          "target": "3-balcony-landing"
        },
        {
          "yaw": 3.0824115725642383,
          "pitch": -0.006297462368586082,
          "rotation": 4.71238898038469,
          "target": "4-snack-area"
        },
        {
          "yaw": 1.5736844470306117,
          "pitch": 0.15874410424884822,
          "rotation": 0,
          "target": "7-dining-room---skipped-column"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-dining-room---doors-closed",
      "name": "Dining Room - Doors Closed",
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
        "yaw": -1.5358897417550015,
        "pitch": -0.06200822404701967,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -1.5565640506424323,
          "pitch": 0.47062948944016014,
          "rotation": 3.141592653589793,
          "target": "8-dining-room---open-doors"
        },
        {
          "yaw": -1.5609841012348618,
          "pitch": 0.09702089082831122,
          "rotation": 0,
          "target": "10-servery"
        },
        {
          "yaw": -3.0200677272670937,
          "pitch": -0.1423380531571894,
          "rotation": 0,
          "target": "3-balcony-landing"
        },
        {
          "yaw": 3.0758667441699394,
          "pitch": -0.008963586570725823,
          "rotation": 4.71238898038469,
          "target": "4-snack-area"
        },
        {
          "yaw": 1.5613939498695917,
          "pitch": 0.21687194374847252,
          "rotation": 0,
          "target": "7-dining-room---skipped-column"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-servery",
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
        "yaw": -1.4915852299736336,
        "pitch": -0.015032296738660023,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -1.0571426235807628,
          "pitch": 0.09619662707521748,
          "rotation": 0.7853981633974483,
          "target": "12-kitchen---dish-wash-side"
        },
        {
          "yaw": -2.0829862683106217,
          "pitch": 0.08604140066571198,
          "rotation": 6.283185307179586,
          "target": "11-kitchen---prep-side"
        },
        {
          "yaw": -2.557052276854474,
          "pitch": 0.15223781043513185,
          "rotation": 5.497787143782138,
          "target": "13-kp-room"
        },
        {
          "yaw": 1.5931595234056495,
          "pitch": 0.17626888883110858,
          "rotation": 0,
          "target": "6-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-kitchen---prep-side",
      "name": "Kitchen - Prep Side",
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
        "yaw": 0.8260582850871678,
        "pitch": -0.004830980970385923,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": 0.5432818688258685,
          "pitch": 0.11712177030856097,
          "rotation": 0.7853981633974483,
          "target": "10-servery"
        },
        {
          "yaw": 0.07325007889079593,
          "pitch": 0.09773053494550332,
          "rotation": 5.497787143782138,
          "target": "12-kitchen---dish-wash-side"
        },
        {
          "yaw": 1.6556719503943915,
          "pitch": 0.12062422411036877,
          "rotation": 0,
          "target": "13-kp-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-kitchen---dish-wash-side",
      "name": "Kitchen - Dish Wash Side",
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
        "yaw": 2.167004560432977,
        "pitch": 0.011782878589830403,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": 2.037282750970146,
          "pitch": 0.09049194905078117,
          "rotation": 0,
          "target": "10-servery"
        },
        {
          "yaw": -3.104288568801282,
          "pitch": 0.14247830810341,
          "rotation": 5.497787143782138,
          "target": "11-kitchen---prep-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-kp-room",
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
        "yaw": -0.3248997530635709,
        "pitch": -0.013153259646333737,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -0.9159181206488789,
          "pitch": 0.11672564678062614,
          "rotation": 11.780972450961727,
          "target": "11-kitchen---prep-side"
        },
        {
          "yaw": -0.2801545637640199,
          "pitch": 0.13360665575317654,
          "rotation": 0.7853981633974483,
          "target": "10-servery"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-gibbs-deck",
      "name": "Gibbs Deck",
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
        "yaw": 0.930394747409288,
        "pitch": -0.030064593477334256,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": 0.852292591824229,
          "pitch": 0.1940233010040835,
          "rotation": 0,
          "target": "0-entry-lobby"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "EBS Proposed Dining Hall",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
