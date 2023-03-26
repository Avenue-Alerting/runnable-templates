// This is the main function that will be called by the template.
export const processRows = (rows) => {
  return rows // This is the list of rows from your query
    .map((row) => processRow(row))
    .filter((row) => row !== null && row !== undefined);
};

// Use this function to transform a single row from your query.
const processRow = (row) => {
  // Return the processed row (or null if you want to filter out the row)
  return { ...row };
};
