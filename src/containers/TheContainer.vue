<template>
  <div class="c-app">
    <TheSideBar/>
    <CWrapper :fluid=false>
      <TheHeader/>
      <div class="c-body">
        <main class="c-main">
          <CContainer fluid>
            <transition name="fade">
              <router-view></router-view>
            </transition>
          </CContainer>
        </main>
      </div>
    </CWrapper>
  </div>
</template>

<script>
import TheSideBar from "./TheSideBar"
import TheHeader from "./TheHeader"

export default {
    name: 'TheContainer',
    components: {
        TheHeader,
        TheSideBar
    }
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
