<template>
  <div id="delOrderModal" ref="modal" class="modal fade" tabindex="-1"
    aria-labelledby="delOrderModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delOrderModalLabel" class="modal-title">
            <span>刪除產品</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger">{{tempOrder.id}}</strong> 訂單(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" @click="closeModal">
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="delOrder">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BootsrtapModal from '@/libs/mixins/BootsrtapModal'
export default {
  props: ['tempOrder', 'currentPage'],
  mixins: [BootsrtapModal],
  data () {
    return {
    }
  },
  methods: {
    delOrder () {
      console.log(this.tempOrder)
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`
      this.$http.delete(url)
        .then(res => {
          this.$emit('get-orders', this.currentPage)
          this.closeModal()
          alert(res.data.message)
        }).catch(err => {
          console.dir(err)
        })
    },
    closeModal () {
      this.modal.hide()
    }
  },
  mounted () {
    // this.modal = new Modal(this.$refs.modal)
  }
}
</script>
