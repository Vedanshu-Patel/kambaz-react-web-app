/// <reference types="vite/client" />
interface ImportMetaEnv {

    readonly VITE_REMOTE_SERVER: string;
  
  }
   
  interface ImportMeta {
  
    readonly env: ImportMetaEnv;
  
  }
   
