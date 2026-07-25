export interface User {
    id: string;
    username: string;
    email: string;
    phone: string;
    firstName: string;
    lastName: string;
    emailVerified: boolean;
    phoneVerified: boolean;
    role: string;
}

export interface AuthState {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    setAuth: (user: User, token: string) => void;
    logout: () => void;
}