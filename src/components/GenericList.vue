<script setup lang="ts" generic="T extends { id: string | number }">
defineProps<{
    items: T[]
    title?: string
}>()

const emit = defineEmits<{
    select: [item: T]
}>()
</script>

<template>
    <div class="bg-white rounded-xl shadow-md p-5 border border-gray-200">
        <h2
            v-if="title"
            class="text-xl font-bold mb-4 text-gray-800"
        >
            {{ title }}
        </h2>

        <ul
            v-if="items.length > 0"
            class="space-y-3"
        >
            <li
                v-for="item in items"
                :key="item.id"
                class="p-4 rounded-lg border border-gray-100 hover:border-blue-400 hover:bg-blue-50 cursor-pointer transition-all shadow-sm"
                @click="emit('select', item)"
            >
                <slot
                    name="item"
                    :item="item"
                >
                    <pre class="text-sm text-gray-500 truncate">{{ item }}</pre>
                </slot>
            </li>
        </ul>

        <p
            v-else
            class="text-gray-500 italic"
        >
            No items available.
        </p>
    </div>
</template>
