import { Link } from "react-router-dom";

export default function Organization(){
    return (
        <div className="container mb-5">
            <div className="w-100 p-5">
                <h1 className="text-center">大會組織</h1>
            </div>
            <div className="d-flex row gap-3">
                <div>
                    <h5 className="text-center"> 大會榮譽主席</h5>
                    <table className="w-100 table table-hover table-borderless">
                        <thead className="bg-opacity-25" style={{backgroundColor: "#FFB74D"}}>
                            <th className="w-50 p-2 text-center">姓名／職稱</th>
                            <th className="w-50 p-2 text-center">所屬單位</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-center p-2">鄭英耀 校長</td>
                                <td className="text-center p-2">國立中山大學</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <h5 className="text-center"> 大會主席</h5>
                    <table className="w-100 table table-hover table-borderless">
                        <thead className="bg-opacity-25" style={{backgroundColor: "#FFB74D"}}>
                            <th className="w-50 p-2 text-center">姓名／職稱</th>
                            <th className="w-50 p-2 text-center">所屬單位</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-center p-2">范俊逸 特聘教授</td>
                                <td className="text-center p-2">國立中山大學</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <h5 className="text-center"> 大會指導委員（依姓名筆劃順序排列）</h5>
                    <table className="w-100 table table-hover table-borderless">
                        <thead className="bg-opacity-25" style={{backgroundColor: "#FFB74D"}}>
                            <th className="w-50 p-2 text-center">姓名／職稱</th>
                            <th className="w-50 p-2 text-center">所屬單位</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-center p-2">史曉斌 主任</td>
                                <td className="text-center p-2">國家高速網路與計算中心</td>
                            </tr>
                            <tr>
                                <td className="text-center p-2">余孝先 主任</td>
                                <td className="text-center p-2">工研院人工智慧應用策略辦公室</td>
                            </tr>
                            <tr>
                                <td className="text-center p-2">吳宗成 特聘教授</td>
                                <td className="text-center p-2">國立台灣科技大學</td>
                            </tr>
                            <tr>
                                <td className="text-center p-2">李德財 特聘研究員</td>
                                <td className="text-center p-2">中央研究院</td>
                            </tr>
                            <tr>
                                <td className="text-center p-2">卓政宏 執行長</td>
                                <td className="text-center p-2">資訊工業策進會</td>
                            </tr>
                            <tr>
                                <td className="text-center p-2">官大智 教授</td>
                                <td className="text-center p-2">國立中山大學</td>
                            </tr>
                            <tr>
                                <td className="text-center p-2">林榮賜 院長</td>
                                <td className="text-center p-2">中華電信研究院</td>
                            </tr>
                            <tr>
                                <td className="text-center p-2">張真誠 講座教授</td>
                                <td className="text-center p-2">逢甲大學</td>
                            </tr>
                            <tr>
                                <td className="text-center p-2">郭伯臣 司長</td>
                                <td className="text-center p-2">資訊及科技教育司</td>
                            </tr>
                            <tr>
                                <td className="text-center p-2">鄭國順 主任</td>
                                <td className="text-center p-2">科技部工程科技推展中心</td>
                            </tr>
                            <tr>
                                <td className="text-center p-2">謝續平 講座教授</td>
                                <td className="text-center p-2">國立交通大學</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <h5 className="text-center"> 議程主席 </h5>
                    <table className="w-100 table table-hover table-borderless">
                        <thead className="bg-opacity-25" style={{backgroundColor: "#FFB74D"}}>
                            <th className="w-50 p-2 text-center">姓名／職稱</th>
                            <th className="w-50 p-2 text-center">所屬單位</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-center p-2">陳嘉玫 教授</td>
                                <td className="text-center p-2">國立中山大學</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <h5 className="text-center"> 出版主席 </h5>
                    <table className="w-100 table table-hover table-borderless">
                        <thead className="bg-opacity-25" style={{backgroundColor: "#FFB74D"}}>
                            <th className="w-50 p-2 text-center">姓名／職稱</th>
                            <th className="w-50 p-2 text-center">所屬單位</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-center p-2">王智弘 教授</td>
                                <td className="text-center p-2">國立嘉義大學</td>
                            </tr>
                            <tr>
                                <td className="text-center p-2">楊吳泉 教授</td>
                                <td className="text-center p-2">義守大學</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <h5 className="text-center"> 議程委員 </h5>
                    <table className="w-100 table table-hover table-borderless">
                        <thead className="bg-opacity-25" style={{backgroundColor: "#FFB74D"}}>
                            <th className="w-50 p-2 text-center">姓名／職稱</th>
                            <th className="w-50 p-2 text-center">所屬單位</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-center p-2">王旭正 教授</td>
                                <td className="text-center p-2">中央警察大學</td>
                            </tr>
                            <tr>
                                <td className="text-center p-2">王銘宏 教授</td>
                                <td className="text-center p-2">逢甲大學</td>
                            </tr>
                            <tr>
                                <td className="text-center p-2">左瑞麟 教授</td>
                                <td className="text-center p-2">國立政治大學</td>
                            </tr>
                            <tr>
                                <td className="text-center p-2">李金鳳 教授</td>
                                <td className="text-center p-2">朝陽科技大學</td>
                            </tr>
                            <tr>
                                <td className="text-center p-2">李南逸 教授</td>
                                <td className="text-center p-2">南台科技大學</td>
                            </tr>
                            <tr>
                                <td className="text-center p-2">李榮三 教授</td>
                                <td className="text-center p-2">逢甲大學</td>
                            </tr>
                            <tr>
                                <td className="text-center p-2">周永振 教授</td>
                                <td className="text-center p-2">亞洲大學</td>
                            </tr>
                            <tr>
                                <td className="text-center p-2">林祝興 教授</td>
                                <td className="text-center p-2">東海大學</td>
                            </tr>
                            <tr>
                                <td className="text-center p-2">林詠章 教授</td>
                                <td className="text-center p-2">國立中興大學</td>
                            </tr>
                            <tr>
                                <td className="text-center p-2">紀博文 教授</td>
                                <td className="text-center p-2">國立臺灣師範大學</td>
                            </tr>
                            <tr>
                                <td className="text-center p-2">孫宏民 教授</td>
                                <td className="text-center p-2">國立清華大學</td>
                            </tr>
                            <tr>
                                <td className="text-center p-2">徐瑞壕 教授</td>
                                <td className="text-center p-2">國立中山大學</td>
                            </tr>
                            <tr>
                                <td className="text-center p-2">張世豪 教授</td>
                                <td className="text-center p-2">淡江大學</td>
                            </tr>
                            <tr>
                                <td className="text-center p-2">曹偉駿 教授</td>
                                <td className="text-center p-2">國立臺北大學</td>
                            </tr>
                            <tr>
                                <td className="text-center p-2">莊文勝 教授</td>
                                <td className="text-center p-2">國立高雄科技大學</td>
                            </tr>
                            <tr>
                                <td className="text-center p-2">許建隆 教授</td>
                                <td className="text-center p-2">長庚大學</td>
                            </tr>
                            <tr>
                                <td className="text-center p-2">許富皓 教授</td>
                                <td className="text-center p-2">國立中央大學</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <h5 className="text-center"> 場地主席 </h5>
                    <table className="w-100 table table-hover table-borderless">
                        <thead className="bg-opacity-25" style={{backgroundColor: "#FFB74D"}}>
                            <th className="w-50 p-2 text-center">姓名／職稱</th>
                            <th className="w-50 p-2 text-center">所屬單位</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-center p-2">陳以德 教授</td>
                                <td className="text-center p-2">高雄醫學大學</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}