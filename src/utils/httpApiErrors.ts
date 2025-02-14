export const handleApiError = (error: unknown): string | null => {
  // Safely access the nested structure error?.response?.data?.data
  //@ts-expect-error - expect error
  const data = error?.response?.data?.data;

  if (!data) {
    return null; // Return null if data is undefined or null
  }

  const traverseAndExtract = (data: unknown): string | null => {
    if (!data) {
      return null; // Return null if data is undefined or null
    }

    if (typeof data === "string") {
      return data; // Base case: If data is a string, return it as error message
    }

    if (Array.isArray(data)) {
      // If data is an array, recursively search each element
      for (const item of data) {
        const errorMessage = traverseAndExtract(item);
        if (errorMessage !== null) {
          return errorMessage; // Return the first error message found in the array
        }
      }
      return null; // No error message found in the array
    }

    if (data instanceof Object) {
      // If data is an object, recursively search each property value
      for (const key in data) {
        // eslint-disable-next-line no-prototype-builtins
        if (data.hasOwnProperty(key)) {
          //@ts-expect-error -expects error
          const errorMessage = traverseAndExtract(data[key]);
          if (errorMessage !== null) {
            return `${key}: ${errorMessage}`; // Return key along with the first error message found
          }
        }
      }
      return null; // No error message found in the object
    }

    return null; // Default case: Return null if no error message is found
  };

  // Call the recursive function to extract the first error message from data
  return traverseAndExtract(data);
};
