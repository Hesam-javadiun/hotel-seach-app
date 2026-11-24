"use client";

export default function Error({ error }: { error: string }) {
    console.log("error props", error);

    return (
        <>
            <h2>something went wrong!</h2>
            {/* <p>{error}</p> */}
        </>
    );
}
