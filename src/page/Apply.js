function Apply(){
    return (
        <div className="container">
            <div className="w-100 p-5">
                <h1 className="text-center">會議報名</h1>
            </div>
            <div className="mb-5">
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
        </div>
    )
}

export default Apply;