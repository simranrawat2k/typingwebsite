import React, { useEffect } from "react";
import Graph from "./Graph";
import {auth, db} from "../firebaseConfig";
import {toast} from "react-toastify";

const Stats = (
    {wpm,
    accuracy,
    correctChars,
    incorrectChars,
    missedChars,
    extraChars,
    graphData
}) => {


    let timeSet = new Set();
    const newGraph = graphData.filter((i) => {
        if(!timeSet.has(i[0])){
            timeSet.add(i[0])
            return i;
        }
    })

    const pushDataToDB = () => {

        if(isNaN(accuracy)){
            toast.error('Invalid test', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }

        const resultsRef = db.collection('Results');
        const {uid} = auth.currentUser;
        resultsRef.add({
            wpm:wpm,
            accuracy: accuracy,
            timeStamp: new Date(),
            characters: `${correctChars}/${incorrectChars}/${missedChars}/${extraChars}`,
            userId: uid
        }).then((res) => {
            toast.success('Data saved', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }).catch((err)=>{
            toast.error('Data not saved', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        });
    }

    useEffect(()=>{
        if(auth.currentUser){
            pushDataToDB();
        }else{
            toast.warning('Login to save results', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    },[]);

    return(
        <div className="stats-box">
            <div className="left-stats">
                <div className="title">WPM</div>
                <div className="sub-title">{wpm}</div>
                <div className="title">Accuracy</div>
                <div className="sub-title">{accuracy}</div>
                <div className ="title">Characters</div>
                <div className="sub-title">{correctChars}/{incorrectChars}/{missedChars}/{extraChars}</div>
            </div>
            <div className="right-stats">
                <Graph graphData = {newGraph}/>
            </div>
        </div>
    )
}

export default Stats;