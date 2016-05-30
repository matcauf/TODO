/**
 * Created by matcauf on 5/27/16.
 */
module todo{

    export class TodoTask{
        public uuid:number;
        public name:string;
        public excerp:string;
        public description:string;
        public status:string;
        public dateCreated:string;
        public dateCompleted:string;
        
        constructor(uuid:number,
                    name:string,
                    excerp:string,
                    description:string,
                    status:string,
                    dateCreated:string
        ){
            this.uuid = uuid;
            this.name = name;
            this.excerp = excerp;
            this.description = description;
            this.status = status;
            this.dateCreated = dateCreated;
        }


    }


}