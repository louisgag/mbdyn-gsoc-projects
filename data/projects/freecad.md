MBDyn is a multibody dynamics solver which comes without any default graphical user interface 
for pre- and post-processing. There exists a few standalone post-processing tools based on [EasyAnim](https://www.mbdyn.org/?Software_Download___EasyAnim), 
[OpenDx](http://www.opendx.org/) and [Blender](https://www.blender.org/).

The most up-to-date and still under development is [Blendyn](https://github.com/zanoni-mbdyn/blendyn/wiki), based on Blender. 
Is a tool that allows to create [nice-looking](https://github.com/zanoni-mbdyn/blendyn/wiki/Tutorial-3-Full-PUMA-Main-Rotor)
animations as well as to quickly visualize the results of a simulation.

What Blendyn is not, however, is a well-integrated piece in a typical engineering design toolchain. It is not trivial to convert
an engineering CAD model into a model suited to be animated based on the results of an MBDyn simulation in Blendyn, nor it is to
start modeling in Blender for engineering purposes.

In order to get MBDyn closer to the average engineering user, a new tool must be introduced. Enter
[FreeCAD](https://www.freecadweb.org/?lang=en) on the scene. Freecad is probably the most advanced *free* engineering CAD software available and it
offers a fully-fledged [Python API](https://www.freecadweb.org/wiki/FreeCAD_Scripting_Basics#Python_scripting_in_FreeCAD). Since
Freecad supports CAD assembly operations, it could be a natural platform for a graphical pre- and post-processing tool for MBDyn.

The scope of this project is to begin **from scratch** the development of such a tool. Everything is starting anew,
so all the software design choiced will be made together!
