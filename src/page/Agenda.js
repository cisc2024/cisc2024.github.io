export default function Agenda(){
    return (
        <div className="container d-flex flex-column gap-3">
            <div className="w-100 p-5">
                <h1 className="text-center">會議議程</h1>
            </div>
            <div className="alert alert-warning d-flex flex-column gap-3">
                <h4 className="fw-bold text-center">論文發表規則</h4>
                <span className="text-center">每人發表時間 10 分鐘 、7 分鐘舉牌提醒、8 分鐘按鈴提醒、2 分鐘由主持人提問。</span>
            </div>
            <div className="d-flex flex-column gap-5 mb-5">
                <table className="table table-borderless border col-md-12 shadow" cellPadding={0} cellSpacing={0}>
                    <tbody>
                        <tr className="text-white" colspan="4">
                            <td className="p-3 text-center text-white" colspan="4" style={{backgroundColor: "#F57F17"}}>2020年9月1日（星期二）</td>
                        </tr>
                        <tr className="text-black" style={{backgroundColor: "#B0BEC5"}}>
                            <td className="p-3 text-center" style={{width: "25%", backgroundColor: "#FFE082"}}>時間</td>
                            <td className="p-3 text-center" style={{width: "50%", backgroundColor: "#FFE082"}}>內容</td>
                            <td className="p-3 text-center" style={{width: "25%", backgroundColor: "#FFE082"}}>地點</td>
                        </tr>
                        <tr className="text-black">
                            <td className="p-3 text-center align-middle" style={{backgroundColor: "#FFFFFF"}}>
                                <div className="my-auto">
                                    <span>14:00-17:00</span>
                                </div>
                            </td>
                            <td className="p-3 text-center d-flex flex-column align-middle" style={{backgroundColor: "#FFFFFF"}}>
                                <span className="fw-bold">資安專題演練</span>
                                <span>主講人：MacacaHub (國立中山大學 資訊工程學系)</span>
                                <span>題目：基礎網頁安全演練</span>
                            </td>
                            <td className="p-3 text-center align-middle" style={{backgroundColor: "#FFFFFF"}}>博士廳</td>
                        </tr>
                    </tbody>
                </table>
                <table className="table table-borderless border col-md-12 shadow" cellPadding={0} cellSpacing={0}>
                    <tbody>
                        <tr className="text-white" colspan="4">
                            <td className="p-3 text-center text-white" colspan="4" style={{backgroundColor: "#F57F17"}}>2020年9月2日（星期三）</td>
                        </tr>
                        <tr className="text-black" style={{backgroundColor: "#B0BEC5"}}>
                            <td className="p-3 text-center" style={{width: "25%", backgroundColor: "#FFE082"}}>時間</td>
                            <td className="p-3 text-center" style={{width: "50%", backgroundColor: "#FFE082"}}>內容</td>
                            <td className="p-3 text-center" style={{width: "25%", backgroundColor: "#FFE082"}}>地點</td>
                        </tr>
                        <tr className="text-black">
                            <td className="p-3 text-center align-middle" style={{backgroundColor: "#FFFFFF"}}>
                                <div className="my-auto">
                                    <span>14:00-17:00</span>
                                </div>
                            </td>
                            <td className="p-3 text-center d-flex flex-column align-middle" style={{backgroundColor: "#FFFFFF"}}>
                                <span className="fw-bold">資安專題演練</span>
                                <span>主講人：MacacaHub (國立中山大學 資訊工程學系)</span>
                                <span>題目：基礎網頁安全演練</span>
                            </td>
                            <td className="p-3 text-center align-middle" style={{backgroundColor: "#FFFFFF"}}>博士廳</td>
                        </tr>
                    </tbody>
                </table>
                <table className="table table-borderless border col-md-12 shadow" cellPadding={0} cellSpacing={0}>
                    <tbody>
                        <tr className="text-white" colspan="4">
                            <td className="p-3 text-center text-white" colspan="4" style={{backgroundColor: "#F57F17"}}>2020年9月3日（星期四）</td>
                        </tr>
                        <tr className="text-black" style={{backgroundColor: "#B0BEC5"}}>
                            <td className="p-3 text-center" style={{width: "25%", backgroundColor: "#FFE082"}}>時間</td>
                            <td className="p-3 text-center" style={{width: "50%", backgroundColor: "#FFE082"}}>內容</td>
                            <td className="p-3 text-center" style={{width: "25%", backgroundColor: "#FFE082"}}>地點</td>
                        </tr>
                        <tr className="text-black">
                            <td className="p-3 text-center align-middle" style={{backgroundColor: "#FFFFFF"}}>
                                <div className="my-auto">
                                    <span>14:00-17:00</span>
                                </div>
                            </td>
                            <td className="p-3 text-center d-flex flex-column align-middle" style={{backgroundColor: "#FFFFFF"}}>
                                <span className="fw-bold">資安專題演練</span>
                                <span>主講人：MacacaHub (國立中山大學 資訊工程學系)</span>
                                <span>題目：基礎網頁安全演練</span>
                            </td>
                            <td className="p-3 text-center align-middle" style={{backgroundColor: "#FFFFFF"}}>博士廳</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}