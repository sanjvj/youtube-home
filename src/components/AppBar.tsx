import { Searchbar } from "./Searchbar"

export const AppBar= () => {
    return <div className="flex justify-between pt-5 mx-10">
        <div>
            <img className="w-20 cursor-pointer" src="youtubepremium2.png" alt="" />
        </div>
        <div>
            <Searchbar></Searchbar>
        </div>
        <div>
            Sign in
        </div>
    </div>
}