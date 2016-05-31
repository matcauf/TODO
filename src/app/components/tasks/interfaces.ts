module todo {
    export interface Itask extends ng.IScope {
        uuid:number,
        name:string,
        excerp:string,
        description:string
        status:string,
        dateCreated:string,
        dateCompleted:string
    }

    export interface IaddTask {
        name: string,
        excerp?:string,
        description?:string
    }


}