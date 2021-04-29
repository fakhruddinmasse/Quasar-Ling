<template>
  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <q-card style="border-radius: 30px">

            <!-- TITLE -->
            <q-item class="bg-primary">
              <q-item-section avatar class="text-weight-bolder text-white">
                TIME
              </q-item-section>
              <q-item-section no-wrap class="text-weight-bolder text-white">TODAY'S TODO</q-item-section>
              <q-item-section avatar>
                <q-btn
                  @click="addTodo"
                  class="text-weight-bolder"
                  label="Add"
                  size="14px"
                  color="white"
                  flat
                  icon-right="mdi-plus-circle-outline"
                />
              </q-item-section>
            </q-item>

            <!-- TODO LISTS -->
            <q-item v-for="(item, i) in todosOthers" :key="i" :class="!item.done ? 'bg-white' : 'bg-green-1'" >
              <q-item-section avatar>
                <div class="cursor-pointer size-16px">
                  {{item.time}}
                <q-popup-edit v-model="item.time" class="bg-grey-2 text-white" persistent :cover="false" :offset="[0, 10]" buttons >
                  <q-input filled v-model="item.time" mask="time" :rules="['time']">
                  <template v-slot:append>
                    <q-icon name="access_time" class="cursor-pointer text-primary">
                      <q-popup-proxy transition-show="scale" transition-hide="scale">
                        <q-time v-model="item.time">
                          <div class="row items-center justify-end">
                            <q-btn v-close-popup label="Close" color="primary" flat />
                          </div>
                        </q-time>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                  </q-input>
                </q-popup-edit>
                </div>
              </q-item-section>
              <q-item-section no-wrap >
                <div :class="{done: item.done}" class="cursor-pointer text-weight-bolder" style="width: 100px">
                {{item.activity}} <q-badge v-show="i == 0" align="middle" outline color="negative" label="focus" />
                <q-popup-edit v-model="item.activity" persistent class="bg-grey-2 text-white" :cover="false" :offset="[0, 10]" buttons v-slot="scope">
                  <q-input
                    v-model="scope.value"
                    dense
                    autofocus
                    counter
                    hint="Your plan today"
                    @keyup.enter="scope.set"
                    :rules="[ val => val.length <= 30 || 'Please use maximum 30 characters']"
                  >
                    <template v-slot:append>
                      <q-icon name="edit" />
                    </template>
                  </q-input>
                </q-popup-edit>
              </div>
              </q-item-section>
              <q-item-section top side>
                <div class="text-grey-8 q-gutter-xs">
                  <q-btn v-if="i == 0 " @click="focusDone(item)" size="12px" color="secondary" flat dense round icon="mdi-check-circle" />
                  <q-btn v-if="i > 0 " @click="taskDone(item)" size="12px" color="secondary" flat dense round icon="mdi-check-circle" />
                  <q-btn v-if="i > 0 " @click="removeTodo(i)" size="12px" color="negative" flat dense round icon="mdi-delete" />

                </div>
              </q-item-section>
            </q-item>
            <!-- PROGRESS BARR -->
            <q-item class="bg-primary">
              <q-item-section avatar class="text-weight-bolder text-white">
                Progress
              </q-item-section>
              <q-item-section>
                <q-linear-progress rounded size="15px" :value="calculate / calculate2" color="white" />
              </q-item-section>
              <q-item-section avatar class="text-weight-bolder text-white">
                {{calculate}} / {{calculate2}}
              </q-item-section>
            </q-item>
          </q-card>
  </div>
</template>

<script>
import {reactive, computed} from 'vue'
import { useQuasar } from 'quasar'
export default {
  name:"Progress",
  setup() {
    const $q = useQuasar()
    const todosOthers = reactive([{
      activity:"Your Focus Today",
      time:"08:00",
      done: false
    }])

    function addTodo(){
      todosOthers.push({
        activity:"Other Task",
        time:"08:00",
        done: false
      })
    }

    function focusDone(item){
      item.done = !item.done;
      if(item.done){
        $q.dialog({
        title: 'Focus Done!',
        message: 'Congratulation! You Have Finished Your Important Task Today'
      }).onOk(() => {
        // console.log('OK')
      }).onCancel(() => {
        // console.log('Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
      }
    }


    function taskDone(item){
      item.done = !item.done;
      if(item.done){
        $q.dialog({
        title: 'Task Done!',
        message: 'Yeay! One Task Finished Today'
      }).onOk(() => {
        // console.log('OK')
      }).onCancel(() => {
        // console.log('Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
      }
    }

    function removeTodo(i){
      $q.dialog({
        title: 'Confirm',
        message: 'Delete This Task For Today?',
        ok: {
          push: true
        },
        cancel: {
          push: true,
          color: 'negative'
        },
        persistent: true
      }).onOk(() => {
        todosOthers.splice(i,1)
      })

    }

    // Reactive
    const calculate = computed(() => todosOthers.filter(item => item.done === true).length)
    const calculate2 = computed(() => todosOthers.filter(item => {return item}).length)

    // REF
    // const calculate = computed(() => todosOthers.value.filter(item => item.done === true).length)
    // const calculate2 = computed(() => todosOthers.value.filter(item => {return item}).length)



    return {
      todosOthers,
      addTodo,
      taskDone,
      focusDone,
      removeTodo,
      calculate,
      calculate2,
    }


  },
}
</script>

<style lang="scss">
.done {
  text-decoration: line-through;
  color: #b30000;

}
</style>>
