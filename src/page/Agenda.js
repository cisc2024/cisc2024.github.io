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
            <div className="d-flex flex-column gap-5 mb-5">
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
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <span className="fw-bold">開幕</span>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}></td>
                        </tr>
                        <tr className="text-black">
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <div className="my-auto">
                                    <span>09:50-10:40</span>
                                </div>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <span className="fw-bold">Keynote 演講（一）主講人：</span>
                                <br/>
                                <span>演講題目：</span>
                                <br/> 
                                <span>主持人：</span>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}></td>
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
                            <td className="p-3 text-center align-middle border-end border-bottom bg-body-secondary" style={{backgroundColor: "#FFFFFF"}}></td>
                        </tr>
                        <tr className="text-black">
                            {
                            // <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                            //     <div className="my-auto">
                            //         <span>11:00-11:50</span>
                            //     </div>
                            // </td>
                            // <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                            //     <span className="fw-bold">國家資安發展演講 主講人：</span>
                            //     <br/>
                            //     <span>演講題目：</span>
                            //     <br/>
                            //     <span>主持人：</span>
                            // </td>
                            // <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}></td>
                            }
                        </tr>
                        <tr className="text-black">
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <div className="my-auto">
                                    <span>11:00-11:50</span>
                                </div>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <span className="fw-bold">全國資訊安全學會會員大會</span>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}></td>
                        </tr>
                        <tr className="text-black">
                            <td className="p-3 text-center align-middle border-end border-bottom bg-body-secondary" style={{backgroundColor: "#FFFFFF"}}>
                                <div className="my-auto">
                                    <span>12:10-13:30</span>
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
                                <span className="fw-bold">產業趨勢演講（一）主講人：</span>
                                <br/>
                                <span>演講題目：</span>
                                <br/>
                                <span>主持人：</span>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}></td>
                        </tr>
                        <tr className="text-black">
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <div className="my-auto">
                                    <span>14:20-15:40</span>
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
                                                <span>密碼學與認證協定 I</span>
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
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}></td>
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
                                    <span>16:00-17:20</span>
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
                                                <span>人工智慧與機器學習安全 I</span>
                                            </td>
                                            <td className="bg-warning-subtle border border-black col-1">
                                                <span>Session B2</span>
                                                <br></br>
                                                <span>數位鑑識與惡意程式分析</span>
                                            </td>
                                            <td className="bg-success-subtle border border-black col-1">
                                                <span>Session C2</span>
                                                <br></br>
                                                <span>密碼學與認證協定 II</span>
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
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}></td>
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
            <div className="d-flex flex-column gap-5 mb-5">
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
                                <span className="fw-bold">產業趨勢演講（二）主講人：</span>
                                <br/>
                                <span>演講題目：</span>
                                <br/> 
                                <span>主持人：</span>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}></td>
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
                                <span className="fw-bold">Invited 演講（三）主講人：</span>
                                <br/>
                                <span>演講題目：</span>
                                <br/>
                                <span>主持人：</span>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}></td>
                        </tr>
                        <tr className="text-black">
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <div className="my-auto">
                                    <span>11:30-12:10</span>
                                </div>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <span className="fw-bold">賴溪松教授論文獎暨成果發表會</span>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}></td>
                        </tr>
                        <tr className="text-black">
                            <td className="p-3 text-center align-middle border-end border-bottom bg-body-secondary" style={{backgroundColor: "#FFFFFF"}}>
                                <div className="my-auto">
                                    <span>12:10-13:30</span>
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
                                    <span>13:10-13:40</span>
                                </div>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <span className="fw-bold">頒發最佳論文獎</span>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}></td>
                        </tr>
                        <tr className="text-black">
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <div className="my-auto">
                                    <span>13:40-14:50</span>
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
                                                <span>網路與多媒體安全 I</span>
                                            </td>
                                            <td className="bg-warning-subtle border border-black col-1">
                                                <span>Session B3</span>
                                                <br></br>
                                                <span>資料隱私與保護技術</span>
                                            </td>
                                            <td className="bg-success-subtle border border-black col-1">
                                                <span>Session C3</span>
                                                <br></br>
                                                <span>雲端與物聯網安全 I</span>
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
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}></td>
                        </tr>
                        <tr className="text-black">
                            <td className="p-3 text-center align-middle border-end border-bottom bg-body-secondary" style={{backgroundColor: "#FFFFFF"}}>
                                <div className="my-auto">
                                    <span>14:50-15:10</span>
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
                                    <span>15:10-15:50</span>
                                </div>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <span className="fw-bold">Keynote 演講（二）主講人：</span>
                                <br/>
                                <span>演講題目：</span>
                                <br/> 
                                <span>主持人：</span>
                            </td>
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}></td>
                        </tr>
                        <tr className="text-black">
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <div className="my-auto">
                                    <span>15:50-17:00</span>
                                </div>
                            </td>
                            <td className="p-0 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <p className="fw-bold pt-3">論文發表（四）</p>
                                <table className="table table-borderless col-md-12" cellPadding={0} cellSpacing={0}>
                                    <tbody>
                                        <tr className="w-100">
                                            <td className="bg-danger-subtle border border-black col-1">
                                                <span>Session A2</span>
                                                <br></br>
                                                <span>網路與多媒體安全 II</span>
                                            </td>
                                            <td className="bg-warning-subtle border border-black col-1">
                                                <span>Session B2</span>
                                                <br></br>
                                                <span>人工智慧與機器學習安全 II</span>
                                            </td>
                                            <td className="bg-success-subtle border border-black col-1">
                                                <span>Session C2</span>
                                                <br></br>
                                                <span>雲端與物聯網安全 II</span>
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
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}></td>
                        </tr>
                        <tr className="text-black">
                            <td className="p-3 text-center align-middle border-end border-bottom" style={{backgroundColor: "#FFFFFF"}}>
                                <div className="my-auto">
                                    <span>17:00</span>
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
