<template>
  <form @submit.prevent="submit">
    <h1 class="h4">Làm ảnh 3 người</h1>
    <div class="mb-3">
      <label for="images" class="form-label">Chọn 1 ảnh:</label>
      <input
        type="file"
        class="form-control"
        id="images"
        ref="inputFile"
        required
        autofocus
        multiple
        @change="chooseImg"
      />
    </div>

    <button type="submit" class="btn btn-primary">Tải ảnh lên</button>
  </form>
  <canvas
    ref="canvas"
    width="755.90551181"
    height="566.92913386"
    data-bs-toggle="tooltip"
    data-bs-placement="top"
    title="Click để tải ảnh"
  ></canvas>
</template>

<script>
import { handleStudentName } from '../utilities'

export default {
  data() {
    return {
      images: [],
      canvas: null,
      context: null,
      image: null
    }
  },

  mounted() {
    this.canvas = this.$refs.canvas
    this.context = this.canvas.getContext('2d')

    this.canvas.addEventListener('click', this.downloadImages)
  },

  methods: {
    chooseImg(e) {
      let files = e.target.files

      if (files.length <= 15) {
        for (let i = 0; i < files.length; i++) {
          const reader = new FileReader()
          const name = handleStudentName(files[i].name)
          reader.onload = (e) => {
            this.addImage(e.target.result, name)
          }

          reader.readAsDataURL(files[i])
        }
      } else {
        alert('Vui lòng không upload quá 15 ảnh!')
        this.$refs['inputFile'].value = ''
      }
    },

    submit() {
      // this.$emit('addPhotoOfThreePeople', this.images)
      // this.$refs['inputFile'].value = ''
      // this.images = []

      this.drawImages()

      this.$refs['inputFile'].value = ''
      // this.images = []
    },

    addImage(src, name) {
      const newImage = new Image()
      this.images = []
      newImage.onload = () => {
        this.images.push({
          src,
          image: newImage,
          width: 302.36220472,
          height: 566.92913386,
          name
        })

        this.images.push({
          src,
          image: newImage,
          width: 226.77165354,
          height: 302.36220472,
          name
        })

        this.images.push({
          src,
          image: newImage,
          width: 226.77165354,
          height: 302.36220472,
          name
        })
      }

      newImage.src = src
    },

    drawImages() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
      let x = 0

      this.images.forEach((image, index) => {
        if (index !== 0) {
          this.context.drawImage(image.image, x, 302.36220472, image.width, image.height)
        } else {
          this.context.drawImage(image.image, x, 0, image.width, image.height)
        }

        x += image.width // Tăng x để dịch chuyển đến vị trí cho ảnh tiếp theo
      })
    },

    downloadImages() {
      const dataURL = this.canvas.toDataURL('image/jpg')
      const link = document.createElement('a')
      link.href = dataURL
      link.download = this.images[0].name + '.jpg'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }
}
</script>

<style lang="scss" scoped>
canvas:hover {
  box-shadow: 0 5px 10px rgba($color: #000000, $alpha: 0.6);
}
</style>
