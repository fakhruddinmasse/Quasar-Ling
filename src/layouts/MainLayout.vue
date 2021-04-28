<template>
  <q-layout view="hHh lpR fFf"  class="shadow-2 rounded-borders">

    <q-header reveal class="bg-primary text-white">
      <q-toolbar>
        <q-btn
          flat
          @click="drawerLeft = !drawerLeft"
          round
          dense
          icon="fas fa-cat"
        />
        <q-toolbar-title

          class="text-h6 text-weight-bolder"
        >

          <span class="absolute-center">
            LING PRODUCTIVITY </span>
        </q-toolbar-title>
      <q-space/>
      <div class="q-pl-md q-gutter-sm row no-wrap items-center">
          <q-btn round dense flat color="white" icon="notifications">
            <q-badge color="red" text-color="white" floating>
              5
            </q-badge>
            <q-tooltip class="text-weight-bold">Notifications</q-tooltip>
            <q-menu
            >
              <q-list style="min-width: 100px">
                <messages></messages>
                <q-card class="text-center no-shadow no-border">
                  <q-btn label="View All" style="max-width: 120px !important;" flat dense
                         class="text-indigo-8"></q-btn>
                </q-card>
              </q-list>
            </q-menu>
          </q-btn>

           <q-btn dense flat no-wrap>
            <q-avatar rounded size="26px">
              <img src="https://cdn.quasar.dev/img/avatar3.jpg">
            </q-avatar>
            <q-icon name="arrow_drop_down" size="16px" />

            <q-menu auto-close>
              <q-list dense>
                <q-item class="GL__menu-link-signed-in">
                  <q-item-section>
                    <div>Signed in as <strong>Ling-Ling</strong></div>
                  </q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Settings</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Sign out</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
      </div>
      </q-toolbar>
    </q-header>
    <q-drawer
        v-model="drawerLeft"
        show-if-above

        :mini="miniStateLeft"
        @mouseover="miniStateLeft = false"
        @mouseout="miniStateLeft = true"

        :width="200"
        :breakpoint="600"
        bordered
        class="bg-grey-3"
    >

      <q-scroll-area class="fit">
      <q-list padding>
      <q-item
        to="/"
        clickable
        v-ripple
        exact
      >
        <q-item-section avatar top>
          <q-avatar
            icon="mdi-calendar-edit"
            color="red"
            text-color="white"
          />
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-weight-bold" lines="1">Today</q-item-label>
        </q-item-section>
      </q-item>

      <q-item
        to="/week"
        clickable
        v-ripple
        exact
      >
        <q-item-section avatar top>
          <q-avatar icon="mdi-calendar-week" color="primary" text-color="white" />
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-weight-bold"  lines="1">Week</q-item-label>
        </q-item-section>

      </q-item>

      <q-item
        to="/month"
        clickable
        v-ripple
        exact
      >
        <q-item-section avatar top>
          <q-avatar icon="mdi-calendar-month" color="primary" text-color="white" />
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-weight-bold" lines="1">Month</q-item-label>
        </q-item-section>

      </q-item>

      <q-item
        to="/year"
        clickable
        v-ripple
        exact
      >
        <q-item-section avatar top>
          <q-avatar icon="mdi-calendar-blank" color="primary" text-color="white" />
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-weight-bold" lines="1">Year</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
    <q-separator />
    <q-item
      to="/focus"
      clickable
      v-ripple
      exact
    >
        <q-item-section avatar top>
          <q-avatar icon="mdi-bullseye-arrow" color="black" text-color="white" />
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-weight-bold text-red-10" lines="1" >Focus/Priority</q-item-label>
        </q-item-section>
      </q-item>
    </q-scroll-area>


    </q-drawer>

    <q-footer>
       <q-tabs
        dense
        no-caps
        inline-label
        class="bg-primary text-white shadow-2"

      >
        <q-tab icon="mdi-calendar-month" label="Other" />
        <q-separator vertical dark inset />
        <q-tab icon="mdi-calendar-edit" label="Today" />
        <q-separator vertical dark inset />
        <q-tab icon="mdi-bullseye-arrow" label="Priority" />
      </q-tabs>

      </q-footer>
    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref, defineComponent } from 'vue';
import Messages from '../layouts/Messages.vue'

export default defineComponent({
  name: 'MainLayout',
  components: {
    Messages
  },
  setup () {
    const drawerRight = ref(false);
    const drawerLeft = ref(false);
    const miniStateLeft = ref(true);
    const miniStateRight = ref(true);

    return {
      drawerRight,
      drawerLeft,
      miniStateLeft,
      miniStateRight
    }
  }

})

</script>

<style>

@media screen and (min-width: 600px) {
  .q-footer {
    display: none;
  }
}

</style>
