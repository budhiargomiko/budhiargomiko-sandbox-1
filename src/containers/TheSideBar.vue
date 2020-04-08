import { cilFolderOpen } from '@coreui/icons';
<template>
    <CSidebar
        fixed
        breakpoint="lg"
        :show="show"
        @update:show="(value) => $store.commit('set', ['showSidebar', value])"
    >
        <CSidebarHeader>
            <h2>Nice Title Here</h2>
        </CSidebarHeader>
        <CSidebarNav>
            <CSidebarNavTitle>
                Main Menu 1
            </CSidebarNavTitle>
            <CSidebarNavItem
                icon="cilFolderOpen"
                name="Menu Item 1"
                :badge="{
                    color: 'danger',
                    text: 'OLD'
                }"
            />
            <CSidebarNavItem
                :badge="{
                    color: 'danger',
                    text: 'OLD'
                }"
            >
                <CLink
                    class="c-sidebar-nav-link"
                    active-class="c-active"
                >
                    <font-awesome-icon class="c-sidebar-nav-icon" :icon="['fas', 'user-secret']" />
                    Fontawesome icon
                    <CBadge tag="span" color="primary">
                        New
                    </CBadge>
                </CLink>
            </CSidebarNavItem>
            <CSidebarNavTitle>
                Sidebar Dropdowns
            </CSidebarNavTitle>
            <CSidebarNavDropdown
                name="Navigator"
            >
                <CSidebarNavItem
                    icon="cilFolderClosed"
                    name="Home"
                    to="/"
                />
                <CSidebarNavItem
                    icon="cilFolderClosed"
                    name="Simple Exchanger"
                    to="SimpleExchanger"
                />
                <CSidebarNavItem
                    name="Animations"
                    to="Animations"
                />
                <CSidebarNavItem
                    name="SampleTable"
                    to="SampleTable"
                /> 
            </CSidebarNavDropdown>
        </CSidebarNav>
    </CSidebar>
</template>

<script>
export default {
    name: 'TheSideBar',
    computed: {
        show(){
            return this.$store.state.showSidebar
        },
        minimize () {
            return this.$store.state.sidebarMinimize
        }

    }
}
</script>