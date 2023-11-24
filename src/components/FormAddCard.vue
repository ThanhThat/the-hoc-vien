<template>
  <form class="mt-4" @submit.prevent="submit">
    <h1 class="h3">Tạo thẻ học viên</h1>

    <div class="row">
      <div class="mb-3 col-5">
        <label for="imgFile" class="form-label"> Chọn ảnh </label>
        <input
          type="file"
          class="form-control"
          accept="image/*"
          id="imgFile"
          @change="chooseImage"
          ref="imgFile"
          required
        />
      </div>

      <div class="mb-3 col-5">
        <label for="nameStudent" class="form-label"> Họ và tên học viên </label>
        <input
          type="text"
          id="nameStudent"
          class="form-control"
          placeholder="Họ và tên học viên"
          v-model.trim="nameStudent"
          required
        />
      </div>

      <div class="mb-3 col-2">
        <label for="classStudent" class="form-label">Hạng</label>
        <input
          type="text"
          style="text-transform: uppercase"
          id="classStudent"
          class="form-control"
          placeholder="Hạng"
          v-model.trim="classStudent"
          required
        />
      </div>
    </div>

    <button class="btn btn-primary">Tạo thẻ</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      nameStudent: '',
      src: '',
      classStudent: '',
      isLoading: false
    }
  },

  methods: {
    chooseImage(e) {
      this.nameStudent = e.target.files[0].name.split('(')[0]
      this.src = URL.createObjectURL(e.target.files[0])
    },

    submit() {
      this.$emit('createCard', this.nameStudent, this.src, this.classStudent)
      this.$refs['imgFile'].value = ''
    }
  }
}
</script>

<style lang="scss" scoped></style>
