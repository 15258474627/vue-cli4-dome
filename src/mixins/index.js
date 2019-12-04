import { mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  created() {
    // alert('全局混乱引入成功')
  },
  computed: {
    ...mapGetters(['moduleTip'])
  },
  methods: {}
}
