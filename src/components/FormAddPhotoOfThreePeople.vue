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

    <img src="/images/3.jpg" id="image1" v-show="false" />
    <img src="/images/2.jpg" id="image2" v-show="false" />
    <img :src="this.newImage" id="image3" v-show="false" />
  </form>
  <canvas
    id="canvas"
    width="810"
    height="567"
    data-bs-toggle="tooltip"
    data-bs-placement="top"
    title="Click để tải ảnh"
    @click="downloadImage"
  ></canvas>
</template>

<script>
import { handleStudentName } from '../utilities'

export default {
  data() {
    return {
      // image declaration
      fixedImage: ['/images/1.jpg', '/images/2.jpg'],
      newImage: '',
      newImageName: '',
      //canvas
      context: ''
    }
  },

  mounted() {
    const canvas = document.getElementById('canvas')
    console.log(canvas)
    this.context = canvas.getContext('2d')
    this.context.fillStyle = 'white'
    this.context.fillRect(0, 0, 800, 567)
  },

  methods: {
    chooseImg(e) {
      const imageFile = e.target.files[0]
      this.newImageName = handleStudentName(imageFile.name)

      const theReader = new FileReader()

      theReader.onload = async () => {
        this.newImage = await theReader.result
      }

      theReader.readAsDataURL(imageFile)
    },

    submit() {
      console.log(this.context)
      const image1 = document.getElementById('image1')
      // const image2 = document.getElementById('image2')
      const image3 = document.getElementById('image3')

      this.context.drawImage(image1, 0, 18, 554, 550)
      // this.context.drawImage(image2, 307, 278, 250, 288)
      this.context.drawImage(image3, 552, 278, 226.77165354, 302.36220472)
    },

    downloadImage() {
      const canvas = document.getElementById('canvas')
      const dataURL = canvas.toDataURL('image/jpg')
      const link = document.createElement('a')

      link.href = dataURL
      link.download = this.newImageName + '.jpg'
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

#canvas {
  border: 1px solid #000;
}
</style>
