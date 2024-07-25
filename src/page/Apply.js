function Apply(){
    return (
        <div className="container">
            <div className="w-100 p-5">
                <h1 className="text-center">會議報名</h1>
            </div>
            <div className="alert alert-warning">
                <p className="fw-bold">2024-07-06：由他人代為註冊事宜（碩士班畢業生適用）</p>
                <p className="m-0">七、八月份正逢碩士班畢業期間，研討會之八月份收據恐無法讓已畢業碩士生核銷。故本會接受由他人（代理人）代為完成論文註冊，以利核銷。代理人僅需在會議報名表單之備註欄填寫「代XXX註冊」（XXX請自行填入姓名）</p>
            </div>
            <div className="mb-4">
                <h4 className="text-left py-3">線上報名</h4>
                <div className="d-flex flex-row justify-content-cneter">
                    <button className="btn btn-success w-75 mx-auto">線上報名（需使用 Google 帳號登入）</button>
                </div>
            </div>
            <div>
                <h4 className="text-left py-3">報名時程</h4>
                <table className="table table-bordered border-black text-center w-75 mx-auto">
                    <tbody>
                        <tr>
                            <td>早鳥繳費期限</td>
                            <td>即日起至 2024/08/16 00:00:00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <h4 className="text-left py-3">報名費用</h4>
                <table className="table table-bordered border-black text-center w-75 mx-auto">
                    <tbody>
                        <tr>
                            <th>票種</th>
                            <th>價格（新臺幣）</th>
                        </tr>
                        <tr>
                            <td>學生早鳥票</td>
                            <td>3,000 元</td>
                        </tr>
                        <tr>
                            <td>一般早鳥票</td>
                            <td>3,500 元</td>
                        </tr>
                        <tr>
                            <td>非早鳥票</td>
                            <td>4,000 元</td>
                        </tr>
                    </tbody>
                </table>
                <p className="py-3 text-center">報名繳費等相關訊息將於論文投稿截止日後提供。</p>
            </div>
            <div className="mb-5">
                <h4 className="text-left py-3">匯款資訊</h4>
                <p>戶名：中華民國資訊安全學會</p>
                <p>帳號：032-50-831131-1 國泰世華銀行東門分行</p>
                <p>聯絡人：郭信男代理秘書</p>
                <p>電話：07-525-0558</p>
            </div>
        </div>
    )
}

export default Apply;