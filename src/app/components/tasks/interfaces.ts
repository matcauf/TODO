module todo {
    export interface Itask{
        id: number,
        name: string,
        excerp: string,
        description: string
        status: string,
        dateCreated: string,
        dateCompleted: string
    }

    export interface IaddTask{
        name: string,
        excerp ?: string,
        description ?: string
    }


}