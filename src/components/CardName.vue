<template>
  <div class="card-name" :id="id">
    <button class="btn btn-remove" @click="removeCard">
      <i class="fa-regular fa-trash-can"></i>
    </button>
    <header>
      <div class="header-logo">
        <img src="/images/logo.jpg" alt="logo hưng thịnh" />
      </div>
      <div class="header-title">
        <h1>Công ty cổ phần hưng thịnh</h1>
        <h1>Trung tâm GDNN, ĐTLX ô tô hưng thịnh</h1>
      </div>
    </header>

    <section class="card-body">
      <section ref="imgPreview" class="card-body-img">
        <img :src="srcAvatar" />
      </section>

      <section class="card-body-content">
        <label class="card-body-title">Học viên tập lái xe</label>
        <div class="card-body-student-name">
          <p type="text" class="input-name">{{ nameStudent }}</p>
        </div>
        <div class="card-body-class">
          <label class="card-body-class-label" for="class"
            >Tập lái xe hạng: {{ classStudent }}
          </label>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    nameStudent: {
      type: String,
      required: true
    },
    srcAvatar: {
      type: String,
      required: true
    },
    classStudent: {
      type: String,
      required: true
    },
    id: {
      type: Number,
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
img {
  max-width: 100%;
  display: block;
}
.card-name {
  width: 300px;
  height: auto;
  border: 2px solid #1658f4;
  background: #0066ff;
  overflow: hidden;
  position: relative;

  header {
    background: #1658f4;

    display: flex;
    justify-content: start;

    height: 42px;
  }

  .header-logo {
    width: 68px;
    padding: 1px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
    }
  }

  .header-title {
    color: #fff;
    display: flex;
    flex-direction: column;
    text-align: center;
    flex: 1;
    justify-content: center;

    h1 {
      font-size: 11.5px;
      text-transform: uppercase;
      margin: 3px auto;
      width: 100%;
      display: block;
      font-weight: 400;

      @media print {
        font-family: 'Times New Roman', Times, serif;
      }
    }
  }

  .card-body {
    display: flex;
    justify-content: space-between;
    height: 127px;
    flex: 1;
    @media print {
      font-family: 'Times New Roman', Times, serif;
    }
  }

  .card-body-img {
    display: flex;
    align-items: center;
    height: inherit;

    img {
      // width: 3cm;
      // height: 4cm;
      height: inherit;
      display: block;
    }
  }

  .input-avatar {
    display: none;
  }

  .label-imgInp {
    font-size: 30px;
    color: #1658f4;
    width: 100%;
    height: 100%;

    &:hover {
      cursor: pointer;
    }
  }

  .card-body-content {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
    align-items: center;
    justify-content: space-around;
    background-color: #fff;
  }

  .card-body-title {
    font-size: 17px;
    color: #fc1342;
    text-transform: uppercase;
    font-weight: 600;
    margin: 14px 0;
  }

  .input-name {
    font-size: 16px;
    color: #000;
    text-transform: uppercase;
    text-align: center;

    border: none;
    outline: none;

    font-weight: 600;
    margin-bottom: 0;
    max-width: 100%;
    white-space: wrap;
  }

  .card-body-class-label {
    color: #fc1342;
    font-size: 17px;
    font-weight: 600;
    margin: 12px 0;
  }

  .class-student {
    color: #fc1342;
    font-size: 14px;
    font-weight: 600;
    width: 40px;
    text-transform: uppercase;
    border: none;
    outline: none;
  }
}

.btn-remove {
  position: absolute;
  top: -6px;
  right: -6px;
  z-index: 1;
  background: transparent;
  border: none;
  transition: all 0.3s ease-in-out;
  color: #fff;

  &:hover {
    transform: scale(1.2);
    color: #000;
  }

  @media print {
    display: none;
  }
}
</style>
