JetBrains is a software vendor specializing in the creation of intelligent development tools. JetBrains IDEs 
includes IntelliJ IDEA, PyCharm, CLion, Gogland and so on.

The idea behind the support of coala is that it's better to have a general mechanism of highlighting code analysis results from external tools. (By the way, pycharm already have something similar for PEP8) Of course the primary goal is to support coala, but the API should be done in a way to be able to support others.

So The project is divided into two parts:

1. Have a general mechanism of highlighting code analysis results from external tools.
2. Offer a plugin to support coala.

##### Features

* Implement a linter for languages supported by coala.
* Support all jetbrains IDEs.
* (Long-term, not in this project) Support for automatically formatting code.
* (Long-term, not in this project) Coafile support.
	* Support coafile syntax highlight.
	* Coloring files that should be checked in the Project View.
	* Support templates.

#### Milestones

##### GSOC 2017 CODING STARTS

* A concept exists for how to support showing result for code analysis tools.
* A Mock plugin set up.

##### GSOC 2017 MIDTERM

* A working plugin with minimal functionality exists.
* Corresponding test cases exists.
* Corresponding documentation exists.

##### GSOC 2017 FINAL

* A working plugin with full functionality exists.
* A full covering testsuite exists.
* Full Documentation exists.
