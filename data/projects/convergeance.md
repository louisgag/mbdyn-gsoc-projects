The convergence criteria determine if the result of the simulation during a timestep has been sufficiently accurate to advance to the next timestep. Currently implemented convergence criteria could be upgraded, for example, by:

- flagging different equations and variables according to their physical dimensions
- computing different residual norms for different physical domains
- for each physical domain, computing a reference comparison value for the convergence check
- developing and test the new convergence test
