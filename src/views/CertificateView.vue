<template>
  <section>
    <section class="container no-print mt-3">
      <h1 class="h4">Ảnh chứng chỉ</h1>

      <p class="text-danger fw-bold" v-if="listAvatar.length > 0">
        Số lượng: {{ listAvatar.length }}/42
      </p>
      <form-certificate @addAvatar="addAvatar"></form-certificate>
    </section>

    <section v-if="listAvatar.length > 0">
      <div class="mb-3 w-100 d-flex justify-content-center mt-3 no-print">
        <button class="btn btn-success me-3 no-print" @click="print">
          <i class="fa-solid fa-print"></i> Print
        </button>
        <button class="btn btn-danger no-print" @click="deleteAll">Xóa tất cả</button>
      </div>
      <draggable
        group="listAvatar"
        itemKey="id"
        v-model="listAvatar"
        tag="div"
        class="grid-certificate-avatar container"
      >
        <template #item="{ element: avatar }">
          <img-certificate
            class="grid-certificate-avatar-item handle"
            :key="avatar.id"
            :id="avatar.id"
            :src="avatar.srcAvatar"
            :studentName="avatar.studentName"
            @remove-avatar="onRemoveAvatar"
          >
          </img-certificate>
        </template>
      </draggable>
    </section>
  </section>
</template>

<script>
import ImgCertificate from '../components/ImgCertificate.vue'
import FormCertificate from '../components/FormCertificate.vue'
import draggable from 'vuedraggable'

export default {
  data() {
    return {
      listAvatar: JSON.parse(localStorage.getItem('listAvatar')) || []
    }
  },
  components: { ImgCertificate, FormCertificate, draggable },
  methods: {
    addAvatar(srcAvatar, studentName) {
      if (this.listAvatar.length < 42) {
        this.listAvatar.push({
          id: Date.now(),
          studentName,
          srcAvatar
        })

        localStorage.setItem('listAvatar', JSON.stringify(this.listAvatar))
      } else if (this.listAvatar.length >= 42) {
        alert('Số lượng ảnh đã đạt giới hạn!')
      }
    },

    print() {
      window.print()
    },

    onRemoveAvatar(id) {
      const index = this.listAvatar.findIndex((avatar) => avatar.id === id)

      this.listAvatar.splice(index, 1)
      localStorage.setItem('listAvatar', JSON.stringify(this.listAvatar))
    },

    deleteAll() {
      this.listAvatar = []
      localStorage.removeItem('listAvatar')
    }
  }
}
</script>

<style lang="scss" scoped>
.grid-certificate-avatar {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 22px;

  @media print {
    gap: 6px;
    margin: -16px auto 0;
    padding: 0;
  }
}

.handle {
  cursor: move;
}

@media print {
  .no-print {
    display: none;
  }

  .handle {
    border: none;
    padding: 0;
    margin: 0;
  }
}
</style>
