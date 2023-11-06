import axios from 'axios'

export default {
    create: async function(newCategory: any) {
        return await axios.post(import.meta.env.VITE_APP_SERVER_HOST_API + "categories", newCategory)
        
    },
    findMany: async function () {
        return await axios.get(import.meta.env.VITE_APP_SERVER_HOST_API + "categories")
    }
}