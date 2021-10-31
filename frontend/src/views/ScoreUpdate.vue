<template>
  <v-card class="mt-10 mx-5" style="">
    <v-row justify="center" style="">
      <v-col cols="4" sm="4" md="4" lg="4" class="px-0 pt-7 text-center">
        <h2>{{ currentPlayers[0].name }}</h2>
      </v-col>
      <v-col cols="4" sm="4" md="4" lg="4" class="px-0 text-center">
        <v-chip
          class="ma-2"
          large
          label
          color="light-blue"
          style="width: 200px"
        >
          <h1 class="white--text" style="text-align: center; margin-left: 50%">
            {{ currentScore }}/{{ wickets }}
          </h1>
        </v-chip>
      </v-col>
      <v-col cols="4" sm="4" md="4" lg="4" class="px-0 pt-7 text-center">
        <h2>{{ currentPlayers[1].name }}</h2>
      </v-col>
    </v-row>

    <v-row justify="center" style="">
      <v-col cols="4" sm="4" md="4" lg="4" class="px-0 text-center">
        <div style="font-weight: bold">&nbsp;</div>
        <v-chip
          class="ma-2"
          color="primary"
          outlined
          label
          style="width: 100px; padding-left: 9%"
        >
          {{ currentPlayers[0].score }}
        </v-chip>
      </v-col>
      <v-col cols="4" sm="4" md="4" lg="4" class="px-0 text-center">
        <div style="font-weight: bold">Extras</div>
        <v-chip
          class="ma-2 text-center"
          color="primary"
          outlined
          label
          style="width: 100px; padding-left: 9.5%; align: center"
        >
          {{ extra }}
        </v-chip>
      </v-col>
      <v-col cols="4" sm="4" md="4" lg="4" class="px-0 text-center">
        <div style="font-weight: bold">&nbsp;</div>
        <v-chip
          class="ma-2"
          color="primary"
          outlined
          label
          style="width: 100px; padding-left: 9%"
        >
          {{ currentPlayers[1].score }}
        </v-chip>
      </v-col>
    </v-row>

    <v-row justify="center" style="">
      <v-col cols="6" class="px-0">
        <v-row style="" justify="center">
          <v-col cols="1" class="">
            <v-btn color="success" x-small dark class="py-4">
              <v-icon>0</v-icon>
            </v-btn>
            <v-btn color="primary" outlined x-small dark class="mt-1 py-4">
              <span style="font-weight: bold">No</span>
            </v-btn>
          </v-col>
          <v-col cols="1" class="">
            <v-btn color="success" x-small dark class="py-4">
              <v-icon>1</v-icon>
            </v-btn>
            <v-btn color="primary" outlined x-small dark class="mt-1 py-4">
              <span style="font-weight: bold">No</span>
            </v-btn>
          </v-col>
          <v-col cols="1" class="">
            <v-btn color="success" x-small dark class="py-4">
              <v-icon>2</v-icon>
            </v-btn>
            <v-btn color="primary" outlined x-small dark class="mt-1 py-4">
              <span style="font-weight: bold">No</span>
            </v-btn>
          </v-col>
          <v-col cols="1" class="">
            <v-btn color="success" x-small dark class="py-4">
              <v-icon>1</v-icon>
            </v-btn>
            <v-btn color="primary" outlined x-small dark class="mt-1 py-4">
              <span style="font-weight: bold">No</span>
            </v-btn>
          </v-col>
          <v-col cols="1" class="">
            <v-btn color="success" x-small dark class="py-4">
              <v-icon>3</v-icon>
            </v-btn>
            <v-btn color="primary" outlined x-small dark class="mt-1 py-4">
              <span style="font-weight: bold">No</span>
            </v-btn>
          </v-col>
          <v-col cols="1" class="">
            <v-btn color="success" x-small dark class="py-4">
              <v-icon>4</v-icon>
            </v-btn>
            <v-btn color="primary" outlined x-small dark class="mt-1 py-4">
              <span style="font-weight: bold">No</span>
            </v-btn>
          </v-col>
          <v-col cols="1" class="">
            <v-btn color="success" x-small dark class="py-4">
              <v-icon>5</v-icon>
            </v-btn>
            <v-btn color="primary" outlined x-small dark class="mt-1 py-4">
              <span style="font-weight: bold">No</span>
            </v-btn>
          </v-col>
          <v-col cols="1" class="">
            <v-btn color="success" x-small dark class="py-4">
              <v-icon>6</v-icon>
            </v-btn>
            <v-btn color="primary" outlined x-small dark class="mt-1 py-4">
              <span style="font-weight: bold">No</span>
            </v-btn>
          </v-col>
          <v-col cols="1" class="">
            <v-btn color="success" x-small dark class="py-4">
              <v-icon>7</v-icon>
            </v-btn>
            <v-btn color="primary" outlined x-small dark class="mt-1 py-4">
              <span style="font-weight: bold">No</span>
            </v-btn>
          </v-col>
          <v-col cols="1" class="">
            <v-btn color="success" x-small dark class="py-4">
              <v-icon>8</v-icon>
            </v-btn>
            <v-btn color="primary" outlined x-small dark class="mt-1 py-4">
              <span style="font-weight: bold">No</span>
            </v-btn>
          </v-col>
        </v-row>
        <v-row justify="center" style="">
          <v-col cols="2" sm="2" md="2" lg="2" class="text-center">
            <v-btn depressed color="primary" block> OUT </v-btn>
          </v-col>
          <v-col cols="2" sm="2" md="2" lg="2" class="text-center">
            <v-btn depressed color="primary" block> DECLARE </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="6" class="px-0">
        <v-row style="" justify="center">
          <v-col cols="1" class="">
            <v-btn color="success" x-small dark class="py-4">
              <v-icon>0</v-icon>
            </v-btn>
            <v-btn color="primary" outlined x-small dark class="mt-1 py-4">
              <span style="font-weight: bold">No</span>
            </v-btn>
          </v-col>
          <v-col cols="1" class="">
            <v-btn color="success" x-small dark class="py-4">
              <v-icon>1</v-icon>
            </v-btn>
            <v-btn color="primary" outlined x-small dark class="mt-1 py-4">
              <span style="font-weight: bold">No</span>
            </v-btn>
          </v-col>
          <v-col cols="1" class="">
            <v-btn color="success" x-small dark class="py-4">
              <v-icon>2</v-icon>
            </v-btn>
            <v-btn color="primary" outlined x-small dark class="mt-1 py-4">
              <span style="font-weight: bold">No</span>
            </v-btn>
          </v-col>
          <v-col cols="1" class="">
            <v-btn color="success" x-small dark class="py-4">
              <v-icon>1</v-icon>
            </v-btn>
            <v-btn color="primary" outlined x-small dark class="mt-1 py-4">
              <span style="font-weight: bold">No</span>
            </v-btn>
          </v-col>
          <v-col cols="1" class="">
            <v-btn color="success" x-small dark class="py-4">
              <v-icon>3</v-icon>
            </v-btn>
            <v-btn color="primary" outlined x-small dark class="mt-1 py-4">
              <span style="font-weight: bold">No</span>
            </v-btn>
          </v-col>
          <v-col cols="1" class="">
            <v-btn color="success" x-small dark class="py-4">
              <v-icon>4</v-icon>
            </v-btn>
            <v-btn color="primary" outlined x-small dark class="mt-1 py-4">
              <span style="font-weight: bold">No</span>
            </v-btn>
          </v-col>
          <v-col cols="1" class="">
            <v-btn color="success" x-small dark class="py-4">
              <v-icon>5</v-icon>
            </v-btn>
            <v-btn color="primary" outlined x-small dark class="mt-1 py-4">
              <span style="font-weight: bold">No</span>
            </v-btn>
          </v-col>
          <v-col cols="1" class="">
            <v-btn color="success" x-small dark class="py-4">
              <v-icon>6</v-icon>
            </v-btn>
            <v-btn color="primary" outlined x-small dark class="mt-1 py-4">
              <span style="font-weight: bold">No</span>
            </v-btn>
          </v-col>
          <v-col cols="1" class="">
            <v-btn color="success" x-small dark class="py-4">
              <v-icon>7</v-icon>
            </v-btn>
            <v-btn color="primary" outlined x-small dark class="mt-1 py-4">
              <span style="font-weight: bold">No</span>
            </v-btn>
          </v-col>
          <v-col cols="1" class="">
            <v-btn color="success" x-small dark class="py-4">
              <v-icon>8</v-icon>
            </v-btn>
            <v-btn color="primary" outlined x-small dark class="mt-1 py-4">
              <span style="font-weight: bold">No</span>
            </v-btn>
          </v-col>
        </v-row>
        <v-row justify="center" style="">
          <v-col cols="2" sm="2" md="2" lg="2" class="text-center">
            <v-btn depressed color="primary" block> OUT </v-btn>
          </v-col>
          <v-col cols="2" sm="2" md="2" lg="2" class="text-center">
            <v-btn depressed color="primary" block> DECLARE </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="2" sm="2" md="2" lg="2" class="px-0">
        <v-btn
          color="secondary"
          dark
          large
          class="margin-left:50% primary--text"
          block
        >
          Wide Ball
        </v-btn>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="2" sm="2" md="2" lg="2" class="px-0">
        <v-btn
          color="secondary"
          dark
          large
          class="margin-left:50% primary--text"
          block
        >
          No Ball
        </v-btn>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="2" sm="2" md="2" lg="2" class="px-0">
        <v-btn
          color="secondary"
          dark
          large
          class="margin-left:50% primary--text"
          block
        >
          Dead Ball
        </v-btn>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="2" sm="2" md="2" lg="2" class="px-0">
        <v-btn
          color="secondary"
          dark
          large
          class="margin-left:50% primary--text"
          block
        >
          Change Bowler
        </v-btn>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="2" sm="2" md="2" lg="2" class="px-0">
        <v-btn color="error" dark large class="margin-left:50%" block>
          Undo
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "cricket",

  components: {},

  data() {
    return {
      allPlayers: [
        {
          name: "Player 01",
          score: 15,
          played: true,
          out: true,
        },
        {
          name: "Player 02",
          score: 38,
          played: true,
          out: true,
        },
        {
          name: "Player 03",
          score: 47,
          played: false,
          out: false,
        },
        {
          name: "Player 04",
          score: 83,
          played: true,
          out: false,
        },
        {
          name: "Player 05",
          score: 15,
          played: true,
          out: true,
        },
        {
          name: "Player 06",
          score: 15,
          played: true,
          out: true,
        },
        {
          name: "Player 07",
          score: 15,
          played: true,
          out: true,
        },
        {
          name: "Player 08",
          score: 15,
          played: true,
          out: true,
        },
        {
          name: "Player 09",
          score: 15,
          played: true,
          out: true,
        },
        {
          name: "Player 10",
          score: 15,
          played: true,
          out: true,
        },
        {
          name: "Player 11",
          score: 15,
          played: true,
          out: true,
        },
      ],
      currentPlayers: [
        {
          name: "Player 03",
          score: 25,
          played: true,
          out: true,
        },
        {
          name: "Player 05",
          score: 73,
          played: true,
          out: true,
        },
      ],
      currentScore: 138,
      wickets: 3,
      extra: 6,
    };
  },

  methods: {},
};
</script>

<style></style>
