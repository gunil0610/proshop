import path from 'path';
import { appendFile, resetFile, toPascalCase } from '../../scripts/helpers.mjs';

const getImportString = (
  componentName,
  iconName,
  aliasImportFileExtension,
) =>
    `export { default as ${componentName} } from './icons/${iconName}${aliasImportFileExtension}';\n`;

export default async function generateAliasesFile({
  iconNodes,
  outputDirectory,
  fileExtension,
  aliasImportFileExtension,
  aliasNamesOnly = false,
  showLog = true,
}) {
  const fileName = path.basename(`aliases${fileExtension}`);
  const icons = Object.keys(iconNodes);

  // Reset file
  resetFile(fileName, outputDirectory);

  // Generate Import for Icon VNodes
  await Promise.all(
    icons.map((iconName, index) => {
      const componentName = toPascalCase(iconName);
      let importString = '';

      if (!aliasNamesOnly) {
        if (index > 0) {
          importString += '\n';
        }

        importString += `// ${componentName} aliases\n`;
      }

      if (!aliasNamesOnly) {
        importString += getImportString(`${componentName}Icon`, iconName, aliasImportFileExtension);
        importString += getImportString(
          `IMQA${componentName}`,
          iconName,
          aliasImportFileExtension,
        );
      }

      appendFile(importString, fileName, outputDirectory);
    }),
  );

  appendFile('\n', fileName, outputDirectory);

  if (showLog) {
    console.log(`Successfully generated ${fileName} file`);
  }
}
