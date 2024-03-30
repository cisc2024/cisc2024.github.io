export default function Traffic() {
    return (
        <div className="container">
            <div className="w-100 p-5">
                <h1 className="text-center">交通資訊</h1>
                <div className="py-5">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1477.493466600399!2d121.53574375446108!3d25.04161154832524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9f80f30a4b5%3A0x7dcf9899e0f98b36!2z5ZyL56uL6Ie65YyX56eR5oqA5aSn5a245YWI6YuS5ZyL6Zqb56CU55m85aSn5qiT!5e0!3m2!1szh-TW!2stw!4v1711792151009!5m2!1szh-TW!2stw" width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="d-flex flex-column gap-4">
                    <div>
                        <h3>公車</h3>
                        <p>從「臺北火車站」、「臺北高鐵站」出發，可抵達「臺北車站（忠孝）」站牌，藉由 212、212 直、605 與忠孝幹線公車抵達「臺北科技大學（忠孝）」站牌下車，步行 1 分鐘即可抵達先鋒國際大樓。</p>
                    </div>
                    <div>
                        <h3>捷運</h3>
                        <p>從「臺北火車站」、「臺北高鐵站」出發，可從「臺北車站」捷運站，往南港展覽館方向搭乘兩站，在忠孝新生捷運站 3 號出口下車，步行 1 分鐘即可抵達先鋒國際大樓。</p>
                    </div>
                    <div>
                        <h3>高鐵</h3>
                        <p>請搭至臺北，並使用公車或捷運系統轉乘至先鋒國際大樓。</p>
                    </div>
                    <div>
                        <h3>台鐵</h3>
                        <p>請搭至臺北車站，並使用公車或捷運系統轉乘至先鋒國際大樓。</p>
                    </div>
                    <div>
                        <h3>大眾運輸工具</h3>
                        <p>本校具有 1813D、1813E、1815、1815A、1815D、1815E 站牌，請在「臺北科技大學（忠孝）」站牌下車，步行 1 分鐘即可抵達先鋒國際大樓。</p>
                        <p>對於其他大眾運輸工具，請搭乘至「臺北轉運站」後，使用捷運系統轉乘，從「臺北車站」捷運站出發，往南港展覽館方向搭乘兩站，在忠孝新生捷運站下車，從 3 號出口出站，步行 1 分鐘即可抵達先鋒國際大樓。</p>
                    </div>
                    <div>
                        <h3>自行行駛至會場</h3>
                        <p>請行駛至「106 台北市大安區忠孝東路三段46號」，本大樓設有付費地下停車場。</p>
                        <p>您也可利用以下的付費停車場進行停車：</p>
                        <table className="table table-striped table-bordered">
                            <tr>
                                <td className="p-2">名稱</td>
                                <td className="p-2">步行距離</td>
                                <td className="p-2">步行時間</td>
                                <td className="p-2">收費表</td>
                                <td className="p-2">營業時間</td>
                            </tr>
                            <tr>
                                <td>
                                    <p className="m-0">台灣聯通北科大停車場</p>
                                </td>
                                <td>
                                    <p className="m-0"><span>550</span>公尺</p>
                                </td>
                                <td>
                                    <p className="m-0"><span>7</span>分</p>
                                </td>
                                <td>
                                    <p className="m-0">平日:08:00-20:00前一小30元，第二小開始每30分後收15元，當日最高收費160元</p>
                                    <p className="m-0">假日:09:00-20:00同上</p>
                                    <p className="m-0">(備註；休旅車當日上限費用為180元)</p>
                                </td>
                                <td>
                                    <p className="m-0"><span>09:00-20:00</span></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className="m-0">美麗信酒店停車場</p>
                                </td>
                                <td>
                                    <p className="m-0"><span>550</span>公尺</p>
                                </td>
                                <td>
                                    <p className="m-0"><span>7</span>分</p>
                                </td>
                                <td>
                                    <p className="m-0">100/時</p>
                                </td>
                                <td>
                                    <p className="m-0"><span>24小時</span></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className="m-0">億光停車場</p>
                                </td>
                                <td>
                                    <p className="m-0"><span>600</span>公尺</p>
                                </td>
                                <td>
                                    <p className="m-0"><span>9</span>分</p>
                                </td>
                                <td>
                                    <p className="m-0">平日:40/時，最高收費180元 </p>
                                    <p className="m-0">例假日:50/時，最高收費220元</p>
                                </td>
                                <td>
                                    <p className="m-0"><span>24小時</span></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className="m-0">嘟嘟房建國南路 I 區</p>
                                </td>
                                <td>
                                    <p className="m-0"><span>400</span>公尺</p>
                                </td>
                                <td>
                                    <p className="m-0"><span>6</span>分</p>
                                </td>
                                <td>
                                    <p className="m-0">07:30-21:30前2小時每30分15元，第3小時候每30分20元</p>
                                    <p className="m-0">21:30至隔日07:30免費</p>
                                </td>
                                <td>
                                    <p className="m-0"><span>24小時</span></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className="m-0">大愛停車場</p>
                                </td>
                                <td>
                                    <p className="m-0"><span>350</span>公尺</p>
                                </td>
                                <td>
                                    <p className="m-0"><span>5</span>分</p>
                                </td>
                                <td>
                                    <p className="m-0">平日:每5小時100元，每24小時最高收費200元</p>
                                    <p className="m-0">例假日:每4小時100元，每24小時最高收費200元</p>
                                </td>
                                <td>
                                    <p className="m-0"><span>24小時</span></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className="m-0">嘟嘟房仁愛帝寶站</p>
                                </td>
                                <td>
                                    <p className="m-0"><span>500</span>公尺</p>
                                </td>
                                <td>
                                    <p className="m-0"><span>7</span>分</p>
                                </td>
                                <td>
                                    <p className="m-0">平日:40/時，每日最高收費200元</p>
                                    <p className="m-0">例假日:60/時，每日最高收費300元</p>
                                </td>
                                <td>
                                    <p className="m-0"><span>24小時</span></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className="m-0">良友八德停車場</p>
                                </td>
                                <td>
                                    <p className="m-0"><span>550</span>公尺</p>
                                </td>
                                <td>
                                    <p className="m-0"><span>7</span>分</p>
                                </td>
                                <td>
                                    <p className="m-0">60/時，每日最高收費250元</p>
                                </td>
                                <td>
                                    <p className="m-0"><span>24小時</span></p>
                                </td>
                            </tr>
                        </table>
                        <p>對於其他停車資訊，可見<a href="https://optic2020.conf.tw/site/page.aspx?pid=517&sid=1350&lang=en" target="_blank">此處</a></p>
                    </div>
                    <div>
                        <h3>航空</h3>
                        <p>請至松山機場（TSA）下機並搭乘計程車，車資約為 200 至 250 新台幣。</p>
                    </div>
                </div>
            </div>
        </div>
    )
}