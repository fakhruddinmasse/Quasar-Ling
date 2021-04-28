<template>
  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
    <!-- FIRST PART -->
    <q-card style="background-color: #008080; border-radius: 15px">
      <q-expansion-item
      class="shadow-1 overflow-hidden"
      style="border-radius: 15px"
      icon="mdi-notebook-edit"
      label="TODAY'S NOTE / DIARY"
      header-class="bg-primary text-white text-weight-bolder"
      expand-icon-class="text-white"
    >
    <q-card-section>
      <q-editor
        v-model="editor"
        min-height="5rem"
        content-class="bg-amber-3"
        toolbar-text-color="white"
        toolbar-toggle-color="black"
        toolbar-bg="secondary"
        :toolbar="[
        ['fullscreen'],
        [{
            label: $q.lang.editor.fontSize,
            icon: $q.iconSet.editor.fontSize,
            fixedLabel: true,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'size-1',
              'size-2',
              'size-3',
              'size-4',
              'size-5',
              'size-6',
              'size-7'
            ]
          }],
        ['bold', 'italic', 'underline'],
        [
          {
            label: $q.lang.editor.align,
            icon: $q.iconSet.editor.align,
            fixedLabel: true,
            list: 'only-icons',
            options: ['left', 'center', 'right', 'justify']
          }
        ],
        ['unordered', 'ordered'],
      ]"

      />
    </q-card-section>
      </q-expansion-item>
    </q-card>

    <!-- SECOND PART -->
    <div class="q-pt-xs">
      <div class="row q-gutter-x-xs">
        <div class="col">
        <OneWord />
        </div>
        <div class="col">
        <RatingMood />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import OneWord from '../tools/OneWord.vue'
import RatingMood from '../tools/RatingMood.vue'
export default {
  name: "Note",
  components: {
    OneWord,
    RatingMood
  },
  setup(){
    const editor = ref("Type Your Note For Today")

    return {
      editor,
    }
  }
}
</script>

<style>

</style>
