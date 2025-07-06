import { motion,AnimatePresence } from "framer-motion";
import { FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import { div } from "framer-motion/client";



export default function Header(){
    const [isopen, setIsOpen] = useState(false);
    const toggleMenu = ()=>(setIsOpen(!isopen));

    //State to track if the form is open or not
    const [ContactFormOpen,setContactFormOpen] = useState(false);
    const OpenContactForm = ()=> setContactFormOpen(true);
    const CloseContactForm = ()=> setContactFormOpen(false);
    
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
                onClick={OpenContactForm}
                initial={{opacity : 0 ,scale : 0.8}}
                animate={{opacity : 1 , scale : 1}}
                transition={{
                    delay: 1.6,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                }}
                
                className=" mt-4 ml-4 px-3 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-600 hover:to-purple-700 hover:text-white transition-all duration-600">
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
                height: isopen ? "auto" : 0,
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
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex space-x-5">
                    <a href="#">
                        <FiGithub className="h-5 w-5 text-gray-300"></FiGithub>
                    </a>
                    <a href="#">
                        <FiLinkedin className="h-5 w-5 text-gray-300"></FiLinkedin>
                    </a>
                    </div>
                    <button 
                    onClick={()=>{
                        toggleMenu()
                        OpenContactForm()
                    }}
                    className="mt-4 block w-full px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 font-bold">Contact Me</button>

                  </div>
              </motion.div>
              {/* Contact Form  */}
              
              {ContactFormOpen && (
                <motion.div 
                initial={{opacity : 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{
                    duration : 0.5
                }}
                onClick={CloseContactForm}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 max-w-md w-full">
                 <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-300">Get In Touch</h1>
                    <button
                    onClick={CloseContactForm}
                    ><FiX className="w-5 h-5 text-gray-300"></FiX></button>
                 </div>
                 {/*Input Fields*/}
                 <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mt-2 mb-1">Name</label>
                        <input type="text" id="name" placeholder="Your Name" className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700"/>
                    </div>
                    <div>
                        <label htmlFor="Email" className="block text-sm font-medium text-gray-300 mt-2 mb-1">Email</label>
                        <input type="Email" id="Email" placeholder="Your Email" className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700"/>
                    </div>
                    <div>
                        <label htmlFor="Message" className="block text-sm font-medium text-gray-300 mt-2 mb-1">Message</label>
                        <textarea
                         rows={4} id="name" placeholder="How can i help you?" className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700"/>
                    </div>
                    <motion.button 
                    type="submit"
                    whileHover={{scale: 1.02}}
                    whileTap={{scale: 0.95}}
                    className="w-full px-4 py-2 bg-gradient-to-r from-violet-600 to-violet-400 hover:form-violet-700 hover:to-purple-700 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg hover:shadow-violet-600/50">Send Message</motion.button>
                    
                 </form>
                </div>
                </motion.div>
              )}
        </header>
    )
}