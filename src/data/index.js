export const TRAIT_GROUP = {
    7000000: {
        core: [7000201, 7000401, 7000601, 7000701],
        sub2: [7010311, 7010601, 7110901],
        sub1: [7010501, 7010901, 7011001]
    }, 7100000: {
        core: [7100101, 7100201, 7100401, 7100501],
        sub1: [7110101, 7111001, 7110701],
        sub2: [7110201, 7110401, 7110601]
    }, 7200000: {
        core: [7200101, 7200201, 7200301, 7200501],
        sub1: [7110801, 7210101, 7211001, 7211101],
        sub2: [7210401, 7210501, 7210801]
    }, 7300000: {
        core: [7000501, 7300101, 7300201, 7300301],
        sub1: [7010701, 7310201, 7310401],
        sub2: [7310101, 7310301, 7310501]
    },
}
export const TRAIT_TABLE = {
    7000201: 7000000,
    7000401: 7000000,
    7000501: 7300000,
    7000601: 7000000,
    7000701: 7000000,
    7010311: 7000000,
    7010501: 7000000,
    7010601: 7000000,
    7010701: 7300000,
    7010901: 7000000,
    7011001: 7000000,
    7100101: 7100000,
    7100201: 7100000,
    7100401: 7100000,
    7100501: 7100000,
    7110101: 7100000,
    7110201: 7100000,
    7110401: 7100000,
    7110601: 7100000,
    7110701: 7100000,
    7110801: 7200000,
    7110901: 7000000,
    7111001: 7100000,
    7200101: 7200000,
    7200201: 7200000,
    7200301: 7200000,
    7200501: 7200000,
    7210101: 7200000,
    7210401: 7200000,
    7210501: 7200000,
    7210801: 7200000,
    7211001: 7200000,
    7211101: 7200000,
    7300101: 7300000,
    7300201: 7300000,
    7300301: 7300000,
    7310101: 7300000,
    7310201: 7300000,
    7310301: 7300000,
    7310401: 7300000,
    7310501: 7300000
};

export const CHARACTER_NUMBER_TABLE = {
    0: "무작위",
    1: "재키",
    2: "아야",
    3: "피오라",
    4: "매그너스",
    5: "자히르",
    6: "나딘",
    7: "현우",
    8: "하트",
    9: "아이솔",
    10: "리 다이린",
    11: "유키",
    12: "혜진",
    13: "쇼우",
    14: "키아라",
    15: "시셀라",
    16: "실비아",
    17: "아드리아나",
    18: "쇼이치",
    19: "엠마",
    20: "레녹스",
    21: "로지",
    22: "루크",
    23: "캐시",
    24: "아델라",
    25: "버니스",
    26: "바바라",
    27: "알렉스",
    28: "수아",
    29: "레온",
    30: "일레븐",
    31: "리오",
    32: "윌리엄",
    33: "니키",
    34: "나타폰",
    35: "얀",
    36: "이바",
    37: "다니엘",
    38: "제니",
    39: "카밀로",
    40: "클로에",
    41: "요한",
    42: "비앙카",
    43: "셀린",
    44: "에키온",
    45: "마이",
    46: "에이든",
    47: "라우라",
    48: "띠아",
    49: "펠릭스",
    50: "엘레나",
    51: "프리야",
    52: "아디나",
    53: "마커스",
    54: "칼라",
    55: "에스텔",
    56: "피올로",
    57: "마르티나",
    58: "헤이즈",
    59: "아이작",
    60: "타지아",
    61: "이렘",
    62: "테오도르",
    63: "이안",
    64: "바냐",
    65: "데비&마를렌",
    66: "아르다",
    67: "아비게일",
    68: "알론소",
    69: "레니",
    70: "츠바메",
    71: "케네스",
    72: "카티야",
    73: "샬럿",
    74: "다르코",
    75: "르노어"
}

export const RANK_TIER_RP_TABLE = {
    "Iron IV": {
        "RP_Start": 0,
        "KOR": "아이언 IV",
        "bgColorCode": "#485467"
    },
    "Iron III": {
        "RP_Start": 150,
        "KOR": "아이언 III",
        "bgColorCode": "#485467"
    },
    "Iron II": {
        "RP_Start": 300,
        "KOR": "아이언 II",
        "bgColorCode": "#485467"
    },
    "Iron I": {
        "RP_Start": 450,
        "KOR": "아이언 I",
        "bgColorCode": "#485467"
    },

    "Bronze IV": {
        "RP_Start": 600,
        "KOR": "브론즈 IV",
        "bgColorCode": "#bc652c"
    },
    "Bronze III": {
        "RP_Start": 800,
        "KOR": "브론즈 III",
        "bgColorCode": "#bc652c"
    },
    "Bronze II": {
        "RP_Start": 1000,
        "KOR": "브론즈 II",
        "bgColorCode": "#bc652c"
    },
    "Bronze I": {
        "RP_Start": 1200,
        "KOR": "브론즈 I",
        "bgColorCode": "#bc652c"
    },

    "Silver IV": {
        "RP_Start": 1400,
        "KOR": "실버 IV",
        "bgColorCode": "#8295b3"
    },
    "Silver III": {
        "RP_Start": 1650,
        "KOR": "실버 III",
        "bgColorCode": "#8295b3"
    },
    "Silver II": {
        "RP_Start": 1900,
        "KOR": "실버 II",
        "bgColorCode": "#8295b3"
    },
    "Silver I": {
        "RP_Start": 2150,
        "KOR": "실버 I",
        "bgColorCode": "#8295b3"
    },

    "Gold IV": {
        "RP_Start": 2400,
        "KOR": "골드 IV",
        "bgColorCode": "#f3c719"
    },
    "Gold III": {
        "RP_Start": 2700,
        "KOR": "골드 III",
        "bgColorCode": "#f3c719"
    },
    "Gold II": {
        "RP_Start": 3000,
        "KOR": "골드 II",
        "bgColorCode": "#f3c719"
    },
    "Gold I": {
        "RP_Start": 3300,
        "KOR": "골드 I",
        "bgColorCode": "#f3c719"
    },

    "Platinum IV": {
        "RP_Start": 3600,
        "KOR": "플래티넘 IV",
        "bgColorCode": "#57d5ac"
    },
    "Platinum III": {
        "RP_Start": 3950,
        "KOR": "플래티넘 III",
        "bgColorCode": "#57d5ac"
    },
    "Platinum II": {
        "RP_Start": 4300,
        "KOR": "플래티넘 II",
        "bgColorCode": "#57d5ac"
    },
    "Platinum I": {
        "RP_Start": 4650,
        "KOR": "플래티넘 I",
        "bgColorCode": "#57d5ac"
    },

    "Diamond IV": {
        "RP_Start": 5000,
        "KOR": "다이아몬드 IV",
        "bgColorCode": "#9f8be4"
    },
    "Diamond III": {
        "RP_Start": 5350,
        "KOR": "다이아몬드 III",
        "bgColorCode": "#9f8be4"
    },
    "Diamond II": {
        "RP_Start": 5700,
        "KOR": "다이아몬드 II",
        "bgColorCode": "#9f8be4"
    },
    "Diamond I": {
        "RP_Start": 6050,
        "KOR": "다이아몬드 I",
        "bgColorCode": "#9f8be4"
    },

    "Meteorite": {
        "RP_Start": 6400,
        "KOR": "메테오라이트",
        "bgColorCode": "#6b8cf3"
    },
    "Mithril": {
        "RP_Start": 6800,
        "KOR": "미스릴",
        "bgColorCode": "#88d6cd"
    },

    "Demigod": {
        "RP_Start": "Top 700",
        "KOR": "데미갓",
        "bgColorCode": "#ffffd7",
        "fontColorCode": "#9a7241"
    },
    "Eternity": {
        "RP_Start": "Top 200",
        "KOR": "이터니티",
        "bgColorCode": "#ea70a9"
    }
}

export const CHARACTER_CODE_NAME_TABLE = {
    1: {'en': 'Jackie', 'ko': '재키'},
    2: {'en': 'Aya', 'ko': '아야'},
    3: {'en': 'Fiora', 'ko': '피오라'},
    4: {'en': 'Magnus', 'ko': '매그너스'},
    5: {'en': 'Zahir', 'ko': '자히르'},
    6: {'en': 'Nadine', 'ko': '나딘'},
    7: {'en': 'Hyunwoo', 'ko': '현우'},
    8: {'en': 'Hart', 'ko': '하트'},
    9: {'en': 'Isol', 'ko': '아이솔'},
    10: {'en': 'LiDailin', 'ko': '리 다이린'},
    11: {'en': 'Yuki', 'ko': '유키'},
    12: {'en': 'Hyejin', 'ko': '혜진'},
    13: {'en': 'Xiukai', 'ko': '쇼우'},
    14: {'en': 'Chiara', 'ko': '키아라'},
    15: {'en': 'Sissela', 'ko': '시셀라'},
    16: {'en': 'Silvia', 'ko': '실비아'},
    17: {'en': 'Adriana', 'ko': '아드리아나'},
    18: {'en': 'Shoichi', 'ko': '쇼이치'},
    19: {'en': 'Emma', 'ko': '엠마'},
    20: {'en': 'Lenox', 'ko': '레녹스'},
    21: {'en': 'Rozzi', 'ko': '로지'},
    22: {'en': 'Luke', 'ko': '루크'},
    23: {'en': 'Cathy', 'ko': '캐시'},
    24: {'en': 'Adela', 'ko': '아델라'},
    25: {'en': 'Bernice', 'ko': '버니스'},
    26: {'en': 'Barbara', 'ko': '바바라'},
    27: {'en': 'Alex', 'ko': '알렉스'},
    28: {'en': 'Sua', 'ko': '수아'},
    29: {'en': 'Leon', 'ko': '레온'},
    30: {'en': 'Eleven', 'ko': '일레븐'},
    31: {'en': 'Rio', 'ko': '리오'},
    32: {'en': 'William', 'ko': '윌리엄'},
    33: {'en': 'Nicky', 'ko': '니키'},
    34: {'en': 'Nathapon', 'ko': '나타폰'},
    35: {'en': 'Jan', 'ko': '얀'},
    36: {'en': 'Eva', 'ko': '이바'},
    37: {'en': 'Daniel', 'ko': '다니엘'},
    38: {'en': 'Jenny', 'ko': '제니'},
    39: {'en': 'Camilo', 'ko': '카밀로'},
    40: {'en': 'Chloe', 'ko': '클로에'},
    41: {'en': 'Johann', 'ko': '요한'},
    42: {'en': 'Bianca', 'ko': '비앙카'},
    43: {'en': 'Celine', 'ko': '셀린'},
    44: {'en': 'Echion', 'ko': '에키온'},
    45: {'en': 'Mai', 'ko': '마이'},
    46: {'en': 'Aiden', 'ko': '에이든'},
    47: {'en': 'Laura', 'ko': '라우라'},
    48: {'en': 'Tia', 'ko': '띠아'},
    49: {'en': 'Felix', 'ko': '펠릭스'},
    50: {'en': 'Elena', 'ko': '엘레나'},
    51: {'en': 'Priya', 'ko': '프리야'},
    52: {'en': 'Adina', 'ko': '아디나'},
    53: {'en': 'Markus', 'ko': '마커스'},
    54: {'en': 'Karla', 'ko': '칼라'},
    55: {'en': 'Estelle', 'ko': '에스텔'},
    56: {'en': 'Piolo', 'ko': '피올로'},
    57: {'en': 'Martina', 'ko': '마르티나'},
    58: {'en': 'Haze', 'ko': '헤이즈'},
    59: {'en': 'Isaac', 'ko': '아이작'},
    60: {'en': 'Tazia', 'ko': '타지아'},
    61: {'en': 'Irem', 'ko': '이렘'},
    62: {'en': 'Theodore', 'ko': '테오도르'},
    63: {'en': 'Lyanh', 'ko': '이안'},
    64: {'en': 'Vanya', 'ko': '바냐'},
    65: {'en': 'DebiMarlene', 'ko': '데비&마를렌'},
    66: {'en': 'Arda', 'ko': '아르다'},
    67: {'en': 'Abigail', 'ko': '아비게일'},
    68: {'en': 'Alonso', 'ko': '알론소'},
    69: {'en': 'Leni', 'ko': '레니'},
    70: {'en': 'Tsubame', 'ko': '츠바메'},
    71: {'en': 'Kenneth', 'ko': '케네스'},
    72: {'en': 'Katja', 'ko': '카티야'},
    73: {'en': 'Charlotte', 'ko': '샬럿'},
    74: {'en': 'Darko', 'ko': '다르코'}
}
