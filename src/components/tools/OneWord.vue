<template>
  <q-card style="background-color: #008080; border-radius: 15px">
      <q-expansion-item
      class="shadow-1 overflow-hidden"
      style="border-radius: 15px"
      icon="mdi-comment-processing"
      label="TODAY'S WORD"
      header-class="bg-primary text-white text-weight-bolder"
      expand-icon-class="text-white"
    >
    <q-card-section class="cursor-pointer text-weight-bolder bg-white text-center text-italic text-uppercase text-primary text-h6">
        " {{label}} "
        <q-popup-edit v-model="label" :cover="false" :offset="[0, 10]" v-slot="scope">
          <q-input
            color="primary"
            v-model="scope.value"
            dense
            autofocus
            counter
            @keyup.enter="scope.set"
            label="Your One Word For Today"
            hint="Max 12 characters"
            :rules="[ val => val.length <= 12 || 'Please use maximum 12 characters']"
          >
            <template v-slot:prepend>
              <q-icon name="record_voice_over" color="primary" />
            </template>
          </q-input>
        </q-popup-edit>
    </q-card-section>
      </q-expansion-item>
    </q-card>
</template>

<script>
import { ref, computed } from 'vue'
export default {
  name: "OneWord",
  setup(){
    const label = ref('Amazing')





    return {
      label,
    }
  }
}
</script>

<style>

</style>
