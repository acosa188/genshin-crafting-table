<template>
  <div class="row px-4 py-2">
    <div class="col-sm-6">
        <div class="h2">{{name}}</div>
    </div>
    <div class="col-sm-3">
        <div v-if="!percentage" class="h2">
            {{stat}}

            <!-- Some Edge case -->
            <div v-if="percentage === 0">{{percentage}}.0%</div>
        </div>
        <div v-else class="h2">
            {{percentage}}%
        </div>
    </div>
    <div class="col-sm-3">
        <div v-if="addStat" class="h2" id="addStats">+{{addStat}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
      name: String,
      stat: Number,
      addStat: Number,
      percentage: Number
  }
};
</script>

<style scoped>
.h2{
    color:#1d1d1dbe;
    font-size: 1.875rem;
}

#addStats{
    color:#69B161;
}
</style>