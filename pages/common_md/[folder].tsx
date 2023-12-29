import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import Header from '../../components/misc/header';
import Footer from '../../components/misc/footer';
import { FileCard } from '../../components/misc/NewYorkLayout';

interface CommonMdFolderPageProps {
  folder: string;
  files: { slug: string; title: string; excerpt: string }[];
}

const CommonMdFolderPage: React.FC<CommonMdFolderPageProps> = ({ folder, files }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <div className="grid grid-cols-1 gap-6 items-center w-full min-h-max lg:min-h-screen pt-20 justify-center top-0">
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-8 text-center">{folder}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-space-evenly">
            {files.map((file) => (
              <FileCard key={file.slug} folder={folder} file={file} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const folder = params.folder as string;

  try {
    let files = [];

    if (typeof window === 'undefined') {
      // Running on the server, use fs/promises
      const commonMdPath = path.join(process.cwd(), 'common_md', folder);

      try {
        const items = await fs.readdir(commonMdPath);

        for (const item of items) {
          const itemPath = path.join(commonMdPath, item);
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
        }
      } catch (error) {
        console.error(`Error reading directory ${commonMdPath}:`, error);
        // Handle the error or provide a default value for 'files'
      }
    } else {
      // Running on the client, fetch data from API route
      const response = await fetch(`/api/../${encodeURIComponent(folder)}`);
      const data = await response.json();
      files = data.files;
    }

    return {
      props: { folder, files },
    };
  } catch (error) {
    console.error(`Error fetching data:`, error);
    return {
      props: { folder, files: [] },
    };
  }
}

export default CommonMdFolderPage;
