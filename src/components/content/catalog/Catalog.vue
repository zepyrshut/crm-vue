<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-gray-900">Catálogo</h1>
        <p class="mt-2 text-sm text-gray-700">Catálogo de los productos activos.</p>
      </div>
      <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <router-link to="/properties"
          class="mr-3 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 shadow-sm hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
          Propiedades</router-link>
        <router-link to="/item/new"
          class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
          Añadir
          producto</router-link>
      </div>
    </div>
    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    <a href="#" class="group inline-flex">
                      Código
                      <span
                        class="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                        <ChevronDownIcon class="h-5 w-5" aria-hidden="true" />
                      </span>
                    </a>
                  </th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    <a href="#" class="group inline-flex">
                      Nombre
                      <!-- <span class="ml-2 flex-none rounded bg-gray-200 text-gray-900 group-hover:bg-gray-300">
                        <ChevronDownIcon class="h-5 w-5" aria-hidden="true" />
                      </span> -->
                      <span
                        class="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                        <ChevronDownIcon
                          class="invisible ml-2 h-5 w-5 flex-none rounded text-gray-400 group-hover:visible group-focus:visible"
                          aria-hidden="true" />
                      </span>
                    </a>
                  </th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    <a href="#" class="group inline-flex">
                      Descripción
                      <span
                        class="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                        <ChevronDownIcon
                          class="invisible ml-2 h-5 w-5 flex-none rounded text-gray-400 group-hover:visible group-focus:visible"
                          aria-hidden="true" />
                      </span>
                    </a>
                  </th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    <a href="#" class="group inline-flex">
                      Precio
                      <span
                        class="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                        <ChevronDownIcon
                          class="invisible ml-2 h-5 w-5 flex-none rounded text-gray-400 group-hover:visible group-focus:visible"
                          aria-hidden="true" />
                      </span>
                    </a>
                  </th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span class="sr-only">Ver detalles</span>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="items in this.catalog" :key="items.id">
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ items.code
                  }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ items.name }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ items.description }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ items.buyPrice }}</td>
                  <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <router-link :to="'/item/' + items.id" class=" text-indigo-600 hover:text-indigo-900">Ver
                      detalles<span class="sr-only">, {{
                          items.id
                      }}</span></router-link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ChevronDownIcon } from '@heroicons/vue/solid'

export default {
  components: {
    ChevronDownIcon,
  },
  data() {
    return {
      //store,
      ready: false,
      catalog: {},
    }
  },
  emits: ['error'],
  beforeMount() {
    fetch("http://localhost:8080/api/item/catalog")
      .then((response) => response.json())
      .then((response) => {
        if (this.error) {
          this.$emit('error', response.message);
        } else {
          this.catalog = response.data;
          console.log(this.catalog)
        }
      })
      .catch(error => {
        this.$emit('error', error);
      })
  },
  methods: {}
}
</script>