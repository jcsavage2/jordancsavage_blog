import Navbar from "./Navbar";

const Page = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="container mx-auto">
            <div className="w-3/4 flex flex-row justify-start space-x-4 mx-auto">
                <Navbar />
                <div className="w-3/4">{children}</div>
            </div>
        </div>
    );
};

export default Page;
