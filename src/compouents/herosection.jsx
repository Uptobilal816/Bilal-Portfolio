import {motion} from "framer-motion";
import Spline from '@splinetool/react-spline'


export default function HeroSection(){
    return (
        <section className="h-screen bg-gradient-to-b from-violet-900 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-6 relative overflow-hidden">
            {/* Left section */}
            <div className="z-40 xl:mb-0 mb-16 max-w-2xl">
                <motion.h1
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 40,
                        damping: 25,
                        delay: 1.2,
                        duration: 1.2
                    }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg"
                >
                    Building Fast <br /> Reliable Results
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 40,
                        damping: 25,
                        delay: 1.4,
                        duration: 1.2
                    }}
                    className="text-lg md:text-xl lg:text-2xl text-purple-200"
                >
                    Hi, I'm M. Bilal, a passionate and results-driven Software Engineer with hands-on experience in full-stack development. I enjoy building scalable web applications and solving real-world problems through code.
                </motion.p>
            </div>
            {/* Right section */}
            <div className="relative flex-1 flex items-center justify-center xl:static xl:ml-12 mb-12 xl:mb-0">
                <div className="w-[320px] h-[320px] md:w-[420px] md:h-[420px] xl:w-[500px] xl:h-[500px] flex items-center justify-center">
                    <Spline
                        className="w-full h-full"
                        scene="https://prod.spline.design/UMwQQgz9bJHJMXWy/scene.splinecode"
                    />
                </div>
            </div>
        </section>
    )
}