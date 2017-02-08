MBDyn's modal joint implements a *Component Mode Synthesis* (CMS) deformable body. The CMS element interacts with the multibody model only in specific nodes (interface nodes). The full dynamics of the body is condensed into the superposition of the responses of its modes of vibrations, that it outputs in the form of the time histories of its modal coordinates, together with the ridig body motion of a specific node used to define the floating reference frame, the modal node.

The modal joint implementation can be improved in several different ways. For example:

- break down the modal joint element into a set of elements/components:
    - modal database: FEM model; split `const` ( = instantiated once) and `local` (= duplicated) data;
    - place `const` data in shared database, `local` data in modal joint; avoid unnecessary copy of memory;
    - use standard containers for structured data
    - for example,
        - `Mat3xN *pOffsetFEMNodes --> std::vector<Vec3>`
        - `Mat3xN *pOffsetMBNodes --> std::vector<Vec3>`
        - `Mat3xN *pRotMBNodes --> std::vector<Mat3x3>`
    - define a modal dynamics as a "deformable body" element (the structural dynamics part of the existing element)
    - define a modal clamp constraint element (as it is now, but separate from dynamics element)
    - add a total modal joint: this makes it possible to add arbitrary elements connected to the modal element
    - add support for “reference” definition based on modal database geometry
    - implement/fix support for modal joint in initial assembly
