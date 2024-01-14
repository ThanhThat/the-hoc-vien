<template>
  <div class="container">
    <form-add-photo-of-three-people></form-add-photo-of-three-people>
  </div>
</template>

<script>
import FormAddPhotoOfThreePeople from '../components/FormAddPhotoOfThreePeople.vue'

export default {
  data() {
    return {
      photoList: []
    }
  },

  components: {
    FormAddPhotoOfThreePeople
  },

  methods: {
    // getPhoto(listPhoto) {
    //   // this.photoList = listPhoto
    //   console.log(listPhoto)
    // }
  }
}
</script>

<style lang="scss" scoped></style>
