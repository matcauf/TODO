/**
 * Created by matcauf on 5/27/16.
 */
module todo{

    export class TodoTask{
        private title: string;
        private done: boolean;
        
        constructor(
            title: string,
            done: boolean = false
        ){
            this.title = title;
            this.done = done;
        }

        public getTitle() :string{
            return this.title;
        }

        public setTitle(title:string){
            this.title = title;
        }

        public isDone() :boolean{
            return this.done;
        }

        public setDone(done:boolean){
            this.done = done;
        }
    }


}