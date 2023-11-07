import "./portfolio.scss";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img:
      "https://t4.ftcdn.net/jpg/05/90/45/35/360_F_590453560_ugMuPncnGYB6XnJqmC8xiPQx4eg3jmMD.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, beatae",
  },
  {
    id: 2,
    title: "Node.js Commerce",
    img:
      "https://t4.ftcdn.net/jpg/05/90/45/35/360_F_590453560_ugMuPncnGYB6XnJqmC8xiPQx4eg3jmMD.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, beatae",
  },
  {
    id: 3,
    title: "Vite Commerce",
    img:
      "https://t4.ftcdn.net/jpg/01/35/92/85/360_F_135928597_xU5EzKq6vpOeXPX5vsbI48zfVVkSRlrF.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, beatae",
  },
  {
    id: 4,
    title: "Hunch",
    img:
      "https://wpvip.edutopia.org/wp-content/uploads/2022/10/davis-coding-for-parents-2-01.jpg?w=2880&quality=85",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, beatae",
  },
];

const Single = ({ item }) => {
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target:ref,
        // offset: ["start start" , "end start"]
    });

    const y = useTransform(scrollYProgress,[0,1] , [-300,300])

  return (
  <section >
    <div className="container">
        <div className="wrapper">
            <div className="imageContainer" ref={ref}>
               <img src={item.img} alt=""/>
            </div>
        <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
        </motion.div>
        </div>
    </div>
    </section>
    );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => (
      <Single item={item} key={item.id}/>
    ))}
    </div>
  );
};

export default Portfolio;
