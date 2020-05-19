<template>
  <v-app class="gray">
    <!-- heading -->
    <nav>
      <v-toolbar flat>
        <v-toolbar-side-icon class="gray" @click="show=!show">
          <v-icon>dehaze</v-icon>
        </v-toolbar-side-icon>
        <v-toolbar-title class="text-uppercase gray--text">
          <span class="font-weight-light mx-3">Amit ria</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text>
          <span>BACK</span>
          <v-icon right>exit_to_app</v-icon>
        </v-btn>
      </v-toolbar>
      <v-navigation-drawer absolute temporary app v-model="show">
        <v-list class="mx-2 my-2">
          <v-list-tile>
            <v-list-tile-action style="widht:100%">
              <v-btn text>
                <v-icon class="mx-4">dashboard</v-icon>
                <span>Dashboard</span>
              </v-btn>
            </v-list-tile-action>
            <v-list-tile-action>
              <v-btn text>
                <v-icon class="mx-4">folder</v-icon>
                <span>Folder</span>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    </nav>
    <!-- headeing  -->

    <v-container style="width:100vw" mx-auto>
      <v-row>
        <v-col xs="12" lg="8" sm="12" md="12">
          <v-card class outlined>
            <div style="display:flex;" class="mx-5 my-6">
              <div>
                <v-avatar size="102">
                  <img
                    src="https://avatars3.githubusercontent.com/u/21261559?s=400&u=1cc9371cf65523dce7dccffcd3824d26db4ee867&v=4"
                    alt
                  />
                </v-avatar>
              </div>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="headline">Amit Rai</div>
                  <v-list-item-subtitle class="subtitle-2">Full-Stack Developer</v-list-item-subtitle>
                  <v-list-item-subtitle>Last Active: 25 minuts ago</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </div>
            <v-tabs class="px-10">
              <v-tab>Overview</v-tab>
              <v-tab>Activities</v-tab>
              <v-tab>Assessment</v-tab>
              <v-tab>Files</v-tab>
              <v-tab>Resume</v-tab>
            </v-tabs>
          </v-card>
        </v-col>
        <v-col xs="12" lg="4" sm="12" md="12">
          <JobList />
        </v-col>
      </v-row>
      <!-- <v-row class="blue" style="width:100vw">
        <v-col lg="8" class="red">as</v-col>
      </v-row>-->
    </v-container>
    <v-container>
      <v-row>
        <v-col lg="8" md="12" sm="12">
          <v-container id="scroll-target" style="max-height: 400px;" class="overflow-y-auto">
            <v-row v-scroll:#scroll-target="onScroll">
              <Overview />
            </v-row>
          </v-container>
        </v-col>
        <v-col lg="4" md="12">
          <v-container>
            <Notes />
            <v-divider class="my-3"></v-divider>
            <Tasks />
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template> 

<script>
import JobList from "./components/JobList";
import Overview from "./components/overview";
import Notes from "./components/Notes";
import Tasks from "./components/Tesks";
export default {
  components: {
    JobList,
    Overview,
    Notes,
    Tasks
  },
  data() {
    return {
      show: null
    };
  }
};
</script>
<style lang="stylus" scoped></style>