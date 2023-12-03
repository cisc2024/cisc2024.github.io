import backgroundImage from "../background.jpg"

export default function Homepage() {
    return (
        <div>
            <div class="card bg-dark text-white" style={{borderRadius: 0}}>
                <img class="card-img" src={backgroundImage} alt="Card image" style={{width: '100%', height: "67vh", objectFit: "cover"}}></img>
                <div class="card-img-overlay" style={{backgroundColor: "#000000AA", height: "100%"}}>
                    <div style={{position: "absolute", left: "5%", top: "50%", transform: "translate(-5%, -50%)", padding: "1.25rem"}}>
                        <h3 class="card-title">Cryptology and Information Security Conference 2024</h3>
                        <h5 class="card-text">29-30 September, 2024</h5>
                        <h5 class="card-text">National Taipei University of Technology</h5>
                    </div>
                </div>
            </div>
            <div className="container" style={{paddingTop: "1.5rem", paddingBottom: "2rem"}}>
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-center" style={{paddingTop: "1rem", paddingBottom: "1rem"}}> 最新訊息 </h1>
                        <div class="card" style={{width: "100%"}}>
                            <div class="card-body">
                                <table className="table">
                                    <thead>
                                        <th scope="col" style={{borderTop: 0, padding: "0.5rem"}}>日期</th>
                                        <th scope="col" style={{borderTop: 0, padding: "0.5rem"}}>標題</th>
                                    </thead>
                                    <tbody>
                                        <div className="border border-dash w-100" style={{height: ""}}>

                                        </div>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h1 className="text-center" style={{paddingTop: "1rem", paddingBottom: "1rem"}}> 重要時程 </h1>
                        <div class="card" style={{width: "100%"}}>
                            <div class="card-body">
                                <table className="table">
                                    <thead>
                                        <th scope="col" style={{borderTop: 0, padding: "0.5rem"}}>事由</th>
                                        <th scope="col" style={{borderTop: 0, padding: "0.5rem"}}>內容</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{whiteSpace: "nowrap"}}>活動期間</td>
                                            <td>2023/08/29-30 共 2 天。</td>
                                        </tr>
                                        <tr>
                                            <td style={{whiteSpace: "nowrap"}}>活動地點</td>
                                            <td>國立臺北科技大學 集思會議中心<br />（台北市大安區忠孝東路三段 1 號 —— 億光大樓 2 樓）</td>
                                        </tr>
                                        <tr>
                                            <td style={{whiteSpace: "nowrap"}}>重要日期</td>
                                            <td>
                                                <li>論文投稿截止日：2020/6/30~2020/7/7</li>
                                                <li>論文通知接受日：2020/8/4</li>
                                                <li>論文完稿截稿日：2020/8/10</li>
                                                <li>早鳥繳費期限：2020/8/10</li>
                                                <li>一般繳費期限：2020/9/2</li>
                                                <li>資安會議舉辦日期：2020/9/1-4</li>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>      
    );
}