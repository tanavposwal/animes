"use client";

import { motion } from "framer-motion";

export const MotionDiv = motion.div;

// for using framer motion in next js
// framer motion workes only on client side components
// for using this in server components
// a hack can be used such as export "client component" motion div -
// and import it on server components
