<template>
  <div>
    <div>
      <h2>Search and add a pin</h2>
      <GmapAutocomplete
        @place_changed='setPlace'
      />
    </div>
    <button @click='addMarker'>
        Add
      </button>
    <br>
    <GmapMap
      :center='center'
      :zoom='12'
      map-type-id='terrain'
      style='width:100%;  height: 600px;'
    />
    <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
    />
  </div>
</template>

<script>
export default {
  name: 'GoogleMap',
  data() {
    return {
      center: { lat: 25.04254, lng: 121.54372 },
      currentPlace: null,
      markers: [],
      places: [],
    }
  },
  mounted() {
    this.geolocate();
  },
  methods: {
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    setPlace(place) {
      this.currentPlace = place;
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
  },
}


</script>