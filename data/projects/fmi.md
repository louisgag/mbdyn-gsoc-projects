During the GSoC2016 the Functional Mock-up Interface (FMI) standard was implemented into MBDyn.
The code can be seen [here](https://www.mbdyn.org/?News&id=28).
It is desired to improve the current implementation by, for example, mitigating the following limitations:

- Currently the module does not support the string drive.
- The module gives a segmentation fault if FMU with version 1.0 is used with simulation type not supported by the FMU.
- Constant timestep for cosimulation.

For this project, the student should review the work done during 2016 and come up with his/her own suggestions.
