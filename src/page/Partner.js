export default function Partner(){
    return (
        <div className="container">
            <div className="w-100 p-5 pb-5">
                <h1 className="text-center">合作夥伴</h1>
                <div className="py-2 d-flex gap-5">
                    <div className="w-100 d-flex flex-column">
                        <a className="h-100 p-5 mx-auto d-flex flex-column justify-content-center" href="https://www.nstc.gov.tw/" target="_blank">
                            <div>
                                <img src="https://upload.wikimedia.org/wikipedia/zh/thumb/8/81/ROC_National_Science_and_Technology_Council.svg/300px-ROC_National_Science_and_Technology_Council.svg.png" />
                            </div>
                        </a>
                        <p className="py-2 text-center"> 國家科學及技術委員會 </p>
                    </div>
                    <div className="w-100 d-flex flex-column">
                        <a className="h-100 p-5 mx-auto d-flex flex-row justify-content-center" href="https://www.edu.tw/Default.aspx" target="_blank">
                            <img src="https://upload.wikimedia.org/wikipedia/zh/thumb/6/6d/ROC_Ministry_of_Education_Seal.svg/200px-ROC_Ministry_of_Education_Seal.svg.png" />
                        </a>
                        <div>
                            <p className="py-2 text-center"> 教育部 </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}