export interface Diploma {
    id: string;
    title: string;
    description: string;
    image: string;
    immutable: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface PaginationMetadata {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
}

export interface GetDiplomasResponse {
    status: boolean;
    code: number;
    payload: {
        data: Diploma[];
        metadata: PaginationMetadata;
    };
}


export interface ApiErrorResponse {
    status: false;
    code: number;
    message: string;
    errors?: Record<string, string[]>;
}