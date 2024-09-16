// src/store/index.js
import {createStore} from 'vuex';
import {RANK_TIER_RP_TABLE} from '@/data'
import axios from 'axios';

const store = createStore({
        state: {
            // 애플리케이션에서 관리할 상태
            selectedCharacterIndex: 0,

            // playerStatsData: {
            //     mmr: 12345,
            //     nickname: "아글라이아",
            //     rank: 200,
            //     rankSize: 216619,
            //     rankPercent: 0.02,
            //     tireMmr: 2202, // 만들어야함
            //
            //     // totalTeamKills:203,
            //     averageTeamKills: 8.3, // totalTeamKills / totalGames
            //     averageKills: 1.4,
            //     averageAssistants: 2.3,
            //
            //     top1: 50.07,
            //     top2: 60.12,
            //     top3: 80.16,
            //
            //     totalGames: 146,
            //     totalWins: 52,
            //     averageDamage: 32142, // userGames 테이블에서 쿼리를 해서 가져와야할 듯
            //     averageRank: 9.36,
            //
            //     mmrHistory: [
            //         {
            //             "o": 9000,
            //             "h": 9714,
            //             "l": 7866.5,
            //             "c": 10994,
            //             "x": 1724544000000
            //         },
            //         {
            //             "o": 10994,
            //             "h": 12570,
            //             "l": 10340.5,
            //             "c": 11333,
            //             "x": 1724630400000
            //         },
            //         {
            //             "o": 11333,
            //             "h": 11910,
            //             "l": 10248,
            //             "c": 9756,
            //             "x": 1724716800000
            //         },
            //         {
            //             "o": 9756,
            //             "h": 11746,
            //             "l": 9537.5,
            //             "c": 11366,
            //             "x": 1724803200000
            //         },
            //         {
            //             "o": 11366,
            //             "h": 12777.5,
            //             "l": 10013.5,
            //             "c": 10772,
            //             "x": 1724889600000
            //         },
            //         {
            //             "o": 10772,
            //             "h": 12274,
            //             "l": 10193.5,
            //             "c": 12418,
            //             "x": 1724976000000
            //         },
            //         {
            //             "o": 12418,
            //             "h": 14080,
            //             "l": 11006.5,
            //             "c": 10650,
            //             "x": 1725062400000
            //         },
            //         {
            //             "o": 10650,
            //             "h": 12079,
            //             "l": 10065.5,
            //             "c": 11848,
            //             "x": 1725148800000
            //         },
            //         {
            //             "o": 11848,
            //             "h": 13239,
            //             "l": 11647,
            //             "c": 10255,
            //             "x": 1725235200000
            //         },
            //         {
            //             "o": 10255,
            //             "h": 10796.5,
            //             "l": 10159.5,
            //             "c": 12163,
            //             "x": 1725321600000
            //         }
            //     ],
            //
            //     characterStats: [ // 10개 까지
            //         {
            //             characterCode: 1,
            //             mostUsedSkinCode: 1001004,
            //             bestWeapon: 13,  // 무기
            //             tacticalSkillGroup: 70, // 전술 스킬
            //             traitFirstCore: 7000401, // 주특
            //             traitFirstSub: [
            //                 7010311,
            //                 7011001
            //             ],
            //             traitSecondSub: [ // 보조 특성
            //                 7110101,
            //                 7110401
            //             ],
            //
            //             averageTeamKills: 1.2,
            //             averageKills: 3.4,
            //             averageAssistants: 5,
            //
            //             top1: 6.07,
            //             top2: 8.09,
            //             top3: 10.01,
            //
            //             totalGames: 23,
            //             averageDamage: 45678,
            //             averageRank: 1.23,
            //
            //             earnedRP: 3000,
            //         },
            //         {
            //             characterCode: 2,
            //             mostUsedSkinCode: 1002004,
            //             bestWeapon: 10,  // 무기
            //             tacticalSkillGroup: 30, // 전술 스킬
            //             traitFirstCore: 7000501, // 주특
            //             traitFirstSub: [
            //                 7310201,
            //                 7310101
            //             ],
            //             traitSecondSub: [ // 보조 특성
            //                 7211101,
            //                 7210801
            //             ],
            //
            //             averageTeamKills: 4.5,
            //             averageKills: 6.7,
            //             averageAssistants: 8.9,
            //
            //             top1: 10.09,
            //             top2: 8.07,
            //             top3: 6.54,
            //
            //             totalGames: 321,
            //             averageDamage: 10987,
            //             averageRank: 9.36,
            //
            //             earnedRP: 2000,
            //         },
            //         {
            //             characterCode: 7,
            //             mostUsedSkinCode: 1007003,
            //             bestWeapon: 1,  // 무기
            //             tacticalSkillGroup: 30, // 전술 스킬
            //             traitFirstCore: 7100501, // 주특
            //             traitFirstSub: [
            //                 7111001,
            //                 7110601
            //             ],
            //             traitSecondSub: [ // 보조 특성
            //                 7010601,
            //                 7011001
            //             ],
            //
            //             averageTeamKills: 9.2,
            //             averageKills: 4.5,
            //             averageAssistants: 2.4,
            //
            //             top1: 11.22,
            //             top2: 44.33,
            //             top3: 55.66,
            //
            //             totalGames: 77,
            //             averageDamage: 88888,
            //             averageRank: 9.99,
            //
            //             earnedRP: 1000,
            //         },
            //         {
            //             characterCode: 4,
            //             mostUsedSkinCode: 1004002,
            //             bestWeapon: 3,  // 무기
            //             tacticalSkillGroup: 120, // 전술 스킬
            //             traitFirstCore: 7200201, // 주특
            //             traitFirstSub: [
            //                 7210101,
            //                 7210801
            //             ],
            //             traitSecondSub: [ // 보조 특성
            //                 7110101,
            //                 7110401
            //             ],
            //
            //             averageTeamKills: 6.2,
            //             averageKills: 4.5,
            //             averageAssistants: 2.4,
            //
            //             top1: 22.22,
            //             top2: 33.33,
            //             top3: 44.44,
            //
            //             totalGames: 55,
            //             averageDamage: 123,
            //             averageRank: 2.12,
            //
            //             earnedRP: 500,
            //         },
            //         {
            //             characterCode: 67,
            //             mostUsedSkinCode: 1067002,
            //             bestWeapon: 13,  // 무기
            //             tacticalSkillGroup: 130, // 전술 스킬
            //             traitFirstCore: 7100201, // 주특
            //             traitFirstSub: [
            //                 7110101,
            //                 7110401
            //             ],
            //             traitSecondSub: [ // 보조 특성
            //                 7010701,
            //                 7310301
            //             ],
            //
            //             averageTeamKills: 1.2,
            //             averageKills: 4.3,
            //             averageAssistants: 7.2,
            //
            //             top1: 33.33,
            //             top2: 44.44,
            //             top3: 11.22,
            //
            //             totalGames: 99,
            //             averageDamage: 3256,
            //             averageRank: 3.2,
            //
            //             earnedRP: 100
            //         }
            //     ],
            //
            //
            // },

            playerStatsData: {
    "player": {
        "userNum": 0,
        "nickname": ""
    },
    "seasonId": 0,
    "matchingMode": 0,
    "matchingTeamMode": 0,
    "mmr": 0,
    "rank": 0,
    "rankSize": 0,
    "rankPercent": 0.0,
    "totalGames": 0,
    "totalWins": 0,
    "averageRank": 0.0,
    "totalTeamKills": 0,
    "averageTeamKills": 0.0,
    "averageKills": 0.0,
    "averageAssistants": 0.0,
    "averageDamage": 0,
    "averageHunts": 0.0,
    "top1": 0,
    "top2": 0.0,
    "top3": 0.0,
    "top5": 0.0,
    "top7": 0,
    "mmrHistory": [
        {
            "o": 0,
            "h": 0,
            "l": 0,
            "c": 0,
            "x": "1970-01-01"
        },
    ],
    "characterStats": [{
            "characterCode": 0,
            "totalGames": 0,
            "averageTeamKills": 0,
            "averageKills": 0,
            "averageAssistants": 0,
            "averageDamage": 0,
            "averageRank": 0,
            "top1": 0,
            "top2": 0,
            "top3": 0,
            "totalMmrGain": 0,
            "mostUsedSkinCode": 0,
            "mostWeapon": 0,
            "mostTacticalSkillGroup": 0,
            "mostTraitFirstCore": 0,
            "mostTraitFirstSub": [
                0,
                0
            ],
            "mostTraitSecondSub": [
                7000201,
                0
            ]
        },]
}, // API데이터를 저장할 state
        },
        mutations: {
            // 상태를 변경하는 메서드들
            setSelectedCharacterIndex(state, index) {
                state.selectedCharacterIndex = index;
            },
            setData(state, payload) {
                state.playerStatsData = payload;
            },
        },
        actions: {
            // 비동기 작업 또는 복잡한 상태 변경 로직을 처리
            updateSelectedCharacterIndex({commit}, index) {
                commit('setSelectedCharacterIndex', index);
            },
            async fetchData({commit}, nickname) {
                try {
                    const response = await axios.get(`http://localhost:8001/api/nadia/playerStats/${nickname}`);
                    console.log(response.data);
                    commit('setData', response.data); // 받은 JSON 데이터를 state에 저장
                } catch (error) {
                    console.error('API 요청 중 오류 발생:', error);
                } finally {
                }
            },
        },
        getters: {
            // PlayerHeader 에서 Character 이미지
            selectedCharacterIndex: state => state.selectedCharacterIndex,
            selectedCharacterStats: state => state.playerStatsData.characterStats[state.selectedCharacterIndex],
            formattedSelectedCharacterNumber: state => state.playerStatsData.characterStats[state.selectedCharacterIndex].characterCode.toString().padStart(3, '0'),

            // 티어 표시
            computedTier: (state) => {
                // 등수 먼저 계산
                if (state.playerStatsData.rank <= 700) {
                    const rank = state.playerStatsData.rank;
                    if (rank <= 200) {
                        return "Eternity"
                    }
                    return "Demigod";
                } else {
                    // 700등 밖이면 mmr 로 계산
                    const mmr = state.playerStatsData.mmr;
                    let currentRank = null;
                    let highestRP_Start = -Infinity;

                    for (const [key, value] of Object.entries(RANK_TIER_RP_TABLE)) {
                        if (typeof value.RP_Start === 'number' && value.RP_Start <= mmr && value.RP_Start > highestRP_Start) {
                            highestRP_Start = value.RP_Start;
                            currentRank = key;
                        }
                    }
                    return currentRank;
                }


            },

            // mmr Chart
            mmrHistory: (state) => state.playerStatsData.mmrHistory,

            allData: (state) => state.playerStatsData, // state 데이터를 가져오는 getter
        }
    })
;

export default store;