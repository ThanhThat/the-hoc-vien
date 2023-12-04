<template>
  <form @submit.prevent="submit" class="row mt-3 align-items-center">
    <div class="mb-3 col-4">
      <label for="img-avatar" class="form-label">Chọn ảnh</label>
      <input
        type="file"
        ref="inputFile"
        class="form-control"
        accept="image/*"
        id="img-avatar"
        required
        @change="chooseImg"
      />
    </div>

    <div class="mb-3 col-4">
      <label for="student-name" class="form-label">Tên học viên</label>
      <input type="text" v-model.trim="studentName" class="form-control" id="student-name" />
    </div>

    <div class="col-4 d-flex align-items-end">
      <button class="btn btn-primary d-block mb-0 w-50" type="submit">Thêm</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      studentName: '',
      srcAvatar: ''
    }
  },
  methods: {
    chooseImg(e) {
      const imgFile = e.target.files[0]
      this.studentName = imgFile.name.split('(')[0].toUpperCase()

      const reader = new FileReader();

      reader.onload = (e) => {
        this.srcAvatar = e.target.result
      }

      reader.readAsDataURL(imgFile)
    },

    submit() {
      this.$emit('addAvatar', this.srcAvatar, this.studentName)
      this.$refs['inputFile'].value = ''
    }
  }
}
</script>

<style lang="scss" scoped></style>
