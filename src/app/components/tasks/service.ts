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


    export class TaskService {
        static $inject = ['Restangular'];


        constructor(private restangular:restangular.IService) {
            this.restangular = restangular;
        }

        public getTasks():any {
            return this.restangular.all('list').getList().$object;
        }

        public getTask(id:number):restangular.IPromise< any > {
            return this.restangular.all(id.toString()).get();
        }

        public postTask(params:any):restangular.IPromise< any > {
            return this.restangular.all('add').post(params);
        }


    }

}