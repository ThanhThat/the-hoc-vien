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
      listCardStudent: JSON.parse(localStorage.getItem('listCardStudent')) || []
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

      if (this.listCardStudent.length <= 9) {
        this.listCardStudent.unshift(newCard)
        localStorage.setItem('listCardStudent', JSON.stringify(this.listCardStudent))
      } else {
        alert('Số lượng thẻ học viên không được lớn hơn 10')
      }
    },

    printListCardStudent() {
      window.print()
    },

    onRemoveCard(id) {
      const index = this.listCardStudent.findIndex((card) => card.id === id)

      this.listCardStudent.splice(index, 1)

      localStorage.setItem('listCardStudent', JSON.stringify(this.listCardStudent))
    },

    deleteAll() {
      this.listCardStudent = [];
      localStorage.removeItem('listCardStudent')
    }
  }
}
</script>

<template>
  <main class="container no-print">
    <div class="row">
      <div class="col-12">
        <h6 class="text-danger mt-3" v-if="this.listCardStudent.length > 0">
          Số lượng thẻ: {{ this.listCardStudent.length }}/10
        </h6>
        <form-add-card @create-card="createCard"></form-add-card>
      </div>
    </div>
  </main>

  <section class="container-fluid">
    <div class="row no-print" v-if="listCardStudent.length > 0">
      <div class="col-12 d-flex justify-content-center gap-2">
        <button class="btn btn-info text-light" @click="printListCardStudent">
          <i class="fa-solid fa-print"></i> Print
        </button>

        <button class="btn btn-danger" @click="deleteAll">Xóa tất cả</button>
      </div>
    </div>
    <div class="grid-card mt-3">
      <card-name
        v-for="card in listCardStudent"
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
