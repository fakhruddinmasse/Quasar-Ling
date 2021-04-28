<template>
  <q-card style="background-color: #008080; border-radius: 15px">
      <q-expansion-item
      class="shadow-1 overflow-hidden"
      style="border-radius: 15px"
      icon="mdi-emoticon-outline"
      label="TODAY'S MOOD"
      header-class="bg-primary text-white text-weight-bolder"
      expand-icon-class="text-white"
    >
    <q-card-section class="cursor-pointer text-weight-bolder bg-white text-center text-italic text-uppercase text-primary text-h6">
      <q-rating
        v-model="rating"
        :max="4"
        size="1.5em"
        color="secondary"
        color-selected="secondary"
        :icon="icons"
      />
    </q-card-section>
      </q-expansion-item>
    </q-card>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "RatingMood",
  setup(){
    const rating = ref(2)
    const icons = ref([
        'sentiment_very_dissatisfied',
        'sentiment_dissatisfied',
        'sentiment_satisfied',
        'sentiment_very_satisfied',
      ])
    return {
      icons,
      rating
    }
  }


}
</script>

<style>

</style>
