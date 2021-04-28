<template>
  <div>
    <q-item style="max-width: 420px" v-for="msg in messages" :key="msg.id" clickable v-ripple>
      <q-item-section avatar>
        <q-avatar>
          <img :src="msg.avatar">
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ msg.name }}</q-item-label>
        <q-item-label caption lines="1">{{ msg.msg }}</q-item-label>
      </q-item-section>

      <q-item-section side>
        {{msg.time}}
      </q-item-section>
    </q-item>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Messages',
  setup() {
    const messages = ref(
      [
        {
          id: 1,
          name: 'Ling',
          msg: ' -- I\'ll be in your neighborhood doing errands this\n' +
                            '            weekend. Do you want to grab brunch?',
          avatar: 'https://avatars2.githubusercontent.com/u/34883558?s=400&v=4',
          time: '10:42 PM'
        }, {
          id: 2,
          name: 'Baso',
          msg: ' -- I\'ll be in your neighborhood doing errands this\n' +
                            '            weekend. Do you want to grab brunch?',
          avatar: 'https://cdn.quasar.dev/img/avatar6.jpg',
          time: '11:17 AM'
      },
      {
          id: 3,
          name: 'Snowy',
          msg: ' -- I\'ll be in your neighborhood doing errands this\n' +
                            '            weekend. Do you want to grab brunch?',
          avatar: 'https://cdn.quasar.dev/img/avatar6.jpg',
          time: '11:17 AM'
      }
      ]
    )

    return {
      messages,
    }
  },
})
</script>


<style scoped>

</style>
