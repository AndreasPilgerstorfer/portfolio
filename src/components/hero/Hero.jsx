import {motion} from "framer-motion";
import {styles} from "../../styles.js";
import "./hero.scss";

const Hero = () => {
    return (
        <section className={`relative w-full h-screen mx-auto hero`}>
            <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX}`}>
                <div
                    className={` flex flex-row items-start gap-5`}
                >
                    <div className='flex flex-col justify-center items-center mt-5'>
                        <div className='w-5 h-5 rounded-full bg-[#915EFF]'/>
                        <div className='w-1 sm:h-80 h-40 violet-gradient'/>
                    </div>

                    <div className='flex justify-between w-full flex-col lg:flex-row'>
                        <div className="ml-5 mt-8">
                            <h1>
                        <span className={`${styles.heroHeadText} text-white`}>
                            Hi, I'm <span className='text-[#915EFF]'>Andreas</span>
                            <br/>
                            <span className="hero__animation" data-text="Pilgerstorfer">Pilgerstorfer</span>
                         </span>
                            </h1>
                        </div>

                        <div className='flex justify-center w-full mb-10'>
                            <picture>
                                <source
                                    type="image/avif"
                                    height="700"
                                    media="(min-width: 1024px)"
                                    srcSet="
                       https://res.cloudinary.com/dknhd0twk/image/upload/h_700,dpr_1.0/v1704655354/hero-img.avif 1x,
                       https://res.cloudinary.com/dknhd0twk/image/upload/h_700,dpr_1.0/v1704655354/hero-img.avif 2x,
                       https://res.cloudinary.com/dknhd0twk/image/upload/h_700,dpr_1.0/v1704655354/hero-img.avif 3x
                    "
                                />
                                <source
                                    type="image/avif"
                                    height="300"
                                    srcSet="
                       https://res.cloudinary.com/dknhd0twk/image/upload/h_300,dpr_1.0/v1704655354/hero-img.avif 1x,
                       https://res.cloudinary.com/dknhd0twk/image/upload/h_300,dpr_1.0/v1704655354/hero-img.avif 2x,
                       https://res.cloudinary.com/dknhd0twk/image/upload/h_300,dpr_1.0/v1704655354/hero-img.avif 3x
                    "
                                />
                                <source
                                    type="image/webp"
                                    height="700"
                                    media="(min-width: 1024px)"
                                    srcSet="
                       https://res.cloudinary.com/dknhd0twk/image/upload/h_700,dpr_1.0/v1704655354/hero-img.webp 1x,
                       https://res.cloudinary.com/dknhd0twk/image/upload/h_700,dpr_1.0/v1704655354/hero-img.webp 2x,
                       https://res.cloudinary.com/dknhd0twk/image/upload/h_700,dpr_1.0/v1704655354/hero-img.webp 3x
                    "
                                />
                                <source
                                    type="image/webp"
                                    height="300"
                                    srcSet="
                       https://res.cloudinary.com/dknhd0twk/image/upload/h_300,dpr_1.0/v1704655354/hero-img.webp 1x,
                       https://res.cloudinary.com/dknhd0twk/image/upload/h_300,dpr_1.0/v1704655354/hero-img.webp 2x,
                       https://res.cloudinary.com/dknhd0twk/image/upload/h_300,dpr_1.0/v1704655354/hero-img.webp 3x
                    "
                                />
                                <img
                                    src="
                https://res.cloudinary.com/dknhd0twk/image/upload/h_300,dpr_1.0/v1704655354/hero-img"
                                    srcSet="
                https://res.cloudinary.com/dknhd0twk/image/upload/h_700,dpr_1.0/v1704655354/hero-img 1024w,
                https://res.cloudinary.com/dknhd0twk/image/upload/h_300,dpr_1.0/v1704655354/hero-img 300w"
                                    alt="Andreas Pilgerstorfer"
                                    sizes="(max-width: 1024px) 300px, 700px"
                                    className="max-w-none hero__image"
                                />
                            </picture>
                        </div>

                    </div>
                </div>
            </div>


            <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
                <a href='#introduction'>
                    <div
                        className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className='w-3 h-3 rounded-full bg-secondary mb-1'
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
