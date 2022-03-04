<template>
  <div class="modal fade" id="couponModal" tabindex="-1" role="dialog"
       aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            <span v-if="isNew">新增優惠卷</span>
            <span v-else>編輯優惠卷</span>
          </h5>
          <button type="button" class="btn-close"
                  data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="title">標題</label>
            <input type="text" class="form-control" id="title" v-model="localCoupon.title"
                   placeholder="請輸入標題">
          </div>
          <div class="mb-3">
            <label for="coupon_code">優惠碼</label>
            <input type="text" class="form-control" id="coupon_code" v-model="localCoupon.code"
                   placeholder="請輸入優惠碼">
          </div>
          <div class="mb-3">
            <label for="due_date">到期日</label>
            <input type="date" class="form-control" id="due_date"
                   v-model="due_date">
                   <!-- v-model="DateFn(localCoupon.due_date)"> -->
          </div>
          <div class="mb-3">
            <label for="price">折扣百分比</label>
            <input type="number" class="form-control" id="price"
            min="0"
                   v-model.number="localCoupon.percent" placeholder="請輸入折扣百分比">
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input class="form-check-input" type="checkbox"
                     :true-value="1"
                     :false-value="0"
                     v-model="localCoupon.is_enabled" id="is_enabled">
              <label class="form-check-label" for="is_enabled">
                是否啟用
              </label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
          <button type="button" class="btn btn-primary"
                  @click="updateCoupon(localCoupon)"> {{ isNew ? '新增優惠卷' : '更新優惠券' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BootsrtapModal from '@/libs/mixins/BootsrtapModal'
export default {
  mixins: [BootsrtapModal],
  props: ['tempCoupon', 'isNew'],
  data () {
    return {
      localCoupon: {},
      due_date: ''
    }
  },
  watch: {
    tempCoupon () {
      this.localCoupon = this.tempCoupon
      const dateAndTime = new Date(this.localCoupon.due_date * 1000)
        .toISOString().split('T');
      [this.due_date] = dateAndTime
    },
    due_date () {
      this.localCoupon.due_date = Math.floor(new Date(this.due_date) / 1000)
    }
  },
  methods: {
    updateCoupon (localCoupon) {
      // this.isLoading = true
      let url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon`
      let httpMethos = 'post'
      let data = localCoupon

      if (!this.isNew) {
        url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${this.localCoupon.id}`
        httpMethos = 'put'
        data = this.localCoupon
      }

      this.$http[httpMethos](url, { data }).then((response) => {
        alert('更改優惠卷')
        this.$emit('get-coupons')
        this.closeModal()
      }).catch((error) => {
        console.dir(error)
        // this.$httpMessageState(error.response, '錯誤訊息')
      })
    },
    closeModal () {
      this.modal.hide()
    }
  }
}
</script>
