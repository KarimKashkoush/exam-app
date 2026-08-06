const API_LINK = import.meta.env.VITE_API_LINK;

export const getExams = async (id: string) => {
    const user = localStorage.getItem("user");
    const token = user
        ? JSON.parse(user).state.token
        : "";
    const response = await fetch(
        `${API_LINK}/api/exams/?diplomaId=${id}&immutable=true&page=1&limit=100`,
        
        {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "accept": "application/json"
            },
        }
    );


    const result = await response.json();

    if (!response.ok) {
        throw {
            status: response.status,
            message: result.message,
            errors: result.errors,
        };
    }

    console.log("RESULTS", result);

    return result;
};