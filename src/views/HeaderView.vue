<template>
  <ul class="nav no-print">
    <li class="nav-item">
      <router-link class="nav-link active" aria-current="page" to="/the-hoc-vien"
        >Thẻ học viên</router-link
      >
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/tao-anh-chung-chi">Tạo ảnh chứng chỉ</router-link>
    </li>

    <li class="nav-item">
      <router-link class="nav-link" to="/can-cuoc-cong-dan">CCCD</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@media print {
  .no-print {
    display: none;
  }
}
</style>
