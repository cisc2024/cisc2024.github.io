export default function Agenda(){
    return (
        <div className="container d-flex flex-column gap-3">
            <div className="w-100 p-5">
                <h1 className="text-center">會議議程</h1>
            </div>
            {/* <div className="alert alert-warning d-flex flex-column gap-3">
                <h4 className="fw-bold text-center">論文發表規則</h4>
                <span className="text-center">每人發表時間 ？ 分鐘 、？ 分鐘舉牌提醒、？ 分鐘按鈴提醒、？ 分鐘由主持人提問。</span>
            </div> */}
            <div className="w-100 gap-5 mb-5 overflow-auto">
                <table className="table table-borderless col-md-12 shadow" cellPadding={0} cellSpacing={0}>
                    <tbody>
                        <tr className="text-white" colspan="4">
                            <td className="p-3 text-center text-white" colspan="4" style={{backgroundColor: "#F57F17"}}>2024 年 8 月 29 日（星期四）</td>
                        </tr>
                        <tr className="text-black" style={{backgroundColor: "#B0BEC5"}}>
                            <th scope="col" className="p-3 text-center col-2" style={{backgroundColor: "#FFE082"}}>時間</th>
                            <th scope="col" className="p-3 text-center col-3" style={{backgroundColor: "#FFE082"}}>內容</th>
                            <th scope="col" className="p-3 text-center col-2" style={{backgroundColor: "#FFE082"}}>地點</th>
                        </tr>
                        <tr className="text-black">
                            <td className="p-3 text-center align-middle border-end border-bottom col-2" style={{backgroundColor: "#FFFFFF"}}>
                                <div className="my-auto">
                                    <span>09:00-09:30</span>
                                </div>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom col-3" style={{backgroundColor: "#FFFFFF"}}>
                                <div>
                                    <span className="fw-bold">報到</span>
                                </div>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom col-2" style={{backgroundColor: "#FFFFFF"}}>
                                <div>
                                    <span></span>
                                </div>
                            </td>
                        </tr>
                        <tr className="text-black">
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <div className="my-auto">
                                    <span>09:30-09:50</span>
                                </div>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom d-flex flex-column" style={{backgroundColor: "#FFFFFF"}}>
                                <span className="fw-bold">開幕：王錫福 校長（國立臺北科技大學）</span>
                                <span className="fw-bold">范俊逸 理事長（資訊安全學會）</span>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <span>先鋒科技大樓</span>
                                <br/>
                                <span>國際會議廳</span>
                            </td>
                        </tr>
                        <tr className="text-black">
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <div className="my-auto">
                                    <span>09:50-10:40</span>
                                </div>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <span className="fw-bold">Keynote 演講（一）主講人：謝續平 終身講座教授（國立陽明交通大學）</span>
                                <br/>
                                <span>演講題目：</span>
                                <br/> 
                                <span>主持人：范俊逸 理事長</span>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom text-nowrap" style={{backgroundColor: "#FFFFFF"}}>
                                <span>先鋒科技大樓</span>
                                <br/>
                                <span>國際會議廳</span>
                            </td>
                        </tr>
                        <tr className="text-black">
                            <td className="p-3 text-center align-middle border-end border-bottom bg-body-secondary" style={{backgroundColor: "#FFFFFF"}}>
                                <div className="my-auto">
                                    <span>10:40-11:00</span>
                                </div>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom bg-body-secondary" style={{backgroundColor: "#FFFFFF"}}>
                                <span className="fw-bold">茶會</span>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom bg-body-secondary"></td>
                        </tr>
                        <tr className="text-black">
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <div className="my-auto">
                                    <span>11:00-12:30</span>
                                </div>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <span className="fw-bold">全國資訊安全學會會員大會暨賴溪松論文獎頒獎</span>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <span>先鋒科技大樓</span>
                                <br/>
                                <span>國際會議廳</span>
                            </td>
                        </tr>
                        <tr className="text-black">
                            <td className="p-3 text-center align-middle border-end border-bottom bg-body-secondary" style={{backgroundColor: "#FFFFFF"}}>
                                <div className="my-auto">
                                    <span>12:30-13:30</span>
                                </div>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom bg-body-secondary" style={{backgroundColor: "#FFFFFF"}}>
                                <span className="fw-bold">午餐</span>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom bg-body-secondary" style={{backgroundColor: "#FFFFFF"}}></td>
                        </tr>
                        <tr className="text-black">
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <div className="my-auto">
                                    <span>13:30-14:20</span>
                                </div>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <span className="fw-bold">產業趨勢演講 主講人：翁浩正 執行長（戴夫寇爾）</span>
                                <br/>
                                <span>演講題目：</span>
                                <br/>
                                <span>主持人：陳昱圻</span>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <span>先鋒科技大樓</span>
                                <br/>
                                <span>國際會議廳</span>
                            </td>
                        </tr>
                        <tr className="text-black">
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <div className="my-auto">
                                    <span>14:20-15:40</span>
                                    <br/>
                                    <span>(80 mins)</span>
                                </div>
                            </td>
                            <td className="p-0 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <p className="fw-bold pt-3">論文發表（一）</p>
                                <table className="table table-borderless col-md-12" cellPadding={0} cellSpacing={0}>
                                    <tbody>
                                        <tr className="w-100">
                                            <td className="bg-danger-subtle border border-black col-1">
                                                <span>Session A1</span>
                                                <br></br>
                                                <span>最佳論文評選</span>
                                            </td>
                                            <td className="bg-warning-subtle border border-black col-1">
                                                <span>Session B1</span>
                                                <br></br>
                                                <span>最佳學生論文評選</span>
                                            </td>
                                            <td className="bg-success-subtle border border-black col-1">
                                                <span>Session C1</span>
                                                <br></br>
                                                <span>軟體安全</span>
                                            </td>
                                            <td className="bg-success-subtle border border-black col-1">
                                                <span>Session D1</span>
                                                <br></br>
                                                <span>閃電講</span>
                                            </td>
                                        </tr>
                                        <tr className="w-100">
                                            <td className="bg-danger-subtle border border-black col-1">
                                                <br></br>
                                            </td>
                                            <td className="bg-warning-subtle border border-black col-1">
                                                <br></br>
                                            </td>
                                            <td className="bg-success-subtle border border-black col-1">
                                                <br></br>
                                            </td>
                                            <td className="bg-success-subtle border border-black col-1">
                                                <br></br>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <span>先鋒科技大樓</span>
                            </td>
                        </tr>
                        <tr className="text-black">
                            <td className="p-3 text-center align-middle border-end border-bottom bg-body-secondary" style={{backgroundColor: "#FFFFFF"}}>
                                <div className="my-auto">
                                    <span>15:40-16:00</span>
                                </div>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom bg-body-secondary" style={{backgroundColor: "#FFFFFF"}}>
                                <span className="fw-bold">茶會</span>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom bg-body-secondary" style={{backgroundColor: "#FFFFFF"}}></td>
                        </tr>
                        <tr className="text-black">
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <div className="my-auto">
                                    <span>16:00-17:30</span>
                                    <br/>
                                    <span>(90 mins)</span>
                                </div>
                            </td>
                            <td className="p-0 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <p className="fw-bold pt-3">論文發表（二）</p>
                                <table className="table table-borderless col-md-12" cellPadding={0} cellSpacing={0}>
                                    <tbody>
                                        <tr className="w-100">
                                            <td className="bg-danger-subtle border border-black col-1">
                                                <span>Session A2</span>
                                                <br></br>
                                                <span>密碼學</span>
                                            </td>
                                            <td className="bg-warning-subtle border border-black col-1">
                                                <span>Session B2</span>
                                                <br></br>
                                                <span>網路安全</span>
                                            </td>
                                            <td className="bg-success-subtle border border-black col-1">
                                                <span>Session C2</span>
                                                <br></br>
                                                <span>資安檢測</span>
                                            </td>
                                            <td className="bg-success-subtle border border-black col-1">
                                                <span>Session D2</span>
                                                <br></br>
                                                <span>閃電講</span>
                                            </td>
                                        </tr>
                                        <tr className="w-100">
                                            <td className="bg-danger-subtle border border-black col-1">
                                                <br></br>
                                            </td>
                                            <td className="bg-warning-subtle border border-black col-1">
                                                <br></br>
                                            </td>
                                            <td className="bg-success-subtle border border-black col-1">
                                                <br></br>
                                            </td>
                                            <td className="bg-success-subtle border border-black col-1">
                                                <br></br>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <span>先鋒科技大樓</span>
                            </td>
                        </tr>
                        <tr className="text-black">
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <div className="my-auto">
                                    <span>18:00-20:00</span>
                                </div>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <span className="fw-bold">晚宴</span>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="d-flex flex-column gap-5 mb-5 overflow-auto">
                <table className="table table-borderless col-md-12 shadow" cellPadding={0} cellSpacing={0}>
                    <tbody>
                        <tr className="text-white" colspan="4">
                            <td className="p-3 text-center text-white" colspan="4" style={{backgroundColor: "#F57F17"}}>2024 年 8 月 30 日（星期五）</td>
                        </tr>
                        <tr className="text-black" style={{backgroundColor: "#B0BEC5"}}>
                            <th scope="col" className="p-3 text-center col-2" style={{backgroundColor: "#FFE082"}}>時間</th>
                            <th scope="col" className="p-3 text-center col-3" style={{backgroundColor: "#FFE082"}}>內容</th>
                            <th scope="col" className="p-3 text-center col-2" style={{backgroundColor: "#FFE082"}}>地點</th>
                        </tr>
                        <tr className="text-black">
                            <td className="p-3 text-center align-middle border-end border-bottom col-2" style={{backgroundColor: "#FFFFFF"}}>
                                <div className="my-auto">
                                    <span>09:00-09:30</span>
                                </div>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom col-3" style={{backgroundColor: "#FFFFFF"}}>
                                <div>
                                    <span className="fw-bold">報到</span>
                                </div>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom col-2" style={{backgroundColor: "#FFFFFF"}}>
                                <div>
                                    <span></span>
                                </div>
                            </td>
                        </tr>
                        <tr className="text-black">
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <div className="my-auto">
                                    <span>09:30-10:20</span>
                                </div>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <span className="fw-bold">Keynote 演講（二）主講人：Prof. Kazue Sako (早稻田大學)</span>
                                <br/>
                                <span>演講題目：</span>
                                <br/> 
                                <span>主持人：左瑞麟 教授</span>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom text-nowrap" style={{backgroundColor: "#FFFFFF"}}>
                                <span>先鋒科技大樓</span>
                                <br/>
                                <span>國際會議廳</span>
                            </td>
                        </tr>
                        <tr className="text-black">
                            <td className="p-3 text-center align-middle border-end border-bottom bg-body-secondary" style={{backgroundColor: "#FFFFFF"}}>
                                <div className="my-auto">
                                    <span>10:20-10:40</span>
                                </div>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom bg-body-secondary" style={{backgroundColor: "#FFFFFF"}}>
                                <span className="fw-bold">茶會</span>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom bg-body-secondary" style={{backgroundColor: "#FFFFFF"}}></td>
                        </tr>
                        <tr className="text-black">
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <div className="my-auto">
                                    <span>10:40-11:30</span>
                                </div>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <span className="fw-bold">Invited 演講（一）主講人：Srinivas Shekar (Pantherun Technologies)</span>
                                <br/>
                                <span>演講題目：</span>
                                <br/>
                                <span>主持人：陳昱圻</span>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <span>先鋒科技大樓</span>
                                <br/>
                                <span>國際會議廳</span>
                            </td>
                        </tr>
                        <tr className="text-black">
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <div className="my-auto">
                                    <span>11:30-12:00</span>
                                </div>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom d-flex flex-column" style={{backgroundColor: "#FFFFFF"}}>
                                <span className="fw-bold">企業系列演講</span>
                                <span className="fw-bold">安華聯網</span>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <span>先鋒科技大樓</span>
                                <br/>
                                <span>國際會議廳</span>
                            </td>
                        </tr>
                        <tr className="text-black">
                            <td className="p-3 text-center align-middle border-end border-bottom bg-body-secondary" style={{backgroundColor: "#FFFFFF"}}>
                                <div className="my-auto">
                                    <span>12:00-13:00</span>
                                </div>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom bg-body-secondary" style={{backgroundColor: "#FFFFFF"}}>
                                <span className="fw-bold">午餐</span>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom bg-body-secondary" style={{backgroundColor: "#FFFFFF"}}></td>
                        </tr>
                        <tr className="text-black">
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <div className="my-auto">
                                    <span>13:00-14:30</span>
                                    <br/>
                                    <span>(90 min)</span>
                                </div>
                            </td>
                            <td className="p-0 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <p className="fw-bold pt-3">論文發表（三）</p>
                                <table className="table table-borderless col-md-12" cellPadding={0} cellSpacing={0}>
                                    <tbody>
                                        <tr className="w-100 overflow-auto">
                                            <td className="bg-danger-subtle border border-black col-1">
                                                <span>Session A3</span>
                                                <br></br>
                                                <span>區塊鏈</span>
                                            </td>
                                            <td className="bg-warning-subtle border border-black col-1">
                                                <span>Session B3</span>
                                                <br></br>
                                                <span>AI 安全與情資</span>
                                            </td>
                                            <td className="bg-success-subtle border border-black col-1">
                                                <span>Session C3</span>
                                                <br></br>
                                                <span>零信任與身份認證</span>
                                            </td>
                                            <td className="bg-success-subtle border border-black col-1">
                                                <span>Session D3</span>
                                                <br></br>
                                                <span>閃電講</span>
                                            </td>
                                        </tr>
                                        <tr className="w-100">
                                            <td className="bg-danger-subtle border border-black col-1">
                                                <br></br>
                                            </td>
                                            <td className="bg-warning-subtle border border-black col-1">
                                                <br></br>
                                            </td>
                                            <td className="bg-success-subtle border border-black col-1">
                                                <br></br>
                                            </td>
                                            <td className="bg-success-subtle border border-black col-1">
                                                <br></br>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <span>先鋒科技大樓</span>
                            </td>
                        </tr>
                        <tr className="text-black">
                            <td className="p-3 text-center align-middle border-end border-bottom bg-body-secondary" style={{backgroundColor: "#FFFFFF"}}>
                                <div className="my-auto">
                                    <span>14:30-14:50</span>
                                </div>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom bg-body-secondary" style={{backgroundColor: "#FFFFFF"}}>
                                <span className="fw-bold">茶會</span>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom bg-body-secondary" style={{backgroundColor: "#FFFFFF"}}></td>
                        </tr>
                        <tr className="text-black">
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <div className="my-auto">
                                    <span>14:50-15:40</span>
                                </div>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <span className="fw-bold">企業系列演講</span>
                                <br/>
                                <span className="fw-bold">亞利安、果核</span>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <span>先鋒科技大樓</span>
                                <br/>
                                <span>國際會議廳</span>
                            </td>
                        </tr>
                        <tr className="text-black">
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <div className="my-auto">
                                    <span>15:50-17:10</span>
                                    <br/>
                                    <span>(90 min)</span>
                                </div>
                            </td>
                            <td className="p-0 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <p className="fw-bold pt-3">論文發表（四）</p>
                                <table className="table table-borderless col-md-12" cellPadding={0} cellSpacing={0}>
                                    <tbody>
                                        <tr className="w-100">
                                            <td className="bg-danger-subtle border border-black col-1">
                                                <span>Session A4</span>
                                                <br></br>
                                                <span>關鍵基礎建設</span>
                                            </td>
                                            <td className="bg-warning-subtle border border-black col-1">
                                                <span>Session B4</span>
                                                <br></br>
                                                <span>多媒體安全</span>
                                            </td>
                                            <td className="bg-success-subtle border border-black col-1">
                                                <span>Session C4</span>
                                                <br></br>
                                                <span>隱私技術與其他</span>
                                            </td>
                                        </tr>
                                        <tr className="w-100">
                                            <td className="bg-danger-subtle border border-black col-1">
                                                <br></br>
                                            </td>
                                            <td className="bg-warning-subtle border border-black col-1">
                                                <br></br>
                                            </td>
                                            <td className="bg-success-subtle border border-black col-1">
                                                <br></br>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <span>先鋒科技大樓</span>
                            </td>
                        </tr>
                        <tr className="text-black">
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <div className="my-auto">
                                    <span>17:10</span>
                                </div>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <span className="fw-bold">賦歸</span>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
