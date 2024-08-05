import * as fs from 'fs';
import * as path from 'path';

function checkCodeSnippets(filePath: string): void {
  try {
    // Read the contents of the file
    const fileContent: string = fs.readFileSync(filePath, 'utf-8');

    // Regular expression to match triple backticks
    const codeBlockRegex: RegExp = /```[\s\S]*?```/;

    // Check if the file contains code snippets
    if (!codeBlockRegex.test(fileContent)) {
      throw new Error('No code snippets found in the Markdown file.');
    }

    console.log('Code snippets found in the Markdown file.');
    // Proceed with further actions if needed
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`);
    } else {
      console.error('An unknown error occurred.');
    }
    process.exit(1);
  }
}

export default checkCodeSnippets;