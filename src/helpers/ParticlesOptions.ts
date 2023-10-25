import type { ISourceOptions } from "tsparticles-engine";

const CommonOptions: ISourceOptions = {
  background: {
      color: {
          value: "#351a7c",
      },
  },
  interactivity: {
      events: {
          onHover: {
              enable: true,
              mode: "repulse",
          },
          resize: true,
      },
      modes: {
          push: {
              quantity: 4,
          },
          repulse: {
              distance: 100,
              duration: 1,
          },
      },
  },
  detectRetina: true,
};

const ParticlesOptionsFromLeftToRight: ISourceOptions = {
  color: {
    value: "#fff",
  },
  number: {
    density: {
        enable: true,
        area: 800,
    },
    value: 80,
  },
  opacity: {
      value: 1,
  },
  rotate: {
      random: true,
      direction: "clockwise",
      animation: {
        enable: true,
        speed: 20,
        sync: false
      }
    },
  size: {
      value: { min: 5, max: 15 },
  },
  move: {
    direction: "right",
    speed: 3,
    enable: true,
    random: false,        
    bounce: false,
    straight: false,
  },
};

const ParticlesOptionsFromBottomToRight: ISourceOptions = {
  color: {
    value: "#fff",
  },
  move: {
      direction: "top-right",
      speed: 3,
      enable: true,
      random: false,        
      bounce: false,
      straight: false,
  },
  number: {
      density: {
          enable: true,
          area: 800,
      },
      value: 40,
  },
  opacity: {
      value: 0.5,
  },
  size: {
      value: { min: 20, max: 40 },
  },
};

const ParticlesOptionsFromTop: ISourceOptions = {
  color: {
    value: "#fff",
  },
  move: {
      direction: "bottom",
      speed: 3,
      enable: true,
      random: false,        
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      },
      straight: false,
  },  
  rotate: {
    random: true,
    direction: "clockwise",
    animation: {
      enable: true,
      speed: 20,
      sync: false
    }
  },
  number: {
      density: {
          enable: true,
          area: 700,
      },
      value: 30,
  },
  opacity: {
      value: 0.8,
  },
  size: {
      value: { min: 20, max: 50 },
  },
};

const ParticlesOptionsFromBottom: ISourceOptions = {
  color: {
    value: "#fff",
  },
  move: {
      direction: "top",
      speed: 3,
      enable: true,
      random: false,        
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      },
      straight: false,
  },  
  rotate: {
    random: true,
    direction: "clockwise",
    animation: {
      enable: true,
      speed: 20,
      sync: false
    }
  },
  number: {
      density: {
          enable: true,
          area: 700,
      },
      value: 30,
  },
  opacity: {
      value: 0.8,
  },
  size: {
      value: { min: 20, max: 50 },
  },
};

const ParticlesOptionsDefault: ISourceOptions = {
  background: {
      color: {
          value: "#351a7c",
      },
  },
  fpsLimit: 120,
  interactivity: {
      events: {
          onClick: {
              enable: true,
              mode: "push",
          },
          onHover: {
              enable: true,
              mode: "repulse",
          },
          resize: true,
      },
      modes: {
          push: {
              quantity: 4,
          },
          repulse: {
              distance: 200,
              duration: 0.4,
          },
      },
  },
  particles: {
      color: {
          value: "#ffd700",
      },
      links: {
          color: "#ffd700",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
      },
      move: {
          direction: "none",
          enable: true,
          outModes: {
              default: "bounce",
          },
          random: false,
          speed: 2.5,
          straight: false,
      },
      number: {
          density: {
              enable: true,
              area: 800,
          },
          value: 80,
      },
      opacity: {
          value: 0.5,
      },
      shape: {
          type: "circle",
      },
      size: {
          value: { min: 1, max: 5 },
      },
  },
  detectRetina: true,
};

const ParticlesOptionsWinter: ISourceOptions = {
    name: "Winter",
    ...CommonOptions,
    particles: {
      ...ParticlesOptionsFromTop,
      shape: {
        options: {
          image: {
            height: 40,
            replace_color: true,
            src: "https://pngimg.com/d/snowflakes_PNG7578.png",
            width: 40,
          },
        },
        type: "image",
      },
    },
    detectRetina: true,
};

const ParticlesOptionsAutumn:  ISourceOptions = {
  name: "Autumn",
  ...CommonOptions,
  particles: {
    ...ParticlesOptionsFromTop,
    shape: {
      options: {
        image: {
          height: 80,
          replace_color: true,
          src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1177d997-54a5-47ed-8309-eb5d0285890a/ddw7zbp-78b294fb-795b-4e80-baa5-76b516c9680e.png/v1/fill/w_1280,h_1288/autumn_leaves_png_14_by_agusrockforlife_ddw7zbp-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4OCIsInBhdGgiOiJcL2ZcLzExNzdkOTk3LTU0YTUtNDdlZC04MzA5LWViNWQwMjg1ODkwYVwvZGR3N3picC03OGIyOTRmYi03OTViLTRlODAtYmFhNS03NmI1MTZjOTY4MGUucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.tuXpdsHQXS5dDr0hRlJ4SNNl7_k8vnjs_IHMFpmNWr4",
          width: 80,
        },
      },
      type: "image",
    },
  },
  detectRetina: true,
};

const ParticlesOptionsSpring: ISourceOptions = {
  ...CommonOptions,
  name: "Spring",
  particles: {
    ...ParticlesOptionsFromLeftToRight,
    shape: {
      options: {
        image: [
          {
            src: "https://parspng.com/wp-content/uploads/2021/10/flowerpng.parspng.com-2.png",
            width: 360,
            height: 360
          },
          {
            src: "https://parspng.com/wp-content/uploads/2021/10/blue-flower-png.parspng.com_.png",
            width: 360,
            height: 360
          },
        ]
      },
      type: "image",
    }, 
  },
};

const ParticlesOptionsSummer: ISourceOptions = {
  name: "Summer",
  ...CommonOptions,
  particles: {
    ...ParticlesOptionsFromBottomToRight,
    shape: {
      options: {
        image: [
          {
            src: "https://cdn130.picsart.com/262323691001212.png?r1024x1024",
            width: 202,
            height: 200
          },
          {
            src: "http://pngimg.com/uploads/soap_bubbles/soap_bubbles_PNG72.png",
            width: 1153,
            height: 1080
          },
        ]
      },
      type: "image",
    },
  },
}

const ParticlesOptionsNewYear: ISourceOptions = {
  name: "New Year",
  fullScreen: {
      enable: true
    },
    detectRetina: true,
    background: {
      color: "#000"
    },
    emitters: {
      direction: "top",
      life: {
        count: 0,
        duration: 0.1,
        delay: 0.1
      },
      rate: {
        delay: 0.1,
        quantity: 1
      },
      size: {
        width: 100,
        height: 0
      },
      position: {
        y: 100,
        x: 50
      }
    },
    particles: {
      number: {
        value: 0
      },
      destroy: {
        mode: "split",
        split: {
          count: 1,
          factor: { value: 1 / 3 },
          rate: {
            value: 100
          },
          particles: {
            color: {
              value: ["#5bc0eb", "#fde74c", "#9bc53d", "#e55934", "#fa7921"]
            },
            stroke: {
              width: 0
            },
            number: {
              value: 0
            },
            collisions: {
              enable: false
            },
            opacity: {
              value: 1,
              animation: {
                enable: true,
                speed: 0.3,
                minimumValue: 0.1,
                sync: false,
                startValue: "max",
                destroy: "min"
              }
            },
            shape: {
              type: "circle"
            },
            size: {
              value: { min: 2, max: 3 },
              animation: {
                enable: false
              }
            },
            life: {
              count: 1,
              duration: {
                value: {
                  min: 1,
                  max: 2
                }
              }
            },
            move: {
              enable: true,
              gravity: {
                enable: false
              },
              speed: 2,
              direction: "none",
              random: true,
              straight: false,
              outMode: "destroy"
            }
          }
        }
      },
      life: {
        count: 1
      },
      shape: {
        type: "line"
      },
      size: {
        value: { min: 1, max: 100 },
        animation: {
          enable: true,
          sync: true,
          speed: 150,
          startValue: "random",
          destroy: "min"
        }
      },
      stroke: {
        color: {
          value: "#303030"
        },
        width: 1
      },
      rotate: {
        path: true
      },
      move: {
        enable: true,
        gravity: {
          acceleration: 15,
          enable: true,
          inverse: true,
          maxSpeed: 100
        },
        speed: { min: 10, max: 20 },
        outModes: {
          default: "destroy",
          top: "none"
        },
        trail: {
          fillColor: "#000",
          enable: true,
          length: 10
        }
      }
    }
}

const ParticlesOptionsChristmas: ISourceOptions = {
  name: "Christmas",
  ...CommonOptions,
  particles: {
    color: {
      value: ["#5bc0eb", "#fde74c", "#9bc53d", "#e55934", "#fa7921"],
      animation: {
        enable: true,
        sync: true,
        speed: 150,
      }
    },
    number: {
      density: {
          enable: true,
          area: 800,
      },
      value: 80,
    },
    opacity: {
        value: 1,
    },
    rotate: {
        random: true,
        direction: "clockwise",
      },
    size: {
        value: { min: 5, max: 10 },
    },
    shape: {
      type: "circle",
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
  },
       
  },
}

const ParticlesOptionsBirthday: ISourceOptions = {
  ...CommonOptions,
  name: "Birthday",
  particles: {
    ...ParticlesOptionsFromBottom,
    shape: {
      options: {
        image: [
          {
            src: "https://cdn.bargainballoons.ca/products/2022-Bargain-Balloons/April-Balloons/Tuftex-Balloons-Maple-City-Rubber/Large-Balloons/TT-10029-Hot-Pink-Tuftex-latex-balloons.png",
            width: 2000,
            height: 2547
          },
          {
            src: "https://cdn.bargainballoons.com/products/2022-Bargain-Balloons/April-Balloons/Tuftex-Balloons-Maple-City-Rubber/Large-Balloons/TT-10003-Standard-Blue-Tuftex-latex-balloons.png",
            width: 5000,
            height: 6368
          },
          {
            src: "https://i5.walmartimages.com/seo/Way-To-Celebrate-15-Ct-12-Plain-Lime-Green-Balloons_8d3177a8-0405-4db0-bb87-61a956e52852_1.d6184af79f6889b87d9526be6c532b8d.png",
            width: 800,
            height: 1059
          },

          {
            src: "https://www.instaballoons.com/cdn/shop/products/betallic-latex-fashion-yellow-18-latex-balloons-25-count-29518656077913.png?v=1651874822",
            width: 781,
            height: 1050
          },
          
          
        ]
      },
      type: "image",
    }, 
  },
}

export const AllParticles: ISourceOptions = {
    birthdayParticles: ParticlesOptionsBirthday, //done
    newYearParticles: ParticlesOptionsNewYear, //done
    springParticles: ParticlesOptionsSpring, //done
    winterParticles: ParticlesOptionsWinter, //done
    autumnParticles: ParticlesOptionsAutumn, //done
    summerParticles: ParticlesOptionsSummer, //done
    defaultParticles: ParticlesOptionsDefault, //done,
}