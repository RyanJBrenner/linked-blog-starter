import { NextApiRequest, NextApiResponse } from 'next';
import * as fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { folder } = req.query;

  const commonMdPath = path.join(process.cwd(), String(folder));

  try {
    // Check if the folder or file exists
    const stats = await fs.stat(commonMdPath);
  
    if (stats.isDirectory()) {
      // It's a folder, you can continue with your logic
      // For example, list files in the folder or perform other folder-specific operations
      console.log('It is a folder');
    } else if (stats.isFile()) {
      // It's a file, you can return information about the file
      // For example, return file details such as size, modification time, etc.
      console.log('It is a file');
      console.log('File size:', stats.size);
      console.log('Last modified:', stats.mtime);
    } else {
      // It's neither a folder nor a file
      return res.status(404).json({ error: 'Not a valid folder or file' });
    }

    const files = [];
    
    // Continue with reading files...
    const items = await fs.readdir(commonMdPath);

    for (const item of items) {
      const itemPath = path.join(commonMdPath, item);
      try {
        const stats = await fs.stat(itemPath);
    
        if (stats.isFile()) {
          const content = await fs.readFile(itemPath, 'utf-8');
          const frontmatter = matter(content);
          files.push({
            slug: item.replace(/\..+$/, ''),
            title: frontmatter.data.title || '',
            excerpt: frontmatter.data.excerpt || '',
          });
        }
      } catch (error) {
        console.error(`Error reading file ${item}:`, error);
        // Continue with the next file...
      }
    }

    res.status(200).json({ folder, files });
  } catch (error) {
    console.error(`Error checking ${folder} directory:`, error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

