import { useEffect, useState } from "react";

const MyBoomarks = () => {
    const [bookmarkData, updateBookmarkData] = useState([]);
    useEffect(() => {
        const fetchDataFromLocalStorage = JSON.parse(localStorage.getItem(`bookmark-test-data`))
        console.log('fetch', fetchDataFromLocalStorage)
        updateBookmarkData([...fetchDataFromLocalStorage])
    }, [])
    return (
        <div style={{ marginTop: "30px", width: "50%" }}>
            {bookmarkData && bookmarkData.map((item, index) => {
                return (
                    <div style={{ border: "1px solid black", padding: "5px",marginTop:"20px" }}>
                        <div className="flex justify-between">
                            <h1 className="text-2xl">
                                {index + 1} {" "} {item?.question}
                            </h1>
                        </div>
                        <br />
                        <div className="flex flex-col gap-2">
                            {Object.keys(item?.options).map(
                                (option, index) => {
                                    return (
                                        <div
                                            className={`flex gap-2 flex-col`}
                                            key={index}
                                        >
                                            <h1 className="text-xl">
                                                {option} :{" "} {item?.options[option]}
                                            </h1>
                                        </div>
                                    );
                                }
                            )}
                        </div>
                        <h2>Correct Answer : {item?.correctOption}</h2>
                    </div>

                )
            })}
        </div>
    )
}

export default MyBoomarks;