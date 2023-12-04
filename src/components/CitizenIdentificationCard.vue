<template>
  <div class="citizen-identification" :id="id">
    <span class="remove-card no-print" @click="removeCard"
      ><i class="fa-regular fa-trash-can"></i></span
    ><img :src="src" />
    <span class="name no-print">{{ name }}</span>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },

  methods: {
    removeCard() {
      this.$emit('removeCard', this.id)
    }
  }
}
</script>

<style lang="scss" scoped>
@media print {
  .no-print {
    display: none;
  }
}
.citizen-identification {
  width: 9cm;
  height: 5.5cm;
  position: relative;
  padding: 0;
  cursor: move;

  img {
    width: 100%;
    height: 100%;
    display: block;
  }

  .remove-card {
    position: absolute;
    top: 16px;
    right: 16px;
    color: #fff;
    font-size: 18px;
    transition: all 0.3s ease-in;

    &:hover {
      transform: scale(1.2);
      cursor: pointer;
    }
  }

  .name {
    position: absolute;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
    color: greenyellow;
    text-shadow: 0px 0px 4px rgba($color: #000000, $alpha: 1);
  }
}
</style>
