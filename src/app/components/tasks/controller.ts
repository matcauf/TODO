/**
 * Created by matcauf on 5/27/16.
 */

module todo {
    
    export class TodoController {
        private taskService:TaskService;
        // ctrl dependencies
        public static $inject = ['$scope', 'Restangular'];
        public tasks:any;
        public newTask:IaddTask;

        constructor(private $scope:ng.IScope, restangular:restangular.IService) {
            // this.taskjson.forEach( (item) => {
            //     this.tasks.push(new TodoTask(item.id, item.name,item.excerp, item.description,
            //                                  item.status, item.dateCreated));
            // });

            this.taskService = new TaskService(restangular);
            this.tasks = this.taskService.getTasks();
            this.newTask = {name: 'hop', description: '', excerp: ''};
        }

        public addTask(){
            this.taskService.postTask(this.newTask)
                .then(()=> {
                    this.newTask = {name: '', description: '', excerp: ''};
                    this.tasks = this.taskService.getTasks();
                }, ()=> {
                    //TODO error catcher
                    this.newTask = {name: 'error', description: 'error', excerp: 'error'};
                });
        };


    }
}