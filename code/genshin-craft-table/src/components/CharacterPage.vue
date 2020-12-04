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
                  <img src="" alt="" height="106" class="m-4">
                  <div>
                      <h2 class="h2">Name</h2>
                      <span class="h4">Element</span><span class="h4 ml-3">• Weapon Type</span>
                  </div>  
              </div>
              <div class="h4">Base Stats</div>
              <div class="statsContainer">
                  <GenshinStat name="Max HP" :stat="11453" :addStat="744"/>
                  <GenshinStat name="ATK" :stat="792" />
                  <GenshinStat name="DEF" :stat="692" />
                  <GenshinStat name="Elemental Mastery" :stat="40" />
                  <GenshinStat name="Max Stamina" :stat="240" />
              </div>
              
              <div class="h4 mt-5">Advance Stats</div>
              <div class="statsContainer">
                  <GenshinStat name="CRIT Rate" :percentage="30.3"/>
                  <GenshinStat name="CRIT DMG" :percentage="122.5" />
                  <GenshinStat name="Healing Bonus" :percentage="0.0" />
                  <GenshinStat name="Incoming Healing Bonus" :percentage="0.0" />
                  <GenshinStat name="Energy Recharge" :percentage="108.3" />
                  <GenshinStat name="Reduce CD" :percentage="0" />
                  <GenshinStat name="Powerful Shield" :percentage="0" />
              </div>

              <div class="h4 mt-5">Elemental Type</div>
              <div class="statsContainer">
                  <GenshinStat name="Pyro DMG Bonus" :percentage="30.3"/>
                  <GenshinStat name="Pyro RES" :percentage="122.5" />
                  <GenshinStat name="Hydro DMG Bonus" :percentage="0.0" />
                  <GenshinStat name="Hydro RES" :percentage="0.0" />
                  <GenshinStat name="Dendro DMG Bonus" :percentage="108.3" />
                  <GenshinStat name="Dendro RES" :percentage="0" />
                  <GenshinStat name="Electro DMG Bonus" :percentage="0" />
                  <GenshinStat name="Electro RES" :percentage="0" />
                  <GenshinStat name="Anemo DMG Bonus" :percentage="0" />
                  <GenshinStat name="Anemo RES" :percentage="0" />
                  <GenshinStat name="Cryo DMG Bonus" :percentage="0" />
                  <GenshinStat name="Cryo RES" :percentage="0" />
                  <GenshinStat name="Geo DMG Bonus" :percentage="0" />
                  <GenshinStat name="Geo RES" :percentage="0" />
                  <GenshinStat name="Physical DMG Bonus" :percentage="0" />
                  <GenshinStat name="Physical RES" :percentage="0" />
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

export default {
  data() {
    return {
      SearchIcon
    };
  },
  components:{
      CharacterList,
      GenshinStat
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