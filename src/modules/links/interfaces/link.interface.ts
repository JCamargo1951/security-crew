export interface Link {
    id: number;
    title: string;
    url: string;
    shortener_url: string,
    visibility: string;
    password?: null | string;
    expires_at?: null | string;
}