# File Handling & Streams in Node.js

This module demonstrates how to handle files and streams in Node.js, comparing them with Java equivalents.

## Concepts

### 1. File System (`fs`)
Node.js provides the `fs` module to interact with the file system.
- **Synchronous**: Blocks the event loop. Use only for startup scripts or CLI tools.
    - Java: Standard `java.io` operations.
    - Node: `fs.readFileSync`, `fs.writeFileSync`.
- **Asynchronous**: Non-blocking. Preferred for servers.
    - Java: `java.nio.channels.AsynchronousFileChannel` (less common in simple apps).
    - Node: `fs.readFile`, `fs.writeFile` (callback or Promise-based).

### 2. Path Module (`path`)
Utilities for working with file and directory paths.
- Handles cross-platform path separators (`/` vs `\`).
- Java: `java.nio.file.Paths`, `java.io.File`.
- Node: `path.join`, `path.resolve`, `path.basename`.

### 3. Streams
Efficiently handle large data by reading/writing in chunks.
- **Readable Streams**: Source of data (e.g., reading a file).
- **Writable Streams**: Destination for data (e.g., writing to a file).
- **Pipes**: Connect readable streams to writable streams.
- Java: `InputStream`, `OutputStream`.

## Files

- **FileOps.ts**: Demonstrates basic file operations (read/write, sync/async) and path manipulation.
- **StreamOps.ts**: Demonstrates reading a large file line-by-line and writing to another file using streams.
