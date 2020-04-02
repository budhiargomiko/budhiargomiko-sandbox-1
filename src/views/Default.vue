<template>
    <div>
        <CRow>
            <CCol>
                <CCard>
                    <CCardBody>
                        <CJumbotron>
                            <h1 class="display-3">Home</h1>
                            <p class="lead">Some simple and short explanation here</p>
                            <p>This section using bootstrap-based's Jumbotron</p>
                        </CJumbotron>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    </div>
</template>

<script>
export default {
    name : "Default",
    data : function() { 
        return { text1 : "The quick brown fox jumps over the lazy dog."     }
    }
}
</script>