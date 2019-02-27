//  JURA-MEDIUM  JURA-MEDIUM  JURA-MEDIUM  JURA-MEDIUM  JURA-MEDIUM  JURA-MEDIUM
//
//

define([], function() {
  return function(codeList) {
    var jur = { reverseHoles: true, reverseShapes: false },
      nbsp = "\u00A0";
    jur["A"] = {
      shapeCmds: [
        [
          [346, 636],
          [264, 636],
          [27, 37],
          [25, 31, 24, 24, 24, 18],
          [24, -9, 51, -16, 60, -16],
          [75, -16, 89, -6, 97, 12],
          [166, 189],
          [444, 189],
          [513, 12],
          [518, -1, 532, -16, 550, -16],
          [560, -16, 586, -9, 586, 18],
          [586, 24, 585, 31, 583, 37]
        ]
      ],
      holeCmds: [[[[195, 261], [304, 532], [415, 261]]]],
      xMin: 24,
      xMax: 586,
      yMin: -16,
      yMax: 532,
      width: 610
    };
    jur["B"] = {
      shapeCmds: [
        [
          [84, 44],
          [84, 22, 91, 0, 118, 0],
          [336, 0],
          [502, 0, 588, 30, 588, 184],
          [588, 203],
          [588, 296, 556, 341, 506, 366],
          [534, 392, 546, 431, 546, 475],
          [546, 605, 457, 636, 306, 636],
          [118, 636],
          [104, 636, 84, 630, 84, 592]
        ]
      ],
      holeCmds: [
        [
          [
            [354, 312],
            [475, 312, 516, 302, 516, 200],
            [516, 184],
            [516, 83, 475, 72, 336, 72],
            [156, 72],
            [156, 312]
          ],
          [
            [306, 384],
            [156, 384],
            [156, 559],
            [306, 559],
            [429, 559, 474, 546, 474, 472],
            [474, 398, 431, 384, 306, 384]
          ]
        ]
      ],
      xMin: 84,
      xMax: 588,
      yMin: 0,
      yMax: 636,
      width: 644
    };
    jur["C"] = {
      shapeCmds: [
        [
          [465, 0],
          [561, 0, 575, 62, 575, 121],
          [575, 154, 561, 167, 539, 167],
          [525, 167, 503, 159, 503, 124],
          [503, 84, 494, 72, 458, 72],
          [324, 72],
          [183, 72, 143, 82, 143, 186],
          [143, 450],
          [143, 554, 185, 564, 306, 564],
          [458, 564],
          [494, 564, 503, 552, 503, 512],
          [503, 477, 525, 469, 539, 469],
          [553, 469, 575, 475, 575, 514],
          [575, 574, 561, 636, 465, 636],
          [306, 636],
          [158, 636, 71, 606, 71, 452],
          [71, 184],
          [71, 30, 157, 0, 324, 0]
        ]
      ],
      xMin: 71,
      xMax: 575,
      yMin: 0,
      yMax: 636,
      width: 631
    };
    jur["D"] = {
      xMin: 76,
      xMax: 687,
      yMin: 0,
      yMax: 714,
      width: 722
    };
    jur["E"] = {
      xMin: 76,
      xMax: 597,
      yMin: 0,
      yMax: 714,
      width: 630
    };
    jur["F"] = {
      shapeCmds: [
        [
          [156, 322],
          [421, 322],
          [449, 322, 471, 329, 471, 356],
          [471, 378, 457, 394, 421, 394],
          [156, 394],
          [156, 564],
          [544, 564],
          [569, 564, 588, 571, 588, 598],
          [588, 620, 575, 636, 544, 636],
          [118, 636],
          [104, 636, 84, 630, 84, 592],
          [84, 36],
          [84, 14, 92, -7, 120, -7],
          [145, -7, 156, 9, 156, 35]
        ]
      ],
      xMin: 84,
      xMax: 588,
      yMin: -7,
      yMax: 636,
      width: 615
    };
    jur["J"] = {
      fullPath:
        "M 272 64 C 146 64 106 75 106 182 C 106 207 92 225 71 225 C 47 225 33 209 33 182 C 33 21 120 -8 272 -8 C 424 -8 510 21 510 173 L 510 602 C 510 636 488 643 474 643 C 458 643 438 634 438 603 L 438 176 C 438 75 397 64 272 64 Z",
      shapeCmds: [
        [
          [438, 176],
          [438, 75, 397, 64, 272, 64],
          [146, 64, 106, 75, 106, 182],
          [106, 207, 92, 225, 71, 225],
          [47, 225, 33, 209, 33, 182],
          [33, 21, 120, -8, 272, -8],
          [424, -8, 510, 21, 510, 173],
          [510, 602],
          [510, 636, 488, 643, 474, 643],
          [458, 643, 438, 634, 438, 603]
        ]
      ],
      xMin: 33,
      xMax: 510,
      yMin: -8,
      yMax: 643,
      width: 591
    };
    jur["L"] = {
      xMin: 50,
      xMax: 440,
      yMin: 0,
      yMax: 755,
      width: 474
    };
    jur["N"] = {
      xMin: 71,
      xMax: 650,
      yMin: 0,
      yMax: 714,
      width: 722
    };
    jur["O"] = {
      shapeCmds: [
        [
          [568, 406],
          [568, 557, 464, 645, 316, 645],
          [167, 645, 64, 557, 64, 406],
          [64, 230],
          [64, 79, 167, -9, 316, -9],
          [464, -9, 568, 79, 568, 230]
        ]
      ],
      holeCmds: [
        [
          [
            [496, 233],
            [496, 125, 435, 63, 316, 63],
            [197, 63, 136, 125, 136, 233],
            [136, 403],
            [136, 509, 195, 573, 316, 573],
            [437, 573, 496, 509, 496, 403]
          ]
        ]
      ],
      xMin: 64,
      xMax: 568,
      yMin: -9,
      yMax: 645,
      width: 632
    };
    jur["S"] = {
      shapeCmds: [
        [
          [344, 572],
          [486, 572, 524, 563, 524, 456],
          [524, 431, 538, 413, 560, 413],
          [575, 413, 597, 422, 597, 456],
          [597, 617, 508, 644, 344, 644],
          [268, 644],
          [103, 644, 61, 555, 61, 478],
          [61, 387, 98, 336, 200, 316],
          [473, 265],
          [488, 261, 525, 231, 525, 163],
          [525, 128, 508, 64, 430, 64],
          [312, 64],
          [173, 64, 134, 75, 134, 182],
          [134, 207, 120, 225, 99, 225],
          [75, 225, 61, 209, 61, 182],
          [61, 20, 152, -8, 312, -8],
          [408, -8],
          [556, -8, 597, 81, 597, 160],
          [597, 236, 566, 316, 460, 336],
          [185, 385],
          [157, 392, 133, 428, 133, 475],
          [133, 509, 151, 572, 238, 572]
        ]
      ],
      xMin: 61,
      xMax: 597,
      yMin: -8,
      yMax: 644,
      width: 658
    };
    jur["T"] = {
      xMin: 8,
      xMax: 586,
      yMin: 0,
      yMax: 714,
      width: 593
    };
    jur["Z"] = {
      xMin: 23,
      xMax: 608,
      yMin: 0,
      yMax: 714,
      width: 630
    };
    jur["a"] = {
      shapeCmds: [
        [
          [314, 305],
          [150, 305, 61, 273, 61, 129],
          [61, 49, 111, 0, 178, 0],
          [271, 0],
          [343, 0, 409, 15, 451, 50],
          [451, 38],
          [451, -1, 473, -7, 487, -7],
          [500, -7, 523, -2, 523, 35],
          [523, 331],
          [523, 420, 501, 461, 413, 461],
          [258, 461],
          [141, 461, 61, 439, 61, 350],
          [61, 312, 82, 305, 96, 305],
          [126, 305, 133, 325, 133, 350],
          [133, 379, 158, 389, 265, 389],
          [406, 389],
          [442, 389, 451, 380, 451, 347],
          [451, 305]
        ]
      ],
      holeCmds: [
        [
          [
            [451, 233],
            [451, 167, 436, 72, 271, 72],
            [178, 72],
            [159, 72, 133, 95, 133, 124],
            [133, 223, 171, 233, 314, 233]
          ]
        ]
      ],
      xMin: 61,
      xMax: 523,
      yMin: -7,
      yMax: 461,
      width: 594
    };
    jur["b"] = {
      shapeCmds: [
        [
          [147, 597],
          [147, 630, 131, 643, 109, 643],
          [89, 643, 75, 630, 75, 597],
          [75, 35],
          [75, -2, 98, -7, 111, -7],
          [140, -7, 147, 15, 147, 38],
          [147, 50],
          [189, 16, 255, 0, 328, 0],
          [357, 0],
          [523, 0, 609, 30, 609, 178],
          [609, 283],
          [609, 431, 523, 461, 357, 461],
          [328, 461],
          [255, 461, 189, 445, 147, 411]
        ]
      ],
      holeCmds: [
        [
          [
            [357, 389],
            [497, 389, 537, 380, 537, 280],
            [537, 181],
            [537, 81, 497, 72, 357, 72],
            [328, 72],
            [181, 72, 147, 146, 147, 228],
            [147, 232],
            [147, 315, 181, 389, 328, 389]
          ]
        ]
      ],
      xMin: 75,
      xMax: 609,
      yMin: 0,
      yMax: 643,
      width: 670
    };
    jur["c"] = {
      shapeCmds: [
        [
          [455, 0],
          [551, 0, 565, 62, 565, 121],
          [565, 154, 551, 167, 529, 167],
          [515, 167, 493, 159, 493, 124],
          [493, 84, 484, 72, 448, 72],
          [314, 72],
          [171, 72, 133, 82, 133, 181],
          [133, 280],
          [133, 379, 171, 389, 314, 389],
          [448, 389],
          [484, 389, 493, 377, 493, 337],
          [493, 302, 515, 294, 529, 294],
          [543, 294, 565, 300, 565, 339],
          [565, 398, 551, 461, 455, 461],
          [314, 461],
          [147, 461, 61, 431, 61, 283],
          [61, 178],
          [61, 30, 147, 0, 314, 0]
        ]
      ],
      xMin: 61,
      xMax: 565,
      yMin: 0,
      yMax: 461,
      width: 624
    };
    jur["d"] = {
      shapeCmds: [
        [
          [61, 178],
          [61, 30, 147, 0, 313, 0],
          [342, 0],
          [415, 0, 481, 16, 523, 50],
          [523, 38],
          [523, 15, 530, -7, 559, -7],
          [572, -7, 595, -2, 595, 35],
          [595, 598],
          [595, 620, 588, 643, 561, 643],
          [547, 643, 523, 638, 523, 598],
          [523, 461],
          [305, 461],
          [147, 461, 61, 431, 61, 283]
        ]
      ],
      holeCmds: [
        [
          [
            [133, 280],
            [133, 380, 173, 389, 305, 389],
            [523, 389],
            [523, 229],
            [523, 146, 489, 72, 342, 72],
            [313, 72],
            [173, 72, 133, 81, 133, 181]
          ]
        ]
      ],
      xMin: 61,
      xMax: 595,
      yMin: -7,
      yMax: 643,
      width: 670
    };
    jur["e"] = {
      shapeCmds: [
        [
          [595, 283],
          [595, 431, 509, 461, 343, 461],
          [314, 461],
          [147, 461, 61, 431, 61, 283],
          [61, 178],
          [61, 30, 147, 0, 314, 0],
          [475, 0],
          [571, 0, 585, 62, 585, 121],
          [585, 154, 571, 167, 549, 167],
          [535, 167, 513, 159, 513, 124],
          [513, 84, 504, 72, 468, 72],
          [314, 72],
          [171, 72, 133, 82, 133, 181],
          [133, 235],
          [595, 235]
        ]
      ],
      holeCmds: [
        [
          [
            [343, 389],
            [473, 389, 518, 381, 523, 307],
            [133, 307],
            [137, 377, 173, 389, 314, 389]
          ]
        ]
      ],
      xMin: 61,
      xMax: 595,
      yMin: 0,
      yMax: 461,
      width: 651
    };
    jur["f"] = {
      xMin: 9,
      xMax: 317,
      yMin: 0,
      yMax: 714,
      width: 315
    };
    jur["g"] = {
      shapeCmds: [
        [
          [595, 426],
          [595, 463, 572, 468, 559, 468],
          [530, 468, 523, 446, 523, 423],
          [523, 411],
          [481, 445, 415, 461, 342, 461],
          [313, 461],
          [147, 461, 61, 431, 61, 283],
          [61, 178],
          [61, 30, 147, 0, 311, 0],
          [523, 0],
          [523, -93],
          [523, -126, 518, -133, 487, -133],
          [178, -133],
          [142, -133, 133, -121, 133, -81],
          [133, -50, 119, -38, 97, -38],
          [83, -38, 61, -44, 61, -83],
          [61, -142, 75, -205, 171, -205],
          [494, -205],
          [575, -205, 595, -164, 595, -77]
        ]
      ],
      holeCmds: [
        [
          [
            [311, 72],
            [173, 72, 133, 81, 133, 181],
            [133, 280],
            [133, 380, 173, 389, 313, 389],
            [342, 389],
            [489, 389, 523, 315, 523, 233],
            [523, 72]
          ]
        ]
      ],
      xMin: 61,
      xMax: 595,
      yMin: -205,
      yMax: 468,
      width: 670
    };
    jur["h"] = {
      xMin: 60,
      xMax: 514,
      yMin: 0,
      yMax: 714,
      width: 574
    };
    jur["i"] = {
      shapeCmds: [
        [
          [73, 20],
          [73, -14, 94, -22, 108, -22],
          [137, -22, 145, -1, 145, 20],
          [145, 440],
          [145, 475, 123, 483, 109, 483],
          [95, 483, 73, 475, 73, 440]
        ],
        [
          [109, 550],
          [133, 550, 170, 570, 170, 601],
          [170, 633, 132, 652, 109, 652],
          [82, 652, 48, 632, 48, 601],
          [48, 569, 86, 550, 108, 551]
        ]
      ],
      xMin: 48,
      xMax: 170,
      yMin: -22,
      yMax: 652,
      width: 218
    };
    jur["j"] = {
      shapeCmds: [
        [
          [111, 550],
          [135, 550, 172, 570, 172, 601],
          [172, 633, 134, 652, 111, 652],
          [84, 652, 50, 632, 50, 601],
          [50, 569, 88, 550, 111, 550]
        ],
        [
          [147, 422],
          [147, 446, 140, 468, 112, 468],
          [82, 468, 75, 446, 75, 422],
          [75, 0],
          [75, -93, 37, -103, -76, -103],
          [-101, -103, -122, -111, -122, -138],
          [-122, -160, -109, -175, -76, -175],
          [59, -175, 147, -151, 147, 0]
        ]
      ],
      xMin: -122,
      xMax: 172,
      yMin: -175,
      yMax: 652,
      width: 222
    };
    jur["k"] = {
      xMin: 63,
      xMax: 542,
      yMin: 0,
      yMax: 714,
      width: 537
    };
    jur["l"] = {
      xMin: 63,
      xMax: 177,
      yMin: 0,
      yMax: 714,
      width: 241
    };
    jur["m"] = {
      xMin: 60,
      xMax: 810,
      yMin: 0,
      yMax: 531,
      width: 870
    };
    jur["n"] = {
      xMin: 60,
      xMax: 514,
      yMin: 0,
      yMax: 531,
      width: 574
    };
    jur["o"] = {
      shapeCmds: [
        [
          [343, 0],
          [509, 0, 595, 30, 595, 178],
          [595, 283],
          [595, 431, 509, 461, 343, 461],
          [314, 461],
          [147, 461, 61, 431, 61, 283],
          [61, 178],
          [61, 30, 147, 0, 314, 0]
        ]
      ],
      holeCmds: [
        [
          [
            [314, 72],
            [171, 72, 133, 82, 133, 181],
            [133, 280],
            [133, 379, 171, 389, 314, 389],
            [343, 389],
            [483, 389, 523, 380, 523, 280],
            [523, 181],
            [523, 81, 483, 72, 343, 72]
          ]
        ]
      ],
      xMin: 61,
      xMax: 595,
      yMin: 0,
      yMax: 461,
      width: 656
    };
    jur["p"] = {
      xMin: 63,
      xMax: 575,
      yMin: -191,
      yMax: 531,
      width: 611
    };
    jur["q"] = {
      xMin: 35,
      xMax: 547,
      yMin: -191,
      yMax: 531,
      width: 611
    };
    jur["r"] = {
      shapeCmds: [
        [
          [297, 389],
          [343, 389],
          [364, 389, 388, 396, 388, 425],
          [388, 447, 375, 461, 343, 461],
          [297, 461],
          [241, 461, 187, 445, 146, 411],
          [146, 422],
          [146, 454, 130, 468, 108, 468],
          [94, 468, 74, 462, 74, 425],
          [74, 35],
          [74, -2, 97, -7, 110, -7],
          [135, -7, 146, 9, 146, 35],
          [146, 229],
          [146, 332, 197, 389, 297, 389]
        ]
      ],
      xMin: 74,
      xMax: 388,
      yMin: -7,
      yMax: 468,
      width: 406
    };
    jur["s"] = {
      xMin: 32,
      xMax: 492,
      yMin: -14,
      yMax: 531,
      width: 519
    };
    jur["t"] = {
      shapeCmds: [
        [
          [152, 181],
          [152, 389],
          [280, 389],
          [320, 389, 326, 409, 326, 423],
          [326, 445, 312, 461, 280, 461],
          [152, 461],
          [152, 555],
          [152, 588, 136, 601, 114, 601],
          [94, 601, 80, 588, 80, 555],
          [80, 460],
          [61, 457, 49, 447, 49, 429],
          [49, 409, 60, 397, 80, 394],
          [80, 178],
          [80, 31, 166, 0, 303, 0],
          [343, 0, 348, 24, 348, 38],
          [348, 65, 325, 72, 303, 72],
          [194, 72, 152, 81, 152, 181]
        ]
      ],
      xMin: 49,
      xMax: 348,
      yMin: 0,
      yMax: 601,
      width: 373
    };
    jur["u"] = {
      shapeCmds: [
        [
          [351, 72],
          [322, 72],
          [182, 72, 142, 81, 142, 181],
          [142, 426],
          [142, 459, 123, 468, 105, 468],
          [77, 468, 70, 447, 70, 426],
          [70, 178],
          [70, 30, 156, 0, 322, 0],
          [351, 0],
          [424, 0, 490, 16, 532, 50],
          [532, 39],
          [532, 6, 548, -7, 570, -7],
          [584, -7, 604, -1, 604, 36],
          [604, 426],
          [604, 463, 581, 468, 568, 468],
          [543, 468, 532, 452, 532, 426],
          [532, 232],
          [528, 153, 502, 72, 351, 72]
        ]
      ],
      xMin: 70,
      xMax: 604,
      yMin: -7,
      yMax: 468,
      width: 678
    };
    jur["v"] = {
      xMin: 9,
      xMax: 510,
      yMin: 0,
      yMax: 517,
      width: 519
    };
    jur["w"] = {
      xMin: 13,
      xMax: 765,
      yMin: 0,
      yMax: 517,
      width: 778
    };
    jur["x"] = {
      xMin: 4,
      xMax: 533,
      yMin: 0,
      yMax: 517,
      width: 537
    };
    jur["y"] = {
      shapeCmds: [
        [
          [604, -77],
          [604, 426],
          [604, 463, 581, 468, 568, 468],
          [543, 468, 532, 452, 532, 426],
          [532, 232],
          [532, 153, 502, 72, 351, 72],
          [322, 72],
          [182, 72, 142, 81, 142, 181],
          [142, 426],
          [142, 459, 123, 468, 105, 468],
          [77, 468, 70, 447, 70, 426],
          [70, 178],
          [70, 30, 156, 0, 322, 0],
          [351, 0],
          [424, 0, 490, 16, 532, 50],
          [532, -93],
          [532, -126, 527, -133, 496, -133],
          [187, -133],
          [151, -133, 142, -121, 142, -81],
          [142, -50, 128, -38, 106, -38],
          [92, -38, 70, -44, 70, -83],
          [70, -142, 84, -205, 180, -205],
          [503, -205],
          [584, -205, 604, -164, 604, -77]
        ]
      ],
      xMin: 70,
      xMax: 604,
      yMin: -205,
      yMax: 468,
      width: 679
    };
    jur["z"] = {
      shapeCmds: [
        [
          [162, 72],
          [521, 384],
          [521, 461],
          [170, 461],
          [82, 461, 60, 418, 60, 322],
          [60, 283, 81, 276, 95, 276],
          [124, 276, 132, 294, 132, 322],
          [132, 373, 138, 389, 177, 389],
          [422, 389],
          [60, 74],
          [60, 0],
          [432, 0],
          [520, 0, 542, 45, 542, 139],
          [542, 179, 519, 185, 506, 185],
          [484, 185, 470, 172, 470, 139],
          [470, 95, 467, 72, 424, 72]
        ]
      ],
      xMin: 60,
      xMax: 542,
      yMin: 0,
      yMax: 461,
      width: 594
    };
    jur["0"] = {
      shapeCmds: [
        [
          [580, 158],
          [580, 478],
          [580, 575, 498, 641, 386, 641],
          [270, 641],
          [158, 641, 76, 575, 76, 478],
          [76, 158],
          [76, 61, 158, -5, 270, -5],
          [386, -5],
          [498, -5, 580, 61, 580, 158]
        ]
      ],
      holeCmds: [
        [
          [
            [148, 491],
            [148, 524, 190, 568, 259, 568],
            [397, 568],
            [466, 568, 508, 524, 508, 491],
            [508, 144],
            [508, 111, 466, 67, 397, 67],
            [259, 67],
            [190, 67, 148, 111, 148, 144]
          ]
        ]
      ],
      xMin: 76,
      xMax: 580,
      yMin: -5,
      yMax: 641,
      width: 656
    };
    jur["1"] = {
      shapeCmds: [
        [
          [116, 569],
          [116, 33],
          [116, 14, 124, -7, 152, -7],
          [180, -7, 188, 14, 188, 33],
          [188, 647],
          [188, 676, 163, 685, 151, 685],
          [137, 685, 127, 679, 117, 670],
          [56, 610],
          [39, 594, 38, 583, 38, 576],
          [38, 566, 45, 546, 72, 546],
          [82, 546, 95, 550, 108, 562]
        ]
      ],
      xMin: 38,
      xMax: 188,
      yMin: -7,
      yMax: 685,
      width: 276
    };
    jur["2"] = {
      shapeCmds: [
        [
          [567, 456],
          [567, 611, 481, 641, 333, 641],
          [173, 641],
          [99, 641, 64, 608, 64, 519],
          [64, 481, 85, 474, 99, 474],
          [129, 474, 136, 494, 136, 519],
          [136, 559, 145, 569, 180, 569],
          [333, 569],
          [453, 569, 495, 559, 495, 454],
          [495, 315, 64, 306, 64, 52],
          [64, -5],
          [522, -5],
          [561, -5, 567, 16, 567, 30],
          [567, 60, 547, 67, 522, 67],
          [136, 67],
          [155, 261, 567, 276, 567, 456]
        ]
      ],
      xMin: 64,
      xMax: 567,
      yMin: -5,
      yMax: 641,
      width: 629
    };
    jur["3"] = {
      shapeCmds: [
        [
          [360, 569],
          [471, 569, 495, 528, 495, 466],
          [495, 403, 387, 362, 309, 362],
          [278, 362, 256, 355, 256, 326],
          [256, 297, 277, 289, 309, 289],
          [381, 289, 495, 236, 495, 172],
          [495, 109, 471, 67, 360, 67],
          [268, 67],
          [199, 67, 134, 92, 134, 119],
          [134, 150, 120, 162, 98, 162],
          [76, 162, 62, 149, 62, 116],
          [62, 54, 134, -5, 261, -5],
          [347, -5],
          [507, -5, 566, 49, 566, 189],
          [566, 238, 499, 301, 453, 326],
          [498, 348, 566, 399, 566, 447],
          [566, 587, 507, 641, 347, 641],
          [261, 641],
          [134, 641, 62, 582, 62, 519],
          [62, 480, 84, 474, 98, 474],
          [120, 474, 134, 486, 134, 517],
          [134, 544, 201, 569, 268, 569]
        ]
      ],
      xMin: 62,
      xMax: 566,
      yMin: -5,
      yMax: 641,
      width: 636
    };
    jur["4"] = {
      shapeCmds: [
        [
          [500, 160],
          [519, 160, 542, 167, 542, 196],
          [542, 225, 519, 232, 500, 232],
          [454, 232],
          [454, 641],
          [370, 641],
          [34, 235],
          [34, 160],
          [378, 160],
          [378, 32],
          [378, 6, 396, -7, 418, -7],
          [432, -7, 454, -1, 454, 32],
          [454, 160]
        ]
      ],
      holeCmds: [[[[378, 232], [116, 232], [378, 550]]]],
      xMin: 34,
      xMax: 542,
      yMin: -7,
      yMax: 641,
      width: 577
    };
    jur["5"] = {
      shapeCmds: [
        [
          [97, 141],
          [83, 141, 63, 126, 63, 105],
          [63, 48, 217, -9, 305, -9],
          [453, -9, 557, 80, 557, 233],
          [557, 372, 440, 449, 324, 449],
          [146, 449],
          [152, 523],
          [156, 560, 170, 569, 196, 569],
          [473, 569],
          [507, 569, 515, 590, 515, 604],
          [515, 621, 507, 641, 473, 641],
          [204, 641],
          [122, 641, 85, 608, 78, 508],
          [69, 377],
          [333, 377],
          [390, 377, 485, 344, 485, 233],
          [485, 128, 427, 63, 305, 63],
          [186, 63, 122, 141, 97, 141]
        ]
      ],
      xMin: 63,
      xMax: 515,
      yMin: -9,
      yMax: 641,
      width: 608
    };
    jur["6"] = {
      shapeCmds: [
        [
          [50, 213],
          [50, 83, 152, -9, 302, -9],
          [451, -9, 554, 83, 554, 214],
          [554, 346, 451, 438, 302, 438],
          [247, 438, 195, 425, 155, 401],
          [194, 493, 264, 549, 323, 575],
          [331, 579, 353, 590, 353, 611],
          [353, 631, 337, 644, 310, 644],
          [263, 644, 50, 513, 50, 213]
        ]
      ],
      holeCmds: [
        [
          [
            [122, 214],
            [122, 305, 184, 366, 302, 366],
            [420, 366, 482, 305, 482, 214],
            [482, 123, 419, 63, 302, 63],
            [185, 63, 122, 123, 122, 214]
          ]
        ]
      ],
      xMin: 50,
      xMax: 554,
      yMin: -9,
      yMax: 644,
      width: 594
    };
    jur["7"] = {
      shapeCmds: [
        [
          [245, -10],
          [268, -10, 279, 10, 284, 22],
          [512, 590],
          [515, 601, 516, 609, 516, 613],
          [516, 630, 507, 646, 480, 646],
          [140, 646],
          [66, 646, 30, 613, 30, 524],
          [30, 485, 52, 479, 66, 479],
          [95, 479, 102, 501, 102, 524],
          [102, 562, 111, 574, 148, 574],
          [430, 574],
          [209, 47],
          [206, 41, 202, 33, 202, 23],
          [202, -3, 230, -10, 245, -10]
        ]
      ],
      xMin: 30,
      xMax: 516,
      yMin: -10,
      yMax: 646,
      width: 540
    };
    jur["8"] = {
      shapeCmds: [
        [
          [577, 178],
          [577, 241, 563, 292, 522, 326],
          [560, 352, 577, 401, 577, 468],
          [577, 629, 480, 641, 343, 641],
          [308, 641],
          [170, 641, 73, 629, 73, 468],
          [73, 401, 91, 353, 129, 326],
          [89, 294, 73, 243, 73, 178],
          [73, 23, 161, -5, 308, -5],
          [343, -5],
          [491, -5, 577, 24, 577, 178]
        ]
      ],
      holeCmds: [
        [
          [
            [145, 180],
            [145, 282, 187, 292, 308, 292],
            [343, 292],
            [464, 292, 505, 282, 505, 180],
            [505, 76, 464, 67, 343, 67],
            [308, 67],
            [185, 67, 145, 77, 145, 180]
          ],
          [
            [505, 466],
            [505, 365, 468, 364, 343, 364],
            [308, 364],
            [184, 364, 145, 366, 145, 466],
            [145, 569, 185, 569, 306, 569],
            [343, 569],
            [469, 569, 505, 568, 505, 466]
          ]
        ]
      ],
      xMin: 73,
      xMax: 577,
      yMin: -5,
      yMax: 641,
      width: 650
    };
    jur["9"] = {
      shapeCmds: [
        [
          [42, 466],
          [42, 304, 215, 292, 312, 292],
          [367, 292, 417, 298, 455, 315],
          [403, 129, 243, 57, 158, 57],
          [125, 57, 117, 35, 117, 21],
          [117, 3, 127, -16, 158, -16],
          [355, -16, 546, 177, 546, 466],
          [546, 606, 438, 641, 312, 641],
          [230, 641, 42, 628, 42, 466]
        ]
      ],
      holeCmds: [
        [
          [
            [312, 569],
            [437, 569, 474, 528, 474, 466],
            [474, 405, 441, 364, 312, 364],
            [218, 364, 114, 373, 114, 466],
            [114, 559, 230, 569, 312, 569]
          ]
        ]
      ],
      xMin: 42,
      xMax: 546,
      yMin: -16,
      yMax: 641,
      width: 595
    };
    jur["%"] = {
      fullPath:
        "M 405 183 C 405 194 415 203 425 203 C 437 203 445 195 445 183 C 445 173 436 163 425 163 C 415 163 405 172 405 183 Z M 322 183 C 322 132 371 91 425 91 C 476 91 517 132 517 183 C 517 234 476 275 425 275 C 371 275 322 234 322 183 Z M 152 461 C 152 469 161 476 172 476 C 179 476 192 470 192 461 C 192 449 179 441 172 441 C 164 441 152 449 152 461 Z M 79 461 C 79 410 120 369 172 369 C 226 369 274 410 274 461 C 274 509 226 548 172 548 C 120 548 79 509 79 461 Z M 494 528 C 482 528 471 520 464 514 L 83 168 C 73 158 67 149 67 136 C 67 114 88 101 102 101 C 108 101 119 102 133 115 L 514 462 C 519 467 529 481 529 493 C 529 515 508 528 494 528 Z",
      shapeCmds: [
        [
          [494, 528],
          [482, 528, 471, 520, 464, 514],
          [83, 168],
          [73, 158, 67, 149, 67, 136],
          [67, 114, 88, 101, 102, 101],
          [108, 101, 119, 102, 133, 115],
          [514, 462],
          [519, 467, 529, 481, 529, 493],
          [529, 515, 508, 528, 494, 528]
        ],
        [
          [322, 183],
          [322, 132, 371, 91, 425, 91],
          [476, 91, 517, 132, 517, 183],
          [517, 234, 476, 275, 425, 275],
          [371, 275, 322, 234, 322, 183]
        ],
        [
          [79, 461],
          [79, 410, 120, 369, 172, 369],
          [226, 369, 274, 410, 274, 461],
          [274, 509, 226, 548, 172, 548],
          [120, 548, 79, 509, 79, 461]
        ]
      ],
      holeCmds: [
        [],
        [
          [
            [405, 183],
            [405, 194, 415, 203, 425, 203],
            [437, 203, 445, 195, 445, 183],
            [445, 173, 436, 163, 425, 163],
            [415, 163, 405, 172, 405, 183]
          ]
        ],
        [
          [
            [152, 461],
            [152, 469, 161, 476, 172, 476],
            [179, 476, 192, 470, 192, 461],
            [192, 449, 179, 441, 172, 441],
            [164, 441, 152, 449, 152, 461]
          ]
        ]
      ],
      xMin: 67,
      xMax: 529,
      yMin: 91,
      yMax: 548,
      width: 597
    };
    jur["-"] = {
      fullPath:
        "M 359 267 L 114 267 C 82 267 73 245 73 231 C 73 213 83 194 114 194 L 359 194 C 384 194 403 208 403 229 C 403 253 386 267 359 267 Z",
      shapeCmds: [
        [
          [359, 267],
          [114, 267],
          [82, 267, 73, 245, 73, 231],
          [73, 213, 83, 194, 114, 194],
          [359, 194],
          [384, 194, 403, 208, 403, 229],
          [403, 253, 386, 267, 359, 267]
        ]
      ],
      xMin: 73,
      xMax: 403,
      yMin: 194,
      yMax: 267,
      width: 476
    };
    jur[nbsp] = {
      xMin: 31,
      xMax: 400,
      yMin: -4,
      yMax: 644,
      width: 425
    };
    jur[" "] = jur[nbsp];
    /*  
// https://opentype.js.org/glyph-inspector.html
function coordinates(cmd){
  if(cmd.x2){
    return " "+(Math.floor(10*cmd.x1)/10)+" "+(Math.floor(0-10*cmd.y1)/10)+" "+(Math.floor(10*cmd.x2)/10)+" "+(Math.floor(0-10*cmd.y2)/10)+" "+(Math.floor(10*cmd.x)/10)+" "+(Math.floor(0-10*cmd.y)/10)
  }else{
    if(cmd.x1){
      return " "+(Math.floor(10*cmd.x1)/10)+" "+(Math.floor(0-10*cmd.y1)/10)+" "+(Math.floor(10*cmd.x)/10)+" "+(Math.floor(0-10*cmd.y)/10)
    }else{
      if(cmd.x){
        return " "+(Math.floor(10*cmd.x)/10)+" "+(Math.floor(0-10*cmd.y)/10)
      }else{
        return ""
      }
    }
  }
};
function makeD(path){
  var d  = "";
  path.commands.forEach(function(cmd){d+=" "+cmd.type+coordinates(cmd)});
  return d.slice(1)
}
 */

    return jur;
  };
});