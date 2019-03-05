<template>
    <div class="file-item">{{object.name}}</div>
</template>

<script>
export default {
    props: {
        object: {
            default: 'default'
        }
    },
}
</script>

