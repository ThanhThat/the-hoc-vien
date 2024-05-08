<template>
  <div class="avatar d-flex align-items-center flex-column" :id="id">
    <img class="img-student" :src="src" />
    <span class="name-student d-block fw-bold">{{ studentName }}</span>
    <button class="btn btn-danger remove-avatar bg-transparent no-print" @click="removeAvatar">
      <i class="fa-solid fa-trash-can"></i>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    studentName: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  },

  methods: {
    removeAvatar() {
      this.$emit('removeAvatar', this.id)
    }
  }
}
</script>

<style lang="scss" scoped>
@media print {
  .no-print {
    display: none !important;
  }

  // .img-student {
  //   min-width: 3cm;
  //   min-height: 4cm;
  //   display: block;
  // }
}
.img-student {
  width: 3cm;
  height: 4cm;
  display: block;
}

.name-student {
  font-size: 8px;
  font-weight: 300;
  position: absolute;
  bottom: -12px;
}

.avatar {
  position: relative;
}

.remove-avatar {
  position: absolute;
  top: 4px;
  right: 56px;
  z-index: 1;
  padding: 4px;
  border: none;
  transition: 0.25s all ease-in-out;
  color: #ccc;

  &:hover {
    transform: scale(1.2);
  }
}
</style>
