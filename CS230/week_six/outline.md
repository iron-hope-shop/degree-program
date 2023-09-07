# how storage and memory are managed in each platform and how management differs
T: Storage and memory are managed differenly based upon operating systems.  Some offer different implementations of memory allocation and file access than others.  Draw It or Lose It (DILI) should only consider leveraging a host operating system which fits its expected performance requirements.
CM: Because we are hosting a web application we must consider the performance from the viewpoint of the host rather than the client.

# What considerations and specific approaches would it take to ensure that memory is effectively managed in the software application, Draw It or Lose It?
# Discusses how the memory management is impacted and identifies and describes how best to address software requirement
T: A memory-mapped interface with an indexed, block-like, structure must be used to ensure that memory is effectively managed in the DILI host machine.
CD: Because directories, like files, must be nonvolatile, they must be stored on the device and brought into memory piecemeal, as needed (Silberschatz, Gagne, &amp; Galvin, 2008).
CM: DILI has a large number of high-definition images which, ideally, would not all be stored in-memory at once as this would increase resource costs.
CM: Additionally, images can be scaled based on the size of the user's browser window to help reduce loading times.
CD: Rather than offering read and write operations, a memory-mapped interface provides access to disk storage via an array of bytes in main memory (Silberschatz, Gagne, &amp; Galvin, 2008).
CM: By utilizing a memory-mapped architecture, such as those in unix-like operating systems, host I/O operations can be dramatically reduced.
CD: Although modern computers can handle many thousands of interrupts per second, interrupt handling is a relatively expensive task (Silberschatz, Gagne, &amp; Galvin, 2008).
CM: With a large buffer time (or in this case, a short loading screen before each game) the I/O load on the host machine to reduce potential interrupts and improve its efficiency.
CM: If DILI has a short wait time before games the serving of games using the same image can also be congregated to be processed at the same time, effectively rendering the same data to multiple independent games at once.

# What considerations and specific approaches would you take to determine how much storage is needed and how to manage storage for your client’s application, Draw It or Lose It?
# Discusses how important storage management is and identifies and describes how best to address software requirements
T: The size of DILI's current image data and future inclusions should be considered to determine how much storage is needed and how to manage storage for the client’s application.
CD: The Gaming Room will have 200 high-definition image files to choose from, each one approximately 8 megabytes in size.
CM: This equates to about 1.6 gigabytes of stateful data.  PaaS such as Azure and GCP usually offer flexible storage buckets for data less than 10GB.
CD: Direct-access files are of great use for immediate access to large amounts of information (Silberschatz, Gagne, &amp; Galvin, 2008).
CM: By using a direct-access filesystems we can bypass some low-level operating system controls and reduce the number of operations required to transfer data to the client.
CD: Other access methods can be built on top of a direct-access method. These methods generally involve the construction of an index for the file. The index, like an index in the back of a book, contains pointers to the various blocks. To find a record in the file, we first search the index and then use the pointer to access the file directly and to find the desired record (Silberschatz, Gagne, &amp; Galvin, 2008).
CM: If the size of DILI's image database grows to be more than 10GB it should also be considered to use a distributed filesystem such as Hadoop for image retreival as this is essentially an abstraction of direct-access for data at scale.

# What are the differences in how memory and storage are used in terms of the game application functionality?
# Discusses the differences in how memory and storage management are used in terms of application functionality
T: The main difference in in how memory and storage are used in terms of the game application functionality is lifecycle. 
CD: Memory refers to short-term data which is accessed on-demand based on immediate needs of the user whereas storage is usually an archive of data that may or may not be accessed within a given timeframe. By reducing the I/O operations required to pull data from long-term storage to short-term memory DILI can reduce the bandwidth required for its clients, thereby improving performance and user experience.

Silberschatz, A., Gagne, G., &amp; Galvin, P. B. (2008). Operating System Concepts, 8th Edition. John Wiley &amp; Sons. Retrieved February 14, 2021, from https://learning.oreilly.com/library/view/operating-system-concepts/9780470128725/silb_9780470128725_oeb_c10_r1.html