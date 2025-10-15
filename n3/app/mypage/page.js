import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

export default async function MyPage() {
    const session = await getServerSession(authOptions)

    console.log(session);
    console.log(session?.user);

    return (
        <div>
            <div>My Page</div>
            {session?.user ? (
                <div>
                    <p>로그인된 사용자 </p>
                    <p>Welcome, {session.user.name}!</p>
                    <p>Email: {session.user.email}</p>
                    <p>Role: {session.user.role}</p>
                </div>
                ) : (
                <p>Please log in to see your information.</p>
                )}
        </div>
    )
}