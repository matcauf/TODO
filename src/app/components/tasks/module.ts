/**
 * Created by matcauf on 5/27/16.
 */

module todo {
    angular.module('todoapp', ['restangular', 'ui.router'])
        .config(['RestangularProvider',
            (RestangularProvider:restangular.IProvider) => {
                RestangularProvider.setBaseUrl("http://192.168.1.213:1334/api/v1/todo/tasks/");
                RestangularProvider.setFullResponse(true);
            }])
        .config(($stateProvider:ng.ui.IStateProvider, $urlRouterProvider:ng.ui.IUrlRouterProvider) => {
            $urlRouterProvider.otherwise("/list");
            $stateProvider.state("list", {
                url: "/list",
                templateUrl: "./tasks.list.html",
                controller: TodoListController,
                controllerAs: "ctrl"
            });

            $stateProvider.state("task", {
                url: "/task/{id:int}",
                templateUrl: "/task.Details.html",
                controller: TodoDetailController,
                controllerAs: "ctrl"
            })
        });
    // .config(($stateProvider:ng.ui.IStateProvider, $urlRouterProvider:ng.ui.IUrlRouterProvider) => {
    // $urlRouterProvider.otherwise("/");
    // })


}
