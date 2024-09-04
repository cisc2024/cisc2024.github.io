export default function Images(){
    return (
        <div className="container d-flex flex-column gap-3">
            <div className="w-100 p-5">
                <h1 className="text-center mb-5">Day 1 大合照</h1>
                <div className="w-100 d-flex flex-column gap-3">
                    <div className="w-100 d-flex flex-row gap-3">
                        <img src="S__44736541.jpg" className="w-50" alt="image1"></img>
                        <img src="S__44736543.jpg" className="w-50" alt="image2"></img>
                    </div>
                    <div className="w-100 d-flex flex-row gap-3">
                        <img src="S__44736544.jpg" className="w-50" alt="image3"></img>
                        <img src="S__44736545.jpg" className="w-50" alt="image4"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}