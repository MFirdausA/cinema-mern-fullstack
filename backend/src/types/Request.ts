type User = {
    id: string;
    name: string;
    role: "admin" | "customer";
    email: string;
}

export interface CustomRequest extends Request {
    user?: User,
}