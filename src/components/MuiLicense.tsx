'use client';
import { LicenseInfo } from '@mui/x-license';
export const MuiLicense = () => {
  LicenseInfo.setLicenseKey(process.env.NEXT_PUBLIC_MUI_LICENSE);
  return <></>;
};
