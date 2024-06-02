import { VideoCard } from "./VideoCard"

const VIDEOS = [{
    thumbnail:'thumbnail.jpg',
    title:'FAANG vs Remote Startup - Honest Conversation',
    image:'profile.jpg',
    author:'Harkirat Singh',
    views : '100k',
    days : '13 days ago',
},{
    thumbnail:'thumbnail2.jpg',
    title:'I Coded a gambling website | Stake ',
    image:'profile.jpg',
    author:'Harkirat Singh',
    views : '1M',
    days : '1 month ago',
},{
    thumbnail:'thumbnail3.jpg',
    title:'EP 26 : The Fully Filmy Journey | Fries With Potate X Raunaq Mangottil',
    image:'profilepotate.jpg',
    author:'Fries With Potate',
    views : '2M',
    days : '3 days ago',
},{
    thumbnail:'thumbnail4.jpg',
    title:'men see,men laugh',
    image:'profilejk.jpg',
    author:'JK',
    views : '50k views',
    days : '7 days ago',
},{
    thumbnail:'thumbnail5.jpg',
    title:'Marakavillaye Full Song | Tamil | Jersey | Anirudh Ravichandran',
    image:'profiletseries.jpg',
    author:'T-Series',
    views : '20M',
    days : '1 year ago',
},{
    thumbnail:'thumbnail6.jpg',
    title:'YOU - are the main character',
    image:'profiletake.jpg',
    author:'Take Okay',
    views : '100k',
    days : '1 week ago',
},{
    thumbnail:'thumbnail7.jpg',
    title:'Soori Interview with barathwaj rangan | Garudan | Conversation',
    image:'profilegalatta.jpg',
    author:'Galatta plus',
    views : '100k',
    days : '13 days',
},{
    thumbnail:'thumbnail8.jpg',
    title:'Kun Faya Kun Full Video Song | Rockstar',
    image:'profiletseries.jpg',
    author:'T-series',
    views : '100k',
    days : '13 days',
},
]

export const VideoGrid =()=>{
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map(video => <div>
          <VideoCard 
            thumbnail = {video.thumbnail}
            title={video.title}
            image={video.image}
            author={video.author}
            views = {video.views}
            days = {video.days}>
            
          </VideoCard>
            
        </div> )}
    </div>
}