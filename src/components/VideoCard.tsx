import exp from "constants"

export function VideoCard(props:any){
    return <div className="mx-2 my-7">
        <img className="rounded-xl cursor-pointer" src={props.thumbnail} alt="thumbnail" />
        <div className="grid grid-cols-12 mt-4">
            <div className="col-span-2">
                <img className="rounded-full w-11 h-11" src={props.image} alt="profile" />
            </div>
            <div className="col-span-10">
                {props.title}
                <div className="col-span-10 text-gray-500 text-sm">
                {props.author}
                </div>
                <div className="col-span-10 text-gray-500 text-sm">
                    {props.views} | {props.days}
                </div>
            </div>
            
        </div>
    </div>
}

