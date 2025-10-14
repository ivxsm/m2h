#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { convertFile } = require('./converter');

/**
 * Display help information
 */
function showHelp() {
  console.log(`
Markdown to HTML Converter

Usage: m2h <input.md> [output.html]

Arguments:
  input.md     Path to the input Markdown file
  output.html  Path to the output HTML file (optional)

Examples:
  m2h README.md                    # Creates README.html
  m2h README.md README.html         # Creates README.html
  m2h ./docs/guide.md ./public/guide.html

Options:
  --html-only  Output only HTML content without CSS wrapper
  -h, --help   Show this help message
  -v, --version Show version information
`);
}

/**
 * Display version information
 */
function showVersion() {
  const packageJson = require('./package.json');
  console.log(`md2html v${packageJson.version}`);
}

/**
 * Main CLI function
 */
async function main() {
  const args = process.argv.slice(2);
  
  // Handle help and version flags
  if (args.includes('-h') || args.includes('--help')) {
    showHelp();
    return;
  }
  
  if (args.includes('-v') || args.includes('--version')) {
    showVersion();
    return;
  }
  
  // Check for --html-only flag
  const htmlOnly = args.includes('--html-only');
  const filteredArgs = args.filter(arg => arg !== '--html-only');
  
  // Check for required arguments
  if (filteredArgs.length < 1) {
    console.error('Error: Missing required arguments');
    console.error('Usage: m2h <input.md> [output.html]');
    console.error('Use -h or --help for more information');
    process.exit(1);
  }
  
  const inputPath = filteredArgs[0];
  let outputPath = filteredArgs[1];
  
  // If no output path provided, generate it from input path
  if (!outputPath) {
    outputPath = inputPath.replace(/\.md$/i, '.html');
  }
  
  // Validate input file exists
  if (!fs.existsSync(inputPath)) {
    console.error(`Error: Input file '${inputPath}' does not exist`);
    process.exit(1);
  }
  
  // Validate input file extension
  if (!inputPath.toLowerCase().endsWith('.md')) {
    console.error(`Error: Input file '${inputPath}' must have .md extension`);
    process.exit(1);
  }
  
  // Create output directory if it doesn't exist
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    try {
      fs.mkdirSync(outputDir, { recursive: true });
    } catch (error) {
      console.error(`Error: Cannot create output directory '${outputDir}'`);
      process.exit(1);
    }
  }
  
  try {
    console.log(`Converting ${inputPath} to ${outputPath}...`);
    await convertFile(inputPath, outputPath, htmlOnly);
    console.log('Conversion completed successfully!');
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

// Run the CLI
if (require.main === module) {
  main().catch(error => {
    console.error(`Unexpected error: ${error.message}`);
    process.exit(1);
  });
}
