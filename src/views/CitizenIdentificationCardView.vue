<template>
  <div class="container">
    <div class="row no-print">
      <form-add-citizen-identification @add-img-card="addImgCard"></form-add-citizen-identification>
    </div>

    <div class="row no-print" v-if="listCard.length > 0">
      <div class="col-12 d-flex justify-content-center">
        <button class="btn btn-info text-light me-1" @click="printListCard">
          <i class="fa-solid fa-print"></i> Print
        </button>

        <button class="btn btn-danger" @click="deleteAll">Xóa tất cả</button>
      </div>
    </div>
    <draggable class="row list-card" group="listCard" itemKey="id" v-model="listCard" tag="div"
      ><template #item="{ element: card }">
        <citizen-identification-card
          class="list-card-item"
          :src="card.src"
          :key="card.id"
          :id="card.id"
          :name="card.name"
          @remove-card="onRemoveCard"
        ></citizen-identification-card>
      </template>
    </draggable>
  </div>
</template>

<script>
import FormAddCitizenIdentification from '../components/FormAddCitizenIdentification.vue'
import CitizenIdentificationCard from '../components/CitizenIdentificationCard.vue'
import draggable from 'vuedraggable'

export default {
  data() {
    return {
      listCard: JSON.parse(localStorage.getItem('listCard')) || []
    }
  },
  components: {
    FormAddCitizenIdentification,
    CitizenIdentificationCard,
    draggable
  },

  methods: {
    addImgCard(imgList) {
      if (this.listCard.length <= 9) {
        this.listCard = [...this.listCard, ...imgList]
        localStorage.setItem('listCard', JSON.stringify(this.listCard))
      } else {
        alert('Số lượng ảnh đã đủ 1 trang. Hãy in đi!')
      }
    },

    printListCard() {
      window.print()
    },

    deleteAll() {
      localStorage.removeItem('listCard')
      this.listCard = []
      console.log(this.listCard)
    },

    onRemoveCard(id) {
      const index = this.listCard.findIndex((card) => card.id === id)
      console.log(id, index)
      console.log(this.listCard)
      this.listCard.splice(index, 1)
      localStorage.setItem('listCard', JSON.stringify(this.listCard))
    }
  }
}
</script>

<style lang="scss" scoped>
.no-print {
  @media print {
    display: none;
  }
}
.list-card {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  margin: 22px auto auto;

  &-item {
    width: 9cm;
    height: 5.5cm;

    img {
      width: 100%;
    }
  }
}
</style>
