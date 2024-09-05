// src/store/index.js
import {createStore} from 'vuex';
import {RANK_TIER_RP_TABLE} from '@/data'

const store = createStore({
        state: {
            // 애플리케이션에서 관리할 상태
            selectedCharacterIndex: 0,
            playerStatsData: {
                mmr: 6400,
                nickname: "한계를뛰어넘는별",
                rank: 1000,
                rankSize: 216619,
                rankPercent: 0.02,
                tireMmr: 2202, // 만들어야함

                // totalTeamKills:203,
                averageTeamKills: 8.3, // totalTeamKills / totalGames
                averageKills: 1.4,
                averageAssistants: 2.3,

                top1: 50.07,
                top2: 60.12,
                top3: 80.16,

                totalGames: 146,
                totalWins: 52,
                averageDamage: 32142, // userGames 테이블에서 쿼리를 해서 가져와야할 듯
                averageRank: 9.36,

                characterStats: [ // items 배열
                    {
                        characterCode: 1,
                        // characterName: "Jackie",
                        mostUsedSkinCode: 1001004,
                        bestWeapon: 13,  // 무기
                        tacticalSkillGroup: 70, // 전술 스킬
                        traitFirstCore: 7000401, // 주특
                        traitFirstSub: [
                            7010311,
                            7011001
                        ],
                        traitSecondSub: [ // 보조 특성
                            7110101,
                            7110401
                        ],

                        averageTeamKills: 1.2,
                        averageKills: 3.4,
                        averageAssistants: 5,

                        top1: 6.07,
                        top2: 8.09,
                        top3: 10.01,

                        totalGames: 23,
                        averageDamage: 45678,
                        averageRank: 1.23,

                    },
                    {
                        characterCode: 2,
                        // characterName: "Aya",
                        mostUsedSkinCode: 1002004,
                        bestWeapon: 10,  // 무기
                        tacticalSkillGroup: 30, // 전술 스킬
                        traitFirstCore: 7000501, // 주특
                        traitFirstSub: [
                            7310201,
                            7310101
                        ],
                        traitSecondSub: [ // 보조 특성
                            7211101,
                            7210801
                        ],

                        averageTeamKills: 4.5,
                        averageKills: 6.7,
                        averageAssistants: 8.9,

                        top1: 10.09,
                        top2: 8.07,
                        top3: 6.54,

                        totalGames: 321,
                        averageDamage: 10987,
                        averageRank: 9.36,
                    },
                    {
                        characterCode: 7,
                        // characterName: "Hyunwoo",
                        mostUsedSkinCode: 1007003,
                        bestWeapon: 1,  // 무기
                        tacticalSkillGroup: 30, // 전술 스킬
                        traitFirstCore: 7100501, // 주특
                        traitFirstSub: [
                            7111001,
                            7110601
                        ],
                        traitSecondSub: [ // 보조 특성
                            7010601,
                            7011001
                        ],

                        averageTeamKills: 9.2,
                        averageKills: 4.5,
                        averageAssistants: 2.4,

                        top1: 11.22,
                        top2: 44.33,
                        top3: 55.66,

                        totalGames: 77,
                        averageDamage: 88888,
                        averageRank: 9.99,
                    },
                    {
                        characterCode: 4,
                        // characterName: "Magnus",
                        mostUsedSkinCode: 1004002,
                        bestWeapon: 3,  // 무기
                        tacticalSkillGroup: 120, // 전술 스킬
                        traitFirstCore: 7200201, // 주특
                        traitFirstSub: [
                            7210101,
                            7210801
                        ],
                        traitSecondSub: [ // 보조 특성
                            7110101,
                            7110401
                        ],

                        averageTeamKills: 6.2,
                        averageKills: 4.5,
                        averageAssistants: 2.4,

                        top1: 22.22,
                        top2: 33.33,
                        top3: 44.44,

                        totalGames: 55,
                        averageDamage: 123,
                        averageRank: 2.12,
                    },
                    {
                        characterCode: 67,
                        // characterName: "Fiora",
                        mostUsedSkinCode: 1067002,
                        bestWeapon: 13,  // 무기
                        tacticalSkillGroup: 130, // 전술 스킬
                        traitFirstCore: 7100201, // 주특
                        traitFirstSub: [
                            7110101,
                            7110401
                        ],
                        traitSecondSub: [ // 보조 특성
                            7010701,
                            7310301
                        ],

                        averageTeamKills: 1.2,
                        averageKills: 4.3,
                        averageAssistants: 7.2,

                        top1: 33.33,
                        top2: 44.44,
                        top3: 11.22,

                        totalGames: 99,
                        averageDamage: 3256,
                        averageRank: 3.2,
                    }
                ],
            }
        },
        mutations: {
            // 상태를 변경하는 메서드들
            setSelectedCharacterIndex(state, index) {
                state.selectedCharacterIndex = index;
            }
        },
        actions: {
            // 비동기 작업 또는 복잡한 상태 변경 로직을 처리
            updateSelectedCharacterIndex({commit}, index) {
                commit('setSelectedCharacterIndex', index);
            }
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

        }
    })
;

export default store;