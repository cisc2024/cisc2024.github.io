export default function Industry1(){
    return (
        <div className="container d-flex flex-column gap-3">
            <div className="w-100 p-5">
                <h1 className="text-center mb-5">企業系列演講細節資訊</h1>
                <h4 className="text-center">講者資訊</h4>
                <div className="d-flex flex-column flex-md-row gap-5">
                    <div className="col-12 col-md-3 d-flex flex-row justify-content-center">
                        <div className="mx-auto">
                            <img width={150} height={"auto"} src="./avatar/20220918-allenown.jpg"></img>
                        </div>
                    </div>
                    <div className="col-12 col-md-9">
                        <p>講者：翁浩正執行長（戴夫寇爾）</p>
                        <div>
                            <p>簡歷：戴夫寇爾 DEVCORE 執行長、台灣駭客協會 HITCON 理事長。具備多年駭客技術研究及資安輔導經驗，協助政府及企業化解防禦盲點，消除與攻擊方的資訊不對稱。曾任學術及政府單位專任講師及顧問，並熱衷於社群經營及分享，培育更多資安人才。專長於紅隊演練 (Red Team)、滲透測試、企業資安風險評估、專業教育訓練。</p>
                        </div>
                    </div>
                </div>
                <hr className="my-4" />
                <h4 className="text-center">議程資訊</h4>
                <p>Title: 如何善用紅隊演練應對威脅</p>
                <div></div>
            </div>
        </div>
    )
}