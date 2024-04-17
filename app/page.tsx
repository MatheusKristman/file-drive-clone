"use client";

import {
    SignInButton,
    SignOutButton,
    SignedIn,
    SignedOut,
    useSession,
} from "@clerk/nextjs";
import { useMutation } from "convex/react";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";

export default function Home() {
    const createFile = useMutation(api.files.createFile);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <SignedIn>
                <SignOutButton>
                    <Button>Sign Out</Button>
                </SignOutButton>
            </SignedIn>

            <SignedOut>
                <SignInButton mode="modal">
                    <Button>Sign In</Button>
                </SignInButton>
            </SignedOut>

            <Button
                onClick={() => {
                    createFile({
                        name: "hello world",
                    });
                }}
            >
                Click Me
            </Button>
        </main>
    );
}