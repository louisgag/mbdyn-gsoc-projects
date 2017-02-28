MBDyn is a tool which comes without any default graphical user interface. There exists a few standalone post-processing tools, based on EasyAnim, OpenDx and Blender, respectively. 

However, [Blendyn](https://github.com/zanoni-mbdyn/blendyn), based on Blender, is the most up-to-date. See some example [videos](https://youtu.be/x5n0OgskIMc?list=PLTtFbiep140gc-f-x14ltv0N7YZNzvioF) of its output and the [tutorials](https://github.com/zanoni-mbdyn/blendyn/wiki/Tutorials) to understand better what Blendyn is about. 

It is simple to use and generates 3D animations that represent the exact model movement and joints. Some additional features can nonetheless be added. For example:

- complete the automatic visualization of elements (currently only a small subset is supported)
- update the MBDyn input file when moving an object in the Blender interface which is linked to a MBDyn element, or at least print the updated input for the MBDyn entity in the Blender text editor
- allow running MBDyn directly from the Blender interface and animate the results in realtime
- visualize internal forces and stress/strain fields of deformable components during the animation
- add possibility to update the animation of a single object
- prevent loosing node association when renaming an object
- select time range to import
- allow non integer import frequencies
- allow the interrupion of the import process
- automatically adjust timesteps when the results file is changed

**ENTRY TEST:**

- complete Step 1 of the standard MBDyn [entry test](https://louisgag.github.io/mbdyn-gsoc-projects/#/entry_test)
- use Blendyn to visualize the results of one of your simulations and use the OpenGL Blender renderer to produce a (compressed) .avi video file
