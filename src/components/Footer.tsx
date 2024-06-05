import { FaGithub, FaLinkedin, FaLink } from "react-icons/fa";

export const Footer = () => {
    return(
        <footer className="h-16 w-full bg-white border-t mt-10 flex items-center px-4 lg:px-16">
            <div className="flex items-center w-full text-lg">
                <h3 className="font-semibold">
                    Developed By <span className="text-blue-600">
                        Om Tekade
                    </span>
                </h3> 
                <div className="ml-auto text-xl flex gap-4">
                    <a 
                        href="https://github.com/NegativE333" 
                        target="_blank"
                        rel="noreferrer"    
                    >
                        <FaGithub 
                            className="hover:text-blue-500 transition"
                        />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/om-tekade-b07474231/" 
                        target="_blank"
                        rel="noreferrer"    
                    >
                        <FaLinkedin 
                            className="hover:text-blue-500 transition"
                        />
                    </a>
                    <a 
                        href="https://omtekade-portfolio3.vercel.app/" 
                        target="_blank"
                        rel="noreferrer"    
                    >
                        <FaLink 
                            className="hover:text-blue-500 transition"
                        />
                    </a>
                </div>
            </div>
        </footer>
    )
}