<template>
  <q-page class="q-pa-sm">
    <div class="row q-col-gutter-sm  q-py-sm">
    <Progress />
    <Note />
    </div>
  </q-page>
</template>
<script>
import Progress from '../components/today/Progress.vue'
import Note from '../components/today/Note.vue'
export default {
  name:"Today",
  components:{
    Progress,
    Note
  },
  setup() {

  },
}
</script>
