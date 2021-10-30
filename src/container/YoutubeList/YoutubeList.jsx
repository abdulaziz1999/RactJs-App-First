import { Component } from "react";
import YouTubeComp from "../../component/YoutubeComp/YouTubeComp";

class YoutubeList extends Component {
    render() {
        return (
            <div>
                <h2>Youtube Component</h2>
                <hr />
                <YouTubeComp
                    time="7.20"
                    title="Ar-Rahman 1-10"
                    desc="2000x ditonton. 20 hari yang lalu" />
                <YouTubeComp
                    time="8.20"
                    title="Ar-Rahman 1-20"
                    desc="500x ditonton. 15 hari yang lalu" />
                <YouTubeComp
                    time="9.20"
                    title="Ar-Rahman 1-30"
                    desc="1350x ditonton. 10 hari yang lalu" />
                <YouTubeComp
                    time="10.20"
                    title="Ar-Rahman 1-40"
                    desc="5000x ditonton. 7 hari yang lalu" />
                <YouTubeComp
                    time="10.30"
                    title="Ar-Rahman 1-40"
                    desc="5001x ditonton. 5 hari yang lalu" />
                <YouTubeComp />
            </div>
        )
    }
}

export default YoutubeList;