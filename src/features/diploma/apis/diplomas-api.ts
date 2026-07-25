import type { ApiErrorResponse, GetDiplomasResponse } from "../types/diplomas";
const API_LINK = import.meta.env.VITE_API_LINK;
const user = localStorage.getItem("user");
const token = user
    ? JSON.parse(user).state.token
    : "";
export async function getDiplomas(): Promise<GetDiplomasResponse> {

    const response = await fetch(
        `${API_LINK}/api/diplomas?page=1&limit=12`,
        {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        }
    );

    const result: GetDiplomasResponse = await response.json();

    if (!response.ok) {
        const errorResult: ApiErrorResponse = await response.json();
        throw {
            status: response.status,
            message: errorResult.message,
            errors: errorResult.errors,
        };
    }

    return result;
}