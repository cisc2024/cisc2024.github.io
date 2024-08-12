export default function Keynote2(){
    return (
        <div className="container d-flex flex-column gap-3">
            <div className="w-100 p-5">
                <h1 className="text-center mb-5">Keynote 演講（二）細節資訊</h1>
                <h4 className="text-center">講者資訊</h4>
                <div className="d-flex flex-column flex-md-row gap-5">
                    <div className="col-12 col-md-3 d-flex flex-row justify-content-center">
                        <div className="mx-auto">
                            <img width={150} height={"auto"} src="https://sako-lab.jp/image/SakoKazue.jpg"></img>
                        </div>
                    </div>
                    <div className="col-12 col-md-9">
                        <p>講者：Prof. Kazue Sako</p>
                        <ul>
                            <li>Waseda University</li>
                        </ul>
                    </div>
                </div>
                <hr className="my-4" />
                <h4 className="text-center">議程資訊</h4>
                <p>Title: Digital Identity and Cryptography</p>
                <div>
                    <p>Abstract:</p>
                    <p>Given so many social activities on Internet, proving who you are has become an important procedure to initiate online interactions. Historically this was performed using IDs and passwords, where latter needs to be unique and long enough for each service. With development of digital signatures and zero-knowledge proofs, we can have a pair of public key and secret key that can be used as ID and password common to many services. In this talk, we will discuss about Verifiable Credentials which can be used to claim who you are, or more specifically, to claim you have sufficient attributes to receive a service you want.</p>
                    <p>Unlike paper-based credentials such as passports and driver’s license card, it can embed many privacy enhancing features using cryptography: unlinkable selective disclosure property allows you to disclose your address but not your name, and use of same credentials cannot be traced; Predicate proofs allows you to prove your age is over 20 without disclosing your exact birthdate. Efficient implementations are realized through a comparatively new digital signature primitive called BBS signatures. We will discuss how these Verifiable Credentials can improve our online experiences and yet provide trustworthy data exchange. After all, vast research results in cryptography should not only reside in papers and articles. It should be contributing to our society in real life.</p>
                </div>
            </div>
        </div>
    )
}