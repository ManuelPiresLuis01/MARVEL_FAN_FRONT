import api from "../api.ts";
import { registrationRoute, activationRoute } from "../routes/authroutes/auth.route.ts";
import type { user } from "../types/user.types.ts";

export const Registry = async (user:user) => {
    try {
        const response = await api.post(registrationRoute, {user})
        return response.data
    } catch (error: any) {
        return error.data

    }
}

export const Activate = async (email: string, code: string) => {
    try {
        const response = await api.post(activationRoute, { email, code })
        return response.data
    } catch (error: any) {
        return error.data

    }
}





