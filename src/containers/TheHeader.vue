<template>  
    <CHeader fixed withSubHeader="true">
        <CToggler
            :inHeader="true"
            @click="$store.commit('toggleSidebarMobile')"
            class="ml-3 d-lg-none"   
        />
        <CToggler
            in-header
            @click="$store.commit('toggleSidebarDesktop')"
            class="ml-3 d-md-down-none"
        />
        <CHeaderBrand>
            <h3>Some Nice Header Here</h3>
        </CHeaderBrand>
        <CHeaderNav class="mr-auto d-md-down-none">
            <CHeaderNavItem class="px-3">
                <CHeaderNavLink to="/dashboard">
                    Manage Queue
                </CHeaderNavLink>
            </CHeaderNavItem>
            <CHeaderNavItem class="px-3">
                <CHeaderNavLink to="/settings">
                    Settings
                </CHeaderNavLink>
            </CHeaderNavItem>
        </CHeaderNav>
        <CHeaderNav class="mr-4 ml-auto">
            <CHeaderNavItem class="mx-2">
                <CHeaderNavLink>
                    <CIcon name="cil-bell"/>
                </CHeaderNavLink>
            </CHeaderNavItem>
            <CDropdown
                inNav
                class="c-header-nav-items"
                add-menu-classes="pt-0"
            >
                <template #toggler>
                    <CHeaderNavLink>
                        <div class="c-avatar">
                            <CIcon name="cil-user"/>
                        </div>
                    </CHeaderNavLink>
                </template>
                <CDropdownHeader tag="div" class="text-center" color="light">
                    <strong>Account</strong>
                </CDropdownHeader>
                <CDropdownItem>
                    <CIcon name="cil-envelope-open"/> Messages
                        
                </CDropdownItem>
                <CDropdownItem>
                    <CIcon name="cil-bell"/> Notification
                    <CBadge color="danger" class="ml-auto">{{itemsCount}}</CBadge>
                </CDropdownItem>
                
                <CDropdownHeader tag="div" class="text-center" color="light">
                    <strong>Personalization</strong>
                </CDropdownHeader>
                <CDropdownItem>
                    <CIcon name="cil-user"/> Profile Info
                </CDropdownItem>
                <CDropdownItem>
                    <CIcon name="cil-settings"/> Settings
                </CDropdownItem>
                <CDropdownDivider/>
                <CDropdownItem>
                    <CIcon name="cil-lock-locked"/> Lock Account
                </CDropdownItem>
                <CDropdownItem>
                    <CIcon name="cil-account-logout"/> Logout
                </CDropdownItem>
            </CDropdown>
        </CHeaderNav>
    </CHeader>
</template>

<style scoped>
  .c-icon {
    margin-right: 0.5rem;
  }
</style>


<script>
    export default {
        name: "TheHeader",
        data : function () {
                return {
                    itemsCount: 7
                }
            }
    }
</script>