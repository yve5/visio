# MF Gulp Boilerplate


## What is it?

This is a personal Gulp and AngularJS project.


## Todo list

- i18n


## Installation

a) Install NodeJS

b) Type the following lines inside a command-line terminal :
<pre>
npm install -g gulp karma
npm install
bower install
</pre>

> If error appears, repeat again the command lines.


## Node_modules folder

With Windows, the removal of **node_modules** folder should be difficult.

Available solutions:
- Delete the folder with a software as Filezilla.
- Type the foolowinf command line: *rimraf node_modules*

> **rimraf** must be used WITH CAUTION. This command line can remove any file.


## Gulp

Type of these below command line inside a terminal:

### Command lines

| Command                    | Meaning                                                  |
| -------------------------- | -------------------------------------------------------- |
| **gulp** or **gulp serve** | Development server launching                             |
| **gulp build**             | Project building in *dist* folder                        |
| **gulp dist**              | Project building and server launching from *dist* folder |
| **gulp hint**              | JavaScript Code Quality Validation                       |
| **gulp test**              | Test Runs                                                |

### Development Environment

Type the command line **gulp** in terminal.

| URL Address               | Meaning                            |
| ------------------------- | ---------------------------------- |
| **http://localhost:1337** | Application interface              |
| **http://localhost:3001** | Configuration interface            |


## AngularJS

### Controller Creation

1) Create a JavaScript file in "app/js/controller" folder (for example, loginController.js).

2) Insert the following code:
```javascript
'use strict';

angular.module('nameApp')
  .controller('loginController', ['$scope', function ($scope) {
      ...
  }]);
```

3) Add file reference at the bottom of *index.html* file.
```html
<!-- build:js scripts/scripts.js -->
...
<script src="controller/loginController.js"></script>
<!-- build:js scripts/scripts.js -->
```

### Service Creation

1) Create a JavaScript file in "app/js/service" folder (for example, authService.js).

2) Insert the following code:
```javascript
'use strict';

angular.module('nameApp')
  .service('authService', function () {
    ...
  });
```

3) Add file reference at the bottom of *index.html* file.
```html
<!-- build:js scripts/scripts.js -->
...
<script src="service/authService.js"></script>
<!-- build:js scripts/scripts.js -->
```

### View Creation

1) Create a HTML file (for example, login.html).

2) Insert the HTML code.

3) Add file reference at the bottom of *main.js* file.
```javascript
<!-- build:js scripts/scripts.js -->
...
.when('/login', {
        templateUrl: 'views/login.html'
      })
 ...
```

### Directive Creation

1) Create a JavaScript file with "app/js/directive" suffix (for example, headerDirective.js).

2) Insert the following code:
```javascript
'use strict';

angular.module('nameApp')
  .directive('header', function () {
    ...
  });
```

3) Create a controller and a view.

4) Add references in JavaScript files.

5) Add the view reference in *main.js* file.


## License

MF Gulp Boilerplate is released under the [MIT License](http://opensource.org/licenses/MIT).