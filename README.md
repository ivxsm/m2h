# MD to HTML Converter

A fast command-line tool that converts Markdown files to HTML using GitHub Flavored Markdown support.

## Installation

```bash
npm install
```

## Usage

```bash
m2h input.md [output.html]
```

### Examples

Convert a README file (auto-generates README.html):
```bash
m2h README.md
```

Convert with custom output filename:
```bash
m2h README.md custom.html
```

Convert with custom output path:
```bash
m2h ./docs/guide.md ./public/guide.html
```

Output only HTML content without CSS wrapper:
```bash
m2h README.md --html-only
```

## Features

- GitHub Flavored Markdown support (tables, task lists, strikethrough)
- Clean HTML output with built-in CSS styling
- Optional output filename (auto-generates from input if not provided)
- Raw HTML output option (--html-only flag)
- Automatic directory creation
- Error handling for missing files
- Help and version information

## Commands

- `m2h -h` or `m2h --help` - Show help
- `m2h -v` or `m2h --version` - Show version

## Requirements

- Node.js 14.0.0 or higher
- Input file must have `.md` extension
