import { ProfilePic } from "./ProfilePic";
import location from "../assets/map-pin.svg"
import job from "../assets/briefcase.svg"
import git from "../assets/github.svg"
import mail from "../assets/mail.svg"
import linked from "../assets/linkedin.svg"
import { Techs } from "./Techs";

export function Aside(){
    return(
        <aside className="flex flex-col gap-[30px] h-full">
            <div className="flex flex-col justify-center items-center w-[348px] h-ful rounded-2xl bg-cards shadow-black shadow-sm pt-[32px] pb-[49px]">
                <div className="rounded-full border-[#00FF00] border-2">
                    <ProfilePic />
                </div>
                <h3 className='font-bold text-xl mt-[30px]'>Vitor Ravacci</h3>
                <p className='text-sm font-light mt-[10px]'>Front-end Developer</p>
            </div>

            <section className="flex items-center w-[348px] h-ful rounded-2xl bg-cards shadow-black shadow-sm pt-[32px] pb-[49px] gap-5 p-10">
                <div className="flex flex-col gap-5">
                    <img className=" fill-[#837E9F] hover:fill-white bg-red" src={location} alt="..." />
                    <img className="inline" src={job} alt="..." />
                    <img className="inline" src={git} alt="..." />
                    <img className="inline" src={linked} alt="..." />
                    <img className="inline" src={mail} alt="..." />
                </div>
                <div className="flex flex-col gap-5">
                    <a href="#" className="">Brasil</a>
                    <a href="#" className="">Open to Work</a>
                    <a href="https://github.com/vitor115" className="">vitor115</a>
                    <a href="#" className="">vitor.ravacci</a>
                    <a href="#" className="mailto:vitorravacci@gmail.com">vitorravacci@gmail.com</a>
                </div>
            </section>
            <section className="flex flex-col w-[348px] h-ful rounded-2xl bg-cards shadow-black shadow-sm pt-[32px] pb-[49px] gap-5 px-[30px]">
                <h1 className="font-bold text-lg">Tecnologias</h1>
                <Techs />
            </section>

            <section className="flex flex-col w-[348px] h-ful rounded-2xl bg-cards shadow-black shadow-sm pt-[32px] pb-[49px] gap-5 px-[30px]">
                <h1 className="font-bold text-lg">Experiências</h1>
                <ul className="flex flex-col gap-3 pl-10 list-disc">
                    <li>
                        <h3 className="font-bold"> Rocketseat</h3> <p className="font-light">2019-atual</p>
                        <h4>dev</h4></li>
                    <li>
                        <h3 className="font-bold"> Rocketseat</h3> <p className="font-light">2019-atual</p><h4>dev</h4>
                    </li>
                    <li>
                        <h3 className="font-bold"> Rocketseat</h3> <p className="font-light">2019-atual</p>
                        <h4>dev</h4>
                    </li>
                    <li>
                        <h3 className="font-bold"> Rocketseat</h3> <p className="font-light">2019-atual</p><h4>dev</h4>
                    </li>
                </ul>
            </section>
            <section className="flex flex-col w-[348px] h-ful rounded-2xl bg-cards shadow-black shadow-sm pt-[32px] pb-[49px] gap-5 px-[30px]">
                <h1 className="font-bold text-lg">Experiências</h1>
                <ul className="flex flex-col gap-3 pl-10 list-disc">
                    <li>
                        <h3 className="font-bold"> Rocketseat</h3> <p className="font-light">2019-atual</p>
                        <h4>Go Stack</h4></li>
                    <li>
                        <h3 className="font-bold"> Rocketseat</h3> <p className="font-light">2019-atual</p><h4>Ignite</h4>
                    </li>
                </ul>
            </section>




        </aside>

    )
}