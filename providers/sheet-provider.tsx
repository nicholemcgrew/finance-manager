"use client";

import { useMountedState } from "react-use";
import { useMoun}

import { NewAccountSheet } from "@/features/accounts/api/new-account-sheet";

export const SheetProvider = () => {
    const isMounted = useMountedState();

    if (!isMounted) return null;

    return (
        <>
        <NewAccountSheet />
        </>
    )
}