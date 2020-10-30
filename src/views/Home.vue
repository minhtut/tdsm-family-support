<template>
  <v-container class="primarypa-4 text-center">
    <h2 class="primary--text">{{ $t('home-mission') }}</h2>
    <v-row
      class="fill-height"
      align="center"
      justify="center"
    >
      <template v-for="(impact, i) in impacts">
        <v-col
          :key="i"
          cols="12"
          md="6"
        >
          <v-hover v-slot="{ hover }">
            <v-card
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
            >

              <v-card-title class="primary title white--text">
                <v-row
                  class="fill-height flex-column"
                >
                  {{ $t(impact.title) }}
                </v-row>
              </v-card-title>
              <v-card-text>
                <div>
                  <p class="ma-0 body-1 font-weight-bold font-italic text-left justify">
                    {{ $t(impact.text) }}
                  </p>
                </div>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </template>
    </v-row>
    <br>
    <h2 class="primary--text">{{ $t('home-impact') }}</h2>
    <v-row
      class="fill-height"
      align="center"
      justify="center"
    >
      <template v-for="(story, i) in stories">
        <v-col
          :key="i"
          cols="12"
          md="4"
        >
          <v-hover v-slot="{ hover }">
            <v-card
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
            >

              <v-card-title class="primary title white--text">
                <v-row
                  class="fill-height flex-column"
                >
                  {{ $t(story.title) }}
                </v-row>
              </v-card-title>
              <v-card-text>
                <div>
                  <p class="ma-0 body-1 font-weight-bold font-italic text-left justify">
                    {{ $t(story.text) }}
                  </p>
                </div>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </template>
    </v-row>

    <br>
    <h2 class="primary--text">{{ $t('home-announcement') }}</h2>
    <v-row
      class="fill-height"
      align="center"
      justify="center"
    >
      <template v-for="(announcement, i) in announcements">
        <v-col
          :key="i"
          cols="12"
          md="3"
        >
          <v-hover v-slot="{ hover }">
            <v-card
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
            >

              <v-card-title class="primary title white--text">
                <v-row
                  class="fill-height flex-column"
                >
                  {{ $t(announcement.title) }}
                </v-row>
              </v-card-title>
              <v-card-text>
                <div>
                  <p class="ma-0 body-1 font-weight-bold font-italic text-left justify">
                    {{ $t(announcement.text) }}
                  </p>
                </div>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    icons: ['mdi-rewind', 'mdi-play', 'mdi-fast-forward'],
    impacts: [
      {
        title: 'home-mission-community',
        text: `home-mission-community`
      },
      {
        title: 'home-mission-culture',
        text: 'home-mission-culture'
      }
    ],
    stories: [
      {
        title: 'home-impact-story',
        text: `home-impact-story`
      }
    ],
    announcements: [
      {
        title: 'home-announcement-1',
        text: `home-announcement-1`
      },
      {
        title: 'home-announcement-1',
        text: `home-announcement-1`
      },
      {
        title: 'home-announcement-1',
        text: `home-announcement-1`
      },
      {
        title: 'home-announcement-1',
        text: `home-announcement-1`
      }
    ],
    transparent: 'rgba(255, 255, 255, 0)'
  }),
}
</script>

<style scoped>
.v-card {
  transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.8;
 }

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
