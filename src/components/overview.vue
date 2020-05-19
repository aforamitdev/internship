<template>
  <div>
    <v-card outlined class="d-inline-block" style="width:100%">
      <v-list-item-content>
        <div style="padding:10px">
          <div>
            <div
              class="font-weight-medium px-2 py-2"
              style="display:flex; justify-content:space-between; align-items:center;"
            >
              <div>INFORMATION</div>
              <div>
                <v-btn icon>
                  <v-icon>add_circle_outline</v-icon>
                </v-btn>
              </div>
            </div>
          </div>
          <div class="px-5">
            <v-row justify class="py-3">
              <div class="font-weight-bold text--secondary subtitle-1">EMAIL</div>
              <div class="font-weight-medium px-5 text--secondary subtitle-1">aforamitrai@gmail</div>
            </v-row>
            <v-divider></v-divider>
            <v-row class="py-3">
              <div class="font-weight-bold text--secondary subtitle-1">PHONE</div>
              <div class="font-weight-medium px-5 text--secondary subtitle-1">+919757032147</div>
            </v-row>
            <v-divider></v-divider>

            <v-row class="py-3">
              <div class="font-weight-bold text--secondary subtitle-1">SOCIAL</div>
              <div class="font-weight-medium px-5 text--secondary subtitle-1">aforamitrai@gmail</div>
            </v-row>
          </div>
        </div>
      </v-list-item-content>
    </v-card>
    <v-spacer></v-spacer>
    <v-card outlined class="d-inline-block my-5" style="width:100%">
      <v-list-item-content>
        <div style="padding:10px">
          <div>
            <div>
              <div
                class="font-weight-medium px-2 py-2"
                style="display:flex; justify-content:space-between; align-items:center;"
              >
                <div>EXPRIENCE</div>
                <div>
                  <v-btn icon>
                    <v-icon>add_circle_outline</v-icon>
                  </v-btn>
                </div>
              </div>
            </div>
          </div>
          <div class="px-5">
            <h3 class="text--secondary subtitle-1">Lead Designers</h3>
            <h4 class="text--secondary subtitle-1">SEPT 2019-DEC 2019</h4>
            <p
              class="text--secondary subtitle-1"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </v-list-item-content>
    </v-card>
    <!-- lste click -->
    <v-container>
      <v-row>
        <v-col md="12">
          <v-card outlined class="d-inline-block my-5" style="width:100%">
            <v-list-item-content>
              <div style="padding:10px">
                <div>
                  <div>
                    <div
                      class="font-weight-medium px-2 py-2"
                      style="display:flex; justify-content:space-between; align-items:center;"
                    >
                      <div>EDUCATION</div>
                      <div>
                        <v-btn icon>
                          <v-icon>add_circle_outline</v-icon>
                        </v-btn>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="px-5">
                  <h2 class="text--secondary subtitle-1 font-weight-bold">SSC</h2>
                  <h4 class="text--secondary subtitle-2">MVHS</h4>
                  <p class="text--secondary subtitle-2">SEPT 2019</p>
                </div>
                <div class="px-5">
                  <h2 class="text--secondary subtitle-1 font-weight-bold">Higher Secondary</h2>
                  <h4 class="text--secondary subtitle-2">MVHS</h4>
                  <p class="text--secondary subtitle-2">SEPT 2019</p>
                </div>
              </div>
            </v-list-item-content>
          </v-card>
        </v-col>
        <v-col md="12">
          <v-card outlined class="d-inline-block my-5" style="width:100%">
            <v-list-item-content>
              <div style="padding:10px">
                <div>
                  <div>
                    <div
                      class="font-weight-medium px-2 py-2"
                      style="display:flex; justify-content:space-between; align-items:center;"
                    >
                      <div>SKILLS</div>
                      <div>
                        <v-btn icon>
                          <v-icon>add_circle_outline</v-icon>
                        </v-btn>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="px-5">
                  <v-chip class="ma-2" color="secondary">Python</v-chip>
                  <v-chip class="ma-2" color="secondary">javascript</v-chip>
                  <v-chip class="ma-2" color="secondary">R</v-chip>
                  <v-chip class="ma-2" color="secondary">Rust</v-chip>
                  <v-chip class="ma-2" color="secondary">C#</v-chip>
                  <v-chip class="ma-2" color="secondary">nodeJS</v-chip>
                  <v-chip class="ma-2" color="secondary">Reactjs</v-chip>
                </div>
              </div>
            </v-list-item-content>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>