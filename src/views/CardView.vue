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
      quantityCard: 1,
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

      this.listCard.unshift(newCard)

      console.log(this.listCard)
    },

    printListCard() {
      window.print()
    }
  }
}
</script>

<template>
  <main class="container no-print">
    <div class="row">
      <div class="col-12">
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
        class="grid-card-item"
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
