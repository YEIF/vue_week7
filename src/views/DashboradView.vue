<template>
  <DashNavbar></DashNavbar>
  <router-view></router-view>
</template>

<script>
import DashNavbar from '@/components/DashNavbar.vue'
export default {
  components: {
    DashNavbar
  },
  data () {
    return {
      status: false
    }
  },
  methods: {
    checkLogin () {
      const url = `${process.env.VUE_APP_API}/api/user/check`
      this.$http.post(url)
        .then((res) => {
          if (!res.data.success) {
            alert('請重新登入')
            this.$router.push('/')
          } else {
            console.log('登入成功')
            this.status = true
          }
        })
        .catch((err) => {
          console.dir(err.data)
          alert('驗證失敗，請重新登入')
          this.$router.push('/')
        })
    }
  },
  created () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = token
    this.checkLogin()
  }
}
</script>
