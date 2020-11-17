<template>
  <div>

    <div class="horizontal-scroll-wrapper rectangles">
      <div v-for="(character, index) in Characters" :key="index">
      <GenshinIcon
        class="genshinCharacter"
        :height="135"
        :width="110"
        :name="character.name"
        :iconImageSrc="character.icon"
        :clickHandler="clickIcon(character.name)"
      />
    </div>
    </div>
  </div>
</template>

<script>
import GenshinIcon from "./GenshinIcon";

import AmberIcon from "../assets/images/Amber.png";
import BarbaraIcon from "../assets/images/Barbara.png";
import BeidouIcon from "../assets/images/Beidou.png";
import BennettIcon from "../assets/images/Bennett.png";
import ChildeIcon from "../assets/images/Childe.png";
import ChongyunIcon from "../assets/images/Chongyun.png";
import DilucIcon from "../assets/images/Diluc.png";
import DionaIcon from "../assets/images/Diona.png";
import FischlIcon from "../assets/images/Fischl.png";
import JeanIcon from "../assets/images/Jean.png";
import KaeyaIcon from "../assets/images/Kaeya.png";
import KeqingIcon from "../assets/images/Keqing.png";
import KleeIcon from "../assets/images/Klee.png";
import LisaIcon from "../assets/images/Lisa.png";
import MonaIcon from "../assets/images/Mona.png";
import NingguangIcon from "../assets/images/Ningguang.png";
import NoelleIcon from "../assets/images/Noelle.png";
import QiqiIcon from "../assets/images/Qiqi.png";
import RazorIcon from "../assets/images/Razor.png";
import SucroseIcon from "../assets/images/Sucrose.png";
import TravelerIcon from "../assets/images/Traveler.png";
import VentiIcon from "../assets/images/Venti.png";
import XianglingIcon from "../assets/images/Xiangling.png";
import XiaoIcon from "../assets/images/Xiao.png";
import XingqiuIcon from "../assets/images/Xingqiu.png";

import { useStore } from "vuex";
export default {
     data() {
    return {
      Characters: [
        {
          name: "Amber",
          icon: AmberIcon,
        },
        {
          name: "Barbara",
          icon: BarbaraIcon,
        },
        {
          name: "Beidou",
          icon: BeidouIcon,
        },
        {
          name: "Bennett",
          icon: BennettIcon,
        },
        {
          name: "Childe",
          icon: ChildeIcon,
        },
        {
          name: "Chongyun",
          icon: ChongyunIcon,
        },
        {
          name: "Diluc",
          icon: DilucIcon,
        },
        {
          name: "Diona",
          icon: DionaIcon,
        },
        {
          name: "Fischl",
          icon: FischlIcon,
        },
        {
          name: "Jean",
          icon: JeanIcon,
        },
        {
          name: "Kaeya",
          icon: KaeyaIcon,
        },
        {
          name: "Keqing",
          icon: KeqingIcon,
        },
        {
          name: "Klee",
          icon: KleeIcon,
        },
        {
          name: "Lisa",
          icon: LisaIcon,
        },
        {
          name: "Mona",
          icon: MonaIcon,
        },
        {
          name: "Ningguang",
          icon: NingguangIcon,
        },
        {
          name: "Noelle",
          icon: NoelleIcon,
        },
        {
          name: "Qiqi",
          icon: QiqiIcon,
        },
        {
          name: "Razor",
          icon: RazorIcon,
        },
        {
          name: "Sucrose",
          icon: SucroseIcon,
        },
        {
          name: "Traveler",
          icon: TravelerIcon,
        },
        {
          name: "Venti",
          icon: VentiIcon,
        },
        {
          name: "Xiangling",
          icon: XianglingIcon,
        },
        {
          name: "Xiao",
          icon: XiaoIcon,
        },
        {
          name: "Xingqiu",
          icon: XingqiuIcon,
        },
      ],
    };
  },
  components: {
    GenshinIcon,
  },
  methods: {
    clickIcon(name) {
      let store = useStore();

      return function () {
        store.commit("characterSelected", name);
      };
    },
  },
}
</script>

<style scoped>
::-webkit-scrollbar{width:2px;height:2px;}
::-webkit-scrollbar-button{width:2px;height:2px;}

div{
  box-sizing:border-box;
}

body {
  background: #111;
}

.horizontal-scroll-wrapper{
  position:absolute;
  display:block;
  text-align: center;
  top:0;
  right:0;
  width:170px;
  height:100vw;
  margin:0;
  overflow-y:auto;
  overflow-x:hidden;
  transform:rotate(-90deg) translateX(58vw);
  transform-origin:right bottom;
}

.horizontal-scroll-wrapper > div{
  display:block;
  transform:rotate(90deg);
  transform-origin: right bottom;
}


.rectangles{
  bottom:0px;
}

.rectangles > div{
  width:130px;
  transform:rotate(90deg) translateY(125px);
  transform-origin: right bottom;
}

</style>