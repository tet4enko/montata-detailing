import { Platform } from "@/types";

export const getPlatform = (userAgent: string): Platform => {
    const isMobile = Boolean(userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    ));

    return isMobile ? Platform.MOBILE : Platform.DESKTOP;;
};
