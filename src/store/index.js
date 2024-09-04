// src/store/index.js
import {createStore} from 'vuex';

const store = createStore({
    state: {
        // 애플리케이션에서 관리할 상태
        selectedCharacterIndex: 0,
        characterStats: [ // items 배열
            {
                characterName: "Jackie",
                characterImageUrl: `Character/001/1001000/mini.png`,
                bestWeapon: 13,  // 무기
                tacticalSkillGroup: 120, // 전술 스킬
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
                characterName: "Aya",
                characterImageUrl: `Character/002/1002000/mini.png`,
                bestWeapon: 13,  // 무기
                tacticalSkillGroup: 120, // 전술 스킬
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
                characterName: "Hyunwoo",
                characterImageUrl: `Character/003/1003000/mini.png`,
                bestWeapon: 13,  // 무기
                tacticalSkillGroup: 120, // 전술 스킬
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
                characterName: "Magnus",
                characterImageUrl: `Character/004/1004000/mini.png`,
                bestWeapon: 13,  // 무기
                tacticalSkillGroup: 120, // 전술 스킬
                traitFirstCore: 7200101, // 주특
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
                characterName: "Fiora",
                characterImageUrl: `Character/005/1005000/mini.png`,
                bestWeapon: 13,  // 무기
                tacticalSkillGroup: 120, // 전술 스킬
                traitFirstCore: 7100101, // 주특
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
        playerStats: {
            // totalTeamKills:203,
            averageTeamKills: 8.3, // totalTeamKills / totalGames
            averageKills: 1.4,
            averageAssistants: 2.3,

            top1: 50.07,
            top2: 60.12,
            top3: 80.16,

            totalGames: 146,
            averageDamage: 32142, // userGames 테이블에서 쿼리를 해서 가져와야할 듯
            averageRank: 9.36,

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
        // 상태를 변형하여 반환하는 메서드들 (computed 속성과 유사)
        selectedCharacterIndex: state => state.selectedCharacterIndex,
        selectedCharacterStats: state => state.characterStats[state.selectedCharacterIndex],
    }
});

export default store;