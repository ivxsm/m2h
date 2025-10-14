const { marked } = require('marked');

// Configure marked for GitHub Flavored Markdown
marked.setOptions({
  gfm: true,
  breaks: true,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});

/**
 * Convert Markdown text to HTML
 * @param {string} markdownText - The markdown content to convert
 * @returns {string} - The converted HTML
 */
function convertMarkdownToHtml(markdownText) {
  try {
    return marked(markdownText);
  } catch (error) {
    throw new Error(`Markdown conversion failed: ${error.message}`);
  }
}

/**
 * Convert Markdown file to HTML file
 * @param {string} inputPath - Path to input Markdown file
 * @param {string} outputPath - Path to output HTML file
 * @returns {Promise<void>}
 */
async function convertFile(inputPath, outputPath) {
  const fs = require('fs').promises;
  
  try {
    const markdownContent = await fs.readFile(inputPath, 'utf8');
    const htmlContent = convertMarkdownToHtml(markdownContent);
    
    // Wrap in basic HTML structure
    const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Converted Markdown</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; line-height: 1.6; }
        code { background: #f4f4f4; padding: 2px 4px; border-radius: 3px; }
        pre { background: #f4f4f4; padding: 15px; border-radius: 5px; overflow-x: auto; }
        blockquote { border-left: 4px solid #ddd; margin: 0; padding-left: 20px; color: #666; }
        table { border-collapse: collapse; width: 100%; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background-color: #f2f2f2; }
    </style>
</head>
<body>
${htmlContent}
</body>
</html>`;
    
    await fs.writeFile(outputPath, fullHtml, 'utf8');
  } catch (error) {
    throw new Error(`File conversion failed: ${error.message}`);
  }
}

module.exports = {
  convertMarkdownToHtml,
  convertFile
};
