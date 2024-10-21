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
                                            <td className="text-nowrap">2024-03-31</td>
                                            <td>第三十四屆全國資訊安全會議網頁已上架</td>
                                        </tr>
                                        <tr>
                                            <td className="text-nowrap">2024-03-31</td>
                                            <td>請點此查看<a href="/CISC2024_CfP.pdf" target="_blank">會議論文徵稿海報</a></td>
                                        </tr>
                                        <tr>
                                            <td className="text-nowrap">2024-06-06</td>
                                            <td>請加入「<a href="https://lin.ee/OANc51l">第三十四屆全國資訊安全會議官方 LINE 帳號</a>」！</td>
                                        </tr>
                                        <tr>
                                            <td className="text-nowrap">2024-07-06</td>
                                            <td>
                                                <div>
                                                    <p className="fw-bold">由他人代為註冊事宜（碩士班畢業生適用）</p>
                                                    <p>七、八月份正逢碩士班畢業期間，研討會之八月份收據恐無法讓已畢業碩士生核銷。故本會接受由他人（代理人）代為完成論文註冊，以利核銷。代理人僅需在會議報名表單之備註欄填寫「代XXX註冊」（XXX請自行填入姓名）</p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-nowrap">2024-08-09</td>
                                            <td>論文發表場次已經排定，請參考 會議議程 {"->"} <a href="/#Session">論文發表場次</a></td>
                                            
                                        </tr>
                                        <tr>
                                            <td className="text-nowrap">2024-08-31</td>
                                            <td>請點此查看<a href="/#/Images" target="_blank">Day 1 大合照</a></td>
                                        </tr>
                                        <tr>
                                            <td className="text-nowrap">2024-08-31</td>
                                            <td><a href="https://docs.google.com/forms/d/e/1FAIpQLScTz2wvzhbKasXLY468Jo4cexnLQouqU-vO7SN-ul56YhOhag/viewform" rel="noreferrer" target="_blank">[34th資安會議] 出席/發表證明填寫</a></td>
                                        </tr>
                                        <tr>
                                            <td className="text-nowrap">2024-10-08</td>
                                            <td><a href="https://1drv.ms/u/c/7c23b17b6e2ef5d1/EdeP7DhakPpJtqD2sZGPuF4BQ-t5KSmgmSImNCKfKdk_fQ?e=1riVWK" rel="noreferrer" target="_blank">會議照片精選</a></td>
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
                                                <li>論文投稿截止日：2024/06/18~2024/07/21</li>
                                                <li>論文通知接受日：2024/08/01~2024/08/07</li>
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