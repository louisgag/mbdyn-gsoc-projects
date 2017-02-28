MBDyn's modal joint implements a *Component Mode Synthesis* (CMS) deformable body. The CMS element interacts with the multibody model only in specific nodes (interface nodes). The full dynamics of the body is condensed into the superposition of the responses of its modes of vibrations, that it outputs in the form of the time histories of its modal coordinates, together with the ridig body motion of a specific node used to define the floating reference frame, the modal node. 

Currently, the post processing (i.e. the visualization of the superposition of the rigid and the deformable motion of the body) for the element is not implemented in any of the existing post-processing tools. The project aims at filling this gap, by adding support for the flexible *superelement* to [Blendyn](https://github.com/zanoni-mbdyn/blendyn)

**ENTRY TEST:**

- complete Step 1 of the standard MBDyn [entry test](https://louisgag.github.io/mbdyn-gsoc-projects/#/entry_test)
- visualize the results of one of your simulations using [Blendyn](https://github.com/zanoni-mbdyn/blendyn/wiki)
- simulate the simply supported beam model that you can find in the [examples](https://www.mbdyn.org/?Documentation___Official_Documentation___Examples)
- visualize the trajectory of at least one of the FEM nodes of the ssbeam model, using a software of your choice (e.g. Octave, Scilab, Python, gnuplot, ...): refer to section 8.12.32 of the MBDyn input manual to gather information about the modal element output
