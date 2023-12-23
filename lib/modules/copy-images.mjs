// https://www.codeconcisely.com/posts/nextjs-storing-images-next-to-markdown/
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import fsExtra from 'fs-extra';
import { getFilesRecursively } from './find-files-recusively.mjs';

dotenv.config({ path: path.join(process.cwd(), '.env.local') });

const allowedImageFileExtensions = /^((?!\.md).)*$/; // not markdown
const targetDir = process.env.MD_ASSET_DIR;
const postsDir = process.env.COMMON_MD_DIR;

function createPostImageFoldersForCopy() {
  const imgSlugs = getFilesRecursively(postsDir, allowedImageFileExtensions);
  for (const relSlug of imgSlugs) {
    const currSlug = path.join(postsDir, relSlug);
    const targetSlug = path.join(targetDir, relSlug);
    const slugDir = path.dirname(targetSlug);

    // Ensure directory exists before copying
    fsExtra.ensureDirSync(slugDir);

    // Check if the current file exists before copying
    if (fs.existsSync(currSlug)) {
      fs.copyFileSync(currSlug, targetSlug);
    } else {
      console.error(`Error: Source file not found for ${relSlug}`);
    }
  }
}

// Wrap the script in a try-catch block for error handling
try {
  fsExtra.emptyDirSync(targetDir);
  createPostImageFoldersForCopy();
  console.log('Image copy completed successfully.');
} catch (error) {
  console.error('Error during image copy:', error);
}
