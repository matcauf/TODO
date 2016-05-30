/**
 * Created by matcauf on 5/27/16.
 */

module todo {
    var todoapp = angular.module('todoapp', ['restangular'])
        .controller('todoCtrl', TodoController)
        .config(['RestangularProvider',
            (RestangularProvider:restangular.IProvider) => {
                RestangularProvider.setBaseUrl("http://192.168.1.213:1334/api/v1/todo/tasks/");
                RestangularProvider.setFullResponse(true);
            }]);
}
