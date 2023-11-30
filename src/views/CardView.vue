<script>
import FormAddCard from '../components/FormAddCard.vue'
import CardName from '../components/CardName.vue'

export default {
  components: {
    FormAddCard,
    CardName
  },
  data() {
    return {
      listCard: []
    }
  },

  methods: {
    createCard(nameStudent, srcImg, classStudent) {
      const newCard = {
        id: Date.now(),
        nameStudent: nameStudent.trim().toUpperCase(),
        srcAvatar: srcImg,
        classStudent: classStudent.trim().toUpperCase()
      }

      if (this.listCard.length <= 9) {
        this.listCard.unshift(newCard)
      } else {
        alert('Số lượng thẻ học viên không được lớn hơn 10')
      }
    },

    printListCard() {
      window.print()
    },

    onRemoveCard(id) {
      const index = this.listCard.findIndex((card) => card.id === id)

      this.listCard.splice(index, 1)
    }
  }
}
</script>

<template>
  <main class="container no-print">
    <div class="row">
      <div class="col-12">
        <h6 class="text-danger mt-3" v-if="this.listCard.length > 0">
          Số lượng thẻ: {{ this.listCard.length }}/10
        </h6>
        <form-add-card @create-card="createCard"></form-add-card>
      </div>
    </div>
  </main>

  <section class="container-fluid">
    <div class="row" v-if="listCard.length > 0">
      <div class="col-12 d-flex justify-content-center">
        <button class="btn btn-info text-light no-print" @click="printListCard">
          <i class="fa-solid fa-print"></i> Print
        </button>
      </div>
    </div>
    <div class="grid-card mt-3">
      <card-name
        v-for="card in listCard"
        :key="card.id"
        :nameStudent="card.nameStudent"
        :srcAvatar="card.srcAvatar"
        :classStudent="card.classStudent"
        :id="card.id"
        class="grid-card-item"
        @remove-card="onRemoveCard"
      ></card-name>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@media print {
  .no-print {
    display: none;
  }
}
.grid-card {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px;

  @media print {
    gap: 16px;
    margin: 0 44px;

    &-item {
      width: calc(50% - 15px);
    }
  }
}
</style>
