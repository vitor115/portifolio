import profilePic from '../assets/profile.jpeg'
export function Aside(){
    return(
        <aside>
            <div className="flex flex-col justify-center items-center w-[348px] h-ful rounded bg-cards gap-[30px]">
                <img src={profilePic} alt="" className="w-32 h-32 rounded-full mt-[32px]"/>
                <h3 className='font-bold'>Vitor Ravacci Nunes de Oliveira</h3>
            </div>
        </aside>

    )
}