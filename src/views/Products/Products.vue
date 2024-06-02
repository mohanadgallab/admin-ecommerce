<template>
    <div class="flex items-center justify-between mb-3">
        <h1 class="text-3xl font-semibold"> Products</h1>
        <button 
            @click="showProductModal"
            type="submit"
            class="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Add New Product
        </button>
    </div>
    <ProductModal v-model="showModal" :modal-value="showModal" @close="onModalClose" :product="productModel"/>
    <ProductsTable  @clickEdit="editProduct"/>
</template>
<script setup>
import ProductsTable from './ProductsTable.vue';
import ProductModal from './ProductModal.vue';
import { ref } from 'vue';
import store from '../../store';

const DEFAULT_EMPTY_PRODUCT = {
    id : '',
    title : '',
    image : '',
    description : '',
    price : ''
}
const showModal = ref(false);
const productModel = ref({...DEFAULT_EMPTY_PRODUCT});
function showProductModal(){
    showModal.value = true
}


function editProduct(p){
    store.dispatch('getProduct', p.id).then(({data}) => {
        productModel.value = data ;
        showProductModal() ;
    })
    
}

function onModalClose() {
    showModal.value = false ;
  productModel.value = {...DEFAULT_EMPTY_PRODUCT};
}
</script>