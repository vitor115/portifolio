import { ProfilePic } from "./ProfilePic";
import branch from '../assets/git-branch.svg'
import folder from '../assets/folder.svg'
import star from '../assets/star.svg'

export function Main(){
    return(
        <main className="flex flex-col gap-[30px]">
            <header className=" h-ful w-full rounded-2xl shadow-black shadow-sm bg-cards p-[30px] flex items-center">
                <h2 className="">
                My Projects
                </h2>
                <a href="#" className="ml-auto text-sm">
                    Veja todos
                </a>
                
            </header>
            <section className="flex gap-[30px]">
                <div className="flex flex-col justify-center w-full h-ful rounded-2xl bg-cards shadow-black shadow-sm min-h-[186px] p-[30px]">
                    <header className="flex gap-4 mb-5">
                        <img src={folder} alt="" />
                        <h2> Repos Name</h2>
                    </header>
                    <p className="mb-12"> Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="flex">
                        <img src={star} alt="" />
                        <p className="mr-3">100</p>
                        <img src={branch} alt="" />
                        <p>100</p>
                        <div className="h-2 w-2 bg-yellow-300 self-center ml-auto mr-2 rounded-full border-2 "></div>
                        <p>Javascript</p>
                    </div>
                </div>
                
                <div className="flex flex-col justify-center w-full h-ful rounded-2xl bg-cards shadow-black shadow-sm min-h-[186px] p-[30px]">
                    <header className="flex gap-4 mb-5">
                        <img src={folder} alt="" />
                        <h2> Repos Name</h2>
                    </header>
                    <p className="mb-12"> Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="flex">
                        <img src={star} alt="" />
                        <p className="mr-3">100</p>
                        <img src={branch} alt="" />
                        <p>100</p>
                        <div className="h-2 w-2 bg-yellow-300 self-center ml-auto mr-2 rounded-full border-2 "></div>
                        <p>Javascript</p>
                    </div>
                </div>
            </section>
            <header>
                <div className="flex items-center w-full rounded-2xl bg-cards shadow-black shadow-sm p-[30px]">
                    Recent Posts
                </div>
                
            </header>
            <div className="flex items-center w-full rounded-2xl bg-cards shadow-black shadow-sm min-h-[186px] gap-5 p-[30px]">
                         <ProfilePic /> 
                    <article className="w-full overflow-auto">
                        <h2 className=" font-bold"> Voltando a aprender</h2>
                        <p className="mb-7 text-sm">1 sem atrás</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat voluptate consequatur obcaecati dolores, eligendi omnis harum earum explicabo quo aliquid unde! Quos maiores consequatur fuga distinctio eum, ipsa vel facilis.</p>
                        <ul className="flex gap-[10px]">
                            <li className="text-sm">#Vida</li>
                            <li className="text-sm">#qualidade</li>
                            <li className="text-sm">#html</li>
                            <li className="text-sm">#react</li>
                        </ul>
                        {/* <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7021142600409563136"  title="Publicação incorporada" className="w-full h-[400px] rounded" frameborder="0"></iframe>
 */}
                    </article>
                        
                </div>
            
            

            
        </main>
    )
    
} 