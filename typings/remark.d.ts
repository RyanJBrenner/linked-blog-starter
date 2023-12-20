declare module 'remark' {
    import unified from 'unified';
    import { VFile } from 'vfile';
  
    interface RemarkPlugin {
      (options?: any): unified.Plugin;
    }
  
    const remark: unified.Processor & RemarkPlugin;
    export = remark;
  }
  