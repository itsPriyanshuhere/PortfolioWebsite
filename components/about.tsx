"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
// import { useSectionInView } from "@/lib/hooks";

export default function About() {
//   const { ref } = useSectionInView("About");

  return (
    <motion.section
    //   ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor aliquam justo, non sagittis odio vehicula eu. Curabitur euismod ullamcorper justo, ut ullamcorper elit tincidunt eu. Nullam suscipit suscipit fermentum. Ut vitae arcu non ligula scelerisque suscipit. Vivamus efficitur velit ac quam luctus, non facilisis tortor finibus. Vestibulum nec justo vel sapien fermentum consequat. Morbi vel ipsum nec libero bibendum bibendum. Fusce ullamcorper tincidunt fermentum. Nullam vehicula turpis nec nunc suscipit, at congue sem tristique. Sed auctor, ligula vitae imperdiet suscipit, ex dui tincidunt turpis, nec efficitur libero lectus vel velit. Integer vulputate, nisl et cursus bibendum, ipsum urna cursus nisi, vel blandit elit lacus ac eros.

    <span className="font-medium">Lorem</span> ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ullamcorper justo in libero malesuada, non vulputate mauris tincidunt. Curabitur a orci in dolor commodo euismod. Aenean vel enim ac velit gravida tincidunt. Duis vel augue in dui fermentum luctus. Integer interdum quam sit amet quam fermentum, a bibendum orci blandit. Vivamus rhoncus nunc eu orci ultrices, a scelerisque elit scelerisque.

    <span className="italic">Lorem ipsum dolor sit amet</span>, consectetur adipiscing elit. Proin commodo justo a erat interdum congue. Curabitur sagittis nunc ac lectus sollicitudin, in sagittis eros vestibulum. Integer eu ligula eu odio facilisis volutpat. Integer tincidunt urna at nunc consectetur, nec ullamcorper purus dapibus. Quisque varius elit id sapien dapibus, non venenatis elit tristique. Fusce feugiat metus vitae tristique consectetur. In hac habitasse platea dictumst.

    <span className="underline">Lorem</span> ipsum dolor sit amet, consectetur adipiscing elit. In ac feugiat elit. Curabitur vehicula, sem ut congue gravida, ligula elit ultrices sapien, at tristique lectus odio ut metus. Aliquam erat volutpat. Aenean vel sem ac tortor vehicula ultrices. Integer finibus tortor a lacus blandit ultricies. Fusce et lacus in justo ultricies dignissim.

    My core stack is <span className="font-medium">Lorem Ipsum, Ipsum.js, Ipsum.js</span>. I am also familiar with Ipsum Ipsum and Ipsum. I am always looking to learn new technologies. I am currently looking for a <span className="font-medium">Lorem Ipsum position</span> as a Ipsum Ipsum.
</p>


      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}