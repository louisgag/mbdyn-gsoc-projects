##MBDyn-GSoC 2018 entry test

####Some projects require specific entry tests, if your project does not, then follow these instructions.

This entry test is divided into **4 steps**: the further you get through it, the better your chances are of being selected for the summer of code.

**Important note:** you must complete step 1 for your application to be considered.


*Once you complete a step, notify your tentative mentors to obtain feedback.*



####Step 1, first contact

- download MBDyn, compile it, create a test case, and run it
- describe how you compiled MBDyn, including any difficulties you encountered and their solutions; the case you chose to run and a link to the actual case; and, at least one figure showing the results as a plot of relevant data, such as position, forces, velocity, etc.
- useful links:
 - [MBDyn-1.7.3](https://www.mbdyn.org/userfiles/downloads/mbdyn-1.7.3.tar.gz)
 - [Instructions manual](https://www.mbdyn.org/userfiles/documents/mbdyn-input-1.7.3.pdf)
 - [Example cases](https://www.mbdyn.org/?Documentation___Official_Documentation___Examples)
- note that this step does not involve programing
- *requires roughly 2 hours plus compile time*

####Step 2, get to know the code

- implement a modification to the MBDyn code used by the test case you ran
 - the modification must be made to the compiled code, thus probably C++
- re-run your test case with the modified code
- describe the effect of your modification on the test case's results
- provide the patch file for the modification you performed using the method specified in [MBDyn's FAQ](https://www.mbdyn.org/?Documentation___Official_Documentation___FAQ#HOW_DO_I_SUBMIT_A_PATCH_TO_MBDYN)
- *expect to commit roughly 4 hours*
 
####Step 3, create your own code

- compile MBDyn (on Linux) with support for run-time loadable modules
 - see the related [FAQ entry](https://www.mbdyn.org/?Documentation___Official_Documentation___FAQ#HOW_CAN_I_BUILD_RUN_TIME_LOADABLE_MODULES) for instructions
 - you may also need to consider the additional steps mentioned in the FAQ if you are, for example, running on Ubuntu 16.04
- develop a simple run-time loadable module that implements a custom instance of one of:
 - a drive caller,
 - a constitutive law,
 - an element,
 - anything else;
- develop a simple model (an input file) that demonstrates the (correct) use of the custom module
- name the module "module-gsoc-your-name.cc"
- the module must compile and work as documented (by the applicant)
- the objective and the purpose of the module can be discussed (the preferred channel is the mailing list)
- applicants are invited to look at distributed modules (in the "modules/" folder) as useful working examples
 - non-creative copy’n’paste is discouraged
- **HINT:** look at the mailing list archive to see past year's module related questions
- **NOTE:** the project proposed in the application does not need to be related to the module that is developed as the entry test

####Step 4, become an expert

- Fix an issue from the [TODO](https://www.mbdyn.org/?Developers_corner___TODO_list)
