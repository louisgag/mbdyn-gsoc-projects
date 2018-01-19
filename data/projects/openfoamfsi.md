The MBDyn software implements basic aerodynamic models which do not allow to properly model complex flow structures.
A common approach is to rely on CFD simulations to validate the models used within MBDyn.

A more precise and faster approach would be to have the flow simulations embedded directly into the multibody dynamics model.

A preliminary model with a 1-DoF communication has been implemented and can serve as a starting point.

This project is open-ended, but some avenues for thought are:

- implement translation, rotation, or both into the fluid structure interaction approach
- allow for mesh deformation inside the flow solver, the multibody dynamics solver, or both
- use OpenFOAM as the client and MBDyn as the server for the simualtion or attempt a different
 appproach which would require more substantial code changes to both OpenFOAM and MBDyn


Requirements:

- use MBDyn for the structural part
- use OpenFOAM for the fluid part
- provide one or more test cases that exemplify all of the features
- provide detailed installation instructions for anyone starting from the official releases of MBDyn and OpenFOAM

Documentation:

- if this project interests you, contact the MBDyn mailing list or the mentor to have the proper initial documentation
