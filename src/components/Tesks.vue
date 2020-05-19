<template>
  <v-row>
    <v-card outlined style="width:100%">
      <div
        class="font-weight-medium px-2 py-2"
        style="display:flex; justify-content:space-between; align-items:center;"
      >
        <div>TASKS</div>
        <div>
          <v-btn icon>
            <v-icon>add_circle_outline</v-icon>
          </v-btn>
        </div>
      </div>
      <v-list three-line>
        <v-list-item>
          <v-list-item-avatar>
            <v-img
              src="https://avatars3.githubusercontent.com/u/21261559?s=400&u=1cc9371cf65523dce7dccffcd3824d26db4ee867&v=4"
            ></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Lorem ipsum dolor sit amet.</v-list-item-title>
            <v-list-item-subtitle>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ea?</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-row>
</template>

<script>
export default {};
</script>

<style>
</style>