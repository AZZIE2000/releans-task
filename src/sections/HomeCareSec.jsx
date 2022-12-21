import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";


const bogliasco = "https://altaawin.ysdesk.com/assets/altaawin/home-health-care2.png";
const countyClare = "https://altaawin.ysdesk.com/assets/altaawin/home-health-care.png";
const craterRock = "https://altaawin.ysdesk.com/assets/altaawin/home-health-care3.png";
const giauPass = "https://altaawin.ysdesk.com/assets/altaawin/home-health-care1.png";

export default function HomeCareSec() {
    return (
        <HeroSlider
            height={"100vh"}
            autoplay
            controller={{
                initialSlide: 1,
                slidingDuration: 500,
                slidingDelay: 100,
                onSliding: (nextSlide) =>
                    console.debug("onSliding(nextSlide): ", nextSlide),
                onBeforeSliding: (previousSlide, nextSlide) =>
                    console.debug(
                        "onBeforeSliding(previousSlide, nextSlide): ",
                        previousSlide,
                        nextSlide
                    ),
                onAfterSliding: (nextSlide) =>
                    console.debug("onAfterSliding(nextSlide): ", nextSlide)
            }}
        >
            <Overlay>
                <div className="flex bg-slate-700/50 justify-center items-center flex-col w-full h-full m-0 p-0 pointer-events-none text-white font-sans font-bold">
                    <h1 className="my-0 mx-auto p-0 uppercase w-[90%] text-center text-5xl ">الرعاية الصحية
                        <span className="text-red-600">       المنزلية </span>
                    </h1>
                    <h2 className="m-[24px_auto_0] p-2 w-[80%] text-center text-[1.75rem]  ">
                        تسعى الخدمات الطبية المنزلية للعمل جديّاً على توفير رعاية صحية عالية الجودة للمريض في منزله من خلال فريق متكامل لديه الخبرة والمهارة في تشخيص وعلاج المصابين في كافة التخصصات الطبية وفق حاجاتهم في الوقت الأنسب.
                    </h2>
                </div>
            </Overlay>

            <Slide
                shouldRenderMask
                label="رعاية المسنين"
                background={{
                    backgroundImageSrc: giauPass
                }}
            />

            <Slide
                shouldRenderMask
                label="استشارات كبار السن"
                background={{
                    backgroundImageSrc: bogliasco
                }}
            />

            <Slide
                shouldRenderMask
                label="فحص دوري"
                background={{
                    backgroundImageSrc: countyClare
                }}
            />

            <Slide
                className="flex flex-row-reverse justify-end"
                shouldRenderMask
                label="رعاية جميع الاعمار"
                background={{
                    backgroundImageSrc: craterRock
                }}
            />

            <MenuNav />
        </HeroSlider>
    );
}
