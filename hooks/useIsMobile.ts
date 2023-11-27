'use client'
import { useMemo } from "react";
import useWindowSize from "./useWindowSize";

export default function useIsMobile() {
    const { width } = useWindowSize();
    const isMobile  = useMemo(() => width === undefined ? undefined : !!width && width < 767 , [width])
    return isMobile
  }