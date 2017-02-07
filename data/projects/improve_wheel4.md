The wheel4 module intends to reproduce the dynamic behavior of tires using a [rigid ring](https://www.researchgate.net/publication/283666958_An_Implicit_Rigid_Ring_Tire_Model_for_Multibody_Simulation_with_Energy_Dissipation) type of model. During the development of the module, various avenues were envisioned to accelerate the resolution procedure. The documentation and parameter definition of the model would also benefit from a simplification.

Possible to-do list:
- simplify the module documentation
- simplify the mathematical implementation
- implement a clear parameter definition method
- add camber variation effects
- filter the road profile directly inside MBDyn instead of during preprocessing with other computing environments (e.g. Octave or Matlab)
- implement a lateral tire section profile (currently, only the longitudinal profile is considered by the model)
- simplify the ability to change the orientation of the tire
