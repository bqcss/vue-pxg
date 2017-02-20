<template>
  <div>
    <badge text="1"></badge>
    <br>
    <badge text="123"></badge>
    <br>
    <group :title="('Used in a Cell')">
      <cell :title="('single digit')" is-link>
        <div class="badge-value" slot="value">
          <span class="vertical-middle">{{ ('New Message') }} &nbsp;</span>
          <badge text="8"></badge>
        </div>
      </cell>
      <cell :title="('Big Number')" is-link>
        <div class="badge-value" slot="value">
          <span class="vertical-middle">{{ ('New Message') }} &nbsp;</span>
          <badge text="888"></badge>
        </div>
      </cell>
    </group>
  </div>
</template>



<script>
import { Badge, Group, Cell } from 'vux'

export default {
  components: {
    Badge,
    Group,
    Cell
  }
}
</script>

<style lang="less">
.badge-value {
  display: inline-block!important;
}
.vertical-middle {
  vertical-align: middle;
}
</style>