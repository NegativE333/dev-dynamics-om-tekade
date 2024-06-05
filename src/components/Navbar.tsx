

export const Navbar = () => {
    return(
        <div className="h-14 w-full border-b bg-white px-4 flex items-center lg:px-16 fixed">
            <div className="flex items-center justify-center gap-2 max-w-3xl">
                <img
                    src="/images/devdynamics_logo.jpeg"
                    alt="logo"
                    className="h-8 w-8 rounded-full"
                />
                <h3 className="text-lg">
                    DevDynamics
                </h3>
            </div>
        </div>
    )
}