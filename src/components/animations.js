export const easeing = [0.6, -0.05, 0.01, 0.99];

export const stagger = {
    animate: {
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.2,
            staggerDirection: 1
        }
    }
}

export const header = {
    initial: {
        y: -60,
        opacity: 0,
        transition: { duration: 0.05, ease: easeing }
    },
    animate: {
        y: 0,
        opacity: 1,
        animation: {
            duration: 0.6,
            ease: easeing
        }
    }
};


export const fadeInUp = {
    initial: {
        y: -60,
        opacity: 0,
        transition: {
            duration: 0.6, ease: easeing
        }
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            delay: 0.5,
            ease: easeing
        }
    }
};

export const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

export const heroAnim = {
    initial: {
        y: -20,
    },
    animate: {
        y: 0,
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.04,
            staggerDirection: -1
        }
    }
}

export const content = {
    initial: {
        y: 400,
    },
    animate: {
        y: 0,
        transition: { duration: 1, ...transition }
    }
};

// export const textAnimation = {
//     hidden: {
//         x: -100,
//         opacity: 0,
//     },
//     visible: custom => ({
//         x: 0,
//         opacity: 1,
//         transition: { delay: custom * 0.2 },
//     }),
// }

export const headerAnimation = {
    hidden: { x: -100, opacity: 0 },
    show: { x: 1, opacity: 1 },
  };
  
  export const imageAnimation = {
    hidden: { scale: 2, opacity: 0 },
    show: { scale: 1, opacity: 1 },
  };
  
  export const reveal = {
    hidden: { x: -700 },
    show: { x: 0 },
  };
  
  export const textAnimation = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };
  
  export const cardAnimation = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
    },
  };
  
  export const fromUp = {
    hidden: {
      y: 200,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
    },
  };
  export const fromDown = {
    hidden: {
      y: -200,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
    },
  };
  
  export const topContainerAnimation = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };
  export const videoAnimation = {
    hidden: { x: -800, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };
  export const reasonsAnimation = {
    hidden: { x: 800, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };
  
  export const navbarAnimation = {
      hidden:{y:-100},
      show:{y:0}
  }