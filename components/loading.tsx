export default function Loading({ message }: { message: string }) {
    return (
        <div className="w-full h-full grow flex justify-center items-center ">
            <p className="animate-pulse text-2xl">{message}</p>
        </div>
    );
}
