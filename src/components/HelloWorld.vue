<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>{{ url }}</h2>
    <h3>
      <router-link :to="{name:'Test1'}">aa</router-link>
    </h3>
    <a @click="f()"> aaa </a>
    <div v-if="bif">ddd</div>
    <div v-else>else</div>
    <div v-on:click="oncl()">ff</div>
    <input v-model="message"/>
    <div>{{ message }}</div>
    <div v-for="item in sites" v-bind:key="item">{{ item }}</div>
    <div>{{ rever }}</div>
    <input type="text" v-model="vmodelval">
    <div>{{ vmodelres }}</div>
    <div v-on:click="jia()">{{ jiayi }}</div>
    <div v-on:click="cli()">click</div>
    <input v-model="shuangxiang" placeholder="编辑我……">
    <Test1 v-bind:deliverParentAge="chuanzhi1"></Test1>
    <div v-on:click="bindval()">cz</div>
    <h3>
      <router-link :to="{name:'Test1'}">aa</router-link>
    </h3>
  </div>
</template>

<script>
import Test1 from './Test1'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'a',
      url: 'b',
      bif: false,
      message: '请输入',
      sites: [1, 2, 3],
      vmodelval: null,
      vmodelres: null,
      jiayi: 1,
      shuangxiang: 'sx',
      chuanzhi1: 1,
      deliverParentAge: 1
    }
  },
  methods: {
    bindval () {
      this.chuanzhi1 = 3
    },
    f () {
      this.msg = 'aaa'
      this.bif = true
    },
    oncl () {
      this.msg = 'bbb'
      this.bif = false
    },
    jia () {
      this.jiayi = this.jiayi + 1
    },
    cli () {
      alert('click')
    }
  },
  computed: {
    rever: function () {
      return this.msg + 'rever'
    }
  },
  watch: {
    vmodelval: function (val) {
      this.vmodelres = val + 1000
    }
  },
  components: {
    Test1
  }
}
</script>
