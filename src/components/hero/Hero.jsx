import "./hero.scss"
import {motion} from "framer-motion"
const textVariants={
    initial: {
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
   scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:1.5,
            repeat:Infinity
        },
    },
};  
const slideVariants = {
    initial:{
        x:0,
    },
    animate:{
        x:"-220%",
        transition:{
            repeat: Infinity,
            repeatType:"mirror",
            duration:20,
        },
    },
};
 export const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
            <motion.h2 variants={textVariants}> SAHIL JANGRA</motion.h2>
            <motion.h1 variants={textVariants}> Web Developer</motion.h1>
            <motion.div variants={textVariants} className="buttons" >
                <motion.button variants={textVariants}>See the Latest Work</motion.button>
                <motion.button variants={textVariants}>Contact Me</motion.button>
            </motion.div>
            <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt=""/>
        </motion.div>
        <motion.div variants={slideVariants} className="slidingTextContainer" initial="initial" animate="animate">
            Aspiring Software Engineer
        </motion.div>
        <div className="imageContainer" style={{width:"870px" , height:"50%"}}>
            <img src="/herooo.png" alt="" />
        </div>
        </div>
        
    </div>
  )
}

