import React from "react";

const UseEffectApi = () => {
    return (
        <>
            <h1>List Of GitHub User</h1>
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col-10 col-md-4 mt-5">
                        <div className="card p-2">
                            <div className="d-flex align-items-center">
                                <div className="image">
                                    <img src="" className="rounded"></img>
                                </div>
                                <div className="ml-3 w-100">
                                    <h4 className="mb-0 mt-0 textLeft">
                                        {/* {login} */}
                                    </h4>
                                    <span className="textLeft"></span>
                                    <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white">

                                        <div className="d-flex flex-column">
                                            <span className="articles">Articles</span>
                                            <span className="number1">23</span>
                                        </div>

                                        <div className="d-flex flex-column">
                                            <span className="followers">Followers</span>
                                            <span className="number2">23</span>
                                        </div>

                                        <div className="d-flex flex-column">
                                            <span className="rating">Ratings</span>
                                            <span className="number3">23</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UseEffectApi;