<template>
<ul>
    <li><input placeholder="What needs to be done?" v-model='content' ><button @click="insert(content)">save</button></li>
    <li v-for="(todo, i) in todos.todos" :key = "i">
      <span>{{ todo }}</span>
    </li>
  </ul>

</template>
<!-- <section class=container>
  <h1>to do list practice</h1>
  <p><input type="text" name='content' v-model='content'></p>
  <div>
    <button @click='insert'>save</button>
  </div>
  <ul>
    <li>
      <p>{{ todos.content }}</p><button @click="remove(todo)">delete</button>
    </li>
  </ul>
</section>
</template> -->

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {
      content: ''
    }
  },
  computed: {
    ...mapState(['todos'])
  },
  methods: {
    ...mapMutations({
      insert: 'insert'
    })
    /* insert (obj) {
      this.$store.commit('insert', obj)
      this.content = ''
    } */

  }
}
</script>
<!-- import { mapState } from 'vuex'

export default {
  data () {
    return {
      content: ''
    }
  },
  computed: {
    ...mapState(['todos'])
  }
} -->
