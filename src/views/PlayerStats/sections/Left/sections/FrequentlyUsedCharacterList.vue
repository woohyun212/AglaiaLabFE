<template>
  <div class="view-2">
    <div class="text-wrapper-107">자주 사용한 실험체</div>
    <TableHead />
    <img class="line-8" alt="Line" src="https://c.animaapp.com/SjFnLgAk/img/line-17.svg" />
    <Tr />
    <TrWrapper />
    <Tr1 />
    <Tr2 />
    <Tr3 />
    <Tr4 />
    <img class="line-9" alt="Line" src="https://c.animaapp.com/SjFnLgAk/img/line-17.svg" />
    <img class="line-10" alt="Line" src="https://c.animaapp.com/SjFnLgAk/img/line-17.svg" />
    <img class="line-11" alt="Line" src="https://c.animaapp.com/SjFnLgAk/img/line-17.svg" />
    <img class="line-12" alt="Line" src="https://c.animaapp.com/SjFnLgAk/img/line-17.svg" />
    <img class="line-13" alt="Line" src="https://c.animaapp.com/SjFnLgAk/img/line-17.svg" />
    <img class="line-14" alt="Line" src="https://c.animaapp.com/SjFnLgAk/img/line-17.svg" />
  </div>
</template>

<script>
import TableHead from "@/views/PlayerStats/sections/Left/sections/FrequentlyUsedCharacterList/sections/TableHead.vue";
import Tr from "@/views/PlayerStats/sections/Left/sections/FrequentlyUsedCharacterList/sections/Tr.vue";
import Tr1 from "@/views/PlayerStats/sections/Left/sections/FrequentlyUsedCharacterList/sections/Tr1.vue";
import Tr2 from "@/views/PlayerStats/sections/Left/sections/FrequentlyUsedCharacterList/sections/Tr2.vue";
import Tr3 from "@/views/PlayerStats/sections/Left/sections/FrequentlyUsedCharacterList/sections/Tr3.vue";
import Tr4 from "@/views/PlayerStats/sections/Left/sections/FrequentlyUsedCharacterList/sections/Tr4.vue";
import TrWrapper from "@/views/PlayerStats/sections/Left/sections/FrequentlyUsedCharacterList/sections/TrWrapper.vue";

export default {
  name: "FrequentlyUsedCharacterList",
  components: {
    TableHead,
    Tr,
    Tr1,
    Tr2,
    Tr3,
    Tr4,
    TrWrapper,
  },
};
</script>


<style>
.view-2 {
  height: 351px;
  left: 8px;
  position: absolute;
  top: 443px;
  width: 323px;
}

.view-2 .text-wrapper-107 {
  color: #000000;
  font-family: "Noto Sans KR", Helvetica;
  font-size: 20px;
  font-weight: 700;
  left: 8px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
}

.view-2 .line-8 {
  height: 1px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 56px;
  width: 317px;
}

.view-2 .line-9 {
  height: 1px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 106px;
  width: 317px;
}

.view-2 .line-10 {
  height: 1px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 154px;
  width: 317px;
}

.view-2 .line-11 {
  height: 1px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 204px;
  width: 317px;
}

.view-2 .line-12 {
  height: 1px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 252px;
  width: 317px;
}

.view-2 .line-13 {
  height: 1px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 302px;
  width: 317px;
}

.view-2 .line-14 {
  height: 1px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 350px;
  width: 317px;
}

</style>