import { useState } from "react";

export const useFeatures = () => {
  const [open, setOpen] = useState(false);
  return [ open, setOpen ];
};