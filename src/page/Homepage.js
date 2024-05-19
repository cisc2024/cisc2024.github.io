import backgroundImage from "../background.jpg"

export default function Homepage() {
    return (
        <div>
            <div class="card bg-dark text-white" style={{borderRadius: 0}}>
                <img class="card-img" src={backgroundImage} alt="cover" style={{width: '100%', height: "67vh", objectFit: "cover"}}></img>
                <div class="card-img-overlay" style={{backgroundColor: "#00000099", height: "100%"}}>
                    <div style={{position: "absolute", left: "5%", top: "50%", transform: "translate(-5%, -50%)", padding: "1.25rem"}}>
                        <h3 class="card-title">Cryptology and Information Security Conference 2024</h3>
                        <h5 class="card-text">29-30 August, 2024</h5>
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
                                        <tr>
                                            <td>2024-03-31</td>
                                            <td>第三十四屆全國資訊安全會議網頁已上架</td>
                                        </tr>
                                        <tr>
                                            <td>2024-03-31</td>
                                            <td>請點此查看<a href="/CISC2024_CfP.pdf" target="_blank">會議論文徵稿海報</a></td>
                                        </tr>
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
                                            <td>2024/08/29-30 共 2 天。</td>
                                        </tr>
                                        <tr>
                                            <td style={{whiteSpace: "nowrap"}}>活動地點</td>
                                            <td>國立臺北科技大學先鋒國際研發大樓 3F-4F<br />（106台北市大安區忠孝東路三段 46 號 3F-4F）</td>
                                        </tr>
                                        <tr>
                                            <td style={{whiteSpace: "nowrap"}}>重要日期</td>
                                            <td>
                                                <li>論文投稿截止日：2024/06/18~2024/07/14</li>
                                                <li>論文通知接受日：2024/07/26~2024/08/03</li>
                                                <li>論文完稿授權上傳日：2024/08/04~2024/08/19</li>
                                                <li>早鳥繳費期限：2024/08/04~2024/08/15</li>
                                                <li>一般繳費期限：2024/08/16~2024/08/27</li>
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