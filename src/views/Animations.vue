<template>
    <div>
        <CRow>
            <CCol>
                <CCard class="py-2">
                    <RotatedAnimation/>
                </CCard>
                <CCard class="py-2">
                    <BouncingDots/>
                </CCard>
            </CCol>
        </CRow>
    </div>
</template>

<script>
import RotatedAnimation from './RotatedAnimation'
import BouncingDots from './BouncingDots'
export default {
    name: 'Animations',
    components : {
        RotatedAnimation,
        BouncingDots
    }
}
</script>