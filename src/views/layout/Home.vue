<template>
  <div class="home-container">

    <div class="left-list">
      <a-menu :default-selected-keys="['1']"
              :default-open-keys="['sub1']"
              mode="inline"
              theme="dark"
              :inline-collapsed="collapsed">
        <a-menu-item key="1">
          <a-icon type="pie-chart" />
          <span>Option 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="desktop" />
          <span>Option 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="inbox" />
          <span>Option 3</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <span slot="title">
            <a-icon type="mail" /><span>Navigation One</span>
          </span>
          <a-menu-item key="5">
            Option 5
          </a-menu-item>
          <a-menu-item key="6">
            Option 6
          </a-menu-item>
          <a-menu-item key="7">
            Option 7
          </a-menu-item>
          <a-menu-item key="8">
            Option 8
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title">
            <a-icon type="appstore" /><span>Navigation Two</span>
          </span>
          <a-menu-item key="9">
            Option 9
          </a-menu-item>
          <a-menu-item key="10">
            Option 10
          </a-menu-item>
          <a-sub-menu key="sub3"
                      title="Submenu">
            <a-menu-item key="11">
              Option 11
            </a-menu-item>
            <a-menu-item key="12">
              Option 12
            </a-menu-item>
          </a-sub-menu>
        </a-sub-menu>
      </a-menu>
    </div>

    <div :class="{'app-container':true,'menu-unfold':collapsed}">
      <div class="header">
        <a-button type="primary"
                  @click="toggleCollapsed">
          <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
        </a-button>
        <div class="breadcrumb">
          <a-breadcrumb>
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
            <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
            <a-breadcrumb-item>An Application</a-breadcrumb-item>
          </a-breadcrumb>
        </div>
        <ul class="user-info">
          <li>wangsilong<a-icon type="down" /></li>
          <li>退出</li>
        </ul>
      </div>
      <div class="main">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dolores eaque aliquid dolor, magni ad perferendis pariatur amet, reiciendis quaerat natus laudantium, tempora iure placeat
        quibusdam ex sapiente assumenda atque.
        Dicta porro incidunt ullam odio similique temporibus, sunt eum fugiat vitae nobis est, et quisquam neque maxime voluptatum. Explicabo atque optio eum corporis dolores doloremque officia
        mollitia
        possimus iure ad.
        Hic ipsum quia similique odit, consequuntur quo omnis culpa accusantium, enim numquam nisi placeat dolore non consequatur aperiam, exercitationem sit! Nemo vero tenetur dignissimos assumenda
        maxime ipsa eos modi rerum?
        Facilis velit eligendi ducimus, magnam autem aspernatur quidem debitis, esse obcaecati expedita qui, natus maxime veritatis sed distinctio voluptatum dolores! Laborum nesciunt maiores
        molestiae
        numquam, necessitatibus suscipit eum consequuntur iusto?
        Cum debitis illum sunt quae laudantium, accusamus, autem sequi voluptates reiciendis ab minima exercitationem quibusdam aspernatur optio incidunt voluptatibus laboriosam omnis magnam
        provident?
        Saepe magnam et fugit vel omnis ratione!
        Consectetur facere harum molestias molestiae nam, recusandae odit quibusdam vero, eius mollitia voluptatem libero modi blanditiis quidem tenetur perferendis! Perspiciatis tempore in quidem
        beatae. Dolor cum inventore itaque ipsum molestias!
        Esse quae hic deserunt expedita quas tempore doloribus molestiae quos rem nulla facilis consequuntur excepturi ullam asperiores impedit laboriosam velit quis, distinctio natus obcaecati cumque
        reiciendis temporibus. Commodi, quisquam pariatur.
        Quasi incidunt facere minima saepe amet neque architecto nesciunt repellat, sunt provident rerum in illo quibusdam voluptates suscipit dolore laudantium modi quos dolor quam sed at iusto
        voluptatibus id? Nemo?
        At incidunt maxime itaque accusamus ut exercitationem doloribus ratione eaque, vel cupiditate inventore, delectus aut voluptas quod consectetur similique modi perspiciatis reprehenderit id
        hic,
        unde esse officia blanditiis. Exercitationem, nemo!
        Reprehenderit vitae sequi nesciunt eum facilis a quasi magni at, sint, itaque cupiditate iusto cum. Earum dolores nulla consequatur accusamus saepe omnis quod ad! Nulla obcaecati fugiat
        officia
        fuga provident.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
    }
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed
    },
  },
}
</script>
<style lang="less" scoped>
.home-container {
  display: flex;
  width: 100%;
  height: 100%;
  .left-list {
    width: 180px;
    position: fixed;
    height: 100%;
    .ant-menu {
      height: 100%;
    }
  }
  .app-container {
    flex: 1;
    width: 100%;
    height: 100%;
    margin-left: 180px;
    transition: 0.3s;
    &.menu-unfold {
      margin-left: 80px;
    }
    .header {
      width: 100%;
      height: 50px;
      border-bottom: 1px solid #eee;
      padding-left: 10px;
      display: flex;
      align-items: center;
      position: relative;
      .breadcrumb {
        margin-left: 10px;
      }
      .user-info {
        position: absolute;
        margin: 0;
        cursor: pointer;
        right: 20px;
        li:not(:first-child) {
          transition: 0.3s;
          text-align: center;
          height: 0;
          opacity: 0;
          &:hover {
            background-color: #eee;
            color: #999;
            font-weight: bold;
          }
        }
        &:hover {
          li:nth-child(2) {
            height: 20px;
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>
