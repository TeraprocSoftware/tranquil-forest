
angular.module('app').value('tpToastr', toastr);

angular.module('app').factory('tpNotifier', function(tpToastr) {
    return {
        notify: function(msg) {
            tpToastr.success(msg);
            console.log(msg);
        }
    }

})