export default function Session(){
    return(
        <div className="container">
            <div className="w-100 p-5">
                    <h1 className="text-center">論文發表場次</h1>
            </div>
            <div className="d-flex flex-column gap-5 mb-5">
                <table className="table table-border border col-md-12 shadow" cellPadding={0} cellSpacing={0}>
                    <tbody>
                        <tr className="text-white" colspan="4">
                            <td className="p-3 text-center text-white" colspan="4" style={{backgroundColor: "#F57F17"}}>2020年9月2日（星期二） 14:50-15:40</td>
                        </tr>
                        <tr className="text-black" style={{backgroundColor: "#B0BEC5"}}>
                            <td className="p-3 text-center" style={{width: "10%", backgroundColor: "#FFE082"}}></td>
                            <td className="p-3 text-center" style={{width: "15%", backgroundColor: "#FFE082"}}>順序</td>
                            <td className="p-3 text-center" style={{width: "25%", backgroundColor: "#FFE082"}}>作者</td>
                            <td className="p-3 text-center" style={{width: "50%", backgroundColor: "#FFE082"}}>主題</td>
                        </tr>
                        <tr className="text-black">
                            <th className="text-center align-middle text-white" rowSpan={3} style={{backgroundColor: "#F57C00"}}>
                                <p className="m-0">A1</p>
                                <p className="m-0">最佳論文獎</p>
                            </th>
                            <td className="p-3 text-center align-middle" style={{backgroundColor: "#FFFFFF"}}>
                                <div>
                                    <span>A1-01</span>
                                </div>
                            </td>
                            <td className="p-3 text-center d-flex flex-column align-middle" style={{backgroundColor: "#FFFFFF"}}>
                                <div>
                                    <span>楊政興, 翁麒耀, 陳建宇</span>
                                </div>
                            </td>
                            <td className="p-3 text-center align-middle" style={{backgroundColor: "#FFFFFF"}}>
                                <div>
                                    <span>以差值保留加密技術實現加密影像上的可逆式資訊隱藏</span>
                                </div>
                            </td>
                        </tr>
                        <tr className="text-black">
                            <td className="p-3 text-center align-middle" style={{backgroundColor: "#FFFFFF"}}>
                                <div>
                                    <span>A1-02</span>
                                </div>
                            </td>
                            <td className="p-3 text-center d-flex flex-column align-middle" style={{backgroundColor: "#FFFFFF"}}>
                                <div>
                                    <span>Tienho Chang, Chia-Mei Chen, Gu-Hsin Lai and Yu-Che Hu</span>
                                </div>
                            </td>
                            <td className="p-3 text-center align-middle" style={{backgroundColor: "#FFFFFF"}}>
                                <div>
                                    <span>The Analysis of the Wireless Access Point password with GPU and Rules-Based Method</span>
                                </div>
                            </td>
                        </tr>
                        <tr className="text-black">
                            <td className="p-3 text-center align-middle" style={{backgroundColor: "#FFFFFF"}}>
                                <div>
                                    <span>A1-03</span>
                                </div>
                            </td>
                            <td className="p-3 text-center d-flex flex-column align-middle" style={{backgroundColor: "#FFFFFF"}}>
                                <div>
                                    <span>Sheng-Fu Chang, Shin-Ming Cheng and Hahn-Ming Lee	</span>
                                </div>
                            </td>
                            <td className="p-3 text-center align-middle" style={{backgroundColor: "#FFFFFF"}}>
                                <div>
                                    <span>利用查詢行為分析偵測黑箱對抗式攻擊</span>
                                </div>
                            </td>
                        </tr>
                        <tr className="text-black">
                            <th className="text-center align-middle text-white" rowSpan={1} style={{backgroundColor: "#F57C00"}}>
                                <p className="m-0">B1</p>
                                <p className="m-0">物聯網安全 I</p>
                            </th>
                            <td className="p-3 text-center align-middle" style={{backgroundColor: "#FFFFFF"}}>
                                <div>
                                    <span>B1-01</span>
                                </div>
                            </td>
                            <td className="p-3 text-center d-flex flex-column align-middle" style={{backgroundColor: "#FFFFFF"}}>
                                <div>
                                    <span>Cheng-Feng Hung, Siao-Shan He, Wei-Xiang Wang and Shin-Ming Cheng	</span>
                                </div>
                            </td>
                            <td className="p-3 text-center align-middle" style={{backgroundColor: "#FFFFFF"}}>
                                <div>
                                    <span>具物聯網設備資安檢測功能之MEC實驗平台</span>
                                </div>
                            </td>
                        </tr>
                        <tr className="text-black">
                            <th className="text-center align-middle text-white" rowSpan={2} style={{backgroundColor: "#F57C00"}}>
                                <p className="m-0">C1</p>
                                <p className="m-0">物聯網安全 I</p>
                            </th>
                            <td className="p-3 text-center align-middle" style={{backgroundColor: "#FFFFFF"}}>
                                <div>
                                    <span>C1-01</span>
                                </div>
                            </td>
                            <td className="p-3 text-center d-flex flex-column align-middle" style={{backgroundColor: "#FFFFFF"}}>
                                <div>
                                    <span>Chihui Feng, 王喻正, 郭泓志, 黎光智</span>
                                </div>
                            </td>
                            <td className="p-3 text-center align-middle" style={{backgroundColor: "#FFFFFF"}}>
                                <div>
                                    <span>AIoT 大平台資安架構</span>
                                </div>
                            </td>
                        </tr>
                        <tr className="text-black">
                            <td className="p-3 text-center align-middle" style={{backgroundColor: "#FFFFFF"}}>
                                <div>
                                    <span>C1-02</span>
                                </div>
                            </td>
                            <td className="p-3 text-center d-flex flex-column align-middle" style={{backgroundColor: "#FFFFFF"}}>
                                <div>
                                    <span>Cheng-Feng Hung, Siao-Shan He, Wei-Xiang Wang and Shin-Ming Cheng	</span>
                                </div>
                            </td>
                            <td className="p-3 text-center align-middle" style={{backgroundColor: "#FFFFFF"}}>
                                <div>
                                    <span>具物聯網設備資安檢測功能之MEC實驗平台</span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="w-100">
                    <button className="p-2 btn btn-success text-white w-100 shadow"> Download PDF</button>
                </div>
            </div>
        </div>
    )
}