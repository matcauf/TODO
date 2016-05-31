/**
 * Created by matcauf on 5/27/16.
 */

module todo {
    // export class RestService {
    //     httpService: ng.IHttpService;
    //     url: string;
    //
    //     constructor ( $http:ng.IHttpService ){
    //         this.httpService = $http;
    //     }
    //
    //     protected useGetHandler( params: any ): ng.IPromise< any >
    //     {
    //         var response: ng.IPromise< any > = this.httpService.get( this.url, params );
    //         var result: ng.IPromise< any > = this.handlerResponded(response, params);
    //         //equivalent a
    //         // var result: ng.IPromise< any > = this.httpService.get( this.handlerUrl, params )
    //         //     .then( ( response: any ): ng.IPromise< any > => this.handlerResponded( response, params ) );
    //         // return result;
    //
    //         return result;
    //     }
    //
    //     protected usePostHandler( params: any ): ng.IPromise< any >
    //     {
    //         var response: ng.IPromise< any >  = this.httpService.post( this.url, params )
    //         var result: ng.IPromise< any >  = this.handlerResponded( response, params );
    //         return result;
    //         // var result: ng.IPromise< any >  = this.httpService.post( this.handlerUrl, params )
    //         //     .then( ( response: any ): ng.IPromise< any > => this.handlerResponded( response, params ) );
    //         // return result;
    //     }
    //
    //     private handlerResponded( response: any, params: any ): any
    //     {
    //         response.data.requestParams = params;
    //         return response.data;
    //     }
    //
    // }


    import IService = restangular.IService;
    import IPromise = restangular.IPromise;
    export class TaskService {
        private restangular:restangular.IService;
        static $inject = ['Restangular'];


        constructor(restangular:restangular.IService) {
            this.restangular = restangular;
        }

        public getTasks():any {
            return this.restangular.all('list').getList().then(
                //success
                (list:any)=> {
                    console.log("success");
                    return this.restangular.stripRestangular(list).data;

                },
                ()=> {
                    //this.tasks = [ {name: 'error', description: 'error', excerp: 'error'}];
                }
            );
        }

        public getTask(id:string):any {
            console.log(id);
            return this.restangular.one("", id).get()
                .then((task:any)=> {
                        return this.restangular.stripRestangular(task).data;
                    },
                    ()=> {
                        console.log("error");
                        //this.tasks = [ {name: 'error', description: 'error', excerp: 'error'}];
                    });
        }

        public postTask(params:any):any {
            return this.restangular.all('add').post(params)
                .then(()=> {
                    return this.getTasks();
                }, ()=> {
                    //TODO error catcher
                    //this.newTask = {name: 'error', description: 'error', excerp: 'error'};
                });
        }


    }
    angular.module('todoapp').service('TaskService', TaskService);
}