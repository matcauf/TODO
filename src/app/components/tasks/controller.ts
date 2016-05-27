/**
 * Created by matcauf on 5/27/16.
 */

module todo {
    
    export class TodoController {
        private tasks:TodoTask[];
        
        taskjson = [
            {
                title: 'task1',
                done: false
            },
            {
                title: 'task2',
                done: true
            }
        ];

        
        // ctrl dependencies
        public static $inject = ['$scope'];

        constructor(private $scope:any) {
           this.tasks = [];
           this.taskjson.forEach( (item) => {
               this.tasks.push(new TodoTask(item.title, item.done));
           });
            this.$scope.tasks = this.tasks;
        }

        public addTask(){

        };
    }
}