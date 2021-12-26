<template>
    <div class="form-control is-invalid"><p>{{errorMessage}}</p></div>
</template>

<script>
export default {
    props: {
        errorMessage: {type: String}
    }
}
</script>