<script setup>
// eslint-disable-next-line no-undef
defineProps({
  id: Number
})

/**
{
    "id" : chatroom_id,
    "title" : "hna m9awdin",
    "users" : [
        {
            "id" : user_id
        },
    ],
    "chats" : [
        {
            "id" : chat_id,
            "user or user_id>>axios" : {

                    },
            "message" : "",
            "created_at" : timestamp
        }
    ]
}
 */
import LayoutPage from './LayoutPage.vue';
</script>
<template>
    <LayoutPage>
        <div v-if="id == 0">
            <p>Select a chatroom to start messaging</p>
        </div>
        <div v-else>
            <div v-for="chat in chats" class="w-full" :class="chat.user_id == ana_id ? 'chat-end' : 'chat-start'">
                <div>
                    <p>{{ chat.message }}</p>
                </div>
            </div>
        </div>
    </LayoutPage>
</template>