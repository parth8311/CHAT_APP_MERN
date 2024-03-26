import React, { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/19877487/pexels-photo-19877487/free-photo-of-sun-through-massive-redwood-trees-in-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis provident voluptas expedita sit nam iure, earum nihil veniam dolorem tempora vero natus. Voluptatibus enim alias error ipsum molestiae numquam ducimus?",
  },
  {
    id: 2,
    title: "Next.js Blog",
    img: "https://images.pexels.com/photos/12801958/pexels-photo-12801958.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis provident voluptas expedita sit nam iure, earum nihil veniam dolorem tempora vero natus. Voluptatibus enim alias error ipsum molestiae numquam ducimus?",
  },
  {
    id: 3,
    title: "Vanilla Js App",
    img: "https://images.pexels.com/photos/20440040/pexels-photo-20440040/free-photo-of-a-road-in-the-middle-of-a-forest-with-fog.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis provident voluptas expedita sit nam iure, earum nihil veniam dolorem tempora vero natus. Voluptatibus enim alias error ipsum molestiae numquam ducimus?",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.pexels.com/photos/18810081/pexels-photo-18810081/free-photo-of-a-wooden-path-leads-up-to-a-mountain.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis provident voluptas expedita sit nam iure, earum nihil veniam dolorem tempora vero natus. Voluptatibus enim alias error ipsum molestiae numquam ducimus?",
  },
];

const Single = ({ items }) => {
  return <section>{items.title}</section>;
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref} style={{ color: "white" }}>
      <div className="progress">
        {/* <h1>Featured Works</h1> */}
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((items) => (
        <Single items={items} key={items.id} />
      ))}
    </div>
  );
};

export default Portfolio;
