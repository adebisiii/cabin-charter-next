import Image from 'next/image'


const FaqsBanner = () => {
    return (
        <div className="relative md:px-12 md:py-12 lg:px-14 xl:px-20 xl:py-16 3xl:px-32 3xl:py-20 4xl:px-40 from-black/10 to-black/60 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-gradient-to-b md:before:rounded-2xl md:before:bg-gradient-to-r xl:before:hidden 4xl:!py-[132px]">
            <Image className="absolute w-full h-full left-0 top-0 right-0 bottom-0 bg-gray-lighter object-cover md:max-h-full md:rounded-2xl" fill sizes="100vw" src="/images/faq-banner.webp" alt="" />
                <div className="relative m-auto md:ml-0 max-w-[450px] xl:max-w-[513px] px-8 py-9 md:px-0 md:py-0 flex flex-col justify-center md:justify-start z-20">
                    <h2 className="text-center text-2xl font-bold text-white md:text-left md:text-3xl xl:mb-6 3xl:text-5xl mb-3">Your Care, Our Value</h2>
                    <p className="mb-7 leading-[1.78] text-white md:text-base xl:mb-10 3xl:text-lg text-sm text-center md:text-left">Find and book your dream boat through Yacht. Charter Fleet, the world's leading luxury boat comparison site.</p>
                    <a className="m-auto inline-block rounded-lg bg-white px-9 py-3 text-sm font-semibold text-gray-dark transition duration-150 hover:bg-gray-900 hover:!text-white md:ml-0 md:text-base" href="">View FAQ's</a>
                </div>
        </div>
    );
}

export default FaqsBanner