import * as XLSX from "xlsx";

export function readExcel(filePath, sheetName) {
  return cy.readFile(filePath, "binary").then((file) => {
    const workbook = XLSX.read(file, { type: "binary" });
    const worksheet = workbook.Sheets[sheetName];
    return XLSX.utils.sheet_to_json(worksheet);
  });
}
