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
        "yaw": 0.9411352351138813,
        "pitch": -0.005637111277000173,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": 1.9141614556300297,
          "pitch": 0.21522961643990968,
          "rotation": 0,
          "target": "1-meeting-room"
        },
        {
          "yaw": 0.7494992560588702,
          "pitch": 0.14446374660621508,
          "rotation": 0.7853981633974483,
          "target": "3-balcony-landing"
        },
        {
          "yaw": 0.4132215783375237,
          "pitch": 0.07790590946448361,
          "rotation": 0,
          "target": "2-upper-corridor"
        },
        {
          "yaw": -2.6392930140705317,
          "pitch": 0.04263467133931442,
          "rotation": 0,
          "target": "16-gibbs-deck"
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
        "yaw": 2.071571566020971,
        "pitch": 0.06764533532399142,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -0.5835990874045116,
          "pitch": 0.17061071434710406,
          "rotation": 11.780972450961727,
          "target": "0-entry-lobby"
        },
        {
          "yaw": 1.528029878333169,
          "pitch": 0.1559110331893887,
          "rotation": 0,
          "target": "18-upper-level-outdoor-terrace"
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
        "yaw": -2.3577590183659574,
        "pitch": -0.07516148369334452,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -2.6032266591603133,
          "pitch": 0.07005703008008979,
          "rotation": 0,
          "target": "0-entry-lobby"
        },
        {
          "yaw": -2.6640696139210487,
          "pitch": 0.26781669265152885,
          "rotation": 4.71238898038469,
          "target": "7-dining-room"
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
        "yaw": 1.1586301111316466,
        "pitch": 0.21608926561831332,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -1.695541409269964,
          "pitch": 0.17942269463004124,
          "rotation": 5.497787143782138,
          "target": "0-entry-lobby"
        },
        {
          "yaw": -1.0911992882423363,
          "pitch": 0.2101131717180209,
          "rotation": 0.7853981633974483,
          "target": "2-upper-corridor"
        },
        {
          "yaw": -2.5817923902229047,
          "pitch": 0.36094287583360085,
          "rotation": 17.27875959474387,
          "target": "4-snack-area"
        },
        {
          "yaw": 0.6085650685916484,
          "pitch": 0.25262211606692375,
          "rotation": 9.42477796076938,
          "target": "7-dining-room"
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
        "yaw": 2.329418639679364,
        "pitch": 0.08455666915497062,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -2.9932829920722117,
          "pitch": 0.07082394674351278,
          "rotation": 0,
          "target": "5-teaching-kitchen---open"
        },
        {
          "yaw": 2.1846776299931507,
          "pitch": 0.15608269002163055,
          "rotation": 0,
          "target": "22-sports-center-access"
        },
        {
          "yaw": -0.8919551422772773,
          "pitch": 0.04340882767598231,
          "rotation": 1.5707963267948966,
          "target": "7-dining-room"
        },
        {
          "yaw": -1.1247419706310922,
          "pitch": -0.20983623632829662,
          "rotation": 7.0685834705770345,
          "target": "3-balcony-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-teaching-kitchen---open",
      "name": "Teaching Kitchen - open",
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
        "yaw": -2.695145233848063,
        "pitch": 0.0018790370923298383,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -2.988485481517465,
          "pitch": 0.0929528303699847,
          "rotation": 0,
          "target": "6-teaching-kitchen---closed"
        },
        {
          "yaw": 2.182242270204558,
          "pitch": 0.13753241588975484,
          "rotation": 0,
          "target": "22-sports-center-access"
        },
        {
          "yaw": -0.8832565631406837,
          "pitch": 0.049771732241527644,
          "rotation": 1.5707963267948966,
          "target": "7-dining-room"
        },
        {
          "yaw": -1.131880999328036,
          "pitch": -0.181408133038234,
          "rotation": 7.0685834705770345,
          "target": "3-balcony-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-teaching-kitchen---closed",
      "name": "Teaching Kitchen - closed",
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
        "yaw": -2.6959656877699363,
        "pitch": 0.007082524424944836,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -2.991479849236649,
          "pitch": 0.09576691305835894,
          "rotation": 0,
          "target": "5-teaching-kitchen---open"
        },
        {
          "yaw": 2.1838362936883158,
          "pitch": 0.15857699585183127,
          "rotation": 0,
          "target": "22-sports-center-access"
        },
        {
          "yaw": -1.1205589810297951,
          "pitch": -0.20485284229403788,
          "rotation": 0.7853981633974483,
          "target": "3-balcony-landing"
        },
        {
          "yaw": -0.8822867856113774,
          "pitch": 0.04704301525140053,
          "rotation": 1.5707963267948966,
          "target": "7-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-dining-room",
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
        "yaw": -2.1199037606915834,
        "pitch": -0.022727975518861854,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": 2.0414101487168868,
          "pitch": 0.30894830317731525,
          "rotation": 0,
          "target": "8-dining-room---not-skipped-column"
        },
        {
          "yaw": 0.41341605012956606,
          "pitch": 0.05749644889807115,
          "rotation": 0,
          "target": "23-south-terrace"
        },
        {
          "yaw": -1.2118551402068185,
          "pitch": 0.31157268456174947,
          "rotation": 0,
          "target": "12-servery-doors-closed"
        },
        {
          "yaw": -1.1631230094436127,
          "pitch": 0.08515603673210848,
          "rotation": 0,
          "target": "10-servery"
        },
        {
          "yaw": -2.522163745224317,
          "pitch": -0.142129868403142,
          "rotation": 0.7853981633974483,
          "target": "3-balcony-landing"
        },
        {
          "yaw": -2.7298691807771505,
          "pitch": -0.009519593745025645,
          "rotation": 4.71238898038469,
          "target": "4-snack-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-dining-room---not-skipped-column",
      "name": "Dining Room - not skipped column",
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
        "yaw": 1.9990732740150534,
        "pitch": -0.05073400149300511,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": 2.042682741729295,
          "pitch": 0.3080056537710121,
          "rotation": 0,
          "target": "9-dining-room---skipped-column"
        },
        {
          "yaw": -2.727803739292103,
          "pitch": 0.0024863715345553317,
          "rotation": 4.71238898038469,
          "target": "4-snack-area"
        },
        {
          "yaw": -2.5339862294831015,
          "pitch": -0.1396689771427173,
          "rotation": 0.7853981633974483,
          "target": "3-balcony-landing"
        },
        {
          "yaw": -1.1990123226691782,
          "pitch": 0.30593070565578273,
          "rotation": 0,
          "target": "11-servery-doors-open"
        },
        {
          "yaw": 0.408160822419978,
          "pitch": 0.05004757230393864,
          "rotation": 0,
          "target": "23-south-terrace"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-dining-room---skipped-column",
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
        "yaw": 2.0005652534134466,
        "pitch": -0.047185052100417124,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": 2.0442205597444802,
          "pitch": 0.3134935619156245,
          "rotation": 0,
          "target": "8-dining-room---not-skipped-column"
        },
        {
          "yaw": -1.1820216425023098,
          "pitch": 0.08833581344489971,
          "rotation": 0,
          "target": "10-servery"
        },
        {
          "yaw": -1.2130119168975533,
          "pitch": 0.31216235670394354,
          "rotation": 0,
          "target": "7-dining-room"
        },
        {
          "yaw": 0.40480034266511566,
          "pitch": 0.05196916712939803,
          "rotation": 0,
          "target": "23-south-terrace"
        },
        {
          "yaw": -2.7340659654178854,
          "pitch": 0.0011209921617911789,
          "rotation": 4.71238898038469,
          "target": "4-snack-area"
        },
        {
          "yaw": -2.534365049715902,
          "pitch": -0.14380267210214015,
          "rotation": 0.7853981633974483,
          "target": "3-balcony-landing"
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
        "yaw": -1.5009831567151295,
        "pitch": -0.12213741100165976,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -2.35811882879144,
          "pitch": 0.13819382004973235,
          "rotation": 6.283185307179586,
          "target": "13-kitchen---prep-side"
        },
        {
          "yaw": -0.6585172859003929,
          "pitch": 0.14724492153717428,
          "rotation": 0,
          "target": "14-kitchen---dish-wash-side"
        },
        {
          "yaw": -2.5702780240211602,
          "pitch": 0.14358815171160444,
          "rotation": 5.497787143782138,
          "target": "15-kp-room"
        },
        {
          "yaw": 1.6075121842945723,
          "pitch": 0.1583109192428509,
          "rotation": 0,
          "target": "7-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-servery-doors-open",
      "name": "Servery Doors Open",
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
        "yaw": -1.1143255993502308,
        "pitch": -0.06388726113932819,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -1.2052241032650794,
          "pitch": 0.31132110976077243,
          "rotation": 0,
          "target": "12-servery-doors-closed"
        },
        {
          "yaw": -1.1911987314111965,
          "pitch": 0.10730169437047898,
          "rotation": 0,
          "target": "10-servery"
        },
        {
          "yaw": 0.4049961708102039,
          "pitch": 0.05472233913437208,
          "rotation": 0,
          "target": "23-south-terrace"
        },
        {
          "yaw": -2.7318105273353996,
          "pitch": -0.0027441887404293652,
          "rotation": 4.71238898038469,
          "target": "4-snack-area"
        },
        {
          "yaw": -2.536453749279609,
          "pitch": -0.14975125867841754,
          "rotation": 0.7853981633974483,
          "target": "3-balcony-landing"
        },
        {
          "yaw": 2.0416999788639565,
          "pitch": 0.3164800263176488,
          "rotation": 0,
          "target": "8-dining-room---not-skipped-column"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-servery-doors-closed",
      "name": "Servery Doors Closed",
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
        "yaw": -1.1129830383871688,
        "pitch": -0.06388726113930687,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -1.2038811178660485,
          "pitch": 0.31132076490756333,
          "rotation": 0,
          "target": "11-servery-doors-open"
        },
        {
          "yaw": 2.0385469673053693,
          "pitch": 0.3155495736957583,
          "rotation": 0,
          "target": "9-dining-room---skipped-column"
        },
        {
          "yaw": 0.40792399554028336,
          "pitch": 0.05264352701820485,
          "rotation": 0,
          "target": "23-south-terrace"
        },
        {
          "yaw": -2.7310385325575304,
          "pitch": -0.0008487799486722736,
          "rotation": 4.71238898038469,
          "target": "4-snack-area"
        },
        {
          "yaw": -2.5315116707820167,
          "pitch": -0.14442245882116822,
          "rotation": 0.7853981633974483,
          "target": "3-balcony-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-kitchen---prep-side",
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
        "yaw": 0.5893842627888652,
        "pitch": 0.04697592730833122,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": 1.486134698301159,
          "pitch": 0.2432727196575346,
          "rotation": 0.7853981633974483,
          "target": "15-kp-room"
        },
        {
          "yaw": -0.1429570405790166,
          "pitch": 0.05313280575278512,
          "rotation": 0,
          "target": "14-kitchen---dish-wash-side"
        },
        {
          "yaw": 0.7448129625773117,
          "pitch": 0.19023360293792102,
          "rotation": 0.7853981633974483,
          "target": "10-servery"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-kitchen---dish-wash-side",
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
        "yaw": 2.1736737735079625,
        "pitch": 0.06388726113933885,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": 1.6950605444655498,
          "pitch": 0.16823116230506585,
          "rotation": 0,
          "target": "10-servery"
        },
        {
          "yaw": 3.1171063988618926,
          "pitch": 0.10029379222858026,
          "rotation": 12.566370614359176,
          "target": "13-kitchen---prep-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-kp-room",
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
        "yaw": -0.3208720701743477,
        "pitch": -0.03758074184666782,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -0.26803467931297753,
          "pitch": 0.18279613925401605,
          "rotation": 0.7853981633974483,
          "target": "10-servery"
        },
        {
          "yaw": -0.9279926363028359,
          "pitch": 0.13503420571404945,
          "rotation": 11.780972450961727,
          "target": "13-kitchen---prep-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-gibbs-deck",
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
        "yaw": 0.7733151147298063,
        "pitch": 0.01127422255399857,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": 0.8422276805894615,
          "pitch": 0.2376908869552885,
          "rotation": 18.06415775814132,
          "target": "0-entry-lobby"
        },
        {
          "yaw": 1.368667120115834,
          "pitch": 0.15878719949643383,
          "rotation": 0,
          "target": "18-upper-level-outdoor-terrace"
        },
        {
          "yaw": 0.6688160084651518,
          "pitch": 0.4141474781453027,
          "rotation": 3.141592653589793,
          "target": "17-gibbs-deck---existing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-gibbs-deck---existing",
      "name": "Gibbs Deck - existing",
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
        "yaw": 0.7760002366559497,
        "pitch": 0.011274222553996793,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": 0.6715023604913153,
          "pitch": 0.4141470096383646,
          "rotation": 3.141592653589793,
          "target": "16-gibbs-deck"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-upper-level-outdoor-terrace",
      "name": "Upper Level Outdoor Terrace",
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
        "yaw": -1.7708379102926806,
        "pitch": -0.020669408015685065,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -2.3150352523619233,
          "pitch": 0.06379242612444891,
          "rotation": 0,
          "target": "16-gibbs-deck"
        },
        {
          "yaw": -1.7133073948764004,
          "pitch": 0.10724257013761829,
          "rotation": 6.283185307179586,
          "target": "1-meeting-room"
        },
        {
          "yaw": 0.11506256703166606,
          "pitch": 0.21810154532067827,
          "rotation": 0,
          "target": "20-green-roof-option"
        },
        {
          "yaw": -1.968148758672367,
          "pitch": 0.46112640598541255,
          "rotation": 3.141592653589793,
          "target": "19-upper-level-outdoor-terrace---existing"
        },
        {
          "yaw": 2.485932194640764,
          "pitch": 0.44730174795424915,
          "rotation": 3.141592653589793,
          "target": "22-sports-center-access"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-upper-level-outdoor-terrace---existing",
      "name": "Upper Level Outdoor Terrace - existing",
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
        "yaw": -1.7721804712557798,
        "pitch": -0.0206694080156673,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -1.971603216668008,
          "pitch": 0.46095952381523553,
          "rotation": 3.141592653589793,
          "target": "18-upper-level-outdoor-terrace"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-green-roof-option",
      "name": "Green Roof Option",
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
          "yaw": 0.07535682889852424,
          "pitch": 0.2179113149765648,
          "rotation": 0,
          "target": "21-non-green-roof-option"
        },
        {
          "yaw": -1.708482931788799,
          "pitch": 0.10537596163614538,
          "rotation": 0,
          "target": "1-meeting-room"
        },
        {
          "yaw": -2.3144809199123575,
          "pitch": 0.05716081141617835,
          "rotation": 0,
          "target": "16-gibbs-deck"
        },
        {
          "yaw": -1.9708874022737692,
          "pitch": 0.46448978619009296,
          "rotation": 3.141592653589793,
          "target": "19-upper-level-outdoor-terrace---existing"
        },
        {
          "yaw": 2.5543575411826644,
          "pitch": 0.46670740112728915,
          "rotation": 3.141592653589793,
          "target": "22-sports-center-access"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-non-green-roof-option",
      "name": "Non-Green Roof Option",
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
          "yaw": 0.07535708078246728,
          "pitch": 0.21791105600339655,
          "rotation": 0,
          "target": "20-green-roof-option"
        },
        {
          "yaw": -1.7004071248929282,
          "pitch": 0.10857530983905583,
          "rotation": 0,
          "target": "4-snack-area"
        },
        {
          "yaw": -1.9067104746087757,
          "pitch": 0.4671735341194321,
          "rotation": 9.42477796076938,
          "target": "19-upper-level-outdoor-terrace---existing"
        },
        {
          "yaw": -2.284071928364291,
          "pitch": 0.05762701882358634,
          "rotation": 0,
          "target": "16-gibbs-deck"
        },
        {
          "yaw": 2.4986032700111034,
          "pitch": 0.48507757816830654,
          "rotation": 9.42477796076938,
          "target": "22-sports-center-access"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-sports-center-access",
      "name": "Sports Center Access",
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
        "yaw": -0.7209552371699672,
        "pitch": -0.26494423001898504,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -1.5101100827036582,
          "pitch": -0.11871542069257579,
          "rotation": 5.497787143782138,
          "target": "18-upper-level-outdoor-terrace"
        },
        {
          "yaw": -0.9748462831106046,
          "pitch": -0.08559862293837739,
          "rotation": 0,
          "target": "4-snack-area"
        },
        {
          "yaw": -0.011441988601916364,
          "pitch": 0.00806585905544921,
          "rotation": 0,
          "target": "23-south-terrace"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-south-terrace",
      "name": "South Terrace",
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
        "yaw": -3.0126544139908127,
        "pitch": -0.09583089170900472,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -2.7420475861250324,
          "pitch": 0.03949493072243371,
          "rotation": 0,
          "target": "7-dining-room"
        },
        {
          "yaw": 3.0255138183358596,
          "pitch": 0.07760247302540613,
          "rotation": 5.497787143782138,
          "target": "22-sports-center-access"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
