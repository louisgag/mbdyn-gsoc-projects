Over the years, various interfaces to popular modeling software have been developed, in some cases even duplicated. However, the implementation in some cases remains unreliable. A good coupling interface rework is needed:

- improve MATLAB hooks
- streamline Octave hooks
- add/improve Scilab hooks
- add/improve MATLAB/Octave/Scilab and Simulink/Scicos co-simulation interface.

Large projects

- add support for coupling with [SU2](https://su2code.github.io/) CFD software
- turn MBDyn into a module for Simulink/Scicos (see contrib/SimulinkInterface/ ; need an implicit extension).

- add package-wide support for WinSocks in communication entities, including SimulinkInterface and ScicosInterface (using MSYS/MinGW)
