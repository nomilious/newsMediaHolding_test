import axios from "axios";

export const instance = axios.create({
    baseURL: __API__,
    headers: {
        "Content-Type": "application/json",
    },
})
