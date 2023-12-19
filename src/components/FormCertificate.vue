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
        multiple
        @change="chooseImg"
      />
    </div>

    <!-- <div class="mb-3 col-4">
      <label for="student-name" class="form-label">Tên học viên</label>
      <input type="text" v-model.trim="studentName" class="form-control" id="student-name" />
    </div> -->

    <div class="col-4 d-flex align-items-end">
      <button class="btn btn-primary d-block mb-0 w-50" type="submit">Thêm</button>
    </div>
  </form>
</template>

<script>
import { handleStudentName } from '../utilities'
export default {
  data() {
    return {
      // studentName: '',
      // srcAvatar: '',
      listImg: []
    }
  },
  methods: {
    chooseImg(e) {
      // const imgFile = e.target.files[0]
      // this.studentName = imgFile.name.split('(')[0].toUpperCase()
      // const reader = new FileReader()
      // reader.onload = (e) => {
      //   this.srcAvatar = e.target.result
      // }
      // reader.readAsDataURL(imgFile)

      let files = e.target.files

      if (files.length <= 42) {
        for (let i = 0; i < files.length; i++) {
          const reader = new FileReader()
          const name = handleStudentName(files[i].name)
          reader.onload = (e) => {
            this.listImg.push({
              id: Date.now(),
              // name:
              //   files[i].name.length > 19
              //     ? handleStudentName(files[i].name.slice(0, 19))
              //     : handleStudentName(files[i].name),
              name,
              src: e.target.result
            })
          }

          reader.readAsDataURL(files[i])
        }
      } else {
        alert('Vui lòng không chọn quá 42 ảnh!')
        this.$refs['inputFile'].value = ''
      }
    },

    submit() {
      this.$emit('addAvatar', this.listImg)
      this.$refs['inputFile'].value = ''
      this.listImg = []
    }
  }
}
</script>

<style lang="scss" scoped></style>
