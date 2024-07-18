declare namespace NodeJS {
  interface ProcessEnv {
    /**
     * because we use `@mui/x-data-grid-pro`, we need to provide a license key
     */
    NEXT_PUBLIC_MUI_LICENSE: string;
  }
}
