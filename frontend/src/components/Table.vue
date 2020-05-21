<template>
  <Table class="Table">
    <b-container fluid>
      <!-- User Interface controls -->
      <b-row>
        <div class="filter">
          <b-col lg="6" class="my-1">
            <b-form-group
              label="Filter"
              label-cols-sm="3"
              label-align-sm="right"
              label-size="sm"
              label-for="filterInput"
              class="mb-0"
            >
              <b-input-group size="sm">
                <b-form-input
                  v-model="filter"
                  type="search"
                  id="filterInput"
                  placeholder="Type to Search"
                ></b-form-input>
                <b-input-group-append>
                  <b-button :disabled="!filter" @click="filter = ''"
                    >Clear</b-button
                  >
                </b-input-group-append>
              </b-input-group>
            </b-form-group>
          </b-col>
        </div>
      </b-row>

      <!-- Main table element -->
      <div class="align">
        <b-table
          show-empty
          small
          stacked="md"
          :items="items"
          :fields="fields"
          :current-page="currentPage"
          :per-page="perPage"
          :filter="filter"
          :filterIncludedFields="filterOn"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          :sort-direction="sortDirection"
          @filtered="onFiltered"
        >
          <template v-slot:cell(actions)="row">
            <b-input-group size="sm">
              <b-form-input
                type="input"
                id="quantityInput"
                placeholder="1"
              ></b-form-input>
              <b-button variant="primary" size="sm" class="mr-1"
                >Add to Cart</b-button
              >
            </b-input-group>
          </template>
        </b-table>

        <b-col sm="7" md="6" class="my-1">
          <b-pagination
            v-model="currentPage"
            :total-rows="totalRows"
            :per-page="perPage"
            align="fill"
            size="sm"
            class="my-0"
          ></b-pagination>
        </b-col>
      </div>
    </b-container>
  </Table>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          image: "Image",
          pricing: 2.99,
          availability: 5,
          mfr: "1N4735A",
          description: "6.2V 1W 10uA @ 3V DO-41 Zener Diodes RoHS",
        },
      ],
      fields: [
        { key: "image", label: "Image", sortable: false, class: "text-center" },
        {
          key: "pricing",
          label: "Pricing",
          sortable: true,
          class: "text-center",
        },
        {
          key: "availability",
          label: "Availability",
          sortable: false,
          class: "text-center",
        },
        { key: "mfr", label: "MFR", sortable: true, class: "text-center" },
        {
          key: "description",
          label: "Description",
          sortable: false,
          class: "text-center",
        },
        { key: "actions", label: "Quantity", class: "input" },
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 6,
      filter: null,
      filterOn: [],
    };
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter((f) => f.sortable)
        .map((f) => {
          return { text: f.label, value: f.key };
        });
    },
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length;
  },
  methods: {
    resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.content = "";
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  },
};
</script>

<style scoped>
.align {
  float: center;
  padding: 5px 120px;
  top: 30%;
  padding: 0px 30px 30px 200px;
  position: absolute;
}
.input {
  float: center;
  top: 30%;

  width: 30%;
  position:absolute;
}
.filter {
  position: absolute;
  width: 600px;
  height: 200px;
  top: 20%;
  
  }
</style>
