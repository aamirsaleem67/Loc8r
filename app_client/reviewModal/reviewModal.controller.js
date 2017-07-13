(function () {
    angular
        .module('loc8rApp')
        .controller('reviewModalCtrl', reviewModalCtrl);
    reviewModalCtrl.$inject = ['$uibModalInstance','loc8rData', 'locationData'];
    function reviewModalCtrl($uibModalInstance,loc8rData, locationData) {
        var vm = this;

        vm.onSubmit = function () {

            vm.formError = "";
            if (! vm.formData ||!vm.formData.name || !vm.formData.rating || !vm.formData.reviewText) {
                vm.formError = "All fields required, please try again";
                return false;
            } else {
                vm.doAddReview(vm.locationData.locationid, vm.formData);
            }

        };

        vm.doAddReview = function (locationid, formData) {
            loc8rData.addReviewById(locationid, {
                author: formData.name,
                rating: formData.rating,
                reviewText: formData.reviewText
            })
                .then(function (data) {
                    vm.modal.close(data);
                }, function (data) {
                    vm.formError = "Your review has not been saved, try again";
                });

            return false;
        };
        vm.locationData = locationData;
        vm.modal = {
            close: function (result) {
                $uibModalInstance.close(result);
            },
            cancel: function () {
                $uibModalInstance.dismiss('cancel');
            }
        };
    }
})();