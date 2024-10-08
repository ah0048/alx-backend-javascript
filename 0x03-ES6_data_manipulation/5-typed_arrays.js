export default function createInt8TypedArray(length, position, value) {
  // Step 1: Create an ArrayBuffer of the given length
  const buffer = new ArrayBuffer(length);

  // Step 2: Create a DataView to manipulate the buffer
  const dataView = new DataView(buffer);

  // Step 3: Check if the position is within the range
  if (position >= length || position < 0) {
    // If the position is out of bounds, throw an error
    throw new Error('Position outside range');
  }

  // Step 4: Set the Int8 value at the specified position
  dataView.setInt8(position, value);

  // Step 5: Return the DataView
  return dataView;
}
