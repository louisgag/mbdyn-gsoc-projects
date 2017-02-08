One of the strenghts of MBDyn simulation capabilities lies in dealing with 
(possibily kinematically underdetermined), overactuated systems. 
One prime example are biomechanical systems, where the overactuation originates 
from the redundancy of extensors or flexors muscles acting upon the same joint
([example](http://dx.doi.org/10.1177/1464419313490680)). 

Control forced and moments on overactuated systems can be found using optimization 
techniques that, at the moment, have to be performed outside of MBDyn. The project 
aims at developing an internal, as flexible as possible, static optimization module, 
that can be configured easily to accept user-defined, state-dependent cost functions 
to be minimized.
