<template>
    {{ order }}
</template>
<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../../store';
import { useRoute } from 'vue-router';

const route = useRoute() ;
const order = ref({})
onMounted(() => {
    order.value =  store.dispatch('getOrder', route.params.id)
});




</script>