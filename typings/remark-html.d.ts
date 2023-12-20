declare module 'remark-html' {
    import unified from 'unified';
    import { VFile } from 'vfile';
  
    interface RemarkHtmlPlugin {
      (options?: any): unified.Plugin;
    }
  
    const remarkHtml: unified.Processor & RemarkHtmlPlugin;
    export = remarkHtml;
  }
  