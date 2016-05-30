module todo {
    export interface Itask extends ng.IScope {
        tasks:restangular.IPromise<any>,
        newTask:IaddTask
    }

    export interface IaddTask {
        name: string,
        excerp?:string,
        description?:string
    }


}