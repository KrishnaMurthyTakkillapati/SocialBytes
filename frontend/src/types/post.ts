export enum FetchState{
    DEFAULT='default',
    LOADING='loading',
    SUCCESS='success',
    ERROR='error',
}
export type PostData={
    userId: number;
    id:number;
    title:string;
    body:string;
}