angular.module('iMode')
    .directive('fileSelect', ['$window','$parse', function ($window, $parse) {
        return {
            restrict: 'A',
            link: function (scope, el, attr) {
                var fileReader = new $window.FileReader();
                var onLoad = $parse(attr.fileLoaded);
                var onProgress = $parse(attr.fileProgress);
                var onError = $parse(attr.fileError);

                fileReader.onload = function () {
                    if ('fileLoaded' in attr) {
                        scope.$apply(function() {
                            onLoad(scope, {'$file': fileReader.result});
                        });
                    }
                };

                fileReader.onprogress = function (event) {
                    if ('fileProgress' in attr) {
                        scope.$apply(function() {
                            onProgress(scope, {'$total': event.total, '$loaded': event.loaded});
                        });
                    }
                };

                fileReader.onerror = function () {
                    if ('fileError' in attr) {
                        scope.$apply(function() {
                            onError(scope, {'$error': fileReader.error});
                        });
                    }
                };

                var fileType = attr['fileSelect'];

                el.bind('change', function (e) {
                    var fileName = e.target.files[0];

                    if (fileType === '' || fileType === 'text') {
                        fileReader.readAsText(fileName);
                    } else if (fileType === 'data') {
                        fileReader.readAsDataURL(fileName);
                    }
                });
            }
        };
    }]);