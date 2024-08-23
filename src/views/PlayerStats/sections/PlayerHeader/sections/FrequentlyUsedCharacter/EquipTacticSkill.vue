<script>
export default {
  name: "EquipTacticSkill",
}
</script>

<template>
    <div class="equip-tactic-skill">
        <img class="tactic-skill" alt="tactic-skill" src="../../../../../../assets/ER/Loadout/Tactical Skills/01. Blink.png"/>
        <img alt="Weapon" src="../../../../../../assets/ER/Item/01. Weapons/03. Axe/001. Hatchet.png"/>
        <img alt="Chest" src="../../../../../../assets/ER/Item/02. Armor/01. Chest/002. Shirt.png"/>
        <img alt="Head" src="../../../../../../assets/ER/Item/02. Armor/02. Head/002. Hat_모자.png"/>
        <img alt="Arm" src="../../../../../../assets/ER/Item/02. Armor/03. Arm/001. Watch_손목시계.png"/>
        <img alt="Leg" src="../../../../../../assets/ER/Item/02. Armor/04. Leg/001. Running Shoes_운동화.png"/>
    </div>
</template>

<style scoped>
.equip-tactic-skill {
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 26%;
  justify-content: space-evenly;
  align-items: center;
}

.equip-tactic-skill .tactic-skill {
  width: 7.5%;
}

.equip-tactic-skill img {
  width: 15%;
  object-fit: contain;
}
</style>