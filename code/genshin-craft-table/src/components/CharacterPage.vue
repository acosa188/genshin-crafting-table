<template>
  <div class="characterPageClass">
    <div class="row">
      <div class="col-sm-5">
        <div class="d-flex flex-column">
          <!-- Search Bar -->
          <div class="characterSearchBar ml-auto">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Search..."
                aria-label="Search"
                aria-describedby="basic-addon1"
              />
              <div class="input-group-append">
                <span class="input-group-text" id="basic-addon1">
                    <img :src="SearchIcon" alt="" height="20">
                </span>
              </div>
            </div>
          </div>

          <!-- Character Details -->
          <div class="characterDetails">
              <div class="d-flex">
                  <img :src="characterIcon" alt="" height="106" class="mx-4 mb-4">
                  <div>
                      <h2 class="h2">{{characterName}}</h2>
                      <span class="h4">Element</span><span class="h4 ml-3">• Weapon Type</span>
                  </div>  
              </div>
              <div class="h4">Base Stats</div>
              <div class="statsContainer">
                  <GenshinStat name="Max HP" :stat="toNumbers(characterBaseStat.baseStats.maxHP)"/>
                  <GenshinStat name="ATK" :stat="toNumbers(characterBaseStat.baseStats.atk)" />
                  <GenshinStat name="DEF" :stat="toNumbers(characterBaseStat.baseStats.def)" />
                  <GenshinStat name="Elemental Mastery" :stat="toNumbers(characterBaseStat.baseStats.elementalMastery)" />
                  <GenshinStat name="Max Stamina" :stat="toNumbers(characterBaseStat.baseStats.maxStamina)" />
              </div>
              
              <div class="h4 mt-5">Advance Stats</div>
              <div class="statsContainer">
                  <GenshinStat name="CRIT Rate" :percentage="toNumbers(characterBaseStat.advanceStats.critRate)"/>
                  <GenshinStat name="CRIT DMG" :percentage="toNumbers(characterBaseStat.advanceStats.critDamage)" />
                  <GenshinStat name="Healing Bonus" :percentage="toNumbers(characterBaseStat.advanceStats.healingBonus)" />
                  <GenshinStat name="Incoming Healing Bonus" :percentage="toNumbers(characterBaseStat.advanceStats.incomingHealingBonus)" />
                  <GenshinStat name="Energy Recharge" :percentage="toNumbers(characterBaseStat.advanceStats.energyRecharge)" />
                  <GenshinStat name="Reduce CD" :percentage="toNumbers(characterBaseStat.advanceStats.reduceCD)" />
                  <GenshinStat name="Powerful Shield" :percentage="toNumbers(characterBaseStat.advanceStats.powerfulShield)" />
              </div>

              <div class="h4 mt-5">Elemental Type</div>
              <div class="statsContainer">
                  <GenshinStat name="Pyro DMG Bonus" :percentage="toNumbers(characterBaseStat.elementalType.pyroDamageBonus)"/>
                  <GenshinStat name="Pyro RES" :percentage="toNumbers(characterBaseStat.elementalType.pyroRes)" />
                  <GenshinStat name="Hydro DMG Bonus" :percentage="toNumbers(characterBaseStat.elementalType.hydroDamageBonus)" />
                  <GenshinStat name="Hydro RES" :percentage="toNumbers(characterBaseStat.elementalType.hydroRes)" />
                  <GenshinStat name="Dendro DMG Bonus" :percentage="toNumbers(characterBaseStat.elementalType.dendroDamageBonus)" />
                  <GenshinStat name="Dendro RES" :percentage="toNumbers(characterBaseStat.elementalType.dendroRes)" />
                  <GenshinStat name="Electro DMG Bonus" :percentage="toNumbers(characterBaseStat.elementalType.electroDamageBonus)" />
                  <GenshinStat name="Electro RES" :percentage="toNumbers(characterBaseStat.elementalType.electroRes)" />
                  <GenshinStat name="Anemo DMG Bonus" :percentage="toNumbers(characterBaseStat.elementalType.anemoDamageBonus)" />
                  <GenshinStat name="Anemo RES" :percentage="toNumbers(characterBaseStat.elementalType.anemoRes)" />
                  <GenshinStat name="Cryo DMG Bonus" :percentage="toNumbers(characterBaseStat.elementalType.cryoDamageBonus)" />
                  <GenshinStat name="Cryo RES" :percentage="toNumbers(characterBaseStat.elementalType.cryoRes)" />
                  <GenshinStat name="Geo DMG Bonus" :percentage="toNumbers(characterBaseStat.elementalType.geoDamageBonus)" />
                  <GenshinStat name="Geo RES" :percentage="toNumbers(characterBaseStat.elementalType.geoRes)" />
                  <GenshinStat name="Physical DMG Bonus" :percentage="toNumbers(characterBaseStat.elementalType.physicalDamageBonus)" />
                  <GenshinStat name="Physical RES" :percentage="toNumbers(characterBaseStat.elementalType.physicalRes)" />
              </div>

          </div>
        </div>
      </div>

      <!-- Character Crafting Section -->
      <div class="col-sm-7">
        <div class="d-flex h-100 align-items-end">
            <div class="craftingSection"></div> 
        </div>
      </div>
    </div>

    <!-- Character List --> 
    <CharacterList :normal="false"/>
   
  </div>
</template>

<script>
import SearchIcon from "../assets/images/search-solid.svg";
import CharacterList from "./CharacterList";
import GenshinStat from './GenshinStat';
import { useStore } from 'vuex';



export default {
  data() {
    return {
      SearchIcon
    };
  },
  components:{
      CharacterList,
      GenshinStat
  },
  computed:{
    characterBaseStat(){
      const store = useStore();
      let baseStats = store.state.baseStats; 
     
      return baseStats;
    },
    characterName(){
      const store = useStore();
      
      let charName = store.state.characterSelected;
      return charName;
    },
    characterIcon(){
      const store = useStore();

      let icon = store.state.characterIcon;
      return icon;
    }
  },
  methods:{
    toNumbers(str){
      return parseFloat(str.replace('%',''));
    }
  }
};
</script>

<style scoped>
::-webkit-scrollbar{width:2px;height:2px;}
::-webkit-scrollbar-button{width:2px;height:2px;}

.characterDetails{
    height: 600px;
    background-color: #ffffffd3;
    border-radius: 5px 0 0 5px;

    padding: 15px;
    overflow-y: auto;
}

.craftingSection{
    height: 600px;
    width: 100%;
    background-color: #ffffffd3;
    border-radius: 0 5px 5px 0;
}

.h2{
    font-size: 1.875rem;
    color: #1d1d1dbe;
}

.h4{
    font-size: 1.5rem;
    color: #1d1d1dbe;
}
</style>