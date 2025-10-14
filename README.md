# Markdown to HTML Converter

A fast command-line tool that converts Markdown files to HTML using GitHub Flavored Markdown support.

## Getting Started

### Prerequisites

- Node.js 14.0.0 or higher
- npm (comes with Node.js)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/md-to-html-converter.git
   cd md-to-html-converter
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Make the command globally available (optional):**
   ```bash
   npm link
   ```

## Quick Start

After installation, you can start converting Markdown files immediately:

```bash
# Convert a README file (auto-generates README.html)
m2h README.md

# Convert with custom output filename
m2h README.md custom.html

# Convert with custom output path
m2h ./docs/guide.md ./public/guide.html
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

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues or have questions, please open an issue on GitHub.
