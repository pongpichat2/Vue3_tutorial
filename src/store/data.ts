import { reactive } from 'vue'


export const state = reactive({
   user:{ username: "Sanook33"}
})

export const dataFack = [
    {
        id:1,
        username:"nook1",
        password:"123456"
    },
    {
        id:2,
        username:"nook2",
        password:"123456"
    },
    {
        id:3,
        username:"nook3",
        password:"123456"
    }
]


export default { state }