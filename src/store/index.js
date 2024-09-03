// src/store/index.js
import {createStore} from 'vuex';

const store = createStore({
    state: {
        // 애플리케이션에서 관리할 상태
        selectedCharacterIndex: 0,
        items: [ // items 배열
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
            },
            // {
            //     characterName: "Magnus",
            //     characterImageUrl: `Character/004/1004000/mini.png`,
            //     bestWeapon: 13,  // 무기
            //     tacticalSkillGroup: 120, // 전술 스킬
            //     traitFirstCore: 7200101, // 주특
            //     traitFirstSub: [
            //         7210101,
            //         7210801
            //     ],
            //     traitSecondSub: [ // 보조 특성
            //         7110101,
            //         7110401
            //     ],
            // },
            // {
            //     characterName: "Fiora",
            //     characterImageUrl: `Character/005/1005000/mini.png`,
            //     bestWeapon: 13,  // 무기
            //     tacticalSkillGroup: 120, // 전술 스킬
            //     traitFirstCore: 7100101, // 주특
            //     traitFirstSub: [
            //         7110101,
            //         7110401
            //     ],
            //     traitSecondSub: [ // 보조 특성
            //         7010701,
            //         7310301
            //     ],
            // }
        ],
        playerStats:{
            totalTeamKills:203,
            averageKills:1.4,
            averageAssistants:0,

            top1:0.07,
            top2:0.12,
            top3:0.16,

            totalGames:146,
            // averageDamage
            averageRank:9.36,
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
        selectedCharacterIndex: state => state.selectedCharacterIndex
    }
});

export default store;