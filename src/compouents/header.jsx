import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";



export default function Header(){
    const [isopen, setIsOpen] = useState(false);
    const toggleMenu = ()=>(setIsOpen(!isopen))

    return (
        
        <header>
           <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
            
            <nav className="flex space-x-8">
             {["Home", "About", "Projects", "Experience", "Contact"].map((item, index) =>(
            <motion.a 
            key={item}
            initial={{opacity : 0 , y: -20}}
            animate= {{opacity : 1 , y: 0}}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.7 + index * 0.2
            }}
            className="relative text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group"
            href="#">
             {item}
             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
            </motion.a> 
             ))}
            </nav>
            {/* Social Icons and Hire Me Button */}
            <div className="flex items-center space-x-4">
                <motion.a
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        delay: 1.3,
                        duration: 0.8,
                    }}
                    className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
                    href="#"
                >
                    <FiGithub className="w-5 h-5" />
                </motion.a>
                <motion.a
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        delay: 1.5,
                        duration: 0.8,
                    }}
                    className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
                    href="#"
                >
                    <FiLinkedin className="w-5 h-5" />
                </motion.a>
                <motion.button 
                initial={{opacity : 0 ,scale : 0.8}}
                animate={{opacity : 1 , scale : 1}}
                transition={{
                    delay: 1.6,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                }}
                
                className="ml-4 px-3 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-600 hover:to-purple-700 hover:text-white transition-all duration-600">
                    Hire me
                </motion.button>
            </div>

            {/*Mobile Menu Button*/}
            <div className="md:hidden flex items-center">
              <motion.button
              whileTap={{ scale: 0.7 }}
              className="text-gray-300" onClick={toggleMenu}>
                {isopen ? <FiX className="h-6 w-6"/> : <FiMenu className="h-6 w-6"/>}
              </motion.button>
            </div>
           </div> 
              {/* Mobile Menu */}
              <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isopen ? 1 : 0,
                height: isopen ? auto : 0,
              }}
              transition={{
               duration: 0.5 
              }}
              className="md:hidden overflow-hidden bg-white dark:bg-gray-900 shahow-lg px-4 py-5 space-y-5">
                <nav className="flex flex-col space-y-3">
                   {["Home", "About", "Projects", "Experience", "Contact"].map((item)=>(
                    <a className="text-gray-300 font-medium hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
                    key={item}
                    href="#">
                        {item}
                    </a>
                   ))}   
                </nav>

              </motion.div>
        </header>
    )
}