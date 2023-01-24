import { ProfilePic } from "./ProfilePic";

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
                <div className="flex flex-col justify-center items-center w-full h-ful rounded-2xl bg-cards shadow-black shadow-sm min-h-[186px]">
                    GIT
                </div>
                <div className="flex flex-col justify-center items-center w-full h-ful rounded-2xl bg-cards shadow-black shadow-sm min-h-[186px]">
                    GIT
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
                        <h2 className=" font-bold"> Por que somos todos animais?</h2>
                        <p className="mb-7 text-sm">2 anos atrás</p>
                        <p>Normalmente agimos irracionalmente e não pensamos muito</p>
                        <ul className="flex gap-[10px]">
                            <li className="text-sm">#animal</li>
                            <li className="text-sm">#animal</li>
                            <li className="text-sm">#animal</li>
                            <li className="text-sm">#animal</li>
                        </ul>

                    </article>
                        
                </div>
            
            

            
        </main>
    )
    
} 