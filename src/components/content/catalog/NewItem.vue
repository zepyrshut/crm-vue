<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
    <div class="px-4 py-5 sm:px-6">
      <span class="text-2xl">Añadir artículo</span>
    </div>
    <div class="px-4 py-5 sm:p-6">



      <form v-on:submit.prevent="submitForm" name="item-form">

        <div class="grid grid-cols-6 gap-6">

          <div class="col-span-6">
            <label for="nombre" class="block text-sm font-medium text-gray-700">Nombre</label>
            <input type="text" name="nombre" id="nombre" v-model="this.item.name"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>



          <div class="col-span-6">
            <label for="description" class="block text-sm font-medium text-gray-700">Descripción</label>
            <input type="text" name="description" id="description" v-model="this.item.description"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>


          <div class="col-span-6 sm:col-span-2">
            <label for="buy-price" class="block text-sm font-medium text-gray-700">Precio</label>
            <input type="text" name="buy-price" id="buy-price" v-model="this.item.buyPrice"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>


          <div class="col-span-6 sm:col-span-2">

            <label for="tax" class="block text-sm font-medium text-gray-700">Tipo de IVA</label>
            <select id="tax" name="tax" v-model="this.item.tax"
              class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
              <option value="1">General</option>
              <option value="2">Reducido</option>
              <option value="3">Superreducido</option>
              <option value="4">Exento</option>
            </select>

          </div>


          <div class="col-span-6 sm:col-span-2">
            <label for="code" class="block text-sm font-medium text-gray-700">Código</label>
            <input type="text" name="code" id="code" v-model="this.item.code"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>



          <div class="col-span-6 sm:col-span-2">
            <label for="category" class="block text-sm font-medium text-gray-700">Categoría</label>


            <div v-if="!this.disabledCategories">
              <select id="category" name="category" v-model="this.item.itemCategory"
                class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                <option value="0">- Sin categoría -</option>
                <option v-for="items in this.categories" :value="items.id">{{ items.name }}</option>
              </select>
            </div>

            <div v-else>
              <input type="text" name="" id=""
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-200"
                disabled />
            </div>

            <span> {{ this.item.itemCategory.id }}</span>
          </div>

          <div class="col-span-6 sm:col-span-2">
            <label for="family" class="block text-sm font-medium text-gray-700">Familia</label>

            <div v-if="!this.disabledFamilies">
              <select id="family" name="family" v-model="this.item.itemFamily"
                class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                <option value="0">- Sin familia -</option>
                <option v-for="items in this.families" :value="items.id">{{ items.name }}</option>
              </select>
            </div>

            <div v-else>
              <input type="text" name="" id=""
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-200"
                disabled />
            </div>

            <span> {{ this.item.itemFamily.id }}</span>

          </div>


          <div class="col-span-6 sm:col-span-2">
            <label for="type" class="block text-sm font-medium text-gray-700">Tipo</label>


            <div v-if="!this.disabledTypes">
              <select id="type" name="type" v-model="this.item.itemType"
                class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                <option value="0">- Sin tipo -</option>
                <option v-for="items in this.types" :value="items.id">{{ items.name }}</option>
              </select>

            </div>

            <div v-else>
              <input type="text" name="" id=""
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-200"
                disabled />
            </div>



          </div>










        </div>

        <div class="mt-6">

          <router-link to="/catalog"
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Volver
          </router-link>
          <input type="submit" value="Añadir" class="inline-flex float-right items-center px-4 py-2 border border-transparent text-sm font-medium
            rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2
            focus:ring-offset-2 focus:ring-indigo-500">



        </div>


      </form>


    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      item: {
        name: '',
        description: '',
        buyPrice: '',
        code: '',
        itemCategory: 0,
        itemFamily: 0,
        itemType: 0,
      },
      categories: {},
      families: {},
      types: {},
      disabledCategories: false,
      disabledFamilies: false,
      disabledTypes: false,
      success: false,
    }
  },
  beforeMount() {
    fetch("http://localhost:8081/api/properties/categories")
      .then(response => response.json())
      .then(response => {
        if (this.error || response.data.length == 0) {
          this.$emit('error', response.message);
          this.disabledCategories = true;
        } else {
          this.categories = response.data;
        }
      })
      .catch(error => {
        this.$emit('error', error);
      })

    fetch("http://localhost:8081/api/properties/families")
      .then(response => response.json())
      .then(response => {
        if (this.error || response.data.length == 0) {
          this.$emit('error', response.message);
          this.disabledFamilies = true;
        } else {
          this.families = response.data;
          console.log(response)
        }
      })

    fetch("http://localhost:8081/api/properties/types")
      .then(response => response.json())
      .then(response => {
        if (this.error || response.data.length == 0) {
          this.$emit('error', response.message);
          this.disabledTypes = true;
        } else {
          this.types = response.data;
        }
      })
      .catch(error => {
        this.$emit('error', error);
      })
  },
  methods: {
    submitForm() {
      axios.post("http://localhost:8081/api/item/save", this.item)
        .then(response => {
          if (response.status == 201) {
            // Aqui disparar el mensaje de alerta
          } else {
            // Aqui otro mensaje
          }
        })
    },
  }
}

</script>