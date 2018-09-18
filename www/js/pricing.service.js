(function() {
    'use strict';

    angular.module('myApp').service('UserService', UserService);

    UserService.$inject = [
        'DataManagementService',
        'DefaultVariableService',
        'EnvironmentService',
        'LoginService',
        'RequestManagementService'
    ];

    function UserService(
        DataManagementService,
        DefaultVariableService,
        EnvironmentService,
        LoginService,
        RequestManagementService
    ) {
        var UserService = this;

        UserService.getUser = getUser;
        function getUser(user) {
            if (!DefaultVariableService.isObject(user)) {
                var userId = EnvironmentService.get('user_id');
                if (userId) {
                    user = {
                        id: userId
                    };
                } else {
                    return LoginService.getActiveUser().then(
                        function(activeUser) {
                            if (activeUser) {
                                return UserService.getUser(activeUser);
                            }

                            return false;
                        }
                    );
                }
            }

            return UserService.loadUser(user);
        }

        UserService.loadUser = loadUser;
        function loadUser(user) {
            var options = RequestManagementService.getRequest();

            options = RequestManagementService.setModel(options, 'users');
            options = RequestManagementService.setAction(options, 'get', user.id);

            options = RequestManagementService.setParams(
                options,
                [
                    'Images',
                    'Locations.States',
                    'Tags',
                    'UserTypes'
                ]
            );

            return DataManagementService.request(options).then(
                function(data) {
                    if (data) {
                        var users = DefaultVariableService.getArray(
                            data.users
                        );

                        if (users.length !== 0) {
                            return users[0];
                        }
                    }

                    return false;
                }
            );
        }


        UserService.reset = reset;
        function reset() {

        }

        UserService.reset();

        return UserService;
    }
})();