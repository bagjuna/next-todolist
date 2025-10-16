import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";

import {useAuthCheck} from "@/hooks/useAuthCheck";

export default function useAuthCheck() {
    const {data: session,status} = useSession();
    const router = useRouter();

    const session = useAuthCheck();

}