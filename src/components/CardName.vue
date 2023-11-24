<template>
  <div class="card-name">
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
  width: 350px;
  height: 200px;
  border: 2px solid #1658f4;
  background: #0066ff;
  overflow: hidden;

  header {
    background: #1658f4;

    display: flex;
    justify-content: start;

    height: 42px;
  }

  .header-logo {
    width: 68px;
    padding: 4px;
    background-color: #fff;

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
      font-size: 13px;
      text-transform: uppercase;
      margin: 3px auto;
      width: 100%;
      display: block;
      font-weight: 400;
    }
  }

  .card-body {
    display: flex;
    height: calc(100% - 42px);
    justify-content: space-between;
  }

  .card-body-img {
    display: flex;
    align-items: center;
    width: 35%;

    img {
      width: 100%;
      height: 100%;
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
    width: 65%;
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
</style>
