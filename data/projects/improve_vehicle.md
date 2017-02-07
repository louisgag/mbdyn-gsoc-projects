A [semi-trailer truck](https://www.mbdyn.org/userfiles/documents/examples/semitrailerPub.tar.bz2) model was developed in MBDyn script and this was a first step into adapting the software to ground vehicle analysis. See an [animation](https://www.mbdyn.org/userfiles/documents/examples/animCamion.gif) of the truck in action. It would be nice to take some concepts used for such an analysis and implement them directly in the MBDyn code.

Some possible improvements include:
- take the scripting tricks and joints used in the truck model and incorporate them directly into the MBDyn code
- improve the MBDyn output to include car, truck, and general ground vehicle data
- implement a set of general procedures to carry-on with a vehicle model (ie: SAE testing procedures for fuel consumption, stability, and maneuverability)
- develop an output element anologous to the **aircraft instruments** element, that exposes relevant measures to potential vehicle control systems (e.g. vehicle sideslip angle, wheel angular velocities, tyre slips, yaw angular acceleration, etc.)
