'use client';
import { useRouter } from 'next/navigation';

export default function useNextRoute() {
    const router = useRouter();

    const navigateToPage = (page:string) => {
        router.push(page);
    }

    return {navigateToPage};
}