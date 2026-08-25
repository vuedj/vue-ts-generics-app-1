<script setup lang="ts">
import GenericList from '@/components/GenericList.vue'
import type { Product, User } from '@/types'
import { ref } from 'vue'

const users = ref<User[]>([
    { id: 1, name: 'Alice Richards', role: 'Admin' },
    { id: 2, name: 'Bob Smith', role: 'Editor' },
    { id: 3, name: 'Charlie Davis', role: 'Viewer' },
])

const products = ref<Product[]>([
    { id: 'p-100', title: 'Wireless Keyboard', price: 129.99, inStock: true },
    { id: 'p-101', title: 'Ergonomic Mouse', price: 89.5, inStock: false },
])

function handleUserSelect(user: User) {
    alert(`You selected user: ${user.name} (${user.role})`)
}

function handleProductSelect(product: Product) {
    if (product.inStock) {
        alert(`Added ${product.title} to cart for $${product.price}`)
    } else {
        alert(`${product.title} is currently out of stock.`)
    }
}
</script>

<template>
    <main class="max-w-4xl mx-auto py-12 px-6">
        <h1 class="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            Vue 3 Generics Demo
        </h1>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GenericList
                title="Team Members"
                :items="users"
                @select="handleUserSelect"
            >
                <template #item="{ item }">
                    <div class="flex justify-between items-center">
                        <span class="font-semibold text-gray-800">
                            {{ item.name }}
                        </span>
                        <span
                            class="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded-full font-medium"
                        >
                            {{ item.role }}
                        </span>
                    </div>
                </template>
            </GenericList>

            <GenericList
                title="Hardware Catalog"
                :items="products"
                @select="handleProductSelect"
            >
                <template #item="{ item }">
                    <div class="flex flex-col">
                        <span class="font-semibold text-gray-800">
                            {{ item.title }}
                        </span>
                        <div class="flex gap-3 mt-1 items-center">
                            <span class="text-sm text-green-600 font-medium">
                                ${{ item.price.toFixed(2) }}
                            </span>
                            <span
                                class="text-xs px-2 py-0.5 rounded-md"
                                :class="
                                    item.inStock
                                        ? 'bg-green-100 text-green-800'
                                        : 'bg-red-100 text-red-800'
                                "
                            >
                                {{ item.inStock ? 'In Stock' : 'Out of Stock' }}
                            </span>
                        </div>
                    </div>
                </template>
            </GenericList>
        </div>
    </main>
</template>
