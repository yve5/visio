# Room booking form


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


## License

MF Gulp Boilerplate is released under the [MIT License](http://opensource.org/licenses/MIT).