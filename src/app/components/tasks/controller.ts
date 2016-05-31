/**
 * Created by matcauf on 5/27/16.
 */

module todo {

    export class TodoListController {
        // ctrl dependencies
        private taskService:TaskService;
        public static $inject = ['TaskService'];
        public tasks:[Itask];
        public newTask:IaddTask;

        constructor(taskService:TaskService) {
            this.taskService = taskService;

            this.taskService.getTasks().then((list:any) => {
                this.tasks = list;
            });
            this.newTask = {name: 'hop', description: '', excerp: ''};
        }

        public addTask(){
            this.taskService.postTask(this.newTask).then((list:any) => {
                this.tasks = list;
            })
        };

        public static filterCloseSinceMonth(task:Itask) {
            if (task.status === 'open') {
                return true;
            }
            else {
                var completedDate:Date = new Date(Date.parse(task.dateCompleted));
                completedDate.setMonth(completedDate.getMonth() + 1);

                return completedDate.getTime() > Date.now();
            }
        }
    }

    export class TodoDetailController {
        public $state:ng.ui.IState;
        private taskService:TaskService;
        public currentTask:any;
        // ctrl dependencies
        public static $inject = ['$state', 'TaskService'];

        constructor($state:ng.ui.IState, taskService:TaskService) {
            //this.restangular = restangular;
            this.taskService = taskService;
            this.$state = $state;
            this.taskService.getTask($state.params.id);
            //this.getTask($state.params.id);
        }

        // public getTask(id:string) {
        //     this.restangular.one("",id).get()
        //         .then((task:any)=>{
        //         this.currentTask = this.restangular.stripRestangular(task).data;
        //
        //     },
        //     ()=>{
        //         //this.tasks = [ {name: 'error', description: 'error', excerp: 'error'}];
        //     });
        // }

    }

    angular.module('todoapp').controller("TodoListCtrl", TodoListController);
    angular.module('todoapp').controller("TodoDetailCtrl", TodoDetailController);

}