export enum FetchState{
    DEFAULT='default',
    LOADING='loading',
    SUCCESS='success',
    ERROR='error',
}
export type PostData={
    CreatedAt:string,
    DeletedAt:string,
    UpdatedAt:string,
    ID:number;
    name:string;
    description:string;
    details:string;
    image?: File;
}