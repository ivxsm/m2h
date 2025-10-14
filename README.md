# MD to HTML Converter

A fast command-line tool that converts Markdown files to HTML using GitHub Flavored Markdown support.

## Installation

```bash
npm install
```

## Usage

```bash
md2html input.md output.html
```

### Examples

Convert a README file:
```bash
md2html README.md README.html
```

Convert with custom output path:
```bash
md2html ./docs/guide.md ./public/guide.html
```

## Features

- GitHub Flavored Markdown support (tables, task lists, strikethrough)
- Clean HTML output with built-in CSS styling
- Automatic directory creation
- Error handling for missing files
- Help and version information

## Commands

- `md2html -h` or `md2html --help` - Show help
- `md2html -v` or `md2html --version` - Show version

## Requirements

- Node.js 14.0.0 or higher
- Input file must have `.md` extension
