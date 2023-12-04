<template>
  <form @submit.prevent="submit" class="mt-3">
    <div class="mb-3 col-6">
      <label for="img-card" class="form-label">Có thể chọn nhiều ảnh cùng lúc</label>
      <input
        ref="inputFile"
        type="file"
        id="img-card"
        class="form-control"
        @change="chooseImgCard"
        multiple
        required
      />
    </div>
    <div class="mb-3 col-6">
      <button type="submit" class="btn btn-primary">Thêm</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      listImg: []
    }
  },
  methods: {
    chooseImgCard(e) {
      let files = e.target.files

      if (files.length <= 10) {
        for (let i = 0; i < files.length; i++) {
          const reader = new FileReader()
          

          reader.onload = (e) => {

            this.listImg.push({
              id: Date.now(),
              name: files[i].name,
              src: e.target.result
            })
          }

          reader.readAsDataURL(files[i])

        }
      } else {
        alert('Vui lòng không tải lên quá 10 ảnh!')
        this.$refs['inputFile'].value = ''
      }
    },

    submit() {
      this.$emit('addImgCard', this.listImg)
      this.$refs['inputFile'].value = ''
      this.listImg = []
    }
  }
}
</script>

<style lang="scss" scoped></style>
