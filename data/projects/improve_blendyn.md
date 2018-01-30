MBDyn is a multibody dynamics solver which comes without any default graphical user interface for pre- and post-processing. There exist a few standalone post-processing tools based on EasyAnim, OpenDx and Blender.

However, [Blendyn](https://github.com/zanoni-mbdyn/blendyn), based on Blender, is the most up-to-date. 

See some example [videos](https://youtu.be/x5n0OgskIMc?list=PLTtFbiep140gc-f-x14ltv0N7YZNzvioF) of its output and the [tutorials](https://github.com/zanoni-mbdyn/blendyn/wiki/Tutorials) to understand better what Blendyn is about. 

It is simple to use and generates 3D animations that represent the exact model movement and joints. 
Blendyn has got a great push in the development in the 2017 edition of the GSoC by the work of [Reddy Janga](https://github.com/janga1997), but some desirable features are still missing and several other need completion. For example:

- the automatic visualization of deformable elements (see PR#26 at (https://github.com/zanoni-mbdyn/blendyn/pull/26)
- the Live Animation https://github.com/zanoni-mbdyn/blendyn/projects/5 project, that aims to allow running MBDyn directly from the Blender interface and animate the results in realtime
- the internal forces and stress/strain fields visualization of deformable components during the animation
- complete writing for each element in Blendyn the updated input for the MBDyn entity, in the Blender text editor

**ENTRY TEST:**

- complete Step 1 of the standard MBDyn [entry test](https://louisgag.github.io/mbdyn-gsoc-projects/#/entry_test)
- use the Blender Python API (or console) to create a simple Blender model
