The internal libraries used by MBDyn have a somewhat complicated configuration and could be simplified. Some of them could be generally useful.  Specifically,

- make the libraries installable
- abstract libraries in a rational manner, to reduce/eliminate cross-dependencies
- replace standard features from broadly available libraries (e.g. STL, Boost); an example is to use shared pointers for features like constitutive laws, drive callers and so forth when useful (native C++ 2011 shared pointers are experimentally in use in some portions of code).
